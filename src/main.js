import { mainSearch } from './search.js';
import { Display } from './ui.js';
import './styles.css';


$(document).ready(function() {
  let allDocsSoFar = [];
  let newSearch = new mainSearch();
  let newDisplay = new Display();
  let specialtyPromise = newSearch.specialtiesCall();
  specialtyPromise.then(function(response) {
    newDisplay.displaySpecialties(response);
  });

  $("#display-recent").click(function(event) {
    event.preventDefault();
    newDisplay.displayRecentDocs(allDocsSoFar);
  })

  $("#delete-recent").click(function(event) {
    event.preventDefault();
    allDocsSoFar = [];
    $(".output div").remove();
  })

  $("#malady-search").submit(function(event) {
    event.preventDefault();

    let locationPromise = newSearch.geocodeCall($("#search-location").val());
    locationPromise.then(function(response) {
      let body = JSON.parse(response);
      let geocodedLoc = [body.results[0].geometry.location.lat, body.results[0].geometry.location.lng];
      return newSearch.docCall($("#malady-term").val(), $("#first-name").val(), $("#last-name").val(), geocodedLoc, $("#specialty").val(), $("#results-num").val());
    }, function(firstError) {
      newDisplay.displayError(firstError);
    })
    .then(function(response) {
      allDocsSoFar.push(newDisplay.displayDoctors(response));
    }, function(secondError) {
      newDisplay.displayError(secondError);
    });
  });

});
