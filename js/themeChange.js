$(".themeChange").on("click", function () {
    if ($(this).hasClass("light-mode")) {
        $("#stylesheet").attr("href", "./CSS/style.css")
    }
    else if ($(this).hasClass("dark-mode")) {
        $("#stylesheet").attr("href", "./CSS/darkmode.css") 

    } 
    console.log($("#stylesheet").attr("href"));
}); 


