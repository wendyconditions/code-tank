//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('unable to connect to server');
    }

    console.log('success connected to db');

    const db = client.db('ToDoApp');

    // db.collection('Users').find({
    //     _id: new ObjectID('5b9053d02a8fac5094e15f9c')
    // }).toArray().then((docs) => {
    //     console.log('Users');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch users', err);
    // })

    db.collection('Users').find().count().then((count) => {
        console.log(`Count: ${count}`);
       // console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch users', err);
    })

     client.close();
});