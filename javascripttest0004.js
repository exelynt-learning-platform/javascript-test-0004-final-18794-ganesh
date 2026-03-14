function printPattern(n) {
    let size = 2 * n - 1;

    for (let i = 0; i < size; i++) {
        let row = "";

        for (let j = 0; j < size; j++) {

            let top = i;
            let left = j;
            let right = size - 1 - j;
            let bottom = size - 1 - i;

            let min = Math.min(top, left, right, bottom);

            row += (n - min) + " ";
        }

        console.log(row);
    }
}

printPattern(4);
