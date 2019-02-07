// $(document).ready(function() { //$(document).ready(function() {
//     //jQuery goes here
//     $(".red-box").fadeOut(2000);
//     ///$(".green-box").fadeOut(5000);
//     $(".red-box").fadeIn(1000);
//     //fadeTo takes two values 1.Duration 2.how much the color should be faded that means the value of the opacity
//     $(".red-box").fadeTo(1000, 0.5) 
    
//     //challenge
//     $(".red-box").fadeTo(1000, 0.2);
//     $(".blue-box").fadeTo(2000, 0.5);
//     $(".green-box").fadeTo(3000, 0.8);
//     //fadeToggle: whether the particular element is on it will be of abd vice-versa
//     $(".red-box").fadeToggle(3000);
//     //fadeOut and fadeIn plays with display of particular thing where as fadeTo plays only with opacity and it does't have a role in display
// });

//hide and show the elements
// $(document).ready(function () {
//     $(".green-box").hide(1000);//it is to hide the element
//     $(".red-box").show(2000);//it is to show the particular element
//     //$(".red-box").toggle();//it toggles the element 
// })

//slideUp and slideDown
// $(document).ready(function() {
//     // $("#p1").hide();
//     // $("#p1").show();
//     $("#p1").slideUp(3000);
//     $(".green-box").slideUp(3000);
//     $(".green-box").slideDown(2000);
//     //challenge
//     $("p").hide();
//     $("p").slideDown();
//     $("p").click(function() {
//         $(this).slideUp(2000);
//     })
// })

//Animations
$(document).ready(function() {
    $(".green-box").animate({
        "margin-left": "+=200px"
    }, 2000, "swing");
})