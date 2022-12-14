interface Sport {
    numberOfPlayersOnATeam(): number;
    object(): void;
    matchDuration(): void;
    championships(): void;
  }
  
  class Football implements Sport {
    numberOfPlayersOnATeam(){
      return 11;
    }
    object(){
      console.log("Ball");
    }
    matchDuration(){
      console.log("90 minutes");
    } 
    championships(){
      console.log("UEFA Champions League");
    }
  }

  class Basketball implements Sport {
    numberOfPlayersOnATeam(){
      return 5;
    }
    object(){
      console.log("Ball");
    }
    matchDuration(){
      console.log("4x10 minutes");
    }
    championships(): void {
      console.log("ABA league");
    }   
  }
  
  /** Target */
  interface VideoGame {
    newestRelease(): void;
  }
  
  class Fifa implements VideoGame {
    constructor(private sport: Sport) {}
  
    league() {
      this.sport.championships();
    }

    newestRelease(){
      console.log("FIFA 23");
    }
  }


  class Fantasy implements VideoGame {
    constructor(private sport: Sport) {}
  
    league() {
      console.log("Premier league");
    }

    newestRelease(){
      console.log("");
    }
  }
  
  console.log("***Adapter:***");

  const football = new Football();


  //mali i veliki fudbal
  

  const fantasy = new Fantasy(football);


  fantasy.league();
  
  export {};
  