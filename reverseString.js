function reverseString(s) {
    try {
        let reverseStr = s.split('').reverse().join('');
        console.log(reverseStr);
    } catch {
        console.log(`s.split is not a function`);
        console.log(s);
    } 
}

reverseString("1234");
reverseString(Number(1234));