const deepCopy = obj => {
    if (obj === null || typeof obj !== 'object') return obj;
    let copy = Array.isArray(obj) ? [] : {};
    
    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }
    return copy;
}
                                     //Deep Copy 
const original = {
    name: 'Sai',
    age: 30,
    hobbies: ['reading', 'music'],
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const copied = deepCopy(original);
copied.address.city = 'Boston';
copied.hobbies.push('gaming');

console.log('Original:', original);
console.log('Copied:', copied);