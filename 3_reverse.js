// Given var arr = [8,6,7,5,3,0,9] reverse the array and print the result
// Predicted output: [9,0,3,5,7,6,8]
// When you have solved this, create new values for your array and ensure it still works as expected.

// YOUR CODE HERE   
function reverse(array)
{
    var j =0;
    for(var i = array.length-1;i !== j; i--){
       var temp = array[j];
       array[j]= array[i];
       array[i]= temp;
       j++;
    }
    console.log(array);

}
var arr = [8,6,7,5,3,0,9];
reverse(arr);