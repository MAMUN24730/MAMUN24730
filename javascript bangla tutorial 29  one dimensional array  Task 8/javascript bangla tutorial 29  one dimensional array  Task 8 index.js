//One dimensional Array
//Create a function called hightScore that
//Receive a 1d Array called scores
//Return the highest score

console.clear();
function highestScore(scores){
    //console.log(scores);
    let max = scores[0];
    for (var x = 1; x < scores.length; x++){
        if(max < scores[x]){
            max = scores[x];
        }
    }
    return max;
}

let  scores = [21,28,1,88,15];
let maxScore = highestScore(scores)
console.log(maxScore);