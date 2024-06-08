function calculateAge() {
  var birthdate = new Date(document.getElementById("birthdate").value);
  var today = new Date();

  var age = today.getFullYear() - birthdate.getFullYear();

  // Check jika belum ulang tahun
  if (
    today.getMonth() < birthdate.getMonth() ||
    (today.getMonth() === birthdate.getMonth() &&
      today.getDate() < birthdate.getDate())
  ) {
    age--;
  }

  document.getElementById("result").innerText =
    "Usia Anda adalah " + age + " tahun.";
}
