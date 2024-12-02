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
    let sum = 0;
    leftList.forEach(lNum => {
        const occ = rightList.reduce((count, rNum) => {
            if(rNum === lNum) count++;
            return count
        }, 0);
        sum = sum + (lNum * occ)
    })
    console.log(sum);
});