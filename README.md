# Standarisasi Coding — Tugas Pengujian & Integrasi

## Deskripsi

Project ini dibuat untuk menerapkan standar pengujian kode
menggunakan struktur AAA dan integrasi kode melalui GitHub Actions.

Project terdiri dari modul User dan ShoppingCart.

## Teknologi

- Node.js v20
- Jest
- ESLint
- Prettier
- GitHub Actions

## Cara Menjalankan

Install dependencies:

npm install

Menjalankan test:

npm test

Menjalankan coverage:

npm run test:coverage

Menjalankan lint:

npm run lint

Memeriksa format:

npm run format:check

## Coverage

Target coverage: 80%+

## Struktur Project

src/                  Source code
tests/                Unit testing
.github/workflows/    CI workflow

## Author

Nama: Muhammad Farel Dwi Maulana
NIM: [Isi NIM kamu]

## Catatan

- Semua test menggunakan struktur AAA.
- Penamaan test menggunakan should...when...
- Menggunakan GitHub Actions untuk CI.