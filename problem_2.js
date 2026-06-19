// 7. Sana farqi (Date + logic)
// daysBetween(date1, date2) ikki sana orasidagi to‘liq kunlar sonini qaytarsin (tartibdan qat’i nazar,
// musbat son).
// daysBetween("2025-01-01", "2025-01-10") → 9
// daysBetween("2025-03-10", "2025-03-01") → 9
// Cheklov: vaqt zonasi va soat-daqiqani e’tiborga olmang, faqat kunlar.


function daysBetween(date1, date2){
    return Math.abs(Number(date1.split("-")[2]) - Number(date2.split("-")[2]))
}


console.log(daysBetween("2025-01-01", "2025-01-10"))
console.log(daysBetween("2025-03-10", "2025-03-01"))