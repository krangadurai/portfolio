let arr = [[3,[1], ['s', [2,[16,7],[3,[6]]],[1]] ],[1], 2,[3], 25 ];

let plainArrays = [];
async function plainArray(arr) {
    let n = arr.length;
    for (var i = 0; i < n; i++) {
        if (arr[i].constructor === Array) {
          await  plainArray(arr[i]);
        } else {
            plainArrays.push(arr[i]);
        }
    }

}

const print  = async () =>{
    await plainArray(arr);
    console.log(plainArrays,plainArrays.constructor )
}
print();




