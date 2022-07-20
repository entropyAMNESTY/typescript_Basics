// Enums -- Collection of constant values -- indexNumbers
// Enumeration or Enum in C is a special kind of data type defined by the user. It consists of constant integrals or integers that are given names by a user.

enum Gender {
    Male,
    Female,
}

console.log(Gender.Male);
console.log(Gender.Female);

console.log(Gender[0]);
console.log(Gender[1]);

// --> 0,1
// --> Male, Female

// Attribute custom indexes
enum Weekends {
    Saturday = 6,
    Sunday = 7,
}

console.log(Weekends[6]);
console.log(Weekends[7]);
