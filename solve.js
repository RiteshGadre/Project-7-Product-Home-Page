let arr= [1,2,5,3,4,6];
let large= arr[0];
let second_lage= large;
for(let i=1; i<arr.length; i++){
    if(arr[i]>large){
        second_lage= large;
        large= arr[i];
    }
    if(arr[i]!=large && arr[i]>second_lage) second_lage= arr[i];
    console.log(arr[i]+" "+ large + " " + second_lage);
}
console.log(second_lage);