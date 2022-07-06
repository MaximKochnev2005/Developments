function Sort(mas) {
    let accordance = []

    for (let i in mas) {
        if (mas[i] === 0) {
            accordance.push(mas[i])
        }
        if (mas[i] === 7) {
            accordance.push(mas[i])
        }
    }
    console.log(accordance)
    let accordance_true = []
    for(let i in accordance) {
        if (accordance[Number(i) + 1] === 0 && accordance[Number(i) + 2] === 7) {
            accordance_true.push(accordance[i])
            accordance_true.push(accordance[Number(i) + 1])
            accordance_true.push(accordance[Number(i) + 2])
        }
    }
    console.log(accordance_true)

    let answer_true = [0,0,7]
    if(accordance_true[0] == answer_true[0] && accordance_true[1] == answer_true[1] && accordance_true[2] == answer_true[2]){
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}

Sort([1, 1, 4, 0, 6, 7, 0, 1, 1, 0, 4])
