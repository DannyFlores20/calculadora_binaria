function main() {
    let select = document.querySelector('#type');
    let input = document.querySelector('#number');
    let view = document.querySelector('#view');
    let number = input.value;

    if (select.value == 'binario') {
        view.innerHTML = decimalToBinary(number);
    } else if (select.value == 'decimal') {
        view.innerHTML = binaryToDecimal(number);
    } else {
        view.innerHTML = 'Selecciona a qué quiere convertir el número';
    }

    input.value = '';
}

function decimalToBinary(number) {
    let result = 0;
    let module = 0;
    let binaries = [];
    let binary_number = '';

    do {
        result = parseInt(number/2);
        module = number%2;
        number = result;
        binaries.push(module);
    } while (number > 0);

    binaries.reverse();

    binaries.forEach(i => binary_number = binary_number.concat(i));
    return binary_number;
}

function binaryToDecimal(number) {
    let result = 0;
    
    for (let index = 0; index < number.length; index++) {
        result += number[index] * 2**(number.length-index-1);
    }

    return result;
}

document.getElementById('submit').addEventListener('click', main);
