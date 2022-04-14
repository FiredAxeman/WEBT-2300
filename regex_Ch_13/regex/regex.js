"use strict";

$(document).ready( () => {
    $("#validate").click( () => {
        const phone = $("#phone").val();
        //const pattern = /^\d{3}-\d{3}-\d{4}$/;   // 999-999-9999 original pattern
        //step5 
        //const pattern =/^((1-))\d{3}-\d{3}-\d{4}$/; //enforced 1-(1-999-999-9999)
        //const pattern =/^((1-))?\d{3}-\d{3}-\d{4}$/; //optional 1- (1-999-999-9999)
        // screwing around with the step 5 pattern I got 7
        //const pattern = /^((1-)|(1 )|(1))?\d{3}-\d{3}-\d{4}$/ //optional 1 with or without dash or space
        //step 6
        //const pattern = /^((1(-|.))|(1 ))?\d{3}(-|.)\d{3}(-|.)\d{4}$/; //optional 1 with periods or dashes
        //step 6 modified to step 7 
        //const pattern = /^((1(-|.))|(1 )|(1))?\d{3}(-|.)\d{3}(-|.)\d{4}$/; //optional 1 with or without dashs or space or periods
        //step 7
        //const pattern = /^((1(-|.))|(1 ))?(\d{3}|\(\d{3}\))(-|.)\d{3}(-|.)\d{4}$/; //optional 1, periods or dash, optional parentheses around area code and blank space after 1
        // and last the way I think it should be since I hate the stupid space.
        const pattern = /^((1(-|.))|(1 )| (1))?(\d{3}|\(\d{3}\))(-|.)\d{3}(-|.)\d{4}$/;
        const isValid = pattern.test(phone);
        //alert(pattern.test(phone)); //alert for testing, I like having the boolean tester like the book shows 

        $("#message").text( (isValid) ? "Valid phone number" : "Invalid phone number" );
        $("#phone").focus();
    }); // end click()
    
    $("#phone").val("123-456-7890");             // set default phone number
    $("#phone").focus(); 
                        // set focus on initial load
    
    
}); // end ready()