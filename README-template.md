# Frontend Mentor - Intro component with sign up form solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

<img width="672" alt="Screen Shot 2023-08-10 at 4 06 36 PM" src="https://github.com/LBuchananCates/intro-component-with-signup-form/assets/100169368/867769e6-5b14-43c8-a980-3a39aa2bb9a0">


### Links

- Live Site URL: https://frabjous-sopapillas-3a5936.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- email verification


### What I learned

- good practice with email verification using Javascript
- if email address formatted incorrectly, error messages appear
- if email address formatted correctly, error messages disappear

- used onkeydown function in html then connected it through javascript
```html
<input type="email" required="required" id="email" placeholder="Email Address" onkeydown="validation()"/>
  <small class="error-message" id="email-error-msg">Looks like this is not an email</small><br />
```
- styling error classes and ensuring they work/display the correct way requires more attention to detail, which is why i'm proud of how I named and styled these
```css
.error-icon {
  background-image: url(./images/icon-error.svg);
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: center;
}

.error-message {
  visibility: hidden;
  color: red;
  text-align: right;
  font-style: italic;
}

/* error class for javascript*/
.error-border {
  border: solid 1px red;
}

.invalid {
  border: solid 1px red;
}
```
```js


```



### Continued development

- still need more practice with variations of form validation and regex so I dont have to look up the process every single time


## Author

- Frontend Mentor - [@LBuchananCates](https://www.frontendmentor.io/profile/lbuchanancates)
