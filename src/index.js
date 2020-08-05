const app = require('./app')
const port = process.env.PORT

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})







//down
// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })
