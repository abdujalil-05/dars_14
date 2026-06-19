// 6. Eng ko‘p takrorlangan harf (string + Map + logic)
// mostFrequentChar(str) matnda eng ko‘p uchragan harfni va uning sonini qaytarsin. Bir nechtasi
// teng bo‘lsa — birinchi uchragani.
// mostFrequentChar("javascript") → { char: "a", count: 2 }
// mostFrequentChar("aabbb") → { char: "b", count: 3 }
// Cheklov: probellarni hisobga olmang.


function mostFrequentChar(str){
    const map = new Map()
    for (let letter of str){
        if (letter === " ") continue
        if (map.has(letter)){
            map.set(letter, map.get(letter) + 1)
        } else {
            map.set(letter, 1)
        }
    }
    let max_num = 0
    let letter = ""
    for (let [key, val] of map.entries()){
        if (max_num < val){
            max_num = val
            letter = key
        }
    }
    return {char: letter, count: max_num}
}

console.log(mostFrequentChar("javascript"))