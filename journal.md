Sept 22
Turns out I didn't need to use JSON. just change generatedLetter.text to generatedLetter since it was already declared in the variable.

I need to figure out how to make callLetter() continue and pass over reviewedLetters. Not sure how to best handle this because letter.js is above modal.js. 
Also the sequence does not go down on the incorrect answer. 

Sept 21 
I was able to prgarmmatically create letters objects but not as their own exclusive variables but rather as array elements. hopefully this will allow me to do everything I need to do later on.

Now letters.text is moving onto modal.js however since it is in string format I need to figure out how to change it into a different type of data. A quick google search said JSON.parse might be a good method however there is something wrong with my format. More info at this link https://www.telerik.com/blogs/what-is-json-how-to-handle-unexpected-token-error

Sept 20
Still trying to figure out how to make a dynamic variable in callLetter(). should I used eval? call all the variables globally before? should it be in an array? Is there a better way to do this?

Sept 19
a.svg added

Sept 17
build to new md files "journal" & "todo" to better keep track of my progress. 
Tried to automate the constructor function of buildAddLetter() but am running into challenges with delcaring a variable programatically. eval() has been suggested but is controversial for some security reason. This needs more research.


Sept 16
mermaid.html flowchart file added but then I wrote out a rough workflow on paper first.

Tried making a function to automate the letter object construction call buildAddLetter() on line 20 of letters.js

To do:
- add and adjust written flowchart to mermaid
- have sequece stop at 4+
- have sequence run through entire list before running through sequence again.
-reinstate modal presenting letters
- add a.svg & ra.svg
- If incorrect change sequence on click and show wrong answer before moving to next question.
- Show letters on a 24hr cycle as per the sequence


Sept 15
Workflow.md added. I would like to figure out how to turn it into a visual sitemap

To do:
- turn workflow.md into flowchart
- have sequece stop at 4+
- have sequence run through entire list before running through sequence again.
-reinstate modal presenting letters
- add a.svg & ra.svg
- If incorrect change sequence on click and show wrong answer before moving to next question.
- Show letters on a 24hr cycle as per the sequence

Sept 14
Reinstating the modal with the new letter format. (using test.js for this keeping modal.js the way it is commented out with previous saved code) One descion I need to make is whether to manage the reviewed letter list through letters.js (letters array) or modal.js (new reviewedLetters array)

To do
*write out process for how the reviewed letters will be generated, presented, saved reviewed with SR on a day to basis and then archived 

- have sequece stop at 4+
- have sequence run through entire list before running through sequence again.
-reinstate modal presenting letters
- add a.svg & ra.svg
- If incorrect change sequence on click and show wrong answer before moving to next question.
- Show letters on a 24hr cycle as per the sequence

Sept 13
Changed so sequence goes back to zero on wrong selection. I want to have sequence change to 0 live and present the wrong answer before moving to next question.

To do
- have sequece stop at 4+
- have sequence run through entire list before running through sequence again.
-reinstate modal presenting letters
- add a.svg & ra.svg
- If incorrect change sequence on click and show wrong answer before moving to next question.
- Show letters on a 24hr cycle as per the sequence


Sept 9
Textile background added. incremental sequence added below question letter.

To do
- have sequece stop at 4+
- have sequence run through entire list before running through sequence again.
-reinstate modal presenting letters
- add a.svg & ra.svg
- If incorrect change sequence on click and show wrong answer before moving to next question.

Sept 1 
No spread syntax required. I just added or subtracted a number from the current value in matchAnswer().

to do
in matchAnswer() if sequence 0 do not subtract 1. if sequence is 4 do not add 1 but remove from letters array

Aug 31
Try object spread syntax(...)

Aug 27
removed modal popup to allow easier working with letters sequencing on main app. Removed reviewedLetters variable

Aug 26
**Git committed

Aug 25th
I have added reviewedIndex to previous if/else statement to = oldReviewedLetters.length. Letters from localStorage are now coming up on the modal!

To do 
Add spaced repitition

Aug 24th
Have added a if/else statement which forces user to review 5 letters before closing

Aug 20th
Created newReview() which is supposed to present the modal 5 times before close. I ran into two snags though 1)it runs through the of generateModalLetter w/o producing the image on the modal. 2) the span "x" display cannot be set to "none"

To do
have added session storage to reviewedLetters but I am getting errors. Need to review and troubleshoot
Add a loop which deactivate the exit modal button before reviewing 5 times

Aug 19th
I have adjusted generateQuestionLetter() & generateAnswer() so that it only produces the reviewedLetters array. 
Added a sass mixin file

To do 
Add a loop which deactivate the exit modal button before reviewing 5 times
add sessionStorage to modal OR make a seperate sessionStorage js file

Aug 18th 
Created a rudimentory sass achitecture and started apply sass variable(on the colors) as well as nesting in the compomemts
Made generatedModalLetter() to generate a new letter for review which is then pushed to a reviewedLetters array

I have started seperated the js files into to organizing them however I will need to be conscious of how the hiearchy works running the rough the stack from top to bottom

To do
To make the new images appear in a way condusive to learning I want letters to come out in a certain order however in generateAnswer() the letters array is being mutated. I`m trying to use map() to shuffle the letters into a new array and keep the orginal but I`m getting this error... Uncaught TypeError: [object Array] is not a function
@ line 218 > shuffle(letters.map(letters))
... I believe generateAnswer should used reviewedLetters so the user is quized on the letters after they have been seen. 

Aug 10th
Have started working on generatin a new letter on the modal. on reviewed New letters are suppose to then be pushed to reviewed letters array so the will not be produced again. 

generatedModalLetter() is supposed to do this. At this point I`m only able to make the first image a appear and it seems to be random and not in order. 

Furthermore it only seems to push 1 letter and on undefined into the reviewedLetters  

Will have to trouble shoot the issues above

Aug 7th
Back from vacation
Have converted (almost) all svgs to a clean format (except a.svg)

add popup modal to begin delivering new letters on a pop in a sequential manner

done some workflows on how the spaced repition may look...

Look into changing the letters into objects within a letters array

July 23
Added green correct answer and red on incorrect a 1 second timeout when the answer is correct. 

To do
Txt & img should be the same size
Add space repetition. ka, ta, ga, na, ya, nga, ba

Add circulating bamboo background
svg to change on dark mode

July 20 
Scoreboard color changes when the answer is incorrect. Have not changed the color when correct because it switches to the next question immediately.

sessionStorage has been changed to localStorage so it saves on the browser. This is my first step towards setting an account login

To do
Txt & img should be the same size
Add space repetition. ka, ta, ga, na, ya, nga, ba

Add circulating bamboo background
svg to change on dark mode

July 16
Was able to setup alternating questions to be generated between txt and img 
add unicode
download fluent forever

Whole alphabet has been added 

To do 
Txt & img should be the same size

color change on wron and right answer

some scripts still need to be resized

July 15 
Still trying to figure out how to adjust svg on darkmode toggle. Will need to search online as well as previous projects. This also goes for the array of answer buttons

I also want to randomly alternate between img & txt question. My original idea is to use an if else statement in both the q & a button build function but putting imgs into <button> is not totall straight forward. it might also be a good time to look up how to add babyin's unicode(though that will also need internet) 

Also could start recording or aquring audio recordings to accompany the questions. will need to find a recording program or customize vlc

July 14
Solved the undefined issue. It was with randomSelect. All that was needed was a -1 and bracket in the right place.
Math.round(Math.random() * arr.length);
to
Math.round(Math.random() * (arr.length-1));


July 8
Refactored generateQuestionLetter() there were to many steps being made with new divs and child nodes

To do
ba.svg & a.svg are the same img

July 7
added toggleDark switch. Need to add it to all of the buttons 

July 6
I have adjusted replaceAnswerBtn to clear the array so that it empties the array and removes child nodes and resets all the values array. I also used my shuffle() function on the array to shuffle the values with the correct answer after being added. 
I also got the "new button working by adding the current value shuffler within the generate letter function.

I basically now have a functioning quiz app! 
There are still kinks to work out hough. 
First being that some values are coming up undefined or no values at all. There should only be 4 answers total produced but 3 to 6 could be produced on refresh. My first thought being that the are all loading up  to quickly and something done with async should make a difference. 

The second being that this code could probably be refactored alot more to clean it up
 
Another development would be for the answer/question to alternate between babayin and alphabet

July 5
Success! I finally managed to get buildAnswer button to add a matchAnswer evenListener to each button produced with a forEach loop within the function

The new challenge is to have brand new buttons replace the old on a correct answer or new btn selection. currently the just append new buttons to the of the exisitng ones

July 3 
I tried using entries() method and that also prints the text content into the buttons	 it runs the click event on startup but also on the click... progress?

I have switched back to for loop...
now the error says 
"Cannot read properties of undefined (reading 'addEventListener')
    at buildAnswerBtn "
and it only shows one button in the loop/array. Whent there is no event listener they all show up fine 
It will only give one element the event listener when inside the function.
when outside the function I cannot loop to apply the event listener for each function 

July 2
I made the button elements in the html. no need to to generate them in javascript unessecarily. 

Now I`m getting a new error on set/get(onclick)attribute...
"Uncaught DOMException: Failed to execute 'setAttribute' on 'Element': '[object Attr]' is not a valid attribute name.
    at buildAnswerBtn"

And still the same error on the eventlistener... click is being activate when the function is called 

July 1
Fixed the score all that was need was that I was supposed to put brackets around the parameter to turn it into a string like matchAnswer("ka")

June 30
PM:
I have changed the script so that generateAnswer & generateQuestionLetter push their values to aArray which then builds the buttons with those values in buildAnswerBtn(). 

EvenListener was still activated with the function was called instead of when it was clicked.

So I tried an old school way and attached an onclick attribute which is now ativating click with a new error... progress

The error is: 
Uncaught ReferenceError: i_e is not defined
    at HTMLButtonElement.onclick 

--

AM:
Have created aArray which puts all the aBtn values into the array.

The click event listerner was activating on refresh instead on 'click' when outside of the buildAnswerBtn() function. This has been a reoccuring bug. I have put it back into that function. Now it only records the else/fail result. 

When I check the innerHTML it still only gives the last result in aBtn list/array.

I need to 
A) generate all 4 answers (1 correct, 3 false)
B) Attach a click event listener to each button seperately so it matches with the specific correct answer at that time. 

June 28
Trybuilding the correct answer in the genertateQuestionLetter();

Then use for loop to print 3 false answers and use "continue/break" if looping through correct answer

Then add eventlistener to all buttons with forEach  

June 7 
Will keep all answers available for now and focus on somethng else 

June 6
change letters from objects to a basic array of strings

some elements in the array come up undefined on refresh

To do 
figured out how to get random incorrect numbers up to 3

figure out why some answers come up undefined

June 4 
Have now created an if statement looking for the true answer & added the event listener. on refresh. Sometimes it will work and other times I get this... Uncaught TypeError: Cannot read properties of undefined (reading 'l') on line 178.

Still havent figured out how to get random incorrect numbers up to 3

May 29 
"new" button is now generating new question imgs once again (the stopped working after I fixed it before)

I have creates an if statement that only returns the correct answer butoon. I know need to be able to select 3 incorrect answers from the left over letters

To do
add my answer to my question to stack overflow

randomly generate 3 - 5 potential answers(including the correct one)

May 28th 
sessionstorage added by putting setitem with the generate question function

to do:
New image is no longer produced on "new" button clicked & correct answer is selected

randomly generate 3 - 5 potential answers(including the correct one)

May 17 
To do:

Apply API to maintain score & current qImg on page refresh.
Session storage is producing NaN 

randomly generate 3 - 5 potential answers(including the correct one)

May 16
New image is produced on "new" button clicked & correct answer is selected

To do:

Apply API to maintain score & current qImg on page 

randomly generate 3 - 5 potential answers(including the correct one)

May 14
Went backwards cannot create random image when "new" button is pressed not sure what I did wrong.

I have now created a repo on github so I can now start doing version contol hopefully this will prevent saving over previous progress

To do
new question img needs to be generated on click *while maintaining score

When correct answer is selected the qimg disappears and a new one is generated

ids or classes need to be added to js generated buttons

randomly generate 3 - 5 potential answers(including the correct one)


May 12
Q Image now random image on clicking "new" button

To do
When correct answer is selected the qimg disappears and a new one is generated

ids or classes need to be added to js generated buttons

randomly generate 3 - 5 potential answers(including the correct one)

May 11
new question img needs to be generated on click *while maintaining score

ids or classes need to be added to js generated buttons

randomly generate 3 - 5 potential answers(including the correct one)

May 9
Answer buttons have been generated with event listeners

Scoreboard has been added

To do:
1) Scoreboard needs to change incrementally on t/f answer
2) new question img needs to be generated on click *while maintaining score
3) ids or classes need to be added to js generated buttons

May 8
All svgs added. img node created but img is not being produced.

Random letter is generated only once

Note:
All keyboard shortcuts in VS Code can be customized via the keybindings. json file. To configure keyboard shortcuts through the JSON file, open Keyboard Shortcuts editor and select the Open Keyboard Shortcuts (JSON) button on the right of the editor title bar. This will open your keybindings.

May 7 
can now generate random letter from letter objects using the button.

However, it only uses the first selection. 

I also can't figure out how to create a node to append the letter to 

May 6
Generate random letter from letter objects 

script.js:39 Uncaught TypeError: Cannot read properties of undefined (reading 'letter')

can currently run letters through a forEach loop. Now I need to pull any one of those letters at random