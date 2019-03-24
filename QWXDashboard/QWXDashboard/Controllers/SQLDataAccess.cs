using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QWXDashboard.Controllers
{
    public class SQLDataAccess : DataAccessInterface
    {

        const string connectionString = "mongodb://qwxadmin:QualityW0rX@cluster0-shard-00-00-o4tcb.mongodb.net:27017,cluster0-shard-00-01-o4tcb.mongodb.net:27017,cluster0-shard-00-02-o4tcb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";


        public string ReadPartHistory(string SN)
        {

            return "";



        }
    }
}
