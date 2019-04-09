using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MongoDB.Bson;
using System.Threading.Tasks;


namespace QWXDashboard.Controllers
{
    public interface DataAccessInterface
    {
        Task<string> ReadPartHistory(string sn);
        Task<string> ReadFailureReport();

    }
       
}