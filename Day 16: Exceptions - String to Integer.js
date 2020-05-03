function main() {
    const S = readLine();
    try{
         
    console.log(parseInt(S).toString().replace('NaN', 'Bad String'));
 
    }catch (err){
        console.log("Bad String");
    }
}
