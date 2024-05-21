const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ProjectSchema = new Schema ({
    title: String,
    url: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: String,
    datePosted:{
        type: Date,
        default: new Date()
    },
})
ProjectSchema.index({ "$**": "text" });
const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;