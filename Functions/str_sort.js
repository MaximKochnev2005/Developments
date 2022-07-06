function Str_sort(word){
    let letter = []
    let Big_letter = []
    let Intager = []
    let even = []
    let not_even = []
    let final_word = ''
    for(let i in word){
        if(word[i] === word[i].toUpperCase()){
            if(isNaN(Number(word[i]))){
                Big_letter.push(word[i])
            } else {
                Intager.push(word[i])
            }
        } else {
            letter.push(word[i])
        }
    }
    for(let i in  letter){
        final_word = final_word.concat(letter[i])
    }
    for(let i in  Big_letter){
        final_word = final_word.concat(Big_letter[i])
    }
    for(let i in  Intager){
        if(Number(Intager[i]) % 2 == 0){
            even.push(Intager[i])
        } else {
            not_even.push(Intager[i])
        }
    }
    for(let i in not_even){
        final_word = final_word.concat(not_even[i])
    }
    for(let i in even){
        final_word = final_word.concat(even[i])
    }
    console.log(final_word)
    return final_word
}
Str_sort(/*ваша строка*/)

