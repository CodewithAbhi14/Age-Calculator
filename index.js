let userinput = document.getElementById("date");
userinput.max = new Date().tiISOString().split("T")[0];

function calculateAge() {
    let today = new Date();
    let y = today.getFullYear();
    let m = today.getMonth() + 1;
    let d = today.getDate();

    let old = new Date(userinput.value);
    let y1 = old.getFullYear();
    let m1 = old.getMonth() + 1;
    let d1 = old.getDate();

    let y2, m2, d2;

    y2 = y - y1;

    if (m >= m1) {
        m2 = m - m1;
    } else {
        y2--;
        m2 = 12 - (m1 - m);
    }

    if (d >= d1) {
        d2 = d - d1;
    } else {
        m2--;
        d2 = 30 - (d1 - d);
    }

    if (m2 < 0) {
        m2 = 0;
        y2 = 0;
    }

    let result = document.getElementById("result");

    result.innerHTML = `You are <span>${y2}</span> years, <span>${m2}</span> months and <span>${d2}</span> days old!`;
}
