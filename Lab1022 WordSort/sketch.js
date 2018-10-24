
var txt;

function preload(){
  txt = loadStrings("words.txt");
}

function setup(){

  procedure bubbleSort( A : list of sortable items )
    n = length(A)
    repeat
        swapped = false
        for i = 1 to n-1 inclusive do
            /* if this pair is out of order */
            if A[i-1] > A[i] then
                /* swap them and remember something changed */
                swap( A[i-1], A[i] )
                swapped = true
            end if
        end for
    until not swapped
end procedure

}

function bubbleSort() {
  for(var i = nums.length - 1; i >= 1; i--){
    for(var j = 0; j < nums.length; j++)
  }


}


function swap(nums, a, b) {
  var temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp

}
