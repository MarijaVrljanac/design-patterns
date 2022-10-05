interface ToDoList{
    getHTML(): string;
}

class ToDo implements ToDoList{
    text: string;

    constructor(text: string){
        this.text = text;
    }
    getHTML() {
        console.log("Hi...");
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
        console.log("Hi...");
        let html = "<h1>";
        html += this.title;
        html += "</h1><ul>";

       

        // this.toDos.forEach(ToDoList tdl in this.toDos){
        //     html += "<li>";
        //     html += tdl.getHTML();
        //     html += "</li>";
        // }

        html += "</ul>";

        return html;
      }
}

const toDo = new ToDo("Project1");
toDo.getHTML();

export default [];