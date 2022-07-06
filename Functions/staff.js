function Staff(mas){
    let finally_stafs = {}
    for(let i in mas){
        console.log(mas[i].split(' ')[1][0])
        finally_stafs[mas[i].split(' ')[1][0]] = {[mas[i][0]]: [mas[i]]}
    }
    console.log(finally_stafs)
}

Staff(/*вам массив*/)


