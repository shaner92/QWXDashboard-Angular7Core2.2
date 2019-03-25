using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc;


namespace QWXDashboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppConfigController : ControllerBase
    {
        private readonly AppConfig appsettings;

        public AppConfigController(IOptions<AppConfig> appsettings)
        {
            this.appsettings = appsettings.Value;
        }
        [HttpGet("[action]")]
        public string GetConnectionType()
        {
            return this.appsettings.ConnectionType;
        }

        [HttpPost("[action]")]
        public void SetConnectionType(string connectiontype)
        {
            this.appsettings.ConnectionType = connectiontype;
        }


    }
}
