import { Doctor } from './doctor.js';

export class Display {

  displayDoctors(response) {
    let allDocs = [];
    let body = JSON.parse(response);
    $(".output div").remove();
    $(".output p").remove();
    if (body.data.length > 0) {
      body.data.forEach(function(element) {
        let newDoc = new Doctor(element.profile.first_name, element.profile.last_name);

        $(".output").append("<div class='well doctor'>")
        $(".output .doctor:last-child").append("<div class='info'>")
        $(".output .doctor:last-child .info").append("<p>" + element.profile.first_name + " " + element.profile.last_name + "</p>");
        if (element.practices[0].accepts_new_patients === true) {
          newDoc.accepting = true;
          newDoc.practice = element.practices[0].name;
          newDoc.streetAddress = element.practices[0].visit_address.street;
          newDoc.city = element.practices[0].visit_address.city;
          newDoc.state = element.practices[0].visit_address.state;
          newDoc.zip = element.practices[0].visit_address.zip;
          newDoc.phone = element.practices[0].phones[0].number;
            $(".output .doctor:last-child .info").append("<p>Accepting new patients at " + element.practices[0].name + "</p><p class='address'>" + element.practices[0].visit_address.street + "</p><p class='address'>" + element.practices[0].visit_address.city + " " + element.practices[0].visit_address.state + " " + element.practices[0].visit_address.zip + "</p><p class='address'>" + element.practices[0].phones[0].number + "</p>");
          }
        if (element.specialties.length > 0) {
          $(".output .doctor:last-child .info").append("<p>Specialties: </p>")
          $(".output .doctor:last-child .info").append("<ul>")
          element.specialties.forEach(function(specialty) {
            newDoc.specialties.push(specialty.actor);
            $(".output .doctor:last-child .info ul").append("<li>" + specialty.actor + "</li>")
          });
        }
        $(".output .doctor:last-child").append("<div class='doctor-img'>")
        $(".output .doctor:last-child .doctor-img").append('<img class="actual-doctor-img" src="' + element.profile.image_url + '"</>');
        newDoc.image_url = element.profile.image_url
        allDocs.push(newDoc);
      });
    } else {
      $(".output").append("<div class='error'>There are no doctors matching your search. Please change your criteria and try again.</div>");
    }
    return allDocs;
  }

  displayError(errorText) {
    $(".output div").remove();
    $(".output p").remove();
    $(".output").append("<p>" + errorText+ "</p>")
  }

  displaySpecialties(response) {
    let body = JSON.parse(response);
    let specialtyArray = [];
    body.data.forEach(function(specialty) {
      specialtyArray.push({ uid: specialty.uid, specialty: specialty.name});
      })
    specialtyArray.sort(compare);
    specialtyArray.forEach(function(item) {
      $("#specialty").append("<option value=" + item.uid + ">" + item.specialty + "</option>")
    })

  }

  displayRecentDocs(arrayOfDocs) {
    $(".output div").remove();
    $(".output p").remove();
    if (arrayOfDocs.length === 0) {
      $(".output").append("<p>No doctors to display</p>")
    }
    arrayOfDocs.forEach(function(results) {
      results.forEach(function(doc) {
        $(".output").append("<div class='well doctor'>")
        $(".output .doctor:last-child").append("<div class='info'>")
        $(".output .doctor:last-child .info").append("<p>" + doc.firstName + " " + doc.lastName + "</p>");
        if (doc.accepting === true) {
            $(".output .doctor:last-child .info").append("<p>Accepting new patients at " + doc.practice + "</p><p class='address'>" + doc.streetAddress + "</p><p class='address'>" + doc.city + " " + doc.state + " " + doc.zip + "</p><p class='address'>" + doc.phone + "</p>");
          }
        if (doc.specialties.length > 0) {
          $(".output .doctor:last-child .info").append("<p>Specialties: </p>")
          $(".output .doctor:last-child .info").append("<ul>")
          doc.specialties.forEach(function(specialty) {
            $(".output .doctor:last-child .info ul").append("<li>" + specialty + "</li>")
          });
        }
        $(".output .doctor:last-child").append("<div class='doctor-img'>")
        $(".output .doctor:last-child .doctor-img").append('<img class="actual-doctor-img" src="' + doc.image_url + '"</>');
      });
    });
  }
}

function compare(a,b) {
  if (a.uid < b.uid)
    return -1;
  if (a.uid > b.uid)
    return 1;
  return 0;
}
