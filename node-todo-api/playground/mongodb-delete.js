//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('unable to connect to server');
    }

    console.log('success connected to db');

    const db = client.db('ToDoApp');

    // db.collection('Users').deleteMany({ age: 31 })
    //     .then((result) => {
    //         console.log(result)
    //     });

    //deleteMany
    //deleteOne
    //findOneAndDelete

    db.collection('Users').findOneAndDelete({ name: 'Andrew' })
        .then((result) => {
            console.log(result);
        });
    // client.close();
});