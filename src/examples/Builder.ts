class Player {
    constructor(
      public firstName: string,
      public lastName: string,
      public age: number,
      public position: string,
      public currentClub: string,
      public internationalTeam?: string,
      public height?: string,

    ) {}
  
    addFirstName(firstName: string) {
      this.firstName = firstName;
    }

    addLastName(lastName: string) {
      this.lastName = lastName;
    }

    addAge(age:number){
      this.age = age;
    }
  
    addPosition(position: string) {
      this.position = position;
    }

    addCurrentClub(currentClub: string) {
      this.currentClub = currentClub;
    }
  
    addInternationalTeam(internationalTeam: string) {
      this.internationalTeam = internationalTeam;
    }

    addHeight(height: string) {
      this.height = height;
      return this;
    }
  }


  
  const player1 = new Player("Reece", "James", 23,"Right-Back", "Chelsea", "England","180 cm");
  const player2 = new Player("Dusan", "Vlahovic", 22, "Centre-Forward", "Juventus", "Serbia","190 cm");
  const player3 = new Player("Paolo", "Di Canio", 54, "Forward", "West Ham United");

  player3.addHeight("178 cm");

  console.log("***Builder:***");

  console.log(player1);
  console.log(player2);
  console.log(player3);



  export {};
  