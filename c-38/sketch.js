var  database;
var position;
var form, game, player
var playerCount=0
var gameState=0
var distance=0
var allPlayers;
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game = new Game()
game.getState()
game.start();


}
function draw(){
  background("blue");
  
}
