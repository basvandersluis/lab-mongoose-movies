const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

mongoose.connect("mongodb://localhost/starter-code", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const celebrities = [
    {
        name: "Ralph Fiennes",
        occupation: "Actor",
        catchphrase: "There is no good and evil. There is only power... and those too weak to seek it.",
    },
    {
        name: "Michael Gambon",
        occupation: "Actor",
        catchphrase: "Happiness can be found, even in the darkest of timse, if one only remembers to turn on the light.",
    },
    {
        name: "Evanna Lynch",
        occupation: "Actress",
        catchphrase: "I sleepwalk, you see. That's why I wear shoes to bed",   
    }
];

Celebrity.insertMany(celebrities)
.then((data) => {
    console.log(`Succes! Added ${data.length} celebrities to the database`);
    mongoose.connection.close();
})
.catch((err) => {
    console.log(err);
});