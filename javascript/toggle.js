function toggle(id) {
  var elem = document.getElementById(id);
  var content = document.getElementById(id+'data');
  if (content.style.display === "block") {
    elem.innerHTML = '+ Show';  
    content.style.display = "none";
  } else {
    elem.innerHTML = '- Hide';
    content.style.display = "block";
  }
}