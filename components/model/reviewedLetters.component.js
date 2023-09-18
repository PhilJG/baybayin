import {letters} from '../controller/renderLetters.component.js'
import { reviewedLetters } from '../controller/createReviewLetters.component.js'
import { oldReviewedLetters } from './oldReviewedLetters.component.js'

const checkIfReviewed = function (l){
    if(l.reviewed = false ) {
        l.push(toReview)
    }
}

let t = []
let reviewedLetters
 const getAdd = function(tr) {
    if (tr == undefined){
        tr = []
        console.log(typeof tr, tr)
    } else {
        //check letters have been reviewed 
    if(reviewedLetters != null){
        console.log(reviewedLetters);
        reviewedLetters.forEach(
            function(i){
            console.log(i)
            if(i.reviewed = false ) {
                i.push(tr)
            }
        }
        )
        } else {
            reviewedLetters = [];
        }
}
//combine to tr
console.log(`${tr}`);

//return array
return tr

}

export let toReview = getAdd(t)
    // //check localstorage contains letter.reviewed = false 
    // if(oldReviewedLetters != null){
    // for(let i = 0; i < oldReviewedLetters.length; i++){
    //     checkIfReviewed(i)
    // }}


// export const add = function(){
//     //take an array
//     //push those new to toReview
// }

