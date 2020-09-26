function largestSubarraySum(array){
 if(array.every?((item) item >=0)){
   return array.reduce((sum, num) => sum + num, 0)
 }
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