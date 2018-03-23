import { mainSearch } from './doctor.js';
import { displayDoctors } from './ui.js';
import './styles.css';


$(document).ready(function() {
  $("#malady-search").submit(function(event) {
    event.preventDefault();

    let newSearch = new mainSearch();
    let searchPromise = newSearch.docCall($("#malady-term").val(), $("#first-name").val(), $("#last-name").val());
    searchPromise.then(function(response) {
      displayDoctors(response);
    }, function(error) {
      console.log("there was an error");
    });
  });

});
