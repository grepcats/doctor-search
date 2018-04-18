# Doctor Search

#### _A web app that allows users to search for area doctors. Users can search by doctor name, keyword/symptom, and specialty. 3/23/2018_

## Specs
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

* Program will allow user to select the number of results they'd like to see
  * Input: enter number
  * Output: the number of results should reflect number user enters.


## Setup and Installation
The live site is deployed to Firebase here: https://doctor-search-21f6a.firebaseapp.com/

If you would like to interact with the code directly, please follow these instructions:

* clone repository: git clone https://github.com/grepcats/doctor-search
* install node. if you are on a mac, use `brew install node`. Otherwise, go to https://nodejs.org/en/download/ and download/install the appropriate installer.
* in the project directory, type
```
npm init
npm install (this installs the packages and dependencies listed in the package.json file)
npm install -g karma-cli (you should only have to do this once on your machine)

```
* You will need to obtain a Google Maps Geocoding API key. You may do so here: https://developers.google.com/maps/documentation/geocoding/start#get-a-key
* You will need to obtain a BetterDoctor API key. You may do so here: https://developer.betterdoctor.com/
* Once you have these keys, create a .env file in your project root directory. Enter the following lines in your file:
```
exports.apiKey=[Your BetterDoctor API key]
exports.google_apiKey=[Your Google API Key]

```
* to test, run `npm test`. Please note there are no tests at this time.
* to open the development server, run `npm start`

From here, you should be able to enter your information and see results.

## Known Bugs
No known bugs.

## Support and Contact Details
If there are any issues or questions, please contact me at kayla.renee at gmail dot com or create an issue in GitHub.

## Technologies Used
JavaScript, Node.js, npm, Bootstrap, jQuery

## License
MIT License

Copyright (c) 2018 Kayla Ondracek

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
