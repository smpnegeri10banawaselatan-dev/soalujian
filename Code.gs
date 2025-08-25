const SPREADSHEET_ID = "1RDTnOICKl6wKqBryd7BEO4FlXV0td7rfLm7-pZj8Yls"; // Ganti sesuai spreadsheet Anda

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName("Hasil Ujian");
    
    if (!sheet) {
      sheet = ss.insertSheet("Hasil Ujian");
      sheet.appendRow(["Timestamp","Nama","Kelas","JK","NISN","Tempat Lahir","Tanggal Lahir","Jawaban","Skor","Waktu Detik"]);
    }

    sheet.appendRow([
      new Date(),
      data.nama,
      data.kelas,
      data.jk,
      data.nisn,
      data.tempat,
      data.tgl,
      data.jawaban,
      data.skor,
      data.waktu
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", message: "Jawaban tersimpan" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
