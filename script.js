const result = document.getElementById('result');

function display(val) {
    result.value += val;
}

function clearScreen() {
    result.value = '';
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (e) {
        result.value = 'Error';
    }
}

function del() {
    result.value = result.value.slice(0, -1);
}