// 1. Sapaan sesuai waktu
(function () {
  const h = new Date().getHours();
  const sapa = h < 11 ? "Selamat pagi!" : h < 15 ? "Selamat siang!" : h < 18 ? "Selamat sore!" : "Selamat malam!";
  document.getElementById("greeting").textContent = sapa + " Aku";
  document.getElementById("year").textContent = new Date().getFullYear();
})();

// 2. Tombol tema terang/gelap (ingat pilihan pengunjung)
(function () {
  const root = document.documentElement;
  const btn = document.getElementById("themeBtn");
  let saved = null;
  try { saved = localStorage.getItem("tema"); } catch (e) {}
  const pakaiGelap = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;

  function terapkan(gelap) {
    root.dataset.theme = gelap ? "dark" : "light";
    btn.textContent = gelap ? "Terang" : "Gelap";
  }
  terapkan(pakaiGelap);

  btn.addEventListener("click", function () {
    const gelap = root.dataset.theme !== "dark";
    terapkan(gelap);
    try { localStorage.setItem("tema", gelap ? "dark" : "light"); } catch (e) {}
  });
})();

// 3. Tab bidang IT (API / AI / AR)
(function () {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) {
        const aktif = t === tab;
        t.classList.toggle("active", aktif);
        t.setAttribute("aria-selected", aktif);
        document.getElementById(t.getAttribute("aria-controls")).hidden = !aktif;
      });
    });
  });
})();
