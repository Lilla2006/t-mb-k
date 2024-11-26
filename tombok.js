const  otoslotto = [];

for (let i = 0; i < 5; i++) {
    let j = Math.floor(Math.random() * 90) + 1;
    if (j[i] != j[i + 1]) {
        otoslotto.push(j);
    }
    else {
         j = Math.floor(Math.random() * 90) + 1;
         otoslotto.push(j);
    }
}

console.log("Az ötöslottó nyerőszámai: " + otoslotto.toString());

//növekvő sorrendbe hellyezés:
console.log("Az ötöslottó számai növekvő sorrendben: " + otoslotto.sort());

