/**
 * @author maneeshavenigalla
 * You have a browser of one tab where you start on the homepage and you can visit another url,
 * get back in the history number of steps or move forward in the history number of steps. Implement the 
 * BrowserHistory class: BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
 * @param {string} homepage
 */
 class BrowserHistory {
    constructor(homepage) {
        this.backArr = [homepage];
        this.forwardArr = [];
    }

    /** 
     * void visit(string url) Visits url from the current page. It clears up all the forward history.
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        this.backArr.push(url);
        this.forwardArr = [];
    };

    /** 
     * string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x,
     * you will return only x steps. Return the current url after moving back in history at most steps.
     * @param {number} steps
     * @return {string}
     */
    back(steps) {

        while(steps && this.backArr.length > 1) {
            this.forwardArr.push(this.backArr.pop());
            steps--;
        }

        return this.backArr[this.backArr.length - 1];
    };

    /** 
     * string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x,
     * you will forward only x steps. Return the current url after forwarding in history at most steps.
     * @param {number} steps
     * @return {number}
     */
    forward(steps) {
        while(steps && this.forwardArr.length) {
            this.backArr.push(this.forwardArr.pop());
            steps--;
        }

        return this.backArr[this.backArr.length - 1];
    };
};


module.exports = BrowserHistory;