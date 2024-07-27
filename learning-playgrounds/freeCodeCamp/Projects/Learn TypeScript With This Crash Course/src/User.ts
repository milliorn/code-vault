class User {
	firstName: string
	lastName: string
    readonly name: string;
    static readonly maxAge = 40;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
        this.lastName = lastName;
        this.name = firstName + ' ' + lastName;
	}

	getFullName(): string {
		return this.firstName + ' ' + this.lastName
	}
}

const user = new User("Monster", "lessons");
