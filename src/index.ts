import "./index.scss";
import data from "./data.json";

//Finding the current day
const weekday = ["sun","mon","thu","wed","thu","fri","sat"]
const d = new Date();
let day = weekday[d.getDay()]
console.log(day)

const multipler = 2.5;
//Monday
const mondayData = document.querySelector(".mon__data")!
mondayData.innerHTML = `$${data[0].amount}`;
const mondayBlock:HTMLElement = document.querySelector(".mon__block")!
mondayBlock.style.height = `${data[0].amount*multipler}px`;
day === "mon" ? mondayBlock.style.backgroundColor = "hsl(186, 34%, 60%)" : "";
//Tuesday
const tuesdayData = document.querySelector(".tue__data")!
tuesdayData.innerHTML = `$${data[1].amount}`;
const tuesdayBlock:HTMLElement = document.querySelector(".tue__block")!
tuesdayBlock.style.height = `${data[1].amount*multipler}px`;
day === "tue" ? tuesdayBlock.style.backgroundColor = "hsl(186, 34%, 60%)" : "";
//Wednesday
const wednesdayData = document.querySelector(".wed__data")!
wednesdayData.innerHTML = `$${data[2].amount}`;
const wednesdayBlock:HTMLElement = document.querySelector(".wed__block")!
wednesdayBlock.style.height = `${data[2].amount*multipler}px`;
day === "wed" ? wednesdayBlock.style.backgroundColor = "hsl(186, 34%, 60%)" : "";
//Thursday
const thursdayData = document.querySelector(".thu__data")!
thursdayData.innerHTML = `$${data[3].amount}`;
const thursdayBlock:HTMLElement = document.querySelector(".thu__block")!
thursdayBlock.style.height = `${data[3].amount*multipler}px`;
day === "thu" ? thursdayBlock.style.backgroundColor = "hsl(186, 34%, 60%)" : "";
//Friday
const fridayData = document.querySelector(".fri__data")!
fridayData.innerHTML = `$${data[4].amount}`;
const fridayBlock:HTMLElement = document.querySelector(".fri__block")!
fridayBlock.style.height = `${data[4].amount*multipler}px`;
day === "fri" ? fridayBlock.style.backgroundColor = "hsl(186, 34%, 60%)" : "";
//Saturday
const staurdayData = document.querySelector(".sat__data")!
staurdayData.innerHTML = `$${data[5].amount}`;
const saturdayBlock:HTMLElement = document.querySelector(".sat__block")!
saturdayBlock.style.height = `${data[5].amount*multipler}px`;
day === "sat" ? saturdayBlock.style.backgroundColor = "hsl(186, 34%, 60%)" : "";
//Sunday
const sundayData = document.querySelector(".sun__data")!
sundayData.innerHTML = `$${data[6].amount}`;
const sundayBlock:HTMLElement = document.querySelector(".sun__block")!
sundayBlock.style.height = `${data[6].amount*multipler}px`;
day === "sun" ? sundayBlock.style.backgroundColor = "hsl(186, 34%, 60%)" : "";









