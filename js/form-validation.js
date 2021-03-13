/*var countries = ["Australia","America","Canada","India","Romainia","Russia","Switzerland",]
      
       var country = document.getElementById("country1");
      
       country.options[0] = new Option('select Country', '0');
       country.selectedIndex = 0;

       for(var i=0; i< countries.length; i++){
           country.options[i+1] = new Option(countries[i],countries[i]);
       }
      

      /* $('input').blur(function(e){
           alert("please enter " + $(this).attr('id') + "  value")
       })*/

       /*

       var country = $("#country2");

       alert(country == null)
      
       country.options[0] = new Option('select Country', '0');
       country.selectedIndex = 0;

       for(var i=0; i< countries.length; i++){
           country.options[i+1] = new Option(countries[i],countries[i]);
       }
       */
/*
       
$(document).ready(function(){
    var generateCountries = (function(){
        var country = $("#country2");
        country.options[0] = new Option('select Country', '0');
        country.selectedIndex = 0;
 
        for(var i=0; i< countries.length; i++){
            country.options[i+1] = new Option(countries[i],countries[i]);
        }




    })();
})*/

$(document).ready(function(){
    var validation = (function(){
        let fname,lname,mail1,mobile1,pwd1,pwd2,gender,addr1,countyr1,state1,city1,grp1,grp2,next,
        prev,signup;
       

         next =  $("#next");
         grp2 =  $("#grp2");
         grp1 =  $("#grp1");
       

        function showGrp2(){
            //alert("hello")
            $('#grp1').fadeOut(3000,function(){
            $('#grp2').fadeIn()

            })
        }

        function noValueError(pos){
            
           

            let pos2 = "#" + pos+ "error"
            

            $(pos2).text("please enter " + pos );
            

        }

        return{
            showGrp2: showGrp2,
            noValueError :noValueError,

        };

      })();

      var v = validation;
      next= $('#next')
    
       next.click(function(){
          v.showGrp2();

      });

      $('input').blur(function(e){
          var pos=$(this).attr('id')
          v.noValueError(pos)
      })

})