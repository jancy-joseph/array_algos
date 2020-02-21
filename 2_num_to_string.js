// Given var arr = [10,3,6,9,4,13]
// change all numbers 10 or higher to "Big" and change numbers 5 or smaller to "Small" and print the result 
// Predicted output: ["Big","Small",6,9,"Small","Big"]
// When you have solved this, create new values for your array and ensure it still works as expected.

// YOUR CODE HERE
function numberToString(array)
{
    for(var i =0; i <array.length; i++)
    {
        if(array[i]>=10)
        {
            array[i]="Big";
        }
        if(array[i]<=5)
        {
            array[i]="small";
        }
        console.log(array[i]);
    }
    console.log("");
}
var arr=[10,3,6,9,4,13];
numberToString(arr);

//edge cases
//negative nos
var arra =[-1,-2,-3];
numberToString(arra);
//undefined values
var arrb=[33,undefined,-1];
numberToString(arrb);
//empty array
var arrc=[];
numberToString(arrc);
//null values
var arrd=[null,null,3,5,10,6];
numberToString(arrd);
console.log(null);

