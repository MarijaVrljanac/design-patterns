//Employee types
interface Employee
{ 
    getName(): string,
    getSalary(): string,
    getRoles(): string[],
}

class Developer implements Employee
{
    constructor(
        public salary:string,
        public name:string,
        public roles:string[],
    ){}

    getName(): string
    {
        return this.name;
    }


    getSalary(): string
    {
        return this.salary;
    }

    getRoles(): string[]
    {
        return this.roles;
    }
}

class Designer implements Employee
{
    constructor(
        public name:string,
        public salary:string,
        public roles:string[]
    ){}

    addName(name:string){
        this.name = name;
    }

    addSalary(salary:string){
        this.salary = salary;
    }

    addRoles(role:string){
        this.roles = this.roles;
    }

    getName(): string
    {
        return this.name;
    }

    getSalary(): string
    {
        return this.salary;
    }

    getRoles(): any
    {
        return this.roles;
    }
}

//Employees within an organization
class Organization
{
    constructor(
        public employees:Employee[],
    ){}

    addEmployee(employee:Employee)
    {
        for (let index = 0; index < this.employees.length; index++) {
            this.employees[this.employees.length] = employee;  
        }
        
    }

    getNetSalaries(): string | number
    {
        let netSalary = 0;

        // for (let index = 0; index < employees.length; index++) {
        //     // netSalary += this.employees;
        // }

        return netSalary;
    }
}

//usage
let jane = new Designer('Jane Doe', "15000", ['Designer, UX Designer']);


// Add them to organization
let john = new Designer("John Doe", "16000", ["UI Designer"]);
let organization = new Organization([]);
organization.addEmployee(john);
organization.addEmployee(jane);

console.log("***Composite:***");

// return "Net salaries: " . organization.getNetSalaries(); // Net Salaries: 27000

export {};