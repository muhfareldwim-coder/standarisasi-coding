# Analisis Kasus: Tim dengan 15 Developer

## 1. Identifikasi Masalah

Berdasarkan skenario:
- 15 developer, semua commit langsung ke main.
- Tidak ada CI/CD.
- Test coverage 25%.
- Bug production setiap minggu.

### Masalah Utama

| No | Masalah | Dampak |
|---|---|---|
| 1 | Tidak ada branch strategy | Konflik merge dan main sering rusak |
| 2 | Tidak ada code review | Kode berkualitas rendah masuk |
| 3 | Tidak ada CI/CD | Bug tidak terdeteksi sebelum production |
| 4 | Coverage 25% | Regresi tidak terdeteksi |
| 5 | Tidak ada quality gate | Tidak ada standar minimum kualitas |

### Akar Masalah

Kurangnya standarisasi proses integrasi kode.
Semua developer bekerja tanpa aturan yang jelas
tentang bagaimana kode harus diperiksa dan digabungkan.

## 2. Standar yang Harus Diterapkan Pertama

### Prioritas 1 (Minggu 1-2): Branch Protection + Code Review

Alasan:
Mengurangi risiko kerusakan pada branch main.

Aksi:
- Mengaktifkan branch protection.
- Mewajibkan minimal 1 reviewer.

### Prioritas 2 (Minggu 3-4): CI Sederhana

Alasan:
Mendeteksi kesalahan kode lebih awal.

Aksi:
- Menggunakan GitHub Actions.
- Menjalankan lint dan test otomatis.

### Prioritas 3 (Minggu 5-8): Meningkatkan Coverage

Alasan:
Coverage tidak bisa langsung meningkat dari 25% menjadi 80%.

Aksi:
- Menaikkan target coverage secara bertahap.
- Menambahkan unit test pada fitur baru.

### Prioritas 4 (Minggu 9-12): Quality Gate + CD

Alasan:
Memastikan kualitas kode sebelum proses deployment.

Aksi:
- Menambahkan coverage threshold.
- Mengatur deployment otomatis ke staging.

## 3. Roadmap 3 Bulan

### Bulan 1 - Fondasi

- Mengaktifkan branch protection.
- Menerapkan conventional commits.
- Mewajibkan Pull Request dan 1 reviewer.
- Membuat CI dasar.
- Melakukan sosialisasi standar kepada tim.

### Bulan 2 - Peningkatan

- Meningkatkan coverage menjadi 50%.
- Mewajibkan unit test untuk fitur baru.
- Menggunakan coverage reporting.
- Membuat checklist code review.
- Melakukan refactor pada 5 modul penting.

### Bulan 3 - Otomasi Penuh

- Meningkatkan coverage menjadi 70%.
- Mengaktifkan quality gate.
- Mengatur CD ke staging.
- Melengkapi dokumentasi standar.
- Mengevaluasi jumlah bug production.

## 4. Metrik Keberhasilan

| Metrik | Baseline | Target 3 Bulan |
|---|---|---|
| Test coverage | 25% | >=70% |
| Bug production/minggu | ~5 | <=1 |
| Waktu merge PR | Belum diketahui | <1 hari |
| Broken main/bulan | Belum diketahui | 0 |
| Waktu code review | Belum diketahui | <4 jam |