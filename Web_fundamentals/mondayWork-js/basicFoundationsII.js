//1.
function biggieSize(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big"
        }
    }
    console.log(arr)
}
biggieSize([1,3,-5,5])
//2.
function lowHigh(arr){
    var min = Math.min(...arr);
    var max = Math.max(...arr);
    var newArr = [];
    newArr.push(min,max)
    console.log(min);
    return max;
}
lowHigh([1,5,0,9])
//3.
function printReturn(arr){
    console.log(arr[arr.length-2]);
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !==0){
            return arr[i];
        }
    }
}
printReturn ([2,8,6,3,5,9])
//4.
function doubleVision(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i]*2)
    }
    console.log(newArr)
}
doubleVision([1,2,3])
//5.
function countPos(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            count++
        }
        
    }
    arr[arr.length - 1] = count;
    return arr
}
console.log(countPos([-1,1,1,1]))
//6.
function evenOdds(arr){
    //HAVE A VAR TO COUNT ODDS AND TO COUNT EVENS
    var odd = 0;
    var even = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1 ){
            odd++
            even = 0
        }
        else{
            even++
            odd = 0
        }
        if(odd == 3){
            console.log("That's odd!")
            odd = 0
        }
        else if(even == 3){
            console.log("Even more so!")
            even = 0
        }
    }
}
evenOdds([2,2,1,1,1,4])
//7.******
function incrementSeconds(arr){
    for (var i=0;i<arr.length;i++){
    if(i % 2 !==0){
        arr[i] = arr[i] + 1; 
    }
    console.log(arr[i]);
    }
    return arr;
}
var x = [0,4,2,6,-1,-3];
console.log(incrementSeconds(x));


//8.
function prevLengths(arr){
    for(var i = arr.length - 1; i > 0; i--){
        arr[i] = arr[i-1].length
    }
    console.log(arr)
}
prevLengths(["hello", "dojo", "awesome"])
//9.
function addSeven(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i]+7)
    }
    console.log(newArr)
}
addSeven([1,2,3])
//10.
function reverse(arr){
    for (var i=0;i<arr.length/2;i++){
    var temp = arr[i];
    arr[i] =  arr[arr.length-1 - i]; 
    arr[arr.length-1 - i] = temp;
    }
    return arr;
}

var x = [2,4,6,1,3];
console.log(reverse(x));

//11.
function outNeg(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
        newArr.push(arr[i]*-1)
        }
        else{
        newArr.push(arr[i])
        }
        
    }
    console.log(newArr)
    
}
outNeg([1,-3,5])
//12.
function alwHungry(arr){
    var hungry = true;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]=="food"){
            console.log("YUMMY")
            hungry = false
        }
    }
    if(hungry){
        console.log("I'M HUNGRY!!")
    }

}
alwHungry([1, 2, 3, 4, 5, 6, 7])
alwHungry([1, 2, 3, "food", 5, 6, 7])
//13.
function swapCenter(array){
    for(var i = 0; i < Math.floor(array.length/2); i++){
        if(i % 2 === 0){
            var temp = array[i]
            array[i] = array[array.length - 1 -i]
            array[array.length - 1 -i] = temp
        }
    }
    console.log(array)
}
swapCenter(["pizza", 42, "Ada", 2, true])
swapCenter([1,2,3,4,5,6])
//14.
function scaleArray (arr, num){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i] * num)
    }
    console.log(newArr)
}
scaleArray ([1,2,3], 3)