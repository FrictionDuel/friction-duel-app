import { db, ref, set, onValue, update, onDisconnect } from './firebase.js';

function makeRoomId(){ return Math.random().toString(36).slice(2,8).toUpperCase(); }

async function createRoom(creatorName='PlayerA'){
  const roomId = makeRoomId();
  const roomRef = ref(db, `rooms/${roomId}`);
  await set(roomRef, {
    createdAt: Date.now(),
    players: { [creatorName]: { ready: false, deck: [], uid: creatorName } },
    state: 'waiting',
    turn: null
  });
  // onDisconnect cleanup
  const myRef = ref(db, `rooms/${roomId}/players/${creatorName}`);
  onDisconnect(myRef).remove(); // optional
  return roomId;
}

function joinRoom(roomId, playerName='PlayerB', onUpdate){
  const roomRef = ref(db, `rooms/${roomId}`);
  onValue(roomRef, snapshot => {
    const data = snapshot.val();
    onUpdate(data);
  });
  // add player
  update(ref(db, `rooms/${roomId}/players/${playerName}`), { ready: false, uid: playerName });
}
