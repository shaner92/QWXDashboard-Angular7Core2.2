using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Web;
using MongoDB.Bson;
using MongoDB.Driver;

namespace QWXDashboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FailureReportController : ControllerBase
    {
        private DataAccess da =  new DataAccess(new MongoDBAccess());
        
        public FailureReportController()
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


        [HttpPost("[action]")]
        public Task<string> Post(string obj)
        {
            var json = da.ReadFailureReport();

            return json;
        }
    }
}


