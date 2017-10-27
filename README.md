# Beep Boop

#### It's a web application to create funny interaction wiht the user.

#### By Malgorzata Haniszewska

## Description
It is a web application (using HTML, CSS, JavaScript and jQuery) that takes a number from a user and returns a range of numbers from 0 to the chosen number with few exceptions when returns sentences.

##Specifications
* It can count up to the provided number:
  * Exemple Input: 3
  * Exemple Output: [1,2,3]
* When provided number contains a 1, is replaced with "Boop!"
  * Exemple Input: 11
  * Exemple Output: "Boop!"
* When provided number contains a 0, is replaced with "Beep!"
  * Exemple Input: 10
  * Exemple Output: "Beep!"
* When provided number is divisible by 3, is replaced with "I'm sorry, Dave. I'm afraid I can't do that."
  * Exemple Input: 3
  * Exemple Output: "I'm sorry, Dave. I'm afraid I can't do that."
* It can take user name and use it in returned message when provided number is divisible by 3:
  * Exemple Input: "Gosia"
  * Exemple Output: "I'm sorry, Gosia. I'm afraid I can't do that."
* When user number is not a number or it is smaller than 0, it will pop up an alert "Please enter a number that is greater than 0"
  * Exemple Input: -3
  * Exemple Output: (alert) "Please enter a number that is greater than 0"

## Setup/Installation Requirements

* Copy repository from GitHub to your computer using Terminal command $ git clone and then open index.html in a browser, or
* Open [link](https://yetka.github.io/Beep-Boop) in your browser.

## Support and contact details

Contact email: gosia.haniszewska@gmail.com

## Technologies Used

* HTML
* CSS
* JavaScript
* jQuery

### License

This project is licensed under the MIT License.
