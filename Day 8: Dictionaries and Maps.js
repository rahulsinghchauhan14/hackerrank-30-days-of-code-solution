function processData(input) {
    //Enter your code here
    let n = parseInt(input); // for get no 3
    let arr = input.toString().split("\n"); // convert given string into an array
    let map = new Map(); // create an object
    let keys = [];
    let check='';
    for (i=1; i<arr.length; i++){
        check = arr[i].split(" "); 
        if(check[1] != undefined){
            map.set(check[0],check[1]);
        }else{
            keys.push(check[0]);
        }
    
    }
 
    for(i=0; i<keys.length; i++){
        //console.log(map.get(keys[i]));
       console.log(map.get(keys[i])==undefined?'Not found':`${keys[i]}=${map.get(keys[i])}`);
    }
} 
