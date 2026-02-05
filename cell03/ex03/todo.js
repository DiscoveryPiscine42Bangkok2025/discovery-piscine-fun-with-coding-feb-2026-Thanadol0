const list = document.getElementById('ft_list');

window.onload = function() {
    const cookie = document.cookie.split('; ').find(row => row.startsWith('ft_list='));
    if (cookie) {
        const saved = JSON.parse(cookie.split('=')[1]);
        for (let i = saved.length - 1; i >= 0; i--) create(saved[i]);
    }
};

// ปุ่มกด New
function newTodo() {
    const txt = prompt("New TO DO:");
    if (txt && txt.trim() !== "") {
        create(txt);
        save();
    }
}

function create(txt) {
    const div = document.createElement("div");
    div.innerHTML = txt;
    div.onclick = function() {
        if (confirm("Remove this TO DO?")) {
            this.remove();
            save();
        }
    };
    list.prepend(div);
}

function save() {
    const todos = [];
    for (let i = 0; i < list.children.length; i++) {
        todos.push(list.children[i].innerHTML);
    }
    document.cookie = "ft_list=" + JSON.stringify(todos) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

}