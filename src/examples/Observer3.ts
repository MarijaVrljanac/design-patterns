// //LINKEDIN

import { Observable } from "rxjs";

//job seekers getting notified for a new job posting
class NewJob
{
    constructor(
        public company:string,
        public title:string,
        public descripiton:string,
        public salary?:string,
    ){}

    addCompany(company: string) {
        this.company = company;
      }
  
    addTitle(title: string) {
        this.title = title;
      }

    addDescripiton(descripiton: string) {
        this.descripiton = descripiton;
      }
  
    addSalary(salary: string) {
        this.salary = salary;
      }

    getTitle()
    {
        return this.title;
    }
}


class JobSeeker
{
    constructor(
        public firstName:string,
        public lastName:string,
        public profession:string,
        public education:string,
    ){}

    addFirstName(firstName: string) {
        this.firstName = firstName;
      }
  
    addLastName(lastName: string) {
        this.lastName = lastName;
      }

    addProfession(profession: string) {
        this.profession = profession;
      }
  
    addEducation(education: string) {
        this.education = education;
      }

    onJobPosted(job:NewJob)
    {
        // Do something with the job posting
        console.log('Hi, ' + this.firstName + '! We found a new job for you, posted by '+job.company + ': ' + job.getTitle());
        return 'Hi, ' + this.firstName + '! New job posted: ' + job.getTitle();
    }
}

const jobseeker1 = new JobSeeker("Pera", "Peric", "Junior IT Consultant", "ETF");
const job1 = new NewJob("PRODYNA", "Junior IT Conusltant", 
"An IT consultant is a technical expert who can creatively solve issues." +
        "IT consultants recommend technological solutions to organizations "+
        "so that they can resolve IT-related business problems in the organization.");

console.log(job1);
jobseeker1.onJobPosted(job1);

export {};