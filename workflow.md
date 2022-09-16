# Reviewed letters process 
will be generated, presented, saved reviewed with SR on a day to basis and then archived
>*write out process for how the reviewed letters will be generated, presented, saved reviewed with SR on a day to basis and then archived 

## Generation

* Upon first opening
1. in letter.js new Letter constructor creates 5 objects letterArray of first 5 strings letter.
2. all 5 objects are pushed into another array

2. First 5 object presented on modal.js. 
- When user presses next the letter is pushed to the reviewedLetters array.
- once all 5 objects have been reviewed and pushed to reviewedLetters array the modal is closed. 
- User can click "next" btn whenever they want to reiew an new letter

3. Sequence of correct answer will work on a 24 hour timer. Once reviewed it cannot be reviewed fo another 24hrs. 
- If user is correct 4 times in a row that letter is archived


# Diagram
