const ParkingSystem = require('./index');

test('should pass the test cases', () => {
    let parking1 = new ParkingSystem(1,1,0);
    expect(parking1.addCar(1)).toBe(true);
    expect(parking1.addCar(2)).toBe(true);
    expect(parking1.addCar(3)).toBe(false);
    expect(parking1.addCar(1)).toBe(false);
});