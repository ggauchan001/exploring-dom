// This exercise is to help with DOM Navigation.  
// It otherwise has no practical real world value.
// Please enter your code for each part under the appropriate comment.

//---------------------------------------------
// Create a variable to hold the requested item and log it to the console

// 1.  The heading that says "Weekly Specials"


var headings = document.getElementsByTagName("h2");
weeklySpecial= headings[0];
console.log(weeklySpecial);


// 2.  The next sibling of the item from #1.

firstSpecial = headings[1];
console.log(firstSpecial);


// 3.  The first child of the item from #2.


//  4. The item with the id of "move".


//  5. The last child of the item from #4.


//  6. All of the paragraphs that are children of the item from #4.


//  7. The previous sibling of the item from #4.


//  8. All of the h3's that are children of the item from #7


//  9. Get all of the h3's and Alert (pop-up) the text from each one.  
//     (Extra - do it all in one alert box!)

//---------------------------------------------------------------------------------
// 10.  Get all articles in the document.
//      Use a for loop to do the following to each one:
//        - log it to the console
//        - add the class of hide to the h3
//        - EXTRA!  - If there are two paragraphs of text, hide the second one
// --------------------------------------------------------------------------------


//---------------------------------------------------------------------------------
//  Add two new "people" to the team by adding a new h3 followed by a paragraph.
//  1. Add "Abby" to the end of the list.  In the paragraph say "Abby is the shop mouser."
//  2. Add "Maris" AFTER "Moonflower".  In the paragraph Say "Maris was here."
//---------------------------------------------------------------------------------


