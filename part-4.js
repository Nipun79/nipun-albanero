//find peak element
function findPeak(arr, n)
{

  if (n == 1) return 0;
  if (arr[0] >= arr[1]) return 0;
  if (arr[n - 1] >= arr[n - 2]) return n - 1;

 
  for (var i = 1; i < n - 1; i++) 
  {
  
 
    if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
  }
}


var arr = [1, 3, 20, 4, 1, 0];
var n = arr.length;
console.log(findPeak(arr, n));

//subarray sum
function subarray(arr,n,sum)
    {
        let curr = arr[0], start = 0, i;
  
        for (i = 1; i <= n; i++) {
            
            while (curr > sum && start < i - 1) {
                curr = curr - arr[start];
                start++;
            }
  
           
            if (curr == sum) {
                
                console.log(
                     start+(i-1)
                    );
                return 1;
            }
  
           
            if (i < n)
                curr = curr + arr[i];
        }
  
      
        return -1;
    }
     
    let arr=[15, 2,  23,7 ];
    let n = arr.length;
    let sum = 23;
    subarray(arr, n, sum);
    //find repeating elements 

    function printRepeating(arr,n)
    {
    
        for (let i = 0; i < n; i++)
        {
            let index = arr[i] % n;
            arr[index] += n;
        }
 
        
        for (let i = 0; i < n; i++)
        {
            if ((arr[i] / n) >= 2)
                console.log(i + " ");
        }
    }
    

    let arr=[1, 6, 3, 1, 3, 6, 6];
    let arr_size = arr.length;
    repeating(arr, arr_size);
    