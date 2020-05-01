#Day 14: Scope

<?php
    class Difference{
    private $elements=array();
    public $maximumDifference;
 
// Write your code here
    function __construct($array){
        if(is_array($array)){ // just validation check, not necessary 
            $this->elements = $array;
        }
        
    }

    function ComputeDifference(){
      $maxValue =0; // initialize a variable with 0 value
        $count = count($this->elements); //  check the array length
        for($i=0; $i<$count-1; $i++){
            for($j=$i+1; $j< $count; $j++){
                $minus = abs($this->elements[$i] - $this->elements[$j]);
                if($minus > $maxValue){
                    $maxValue = $minus;
                }
            }
        }
       $this->maximumDifference = $maxValue;
    }
} //End of Difference class  
     

$N=intval(fgets(STDIN));
$a =array_map('intval', explode(' ', fgets(STDIN)));
$d=new Difference($a);
$d->ComputeDifference();
print ($d->maximumDifference);
?>
