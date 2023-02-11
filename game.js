var buttonColours = ["red", "blue", "green", "yellow"]
var gamePatern = [];
var userClickedPattern = [];
$('.btn').click(function(){
    var userChosenColour = $(this).attr('id'); 
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePatern.push(randomChosenColour);
    $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColor){
    $('#' + currentColor).addClass('pressed');
    setTimeout(function (){
        $('#' + currentColor).removeClass('pressed');
    }, 100);
}