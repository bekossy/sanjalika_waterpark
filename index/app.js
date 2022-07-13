/**
 * This is for the toggle button when Breakpoint is met
 */
 const toggleButton = document.getElementsByClassName('toggle-button')[0]
 const navBarLinks = document.getElementsByClassName('navlist')[0]
 
 toggleButton.addEventListener('click', () => {
     navBarLinks.classList.toggle('active')
 });

 

/**
 * This is for the Facility section to toggle up and down
 */
const accordion = document.getElementsByClassName('contentBx');
    
for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}



/**
 * This is for the timer section to countdown
 */
const ride = ['Summit Plummet', 'Rattlesnake Rapids', 'Maximum Velocity', 'Mammoth', 'Leap of Faith', 'Kookaburra Kreek', 'Quadzilla']

const timer = document.getElementById('timer');
const time = document.querySelectorAll('.time')

let futureTime = new Date();
let futureYear = futureTime.getFullYear();
let futureMonth = futureTime.getMonth();
let futureDate = futureTime.getDate();
let futureHour = futureTime.getHours();
let futureMin = futureTime.getMinutes();
let futureSec = futureTime.getSeconds();

const futureDay = new Date(futureYear, futureMonth, futureDate, futureHour, futureMin + 1, futureSec + 30)

const tempDate = futureDay.getTime()

function remainingTime(){
    const today = new Date();

    const t = tempDate - today;

    const oneHour = 60 * 60 * 1000;
    const oneMin = 60 * 1000;

    let mins = Math.floor((t % oneHour) / oneMin);
    let secs = Math.floor(t % oneMin / 1000);

    const values = [mins, secs]

    function format(item){
        if (item < 10) {
            return (item = `0${item}`);
          }
          return item;
    }

    time.forEach(function(item, index){
        item.innerHTML = format(values[index])
    });

    const available = Math.floor(Math.random() * ride.length)

    if(t < 0){
        clearInterval(current)
        timer.innerHTML = `<span style="padding: 10px 0px; ">${ride[available]}</span>`
      }
}

const current = setInterval(remainingTime, 1000)

remainingTime()

const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  // setup back to top link

  if (scrollHeight > 500) {
      topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});