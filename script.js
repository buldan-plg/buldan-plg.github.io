(async () => {
  await swal({ title: "Deskripsi Profile", icon: "info", button: "Lihat" });
  await swal({ title: "NAMA", text: "Buldan", button: "Lanjutkan" });
  await swal({ title: "NIM", text: "2021010004", button: "Lanjutkan" });
  await swal({
    title: "JURUSAN",
    text: "Sistem Informasi",
    button: "Selesai",
  });
})();
