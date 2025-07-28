// Validasi form kontak dan pendaftaran
function validateForm() {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan") || null;
  const prodi = document.getElementById("prodi") || null;

  if (nama === "" || email === "") {
    alert("Nama dan email wajib diisi!");
    return false;
  }

  // Jika ada field pesan, berarti di form kontak
  if (pesan && pesan.value.trim() === "") {
    alert("Pesan tidak boleh kosong.");
    return false;
  }

  // Jika ada pilihan prodi, berarti di form pendaftaran
  if (prodi && prodi.value === "") {
    alert("Silakan pilih program studi.");
    return false;
  }

  alert("Form berhasil dikirim. Terima kasih!");
  return false; // Supaya tidak refresh halaman (simulasi)
}
