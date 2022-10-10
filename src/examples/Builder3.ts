class Burger
{
    constructor(
        public size:number,
        public cheese?:boolean,
        public pepperoni?:boolean,
        public lettuce?:boolean,
        public tomato?:boolean,
    ){}

    construct(builder:BurgerBuilder)
    {
        this.size = builder.size;
        this.cheese = builder.cheese;
        this.pepperoni = builder.pepperoni;
        this.lettuce = builder.lettuce;
        this.tomato = builder.tomato;
    }
}

class BurgerBuilder
{
    constructor(
        public size:number,
        public cheese?:boolean,
        public pepperoni?:boolean,
        public lettuce?:boolean,
        public tomato?:boolean,
    ){}

    construct(size:number)
    {
        this.size = size;
    }

    addPepperoni()
    {
        this.pepperoni = true;
        return this;
    }

    addLettuce()
    {
        this.lettuce = true;
        return this;
    }

    addCheese()
    {
        this.cheese = true;
        return this;
    }

    addTomato()
    {
        this.tomato = true;
        return this;
    }

    build(): Burger
    {
        return new Burger(12);
    }
}

console.log("***Builder:***");

let burger = (new BurgerBuilder(14))
                    .addPepperoni()
                    .addLettuce()
                    .addTomato()
                    .build();

export {};