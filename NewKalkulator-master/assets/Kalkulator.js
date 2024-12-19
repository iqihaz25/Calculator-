console.log("Selamat anda berhasil menggunakan JavaScript!")

// Objek Kalkulator // 
const calculator = {
    displayNumber : '0',
    operator: null,
    firstNumber : null,
    waitingForSecondNumber: false
};

// Fungsi update angka pada layar //
function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}
// Function Menghapus Angka //
function clearCalculator(){
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}

// Fungsi untuk memasukkan angka //
function inputDigit(digit){
    calculator.displayNumber += digit;
}

// Variabel buttons //
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener('click', function(event) {
        // Mendapatkan objek elemen yang diklik //
        const target = event.target;

        //Fungsi clear pada kalkulator //
    if (target.classList.contains('clear')) {
        clearCalculator();
        updateDisplay();
        return;
    }

        // Fungsi negatif positif pada kalkulator //
    if(target.classList.contains('negative')) {
        inverseNumber();
        updateDisplay();
        return;
    }

        // Fungsi sama dengan pada kalkulator //
    if(target.classList.contains('equals')) {
        performCalculation();
        updateDisplay();
        return;
    }

        // Fungsi + & - pada kalkulator //
    if(target.classList.contains('operator')) {
        handleOperator(target.innerText);
        return;
    }   

        // Fungsi input angka pada kalkulator //
        inputDigit(target.innerText);
        updateDisplay()
    });
}

// Menghapus angka 0 pada awal bilangan //
function inputDigit(digit){
    if(calculator.displayNumber === '0'){
        calculator.displayNumber = digit;
    } else{
        calculator.displayNumber += digit;
    }
}

function inverseNumber() {
    if (calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
    if (!calculator.waitingForSecondNumber) {
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;

        // Mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi //
        calculator.displayNumber = '0';
        } else {
            alert('Operator sudah ditetapkan')            
    }
}

function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null){
        alert("anda belum menetapkan operator");
        return;
    }

    let result = 0
    if (calculator.operator === "+"){
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }

    calculator.displayNumber = result;
}