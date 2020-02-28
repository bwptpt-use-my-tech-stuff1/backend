require('dotenv').config()
const server = require('./api/server');

// server.use('/api', server);

const port = process.env.PORT || 8000;

server.listen(port, () => {
    console.log(`***Server listening on port ${port}`);
})