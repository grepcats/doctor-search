import { mainSearch } from './search.js';
import { displayDoctors, displayError, displaySpecialties, displayRecentDocs } from './ui.js';
import './styles.css';


$(document).ready(function() {
  let allDocsSoFar = [];
  let newSearch = new mainSearch();
  let specialtyPromise = newSearch.specialtiesCall();
  specialtyPromise.then(function(response) {
    displaySpecialties(response);
  });

  $("#display-recent").click(function(event) {
    event.preventDefault();
    displayRecentDocs(allDocsSoFar);
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

      return newSearch.docCall($("#malady-term").val(), $("#first-name").val(), $("#last-name").val(), geocodedLoc, $("#specialty").val());
    }, function(firstError) {
      displayError(firstError);
    })
    .then(function(response) {
      allDocsSoFar.push(displayDoctors(response));
      console.log(allDocsSoFar);

    }, function(secondError) {
      displayError(secondError);
    });
  });

});
