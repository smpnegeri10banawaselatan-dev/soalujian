const SPREADSHEET_ID = "1RDTnOICKl6wKqBryd7BEO4FlXV0td7rfLm7-pZj8Yls";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);

    // Buat sheet Hasil Ujian kalau belum ada
    let sheet = ss.getSheetByName("Hasil Ujian");
    if (!sheet) {
      sheet = ss.insertSheet("Hasil Ujian");
      sheet.appendRow([
        "Timestamp","Nama","Kelas","JK","NISN","Tempat Lahir","Tanggal Lahir",
        "Jawaban","Skor","Waktu"
      ]);
    }

    sheet.appendRow([
      new Date(),
      data.nama || "",
      data.kelas || "",
      data.jk || "",
      data.nisn || "",
      data.tempat || "",
      data.tgl || "",
      data.jawaban || "",
      data.skor || "",
      data.waktu || ""
    ]);

    return ContentService.createTextOutput(JSON.stringify({result:"success"}))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({result:"error", message:err.message}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({result:"ok"}))
    .setMimeType(ContentService.MimeType.JSON);
}
