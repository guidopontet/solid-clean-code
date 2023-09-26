(() => {
  // Not applying single responsibility principle, inheritance is confusing when have
  // 2 or more levels. Also, User and UserSettings are difficult to instance, and
  // have to be called with parameters of ancestor classes.

  type Gender = 'M' | 'F';

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date,
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,

      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenedFolder: string,

      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const newPerson = new Person('John', 'M', new Date('1999-01-01'));
  console.log(newPerson);

  const userSettings = new UserSettings(
    '/home/john/',
    '/home',
    'john@gmail.com',
    'admin',
    'John',
    'M',
    new Date('1999-01-01')
  );
  console.log(userSettings)

})();
