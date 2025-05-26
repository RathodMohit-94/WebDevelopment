const array1 = [1,4,3,6,3,56,2,-1,2,4,0,-33,22,19]

const firstneg = (num) => { 
    return num < 0;
}

const result = array1.find(firstneg);