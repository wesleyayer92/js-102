function printBox(height, width) {
    let row = '';
    let emptySpace = '';

    // build row to width
    for (let i = 0; i < width; i++) {
        row += '*';
    }

    // print top row
    console.log(row);

    // build inner empty space
    for (let j = 0; j < width - 2; j++) {
        emptySpace += ' ';
    }

    // print hollow rows to height
    for (let i = 0; i < height - 2; i++) {
        console.log(`*${emptySpace}*`);
    }

    // print bottom row
    console.log(row);
}

printBox(4, 6);