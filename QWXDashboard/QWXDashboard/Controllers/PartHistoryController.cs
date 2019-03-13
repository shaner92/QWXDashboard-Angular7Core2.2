using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace QWXDashboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PartHistoryController : ControllerBase
    {
       
        [HttpGet("[action]")]
        public List<PartHistory> data()
        {

            //return Enumerable.Range(1, 5).Select(index => new PartHistory
            //{
            //    SerialNumber = "test"
            //});
            //IEnumerable<PartHistory> test = new IEnumerable<PartHistory>();
            var test = new List<PartHistory>();

            using (var client = new SqlConnection(""))
            {
                client.ConnectionString = "data source=SHANER-WIND; initial catalog=QWX_SPH_TEST; integrated security=SSPI";
                client.Open();
                SqlCommand cmd = new SqlCommand("Select label from PART", client);
                using (var reader = cmd.ExecuteReader())
                    while (reader.Read())
                    {
                        test.Add(new PartHistory { SerialNumber = reader.GetString(0) });
                    }

            };

            return test;
                
        }
   

    }


        }

        public class PartHistory
        {
            public string SerialNumber { get; set; }
           


}
