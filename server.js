import {ArtistRoutes} from './dist/routing/artist-routes';
import {ExpressServer} from './dist/rest/express/express-server.js';
import mongoose from 'mongoose';
import connection from './connection/mongoose-connection';

let server = new ExpressServer('/api', 27466);
mongoose.connect(connection.mongooseConnectionString);

let artistRoutes = new ArtistRoutes();

server.init();

server.addGetRequest('/artists', null, artistRoutes.getArtists);
//server.addPostRequest('/artists', null, artistRoutes.addArtist);

server.addGetRequest('/test', null, (req, res, next) => {
    res.json('Hello world!');
});

server.listen();
