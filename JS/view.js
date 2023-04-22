let arr = Object.keys(localStorage);
const searchArea = document.getElementById("contain");

function printResult(arrf, index) {
    if (arr.length == 0) {
        searchArea.innerHTML = '<h5>No Students Found</h5>';
    } else {

        for (let i = 0, j = 0; i < arr.length; ++i, ++j) {
            let values = JSON.parse(localStorage.getItem(arr[i]));
            console.log(values)
            if (j % 2 == 0) {
                let row = '<div class="result">' +
                    '<div class="cell">' + arr[i] + '</div>' +
                    '<div class="cell">' + values[0] + '</div>' +
                    '<div class="cell">' + values[2] + '</div>' +
                    '<div class="cell">' + values[3] + '</div>' +
                    '<div class="cell">' + values[6] + '</div>' +
                    '<div class="cell">' + values[1] + '</div>' +
                    '<div class="cell">' + values[8] + '</div>' +
                    '<div class="cell">' + values[5] + '</div>'
                searchArea.innerHTML += row;
            } else {
                let row = '<div class="result gray">' +
                    '<div class="cell">' + arr[i] + '</div>' +
                    '<div class="cell">' + values[0] + '</div>' +
                    '<div class="cell">' + values[2] + '</div>' +
                    '<div class="cell">' + values[3] + '</div>' +
                    '<div class="cell">' + values[6] + '</div>' +
                    '<div class="cell">' + values[1] + '</div>' +
                    '<div class="cell">' + values[8] + '</div>' +
                    '<div class="cell">' + values[5] + '</div>'
                searchArea.innerHTML += row;
            }
        }
    }
}
printResult();