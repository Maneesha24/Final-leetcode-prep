/**
 * @author maneeshavenigalla
 * You own a Goal Parser that can interpret a string command. The command consists of an alphabet of
 * "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as
 * the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the
 * original order. Given the string command, return the Goal Parser's interpretation of command.
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
    
    let result = '';

    let i = 0;

    while(i < command.length) {
        if(command[i] == '(' && command[i + 1] == ')') {
            result += 'o';
            i = i + 2;
        } else if(command.slice(i, i + 4) == '(al)') {
            result += 'al';
            i = i + 4;
        } else {
            result += command[i];
            i++;
        }
    }

    return result;
};

module.exports = interpret;