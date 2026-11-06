export type Speaker = 'narator' | 'kirana' | 'fajar';

export type Caption = {
  start: number; // detik
  end: number; // detik
  text: string;
  speaker: Speaker;
};

// Diambil dari file SRT. Speaker menentukan warna caption.
export const captions: Caption[] = [
  {start: 0.08, end: 3.92, text: 'Aku pindah ke sekolah baru dan dapat bangku belakang dekat jendela.', speaker: 'narator'},
  {start: 4.28, end: 7.88, text: 'Ku kira aku beruntung, bisa tidur tanpa ketahuan guru.', speaker: 'narator'},
  {start: 8.22, end: 13.42, text: 'Ternyata, bangku itu sudah ada penghuninya yang nggak ada di absen.', speaker: 'narator'},
  {start: 13.7, end: 15.8, text: 'Jam istirahat, kelas kosong.', speaker: 'narator'},
  {start: 15.98, end: 19.88, text: 'Di sebelahku duduk cewek berseragam jadul, rambut di kepang dua.', speaker: 'narator'},
  {start: 20.04, end: 22.88, text: 'Aku Kirana, sudah di sini 30 tahun.', speaker: 'kirana'},
  {start: 23.04, end: 25.8, text: 'Aku jatuh dari kursi, dua kali!', speaker: 'narator'},
  {start: 25.96, end: 27.48, text: 'Tapi hantu ini aneh.', speaker: 'narator'},
  {start: 27.54, end: 31.36, text: 'Dia takut kodok, sampai ngumpet di laci tiap pelajaran biologi.', speaker: 'narator'},
  {start: 31.44, end: 35.1, text: 'Dia nggak tahan lihat pensil patah, langsung gelisah minta diserut.', speaker: 'narator'},
  {start: 35.26, end: 39.8, text: 'Dan dia naksir berat sama Rafli, cowok paling ganteng di kelas.', speaker: 'narator'},
  {start: 39.96, end: 43.94, text: 'Tiap Rafli hapus papan tulis, dia menghela nafas.', speaker: 'narator'},
  {start: 44.06, end: 46.48, text: 'Pelan-pelan, aku nggak takut lagi.', speaker: 'narator'},
  {start: 46.58, end: 49.6, text: 'Bangku belakang jadi ramai komentar soal poni Rafli.', speaker: 'narator'},
  {start: 49.76, end: 52.06, text: 'Sampai suatu hari Kirana cerita.', speaker: 'narator'},
  {start: 52.18, end: 54.94, text: 'Rafli mirip kakak kelas yang dulu dia taksir.', speaker: 'kirana'},
  {start: 54.98, end: 58.78, text: 'Dia pernah nulis surat buat kakak kelas itu, tapi nggak pernah sampai.', speaker: 'kirana'},
  {start: 58.88, end: 62.08, text: 'Selama surat itu belum sampai, dia nggak bisa pergi.', speaker: 'kirana'},
  {start: 62.16, end: 63.02, text: 'Kami cari.', speaker: 'narator'},
  {start: 63.1, end: 66.34, text: 'Sampai aku rabah bawah meja, dan ada yang nempel.', speaker: 'narator'},
  {start: 66.38, end: 69.34, text: 'Amplop kuning rapuh ditempel permen karet kering.', speaker: 'narator'},
  {start: 69.38, end: 71.64, text: 'Di depannya tertulis, Hendra.', speaker: 'narator'},
  {start: 71.7, end: 74.44, text: 'Rafli melotot. Itu nama kakeknya.', speaker: 'narator'},
  {start: 74.52, end: 78.7, text: 'Sore itu, kakeknya baca surat itu di teras, tangannya gemetar.', speaker: 'narator'},
  {start: 78.78, end: 80.9, text: 'Dia ketawa dan nangis sekaligus.', speaker: 'narator'},
  {start: 80.96, end: 84.54, text: 'Karena dulu, dia juga diem-diem naksir cewek berkepang dua.', speaker: 'narator'},
  {start: 85.36, end: 88.6, text: 'Malam itu, tubuh Kirana mulai bercahaya.', speaker: 'narator'},
  {start: 88.62, end: 90.0, text: 'Makasih, Fajar.', speaker: 'kirana'},
  {start: 90.0, end: 91.42, text: 'Aku nahan tangis.', speaker: 'narator'},
  {start: 91.44, end: 94.06, text: 'Jangan pergi dulu, Kir. Rafli belum piket.', speaker: 'fajar'},
  {start: 94.16, end: 95.7, text: 'Dia ketawa.', speaker: 'narator'},
  {start: 95.72, end: 98.66, text: 'Tenang, kakeknya tetap lebih ganteng.', speaker: 'kirana'},
  {start: 98.68, end: 100.1, text: 'Lalu dia pergi.', speaker: 'narator'},
  {start: 100.1, end: 102.98, text: 'Tenang, bangku itu sekarang cuma bangku.', speaker: 'narator'},
  {start: 103.0, end: 105.22, text: 'Tapi nggak lagi terasa kosong.', speaker: 'narator'},
  {start: 105.32, end: 108.18, text: 'Oh iya, pensilku patah lagi tadi pagi.', speaker: 'narator'},
  {start: 108.18, end: 110.9, text: 'Aku serut sampai habis, biar nggak ada yang gelisah.', speaker: 'narator'},
];
