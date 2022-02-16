
const $ = selector => document.querySelector(selector);

    const processEntries = () => 
    {
        const email1 = $("#email_1").value;
        const email2 = $("#email_2").value;
        const firstName = $("#first_name").value;
    
    
        // create an error message and set it to an empty string

        // check user entries - add text to error message if invalid
        if (email1 == "") 
        { 
           let errorMessage = "First email is required.\n";
        }
    
        if (email2 == "") 
        { 
            let errorMessage = "Second email is required.\n";
        }
    
        if (email1 != email2) 
        { 
            let errorMessage = "Both emails must match.\n";
        }
    
        if (firstName == "") 
        {
            let errorMessage = "First name is required.\n";
        }
    
        // submit the form if error message is an empty string
        if (errorMessage = "") 
        {
            $("#email_form").submit();
        } 
        else 
        {
            alert(errorMessage);            
        }
    };
    
        document.addEventListener("DOMContentLoaded", () =>
        {
            let join_list = $("#join_list");
            join_list.addEventListener("click", processEntries);
            let clear = $("#clear");
            clear.addEventListener("click", clearForm);
        })
        const email_1_focus = () => {
            $("#email_1").focus();
        }
        window.onload = () => {
            email_1_focus();
        };
        const clearForm = () => 
        {
            $("#email_1").value = "";
            $("#email_2").value = "";
            $("#first_name").value = "";
            email_1_focus();
        };
    
    

