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
    public class PartHistoryController : ControllerBase
    {
        private DataAccess da = new DataAccess();
        private List<BsonDocument> phList = new List<BsonDocument>();

        [HttpGet("[action]")]
        public string Get()
        {
     
          phList = da.ReadAsync();
          var json = phList.ToJson(new MongoDB.Bson.IO.JsonWriterSettings { Indent = true });
            //Console.WriteLine(phList);
         // string output = JsonConvert.SerializeObject(phList);
            //var test = new PartHistory();
            //test.Add(new PartHistory { SerialNumber = DataMapz});
            //using (var client = new SqlConnection(""))
            //{
            //    client.ConnectionString = "data source=SHANER-WIND; initial catalog=QWX_SPH_TEST; integrated security=SSPI";
            //    client.Open();
            //    SqlCommand cmd = new SqlCommand("Select label from PART FOR JSON_AUTO", client);
            //    using (var reader = cmd.ExecuteReader())
            //        while (reader.Read())
            //        {
            //            //ph.SerialNumber = reader.GetString(0);
            //        }

            //};

            
            return json;
        }
           

    }
}

 

    