// Parent class

class Employee {
    public firstName: string;
    public lastName: string;
    public designation: string;

    public print(): void {
        console.log('Employee Details');
    }
}

class Manager extends Employee {
    constructor(
        firstName: string,
        lastName: string,
        designation: string
    ) {
        //invoke super
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }

    public print(): void {
        super.print();
        console.log(
            `${this.firstName} ${this.lastName} - ${this.designation}`
        );
    }
}
class Lead extends Employee {
    constructor(
        firstName: string,
        lastName: string,
        designation: string
    ) {
        //invoke super
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }

    public print(): void {
        super.print();
        console.log(
            `${this.firstName} ${this.lastName} - ${this.designation}`
        );
    }
}
class Developer extends Employee {
    constructor(
        firstName: string,
        lastName: string,
        designation: string
    ) {
        //invoke super
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }

    public print(): void {
        super.print();
        console.log(
            `${this.firstName} ${this.lastName} - ${this.designation}`
        );
    }
}

//Parent class is pointing to the different child classes and attribute the names within the same parameters
let employees: Employee[] = new Array(
    new Manager('James', 'Bond', 'Manager'),
    new Lead('Peter', 'Kramm', 'Lead'),
    new Developer('Greg', 'Soms', 'Developer')
);

for (var employee of employees) {
    employee.print();
}
