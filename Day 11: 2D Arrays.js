function main() {
    let arr = Array(6);
    let result=[];
    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let sum=0;
    for(let r=0; r<=3; r++){
        for(let c=0; c<=3; c++){
            sum = arr[r][c] + arr[r][c+1] + arr[r][c+2] + arr[r+1][c+1] + arr[r+2][c] + arr[r+2][c+1] + arr[r+2][c+2]; 
            result.push(sum);
        }
    } 
    console.log(Math.max.apply(Math,result));
}
