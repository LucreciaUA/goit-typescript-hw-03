class Key {
    constructor(public signature: number=Math.random()) { }


    getSignature() {
        return this.signature
    }
}

class Person{
    constructor(public key: Key) { }
    
    getKey() {
        return this.key.getSignature();
    }
}

abstract class House {
    constructor(
        public door: boolean,
        public key: Key,
    ) {
        
    }

    abstract openDoor(keySignature: number): void;
    

    comeIn(person:Person) {
       const tenants: Person[] = [];
        tenants.push(person);
        console.log(`Tenants ${tenants}`)
    }
}

class MyHouse extends House{
    constructor(
        public door: boolean,
        public key: Key,
    ) {super(door, key)
        
    }
     openDoor(keySignature: number) {
        if (keySignature === this.key.getSignature()) {
            this.door = true
            console.log('The door is open')
        }
        else {
            this.door = false
            console.log('The door is closed')
        }
    }
}

const key = new Key();

const house = new MyHouse(false, key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};