let parameter = Number(new URL(window.location.href).searchParams.get('count'));

if (isNaN(parameter)) {
    parameter = 0;
}

let board;
function count() {
    board = document.getElementById("count")
    board.innerHTML = parameter;
}


window.addEventListener('popstate', item => {
    history.pushState(null, null, `?count=${parameter + 1}`);
    parameter++;
    board.innerHTML = parameter;
});

let isStart = false;
function start() {
    if (isStart) return;
    isStart = true;
    console.log("start!!");
    history.pushState(null, null, `?count=${parameter}`);
    document.getElementById("start").innerHTML = "スタート!!";
}