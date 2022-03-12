/**
 * @author maneeshavenigalla
 * An underground railway system is keeping track of customer travel times between different
 * stations. They are using this data to calculate the average time it takes to travel from
 * one station to another. Implement the UndergroundSystem class:
 */
 class UndergroundSystem {
    constructor() {
        this.trips = {};
        this.routes = new Map();
    }

    /** 
     * A customer with a card ID equal to id, checks in at the station stationName at
     * time t. customer can only be checked into one place at a time.
     * @param {number} id
     * @param {number} stationName
     * @param {number} t
     * @return {void}
     */
    checkIn(id, stationName, t) {
        this.trips[id] = {stationName, t}; 
    };

    /** 
     * A customer with a card ID equal to id, checks out from the station stationName at time t.
     * @param {number} id
     * @param {number} stationName
     * @param {number} t
     * @return {void}
     */
    checkOut(id, stationName, t) {
        const startStation = this.trips[id];
        let station = `${startStation.stationName}=>${stationName}`;
        
        if(this.routes.has(station)) {
            this.routes.get(station).push(t - startStation.t);
        } else {
            this.routes.set(station, [t - startStation.t]);
        }    
    };

    /** 
     * Returns the average time it takes to travel from startStation to endStation. The average time is
     * computed from all the previous traveling times from startStation to endStation that happened directly,
     * meaning a check in at startStation followed by a check out from endStation. The time it takes to travel from
     * startStation to endStation may be different from the time it takes to travel from endStation to startStation. 
     * There will be at least one customer that has traveled from startStation to endStation before getAverageTime is called.
     * @param {number} startStation
     * @param {number} endStation
     * @return {number}
     */
    getAverageTime(startStation, endStation) {
        let station = this.routes.get(`${startStation}=>${endStation}`);
    
        return station.reduce((p, c) => (p + c),0)/station.length;
    };
};


module.exports = UndergroundSystem;