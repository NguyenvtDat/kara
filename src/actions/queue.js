let queueId = 0;

export function addToQueueStore(song) {
  return {
    type: "ADDED_SONG",
    payload: { queueId: ++queueId, ...song },
  };
}

export function removeFromQueueStore(queueId) {
  return {
    type: "REMOVED_SONG",
    payload: {
      queueId: queueId,
    },
  };
}

export function changeQueuePositionStore(queueId) {
  return {
    type: "CHANGE_QUEUE",
    payload: {
      queueId: queueId,
    },
  };
}
