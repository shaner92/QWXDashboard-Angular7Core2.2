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
        const string connectionString = "mongodb+srv://qwxadmin:QualityW0rX@cluster0-o4tcb.mongodb.net/test?retryWrites=true";
       
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

        public async void ReadAsync()
        {
            // Create a MongoClient object by using the connection string
            var client = new MongoClient(connectionString);

            //Use the MongoClient to access the server
            var database = client.GetDatabase("QWX");

            //get mongodb collection
            var collection = database.GetCollection<BsonDocument>("Sections");
            using (IAsyncCursor<BsonDocument> cursor = await collection.FindAsync(new BsonDocument()))
            {
                while (await cursor.MoveNextAsync())
                {
                    IEnumerable<BsonDocument> batch = cursor.Current;
                    foreach (BsonDocument document in batch)
                    {
                        Console.WriteLine(document);
                        Console.WriteLine();
                    }
                }
            }
            //var query = Query<BsonDocument>.EQ(e => e.Id, id);
            //return collection.FindAsync(query);

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