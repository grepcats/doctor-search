import { mainSearch } from './doctor.js';
import { displayDoctors } from './ui.js';


$(document).ready(function() {
  $("#malady-search").submit(function(event) {
    event.preventDefault();

    let newSearch = new mainSearch();
    let searchPromise = newSearch.docCall();
    searchPromise.then(function(response) {
      displayDoctors(response);
    }, function(error) {
      console.log("you suck");
    });
  });

});
