let countdownDuration = 10; // Countdown duration in seconds
let countdownInterval;

function startCountdown() {
  const endTime = Date.now() + countdownDuration * 1000;
  countdownInterval = setInterval(updateCountdown, 1000, endTime);
}

function updateCountdown(endTime) {
  const currentTime = Date.now();
  const remainingTime = Math.max(0, endTime - currentTime);
  displayTime(remainingTime);

  if (remainingTime === 0) {
    clearInterval(countdownInterval);
    showSaleMessage();
  }
}

function displayTime(time) {
  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  const formattedTime = `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
  document.getElementById('countdown').innerText = formattedTime;
}

function padTime(value) {
  return value.toString().padStart(2, '0');
}

function showSaleMessage() {
  document.getElementById('saleMessage').innerText = "Sale is live!!";
  document.getElementById('saleMessage').style.display = "block";
}

startCountdown();
