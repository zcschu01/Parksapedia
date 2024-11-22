import type { ParkData } from '~/models/park';

export const useParkStore = defineStore('park', {
  state: () => {
    return {
      parks: [] as Array<ParkData>
    }
  },
  getters: {
    getParks: (state): Array<string> => state.parks.map((park: ParkData) => park.fullName),
  },
  actions: {
    setParks(parks: Array<ParkData>) {
      this.parks = parks
    }
  },
})