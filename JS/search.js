const search2 = document.getElementById('myInput');
const searchArea = document.getElementById("area");
let arr = Object.keys(localStorage);
let arrf = [];
let index = [];


function printResult(arrf, index) {
    if (arrf.length == 0) {
        searchArea.innerHTML = '<h5>No Results Found</h5>';
    } else {
        searchArea.innerHTML = ' <h5>search results</h5>' + '<hr>';
        for (let i = 0; i < arrf.length; ++i) {
            let values = JSON.parse(localStorage.getItem(arrf[i]));
            let row = '<div class="result">' +
                '<div class="name">' + arrf[i] + '</div>' +
                '<div class="btns">' +
                '<button class="btn" onclick="edit()" name=' + index[i] + '>Edit</button>' +
                '<button class=" btn del" onclick="Delete(' + index[i] + ')">' + '<i class="fa fa-trash">' + '</i>' + '</button>' +
                '</div>' +
                '</div>'
            searchArea.innerHTML += row;
        }
    }
}

function search() {
    arr = Object.keys(localStorage);
    arrf = [];
    index = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(search2.value) && search2.value != '' && !arrf.includes(search2.value)) {
            arrf.push(arr[i]);
            index.push(i)
        }
    }
    printResult(arrf, index);
};

function edit() {
    console.log("SD");
    window.location.replace("file:///home/kariem/Downloads/web/html/Home.html");
    // window.location.href = "file:///home/kariem/Downloads/web/html/Home.html";
}
function Delete(i) {
    localStorage.removeItem(arr[i])
    search();
}



