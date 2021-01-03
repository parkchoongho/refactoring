class Bird {
    constructor(birdObject){
        Object.assign(this, birdObject);
    }

    get plumage(){
        return "알 수 없다";
    }

    get airSpeedVelocity(){  
        return null;
    }
}

class EuropeanSwallow extends Bird{
    get plumage(){
        return "보통이다";
    }
    get airSpeedVelocity(){
        return 35;
    }
}

class AfricanSwallow extends Bird{
    get plumage(){
        return (this.numberOfCoconuts > 2) ? "지쳤다" : "보통이다";
    }
    get airSpeedVelocity(){
        return 40 - 2 * this.numberOfCoconuts;
    }
}

class NorwegianBlueParrot extends Bird{
    get plumage(){
        return (this.voltage > 100) ? "그을렸다" : "예쁘다";
    }
    get airSpeedVelocity(){
        return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
    }
}

function createBird(bird) {
    switch (bird.type){
        case "유럽 제비":
            return new EuropeanSwallow(bird);
        case "아프리카 제비":
            return new AfricanSwallow(bird);
        case "노르웨이 파랑 앵무":
            return new NorwegianBlueParrot(bird);
        default:
            return new Bird(bird);
    }   
}

function plumages(birds) {
    return new Map(birds.map(b=>[b.namd, plumage(b)]));
}

function speeds(birds) {
    return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
    return createBird(bird).plumage;
}

function airSpeedVelocity(bird) {
    return createBird(bird).airSpeedVelocity;
}