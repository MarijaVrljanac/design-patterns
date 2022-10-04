class Resume {
    constructor(
      public name: string,
      public aboutMe?: string,
      public skills?: string[]
    ) {}
  
    addName(name: string) {
      this.name = name;
    }
  
    addAboutMe(aboutMe: string) {
      this.aboutMe = aboutMe;
      return this;
    }
  
    addSkills(skills: string[]) {
      this.skills = skills;
    }
  }
  
  const myResume = new Resume("Marija Vrljanac")
    .addAboutMe("Junior Software Engineer/IT Consultant")
    .addSkills(["HTML", "CSS", "JS"]);
  
  export {};
  