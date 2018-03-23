export class Doctor {

  constructor(firstName, lastName, practice, streetAddress, city, state, zip, phone, accepting, image_url) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.practice = practice;
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = phone;
    this.accepting = accepting;
    this.specialties = [];
    this.image_url = image_url
  }

}
