'use strict'
let express = require('express');

let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let http = require('http');
let https = require('https');

let mongoose = require('mongoose');

let app = express();
let router = express.Router();

let port = 1337;

let RoomRoutes = require('./routes/room-routes');
let MarkerRoutes = require('./../routes/marker-routes');

let roomRoutes = new RoomRoutes(router);
let markerRoutes = new MarkerRoutes(router);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser("SamengesmoltenSuperStroperigeStroopwafels"));
app.use('/api', router);

roomRoutes.createRoom();
roomRoutes.getRoomDetails();
roomRoutes.joinRoom();
roomRoutes.updateRoomDetails();

markerRoutes.createMarker();
markerRoutes.deleteMarker();
markerRoutes.updateMarker();

app.listen(port);

console.log('Server running on port ' + port);
