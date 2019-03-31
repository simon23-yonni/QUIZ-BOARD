$(document).ready(function() {
    $("#questions").submit(function(event) {
        event.preventDefault();
        var val1 = parseInt($("[name=answer1]:checked").val());
        var val2 = parseInt($("[name=answer2]:checked").val());
        var val3 = parseInt($("[name=answer3]:checked").val());
        var val4 = parseInt($("[name=answer4]:checked").val());
        var val5 = parseInt($("[name=answer5]:checked").val());
        var val6 = parseInt($("[name=answer6]:checked").val());
        var val7 = parseInt($("[name=answer7]:checked").val());
        var val8 = parseInt($("[name=answer8]:checked").val());
        var val9 = parseInt($("[name=answer9]:checked").val());
        var val10 = parseInt($("[name=answer10]:checked").val());
        var result = parseInt(val1+ val2 + val3 + val4 + val5 + val6 + val7 + val8 + val9 + val10 );
        if (result > 50) {
         $("#input").text("CONGRATULATIONS " + "Your score is: " + result);
        }else{
            $("#input").text( "Your score is: " + result + " You will have to retake the exam");
        }
    });
});
