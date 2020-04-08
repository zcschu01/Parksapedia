using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using ParksapediaAPI.Models;

namespace ParksapediaAPI.Controllers
{
    public class ParksController : ApiController
    {
        // GET: api/Parks
        [Route("api/Parks")]
        [HttpGet]
        public IEnumerable<string> Get()
        {
            // return new string[] { "Acadia", "Montana" };

            Park park = new Park();
            using (NationalParkContext ctx = new NationalParkContext())
            {

                park = ctx.Park.Where(p => p.Park1 == "Hawaii Volcanoes National Park").FirstOrDefault();
            }

            return new string[] { park.Park1, park.Camping };

        }

        // GET: api/Parks/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Parks
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Parks/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Parks/5
        public void Delete(int id)
        {
        }
    }
}
