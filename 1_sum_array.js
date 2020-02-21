// Given var arr = [6,3,5,1,2,4], print each value and the sum so far
// Predicted output: Num 6, Sum 6, Num 3, Sum 9, Num 5, Sum 14, Num 1, Sum 15, Num 2, Sum 17, Num 4, Sum 21
// When you have solved this, create new values for your array and ensure it still works as expected.

// YOUR CODE HERE
function sum(arr){
    var sum=0;
    for(var i =0; i<arr.length; i++)
    {
        sum+=arr[i];
        console.log("Num "+arr[i]+", Sum "+sum );
    }
    console.log("");

}
//given problem
var arr =[6,3,5,1,2,4];
sum(arr);
//edge cases
//posiitve values
var arrx = [7,7,7];
sum(arrx);
//negative values
var arry = [-1,-2,0];
sum(arry);
//undefined in the begining
var arrz=[undefined,11,2];
sum(arrz);
//null value in between
var arra=[1,3,null,4];
sum(arra);
//array that has undefined value in between
var arrb=[1,3,undefined,13,14];
sum(arrb);
/* array that null value in the begining*/ 
var arrc=[null,-3,-4,0,2];
sum(arrc);
/* empty array*/ 
var arrd=[];
sum(arrd);
//all null values
var arre=[null,null,null];
sum(arre);
//all values are undefined
var arrf =[undefined,undefined,undefined];
sum(arrf);
/*
 
smaliakkal-a01:array_algos smaliakkal$ node 1_sum_array.js 
Num 6, Sum 6
Num 3, Sum 9
Num 5, Sum 14
Num 1, Sum 15
Num 2, Sum 17
Num 4, Sum 21

Num 7, Sum 7
Num 7, Sum 14
Num 7, Sum 21

Num -1, Sum -1
Num -2, Sum -3
Num 0, Sum -3

Num undefined, Sum NaN
Num 11, Sum NaN
Num 2, Sum NaN

Num 1, Sum 1
Num 3, Sum 4
Num null, Sum 4
Num 4, Sum 8

Num 1, Sum 1
Num 3, Sum 4
Num undefined, Sum NaN
Num 13, Sum NaN
Num 14, Sum NaN

Num null, Sum 0
Num -3, Sum -3
Num -4, Sum -7
Num 0, Sum -7
Num 2, Sum -5


Num null, Sum 0
Num null, Sum 0
Num null, Sum 0

Num undefined, Sum NaN
Num undefined, Sum NaN
Num undefined, Sum NaN

smaliakkal-a01:array_algos smaliakkal$ 
 */



