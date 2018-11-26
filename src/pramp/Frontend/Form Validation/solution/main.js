const form = document.forms['sign-up-form']
const firstName = form.firstName
const lastName = form.lastName
const email = form.email
const password = form.password
const passwordConfirm = form.passwordConfirm
const emailPattern = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$')
const emailLengthPattern = new RegExp(email.getAttribute('pattern'))
const passwordPattern = new RegExp(password.getAttribute('pattern'))

function customValidity(input) {
  // setCustomValidity() method sets the custom validity message for the selection element to the specified message
  // Use the empty string to indicate that the element does not have a custom validity error
  if (input.setCustomValidity) {
    input.setCustomValidity('')

    // The ValidityState interface represents the validity states that an element can be in
    if (input.validity && !input.validity.valid) {
      // Replaces "Please fill out this field" with "First name is required"
      input.setCustomValidity(input.title)
    }
  }
}

function validateForm() {
  if (
    firstName.value.length === 0 ||
    lastName.value.length === 0 ||
    !emailPattern.test(email.value) ||
    !emailLengthPattern.test(email.value) ||
    !passwordPattern.test(password.value) ||
    !passwordPattern.test(passwordConfirm.value) ||
    password.value !== passwordConfirm.value
  ) {
    return false
  }
}

function validateRequired(input) {
  customValidity(input)

  if (input.value.length > 0) {
    input.classList.add('valid')
  } else {
    input.classList.remove('valid')
  }
}

function validateEmail(input) {
  if (emailPattern.test(input.value) && emailLengthPattern.test(input.value)) {
    input.classList.add('valid')
  } else {
    input.classList.remove('valid')
  }
}

function validatePassword(input) {
  customValidity(input)
  customValidity(passwordConfirm)

  if (passwordPattern.test(input.value)) {
    input.classList.add('valid')

    if (password.value === passwordConfirm.value) {
      passwordConfirm.classList.add('valid')
    } else {
      passwordConfirm.classList.remove('valid')
    }
  } else {
    input.classList.remove('valid')
  }
}
