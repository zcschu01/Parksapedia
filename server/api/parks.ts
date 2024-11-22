import { isToday } from 'date-fns/isToday';
import type { Park, ParkData } from '~/models/park';
import nationalParksList from '~/server/json/national_parks_list.json';

export default defineEventHandler(async (event) => {
  const timestamp = nationalParksList.timestamp;
	let nationalParks: ParkData[] = nationalParksList.parks;

  // Get the data from the cache if it's the same day
	if (isToday(timestamp) && nationalParks) {
		return nationalParks;
	}

	const config = useRuntimeConfig(event);
	const apiKey = config.NPS_API_KEY;

	const npsData: Park = await $fetch('https://developer.nps.gov/api/v1/parks', {
		method: 'GET',
		headers: {
			'X-Api-Key': apiKey,
		},
		query: {
			limit: 600,
			fields: 'images',
		},
	});

	// American Samoa does not have a designation. Need to search for its name specifically...
	// Redwood is considered a National and State Park. Need to search for its name specifically...
	// Denali, Gates, Glacier Bay, Sand Dunes, Katmai, Lake Clark, New River Gorge are National Park & Preserve
	// Kings Canyon and Sequioa are lumped together as National Parks with an 's'

	nationalParks = npsData.data.filter(
		(park) =>
			park.designation === 'National Park' ||
			park.designation === 'National Park & Preserve' ||
			park.designation === 'National Parks' ||
			park.parkCode === 'npsa' || // American Samoa
			park.parkCode === 'redw' // Redwood
	);

	const jsonObj = {
		timestamp: Date.now(),
		parks: nationalParks,
	};

	const fs = await import('fs');
	fs.writeFile(
		'server/json/national_parks_list.json',
		JSON.stringify(jsonObj),
		(err) => dataHandler(err, jsonObj)
	);
});

const dataHandler = (
	error: any,
	jsonObj: { timestamp: number; parks: ParkData[] }
) => {
	if (error) {
		console.error('Error writing file', error);
		return jsonObj.parks;
	}
  console.log('File written successfully');
  return jsonObj.parks;
};
