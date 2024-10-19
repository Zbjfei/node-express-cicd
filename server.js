const app = require('./src/app.js');

const port = 9000;

app.listen(port, () => { console.log(`Server has started on port ${port}`); }); // eslint-disable-line no-console
