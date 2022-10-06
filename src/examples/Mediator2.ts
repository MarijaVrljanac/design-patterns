//footbal manager

//football manager
interface FootballManager 
{
    showMessage(player:Player, message:string):void;
}

// Mediator
class FootballClub implements FootballManager
{
    showMessage(player:Player, message:string)
    {
        const time = Date();
        const sender = player.getFirstName();
        
        console.log(time + '[' + sender + ']:' + message);
        return time + '[' + sender + ']:' + message;
    }
}

//users i.e. colleagues
class Player {
    constructor(
        public firstName:string,
        public lastName:string,
        public footballManager:FootballManager,
    ){}
   

    construct(firstName:string, lastName:string, footballManager:FootballManager) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.footballManager = footballManager;
    }

    getFirstName() {
        console.log(this.firstName + " " + this.lastName);
        return this.firstName + " " + this.lastName;
    }

    send(message:string) {
        this.footballManager.showMessage(this, message);
    }
}

//usage
const manager = new FootballClub();

console.log("***Mediator:***");

const tadic = new Player('Dusan','Tadic', manager);
const mitrovic = new Player('Aleksandar', 'Mitrovic', manager);

const message = tadic.send('Zdravo,'+mitrovic.getFirstName);
console.log(message);
mitrovic.send('Hey!');

tadic.getFirstName();

manager.showMessage(mitrovic, "Hello!");


export {};

export {};