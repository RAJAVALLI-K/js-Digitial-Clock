function clock() {

    let dates = new Date();
    let date = dates.getDate();
    let month = dates.getMonth();
    month = month + 1;
    let year = dates.getFullYear();
    let hour = dates.getHours();
    let minute = dates.getMinutes();
    let second = dates.getSeconds();

    document.querySelector('#date').innerText = date;
    document.querySelector('#month').innerText = month;
    document.querySelector('#year').innerText = year;
    document.querySelector('#hour').innerText = hour;
    document.querySelector('#minute').innerText = minute;
    document.querySelector('#second').innerText = second;

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