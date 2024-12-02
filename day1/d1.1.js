const fs =  require('fs')

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    const lines = data.split('\n');
    const leftList = []
    const rightList = []
    lines.forEach(line => {
        const numbers = line.split(/\s+/);
        leftList.push(Number(numbers[0]));
        rightList.push(Number(numbers[1]));
    })
    leftList.sort();
    rightList.sort();
    let sum = 0;
    for(let i = 0; i < leftList.length; i++){
        sum = sum + Math.abs(leftList[i] - rightList[i]);
    }
    console.log(sum);
});