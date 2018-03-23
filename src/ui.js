export function displayDoctors(response) {
  let body = JSON.parse(response);
  $(".output div").remove();
  if (body.data.length > 0) {
    body.data.forEach(function(element) {
      $(".output").append("<div class='well doctor'>")
      $(".output .doctor:last-child").append("<div class='info'>")
      $(".output .doctor:last-child .info").append("<p>" + element.profile.first_name + " " + element.profile.last_name + "</p>");
      if (element.practices[0].accepts_new_patients === true) {
          $(".output .doctor:last-child .info").append("<p>Accepting new patients at " + element.practices[0].name + "</p>");
          $(".output .doctor:last-child .info").append("<p class='address'>" + element.practices[0].visit_address.street + "</p>");
          $(".output .doctor:last-child .info").append("<p class='address'>" + element.practices[0].visit_address.city + " " + element.practices[0].visit_address.state + " " + element.practices[0].visit_address.zip + "</p>");
          $(".output .doctor:last-child .info").append("<p class='address'>" + element.practices[0].phones[0].number + "</p>");
        }
      if (element.specialties.length > 0) {
        $(".output .doctor:last-child .info").append("<p>Specialties: </p>")
        $(".output .doctor:last-child .info").append("<ul>")
        element.specialties.forEach(function(specialty) {
          $(".output .doctor:last-child .info ul").append("<li>" + specialty.actor + "</li>")
        });
      }
      $(".output .doctor:last-child").append("<div class='doctor-img'>")
      $(".output .doctor:last-child .doctor-img").append('<img class="actual-doctor-img" src="' + element.profile.image_url + '"</>');
    });
  } else {
    $(".output").append("<div class='error'>There are no doctors matching your search. Please change your criteria and try again.</div>");
  }
}

export function displayError(errorText) {
  $(".output").append("<p>" + errorText+ "</p>")
}

export function displaySpecialties(response) {
  let body = JSON.parse(response);
//  console.log(body);
  let specialtyArray = [];
  body.data.forEach(function(specialty) {
    specialtyArray[specialty.uid] = specialty.name;
  })
  specialtyArray.sort();
  for(var index in specialtyArray) {
    $("#specialty").append("<option value=" + index + ">" + specialtyArray[index] + "</option>")
  }

}
