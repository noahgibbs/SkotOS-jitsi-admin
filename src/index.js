


import Participant from './Participant';
import { randomInt } from './util';

const path = require('path');
const fs = require('fs');
const configObject = JSON.parse(fs.readFileSync(path.resolve(process.argv[2])));
const service = configObject.service;
const domain = configObject.domain;
const muc = `conference.${domain}`;
const focus = `focus.${domain}`;
const roomPrefix = 'jxs-test-' + Date.now() + randomInt(0, 10000);
const numberOfRooms = Number(process.argv[3]);
const numberOfParticipants = 1;
const delay = 0;
if (!numberOfRooms || isNaN(numberOfRooms)) {
    console.log("Illegal number of rooms!");
    process.exit(1);
}

if (!numberOfParticipants || isNaN(numberOfParticipants)) {
    console.log("Illegal number of participants!");
    process.exit(2);
}

const participants = {};

for (let j = 0; j < numberOfRooms; j++) {
    const roomName = `${roomPrefix}-${j}`;
    participants[roomName] = [];
    for (let i = 0; i < numberOfParticipants; i++) {
        const participant = new Participant({
            service,
            domain,
            room: roomName,
            // enableDebug: true,
            focus,
            muc
        });
        participants[roomName].push(participant);
        if (!delay) {
            participant.join();
        } else {
            setTimeout(() => participant.join(), delay * 1000);
        }
    }
}

function cleanup() {
    for (const room in participants) {
        participants[room].every(p => p.disconnect());
    }
}

process.on('SIGTERM', cleanup);
process.on('SIGINT', cleanup);
