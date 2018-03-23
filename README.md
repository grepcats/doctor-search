//include instructions on setting up .env file
//don't include jasmine/karma init

##Specs
* Program should return a list of doctors in the Portland area
  * Input: Click "search"
  * Output: List of doctors and their specialties, contact info

* Program should allow users to enter a medical issue to receive a list of doctors in the Portland area that fit the search query
  * Input: "toothache"
  * Output: Doctors who specialize in Dentistry (query keyword searches all fields)

* Program should allow users to enter a doctor's name and find relevant information about them
  * Input: FirstName: "William"; LastName: "Bowerfind"
  * Output: Information about William Bowerfind in Portland, OR. First name, last name, address, phone number, website, whether or not the doctor is accepting new patients.

* Program should gracefully handle errors (any message not 200) and should return a notification that states what the error is
  * Input: 429 error from API; 500 error from API
  * Output: "There was an error with your request - too many requests."; "There was an error with the API - server error"

* Program should gracefully handle situations where there are no results
  * Input: Query string that results in no doctors
  * Output: "There are no doctors matching your search. Please change your criteria and try again."

* Program should allow users to search by location
  * Input: "portland, or" or other locations
  * Output: input term is geocoded and search results are limited by location with 100 mile radius

* Program should provide a dropdown of specialties that they can use to refine search
  * Input: "Acupuncture"
  * Output: Doctors whose specialties include acupuncture

* Program should create a list of recently viewed doctors and offer to display it to user
  * Input: click button to display list of doctors
  * Output: List of doctors that have appeared in search results

* Program should allow user to clear list of recently viewed doctors
  * Input: click "clear recently viewed doctors"
  * Output: list is now empty.

---
Other features

* Create a list of "recently viewed" doctors and display it.
* Create a list of "related doctors" and display it. You can define related however you wish.
* Add static pages, links to your GitHub, social media, and more.
* Use Google Maps API to plot the locations of doctors's practices on a map.
