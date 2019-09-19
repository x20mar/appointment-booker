const app = require('./app')

const server = app.listen('0.0.0.0', 3000, () => {
    console.log(`Express is running on port ${server.address().port}`)
})