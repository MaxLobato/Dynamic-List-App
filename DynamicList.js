var Add_Button = document.getElementById('add');

function add() {
    var ul = document.getElementById('list');
    var added = document.createElement('li');
    ul.appendChild(added);

    var deletbutton = document.createElement('button');
    var spann = document.createElement('span');
    added.appendChild(spann);
    spann.textContent = document.getElementById('new').value;
    added.appendChild(deletbutton);
    deletbutton.textContent = "Delete.";


    deletbutton.addEventListener('click', () => {
        ul.removeChild(added);
    });

}


Add_Button.addEventListener('click', add);
