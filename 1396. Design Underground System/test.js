const UndergroundSystem = require('./index');

test('should pass the test cases', () => {
    let system1 = new UndergroundSystem();
    system1.checkIn(45,"Leyton",3);
    system1.checkIn(32,"Paradise",8);
    system1.checkIn(27,"Leyton",10);
    system1.checkOut(45,"Waterloo",15);
    system1.checkOut(27,"Waterloo",20);
    system1.checkOut(32,"Cambridge",22);
    expect(system1.getAverageTime("Paradise","Cambridge")).toBe(14.0);
    expect(system1.getAverageTime("Leyton","Waterloo")).toBe(11.0);
});