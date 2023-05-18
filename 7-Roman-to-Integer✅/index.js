/**
 * @param {string} s
 * @return {number}
 */
 const romanNumbers = {
I      :1,
V      :5,
X      :10,
L      :50,
C      :100,
D      :500,
M      :1000,
}
var romanToInt = function(s) {
    let num = s.split("")
    let numbers=num.map((n) =>  romanNumbers[n])
    let result = 0;
    for (let i = 0; i <= numbers.length-1; i++){
        
        if (numbers[i] >= numbers[i + 1]  ) { 
            
            result += numbers[i];
        }else if (numbers[i] < numbers[i + 1] ) {
            
            result += (numbers[i + 1] - numbers[i]);
            i += 1;
        } else if (i == numbers.length-1) {
            result += numbers[i];
        }
        
    }
    return result;
    
};