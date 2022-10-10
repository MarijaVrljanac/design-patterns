class Order {
    constructor(
      public firstName: string,
      public lastName: string,
      public items: string[],
      public phoneNumber: number,
      public creditCardNumber: string,
      public sideDish?: string[],
    ) {}
  
    addFirstName(firstName: string) {
      this.firstName = firstName;
    }

    addLastName(lastName: string) {
      this.lastName = lastName;
    }

    addItem(items:string[]){
      this.items = items;
      return items;
    }
  
    addPhoneNumber(phoneNumber: number) {
      this.phoneNumber = phoneNumber;
    }

    addCreditCardNumber(creditCardNumber: string) {
      this.creditCardNumber = creditCardNumber;
    }
  
    addSideDish(sideDish: string[]) {
      this.sideDish = sideDish;
    }
  }


  
  const order1 = new Order("Marija", "Vrljanac", ["Cheeseburger"], 60123456, "1234-5678-9123", ["French fries"]);
  const order2 = new Order("Uros", "Miric", ["DoubleCheesburger", "Soup"], 123545,"1235-8794-4723");


  order2.addSideDish(["Wedges", "Kecthup"]);

  console.log("***Builder:***");

  console.log(order1);
  console.log(order2);



  export {};
  