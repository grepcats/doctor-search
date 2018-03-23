export function displayDoctors(response) {
  let body = JSON.parse(response);
  body.data.forEach(function(element) {
    $(".output").append("<div class='well doctor'>")
    $(".output .doctor:last-child").append("<p>" + element.profile.first_name + " " + element.profile.last_name + "</p>");
    if (element.practices[0].accepts_new_patients === true) {
        $(".output .doctor:last-child").append("<p>Accepting new patients at " + element.practices[0].name + "</p>");
        $(".output .doctor:last-child").append("<p class='address'>" + element.practices[0].visit_address.street + "</p>");
        $(".output .doctor:last-child").append("<p class='address'>" + element.practices[0].visit_address.city + " " + element.practices[0].visit_address.state + " " + element.practices[0].visit_address.zip + "</p>");
        $(".output .doctor:last-child").append("<p class='address'>" + element.practices[0].phones[0].number + "</p>");
      }
    if (element.specialties.length > 0) {
      $(".output .doctor:last-child").append("<p>Specialties: </p>")
      $(".output .doctor:last-child").append("<ul>")
      element.specialties.forEach(function(specialty) {
        $(".output .doctor:last-child ul").append("<li>" + specialty.actor + "</li>")
      });

    }

  //  $(".output").append("<p>" + element.practices[0].accepts_new_patients + "</p>");
  });

  console.log(body.data[1]);
}
