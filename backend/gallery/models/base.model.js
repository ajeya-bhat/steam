const mongoose = require("mongoose");


var steamschema = new mongoose.Schema({
    appid:{
        type: String,
    },
    name:{
        type: String,
    },
    release_date:{
        type: String,
    },
    english:{
        type: String,
    },developer:{
        type: String,
    },
    publisher:{
        type: String,
    },platforms:{
        type: String,
    },
    required_age:{
        type: String,
    },
    categories:{
        type: String,
    },
    genres:{
        type: String,
    },
    steamspy_tags:{
        type: String,
    },
    achievements:{
        type: String,
    },
    positive_ratings:{
        type: String,
    },
    negetive_ratings:{
        type: String,
    },
    average_playtime:{
        type: String,
    },
    median_playtime:{
        type: String,
    },
    owners:{
        type: String,
    },
    price:{
        type: String,
    },
    header_image:{
        type: String,
    },
    background:{
        type: String,
    },    
    short_description:{
        type: String,
    }

});

mongoose.model("main",steamschema);
