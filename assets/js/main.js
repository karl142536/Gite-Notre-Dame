$(document).ready(function(){
    $("#news-t").click(function(event){
        event.preventDefault();
        $("#jumbs").toggle(500);
    });
});
$(document).ready(function(){
    $("#news-tc").click(function(event){
        event.preventDefault();
        $("#jumbs").hide(1000);
    });
});