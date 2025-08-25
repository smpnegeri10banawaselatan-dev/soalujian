# Ujian Mid Semester Kelas 7

## Cara Deploy

1. Buka Google Apps Script → Buat project baru → Salin `Code.gs`.
2. Deploy → New Deployment → Web App
   - Execute as: Me
   - Who has access: Anyone
3. Salin URL Web App → ganti `googleAppsScriptUrl` di `index.html`.
4. Upload folder `UjianKelas7` ke GitHub.
5. Akses `index.html` di browser.
6. Spreadsheet harus ada sheet:
   - `siswa` → untuk login siswa
   - `soal` → soal ujian
   - `Hasil Ujian` → hasil jawaban akan tersimpan otomatis
