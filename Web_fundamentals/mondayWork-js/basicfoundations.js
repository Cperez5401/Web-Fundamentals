//1.
var arr = [];
function numbers(){
    for(var i = 1; i < 256; i++){
        arr.push(i)
    }
}
numbers();
console.log(arr)
//2.
function sumEvenNum(){
    //NEED TO KEEP TRACK OF SUM
    var sum = 0;
    //LOOP 1 TO 1000 AND GRAB ALL EVEN NUMBERS
    for(var i = 0; i < 1001; i += 2){
        sum = sum + i
    }
    console.log("The sum is: ", sum)

}
sumEvenNum()
//3.
function sumOddNum(){
    //VARIABLE TO TRACK SUM
    var sum = 0;
    //LOOP 1 TO 5000 AND GRAB ALL ODD NUMBERS
    for(var i = 1; i < 5001; i += 2){
        sum = sum + i;
    }
    console.log("The sum is: ", sum)
}
sumOddNum()
//4.
function arraySum(arr){
    //varaible to track sum
    var sum = 0;
    //sum of all values within an array
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(arraySum([1,4,8]))
//5.
function findMax(arr){
    var max = arr[0];
    for(var i=1;i<arr.length;i++){
        if (max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([1,4,2,7,8,2]))
//6.
function findAverage(arr){
    var sum =0;
    var avg;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
        avg = sum/arr.length;
        

    }
    return avg;
}
console.log(findAverage([1, 3, 5, 7, 4]))
//7.
function arrayOdd(){
    var newArr = [];
    for(var i = 1; i < 50; i+=2){
        newArr.push(i)
    }
    return newArr;
}
console.log(arrayOdd)
//8.
function greaterThanY(arr, y){
    //iterate thriugh the array
    var count = 0;
    //check each value in arry to see if it is greater than y and tally that
    for(var i = 0; i < arr.length; i++){
        if(arr[i] >  y){
            count++
        }
    }
    console.log(count)
}
greaterThanY([1, 3, 5, 7], 3)
//9.
function squares(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i]*arr[i])
    }
    console.log(newArr)
}
squares([1,5,10,-2])
//10.
function negatives(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0
        }
    }
    console.log(arr)
}
negatives([-1,-5,-10,-2])
//11.
function maxMinAvg(arr){
    var min = Math.min(...arr);
    var max = Math.max(...arr);
    var sum =0;
    var avg;
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
        avg = sum/arr.length;
        
    }
    newArr.push(max, min, avg)
    console.log(newArr)
}
maxMinAvg([1,5,10,-2])
//12.
function swapValues(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    console.log(arr)
}
swapValues([1,5,10,-2])
// 13
function numToString(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "dojo"
        }
    }
    console.log(arr)
}
numToString([1,-5,10,-2])

