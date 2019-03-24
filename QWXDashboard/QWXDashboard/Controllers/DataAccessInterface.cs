using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MongoDB.Bson;


namespace QWXDashboard.Controllers
{
    public interface DataAccessInterface
    {
        string ReadPartHistory(string sn);
        

    }
       
}