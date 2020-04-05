using System.Collections.Generic;
using System.Web.Http;

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
