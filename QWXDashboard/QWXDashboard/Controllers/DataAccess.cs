using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MongoDB.Bson;
using MongoDB.Driver;


namespace QWXDashboard.Controllers
{
    public class DataAccess
    {
        const string connectionString = "mongodb://qwxadmin:QualityW0rX@cluster0-shard-00-00-o4tcb.mongodb.net:27017,cluster0-shard-00-01-o4tcb.mongodb.net:27017,cluster0-shard-00-02-o4tcb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
       
        public async void InsertAsync()
        {
            // Create a MongoClient object by using the connection string
            var client = new MongoClient(connectionString);

            //Use the MongoClient to access the server
            var database = client.GetDatabase("QWX");

            //get mongodb collection
            var collection = database.GetCollection<BsonDocument>("Sections");
            await collection.InsertOneAsync(new BsonDocument { { "Section", "Section1" }, {"Station", "Station3" } });
        }

        public List<BsonDocument> ReadAsync()
        {
            // Create a MongoClient object by using the connection string
            var client = new MongoClient(connectionString);

            //Use the MongoClient to access the server
            var database = client.GetDatabase("QWX");

            //get mongodb collection
            var collection = database.GetCollection<BsonDocument>("Sections");
            //var filter = Builders<BsonDocument>.Filter.Eq("Label", "Section1");
            var projection = Builders<BsonDocument>.Projection.Exclude("_id");
            //return collection.Find<BsonDocument>(filter).Project(projection).ToList();
            return collection.Find(new BsonDocument()).Project(projection).ToList();



        }

        //public void update(string collectionName, string query)
        //{
        //    var database = client.GetDatabase("QWX");
        //    var collection = database.GetCollection<Entity>("entities");
        //    var update = Update<Entity>.Set(e => e.Name, "Harry");
        //    collection.Update(query, update);
        //}
        //public void remove(string quey)
        //{
        //    var database = client.GetDatabase("QWX");
        //    var collection = database.GetCollection<Entity>("entities");
        //    collection.Remove(query);
        //}
    }
}