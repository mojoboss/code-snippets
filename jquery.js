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





//*****************MORE EVENT HANDLING*****************************

//COMBINING THE click AND hover events
$(document).ready(function(){
    $('div').hover(function(){
        $('div').addClass('red');
    });
    $('div').click(function(){
        $('div').fadeOut('fast');
    });
});



//The double click event
$(document).ready(function(){
    $('div').dblclick(function(){
        $(this).fadeOut('fast');
    });
});



//Hovering in and out, adding and removing a class when you hover in and out
$(document).ready(function(){

  $('div').hover(
    function(){
        $(this).addClass('active');
    },
    function(){
        $(this).removeClass('active');
    }
  );
});



//Focus event, used in form input elements, ex-when clicked into a input area
$(document).ready(function(){
    $('input[name=name]').focus(function(){
        $(this).css('outline-color', 'red');
    });
});



//simple animation on a div element
$(document).ready(function(){
    $(document).keydown(function(){
        $('div').animate({left:'+=10px'}, 50);
    });
});// here keydowm is the event, and animate is the effect



//animation to move an image on a screen using arrow-keys
$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
			    $('img').animate({top: "-=10px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
			    $('img').animate({left: "+=10px"}, 'fast');
				break;
			// Down Arrow Pressed
			case 40:
			    $('img').animate({top: "+=10px"}, 'fast');
				break;
		}
	});
});





//**************************MORE FROM JQuery UI library*******************
$(document).ready(function(){
    $('div').click(function(){
        $(this).effect('explode');
    });
});// this effect is like animation, takes 'explode' as input to create explosion
//another effect example, makes that div bounce
		('div').effect('bounce', {times:2}, 200);//that 200 is milli Sec
//this makes it slide
		$(this).effect('slide');



//draggable method makes anything draggable on the screen
$(document).ready(function(){
    $('#car').draggable();
});



//resizable method makes anything resizable on the screen
$(document).ready(function(){
    $('div').resizable();
});




//thios code piece selects and highlights an item from a list
$(document).ready(function(){
    $('ol').selectable();
});



//this code piece allows to sort a list by moving the list items
$(document).ready(function(){
    $('ol').sortable();
});




//this creates an accordion, 
//see here 
//http://api.jqueryui.com/accordion/
$(document).ready(function(){
    $('#menu').accordion();
});





//###############################DOM TRAVERSING#################
$("#ID").parent();   // thisa selects immediate parent of a dom element
$("#ID").parents();  //this selects all the parents above the #ID element
					 //$("#ID").parents('#yoyo');  ---> this selects parent with 
					 //id yoyo.

$("#ID").children(); // children is similar to parent, finds immediate children
$("#ID").find();     // find is similar to parents(here it is for child elements). 
					 //If attribute provided, selects that particular child element.
$("#ID").siblings(); // finds siblings of a DOM element.





//########################ADDING REMOVING DOM ELEMENTS######################
// REMOVING AN ITEM
var articleItems;
articleItems = $('.article-item');// your code goes here!
var list = articleItems.find('ul');
list.remove(); // Its DIFFERENT FROM removeClass().

// with attributes
ul.children.remove('.bold');// passing attributes and removing a particular class.


//INSERTING DOM ELEMENTS AS CHILDREN (just opposite of remove).
.append()
.prepend()
.insertBefore()
.insertAfter()



//Example
//Everything in jQuery javascript works as a DOM element. $('') ----> this has
//to be used to refer to anything as a DOM element. Adding, removing html
//elements, or anything is carried out using DOM elements
var family1 = $('#family1');
var family2 = $("<div id='family2'><h1>Family 2</h1></div>");
var bruce = $(" <div id='bruce'><h2>Bruce</h2><div id='madison'><h3>Madison</h3></div> <div id='hunter'><h3>hunter</h3></div> </div>");
var parent = family1.parent();
parent.append(family2);
family2.append(bruce);


//using each('p') to iterate over all p's (it could be anything)
//example
var list = $('article-list');
$( "p" ).each(function( index ) {
  var t =  $( this ).text() ;
  var len = t.length;
  t = t + " " + len;
  $( this ).text(t) ;  
});

//#####MORE ABOUT EVENTS##########
/*
Reacting to events often requires knowledge about the event itself, so this is a quick breakdown
of the event object which gets passed to an event listener’s callback.

Remember that the target element calls the callback function when the event occurs. When this 
function is called, jQuery passes an event object to it containing information about the event. This object holds a ton of useful information that can be used in the body of the function. This object, which is usually referenced in JavaScript as e, evt, or event, has several properties that you can use to determine the flow of your code. Try logging the object to see what's available:

$( 'article' ).on( 'click', function( evt ) {
    console.log( evt );
});
You should notice a target property. The target property holds the page element that is the 
target of the event. This can be extremely useful if an event listener has been set up for a number of elements:

$( 'article' ).on( 'click', function( evt ) {
    $( evt.target ).css( 'background', 'red' );
});
In the example above, an event listener is set up for every article element on the page. When
 an article is clicked an object containing information about the event is passed to the callback. The evt.target property can be used to access just the clicked on element! jQuery is used to select just that one element from the DOM and update its background to red.

The event object also comes in handy when you want to prevent the default action that the browser
 would perform. For example, setting up a click event listener on an anchor link:

$( '#myAnchor' ).on( 'click', function( evt ) {
    console.log( 'You clicked a link!' );
});
Clicking on the #myAnchor link will log the message to the console, but it will also navigate to
 that element's href attribute - potentially redirecting to a new page. The event object can be used to prevent the default action:

$( '#myAnchor' ).on( 'click', function( evt ) {
    evt.preventDefault();
    console.log( 'You clicked a link!' );
});
In the code above, the evt.preventDefault(); line instructs the browser not to perform the 
default action.

Other uses include:

event.keyCode to learn what key was pressed - invaluable if you need to listen for a specific key
event.pageX and event.pageY to know where on the page the click occurred - helpful for analytics 
tracking
event.type to find what event happened - useful if listening to a target for multiple events
The event object can be an incredibly useful tool! Learn more by checking out:
*/






//####################Event Delegation#######################
/*
The jQuery event listener examples we've been looking at so far select the target item(s) using 
Query and then attach an event listener to that target directly. But what about when the target
doesn't exist yet? This can happen in a lot of situations. For example, if you have a list of 
items, and you want to listen to clicks on any of them, what happens if you add an extra list 
item after your page is done?

Be careful when setting up an event listener and then creating the target item afterwards. For 
example:

$( 'article' ).on( 'click', function() {
    $( 'body' ).addClass( 'selected' );   
});

$( 'body' ).append( '<article> <h1>Appended Article</h1> <p>Content for the new 
article </p> </article>' );
Clicking on the "appended" article will not add a class to the body because the "appended" 
article was created after the event listeners were set up. When we targeted the 'article',
it didn't exist yet, so jQuery added the click listener to all ZERO of our articles!

But there is a way to make this scenario work by using Event Delegation. We'll listen to events
that hit a parent element, and pay attention to the target of those events. Event Delegation
with jQuery uses the same code we've been using, but passes an additional argument to the "on"
method.

$( '.container' ).on( 'click', 'article', function() { … });
...this code tells jQuery to watch the .container element for clicks, and then if there are
any, check if the click event's target is an article element.

Another advantage in using Event Delegation is that you can use it to consolidate the number of
event listeners. For example, what if you had 1,000 list items on a page:

<ul id="rooms">
    <li>Room 1</li>
    <li>Room 2</li>
            .
            .
            .
    <li>Room 999</li>
    <li>Room 1000</li>
</ul>
The following code would set up an event listener for each 1,000 event listeners - one for each
list item...that's 1,000 event listeners!

$( '#rooms li' ).on( 'click', function() {
    ...
});
Alternatively, we can use jQuery's event delegation to set the event listener on just one
element (the ul#rooms) and check if the target element is a list item;

$( '#rooms' ).on( 'click', 'li', function() {
    ...
});
*/



