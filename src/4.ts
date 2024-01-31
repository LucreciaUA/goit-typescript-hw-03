class Key {
    public signature: number=Math.random()


    getSignature():number {
        return this.signature
    }
}

class Person{
    constructor(public key: Key) { }
    
    getKey():Key {
        return this.key;
    }
}

abstract class House {
    public door: boolean = false;
    public tenants: Person[] = [];
    constructor(
        
        public key: Key,
    ) {
        
    }

    public abstract openDoor(key: Key): void;
    

    comeIn(person:Person) {
       if(this.door){
        this.tenants.push(person);
           console.log(`Tenants ${this.tenants}`)
       }
 
    }
}

class MyHouse extends House{
 
        
    
    public openDoor(key: Key) {
        if (key.getSignature() === this.key.getSignature()) {
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

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};