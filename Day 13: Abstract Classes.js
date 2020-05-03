

// Declare your class here.
class MyBook extends Book{
    
    constructor(title, author,price){
        super(title,author,price);
        this.title = title;
        this.author = author;
        this.price = price;
    }
    /**   
    *   Method Name: display
    *   
    *   Print the title, author, and price in the specified format.
    **/
    // Write your method here
    display(){
        console.log('Title: '+this.title);
        console.log('Author: '+this.author);
        console.log('Price: '+this.price);
    }
}   
    
// End class

