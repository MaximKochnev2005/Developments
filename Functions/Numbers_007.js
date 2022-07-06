function Sort(mas) {
    let accordance = []
    let accordance_true = [0, 0, 7]

    for (let i in mas) {
        if (accordance == accordance_true) {
            break
        }
        if (mas[i] === 0) {
            if (mas[Number(i) + 1] === 0 && mas[Number(i) + 2] === 7) {
                accordance.push(mas[i])
                accordance.push(mas[Number(i) + 1])
                accordance.push(mas[Number(i) + 2])
            }
        }
    }
    if(accordance[0] == accordance_true[0] && accordance[1] == accordance_true[1] && accordance[2] == accordance_true[2]) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }

}
Sort([/*ваш массив*/])
