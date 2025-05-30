for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// This code will not work as intended because i is not incremented correctly.
// The increment should be i += 1 to ensure all numbers are checked.
// Corrected code:
