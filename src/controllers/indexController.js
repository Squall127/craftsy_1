const path = require ('path')

module.exports = {
    index : (req, res) => {
        return res.sendFile (path.join (__dirname, '..', 'views','home.html'))
    },
    admin : (req, res) => {
        return res.sendFile (path.join (__dirname, '..', 'views','admin.html'))
    }
}