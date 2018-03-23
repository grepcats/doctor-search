export class mainSearch {

  docCall(term) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let location = "or-portland";
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${term}&location=${location}&skip=0&limit=10&user_key=${process.env.apiKey}`;

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
