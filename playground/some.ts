interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}!`
}
class PersonImpl implements Person {
    firstName: string;
    lastName: string;

    constructor (firstName : string, lastName : string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let user = new PersonImpl('Ernest', 'Pakers');

document.body.innerHTML = greeter(user);