function main() {
    let x = parseInt(readLine(), 10);
    
    let count =0;
    while(x!=0){
        x = (x & (x<<1));
        count++;
    }
    console.log(count);
}
