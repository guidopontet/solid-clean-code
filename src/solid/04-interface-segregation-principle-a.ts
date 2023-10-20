// Violation of Segregation interface principle
// Clients should not be forced to depend upon interfaces that they do not use.

interface Bird {
  eat(): void;
  fly(): void;
  run(): void;
  swim(): void; // Not all birds can swim
}

class Tucan implements Bird {
  fly() { console.log('Tucan is flying'); }
  eat() { console.log('Tucan is eating'); }
  run() { console.log('Tucan is running'); }
  swim() { console.log('Tucan is swimming'); }
}

class Hummingbird implements Bird {
  fly() { console.log('Hummingbird is flying'); }
  eat() { console.log('Hummingbird is eating'); }
  run() { console.log('Hummingbird is running'); }
  swim() { console.log('Tucan is swimming'); }
}

class Ostich implements Bird {
  fly() { console.log('Ostich is flying'); }
  eat() { console.log('Ostich is eating'); }
  run() { console.log('Ostich is running'); }
  swim() { console.log('Tucan is swimming'); }
}

class Penguin implements Bird {
  fly() { console.log('Penguin is flying'); }
  eat() { console.log('Penguin is eating'); }
  run() { console.log('Penguin is running'); }
  swim() { console.log('Penguin is running'); }
}
