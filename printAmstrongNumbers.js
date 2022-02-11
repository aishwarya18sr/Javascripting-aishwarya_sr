function isAmstrongNumber(num)
{
    const actualNum = num;
    let sum = 0;
    let lastDigit;
    const numOfDigits = num.toString().length;
    while(num>0)
    {
        lastDigit = num % 10;
        sum+= lastDigit**numOfDigits;
        num = Math.floor(num / 10);
    }
    return (sum===actualNum)
}

function printAmstrongNumber(number)
{
    for(let i = 0; i <= number; i++)
    {
        if(isAmstrongNumber(i))
        {
            console.log(i);
        }
    }
}

const N = 1000;
printAmstrongNumber(N);