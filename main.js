console.log('test')

const APIKey = "AIzaSyDWA45NTuJeI00AOWptpoeTqZKbRL2qIGA";

fetch('https://www.googleapis.com/calendar/v3/calendars/c_04453d35e4936b2649d43f16ca058d6cc599df7c8480d45ca2c67f2457e2bb22@group.calendar.google.com/events?key=AIzaSyDWA45NTuJeI00AOWptpoeTqZKbRL2qIGA')
.then((data) => data.json())
.then((data) => {
    const boxDiv = document.getElementById('eventSummary')
    console.log('looping through array');
    data.items.forEach((obj) => {
        console.log(obj);
        const msg = document.createElement('div')
        // msg.innerHTML = `${obj.summary} @ ${obj.start.dateTime.replace(/T([^-]+)/, '')}`;
        msg.innerHTML = `${obj.summary} @ ${obj.start.dateTime.slice(11, 16)}`;
        boxDiv.appendChild(msg);
        msg.style.border = 'solid';
        msg.style.borderWidth = 'thin';
    })
    console.log(data);
})

console.log('this is working');



// from codesmith files:
// const express = require('express');
// const app = express();
// const path = require('path');

// app.use(express.static(path.join(__dirname, '../' ))); //serves the index.html
// app.listen(8000); //listens on port 8000 -> http://localhost:8000/