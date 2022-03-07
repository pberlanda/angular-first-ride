export class Car {
  engineName: string;
  gears: number;
  private speed: number;

  constructor(speed: number) {
    this.speed = speed || 0; // ||0 significa che se il valore non va bene usa il valore 0
  }

  accelerate(): void {
    this.speed++;
  }

  throttle(): void {
    this.speed--;
  }

  getSpeed(): void {
    console.log(this.speed);
  }

  static numberOfWheels(): number {
    return 4;
  }
}

// crea unoggetto da un a classe
let car = new Car(5);
car.accelerate;
car.getSpeed;

console.log('numero ruote ' + Car.numberOfWheels);
