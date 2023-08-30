//! USING BUBBLE SORT ALGORITHM
// Bubble sort is one of the most straightforward sorting algorithms that involve repeatedly swapping adjacent elements for the correct order.

// Approach: We traverse the whole array checking whether the next element from the current index is greater or not. If it is greater than the current element we swap both of the elements. We keep on repeating this process until our array is sorted.

//! Algorithm:

// BubbleSort(arr)
//    for i->0 to arr.size():
//       if arr[i] > arr[i+1]
//          swap(arr[i], arr[i+1])
//       end if
//    end for
// return arr

const arrays = [4, 2, 5, 7, 9, 1, 8];

const sortArray = (arrays) => {
  for (let i = 0; i < arrays.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arrays.length - i - 1; j++) {
      //swapping the elements of arrays
      if (arrays[i] > arrays[j + 1]) {
        let temp = arrays[j];
        arrays[j] = arrays[j + 1];
        arrays[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arrays;
};
console.log("BEFORE SORTING :", arrays);
console.log("AFTER SORTING :", sortArray(arrays));

//! USING SELECTION SORT ALGORITHM
// The selection sort method sorts an array by repeatedly selecting the smallest element from the unsorted portion and inserting it at the beginning.  In a given array, the method maintains two subarrays.
// 1. Already sorted.
// 2. Not sorted subarray.

// Every time a selection sort is performed, the smallest element from the unsorted subarray is chosen and moved to the sorted subarray

//! Algorithm:

// selectionSort(arr):
//     for i <- 0 to arr.length - 1:
//         minIndex <- i
//         for j <- i+1 to arr.length:
//             if arr[minIndex] > arr[j]:
//                 minIndex <- j
//             end if
//         end for

//         swap(arr[minIndex], arr[i])
//     end for
// return arr

const sortingArray = (arrays) => {
  for (let i = 0; i < arrays.length - 1; i++) {
    // Finding the minimum element
    let minIndex = i;
    for (let j = i + 1; j < arrays.length; j++) {
      if (arrays[j] < arrays[minIndex]) minIndex = j;
    }

    // Swapping the minimum element with the first element
    let temp = arrays[minIndex];
    arrays[minIndex] = arrays[i];
    arrays[i] = temp;
  }

  return arrays;
};

console.log("BEFORE SORTING :", arrays);
console.log("AFTER SORTING :", sortingArray(arrays));

//! USING INSERTION SORT ALGORITHM
// The straightforward sorting algorithm known as insertion sort functions similarly to how you would arrange playing cards in your hands. In a sense, the array is divided into sorted and unsorted parts. Values are chosen and assigned to the appropriate positions in the sorted part of the array from the unsorted part.

// Algorithm

// insertionSort(arr):
//     for i <- 1 to arr.length:
//         key <- arr[i]
//         j <- i - 1

//         while j >= 0 and arr[j] < key:
//             arr[j+1] <- arr[j]
//             j = j+1
//         end while

//         arr[j+1] <- key    
//     end for

// return arr

const SortingArray = (arrays) => {
for (let i = 1; i < arrays.length; i++) {
  let key = arrays[i];
  let j = i - 1;

  // Moving elements of arrays[0..i-1], that are  
  // greater than key, to one position ahead  
  while (j >= 0 && arrays[j] > key) {
      arrays[j + 1] = arrays[j];
      j = j - 1;
  }

  arrays[j + 1] = key;

}

return arrays
}

console.log("BEFORE SORTING :", arrays);
console.log("AFTER SORTING :", SortingArray(arrays));