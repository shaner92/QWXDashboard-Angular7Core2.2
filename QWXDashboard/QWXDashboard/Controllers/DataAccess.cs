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

        public async Task<string> ReadPartHistory(string sn)
        {
            return await da.ReadPartHistory(sn);
        }
    }
}
