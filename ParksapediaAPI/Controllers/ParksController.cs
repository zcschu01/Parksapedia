using ParksapediaAPI.Classes;
using ParksapediaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace ParksapediaAPI.Controllers
{
    public class ParksController : ApiController
    {
        // GET: api/Parks
        [Route("api/GetParks")]
        [HttpGet]
        public IEnumerable<string> Get()
        {
            Park park = new Park();
            using (NationalParkContext ctx = new NationalParkContext())
            {

                park = ctx.Park.Where(p => p.Park1 == "Hawaii Volcanoes National Park").FirstOrDefault();
            }

            return new string[] { park.Park1, park.Camping };

        }

        [Route("api/SendForm")]
        [HttpPost]
        public List<Park> Post([FromBody]Form form)
        {

            var reg = form.region;

            //narrow list of parks by region
            List<string> parksToUse = new List<string>();
            using (NationalParkContext ctx = new NationalParkContext())
            {

                var parksInRegion = ctx.Region.Where(r => r.Region1 == reg).ToList();

                foreach (var p in parksInRegion)
                {
                    parksToUse.Add(p.ParkName);
                }
            }
            //dog friendly, lodging and campgrounds - in the parks table
            List<string> parkContraints = new List<string>();
            using (NationalParkContext ctx = new NationalParkContext())
            {
                var camping = "no";
                var lodging = "no";
                var dogs = "no";
                if (form.campgrounds)
                {
                    camping = "yes";
                }
                if (form.lodging)
                {
                    lodging = "yes";
                }
                if (form.park_dog_friendly)
                {
                    dogs = "yes";
                }


                var parks = ctx.Park.Where(r => (r.DogFriendly == dogs) || (r.DogFriendly == "restricted areas") && (r.Lodging == lodging) && (r.Camping == camping)).ToList();

                foreach (var p in parks)
                {
                    parkContraints.Add(p.Park1);
                }
            }

            var regionAndContraints = parksToUse.Union(parkContraints);

            List<string> landscapeParks = new List<string>();
            ///narrow list of parks by landscape

            using (NationalParkContext ctx = new NationalParkContext())
            {
                foreach (var l in form.landscapes)
                {
                    var parksPerLandscape = ctx.Landscape.Where(r => r.Landscape1 == l).ToList();

                    foreach (var lc in parksPerLandscape)
                    {
                        landscapeParks.Add(lc.ParkName);
                    }
                }
            }

            var regionAndLandscapesAndContraints = regionAndContraints.Union(landscapeParks);

            List<string> parksByPlant = new List<string>();
            //narrow list of parks by plants
            using (NationalParkContext ctx = new NationalParkContext())
            {
                foreach (var p in form.plants)
                {
                    var parksPerPlantTag = ctx.Plant.Where(r => r.Tag == p).ToList();

                    foreach (var pt in parksPerPlantTag)
                    {
                        parksByPlant.Add(pt.ParkName);
                    }
                }
            }

            var regionAndLandscapesAndContraintsAndPlants = regionAndLandscapesAndContraints.Union(parksByPlant);

            //narrow list of parks by wildlife
            List<string> parksByWildlife = new List<string>();
            //narrow list of parks by plants
            using (NationalParkContext ctx = new NationalParkContext())
            {
                foreach (var w in form.wildlife)
                {
                    var parksPerWildlifeTag = ctx.Wildlife.Where(r => r.Tag == w).ToList();

                    foreach (var pt in parksPerWildlifeTag)
                    {
                        parksByWildlife.Add(pt.ParkName);
                    }
                }
            }
            var regionAndLandscapesAndContraintsAndPlantsAndWildlife = regionAndLandscapesAndContraintsAndPlants.Union(parksByWildlife);


            List<Park> parkList = new List<Park>();

            using (NationalParkContext ctx = new NationalParkContext())
            {
                foreach (var p in regionAndLandscapesAndContraintsAndPlantsAndWildlife)
                {
                    var parkInfo = ctx.Park.Where(x => x.Park1 == p).FirstOrDefault();
                    parkList.Add(parkInfo);
                }


            }
            return parkList;

        }
    }
}