'use strict'
const vl = require('./vl');

const patientId = [
  "15564-00301",
  "14701-00445",
  "14701-00162",
  "14701-06045",
  "14701-05098",
  "14701-000861",
  "14701-04556",
  "14701-02836",
  "14701-04374",
  "14701-00138",
];

function start() {
  vl.getPatientVl("14701-00138")
     .then((result) => {
     })
     .catch((error) => {
    });
}

start();
