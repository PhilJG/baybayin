import {letters} from '../controller/renderLetters.component.js'
import { reviewedLetters } from '../controller/createReviewLetters.component.js'
import { oldReviewedLetters } from './oldReviewedLetters.component.js'

let toReview 


const checkIfReviewed = function (l){
    if(l.reviewed = false ) {
        l.push(toReview)
    }
}

export const getAdd = function() {

    if (toReview == undefined){
        toReview = []
    }
    //check letters have been reviewed 
    if(reviewedLetters != null){
    for(let i = 0; i < reviewedLetters.length; i++){
        if(i.reviewed = false ) {
            i.push(toReview)
        }
}
console.log(toReview);

}
    // //check localstorage contains letter.reviewed = false 
    // if(oldReviewedLetters != null){
    // for(let i = 0; i < oldReviewedLetters.length; i++){
    //     checkIfReviewed(i)
    // }}

    //combine to toReview
    console.log(toReview);
    
    //return array
    return toReview
}

// export const add = function(){
//     //take an array
//     //push those new to toReview
// }

