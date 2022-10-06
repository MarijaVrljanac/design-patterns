interface ToDoList{
    getHTML(): string;
}

class ToDo implements ToDoList{
    text: string;

    constructor(text: string){
        this.text = text;
    }
    getHTML() {
        console.log("List of things to do:");
        return this.text;
      }
}

class Project implements ToDoList{
    title:string;
    toDos: Array<ToDoList>;

    constructor(title:string, toDos:Array<ToDoList>){
        this.title = title;
        this.toDos = toDos;
    }

    getHTML() {
        console.log("Do the design pattern task");
        let html = "<h1>";
        html += this.title;
        html += "</h1><ul>";

       
        for (let index = 0; index < this.toDos.length; index++) {
            html += "<li>";
            html += this.toDos[index].getHTML();
            html += "</li>";
            
        }

        html += "</ul>";

        return html;
      }
}

console.log("***Composite:***");

const toDo = new ToDo("Project1");
toDo.getHTML();

export default [];