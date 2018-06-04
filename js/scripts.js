$(document).ready(function(){
  debugger;
  var icecreamFlavors = ["Chocolate", "Vanilla", "Strawberry", "Nutmeg"];
  icecreamFlavors.forEach(function(icecreamFlavor){
    $("ul#myIcecream").prepend("<li> "+ icecreamFlavor +" </li>");
  });
});
