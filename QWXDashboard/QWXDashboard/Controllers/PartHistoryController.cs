using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace QWXDashboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PartHistoryController : ControllerBase
    {
        private DataAccess da =  new DataAccess(new MongoDBAccess());
        
        public PartHistoryController()
        {
            //if ()
            //{
            //    da = new DataAccess(new MongoDBAccess());
            //}
            //else if ()
            //{
            //    da = new DataAccess(new SQLDataAccess());
            //}
        }
        //[HttpGet("[action]")]
        //public string Get()
        //}

        [HttpPost("[action]")]
        public Task<string> Post([FromBody] SerialNumber obj)
        {
            var json = da.ReadPartHistory(obj.SN);
            return json;
        }

    }
}
public class SerialNumber
{
    public string SN;

}

