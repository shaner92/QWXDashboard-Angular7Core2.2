using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;

namespace QWXDashboard.Controllers
{
    public class DataAccess
    {
        DataAccessInterface da;

        public DataAccess(DataAccessInterface da)
        {
            this.da = da;
        }

        public string ReadPartHistory(string sn)
        {
            return da.ReadPartHistory(sn);
        }
    }
}
