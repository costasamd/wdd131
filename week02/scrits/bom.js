const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');



button.addEventListener('click', () => {
    if (input.value.trim() !== '') {

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        const scripture = input.value;
        input.value = '';
        deleteButton.textContent = '❌';
        li.append(scripture, deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

    }
})

