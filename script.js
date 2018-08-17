/*
    Project 01_06_01
    Author: Christopher Merriman
    Date: 8.16.18
    File: script.js
*/

'use strict';
var formValidity = true;


//Function to validate the form
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    formValidity = false;
    //Framework if the form fields are all valid
    if (formValidity === true) {
        document.getElementById('errorText').innerHTML = '';
        document.getElementById('errorText').style.display = '';
        document.getElementsByTagName('form')[0].submit();
    } else {
        document.getElementById('errorText').innerHTML = 'Please fix the incorrect fields';
        document.getElementById('errorText').style.display = 'block';
        scroll(0,0);
    }
}


//Function to create event listeners
function createEventListeners() {
    //Event listener for the submit action
    var form = document.getElementsByTagName('form')[0];
    if (form.addEventListener) {
        form.addEventListener('submit', validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent('onsubmit', validateForm);
    }
}

//Add load event listeners
if (window.addEventListener) {
    window.addEventListener('load', createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', createEventListeners);
}
