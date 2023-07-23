
$(".question").click(function(){ // click event triggered
    
    const num = $(this).attr("class").slice(-1);  
    const classOfTheRespectiveAns = ".answer-"+num;   // class of the clicked answer


    if ($(classOfTheRespectiveAns).is(':visible')){
        $(classOfTheRespectiveAns).slideUp();
        
    }else{
    $(".answer").slideUp();
    $(classOfTheRespectiveAns).slideToggle();
    }

    
  });

 