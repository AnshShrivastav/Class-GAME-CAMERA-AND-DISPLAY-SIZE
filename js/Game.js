class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200);
    car2=createSprite(300,200);
    car3=createSprite(500,200);
    car4=createSprite(700,200);
    cars=[car1,car2,car3,car4];
  }

  play(){
    form.hide();
    Player.getPlayerInfo();
    if(allPlayers!==undefined){
      background("lightBrown");
      var index=0;
      var x=0,y;
      for(var p in allPlayers ){
        x=x+200;
        y=displayHeight-allPlayers[p].distance;
        cars[index].x=x;
        cars[index].y=y; 
        if(p==="player"+player.index){
          cars[index].shapeColor="red";
          camera.position.x=displayWidth/2;
          cars[index].y;
        }
        index++;
      }
    }
    if(keyIsDown(UP_ARROW)&&(player.index!==null)){
      player.distance+=100;
      player.update();
    }
  
    
  }
}
