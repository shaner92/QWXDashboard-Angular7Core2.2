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


        //[HttpPost("[action]")]
        //public string Post([FromBody] SerialNumber obj)
        //{
        //   // //string myObj = obj.SN;
        //   // //var json = myObj.ToJson(new MongoDB.Bson.IO.JsonWriterSettings { Indent = true });
        //   // var json = da.ReadPartHistory(obj.SN);
        //   //// var json = phList.ToJson(new MongoDB.Bson.IO.JsonWriterSettings { Indent = true });

        //   // return json;
        //}

    }
}


