$(function(){
  let submit = $('#submit');                         
  submit.attr('disabled','disabled');                          
  submit.addClass("disable");
        
  $($(":input")).on("input", function() {
    if($('#username').val().length > 0 && $('#pwd1').val().length > 9 && $('#pwd1').val() === $('#pwd2').val() && $("#checkbox").prop('checked') == true && $('#countries').find(":selected").text() != 'Select your country') {
      
      submit.removeClass( "disable" );
      submit.addClass( "enable" ); 
    } else if($('#username').val().length == 0 || $('#pwd1').val().length < 10 || $('#pwd1').val() != $('#pwd2').val() || $("#checkbox").prop('checked') == false || $('#countries').find(":selected").text() === 'Select your country') {

      submit.addClass( "disable" );
      submit.removeClass( "enable" );    
    }

    if(submit.hasClass("enable")) {
      submit.removeAttr('disabled');

    } else if(submit.hasClass("disable")) {
      submit.attr('disabled','disabled'); 
    }     
  });

  submit.click(function(e){
    e.preventDefault();
    $('body').append(`Welcome ${$('#username').val()}! The country code you selected is ${$('#countries').find(":selected").attr('value')}`);
    submit.removeClass( "enable" ); 
    submit.addClass("disable");
    submit.attr('disabled','disabled');        
  }); 

 

var select = document.getElementById("countries");

for(var i = 0; i < countries.length; i++) {
    var country = countries[i];
    var el = document.createElement("option");
    el.textContent = country.name;
    el.value = country.code;
    select.appendChild(el);
}





});