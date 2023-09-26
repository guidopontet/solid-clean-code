(() => {
  // An enhancement, is not using positional arguments, and set objects.

  type Gender = 'M' | 'F';

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }

  class User extends Person {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role, name, gender, birthdate }: UserProps) {
      super({ name, gender, birthdate });
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenedFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public lastOpenedFolder: string;
    public workingDirectory: string;

    constructor({
      workingDirectory,
      lastOpenedFolder,
      email,
      role,
      name,
      gender,
      birthdate,
    }: UserSettingsProps) {
      super({email, role, name, gender, birthdate});
      this.workingDirectory = workingDirectory;
      this.lastOpenedFolder = lastOpenedFolder;
    }
  }

  const newPerson = new Person({
    name: 'John',
    gender: 'M',
    birthdate: new Date('1999-01-01'),
  });
  console.log(newPerson);

  const userSettings = new UserSettings({
    workingDirectory: '/home/john/',
    lastOpenedFolder: '/home',
    email: 'john@gmail.com',
    role: 'admin',
    name: 'John',
    gender: 'M',
    birthdate: new Date('1999-01-01'),
  });
  console.log(userSettings)

})();
