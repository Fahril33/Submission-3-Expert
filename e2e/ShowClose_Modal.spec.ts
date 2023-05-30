Feature("Modal Test");

Scenario("Verify modal display and close functionality", ({ I }) => {
  // Mendefinisikan ukuran layar yang diinginkan
  const desktopWidth = 1280;
  const desktopHeight = 1024;
  const mobileWidth = 300;
  const mobileHeight = 480;

  // Mengubah ukuran layar menjadi desktop
  I.resizeWindow(desktopWidth, desktopHeight);

  I.amOnPage("/"); // Ganti dengan URL halaman yang ingin diuji

  I.dontSeeElement("#myModal"); // Memastikan modal tidak ditampilkan pada ukuran layar desktop

  // Mengubah ukuran layar menjadi mobile
  I.resizeWindow(mobileWidth, mobileHeight);

  I.amOnPage("/"); // Reload halaman dengan ukuran layar mobile

  I.seeElement("#myModal"); // Memastikan modal ditampilkan pada ukuran layar mobile
  I.see("Ukuran layar Anda terlalu kecil", ".modal-content p"); // Memastikan teks pesan modal ditampilkan

  I.click(".close"); // Mengklik tombol close modal
  I.dontSeeElement("#myModal"); // Memastikan modal tertutup setelah tombol close diklik
});
