function Person(initialAge){
    // Add some more code to run some checks on initialAge
    if (initialAge >= 0) {
        this.age = initialAge;
    } else {
        process.stdout.write("Age is not valid, setting age to 0.\n")
        this.age = 0;
    }
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
    if(this.age < 13){
            console.log("You are young.");
        }else if(this.age < 18){
            console.log("You are a teenager.");
        }else{
            console.log("You are old.");
        }
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
           this.age++;
   };
}
