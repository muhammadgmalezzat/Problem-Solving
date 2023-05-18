/**
 * @param {string} s
 * @return {boolean}
 */
const openings = ["(", "[", "{"];
const closing = [")", "]", "}"];

var isValid = function (s) {
    let stack = []
    for (var i = 0; i < s.length; i++) {
        const currentChar = s[i];

        if (openings.includes(s[i])) {
            stack.push(s[i]);

        } else if (closing.includes(s[i])) {
            const lastElementInStack = stack.pop();
            if (openings.indexOf(lastElementInStack) !== closing.indexOf(currentChar)) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    } else {
        return true;
    }
};