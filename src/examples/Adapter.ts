interface Bird {
    fly(): void;
    makeSound(): void;
  }
  
  class Sparrow implements Bird {
    fly() {
      console.log("Flying...");
    }
  
    makeSound() {
      console.log("Chirp Chirp");
    }
  }
  
  /** Target */
  interface ToyDuck {
    squeak(): void;
  }
  
  class BirdAdapter implements ToyDuck {
    constructor(private bird: Bird) {}
  
    squeak() {
      this.bird.makeSound();
    }
  }
  
  const sparrow = new Sparrow();
  
  // Wrap a bird in a birdAdapter so that it
  // behaves like toy duck
  const birdAdapter = new BirdAdapter(sparrow);
  
  // toy duck behaving like a bird
  birdAdapter.squeak();
  
  export {};
  