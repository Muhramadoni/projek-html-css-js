function updateClock() {
  const hourElement = document.getElementById("hour");
  const minuteElement = document.getElementById("minute");
  const secondElement = document.getElementById("second");

  // Dapatkan waktu saat ini
  const now = new Date();
  const currentHours = now.getHours() % 12; // Ambil jam dalam format 12 jam
  const currentMinutes = now.getMinutes() + now.getSeconds() / 60; // Tambahkan detik ke menit
  const currentSeconds = now.getSeconds();

  // Hitung derajat untuk jarum jam, menit, dan detik
  const hourDegrees =
    (360 / 12) * currentHours + (360 / 12) * (currentMinutes / 60);
  const minuteDegrees = (360 / 60) * currentMinutes;
  const secondDegrees = (360 / 60) * currentSeconds;

  // Atur transformasi untuk masing-masing jarum
  hourElement.style.transform = `rotate(${hourDegrees}deg)`;
  minuteElement.style.transform = `rotate(${minuteDegrees}deg)`;
  secondElement.style.transform = `rotate(${secondDegrees}deg)`;
}
// Panggil fungsi updateClock setiap detik
setInterval(updateClock, 1000);

// Panggil updateClock() setelah dokumen dimuat
updateClock();
