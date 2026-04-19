// ambil elemen
const form = document.getElementById("formPendaftaran");
const hasil = document.getElementById("hasilPendaftaran");
const nama = document.getElementById("nama");
const popup = document.getElementById("popup");

// Element Modal Preview
const previewModal = document.getElementById("previewModal");
const previewData = document.getElementById("previewData");
const btnBatal = document.getElementById("btnBatal");
const btnKonfirmasi = document.getElementById("btnKonfirmasi");

nama.addEventListener("input", function () {
    if (this.value.length < 3) {
        this.style.border = "2px solid red";
    } else {
        this.style.border = "2px solid green";
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const nohp = document.getElementById("nohp").value;
    const kategori = document.getElementById("kategori").value;
    const pesan = document.getElementById("pesan").value;

    hasil.innerHTML = ""; // Bersihkan pesan error sebelumnya

    if (nama.value.length < 3) {
        hasil.innerHTML = "<p style='color:red;'>Nama minimal 3 karakter</p>";
        return;
    }

    if (!email.includes("@")) {
        hasil.innerHTML = "<p style='color:red;'>Email tidak valid</p>";
        return;
    }

    if (nohp.length < 10) {
        hasil.innerHTML = "<p style='color:red;'>No HP minimal 10 digit</p>";
        return;
    }

    if (kategori === "-- Pilih --") {
        hasil.innerHTML = "<p style='color:red;'>Pilih kategori dulu</p>";
        return;
    }

    // Tampilkan data ke modal preview
    previewData.innerHTML = `
        <p><strong>Nama:</strong> ${nama.value}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>No HP:</strong> ${nohp}</p>
        <p><strong>Kategori:</strong> ${kategori}</p>
        <p><strong>Pesan:</strong> ${pesan || '-'}</p>
    `;

    // Tampilkan modal
    previewModal.style.display = "flex";
});

// Tutup modal jika batal
btnBatal.addEventListener("click", function () {
    previewModal.style.display = "none";
});

// Aksi jika konfirmasi
btnKonfirmasi.addEventListener("click", function () {
    // Sembunyikan modal
    previewModal.style.display = "none";

    // Tampilkan popup sukses
    popup.style.display = "block";
    setTimeout(function () {
        popup.style.display = "none";
    }, 3000);

    // Reset form
    form.reset();
    nama.style.border = ""; // Reset border warna
});

// Dark Mode Logic
const darkModeToggle = document.getElementById("darkModeToggle");
const bodyElement = document.body;
const themeIcon = darkModeToggle.querySelector("i");

// Cek status dari LocalStorage
const isDarkMode = localStorage.getItem("darkMode") === "enabled";

if (isDarkMode) {
    bodyElement.classList.add("dark-mode");
    themeIcon.classList.replace("fa-moon", "fa-sun");
}

darkModeToggle.addEventListener("click", () => {
    bodyElement.classList.toggle("dark-mode");

    if (bodyElement.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        localStorage.setItem("darkMode", "disabled");
        themeIcon.classList.replace("fa-sun", "fa-moon");
    }
});