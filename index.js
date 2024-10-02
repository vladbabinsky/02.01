// ================================== TASK 1 ================================== //
class Vehicle {
    constructor(brand, type, productionYear, avgSpeed) {
        this.brand = brand;
        this.type = type;
        this.productionYear = productionYear;
        this.avgSpeed = avgSpeed;
    }

    showDetails() {
        console.log(`Brand: ${this.brand}, Type: ${this.type}, Year: ${this.productionYear}, Speed: ${this.avgSpeed} km/h`);
    }

    computeTravelDuration(distance) {
        const driveTime = distance / this.avgSpeed;
        const restStops = Math.floor(driveTime / 4);
        return driveTime + restStops;
    }
}

const myVehicle = new Vehicle('Audi', 'A4', 2022, 130);
myVehicle.showDetails();
const journeyDistance = 600;
const totalDuration = myVehicle.computeTravelDuration(journeyDistance);
console.log(`Travel time for ${journeyDistance} km: ${totalDuration.toFixed(2)} hours`);
