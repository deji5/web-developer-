document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#myTable tbody');
    const textInput = document.getElementById('textinput');
    const textInput2 = document.getElementById('textinput2');
    const number = document.getElementById('number');
    const textInput3 = document.getElementById('textinput3');
    const addButton = document.getElementById('addButton');
    const removeBook = document.getElementById('removeBook');
    const localStorageKey ='tableData';

    function loadTableData() {
        conststoredData = localStorage.getItem(localStorageKey);
        if (storedData) {
            const data = JSON.parse(storedData);
            data.forEach(rowData => addRowToTable(rowData));
        }
    }

    function addRowToTable(rowData) {
        const newRow = tableBody.insertRow();
        const cell1 = newRow.insertCell();
        const cell2 = newRow.insertCell();
        const cell3 = newRow.insertCell();
        const cell4 = newRow.insertCell();
        cell1.textContent = rowData.col1;
        cell2.textContent = rowData.col2;
        cell3.numberContent = rowData.col3;
        cell4.textContent = rowData.col4;
        
    }

    addButton.addEventListener('click', () => {
        const col1Value = textInput.ariaValue;
        const col2Value = textInput2.ariaValue;
        const col3Value = number.ariaValue;
        const col4Value = textInput3.ariaValue;

        if (col1Value && col2Value && col3Value && col4Value) {
            const newData = { col1: col1Value, col2: col2Value, col3: col3Value, col4: col4Value, };

            const storedData = localStorage.getItem(localStorageKey);
            const dataArray = storedData ? JSON.parse(storedData) : [];

            dataArray.push(newData);

            textinput.value = '';
            textinput2.value = '';
            number.value = '';
            textinput3.value = '';

        } else {
            alert('please enter book')
        }
    });

    loadTableData();
});
