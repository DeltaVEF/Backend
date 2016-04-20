'use strict'

class RoomRoutes {
    constructor(router) {
        this.router = router;
    }

    createRoom() {
        this.router.post('/rooms', (req, res) => {
            res.json('TODO: implement route');
        });
    }

    getRoomDetails() {
        this.router.get('/rooms/:room_id', (req, res) => {
            res.json({
                error: false,
                data: {
                    _id: 'tPpiKfGYX8',
                    title: 'Baking super delicious Dutch stroopwafels',
                    code: '8UWKXXHR13',
                    startDate: new Date('2016-20-4 14:04'),
                    endDate: null,
                    markers: []
                }
            });
        });
    }

    joinRoom() {
        this.router.post('/rooms/:room_id/join', (req, res) => {
            res.json('TODO: implement route');
        });
    }

    updateRoomDetails() {
        this.router.put('/rooms/:room_id', (req, res) => {
            res.json('TODO: implement route');
        });
    }
}
