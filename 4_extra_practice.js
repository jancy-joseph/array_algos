// Many algorithms have multiple valid solutions.
// If you have time, try coming up with a different approach/solution for reversing an array

// YOUR CODE HERE

/*
first solution: 
 find Array A's length and make another array B of same size.
 go through all the elements in array A from the begining but assign to array B's end .
 Incerement array A's index while decrementing Array B's index.
 running time :0(n);
 space complexity:0(n);

 second solution:
 create a variable j (j==0)to keep track of the elements from the front of the array.
 go through Array from the last element keep another index i(i= array.length -1) to keep track of back of the array
 create another temp variable to temporarily hold values.
 got through the array and use temp to swap the vlaues in i and j location.
 Increment j index and decrement i index till i==j.
running time:O(n/2)
space compelxity:O(1)//may be need to find out...as it needs extra variable.




*/
