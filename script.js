const $ = (selector) => document.querySelector(selector);

const day = $('.day');
const divider = document.querySelectorAll('.divider');
const month = $('.month');
const year = $('.year');

const hour = $('.hour');
const dot = document.querySelectorAll('.dot');
const min = $('.min');
const sec = $('.sec');
const week = $('#week');
const period = $('.period');
let showDot = true;

function update() {
    showDot = !showDot;
    const now = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    divider.forEach((d) => {
        if (showDot) {
            d.classList.add('invisible');
        } else {
            d.classList.remove('invisible');
        }
    });
    
    dot.forEach((d) => {
        if (showDot) {
            d.classList.add('invisible');
        } else {
            d.classList.remove('invisible');
        }
    });

    let hours = now.getHours();
    const isAM = hours < 12;
    
    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours -= 12;
    }

    day.textContent = String(now.getDate());
    month.textContent = String(months[now.getMonth()]);
    year.textContent = String(now.getFullYear());

    hour.textContent = String(hours).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');
    sec.textContent = String(now.getSeconds()).padStart(2, '0');
    period.textContent = isAM ? 'AM' : 'PM';

    Array.from(week.children).forEach((ele) => {
        ele.classList.remove('active');
    });

    week.children[now.getDay()].classList.add('active');
}

setInterval(update, 500);
