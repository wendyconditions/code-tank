var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true});

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text: 'Edit this video'
});

newTodo.save().then((doc) =>{
    console.log("saved todo", doc);
}, (e) =>{
    console.log('unable to save')
})