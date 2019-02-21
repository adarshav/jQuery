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
// $(document).ready(function() {
//     $(".green-box").animate({
//         "margin-left": "+=200px"
//     }, 2000, "swing");
//     $(".green-box").animate({
//         "margin-left": "-=200px"
//     }, 2000, "swing");
//     $(".red-box").animate({
//         "margin-bottom": "+=300px"
//     }, 2000, "swing");
//     //back to the poosition
//     $(".red-box").animate({
//         "margin-down": "-=300px"
//     }, 3000, "swing");
//     $(".blue-box").animate({
//         "margin-left": "+=100px"
//     }, 3000, "swing");
//     //blue-box back to the position
//     $(".blue-box").animate({
//         "margin-left": "-=100px"
//     }, 2000, "swing");
// })

//Another level animations
// $(document).ready(function() {
//     $(".green-box").animate({
//         "margin-left": "200px",
//         "opacity": 0,
//         "height": 50,
//         "width": 50,
//         "margin-top": "25px"
//     }, 2000)
//     $("#p1").animate({
//         "font-size":"25px"
//     }, 2000);
// })

//delays and chaining
// $(document).ready(function() {
//     $(".red-box").delay(1000).fadeOut(3000).fadeToggle(2000);
//     $(".green-box").fadeOut(2000);
// })

//another way of delays [callback functions]
//if we want to execute the particular function after executing the other we can use callback functions
//whatever i have learnt the animations till now can be applied using callback functions
// $(document).ready(function() {
//     $(".red-box").fadeTo(1000, 0, function() {
//         //alert("this is a callback function");
//         $(".blue-box").fadeTo(1000, 0, function() {
//             $(".green-box").fadeTo(1000, 0);
//         })
//     })
// })

//lightbox
// $(document).ready(function() {
//     $(".lightbox").fadeIn(1000);
// })

//using css selectors
// $(document).ready(function() {
    // $("p").css("background-color", "blue");
    // $("input[type = 'text']").css("background-color", "silver");
    // $("h2, p, input").css("background-color", "orange");
    //one way of doing is the above mentioned, the other
    // $("p:first").css("font-size", "25px");
    // $("li:last").css("color", "orange");
//     $("li:even").css("color", "orange"); 
// })

//jQuery methods for traversal
$(document).ready(function() {
    //all the below acts as find method
    // $("#list").find("li").css("color", "blue");
    // $("#list").children("li").css("color", "blue");
    // $("#list").parents("div").css("background-color", "gold");
    // $("#list").parents("body").css("background-color", "gold");//parents can be many 
    $("#list").parent().css("background-color", "green");

})