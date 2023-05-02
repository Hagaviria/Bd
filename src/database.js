 const mongoose = require('mongoose');

 mongoose.connect('mongodb://0.0.0.0:27017/Udyat_trabajo', {
    useNewUrlParser: true
})
   .then(db => console.log('Db is connected'))
   .catch(err => console.log(err));