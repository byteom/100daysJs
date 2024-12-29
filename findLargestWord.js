const findLargestWord= (str)=>{
    if(str.trim===0){
        return 0;
    }

    words = str.split(" ");
    // words = words.sort((a,b)=>b.length-a.length);
    // return words[0];

    //Second method
    return words.reduce((accum,curword)=>{
        if(curword.length>accum.length){
            accum = curword;
        }
        return accum;
    })
}

//Second Method




console.log(findLargestWord("The quick brown fox jumped over the lazy dog")); // should return "jumped"



// Eplantion of terms

// Step-by-Step Breakdown:
// reduce Method:

// .reduce() ek array ke elements ko ek single value me reduce kar deta hai.
// Isme ek callback function hota hai jo har element par chalakar ek result generate karta hai.
// Is example me:
// accum = Accumulator (jo final result store karega, initially pehla element hota hai).
// curword = Current word (jo array ke har element ke liye use hota hai).
// Logic Inside reduce:

// if (curword.length > accum.length):
// Agar curword (current word) ki length accum (accumulator) ki length se zyada hai:
// Toh accum ko curword se replace kar do.
// Matlab, accumulator me hamesha sabse lambi string store hoti hai.
// return accum: Har iteration ke baad updated accum return hota hai.
// Final Result:

// Jab array ke sabhi elements par loop khatam hoga, accumulator (accum) ke andar sabse lambi string hogi.







// Bilkul, ek example ke saath samajhte hain:

// ### Example:
// ```javascript
// let words = ["apple", "banana", "kiwi", "mango"];
// words = words.sort((a, b) => b.length - a.length);
// console.log(words);
// ```

// ### Step-by-step Explanation:
// 1. **Initial Array:**  
//    `words = ["apple", "banana", "kiwi", "mango"]`

// 2. **Sorting Logic:**  
//    Comparison function `(a, b) => b.length - a.length`:
//    - `a` aur `b` har pair ke liye length compare karega:
//      - "banana" (6 letters) vs "apple" (5 letters): `6 - 5 = 1` (banana pehle aayega).
//      - "apple" (5 letters) vs "mango" (5 letters): `5 - 5 = 0` (order same rahega).
//      - "mango" (5 letters) vs "kiwi" (4 letters): `5 - 4 = 1` (mango pehle aayega).

// 3. **Sorted Array:**  
//    Sort karne ke baad array banega:  
//    `["banana", "apple", "mango", "kiwi"]`

// 4. **Output:**  
//    Console par print karega:  
//    `["banana", "apple", "mango", "kiwi"]`

// ### Summary:
// Is code ka kaam array ke elements ko unki **string length ke hisaab se descending order** mein arrange karna hai, sabse lambi string pehle aur sabse chhoti string last mein.