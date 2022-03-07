const BrowserHistory = require('./index');

test('should pass the test cases', () => {
    let history1 = new BrowserHistory("leetcode.com");
    history1.visit("google.com");
    history1.visit("facebook.com");
    history1.visit("youtube.com");
    expect(history1.back(1)).toBe("facebook.com");
    expect(history1.back(1)).toBe("google.com");
    expect(history1.forward(1)).toBe("facebook.com");
    history1.visit("linkedin.com")
    expect(history1.forward(2)).toBe("linkedin.com");
    expect(history1.back(2)).toBe("google.com");
    expect(history1.back(7)).toBe("leetcode.com");
});