//const MongoClient = require('mongodb').MongoClient; or
const {MongoClient, ObjectID}=require('mongodb');
var obj= new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/',(err, db)=>{
  if(err){
    return console.log('Unable 2 Connect 2 Mongo');
  }
  console.log("connected 2 Mongo");
 var dbo=db.db('mydb');
//  dbo.collection("employees").find().toArray().then((docs)=>{
//  if(err) throw err;
//  console.log('Todos');
//  console.log(JSON.stringify(docs, undefined, 2));
// });
// dbo.collection("employees").find(
//   {_id: new ObjectID('5b2fc90294154564a4aed6fe ')

// if(err) throw err;
// console.log('Todos');
// console.log(JSON.stringify(docs, undefined, 2));
// });
// dbo.collection('customers').find().count().then(count=>{
//   console.log(`Todos count:${count}`);
// }, (err)=>{
//   console.log("Unable to fetch todos", err);
// });
dbo.collection("customers").find({name:'William'}).toArray().then((docs)=>{
 if(err) throw err;
 console.log('Todos');
 console.log(JSON.stringify(docs, undefined, 2));
});
  //db.close();

});
