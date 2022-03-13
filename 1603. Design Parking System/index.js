/**
 * @author maneeshavenigalla
 * Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 var ParkingSystem = function (big, medium, small) {
    this.system = {
        '1': big,
        '2': medium,
        '3': small,
    }
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    if (this.system[`${carType}`] < 1) {
        return false;
    } else {
        this.system[`${carType}`] -= 1;
        return true;
    }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

module.exports = ParkingSystem;