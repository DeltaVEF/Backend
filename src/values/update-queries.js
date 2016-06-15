export function roomMarkerInsertionQuery(roomId, markerId, markerTimestamp, markerText, markerAuthor) {
	return {
		conditions: {
			_id: roomId
		},
		update: {
			$push: {
				markers: {
					_id: markerId,
					timestamp: markerTimestamp,
					text: markerText,
					author: markerAuthor
				}
			}
		}
	};
}

export function roomMarkerRemovalQuery(roomId, markerId) {
	return {
		conditions: {
			_id: roomId
		},
		update: {
			$pull: {
				markers: {
					_id: markerId
				}
			}
		}
	};
}
