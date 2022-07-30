const mongoose = require('mongoose');

const projectsSchema = mongoose.Schema({
    screenshot:String,
    name: String,
    title: String,
    about: String,
    git: String,
    serverGit: String,
    liveSite: String,
    date: {
        type: Date,
        default:Date.now
    }
});

const Project = mongoose.model('Projecrt', projectsSchema);

module.exports = Project;