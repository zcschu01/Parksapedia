import { Park, ParkData } from '~/models/park'
import nationalParksList from '~/server/json/national_parks_list.json'

export default defineEventHandler(async (event) => {
  let nationalParks: ParkData[] = nationalParksList

  if (nationalParks) {
    return nationalParks
  }

  const config = useRuntimeConfig(event)
  const apiKey = config.NPS_API_KEY

  const npsData: Park = await $fetch('https://developer.nps.gov/api/v1/parks', {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey
    },
    query: {
      limit: 600,
      fields: 'images'
    }
  })

  // American Samoa does not have a designation. Need to search for its name specifically...
  // Redwood is considered a National and State Park. Need to search for its name specifically...
  // Denali, Gates, Glacier Bay, Sand Dunes, Katmai, Lake Clark, New River Gorge are National Park & Preserve
  // Kings Canyon and Sequioa are lumped together as National Parks with an 's'

  nationalParks = npsData.data.filter((park) =>
    park.designation === 'National Park' ||
    park.designation === 'National Park & Preserve' ||
    park.designation === 'National Parks' ||
    park.parkCode === 'npsa' || // American Samoa
    park.parkCode === 'redw' // Redwood
  )

  return nationalParks
})