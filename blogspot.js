var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://admin:admin@cluster0-zoamm.mongodb.net/blogspot";
MongoClient.connect(uri, function(err, client) {
   const collection = client.db("blogspot").collection("comments");

   var query = { "$text": {"$search": "\"00130857877628131980\"" }};

//    collection.findOne(query, function(err, result) {
//     if (err) throw err;
//     console.log(result.author.displayName);
//     console.log(result.content);
//     console.log(result.published);
    
//   });

  collection.find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    //db.close();
  });

   client.close();
});