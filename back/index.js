import {connect} from './db.js';
import {PORT} from './config.js';
import app from './app.js';


connect();



app.listen(PORT, () => {
    console.log('Server listening on port 3000', PORT);
    }
);