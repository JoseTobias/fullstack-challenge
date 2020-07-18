const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://tobias:${process.env.DATABASE_PASSWORD}@cluster0.5a1ut.mongodb.net/vaga-vue?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});