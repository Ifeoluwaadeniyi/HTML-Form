function validateForm() {
  let fname = document.forms["form"]["fname"].value;
  if (fname == "") {
    alert("FirstName must be filled out");
    return false;
  }
  let lname = document.forms["form"]["lname"].value;
  if (lname == "") {
    alert("LastName must be filled out");
    return false;
  }
  let mail = document.forms["form"]["email"].value;
  if (mail == "") {
    alert("email must be filled out");
    return false;
  }
  let contact = document.forms["form"]["mobile"].value;
  if (contact == "" || contact.length !== 11) {
    alert("Mobile contact is required and should be exactly 10 digits.");
    return false;
  }
  let genderStatus = document.forms["form"]["gender"].value;
  if (genderStatus == "") {
    alert("Please select your gender");
    return false;
  }
  // Convert form data to JSON string
  var jsonData = JSON.stringify(validateForm);
  // Save JSON data to file
  var file = new Blob([jsonData], { type: "application/json" });
  var a = document.createElement("a");
  var url = URL.createObjectURL(file);
  a.href = url;
  a.download = "database.json";
  document.body.appendChild(a);
  a.click();
  setTimeout(function () {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0);
}
