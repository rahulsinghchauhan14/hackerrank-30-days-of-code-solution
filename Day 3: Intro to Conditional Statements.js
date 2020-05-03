function main() {
    const N = parseInt(readLine(), 10);
    //If n is odd, print Weird
    if(N%2!=0){ console.log('Weird'); }
    //If n is even and in the inclusive range of 2 to 5, print Not Weird
    else if(N >= 2 && N <= 5){ console.log('Not Weird'); }
    //If n is even and in the inclusive range of 6 to 20, print Weird
    else if(N >= 6 && N <= 20){ console.log('Weird'); }
    //If n is even and greater than 20, print Not Weird
    else if(N >= 20){ console.log('Not Weird'); }
}
