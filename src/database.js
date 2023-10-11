const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes-db-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Utiliza esta opción en lugar de useFindAndModify
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
