function even(num)
{
    return num%2 === 0;
}
const numbers = [1,2,3,4,5,6,7,8,9,10];
const filtered = numbers.filter(even);
console.log(filtered);