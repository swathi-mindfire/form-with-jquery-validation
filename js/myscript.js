$(document).ready(function(){

    gencaptcha()

    function gencaptcha(){
        var expr= $('#exprsn');

        var num1= Math.round((100-10)*Math.random() +10 );
    
        var num2= Math.round((100-10)*Math.random() + 10);
    
        var operations = ['*','/','+','-']
    
        var x= (Math.round(10*Math.random()))%4;
    
        var op =operations[x];
        
        var compute = num1 + op  + num2
    
        expr.val(compute)

    }

    $(".refrsh").click(function(){
        gencaptcha();
    })

    $(".req").text(" ")

})

$("#prev").click(function(){
    $('#grp2').fadeOut(2000,function(){
        $("#grp2").css("display","none");

    })
    $('#grp1').delay(1000).fadeIn(2000,function(){
        $("#grp1").css("display","block");

    })
    
    
});
    
       

    
    $('#next').click(function(){

        var firstName = $("#fname").val();            
        var lastName = $("#lname").val();               
        var mail1 =$("#mail1").val();        
        var pwd1 = $("#pwd1").val();
        var pwd2 = $("#pwd2").val();
        var mobile = $("#mobile").val();
        var namereg = /^[a-zA-Z]+$/;
        var mailreg = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-zA-Z]{2,7})(.[a-z]{2,7})?$/;
        var mobilereg = /^[1-9]{1}[0-9]{9}$/;
        

        //First Name check

        if(firstName.trim() == ""){
            $('#fnerror').text("please enter first name");
            $('#fname').focus();
            $( "#fname" ).change(function() {
                $('#fnerror').text(" ");
            });           
        }
        else{
            if (firstName.length <3 ){
                
                $('#fnerror').text("Name is minimun 3 characters");
                $('#fname').focus();
                $( "#fname" ).change(function() {
                    $('#fnerror').text(" ");
                });
            }
            else if (!firstName.match(namereg)){             
                $('#fnerror').text("special characters not allowed")
                $('#fname').focus();
                $( "#fname" ).change(function() {
                    $('#fnerror').text(" ");
                });                                
            }
        }
        //Last Name Check
        if(lastName.trim() == ""){
            $('#lnerror').text("please enter last name");
            $('#lname').focus();
            $( "#lname" ).change(function() {
                $('#lnerror').text(" ");
            });           
        }
        else{
            if (lastName.length <3 ){
                
                $('#lnerror').text("Name is minimun 3 characters");
                $('#lname').focus();
                $( "#lname").change(function() {
                    $('#lnerror').text(" ");
                });
            }
            else if (!lastName.match(namereg)){             
                $('#lnerror').text("special characters not allowed")
                $('#lname').focus();
                $( "#lname" ).change(function() {
                    $('#lnerror').text(" ");
                });                                
            }
        }
        //Mail Check

        if(mail1.trim() == ""){
            $('#mlerror').text("please enter mail id");
            $('#mail1').focus();
            $( "#mail1" ).change(function() {
                $('#mlerror').text(" ");
            });           
        }
       
        else if (!mail1.match(mailreg)){             
            $('#mlerror').text("Inavlid mail id,valid format is like sample@gmail.com ")
            $('#mail1').focus();
            $( "#mail1" ).change(function() {
                $('#mlerror').text(" ");
            });                                
        }
        //passwords check
        if(pwd1.trim() == ""){
            $('#p1error').text("Please Enter Password");
            $('#pwd1').focus();
            $('#pwd1').change(function(){
                $('#p1error').text(" ");
            })            
           }
           if(pwd1.length<8){
            $('#p1error').text("Password is minimum 8 characters");
            $('#pwd1').focus();
            $('#pwd1').change(function(){
                $('#p1error').text(" ");
            })  
               
           }           
        
           if(pwd2.trim() == ""){
            $('#p2error').text("Please confirm Pasword");
            $('#pwd2').focus();
            $('#pwd2').change(function(){
                $('#p2error').text(" ");
            })             
           }
           else if (!(pwd1 === pwd2)) {
            $('#p2error').text("Passwords didn't match");
            $('#pwd1').focus();
            $('#pwd1').change(function(){
                $('#p2error').text(" ");
            })  
           }


           //Mobile number check

           if(mobile.trim() == ""){
            $('#m1error').text("Please Enter Your Mobile Number");
            $('#mobile').focus();
            $('#mobile').change(function(){
                $('#m1error').text(" ");
            })  
          
           }
        
           else if (!mobile.match(mobilereg)){
            $('#m1error').text("Enter valid Mobile Number");
            $('#mobile').focus();
            $('#mobile').change(function(){
                $('#m1error').text(" ");
            })  
          
           }

           //gender check
           //if($('.gen').val() == "")
           /*if($('.gen:checked').length == 0) {
               $('#generror').text("please select gender")
           }*/

          
           var x = $("input[name='gender']:checked").val();

           if(x==undefined){
            $('#generror').text("please select gender");
           }

           else{

            $('#generror').text(" ");

           }
           $('.radio').change(function(){
            $('#generror').text(" ");
           }) 

           if( $('#generror').text() == " " && $('#p2error').text() == " " && $('#p1error').text() ==" " &&
               $('#mlerror').text() == " " && $('#fnerror').text() ==" " && $('#lnerror').text() ==" " &&
               $('#m1error').text() ==" " )
            {
            $('#grp1').fadeOut(2000,function(){
                $("#grp1").css("display","none");
        
    
            })
            $('#grp2').delay(1000).fadeIn(2000,function(){
    
                $("#grp2").css("display","block");
    
            })
        } 
    })
    
           
           
     //section2 validation

     $('#result').change( function(){
            var expr = $('#exprsn').val();
            var result = $('#result').val()
            temp =Math.round(eval(expr))
            if (result == ""){
                $('#errormsg').text("Please Enter captcha result");
            }
            else if (temp != result){
                    
                    $('#errormsg').text("Wrong Captcha Result");
                }
            else{
                if(result == temp){
                    $('#errormsg').text(" ");

                }
            }
    })

    $('form').submit(function(){
        cityreg = /^[a-zA-Z]+$/;    
        addrreg = /^[a-zA-Z0-9,-]+$/;  
        var caddress = $("#addr1").val();
        var ccountry = $("#ccountry").val();
        var cstate = $("#cstate").val();
        var city1 = $("#city1").val();
        

        //Address validation
        if(caddress.trim() == ""){
            $('#a1error').text("please enter Your Address");
            $('#addr1').focus();
            $( "#addr1" ).change(function() {
                $('#a1error').text(" ");
            });           
        }
        else if (!caddress.match(cityreg)){             
            $('#a1error').text("special characters not allowed")
            $('#addr1').focus();
            $( "#addr1" ).change(function() {
                $('#a1error').text(" ");
            });                                
        }
        
        //country validation

        if(ccountry.trim() == 0){
            $('#c1error').text("please selecty your country");
            $('#ccountry').focus();
            $( "#ccountry" ).change(function() {
                $('#c1error').text(" ");
            });           
        }

        //state validation
        if(cstate.trim() == 0){
            $('#s1error').text("please selecty your State");
            $('#cstate').focus();
            $( "#cstate" ).change(function() {
                $('#s1error').text(" ");
            });           
        }

        //city validation

        if(city1.trim() == ""){
            $('#cterror').text("please enter Your City Name");
            $('#city1').focus();
            $( "#city1" ).change(function() {
                $('#cterror').text(" ");
            });           
        }
        else if (!city1.match(cityreg)){             
            $('#cterror').text("special characters not allowed")
            $('#city1').focus();
            $( "#city1" ).change(function() {
                $('#cterror').text(" ");
            });                                
        }

        //captcha validation

        validateCaptcha()

        function validateCaptcha(){

            var expr = $('#exprsn').val();
            var result = $('#result').val()
            temp =Math.round(eval(expr))


            if (result == ""){
                $('#errormsg').text("Please Enter captcha result");
            }
            else{                   
                if (temp!= result){
                    
                    $('#errormsg').text("Wrong Captcha Result");
                }
            }

        }


        if( $('#c1error').text()== " " && $('#s1error').text()== " " && $('#cterror').text()== " " && 
          $('#a1error').text()== " " && $('#errormsg').text()== " "){
              return true;
          }
        else{
            return false;
        }
})
