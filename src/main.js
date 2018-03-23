import { mainSearch } from './search.js';
import { displayDoctors, displayError } from './ui.js';
import './styles.css';


$(document).ready(function() {

  $("#malady-search").submit(function(event) {
    event.preventDefault();
    let newSearch = new mainSearch();
    let locationPromise = newSearch.geocodeCall($("#search-location").val());
    locationPromise.then(function(response) {
      let body = JSON.parse(response);
      let geocodedLoc = [body.results[0].geometry.location.lat, body.results[0].geometry.location.lng];

      return newSearch.docCall($("#malady-term").val(), $("#first-name").val(), $("#last-name").val(), geocodedLoc);
    }, function(firstError) {
      displayError(firstError);
    })
    .then(function(response) {
      displayDoctors(response)
    }, function(secondError) {
      displayError(secondError);
    });
  });

});
