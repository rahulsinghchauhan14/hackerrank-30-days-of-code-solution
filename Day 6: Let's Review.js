function processData(input) {
    //Enter your code here
    let message = input.split('\n');
    let n = parseInt(message[0]);
    
    for(let i=0; i<n; i++){
        let eveni='';
        let oddi ='';
        let str = message[i+1];
        let strArr = str.split('');

        for(let j=0; j<str.length; j++){
            if( j%2==0 ){
                eveni += strArr[j];
            }else{
                oddi += strArr[j];
            }
        }

        console.log(eveni+" "+oddi);

    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
