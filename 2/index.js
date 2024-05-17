const input = document.getElementById("input-box");

// Lets user press enter to check word
document.getElementById("input-box").addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        check();
    }
}
)

/**
 * Reverse the letter of the word
 */
function reverseString(str) {
    return str.split("").reverse().join("")
}

/**
 * Check the input word to the reversed word and alert user of outcome
 */
function check() {
    const value = input.value;
    const reverse = reverseString(value)

    if (value === reverse) {
        alert("P A L I N D R O M E")
    } else {
        alert("Sorry, NOT a palindrome!")
    }

    input.value = ""
}

