//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = { name: 'wendy'};
// var {name} = user;

// console.log(name);

MongoClient.connect("mongodb://localhost:27017/TodoApp", {useNewUrlParser:true}, (err, client) => {
    if (err) {
        return console.log('unable to connect to server');
    }

    console.log('success connected to db');
    const db = client.db('ToDoApp');

    // db.collection('Todos').insertOne({
    //     text: "something to do",
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('undable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // insert new doc into new Users, name, age, location strings
    // insert one
    // new collection name
   
    // db.collection('Users').insertOne({
    //     name: 'Wendy',
    //     age: 31,
    //     location: "los angeles"
    // }, (err, result) => {
    //     if(err){
    //         return console.log('error occurred');
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // })
    client.close();
});