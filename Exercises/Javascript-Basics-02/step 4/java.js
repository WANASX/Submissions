function resfa() {
  var retVal = confirm("Do you want to continue ?");
  if (retVal == true) {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("city").value = "";
    return true;
  } else {
    alert("fuck ");
  }
}
