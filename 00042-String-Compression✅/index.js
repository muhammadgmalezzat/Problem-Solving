var compress = function(chars) {
    let write = 0;
    let read = 0;

    while (read < chars.length) {
        let currentChar = chars[read];
        let count = 0;

        // Count occurrences of the current character
        while (read < chars.length && chars[read] === currentChar) {
            read++;
            count++;
        }

        // Write the character
        chars[write] = currentChar;
        write++;

        // Write the count if > 1
        if (count > 1) {
            const countStr = count.toString();
            for (let c of countStr) {
                chars[write] = c;
                write++;
            }
        }
    }

    return write;
};
