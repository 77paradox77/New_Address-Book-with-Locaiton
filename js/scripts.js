// business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}
Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}
// business logic


// interface
$(document).ready(function(){
  $("form").submit(function(event){
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact (inputtedFirstName, inputtedLastName);
    event.preventDefault();

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName()  + "</span></li>")

    $(".contact").last().click(function(){
      console.log("click triggered");
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    })

  });


});
// interface
