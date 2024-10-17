class Hero {

    constructor(heroName, heroAge, heroType){
        this.heroName = heroName;
        this.heroAge = heroAge;
        this.heroType = heroType;
    }

    selectTypeAttack(){
        switch (this.heroType){
            case "guerreiro":
                return "esapda";
            case "mago":
                return "magia";
            case "monge":
                return "artes marciais";
            case "ninja":
                return "shuriken";
        }
    }

    attack(){
        let typeAttack = this.selectTypeAttack();
        console.log(`${this.heroType} atacou usando ${typeAttack}`)
    }
    
} 

function main (){
    let hero = new Hero("Cleitin", 23, "ninja");
    hero.attack();
}

main();