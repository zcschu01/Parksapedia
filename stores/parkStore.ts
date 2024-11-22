import type { ParkData } from '~/models/park';
import nationalParksList from '~/server/json/national_parks_list.json';

export const useParkStore = defineStore('park', {
  state: () => {
    return {
      parks: [] as Array<ParkData>
    }
  },
  getters: {
    getParks: (state): Array<string> => {
      const nationalParks: ParkData[] = nationalParksList.parks;
      return state.parks.length ? state.parks.map((park: ParkData) => park.fullName) : nationalParks.map((park: ParkData) => park.fullName) 
    }
  },
  actions: {
    setParks(parks: Array<ParkData>) {
      this.parks = parks
    }
  },
})