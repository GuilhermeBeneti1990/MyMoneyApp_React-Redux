const _ = require('lodash')

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if(bundle.errors) {
        const errors = parseErrors(bundle.Errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

const parseErrors = (nodeRestfullErrors) => {
    const errors = []
    _.forIn(nodeRestfullErrors, error => error.push(error.message))
    return errors
}