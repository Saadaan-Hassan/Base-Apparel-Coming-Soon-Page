# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot
Following are some screenshots of the projects:
- Desktop Preview
![Desktop Preview](./Screenshots/Desktop-Preview.png)
- Desktop Preview Invalid
![Desktop Preview Invalid](./Screenshots/Desktop-Preview-Invalid.png)
- Mobile Preview

![Mobile Preview](./Screenshots/Mobile-Preview.png)

- Mobile Preview Invalid

![Mobile Preview Invalid](./Screenshots/Mobile-Preview-Invalid.png)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/responsive-base-apparel-coming-soon-page-by-using-css-grid-and-flexbox-lyZ58q9QiJ)
- Live Site URL: [Base Apparel Coming Soon Page](https://saadaan-hassan.github.io/Base-Apparel-Coming-Soon-Page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

At first, the project seems to be a piece of cake, but it was quite difficult for me. I face difficulty in making the layout. Then the email validation took some time. It was really fun making this page. I recalled many concepts and also learn new concepts of Javascript.

It is how I write the code for email validation in js:

```js
const btn = document.getElementById("submit");
const user_email = document.getElementById("user-email");
const message = document.querySelector(".error-message");

btn.addEventListener("click", (email) => {
  email.preventDefault();
  const emailVal = user_email.value;

  if (validateEmail(emailVal)) {
    message.style.visibility = "hidden";
    return true;
  } else {
    console.log("Invalid email address!");
    message.style.visibility = "visible";
    return false;
  }
});

function validateEmail(email) {
  const regexText =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regexText.test(String(email).toLowerCase());
}
```

### Useful resources

- [w3resource Email Validation](https://www.w3resource.com/javascript/form/email-validation.php) - This helped me in understanding the concept of email validation in javascript. 

## Author

- Frontend Mentor - [@Saadaan-Hassan](https://www.frontendmentor.io/profile/Saadaan-Hassan)