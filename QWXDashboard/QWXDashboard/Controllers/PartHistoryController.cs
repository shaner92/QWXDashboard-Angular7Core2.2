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
        //private DataAccess da = new DataAccess();
        private List<PartHistory> phList = new List<PartHistory>();
        [HttpGet("[action]")]
        public string Get()
        {
            //da.InsertAsync();
          
            for (int i = 0; i < 10; i++)
            {
                PartHistory ph = new PartHistory();
                ph.SerialNumber = i.ToString();
                phList.Add(ph);
            }
           
            //ph.status = "fail";
            string output = JsonConvert.SerializeObject(phList);
            //"Applications: { Calendar: app, Chrome: app, Webstorm: app}" );



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

            
            return output;
        }
           

    }


        }

        public class PartHistory
        {
        public string SerialNumber { get; set; }
        //public string status { get; set; } 
        }

    