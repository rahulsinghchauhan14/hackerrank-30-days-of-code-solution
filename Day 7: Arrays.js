
function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    let str = '';
    for(let i=1; i <= n; i++){
        str = str + arr[n-i]+' ';
    }
    console.log(str);
}
