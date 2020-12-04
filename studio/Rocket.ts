import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket implements Payload {
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];
  massKg: number;

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  sumMass( items: Payload[] ): number {
    let total: number = 0;
  
    items.forEach(item => total += item.massKg);

    return total;

  }

  currentMassKg(): number {
    let astronautsMass: number = this.sumMass(this.astronauts);
    let cargoMass: number = this.sumMass(this.cargoItems);
    let totalMass: number = astronautsMass + cargoMass;

    return totalMass;

  }

  canAdd(item: Payload): boolean {
    return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
  }

  addCargo(cargo: Cargo): boolean {
    if (this.canAdd(cargo)) {
      this.cargoItems.push(cargo);
      return true;
    }

    return false;

  }

  addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
      return true;
    }
    return false;

  }

}