//mediator - the chat room
interface ChatRoomMediator 
{
    showMessage(user:User, message:string):void;
}

// Mediator
class ChatRoom implements ChatRoomMediator
{
    showMessage(user:User, message:string)
    {
        const time = Date();
        const sender = user.getName();
        
        console.log(time + '[' + sender + ']:' + message);
        return time + '[' + sender + ']:' + message;
    }
}

//users - colleagues
class User {
    constructor(
        public name:string,
        public chatMediator:ChatRoomMediator,
    ){}
   

    construct(name:string, chatMediator:ChatRoomMediator) {
        this.name = name;
        this.chatMediator = chatMediator;
    }

    getName() {
        console.log(this.name);
        return this.name;
    }

    send(message:string) {
        this.chatMediator.showMessage(this, message);
    }
}

//usage
const mediator = new ChatRoom();

console.log("***Mediator:***");

const uros = new User('Uros', mediator);
const milos = new User('Milos', mediator);

const message = uros.send('Hi, '+milos.getName()+'!');
console.log(message);
milos.send('Hey, '+uros.getName()+'!');

milos.getName();

mediator.showMessage(uros, "Hello!");


export {};