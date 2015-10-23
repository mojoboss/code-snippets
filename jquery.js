//Examples - 

//hides a div
$(document).ready(function(){
  $('div').hide();
});



//example click event
$(document).ready(function() {
    $('div').click(function() {
        $('div').fadeOut('slow');
    });
});


//using variables in jquery
// Write your jQuery code on line 3!
$(document).ready(function() {
    var $target=$('li:nth-child(4)');
    $target.fadeOut('fast');
});


//fades in a div
$(document).ready(function(){
	$('div').fadeIn('slow');
});



//vanishes a class called .vanish
$(document).ready(function() {
    $('button').click(function() {
        $('.vanish').fadeOut('slow');
         /* this is a function defined  on the button when clicked   .vanish  class fades and then returns back */
    });
});


//vanishing with am id
$(document).ready(function() {
    $('button').click(function() {
        $('#blue').fadeOut('slow');
    });
});



//using fade to
$(document).ready(function(){
    $('.pink').fadeTo('slow',0); 
    $('.red').fadeTo('slow', 0); 
});


//##########################USING THIS#############
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('fast');
        $(this).fadeIn('slow');
    });
});//only affects the div where clicked, not all divs


//############################################################################
//THIA PART DEALS WITH MODIFYING HTML USING JQuery
$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
    
    });
});
//.val() takes the value from the input field with name = checkListItem
// saving the value in toAdd variable and the modifying html with appending
// a div to another div with class '.list'



// strings
$h1 = $("<h1>Hello</h1>");
//this is a string and $() makesit a jQuery object



//another example
$('document').ready(function(){
	$('body').append("<p>I'm a paragraph!</p>");
});
//


//We can specify where in the DOM we insert an
//element with the .before() and .after() functions. The syntax looks like this:
$('target').after('<tag>To add</tag>');
//Where 'target' is the element after which you want to add something and the 
//bit between <tag>s is the HTML element you want to add. You can 
//add <h1>s, <div>s, or any other valid HTML you like.
//example--------
$(document).ready(function(){
    //$('#one').after('<p> yoyoyo </p>');
    var div = $('#two');
    div.after('<p> yoyoyo </p>');
});




/*
Removing Elements
Adding elements to our HTML documents is great, but without the ability to
remove them, our pages can quickly become cluttered. Thankfully, we have two
jQuery functions, .empty() and .remove(), that help us delete content from our 
pages.
.empty() deletes an element's content and all its descendants. For instance, 
if you .empty() an 'ol', you'll also remove all its 'li's and their text.
.remove(), not only deletes an element's content, but deletes the element 
itself.
*/
$(document).ready(function(){
    //$('#one').after('<p> yoyoyo </p>');
    var div = $('#two');
    div.after('<p> yoyoyo </p>');
    $('p').remove();
});



/*
jQuery includes two functions, .addClass() and .removeClass(), that can be used
to add or remove a class from an element. This is great if, for example, you 
have a highlighted class that you want to apply to an element when clicked.
The syntax looks like this:
*/
$('selector').addClass('className');
$('selector').removeClass('className');
//example
$(document).ready(function() {
    $('#text').click(function(){
        $(this).addClass('highlighted');
    });
});



//MODIFYING CSS
/*
Because resizing elements is so common, jQuery has specific .height() and
 .width() functions that can be used to change the heights and widths of 
 HTML elements. For instance:
*/
$(document).ready(function() {
    $('div').height('200px'); 
    $('div').width('200px'); 
    $('div').css('border-radius','10px');   // see this part to modify CSS
});




//MODIFYING html ELEMENTS
/*
Finally, we can update the contents of our HTML elements—that is, the bit 
between the opening and closing tags—using the .html() and .val()functions.

.html() can be used to set the contents of the first element match it finds. 
For instance,

$('div').html();
will get the HTML contents of the firstdiv it finds, and

$('div').html("I love jQuery!");
will set the contents of the first div it finds to "I love jQuery!"

.val() is used to get the value of form elements. For example,
$('input:checkbox:checked').val();
would get the value of the first checked checkbox that jQuery finds.
*/
//example 1
$(document).ready(function(){
    $('p').html('jQuery magic in action!'); 
});

//example2
$(document).ready(function(){
    $('#button').click(function(){
        var $val = $('input[name="checkListItem"]').val();
         $('.list').append('<div class="item">' + toAdd + '</div>');
         //$('.list').html($val);
    });
});// this selects the input tab using a name, and adds its value to a list 
   //element inside a div element/ html() function just adds the text 
   //in this case
//Removing those ".items" which were added by jQuery
/*
$('.item').click(function() {
    $(this).remove();
});
#####################THIS WONT WORK############################
jQuery looks for all the .items when the DOM is loaded, so by the time your
document is ready, it's already decided there are no .items to .remove(), and
the code won't work.
*/
//##################SOLUTION###################################
/*
For this, we'll need a new event handler: .on(). You can think of .on() as a 
general handler that takes the event, its selector, and an action as inputs.
The syntax looks like this:
$(document).on('event', 'selector', function() {
    Do something!
});
In this case, 'event' will be 'click', 'selector' will be '.item', and the 
thing we'll want to do is call .remove() on this.
*/
//Example
$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
        $(document).on('click', '.item', function(){
            $(this).remove();
        });
    });
});




































