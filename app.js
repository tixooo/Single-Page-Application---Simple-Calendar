import hide from "./hideShow.js"
hide.hide()
let yearlyCalendar = document.querySelector(`.yearsCalendar`);
yearlyCalendar.style.display = "block"
yearlyCalendar.addEventListener('click', function(event) {
hide.hide();
let date = Number(event.target.innerText);
hide.showMonth(String(date));
});

let monthlyCalendar = document.querySelectorAll(`.monthCalendar`);

monthlyCalendar.forEach((element) => {
    element.addEventListener(`click`, function(event) {
        let date = Number(event.target.innerText);
        let caption = element.querySelector(`caption`);
        if (caption.textContent == date) {
            hide.hide();
            let yearlyCalendar = document.querySelector(`.yearsCalendar`);
            yearlyCalendar.style.display = "block"
        }
    })
})

monthlyCalendar.forEach((element) => {
    element.addEventListener(`click`, function(event) {
        let month = event.target.innerText;
        let realMonth = "";
        let numberMonth = "";
        switch (month) {
            case "Jan":
                realMonth = `January`;
                numberMonth = "1";
                break;
                case "Feb":
                    realMonth = "February";
                    numberMonth = "2";
                    break;
                    case "Mar":
                        realMonth = "March";
                        numberMonth = "3";
                        break;
                        case "Apr":
                            realMonth = "April";
                            numberMonth = "4";
                            break;
                            case "May":
                                realMonth = "May";
                                numberMonth = "5";
                                break;
                                case "Jun":
                                    realMonth = "June";
                                    numberMonth = "6";
                                    break;
                                    case "July":
                                        realMonth = "July";
                                        numberMonth = "7";
                                        break;
                                        case "Aug":
                                            realMonth = "August";
                                            numberMonth = "8";
                                            break;
                                            case "Sept":
                                                realMonth = "September";
                                                numberMonth = "9";
                                                break;
                                                case "Oct":
                                                    realMonth = "October";
                                                    numberMonth = "10";
                                                    break;
                                                    case "Nov":
                                                        realMonth = "November";
                                                        numberMonth = "11";
                                                        break;
                                                        case "Dec":
                                                            realMonth = "December";
                                                            numberMonth = "12";
                                                            break;
        }
        let daysCalendar = document.querySelectorAll(`.daysCalendar`);
        daysCalendar.forEach(x => {
            if (`${realMonth} ${element.id.split("-")[1]}`) {
                hide.hide();
                hide.showDays((String(element.id.split("-")[1])),(String(numberMonth)));
            }
           let caption = x.querySelector(`caption`);
           caption.addEventListener(`click`, function(event) {
            let date = event.target.innerText;
            if (caption.textContent == date) {
                hide.hide();
                let yearlyCalendar = document.querySelector(`.yearsCalendar`);
                yearlyCalendar.style.display = "block"
            }
        })
        })
    })
})
