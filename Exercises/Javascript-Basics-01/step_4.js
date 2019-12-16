function val() {
  var fname = document.getElementById("name").value;
  var lname = document.getElementById("surname").value;
  var city = document.getElementById("city").value;

  alert(
    "First Name : " +
      fname +
      "\n" +
      "Last Name : " +
      lname +
      "\n" +
      "City : " +
      city
  );
}
