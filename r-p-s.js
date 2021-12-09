function computerPlay(){
    let choices = ["Rock","Paper","Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}
console.log(computerPlay());

