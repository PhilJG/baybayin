# Reviewed letters process 
will be generated, presented, saved reviewed with SR on a day to basis and then archived
>*write out process for how the reviewed letters will be generated, presented, saved reviewed with SR on a day to basis and then archived 

## Generation

# Upon first opening
1. in letter.js new Letter constructor creates 5 objects letterArray of first 5 strings letter.
2. all 5 objects are pushed into another array

# First 5 object presented on modal.js. 
- When user presses next the letter is pushed to the reviewedLetters array.
- once all 5 objects have been reviewed and pushed to reviewedLetters array the modal is closed. 
- User can click "next" btn whenever they want to reiew an new letter

# Sequence of correct answer will work on a 24 hour timer. Once reviewed it cannot be reviewed fo another 24hrs. 
1. If user is correct 4 times in a row that letter is archived
2. if the letter is reviewed the first time its property is set to "true"
3. another propety will specify the date time it was reviewed.
    - upon being called (maybe in matchAnswer()) if the currentDate is +24hrs than the saved date then the reviewed property is set to false. if not it stays true.
    - if the property is false it can be presented again as a question. 
    - If true it will not be until 24hrs has elapsed as per above function
        - if reviewed and correct a second time than the time = time + 24


# Diagram
