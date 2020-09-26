function largestSubarraySum(array){
 let currentMaxSum = 0;
 let maxSum = 0;
 for(let i = 0; i < array.length; i++){
   for(let j = i; j < array.length; j++){
     if(currentMaxSum < currentMaxSum+=array[j]){
      currentMaxSum = Math.max(0, currentMaxSum+=array[j])
      maxSum = Math.max(maxSum, currentMaxSum)
   }
 }
 return maxSum
}