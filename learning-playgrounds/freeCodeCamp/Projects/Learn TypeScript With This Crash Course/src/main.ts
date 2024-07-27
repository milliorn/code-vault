type ID = string
type PopularTag = string
type MaybePopularTag = string | null

const popularTags: PopularTag[] = ['dragon', 'coffee'];
const dragonsTag: MaybePopularTag = "dragons";

const testStatus = {
	notStarted: 0,
	inProgress: 1,
	done: 2
};

enum Status {
	NotStarted,
	InProgress,
	Done
}

enum Statuses {
	NotStarted = "Not Started",
	InProgress = "In Progress",
	Done = "Done"
}
const notStartedStatus: Status = Status.NotStarted;

console.log(Status.Done);

const searchStr = 'foo';
//const hasSearchedString = any<string>((el: string) => el.search(searchStr), ['foooooo', 'bar', 'baz']);
const addId = <T>(obj: T) => {
	const id = Math.random().toString(16);
	return {
		...obj,
		id,
	};
};

interface UserInterface<T> {
	name: string;
	data: T;
}

const userJack: UserInterface<{ meta: string }> = {
	name: "Jack",
	data: {
		meta: "foo",
	}
};

const result = addId(userJack);

const john: UserInterface<string[]> = {
	name: "John",
	data: ["foo", "bar", "baz"],
};

console.log('result', result);

interface IUser {
	name: string;
	age?: number;
	getMessage(): string;
}

const date = new Date();
const a = date.toUTCString();
const b = "Hello ";
const c = console.log(b, a);
let hello: string = "World!";
const helloWorld = () => c + hello;

helloWorld();

const getFullName = (first: string, last: string) => {
	return first + " " + last;
}

console.log(getFullName("John", "doe"));

const userMain: { name: string, age: number } = {
	name: getFullName("John", "Doe"),
	age: 30,
};

const userInterface: IUser = {
	name: getFullName("Jane", "Doe"),
	age: 26,
	getMessage() {
		return "Hello" + name;
	},
}

let username: string = "alex";
let pageName: string | number = "1";
let errorMessage: string | null = null;
let newUser: IUser | null = null;

const doSomething = (): void => {
	console.log("doSomething");
};

let foo: any = "foo";

/*
const doNever = (): never => {
	throw "never";
};
*/

let vAny: any = 10;
let vUnknown: unknown = 10;
let s1: string = vAny;
let s2: string = vUnknown as string;
let pageNumber: string = '1'
let numericPageNumber: number = (pageNumber as unknown) as number;

const someElement = document.querySelector('.foo');

someElement.addEventListener('blur', (event) => {
	const target = event.target as HTMLInputElement;
	console.log('event', target.value);
});

const testUser = new User("John", "Doe");

class Admin extends User {
	private editor: string

	setEditor(editor: string): void {
		this.editor = editor;
	}

	getEditor(): string {
		return this.editor;
	}
}

console.log("someElement", someElement);
console.log(userMain.age);
console.log(userMain.name);
console.log(userInterface.age);
console.log(userInterface.name);
console.log(testUser.firstName);
console.log(testUser.lastName);
console.log(testUser.getFullName());
