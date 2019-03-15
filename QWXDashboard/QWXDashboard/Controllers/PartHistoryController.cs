using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Web;

namespace QWXDashboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PartHistoryController : ControllerBase
    {
       
        [HttpGet("[action]")]
        public string data()
        {

            PartHistory ph = new PartHistory();
            ph.SerialNumber = "1234";
            ph.status = "fail";
            string output = JsonConvert.SerializeObject(ph);



            //var test = new List<Station>();
            ////test.Add(new PartHistory { SerialNumber = DataMapz});
            //using (var client = new SqlConnection(""))
            //{
            //    client.ConnectionString = "data source=SHANER-WIND; initial catalog=QWX_SPH_TEST; integrated security=SSPI";
            //    client.Open();
            //    SqlCommand cmd = new SqlCommand("Select label from PART", client);
            //    using (var reader = cmd.ExecuteReader())

            //        while (reader.Read())
            //        {
            //            test.Add(new Station {label = reader.GetString(0) });
            //        }

            //};
            return output;
        }
           

    }


        }

        public class PartHistory
        {
        public string SerialNumber { get; set; }
        public string status { get; set; } 
        }

    