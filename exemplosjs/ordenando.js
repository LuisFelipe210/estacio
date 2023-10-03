const swap = (array, idx1, idx2) => {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
};

const shuffle = (array, swaps) => {
    for (let i = 0; i < swaps; i++) {
        const idx1 = Math.floor(Math.random() * array.length);
        const idx2 = Math.floor(Math.random() * array.length);
        swap(array, idx1, idx2);
    }
};

const bubble_sort = (array) => {
    const n = array.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
            }
        }
    } while (swapped);
};

const selection_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
};

const quick_sort = (array, start, end) => {
    if (start < end) {
        const pivotIndex = partition(array, start, end);
        quick_sort(array, start, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, end);
    }
};

const posicinamento = (array, start, end) => {
    const pivotValue = array[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(array, pivotIndex, end);
    return pivotIndex;
};

function add() {
    const valor = parseInt(document.getElementById('valor').value);
    const valoresList = document.getElementById('valores');
    const node = document.createElement('li');
    node.appendChild(document.createTextNode(valor));
    valoresList.appendChild(node);
}

function ordenar() {
    const valoresList = document.getElementById('valores');
    const valoresArray = Array.from(valoresList.children).map(child => parseInt(child.innerHTML));
    const algoritmo = document.getElementById('algoritmo').value;
    
    switch (algoritmo) {
        case 'bubble':
            bubble_sort(valoresArray);
            break;
        case 'selection':
            selection_sort(valoresArray);
            break;
        case 'quick':
            quick_sort(valoresArray, 0, valoresArray.length - 1);
            break;
        default:
            console.error('Algoritmo de ordenação não reconhecido');
            return;
    }

    valoresList.innerHTML = valoresArray.map(valor => `<li>${valor}</li>`).join('');
}

function misturar() {
    const valoresList = document.getElementById('valores');
    const valoresArray = Array.from(valoresList.children).map(child => parseInt(child.innerHTML));
    shuffle(valoresArray, valoresArray.length * 2);
    valoresList.innerHTML = valoresArray.map(valor => `<li>${valor}</li>`).join('');
}
