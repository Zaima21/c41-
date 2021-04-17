class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  
  getCarsReached(){
    var playersReachedRef = database.ref('CarsReached');
    playersReachedRef.on("value",(data)=> {
    this.rank = data.val();
    });  
  }
  //updateCarsReached
  static updateCarsReached(rank){
    database.ref('/').update({
      CarsReached : rank
    
    })

  }

}
//store a rank each player. in DB "reached"
