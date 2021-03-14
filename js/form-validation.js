$(document).ready(function(){
    var validation = (function(){
        var next =  $("#next");
        var grp2 =  $("#grp2");
        var grp1 =  $("#grp1");
        var prev  = $("#prev");
        var addressflag,countryflag,stateflag,cityflag,resflag;
        addressflag = countryflag = stateflag = cityflag = resflag =true;
        //checking empty input fields 
        function noValueError(pos){
            var pos1 = "#" + pos ;
            var pos2 = "#" + pos+ "error";
            if($(pos1).val().trim() == ""){
                if(pos == "pwd2"){
                    $(pos2).text("please confirm Password" );
                    //$(pos1).focus();
                }
                else{
                    $(pos2).text("please enter " + pos );
                    //$(pos1).focus();
                }
            }
        }
        //Go to previous section

        function showGrp1(){
            grp2.fadeOut(3000,function(){
                grp1.fadeIn()
            })
        }
        //First group  validation,if it success then only  next page opens
        function checkGrp1(){
            var fname = $("#firstname");            
            var lname = $("#lastname");               
            var mail1 =$("#email");        
            var pwd1 = $("#password");
            var pwd2 = $("#pwd2");
            var mobile = $("#mobilenumber");
            var fnerror = $("#firstnameerror");            
            var lnerror = $("#lastnameerror");               
            var mlerror =$("#emailerror");        
            var p1error = $("#passworderror");
            var p2error = $("#pwd2error");
            var m1error = $("#mobilenumbererror");
            var namereg = /^[a-zA-Z]+$/;
            var mailreg = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-zA-Z]{2,7})(.[a-z]{2,7})?$/;
            var mobilereg = /^[1-9]{1}[0-9]{9}$/;
            var pwdreg = /^([!,.+-{}()[]~`%#:;]+)$/;
            var fnflag,lnflag,mlflag,m1flag,p1flag,p2flag,genflag;
            fnflag = lnflag = mlflag = m1flag = p1flag = p2flag = genflag= true;
             var namecheck = (function(){
                 //First name validation
                 function fnamechk(){
                    if((fname.val()).trim() == ""){                        
                          fnerror.text("please enter first name");
                          fnflag = false;
                          fname.focus();
                          fname.change(function() {
                          fnerror.text(" ");
                        });           
                    }
                    else{
                        if ((fname.val()).length <3 ){
                            fnflag = false;           
                            fnerror.text("Name is minimun 3 characters");                            
                            fname.focus();
                            fname.change(function() {
                                fnerror.text(" ");
                            });
                        }
                        else if (!(fname.val()).match(namereg)){  
                            fnflag = false;
                                     
                            fnerror.text("special characters not allowed")
                            fname.focus();
                            fname.change(function() {
                            fnerror.text(" ");
                            });                                
                        }
                    }
                }
                //Last Name Validation
                function lnamechk(){
                    if((lname.val()).trim() == ""){
                        lnflag = false;
                        lnerror.text("please enter last name");
                        lname.focus();
                        lname.change(function() {
                            lnerror.text(" ");
                        });           
                    }
                    else{
                        if ((lname.val()).length<3 ){
                            lnflag = false;
            
                            lnerror.text("Name is minimun 3 characters");
                            lname.focus();
                            lname.change(function() {
                                lnerror.text(" ");
                            });
                        }
                        else if (!(lname.val()).match(namereg)){
                            lnflag = false;             
                            lnerror.text("special characters not allowed")
                            lname.focus();
                            lname.change(function() {
                                lnerror.text(" ");
                            });                                
                        }
                    }
                } return {
                    fnamechk  : fnamechk,
                    lnamechk  : lnamechk

                }
            })();
            mailchk = (function(){
                //Email validation
                function checkemail(){
                    if((mail1.val()).trim() == ""){
                        mlflag = false;
                        mlerror.text("please enter mail id");
                        mail1.focus();
                        mail1.change(function() {
                            mlerror.text(" ");
                        });           
                    }           
                    else if (!(mail1.val()).match(mailreg)){  
                        mlflag = false;           
                        mlerro.text("Inavlid mail id,valid format is like sample@gmail.com ")
                        mail1.focus();
                        mail1.change(function() {
                            mlerro.text(" ");
                        });                                
                    }
               }
               return {
                    checkemail  : checkemail
                };
            })();

            passwordchk = (function(){
                //password checking 
               function passwordcheck(){
                    if((pwd1.val()).trim() == ""){
                        plflag = false;
                        p1error.text("Please Enter Password");
                        pwd1.focus();
                        pwd1.change(function(){
                            p1error.text(" ");
                        })            
                       }
                    else{
                        if((pwd1.val()).length<8){
                            plflag = false;
                            p1error.text("Password is minimum 8 characters");
                            pwd1.focus();
                            pwd1.change(function(){
                                p1error.text(" ");
                            })  
                        }
                       /* else{
                            if((pwd1.val().match(pwdreg))){
                                plflag = false;
                                p1error.text("Password contain atleast one special character");
                                pwd1.focus();
                                pwd1.change(function(){
                                    p1error.text(" ");
                                })  
                            }

                        }*/  
                    }
                }
                //passwords  match checking
                function passwordMatch(){
                    if((pwd2.val()).trim() == ""){
                        p2flag = false;
                        p2error.text("Please confirm Pasword");
                        pwd2.focus();
                        pwd2.change(function(){
                            p2error.text(" ");
                        })             
                       }
                       else if (!(pwd2.val() === pwd1.val())) {
                        p2flag = false;
                        p2error.text("Passwords didn't match");
                        pwd1.focus();
                        pwd1.change(function(){
                            p2error.text(" ");
                        })  
                       }
                    }
                 return{
                    passwordcheck : passwordcheck,
                    passwordMatch : passwordMatch
                }
             })();

             mobileNumCheck = (function(){
                //mobile number validation
                function checkPhoneNumber(){
                    if((mobile.val()).trim() == ""){
                        m1flag = false;
                        m1error.text("Please Enter Your Mobile Number");
                        mobile.focus();
                        mobile.change(function(){
                            m1error.text(" ");
                        })  
                    }            
                    else if (!(mobile.val()).match(mobilereg)){
                        m1flag = false;
                        m1error.text("Enter valid Mobile Number");
                        mobile.focus();
                        mobile.change(function(){
                        m1error.text(" ");
                    })
                    }
                }
                return {
                    checkPhoneNumber : checkPhoneNumber
                };

             })()

            genderSelectionChk = (function(){
                //checking gender is selected or not
                function genderCheck(){
                    var x = $("input[name='gender']:checked").val();
                    if(x==undefined){
                         $('#generror').text("please select gender");
                         genflag= false;
                     }
                    else{
                     $('#generror').text(" ");
                     genflag = true;
                    }
                } return {
                    genderCheck : genderCheck

                };
            })();

            var group2show = (function(){
                //Hiding group1 and showing group 2
                function showGrp2(){
                   
                    grp1.fadeOut(3000,function(){
                    grp2.fadeIn()
                    })
                }
                function grp1FieldsCompletenessCheck(){
                    /*if(!(fname.val()== "" || lname.val() == ""  || mail1.val() == "" || pwd1.val() == "" ||
                    pwd2.val() == "" || mobile.val() == "" ))*/
                        if(fnflag && lnflag && p1flag && p2flag && mlflag && m1flag && genflag){
                            showGrp2()
                            

                    }
                }
                return {

                    grp1FieldsCompletenessCheck : grp1FieldsCompletenessCheck
                };
            })();
            var validatename = namecheck;
            validatename.fnamechk();
            validatename.lnamechk();
            var validatemail = mailchk;
            validatemail.checkemail();
            var validatePassword = passwordchk;
            validatePassword.passwordcheck();
            validatePassword.passwordMatch();
            var validatemobile =  mobileNumCheck;
            validatemobile.checkPhoneNumber();
            var checkGender = genderSelectionChk;
            checkGender.genderCheck();
            var showGrp2 =   group2show ;
            showGrp2. grp1FieldsCompletenessCheck();
        }
        //Group 2 validation
        function generateCountries(){
            var countries = ["Australia","America","Canada","India","Romainia","Russia","Switzerland",]
            var country1 = document.getElementById("country1");
            var country2 = document.getElementById("country2");
            country1.options[0] = new Option('select Country', '0');
            country2.options[0] = new Option('select Country', '0');
            country1.selectedIndex = 0;
            country2.selectedIndex = 0;
            for(var i=0; i< countries.length; i++){
               country1.options[i+1] = new Option(countries[i],countries[i]);
               country2.options[i+1] = new Option(countries[i],countries[i]);
            }
        }
        function generateCaptcha(){
            var expr= $('#exprsn');
            var num1= Math.round((100-10)*Math.random() +10 );
            var num2= Math.round((100-10)*Math.random() + 10);
            var operations = ['*','/','+','-']
            var x= (Math.round(10*Math.random()))%4;
            var op =operations[x];
            var compute = num1 + op  + num2
            expr.val(compute)
        }
        function getStates(country,state){
            var states = new Array();
            states[0] = "slelct state";
            states[1] = "Australian Capital Territory,New South Wales,Northern Territory,Queensland,South Australia,Tasmania,Victoria,Western Australia";
            states[2] =  "Alabama.Alaska,Arizona,Arkansas,California,Colorado,Connecticut,Delaware,District of Columbia,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Mississippi,Missouri,Montana,Nebraska,Nevada,New Hampshire,New Jersey,New Mexico,New York,North Carolina,North Dakota,Ohio,Oklahoma,tah,Vermont,Virginia,Washington,WestVirginia,Wisconsin,Wyoming";
            states[3] =  "Alberta,British Columbia,Manitoba,New Brunswick,Newfoundland,Northwest Territories,Nova Scotia,Nunavut,Ontario,Prince Edward Island,Quebec,Saskatchewan,Yukon Territory";
            states[4] = "Andhra Pradesh,Arunachal Pradesh,Assam,Bihar,Chhattisgarh,Goa,Gujarat,Haryana,Himachal Pradesh,Jammu and Kashmir,Jharkhand,Karnataka,Kerala,Madhya Pradesh,Maharashtra,Manipur,Meghalaya,Mizoram,Nagaland,Odisha,Punjab,Rajasthan,Sikkim,Tamil Nadu,Telangana,Tripura,Uttar Pradesh,Uttarakhand,West Bengal,Andaman and Nicobar,Chandigarh,Dadra and Nagar Haveli,Daman and Diu,Lakshadweep,Delhi,Puducherry"
            states[5]  = "Alba,Arad,Arges,Bacau,Bihor,Bistrita-Nasaud,Botosani,Braila,Brasov,Bucuresti,Buzau,Calarasi,Caras-Severin,Cluj,Constanta,Covasna,Dimbovita,Dolj,Galati,Giurgiu,Gorj,Harghita,Hunedoara,Ialomita";
            states[6] = "Adygeya,Aginskiy Buryatskiy,Altay,Altayskiy,Amurskaya,Arkhangel'skaya,Astrakhanskaya,Bashkortostan,Belgorodskaya,Bryanskaya,Buryatiya,Chechnya,Chelyabinskaya,Chitinskaya,Chukotskiy";
            states[7] = "Aargau,Ausser-Rhoden,Basel-Landschaft,Basel-Stadt,Bern,Fribourg,Geneve,Glarus,Graubunden,Inner-Rhoden,Jura,Luzern,Neuchatel"
            var indx = document.getElementById(country).selectedIndex;
            var st = document.getElementById(state);
            var s_arr = states[indx].split(",");
            st.options[0] = new Option('Select State', '0');
            var s_arr = states[indx].split(",");

            for(var i=0;i<s_arr.length;i++){
                st.options[i+1] = new Option(s_arr[i],s_arr[i]);
            }
        }
        function grp2Validate(){
            cityreg = /^[a-zA-Z]+$/;    
            addrreg = /^[a-zA-Z0-9,-]+$/;  
            var addr1 = $("#address");
            var ccountry = $("#country1");
            var cstate = $("#state1");
            var city1 = $("#cityname");
            var a1error = $("#addresserror");
            var c1error = $("#country1error");
            var s1error = $("#state1error");
            var cterror  = $("#citynameerror")              
            addressValidate = (function(){
                 //Address validation
                 function checkaddress(){
                    if((addr1.val()).trim() == ""){
                        addressflag = false;
                        
                        a1error.text("please enter Your Address");
                        addr1.focus();
                        addr1.change(function() {
                            a1error.text(" ");
                        });           
                    }
                    else if (!(addr1.val()).match(cityreg)){ 
                        addressflag = false;            
                        a1error.text("special characters not allowed")
                        a1error.focus();
                        addr1.change(function() {
                            a1error.text(" ");
                        });                                
                    }
                    else{
                        addressflag = true;

                    }

                }return {
                    checkaddress : checkaddress

                };
                
            })();

            countryStateValidate = (function(){
                //Address validation
                function checkCountry(){
                    //country selection checking
                    if(ccountry.val()== 0){
                        countryflag = false;
                        c1error.text("please selecty your country");
                        ccountry.focus();
                        ccountry.change(function() {
                            c1error.text(" ");
                        });           
                    }
                    else{
                        countryflag = true;

                    }
                }
                function checkState(){
                     //state validation
                     if(cstate.val()== 0){
                        stateflag = false;
                        s1error.text("please select your State");
                        cstate.focus();
                        cstate.change(function() {
                            s1error.text(" ");
                        });           
                    }
                    else{
                        stateflag = true;

                    }
                }
                 return {
                   checkCountry : checkCountry,
                   checkState   : checkState,
                };
            })();


            cityValidate = (function(){
                //City validation
                function checkCity(){
                    if((city1.val()).trim() == ""){
                        cityflag = false;
                        cterror.text("please enter Your City Name");
                        city1.focus();
                        city1.change(function() {
                            cterror.text(" ");
                        });           
                    }
                    else if (!(city1.val()).match(cityreg)){ 
                        cityflag = false;            
                        cterror.text("special characters not allowed")
                        city1.focus();
                        city1.change(function() {
                            cterror.text(" ");
                        });                                
                    }
                    else{
                        cityflag = true; 

                    }
               }return {
                   checkCity : checkCity

               };
               
           })();
           captchaValidate = (function (){
               var expr = $('#exprsn');
               var result = $('#result').val();
               var resultmsg = $('#resulterror');
               var actual;
               function verifyCaptcha(){
                   actual =Math.round(eval(expr.val()))
                    if (result.trim() == ""){
                        resflag = false;
                        resultmsg.text("Please Enter captcha result");
                    }
                    else{                   
                        if (actual == result){

                            resultmsg.text("");
                            resflag = true;
                        }
                        else{
                            resflag = false;
                            resultmsg.text("Wrong Captcha Result");

                        }
                    }
           }
            return {
                verifyCaptcha      :  verifyCaptcha
            };

        })();
            validateAddress = addressValidate;
            validateAddress. checkaddress();
            validateCountryState =   countryStateValidate;
            validateCountryState.checkCountry();
            validateCountryState.checkState();
            validateCity   = cityValidate;
            validateCity.checkCity()
            validateCaptcha = captchaValidate;
            validateCaptcha.verifyCaptcha()
            $("#result").change(function(){
                validateCaptcha.verifyCaptcha()
            })
        }

        function grp2CompletenessCheck(){

            if(addressflag && countryflag && stateflag && cityflag && resflag){
              
                return true;
            }
            else{
               
                return false;
            }
        }
        return{
            
            noValueError         :  noValueError,
            checkGrp1            :  checkGrp1,
            generateCountries    :  generateCountries,
            generateCaptcha      :  generateCaptcha,
            getStates            :  getStates,
            grp2Validate         :  grp2Validate,
            showGrp1             :  showGrp1,
            grp2CompletenessCheck : grp2CompletenessCheck
        };

      })();
      var v = validation;
      next= $('#next')
    
       next.click(function(){
          v.checkGrp1();
       });

      $('input').blur(function(e){
          var pos=$(this).attr('id');
          v.noValueError(pos)
      })
      $('select').blur(function(e){
          var selectobj =$(this)
          if(selectobj.val() == 0){
              selectobj.next().text("please select value")
          }
          else{
            selectobj.next().text(" ")
          }
        })
      v.generateCountries();
      v.generateCaptcha();
      $(".refrsh").click(function(){
        v.generateCaptcha();
      });
      $("#country1").change(function(){
          v.getStates("country1","state1")
      })
      $("#country2").change(function(){
        v.getStates("country2","state2")
      })
      $("#prev").click(function(){
          v.showGrp1()
      })    
      $('form').submit(function(){
          v.grp2Validate();
          flag = v.grp2CompletenessCheck()
          if(flag == false){
             return false;
            }
            else{
             return  true;
            }        
        })
})

      