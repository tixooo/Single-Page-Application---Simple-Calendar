function hide() {
let section = document.querySelectorAll(`section`);
section.forEach(x => x.style.display = "none");
}

function showMonth(x) {
    let month = document.querySelector(`#year-${x}`);
    month.style.display = "block";
}

function showDays(x, y){
    let days = document.querySelector(`#month-${x}-${y}`);
    days.style.display = "block";
}

export default {hide, showMonth, showDays};