export class mainSearch {

  specialtiesCall() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/specialties?user_key=${process.env.exports.apiKey}`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }

      request.open("GET", url, true);
      request.send();
    });
  }

  docCall(term, firstName, lastName, geocodedLoc, specialty) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      //let location = "or-portland";
      let lat = geocodedLoc[0];
      let long = geocodedLoc[1];
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=${specialty}&location=${lat}%2C${long}%2C100&first_name=${firstName}&last_name=${lastName}&query=${term}&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  geocodeCall(term) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let searchTerm = encodeURIComponent(term);
      let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=${process.env.google_apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }

      request.open("GET", url, true);
      request.send();
    });
  }

}
