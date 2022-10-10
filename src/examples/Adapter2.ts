//interface Lion that all types of lions have to implement
interface Lion
{
    roar():void;
}

class AfricanLion implements Lion
{
    roar()
    {
    }
}

class AsianLion implements Lion
{
    roar()
    {
    }
}
//And hunter expects any implementation of Lion interface to hunt.

class Hunter
{
    hunt(lion:Lion)
    {
        lion.roar();
    }
}

// This needs to be added to the game
class WildDog
{

    

    bark()
    {
    }
}

// Adapter around wild dog to make it compatible with our game
class WildDogAdapter implements Lion
{
    constructor(
        public dog:WildDog,
    ){}

    construct(dog:WildDog)
    {
        this.dog = dog;
    }

    roar()
    {
        this.dog.bark();
    }
}

let wildDog = new WildDog();
let wildDogAdapter = new WildDogAdapter(wildDog);

let hunter = new Hunter();
hunter.hunt(wildDogAdapter);

export {};