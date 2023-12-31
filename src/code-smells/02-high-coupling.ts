(() => {
  // Not single responsibility principle being applied
  type Gender = 'M' | 'F';

  // High coupling

  class Person {
    constructor(
      // If i change the order of the parameters, or change parameters, the code will
      // break. Domino effect.
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      name: string,
      gender: Gender,
      birthdate: Date
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
      public lastFolderOpen: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, new Date(), name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    '/urs/home',
    '/development',
    'fernando@google.com',
    'F',
    'Fernando',
    'M',
    new Date('1985-10-21')
  );

  console.log({ userSettings, credentials: userSettings.checkCredentials() });
})();
