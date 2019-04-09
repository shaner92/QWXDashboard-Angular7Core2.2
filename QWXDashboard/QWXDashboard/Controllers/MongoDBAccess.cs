using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;

namespace QWXDashboard.Controllers
{
    public class MongoDBAccess : DataAccessInterface
    {
        const string connectionString = "mongodb://qwxadmin:QualityW0rX@cluster0-shard-00-00-o4tcb.mongodb.net:27017,cluster0-shard-00-01-o4tcb.mongodb.net:27017,cluster0-shard-00-02-o4tcb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";


        public async Task<string> ReadPartHistory(string SN)
        {

            // Create a MongoClient object by using the connection string
            var client = new MongoClient(connectionString);

            //Use the MongoClient to access the server
            var database = client.GetDatabase("QWX");

            //get mongodb collection
            var collection = database.GetCollection<BsonDocument>("Part");
            var filter = Builders<BsonDocument>.Filter.Eq("Serial Number", SN);
            var projection = Builders<BsonDocument>.Projection.Exclude("_id").Exclude("PressForce");
            var data = await collection.Find(filter).Project(projection).FirstOrDefaultAsync();
            return data.ToJson(new MongoDB.Bson.IO.JsonWriterSettings { Indent = true });



        }

        public async Task<string> ReadFailureReport()
        {
            // Create a MongoClient object by using the connection string
            var client = new MongoClient(connectionString);

            //Use the MongoClient to access the server
            var database = client.GetDatabase("QWX");

            //get mongodb collection
            var collection = database.GetCollection<BsonDocument>("Part");
            //var filter = Builders<BsonDocument>.Filter.Eq("Serial Number", SN);
            var projection = Builders<BsonDocument>.Projection.Include("Serial Number").Include("Part Status");

            var data = await collection.Find(_ => true).ToListAsync();

            return data.ToJson(new MongoDB.Bson.IO.JsonWriterSettings { Indent = true });
        }

    }
}

