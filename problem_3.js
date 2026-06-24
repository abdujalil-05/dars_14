// 8. Navbatli bajarish (Promise + async/await + timers)
// runSequentially(tasks) — tasks bu funksiyalar massivi, har biri Promise qaytaradi. Ularni
// ketma-ket (biri tugagach keyingisi) bajarib, natijalar massivini qaytarsin.
// const tasks = [
// () => new Promise(r => setTimeout(() => r(1), 300)),
// () => new Promise(r => setTimeout(() => r(2), 100)),
// () => new Promise(r => setTimeout(() => r(3), 200)),
// ];
// await runSequentially(tasks) → [1, 2, 3]
// Muhim: Promise.all ishlatmang — maqsad ketma-ketlikni tushunish.


const tasks = [
    () => new Promise(r => setTimeout(() => r(1), 300)),
    () => new Promise(r => setTimeout(() => r(2), 100)),
    () => new Promise(r => setTimeout(() => r(3), 200)),
    ]
    
    const newArr = []
    for(let item of tasks){
        newArr.push(await item())
    }
    console.log(newArr)    