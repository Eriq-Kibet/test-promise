"use strict";
const axios = require("axios");
const qs = require("qs");

const def = {
  getPatientVl: getPatientVl,
};
function getPatientVl(patientId) {
  return new Promise((resolve, reject) => {
    var data = qs.stringify({
      start_date: "2021-07-14",
      end_date: "2021-07-16",
      date_dispatched_start: "2021-07-14",
      date_dispatched_end: "2021-07-16",
      test: "2",
      patient_id: `${patientId}`
    });
    var config = {
      method: "post",
      url: "https://ampath.nascop.org/api/function",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        apikey: "hbSNAer4anou3YoqE5",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject("Error", error);
      });
  });
}
module.exports = def;
