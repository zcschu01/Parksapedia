using ParksapediaAPI.Classes;
using ParksapediaAPI.Models;
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
        public bool Post([FromBody]Form form)
        {
            if (form.landscapes != null &&
                form.plants != null &&
                form.region != null &&
                form.wildlife != null)
                return true;
            else
                return false;
        }
    }
}
