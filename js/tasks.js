1
// const btn = document.querySelector('#btn')
// btn.addEventListener('click', message)
// function message() {
//    console.log( 'Button clicked!');
// }
2
// const p = document.querySelector('p')
// const btn = document.querySelector('#btn')

// btn.addEventListener('click', newText)
// function newText() {
//  p.textContent = 'Text changed!'
// }
3
// const btn = document.querySelector('#btn')
// const conter = document.querySelector('#counter')
// let count = 0;
// btn.addEventListener('click', nomberUP)
// function nomberUP() {
//     count += 1;
//     counter.textContent = count;
// }
4
// const div = document.querySelector('.highlight')
// div.addEventListener('click', removeClass)
// function removeClass() {
//     div.remove()
// }
5
// const input = document.querySelector('#input')
// const output = document.querySelector(".output");
// input.addEventListener('input', outText)
// function outText(ev) {
//     output.textContent = ev.currentTarget.value;
// }




// console.log ("log");
// function foo(x, n) {
//     let arr = [];
//     for (let i = 1; i <= n; i++)
//     arr.push(x * i)
//     return arr
// }
// console.log(foo(2, 1));



//1...... Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.



// Оголоси функцію makeTransaction, яка очікує два параметри, значення яких будуть задаватися під час її виклику: • quantity— перший параметр, число, що містить кількість замовлених дроїдів • pricePerDroid — другий параметр, число, що містить вартість одного дроїда



// Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів: "You ordered <quantity> droids worth <totalPrice> credits!", де: • <quantity> — це кількість замовлених дроїдів • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.


// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }
// console.log(makeTransaction(25, 15));

//2.... Оголоси функцію getShippingMessage, яка очікує три параметри, значення яких будуть задаватися під час її виклику: • country — перший параметр, рядок, що містить країну доставки • price — другий параметр, число, що містить загальну вартість товару • deliveryFee — третій параметр, число, що містить вартість доставки товару



// Доповни код функції так, щоб вона повертала рядок з повідомленням про доставку товару в країну користувача: "Shipping to <country> will cost <totalPrice> credits", де: • <country> — це країни доставки • <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки

//     Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function getShippingMessage(country, price, deliveryFee) {
//     const totalPrice = price + deliveryFee
//         return `Shipping to ${country} will cost ${totalPrice} credits`
// }
// console.log(getShippingMessage("Alla", 20, 40));



// 3 