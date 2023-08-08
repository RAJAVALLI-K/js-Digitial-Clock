function clock() {

    let date = document.querySelector('#date')
    let month = document.querySelector('#month')
    let year = document.querySelector('#year')
    let hour = document.querySelector('#hour')
    let minute = document.querySelector('#minute')
    let second = document.querySelector('#second')

    let dates = new Date();
    date.innerText = dates.getDate();
    month.innerText = dates.getMonth();
    year.innerText = dates.getFullYear();
    hour.innerText = dates.getHours();
    minute.innerText = dates.getMinutes();
    second.innerText = dates.getSeconds();
    // date

    if (dates.getDate() <= 9) {
        date.innerHTML = "0" + (dates.getDate());
    }
    else {
        date.innerHTML = dates.getDate();
    }

    // month

    if (dates.getMonth() <= 9) {
        month.innerText = "0" + (dates.getMonth() + 1);
    }
    else {
        month.innerText = dates.getMonth() + 1;
    }

    // hour

    if (dates.getHours() <= 9) {
        hour.innerHTML = "0" + (dates.getHours());
    }
    else {
        hour.innerHTML = dates.getHours();
    }

    // minutes

    if (dates.getMinutes() <= 9) {
        minute.innerHTML = "0" + (dates.getMinutes());
    }
    else {
        minute.innerHTML = dates.getMinutes();
    }

    // seconds

    if (dates.getSeconds() <= 9) {
        second.innerText = "0" + (dates.getSeconds());
    }
    else {
        second.innerText = dates.getSeconds();
    }


    let mon = document.getElementById('mon');
    let tue = document.getElementById('tue');
    let wed = document.getElementById('wed');
    let thu = document.getElementById('thu');
    let fri = document.getElementById('fri');
    let sat = document.getElementById('sat');
    let sun = document.getElementById("sun");

    let i = dates.getDay();
    let days = document.querySelectorAll('.day')[i].checked = true;

    let k;
    if (hour < 12) {
        console.log('rajiii');
        k = 0;
    } else {
        console.log('raji');
        k = 1;
    }
    let morning = document.querySelector("#morning");
    let amPm = morning.getElementsByTagName("input")[k].checked = true;
}

setInterval(clock, 1000);