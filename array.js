const Mem = require('./memory');
const Memory = new Mem()

class DSAarray {
    
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = Memory.allocate(this.length)
    }
    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = Memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        Memory.copy(this.ptr, oldPtr, this.length)
        Memory.free(oldPtr);
        this._capacity = size
    }
    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * DSAarray.SIZE_RATIO);
        }

        Memory.set(this.ptr + this.length, value);
        this.length++;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return Memory.get(this.ptr + index);
    }
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = Memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * DSAarray.SIZE_RATIO);
        }

        Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
        Memory.set(this.ptr + index, value)
        this.length++
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        Memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}

function main() {
    DSAarray.SIZE_RATIO = 3; 

    let arr = new DSAarray

    arr.push(3);
    // arr.push(5);
    // arr.push(15);
    // arr.push(19);
    // arr.push(45);
    // arr.push(10);
    // arr.pop();
    // arr.pop();
    // arr.pop();

    arr.push('tauhida')


    console.log(arr);

}
//main()

function urlify(string) {
    return string.split(" ").join("%20")
}
console.log(urlify('tauhida parveen'))

function arrayFilter(arr) {
    const newArray = []
    for (i=0; i <= arr.length; i++) {
            if (arr[i] >= 5) {
                newArray.push(arr[i])
            }
            
    }
    return newArray
}

arr = [ 1, 3, 4, 2, 5, 7, 9, 15, 18]

console.log(arrayFilter(arr))

function maxSum (array) {
    let currentSum = 0
    let maximumSum = 0
    
    for(let i=0; i <= array.length - 1; i++) {
        let currentIndex = array[i]

        currentSum = Math.max((currentIndex + currentSum), 0)
        maximumSum = Math.max(currentSum, maximumSum)
    }
    return maximumSum
}
//maxSum = (arr, arr.length - 1) => Math.max(...a.map(x => s += x - ~~a[~--k]));
const array = [4, 6, -3, 5, -2, 1]
console.log(maxSum(array))

// function mergeArrays (arr1, arr2) {
//     let newArray = arr1.concat(arr2)

//     for(let i = 0; i <= newArray.length; i++) {
//         firstIndex = newArray[i]
//         secondIndex = newArray[i + 1]

//         if(firstIndex < secondIndex) {
            
//         }
//     }

//     return newArray
// }

let merge = function(nums1,nums2) {
    let len1 = nums1.length,
       len2 = nums2.length,
       arr;
    if(nums2.length > 0){
       arr = nums1.slice(0,len1);
       nums2 = nums2.slice(0,len2);
       arr = [...arr,...nums2];
       arr.sort((a , b)=> a - b);
       nums1.splice(0, nums1.length + nums2.length,...arr);
       return (arr);
    }
 };

const arr1 = [1, 3, 6, 8, 11]
const arr2 = [2, 3, 5, 8, 9, 10]

console.log(merge(arr1, arr2))

function removeTheThings (string, removeThis) {
    if(string.includes(removeThis)) {
        return string.replace(removeThis, '')
    }
    return `${string}: nothing was removed`;
}

console.log(removeTheThings('Battle of the Vowels: Hawaii vs. Grozny', 'a'))

const remove = (str, chars) => {
    let regex = new RegExp(`[${chars}]`, 'gi')
    return str.replace(regex, '');
 };//will's version

 console.log(remove('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))

const products = function(array) {
    //let product = arr.reduce(a,b => a *b)
    let newArray = []
    for (i=0; i<=array.length; i++){
        let currentIndex = array[i]
        newArray = array.filter(item => currentIndex === item)
    }
    return newArray
}

const originalArray = [1, 3, 9, 4]

console.log(products(originalArray))

const product = arr => {
    let len = arr.length, newArr = [];
    let totalProd = arr.reduce((a,b) => a * b);
    newArr = arr.map(i => i = (totalProd / i));
    return (newArr)
}//will

console.log(product(originalArray))