const form = document.getElementById("form");
const formFieldPrimary = document.getElementsByTagName("input");
const loanAmountPrimary = document.getElementById("loan-amount");
const firstNamePrimary = document.getElementById("firstNamePrimary");
const lastNamePrimary = document.getElementById("lastNamePrimary");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const nextButton = document.getElementById("nextBtn");
const showPass = document.getElementById("show");
const showPass2 = document.getElementById("show2");
const showSSN = document.getElementById("showSSN");
const addCountry = document.getElementById("add--country");
const addJob = document.getElementById("add--job");
const employerPrimary = document.getElementById("employerPrimary");
const employerPrimaryTime = document.getElementById("employerTime");
const loanReason1 = document.getElementById("loan-purpose-primary");
const unit = document.getElementById("unit-primary-home");
const securityAnswer = document.getElementById("security-answer");






///// Multi Step Form Test - Temp -- Check validation and possibly merge
let currentpage = 0; // Current page is set to be the first page (0)
showpage(currentpage); // Display the current page
function showpage(n) {
  let x = document.getElementsByClassName("page");
  x[n].style.display = "block";
  // Chage the SUBMIT -- minus number of pages before the end -- legal and thank you pages are stored AFTER submit page
  if (n === x.length - 3) {
    document.getElementById("nextBtn").innerHTML = "Submit";
    // document.getElementById("nextBtn").style.display = "flex";
  }
  else if (currentpage === 0) {
    document.getElementById("nextBtn").innerHTML = "Start your application";
  }
  else if (currentpage === x.length - 1) {
    document.getElementById("nextBtn").style.display = "none"; // Remove button for thank you page
    document.getElementById("subBtn").style.display = "none"; // Remove button for thank you page
  }
  else if (currentpage === x.length - 2) {
    document.getElementById("nextBtn").style.display = "none"; // Remove button for thank you page
    document.getElementById("subBtn").style.display = "none"; // Remove button for thank you page
  }
  else {
    document.getElementById("nextBtn").style.display = "flex"; // Remove button for thank you page
    document.getElementById("nextBtn").innerHTML = "Continue";
    // document.getElementById("nextBtn").style.display = "flex";
  }
}
function nextPrev(n) {
  let x = document.getElementsByClassName("page");
  // Exit the function if any field in the current page is invalid
  if (n === 1 && !validateForm())return false;
  x[currentpage].style.display = "none";
  currentpage = currentpage + n;
  // End
  if (currentpage >= x.length) {
    document.getElementById("form").submit();
    return false;
  }
  showpage(currentpage);
}
function Prev(n){
  let x = document.getElementsByClassName("page");
  x[currentpage].style.display = "none";
  currentpage = currentpage - n;
  showpage(currentpage);
}


function lastPageSkip(n){
  let x = document.getElementsByClassName("page");
  lastPage = document.getElementById("page-end")
  x[currentpage].style.display = "none";
  currentpage = x.length - 3;
  showpage(currentpage);
  subBTN.classList.remove("active");
  // if (currentpage !== x.length - 3 ){
  //   document.getElementById("nxtBtn").style.display = "flex"; // Remove button for thank you page
  // } else{
  //   document.getElementById("subBtn").style.display = "none"; // Remove button for thank you page
  // }
}

function validateForm() {
  const form = document.getElementById("form");
  let x,y,i, valid = true;
  let next = document.getElementById("nextBtn");
  x = document.getElementsByClassName("page");
  y = x[currentpage].getElementsByClassName("input-field");
  // y = x[currentpage].getElementsByTagName("input");

  let err = 0;
//////// All Pages ////////
// Check for empty
  for (i = 0; i < y.length; i++) {
    if (y[i].value.trim() === "") {
      setErrorFor(y[i], `${getFieldName(y[i])} is required`);
      err++;
    }
    // else if (y[i].childNodes[i].type == "email"){
    //   checkEmail(y[i]);
    // }
    else{
      setSuccessFor(y[i]);
      // next.disabled = false;
    }
  }
  if (err === 0){
    return valid; // return the valid status
  }
}

//   // Page 1 double checks on submit ~ This is pretty verbose but due to time constraints will have to circle back after handoff to clean up, or use a framework or validation package.
//   if (currentpage === 1){

//   let radio1 = document.getElementsByName("question");
//   let parent = radio1[0].parentElement;
//   let check1 = 0;
//   let radio2 = document.getElementsByName("loan-type");
//   let parent2 = radio2[0].parentElement;
//   let check2 = 0;
//   let radio3 = document.getElementsByName("loan-terms");
//   let parent3 = radio3[0].parentElement;
//   let check3 = 0;

//   // const small = formControl.querySelector("small");
//   // small.innerText = message;

// // Had to run these radio validations seperately ~ was only checking if the final options was checked within page/form -- Circle back
//   for(i=0;i<radio1.length;i++){
//     if(radio1[i].checked){
//       check1++;
//     }
//   }
//   for(i=0;i<radio2.length;i++){
//     if(radio2[i].checked){
//       check2++;
//     }
//   }
//   for(i=0;i<radio3.length;i++){
//     if(radio3[i].checked){
//       check3++;
//     }
//   }
// // Need to set error for parent -- Circle back
//   if(!check1){
//       valid = false;
//       parent.className = "loan--btn--group error";
//       }if (!check2) {
//         valid = false;
//         parent2.className = "loan--btn--group error";
//       }if (!check3) {
//         valid = false;
//         parent3.className = "loan--btn--group error";
//       }else{
//         // radio1.parentElement.className = "loan--btn--group";
//     }
//   }
  // // Page 2 double checks on submit - [name] ~
  // if (currentpage === 2){
  // let min = 3;
  // let max = 10;
  // const reg = /^[a-zA-Z]+$/;

  // // Min - Max ~ All fields - this can't be run on pages with tel and loan amount this way
  //   for (i = 0; i < y.length; i++) {
  //       if (y[i].value.length < min && y[i].type === "text") {
  //         setErrorFor(
  //           y[i],
  //           `${getFieldName(y[i])} must be at least ${min} letters`
  //         );
  //         valid = false;
  //       } else if (y[i].value.length > max && y[i].type === "text") {
  //         setErrorFor(
  //           y[i],
  //           `${getFieldName(y[i])} must be less than ${max} letters`
  //         );
  //         valid = false;
  //       }
  //       // First & Last Name
  //       if (reg.test(firstNamePrimary.value)) {
  //         setSuccessFor(firstNamePrimary);
  //       } else{
  //         setErrorFor(firstNamePrimary, `First name must ONLY contain letters.`);
  //         valid = false;
  //       }
  //       if (reg.test(lastNamePrimary.value)) {
  //         setSuccessFor(lastNamePrimary);
  //       } else {
  //         setErrorFor(lastNamePrimary, `Last name must ONLY contain letters.`);
  //         valid = false;
  //       }
  //     }
  //     // Select
  //     if (!checkSelect(y[i])){
  //       valid = false;
  //     }
  //   }
  // // Page 3 double checks on submit ~ [password, phone, email, select]
  // if (currentpage === 3){
  //   const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
  //   let passCheck = document.getElementById("password");
  //   if (re.test(passCheck.value.trim())) {
  //     setSuccessFor(passCheck);
  //   } else {
  //     setErrorFor( passCheck, "Your password is not strong enough. Please check the requirements.");
  //     valid = false;
  //   }
  //   if (password.value !== password2.value || password.value === "") {
  //     setErrorFor(password2, "Passwords do not match");
  //     valid = false;
  //   } else {
  //     setSuccessFor(password2);
  //     setSuccessFor(password);
  //   }
  //   // Select
  //   if (!checkSelect(y[i])){
  //     valid = false;
  //   }

  // }
  // // Page 4 double checks on submit [radio, unit*, money]
  // if (currentpage === 4){
  //   let radio1 = document.getElementsByName("housing");
  //   let parent = radio1[0].parentElement;
  //   let check1 = 0;
  //   for(i=0;i<radio1.length;i++){
  //     if(radio1[i].checked){
  //       check1++;
  //     }
  //   }
  //   if(!check1){
  //     valid = false;
  //     parent.className = "loan--btn--group error";
  //   }

  //   // if (!checkRadio(y[i])){
  //   //   valid = false;
  //   // }
  // }
  // Page 5 double checks on submit
//   if (currentpage === 5){
//     let radio1 = document.getElementsByName("work-status");
//     let parent = radio1[0].parentElement;
//     let check1 = 0;
//     for(i=0;i<radio1.length;i++){
//       if(radio1[i].checked){
//         check1++;
//       }
//     }
//     if(!check1){valid = false; parent.className = "loan--btn--group error";}
//   }
//   // Page 6 double checks on submit
//   if (currentpage === 6){
//   }
//   // Page 7 double checks on submit
//   if (currentpage === 7){
//   }
//   // Page 8 double checks on submit
//   if (currentpage === 8){
//   }
//   return valid; // return the valid status
// }
/////// Form Validation Functions ~ Some of these can probably be scrapped ///////
// Show input error message
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  formControl.className = "input-group error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
// Show success outline
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "input-group success";
}
// Check required fields new ~ Added to validateForm
function checkIfEmpty(input) {
  if (input.value.trim() === "") {
    setErrorFor(input, `${getFieldName(input)} is required`);
    valid = false;
  } else {
    setSuccessFor(input);
  }
}
// // Radio Validation on submit
// function checkRadio(e) {
//   let x,y,i,valid = true;
//   x = document.getElementsByClassName("page");
//   y = x[currentpage].getElementsByTagName("input");
//   let radioResults = "Radio buttons: ";

//   for (i = 0; i < y.length; i++) {
//     if (y[i].type === "radio") {
//       if (y[i].checked) {
//         radioResults += y[i].value + " ";
//         y[i].parentElement.className = "loan--btn--group";
//         valid = true;
//       } else {
//         y[i].parentElement.className = "loan--btn--group error";
//         valid = false;
//       }
//     }
//   }
//   console.log(radioResults);
//   return valid; // return the valid status
// }
// Select Validation on submit
function checkSelect(obj) {
let x,y,i,valid = true;
  x = document.getElementsByClassName("page");
  y = x[currentpage].getElementsByTagName("select");
  for (i = 0; i < y.length; i++) {
    if (y[i].value === "0") {
      y[i].style.border = "1px solid red";
      setErrorFor(y[i], `${getFieldName(y[i])} is required`);
      valid = false;
    } else {
      y[i].style.border = "1px solid #2ecc71;";
    }
  }
  return valid; // return the valid status
}





// Check input length -- Checked onblur
function checkTextInput(input, min, max) {
  if (input.value.length < min) {
    setErrorFor(
      input,
      `${getFieldName(input)} must be at least ${min} letters`
    );
  } else if (input.value.length > max) {
    setErrorFor(
      input,
      `${getFieldName(input)} must be less than ${max} letters`
    );
  } else {
    setSuccessFor(input);
    lettersOnly(input);
  }
}
// Check input length -- Checked onblur
function checkNumberInput(input, min, max) {
  if (input.value.length < min) {
    setErrorFor(
      input,
      `${getFieldName(input)} must be at least ${min} numbers`
    );
  } else if (input.value.length > max) {
    setErrorFor(
      input,
      `${getFieldName(
        input
      )} must be only ${max} numbers. Enter numbers only.`
    );
  } else {
    setSuccessFor(input);
    formatPhone(input);
  }
}
// Check input length -- Checked onblur
function checkMixedInput(input, min, max) {
  if (input.value.length < min) {
    setErrorFor(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    setErrorFor(
      input,
      `${getFieldName(
        input
      )} must be only ${max} numbers. Please enter only numbers, do not include the country code.`
    );
  } else {
  }
}
// Phone format
function formatPhone(obj) {
  let numbers = obj.value.replace(/\D/g, ""),
    char = { 0: "(", 3: ") ", 6: "-" };
  obj.value = "";
  for (let i = 0; i < numbers.length; i++) {
    obj.value += (char[i] || "") + numbers[i];
  }
}
// Numbers Only
function numberOnly(input) {
  const regex = /[^0-9]/gi;
  input.value = input.value.replace(regex, "");
}
// // Check for Letters Only
function lettersOnly(input) {
  const regex = /^[a-zA-Z]+$/;
  if (regex.test(input.value)) {
    setSuccessFor(input);
  } else {
    setErrorFor(input, `${getFieldName(input)} must ONLY contain letters.`);
  }
}
// Check email is valid
function checkEmail(input) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(input.value.trim())) {
    setSuccessFor(input);
    return valid;
  } else {
    setErrorFor(input, "Please enter a valid Email address");
  }
}
// Password Validation ~ 1 letter + 1 number + 1 special character between 8 - 20 characters
// Due to time contraints this is single error ~ the regex can be broken down and if/else can be added for each state to show indpendent error msg if needed
function passwordValidate(input) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
  if (regex.test(input.value.trim())) {
    setSuccessFor(input);
  } else {
    setErrorFor(
      input,
      "Your password is not strong enough. Please check the requirements."
    );
  }
}
// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value || input1.value === "") {
    setErrorFor(input2, "Passwords do not match");
    valid = false;
  } else {
    setSuccessFor(input2);
    setSuccessFor(input1);
  }
}
// Get fieldname
function getFieldName(input) {
  return input.name;
}


// Text Show - Hide -- Add ELSE-IF for other DIV IDs or create new function to pass in variable if preferred
function onTextHidden(obj) {
  let selectedValue = obj.value;
  if (selectedValue !== "") {
    document.getElementById("loanTerms").style.display = "block";
  } else {
    document.getElementById("loanTerms").style.display = "none";
  }
}
// Min Max for loan Amount
function loanAmountMinMax(input) {
  if (input.value < 5000 || input.value > 100000) {
    setErrorFor(input, "Enter an amount between $5000 - $100,000");
  } else {
    setSuccessFor(input);
    numberOnly(input);
    onTextHidden(input);
  }
}
// Money Format ~
let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
function formatCurrency(input) {
  let amount = input.value;
  input.value = formatter.format(amount);
  if (input.value === "$NaN") {
    input.value = "";
    setErrorFor(
      input,
      "Sorry this does not appear to be the correct format. Please use only Numbers."
    );
  } else if (input.value === "$0") {
    setErrorFor(input, "Please enter a number greater than 0");
  } else {
  }
}
////// Change Label Text (or any text really) Dynamically
function employerNames(e) {
  let employerName = employerPrimary.value;
  employerPrimaryTime.innerHTML = `Time at ${employerName}`;
}
////// Event listeners //////
// Password Show - Hide - Done ~ Toggle between text input and password
showPass.addEventListener("click", function (e) {
  // toggle the type attribute
  let type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
});
showPass2.addEventListener("click", function (e) {
  // toggle the type attribute
  let type =
    password2.getAttribute("type") === "password" ? "text" : "password";
  password2.setAttribute("type", type);
});

// New
showSSN.addEventListener("click", function (e) {
  // toggle the type attribute
  let type = ssn.getAttribute("type") === "password" ? "text" : "password";
  ssn.setAttribute("type", type);
});




// // Add an additional field - Done
// addCountry.addEventListener("click", function (e) {
//   let boxes = document.getElementById("add-country");
//   let clone = boxes.firstElementChild.cloneNode(true);
//   boxes.appendChild(clone);
// });
// addJob.addEventListener("click", function (e) {
//   let boxes = document.getElementById("add-job");
//   let clone = boxes.firstElementChild.cloneNode(true);
//   boxes.appendChild(clone);
// });
form.addEventListener("submit", function (e) {
  e.preventDefault();
});





///////////////////////////////////////////////////// NEW 4/21

// Adding Data to Final Page

// Array.from(document.querySelectorAll('#form input, select')).reduce((acc, input) => ({ ...acc, [input.id]: input.value}), {});

const nameDataTest = document.getElementById("nameDataTest");
const nameDataTest2 = document.getElementById("nameDataTest2");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const dob = document.getElementById("dob");
const ssn = document.getElementById("SSN");
const country = document.getElementById("country");
const address = document.getElementById("address");
const address2 = document.getElementById("address2");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip = document.getElementById("zip");
const phone = document.getElementById("phone");
const job = document.getElementById("job");
const income = document.getElementById("income");
const subBTN = document.getElementById("subBtn");



// Name
function nameData(e) {
  let nameDataText = firstName.value;
  let nameDataLast = lastName.value;
  nameDataTest.innerHTML = `${nameDataText} ${nameDataLast}`;
  nameDataTest2.innerHTML = `${nameDataText}`;
}

// Email
function emailData(e) {
  let emailDataText = email.value;
  emailDataTest.innerHTML = `${emailDataText}`;
}
// DOB
function dobData(e) {
  let dobDataText = dob.value;
  dobDataTest.innerHTML = `${dobDataText}`;
}

// ssn
function ssnData(e) {
  let ssnDataText = ssn.value;
  ssnDataTest.innerHTML = `${ssnDataText}`;
}
// country
function countryData(e) {
  let countryDataText = country.value;
  countryDataTest.innerHTML = `${countryDataText}`;
}
// address
function addressData(e) {
  let addressDataText = address.value;
  let address2DataLast = address2.value;
  let cityDataLast = city.value;
  let stateDataLast = state.value;
  let zipDataLast = zip.value;
  addressDataTest.innerHTML = `${addressDataText} ${address2DataLast} ${cityDataLast}, ${stateDataLast} ${zipDataLast}`;
}
// phone
function phoneData(e) {
  let phoneDataText = phone.value;
  phoneDataTest.innerHTML = `${phoneDataText}`;
}
// job
function jobData(e) {
  let jobDataText = job.value;
  jobDataTest.innerHTML = `${jobDataText}`;

}
// income
function incomeData(e) {
  let incomeDataText = income.value;
  incomeDataTest.innerHTML = `${incomeDataText}`;
}


/// For the Font Awesome Icons attached to Password Policies as well as the valid class to the text
function checkInvalidity(e) {
  checkLength(e);
  checkNumber(e);
  checkSpecial(e);

        function checkLength(input){

          const pwordLength = document.querySelector('.policy-length');

          let circle = document.querySelector('.password-policies .policy-length :nth-child(1)');
          let square = document.querySelector('.password-policies .policy-length :nth-child(2)');
          let redX = document.querySelector('.password-policies .policy-length :nth-child(3)');

          circle.classList.remove('fa-valid');

          if ( input.value.length > 8 && input.value.length < 20 ) {
            redX.classList.remove('fa-valid');
            square.classList.add('fa-valid')
            pwordLength.classList.add('valid')
            pwordLength.classList.remove('invalid')
          } else{
            redX.classList.add('fa-valid');
            square.classList.remove('fa-valid')
            pwordLength.classList.add('invalid')
            pwordLength.classList.remove('valid')
          }

        }
        function checkNumber(input){

          const pwordNumber = document.querySelector('.policy-number');

          let circle = document.querySelector('.password-policies .policy-number :nth-child(1)');
          let square = document.querySelector('.password-policies .policy-number :nth-child(2)');
          let redX = document.querySelector('.password-policies .policy-number :nth-child(3)');

          circle.classList.remove('fa-valid');

          if ( input.value.match(/[0-9]/g) && input.value.match(/[A-Za-z]/g) ) {
            redX.classList.remove('fa-valid');
            square.classList.add('fa-valid')
            pwordNumber.classList.add('valid')
            pwordNumber.classList.remove('invalid')
          } else{
            redX.classList.add('fa-valid');
            square.classList.remove('fa-valid')
            pwordNumber.classList.add('invalid')
            pwordNumber.classList.remove('valid')
          }

        }
        function checkSpecial(input){

          const pwordNumber = document.querySelector('.policy-special');

          let circle = document.querySelector('.password-policies .policy-special :nth-child(1)');
          let square = document.querySelector('.password-policies .policy-special :nth-child(2)');
          let redX = document.querySelector('.password-policies .policy-special :nth-child(3)');

          circle.classList.remove('fa-valid');

          if (input.value.match(/[\!\.\#\$\-\.\&\*]/g)) {
            redX.classList.remove('fa-valid');
            square.classList.add('fa-valid')
            pwordNumber.classList.add('valid')
            pwordNumber.classList.remove('invalid')
          } else{
            redX.classList.add('fa-valid');
            square.classList.remove('fa-valid')
            pwordNumber.classList.add('invalid')
            pwordNumber.classList.remove('valid')
          }

        }

};

// Select Show / Hide -- Add ELSE-IF for other DIV IDs or create new function to pass in variable if preferred. Also removing Select error style.
function onSelectChangeCountry(obj) {
  let thisSelect = obj;
  let selectedValue = obj.value;
  let errorCountry = document.getElementById('errorTriangle');

  if (selectedValue !== "United States") {
    // document.getElementById("loanPurposeOther").style.display = "block";
    errorCountry.classList.add('invalid');
    setErrorFor(obj, `LightStream only banks with US citizens or US residents at this time.`);
    document.getElementById("nextBtn").style.pointerEvents = "none"; // Remove button for thank you page
    document.getElementById("nextBtn").style.background = "grey"; // Remove button for thank you page
  } else {
    errorCountry.classList.remove('invalid');
    setSuccessFor(obj);
    document.getElementById("nextBtn").style.pointerEvents = "auto"; // Remove button for thank you page
    document.getElementById("nextBtn").style.background = "#f8bf00"; // Remove button for thank you page
  }
}

/// SSN TEST


function formatSSN(ssn) {
  // remove all non-dash and non-numerals
  let val = ssn.replace(/[^\d-]/g, '');

  // add the first dash if number from the second group appear
  val = val.replace(/^(\d{3})-?(\d{1,2})/, '$1-$2');

  // add the second dash if numbers from the third group appear
  val = val.replace(/^(\d{3})-?(\d{2})-?(\d{1,4})/, '$1-$2-$3');

  // remove misplaced dashes
  val = val.split('').filter((val, idx) => {
    return val !== '-' || idx === 3 || idx === 6;
  }).join('');

  // enforce max length
  return val.substring(0, 11);
}

// bind our function
document.getElementById("SSN").oninput = function(e) {
  this.value = formatSSN(this.value);
  if (this.value.length === 11 ){
    setSuccessFor(this);
  } else{
    setErrorFor(this, `Please enter a valid Social Security Number`);
  }

}

/// Edit page fucntions

// function editName(e) {
//   let x = document.getElementsByClassName("page");
//   x[currentpage].style.display = "none";
//   currentpage = 0;
//   showpage(currentpage);
//   subBTN.classList.add("active");
// }
function editID(e) {
  let x = document.getElementsByClassName("page");
  x[currentpage].style.display = "none";
  currentpage = 3;
  showpage(currentpage);
  subBTN.classList.add("active");
}
function editPersonal(e) {
  let x = document.getElementsByClassName("page");
  x[currentpage].style.display = "none";
  currentpage = 1;
  showpage(currentpage);
  subBTN.classList.add("active");
}
// function editJob(e) {
//   let x = document.getElementsByClassName("page");
//   x[currentpage].style.display = "none";
//   currentpage = 3;
//   showpage(currentpage);
//   subBTN.classList.add("active");
// }

// // On Cick for legal a hrefs // usee the page position within the form
// function legalDoc(e) {
//   let x = document.getElementsByClassName("page");
//   x[currentpage].style.display = "none";
//   currentpage = 6;
//   showpage(currentpage);
//   subBTN.classList.add("active");
// }

/// Legal Toggle 1 -- This will need to be replaced with jquery or something - works for now
function legalToggle1(e) {
  let legal1 = document.getElementById("legal-1");
  let x = document.getElementsByClassName("page");
  x[currentpage].style.display = "none";
  legal1.style.display = "inline-block";
  document.getElementById("nextBtn").style.display = "none"; // Remove button for thank you page

}
// Back arrow to hide Legal
function legalBack1(e) {
  let legal1 = document.getElementById("legal-1");
  legal1.style.display = "none";
  currentpage = 1;
  showpage(currentpage);
  x[currentpage].style.display = "inline-block";
  subBTN.classList.add("active");
  document.getElementById("nextBtn").style.display = "flex"; // Remove button for thank you page
}
/// Legal Toggle 2 -- This will need to be replaced with jquery or something - works for now
function legalToggle2(e) {
  let legal2 = document.getElementById("legal-2");
  let x = document.getElementsByClassName("page");
  x[currentpage].style.display = "none";
  legal2.style.display = "inline-block";
  document.getElementById("nextBtn").style.display = "none"; // Remove button for thank you page

}
// Back arrow to hide Legal
function legalBack2(e) {
  let legal2 = document.getElementById("legal-2");
  legal2.style.display = "none";
  currentpage = 2;
  showpage(currentpage);
  x[currentpage].style.display = "inline-block";
  subBTN.classList.add("active");
  document.getElementById("nextBtn").style.display = "flex"; // Remove button for thank you page
}
/// Legal Toggle 3 -- This will need to be replaced with jquery or something - works for now
function legalToggle3(e) {
  let legal3 = document.getElementById("legal-3");
  let x = document.getElementsByClassName("page");
  x[currentpage].style.display = "none";
  legal3.style.display = "inline-block";
  document.getElementById("nextBtn").style.display = "none"; // Remove button for thank you page

}
// Back arrow to hide Legal
function legalBack3(e) {
  let legal3 = document.getElementById("legal-3");
  legal3.style.display = "none";
  currentpage = 4;
  showpage(currentpage);
  x[currentpage].style.display = "inline-block";
  subBTN.classList.add("active");
  document.getElementById("nextBtn").style.display = "flex"; // Remove button for thank you page
}