'use strict'

class MarkerRoutes {
    constructor(router) {
        this.router = router;
    }

    createMarker() {
        this.router.post('/rooms/:room_id/markers', (req, res) => {
            res.json('TODO: implement route');
        });
    }

    deleteMarker() {
        this.router.delete('/rooms/:room_id/markers/:marker_id', (req, res) => {
            res.json('TODO: implement route');
        });
    }

    updateMarker() {
        this.router.put('/rooms/:room_id/markers/:marker_id', (req, res) => {
            res.json('TODO: implement route');
        });
    }
}
