# Easy Rental -  Testing

![Easy Rental shown on a variety of screen sizes](assets/images/responsive-viewer-homepage.webp)

Visit the deployed site: [Easy Rental](https://hourianouhkhanjar.github.io/easy-rental/)

- - -

## CONTENTS

* [AUTOMATED TESTING](#automated-testing)
  * [W3C Validator](#w3c-validator)
  * [JavaScript Validator](#javascript-validator)
  * [Lighthouse](#lighthouse)

* [MANUAL TESTING](#manual-testing)
  * [Testing User Stories](#testing-user-stories)
  * [Full Testing](#full-testing)


- - -

## AUTOMATED TESTING

### W3C Validator

[W3C](https://validator.w3.org/) was used to validate the HTML and CSS of the website.

* index.html - Passed.
* booking-page.html - Passed.
* contact-supplier-page.html - Passed.
* response-page.html - Passed.

* style.css - Passed, one warning its about the imported fonts.

- - -

### JavaScript Validator

[jshint](https://jshint.com/) was used to validate the JavaScript.

* main.js - Passed.
* animate.js - Passed

- - -

### Lighthouse

I used Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.

**Home page**

![index.html](assets/images/testig-lighthouse-homepage.webp)

**Booking page**

![booking-page.html](assets/images/testing-lighthouse-booking.webp)

*The SEO evaluation is incomplete because the meta description is missing and logically the user should not reach this page without first selecting the tool.*

**Contact supplier page**

![contact-supplier-page.html](assets/images/testing-lighthouse-contact-supplier-page.webp)

*The SEO evaluation is incomplete because the meta description is missing and logically the user should not reach this page without first selecting the tool.*

**Response page**

![response-page.html](assets/images/testing-lighthouse-response-page.webp)

*The SEO evaluation is incomplete because the meta description is missing and logically the user should not reach this page without sending the request first.*

- - -

## MANUAL TESTING

### Testing User Stories

`prospective customer`

| Goals | How are they achieved? |
| :--- | :--- |
|  I want to see a list of rentable tools, so I can find the tool that fits my needs, time and budget | On the homepage I have developed a list of avialbel tools sorted by category for easy finding and described with appropriate title, picture, price and location. |
|  I want to see reviews from previous customers so that I can feel confident about renting the tool| I have developed the review section on tool card. the review section display the review and number of reviewer and it looks good on all main device sizes |


`customer`

| Goals | How are they achieved? |
| :--- | :--- |
|   I want the site to be easy to navigate | I have added links to the header which take the user to the tools section and the contact support section. In addition I added two buttons on the tool card, one takes the user to the tool rental page and the other to the contact page with the tool owner. |
|  I want to rent a tool with a smooth booking process so that I can easily confirm my rental | The rental request page is designed so that the tool can be requested for rent very simply. All you have to do is enter the customer information and then send the request. |


`interested customer`

| Goals | How are they achieved? |
| :--- | :--- |
|    I want to contact the support so I can ask question when a technical problem occurs | I designed a form to communicate with support in the footer of the page. It can be accessed easily and inquiries can be sent easily. |
|  I want to contact the supplier so I can ask questions | The contact supplier page is designed so that the customer can ask a question about the tool very simply. All you have to do is enter the customer information, tool name, customer question and then send the request. |

- - -

### Full Testing

Full testing was performed on the following devices:

* Laptop:
  * HP Laptop 17 2021
* Mobile Devices:
  * iPhone 14 pro max.
  * samsung A53.

Each device tested the site using the following browsers:

* Google Chrome
* Safari


`Home Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The Sites logo | Link directs the user back to the home page | Clicked logo | Home page reloads | Pass |
| The Home link on Navbar | Link directs the user back to the home page | Clicked link | Home page reloads | Pass |
| Tools link on Navbar | Displays the tool list | Clicked on link | Scroll to tools list on home page | Pass |
| Contact us link on Navbar | Displays the contact us form | Clicked on link | Scroll to contact us form in the footer | Pass |
| Start rentaing button | Displays the tool list | Clicked on button | Scroll to tools list on home page | Pass |
| Rent Now button on tool's card | Directs the user to the rental page | Clicked on button | Load tool's rental page | Pass |
| Contact Supplier button on tool's card |  Directs the user to the contact supplier page | Clicked on button | Load contact tool's supplier page | Pass |
| Social media icon in the footer | Link user with social media pages | Clicked on icon | Open social media pages on new tab | Pass |
| Send button on contact us form in the footer | Verifies the entered information and if it is found to be correct, the user is taken to the response page. | Clicked on button | Phrases are displayed to modify the fields in case something is entered incorrectly, and if all the fields meet the validation conditions, the response page is loaded. | Pass |
| Button hover | Show an eye-catching effect to the user when the mouse approaches the button | Button hovering | Chane button style such as font or border color | Pass |


<br>
<br>

`Rental Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The Sites logo | Link directs the user back to the home page | Clicked logo | Home page reloads | Pass |
| The Home link on Navbar | Link directs the user back to the home page | Clicked link | Home page reloads | Pass |
| Tools link on Navbar | Displays the tool list | Clicked on link | Scroll to tools list on home page | Pass |
| Contact us link on Navbar | Displays the contact us form | Clicked on link | Scroll to contact us form in the footer | Pass |
| Continue Renting button |  Displays the rent form | Clicked on button | Scroll to rent form section | Pass |
| Send button on rent form | Verifies the entered information and if it is found to be correct, the user is taken to the response page. | Clicked on button | Phrases are displayed to modify the fields in case something is entered incorrectly, and if all the fields meet the validation conditions, the response page is loaded. | Pass |
| Social media icon in the footer | Link user with social media pages | Clicked on icon | Open social media pages on new tab | Pass |
| Send button on contact us form in the footer | Verifies the entered information and if it is found to be correct, the user is taken to the response page. | Clicked on button | Phrases are displayed to modify the fields in case something is entered incorrectly, and if all the fields meet the validation conditions, the response page is loaded. | Pass |
| Button hover | Show an eye-catching effect to the user when the mouse approaches the button | Button hovering | Chane button style such as font or border color | Pass |

<br>
<br>

`Conact Supplier Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The Sites logo | Link directs the user back to the home page | Clicked logo | Home page reloads | Pass |
| The Home link on Navbar | Link directs the user back to the home page | Clicked link | Home page reloads | Pass |
| Tools link on Navbar | Displays the tool list | Clicked on link | Scroll to tools list on home page | Pass |
| Contact us link on Navbar | Displays the contact us form | Clicked on link | Scroll to contact us form in the footer | Pass |
| Continue to contact form button |  Displays the contact supplier form | Clicked on button | Scroll to contact supplier form section | Pass |
| Send button on contact supplier form | Verifies the entered information and if it is found to be correct, the user is taken to the response page. | Clicked on button | Phrases are displayed to modify the fields in case something is entered incorrectly, and if all the fields meet the validation conditions, the response page is loaded. | Pass |
| Social media icon in the footer | Link user with social media pages | Clicked on icon | Open social media pages on new tab | Pass |
| Send button on contact us form in the footer | Verifies the entered information and if it is found to be correct, the user is taken to the response page. | Clicked on button | Phrases are displayed to modify the fields in case something is entered incorrectly, and if all the fields meet the validation conditions, the response page is loaded. | Pass |
| Button hover | Show an eye-catching effect to the user when the mouse approaches the button | Button hovering | Chane button style such as font or border color | Pass |


<br>
<br>

`Response Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The Sites logo | Link directs the user back to the home page | Clicked logo | Home page reloads | Pass |
| The Home link on Navbar | Link directs the user back to the home page | Clicked link | Home page reloads | Pass |
| Tools link on Navbar | Displays the tool list | Clicked on link | Scroll to tools list on home page | Pass |
| Contact us link on Navbar | Displays the contact us form | Clicked on link | Scroll to contact us form in the footer | Pass |
| Go to Homepage button | Link directs the user back to the home page | Clicked button | Home page reloads | Pass |
| Social media icon in the footer | Link user with social media pages | Clicked on icon | Open social media pages on new tab | Pass |
| Send button on contact us form in the footer | Verifies the entered information and if it is found to be correct, the user is taken to the response page. | Clicked on button | Phrases are displayed to modify the fields in case something is entered incorrectly, and if all the fields meet the validation conditions, the response page is loaded. | Pass |
| Button hover | Show an eye-catching effect to the user when the mouse approaches the button | Button hovering | Chane button style such as font or border color | Pass |