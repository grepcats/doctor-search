import { mainSearch } from './search.js';
import { displayDoctors, displayError, displaySpecialties } from './ui.js';
import './styles.css';


$(document).ready(function() {

  let newSearch = new mainSearch();
  let specialtyPromise = newSearch.specialtiesCall();
  specialtyPromise.then(function(response) {
    displaySpecialties(response);
  });

  $("#malady-search").submit(function(event) {
    event.preventDefault();

    let locationPromise = newSearch.geocodeCall($("#search-location").val());
    locationPromise.then(function(response) {
      let body = JSON.parse(response);
      let geocodedLoc = [body.results[0].geometry.location.lat, body.results[0].geometry.location.lng];

      return newSearch.docCall($("#malady-term").val(), $("#first-name").val(), $("#last-name").val(), geocodedLoc, $("#specialty").val());
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
