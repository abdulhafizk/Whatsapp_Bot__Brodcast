const fs = require("fs");
const chalk = require("chalk");
const { sample } = require("lodash");

// Other
global.readMore = ""; // it's 5000 characters so that makes WhatsApp add 'read more' button
global.onwer = ["6282247134797"]; // Owner Number
global.delay = 3000; // delay to send message
global.sessionName = "Abdulhafizk"; // session name
global.prefa = ["", "!", ".", "🐦", "🐤", "🗿"]; // prefix
global.sp = "⭔"; // special character
q3 = "```"; // code block
mess = {
  success: "Done sir ✓",
  error: "Terjadi kesalahan saat memproses data.",
  admin:
    "⛔ *AKSES DI TOLAK* ⛔\n\nPerintah ini hanya bisa di gunakan oleh admin grup",
  botAdmin:
    "⛔ *AKSES DI TOLAK* ⛔\n\nPerintah ini hanya bisa di gunakan ketika bot menjadi admin",
  owner:
    "⛔ *AKSES DI TOLAK* ⛔\n\nPerintah ini hanya bisa digunakan oleh orang ganteng.",
  group: `⛔ *AKSES DI TOLAK* ⛔\n\nPerintah ini hanya bisa di akses di dalam grup chat`,
  private: "Fitur Digunakan Hanya Untuk Private Chat!",
  bot: "Fitur Khusus Pengguna Nomor Bot",
  endLimit: "Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12",
  nonprem: `⛔ *AKSES DI TOLAK* ⛔\n\nSilahkan menjadi user premium jika ingin menggunakan fitur ini. cek info premium di *.premium*`,
  lockCmd: "Fitur Tidak Diaktifkan Oleh Owner!",
  example1:
    "Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)",
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
