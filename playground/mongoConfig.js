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
var myobj = [
  { name: 'John', address: 'Highway 71'},
  { name: 'Peter', address: 'Lowstreet 4'},
  { name: 'Amy', address: 'Apple st 652'},
  { name: 'Hannah', address: 'Mountain 21'},
  { name: 'Michael', address: 'Valley 345'},
  { name: 'Sandy', address: 'Ocean blvd 2'},
  { name: 'Betty', address: 'Green Grass 1'},
  { name: 'Richard', address: 'Sky st 331'},
  { name: 'Susan', address: 'One way 98'},
  { name: 'Vicky', address: 'Yellow Garden 2'},
  { name: 'Ben', address: 'Park Lane 38'},
  { name: 'William', address: 'Central st 954'},
  { name: 'Chuck', address: 'Main Road 989'},
  { name: 'Viola', address: 'Sideway 1633'}
];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
    console.log(JSON.stringify(res.ops, undefined, 2));
  });
// dbo.collection("employees").insertOne({name:'Kayonga', age:30, location:'Gisozi'}, (err, res)=>{
// if(err) throw err;
// console.log('Employee inserted');
 db.close();
// console.log(JSON.stringify(res.ops, undefined, 2));
//console.log(res.ops[0]._id.timeStamp());
// });

});
