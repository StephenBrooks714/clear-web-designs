const ProjectDB = require("../models/Projects")

module.exports = async (req, res) => {
    const projects = await ProjectDB.find({}).populate('userid');
    res.render("projects", {
        title: "Projects page for web express pro",
        projects
    })
}