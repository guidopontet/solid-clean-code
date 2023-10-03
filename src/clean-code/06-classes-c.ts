(() => {
  // Single Responsibility Principle
  // Composition over inheritance

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
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    lastOpenedFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public lastOpenedFolder: string;
    public workingDirectory: string;

    constructor({
      workingDirectory,
      lastOpenedFolder,
    }: UserSettingsProps) {
      this.lastOpenedFolder = lastOpenedFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  // Composition
  interface SettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenedFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings {
    public person: Person;
    public settings: Settings;
    public user: User;

    constructor({
      name,
      gender,
      birthdate,
      email,
      role,
      workingDirectory,
      lastOpenedFolder,
    }: SettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastOpenedFolder });
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
