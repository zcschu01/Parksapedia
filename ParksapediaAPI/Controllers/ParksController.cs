using System.Collections.Generic;
using System.Web.Http;
using ParksapediaAPI.Classes;

namespace ParksapediaAPI.Controllers
{
    public class ParksController : ApiController
    {
        // GET: api/Parks
        [Route("api/Parks")]
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Acadia", "Montana" };
        }

        //POST: api/GetParks
        [Route("api/GetParks")]
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
