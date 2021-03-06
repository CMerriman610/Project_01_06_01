/*
    Project 01_06_01
    Author: Christopher Merriman
    Date: 8.16.18
    File: script.js
*/

'use strict';
var formValidity = true;
var badInput = 'rgb(229, 95, 68)';


//Function to validate the required fields
function validateRequired() {
    var inputElement = document.querySelectorAll('#contactinfo input');
    var errorDiv = document.getElementById('errorText');
    var numError = document.getElementById('numErrorText');
    var fieldsetValidity = true;
    var elementCount = inputElement.length;
    var current;
    try {
    //Loop to check if the input elements are empty
    for (var i = 0; i < elementCount; i++) {
        current = inputElement[i];
        //Blank
        if (current.value === '') {
            current.style.background = badInput;
            fieldsetValidity = false;
        }
        //Filled
        else {
            current.style.background = 'white';
        }
    }
        //Error message for incompleted fields
        if (fieldsetValidity === false) {
            throw 'Please enter your information';
        } else {
            errorDiv.style.display = '';
            errorDiv.innerHTML = '';
        }
    }
    //Displays error message
    catch (msg){
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}
//Function to validate the form
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    formValidity = true;
    validateRequired();
    //Framework if the form fields are all valid
    if (formValidity === true) {
        document.getElementById('errorText').innerHTML = '';
        document.getElementById('errorText').style.display = '';
        document.getElementsByTagName('form')[0].submit();
    }
    //Else is no longer encessary due to try/catch
    // else {
    //     // document.getElementById('errorText').innerHTML = 'Please fix the incorrect fields';
    //     // document.getElementById('errorText').style.display = 'block';
    //     scroll(0,0);
    // }
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
