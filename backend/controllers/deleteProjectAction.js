// database
const deletePost = require('../models/Projects')

module.exports = async (req, res) => {
    await deletePost.findByIdAndDelete(req.params.id)
    res.redirect('/projects')
}