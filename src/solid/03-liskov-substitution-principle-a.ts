import { Tesla, Audi, Toyota, Honda, Car } from './03-liskov-substitution-principle-b';

(() => {
  // Liskov Substitution Principle, because we can use the parent class to create the array.
  const printCarSeats = (cars: Car[]) => {
    // ==========
    // Open/Closed Principle, because we don't need to change this function if we add a
    // new car class.
    // ==========
    cars.forEach((car) => {
      console.log(car.constructor.name, car.getNumberOfSeats());
    });


    // ==========
    // Bad code, because we need to change this function if we add a new car class.
    // ==========
    // for (const car of cars) {
    //   if (car instanceof Tesla) {
    //     console.log('Tesla', car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Audi) {
    //     console.log('Audi', car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Toyota) {
    //     console.log('Toyota', car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Honda) {
    //     console.log('Honda', car.getNumberOfSeats());
    //     continue;
    //   }
    // }
  };

  const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5)];

  printCarSeats(cars);
})();
