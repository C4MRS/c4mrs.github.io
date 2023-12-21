$(function () {
  var age = new Date(new Date() - new Date(2002, 8, 20)).getFullYear() - 1970;
  $("#age").html(age);
});
