const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();


const futureDate = new Date(tempYear, tempMonth, tempDay +9 , 11, 30,0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const min = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

let date = futureDate.getDate();

let weekDay = futureDate.getDay();

weekDay = weekdays[weekDay];
giveaway.textContent = `Giveaway Ends on ${weekDay}, ${date} ${month} ${year}, ${hours}:${min}am`;


//future time in ms
const futureTime = futureDate.getTime();

getRemainingTime = () =>{

  const currentTime = new Date().getTime();   // gives time in milli seconds

  // diff bw dates
  const t = futureTime - currentTime;

  //values in ms
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  // claculating all values

  let days = t/oneDay;
  days = Math.floor(days)
  console.log(Math.floor(days));

  let hour = Math.floor((t % oneDay) / oneHour);

  let minute = Math.floor((t % oneHour) / oneMinute);

  let second = Math.floor((t % oneMinute) / 1000);

  // array for all values
  const changeArr = [days, hour, minute, second]; 

  // function for adding prefix 0 before value
  format = (item) => {
    if (item < 10)
      return item = `0${item}`;
    
    return item;  
  }

  items.forEach((item, index) => {
    item.innerHTML = format(changeArr[index]);
    
  });
  


  // when time expires !
  if (t < 0)
  {
    clearInterval();
    deadline.innerHTML = `<h4 class="expired">Sorry,This Giveaway is expired!</h4>`;
  }

}

// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();




