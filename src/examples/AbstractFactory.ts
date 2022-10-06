interface Door
{
    getDescription(): string;
}

class WoodenDoor implements Door
{
    getDescription()
    {
        console.log('I am a wooden door!');
        return 'I am a wooden door';
        
    }
}

class IronDoor implements Door
{
    getDescription()
    {
        console.log('I am a iron door!');
        return 'I am an iron door';
    }
}


//fiiting exerts for each door type
interface DoorFittingExpert
{
    getDescription(): string;
}

class Welder implements DoorFittingExpert
{
    getDescription()
    {
        console.log('I can only fit iron doors!');
        return 'I can only fit iron doors';
    }
}

class Carpenter implements DoorFittingExpert
{
    getDescription()
    {
        console.log('I can only fit wooden doors!');
        return 'I can only fit wooden doors';
    }
}

//abstract factory that would let us make family of related objects i.e. wooden door factory would create a wooden door and wooden door fitting expert and iron door factory would create an iron door and iron door fitting expert

interface DoorFactory
{
    makeDoor(): Door;
    makeFittingExpert(): DoorFittingExpert;
}

// Wooden factory to return carpenter and wooden door
class WoodenDoorFactory implements DoorFactory
{
    makeDoor(): Door
    {
        return new WoodenDoor();
    }

    makeFittingExpert(): DoorFittingExpert
    {
        return new Carpenter();
    }
}

// Iron door factory to get iron door and the relevant fitting expert
class IronDoorFactory implements DoorFactory
{
    makeDoor(): Door
    {
        return new IronDoor();
    }

    makeFittingExpert(): DoorFittingExpert
    {
        return new Welder();
    }
}

//

const woodenFactory = new WoodenDoorFactory();

let door = woodenFactory.makeDoor();
let expert = woodenFactory.makeFittingExpert();

door.getDescription();  // Output: I am a wooden door
expert.getDescription(); // Output: I can only fit wooden doors

// Same for Iron Factory
const ironFactory = new IronDoorFactory();

door = ironFactory.makeDoor();
expert = ironFactory.makeFittingExpert();

console.log("***Abstract factory:***");
door.getDescription();  // Output: I am an iron door
expert.getDescription(); // Output: I can only fit iron doors



export {};