// Segregation interface principle

interface Bird2 {
  eat(): void;
}

// Create a new interface for flying birds
interface FlyingBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}

interface SwimmingBird {
  swim(): void;
}

class Tucan2 implements Bird2, FlyingBird {
  fly() { console.log('Tucan is flying'); }
  eat() { console.log('Tucan is eating'); }
}

class Hummingbird2 implements Bird2, FlyingBird {
  fly() { console.log('Hummingbird is flying'); }
  eat() { console.log('Hummingbird is eating'); }
}

class Osti2ch2 implements Bird2, RunningBird {
  eat() { console.log('Ostich is eating'); }
  run() { console.log('Ostich is running'); }
}

class Penguin2 implements Bird2, SwimmingBird {
  eat() { console.log('Penguin is eating'); }
  swim() { console.log('Penguin is running'); }
}
