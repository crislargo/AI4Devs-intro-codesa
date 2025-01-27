function reverseString() {
    const input = document.getElementById('inputString').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('result').textContent = `Reversed string: ${reversed}`;
}
