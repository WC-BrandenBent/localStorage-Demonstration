document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let occupation = document.getElementById("occupation").value;

  let userJson = {
    firstName: firstName,
    lastName: lastName,
    occupation: occupation
  };

  // Do something with the form data
  // For example, you can store it in local storage

  // BELOW IS INCORRECT, AS IT WILL CREATE 3 KEYS AND SEPERATE THE VALUES. ALSO IT WILL CAUSE THE FORM TO OVERWRITE THOSE VALUES INSTEAD OF CREATING NEW ONES
  // ie avoid hardcoding Key names
  // localStorage.setItem("firstName", firstName);
  // localStorage.setItem("lastName", lastName);
  // localStorage.setItem("occupation", occupation);

  localStorage.setItem(`${userJson.firstName}`, JSON.stringify(userJson));

  // Clear form fields
  document.getElementById("myForm").reset();


//   console.log(localStorage.getItem("Johnny"));


});

let brandenString = localStorage.getItem("Branden");

console.log(brandenString + " " + typeof(brandenString));

let brandenJson = JSON.parse(brandenString);

console.log(brandenJson + " " +typeof(brandenJson));

console.log(brandenJson.occupation);
