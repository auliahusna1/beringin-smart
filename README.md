# Beringin Smart — Portal Pengaduan Sarana & Prasarana Sekolah
> **Edisi Khusus: Nurul Husna (XI PPLG 2)**  
> **SMK Negeri 1 Beringin • Tahun Ajaran 2026/2027**  
> Standar Kompetensi Kerja Nasional Indonesia (SKKNI) No. 282 Tahun 2016  
> Tema Identitas Antarmuka: **Forest Pine & Fresh Emerald Sage**

---

## 📌 Deskripsi Proyek
**Beringin Smart (Husna Edition)** adalah aplikasi layanan pelaporan kerusakan sarana dan prasarana lingkungan sekolah berbasis Mobile & Web responsif di SMK Negeri 1 Beringin. Aplikasi ini dirancang untuk mempermudah siswa melaporkan kendala fasilitas secara real-time dan transparan ke tim sarpras sekolah.

Arsitektur Teknologi:
- **Backend**: Laravel 11 RESTful API + Autentikasi Sanctum
- **Frontend**: React 18 + Ionic Framework v8 + TypeScript + Vite Bundler
- **Database**: MySQL 8.4 (Port 3306)
- **Tema Visual**: Nuansa elegan **Forest Pine & Fresh Emerald Sage**

---

## 👥 Hak Akses & Kredensial Uji Coba

| Peran (Role) | Nama Pengguna | Alamat Email | Kata Sandi |
|---|---|---|---|
| **Siswa Utama** | Nurul Husna | `husna@beringin.sch.id` | `password123` |
| **Petugas Sarpras** | Staf Pemeliharaan Sarpras | `petugas@beringin.sch.id` | `password123` |
| **Siswa Pendukung** | Siswa SMKN 1 Beringin | `siswa@beringin.sch.id` | `password123` |

---

## 📸 Dokumentasi & Bukti Pengujian Antarmuka (11 Screenshot)

### 1. Antarmuka Portal Masuk Pengguna (Login)
![01. Login](screenshots/lap_01_halaman_masuk_pengguna.png)

---

### 2. Validasi Keamanan (Error Handling Login Gagal)
![02. Validasi Gagal](screenshots/lap_02_uji_sandi_salah_keamanan.png)

---

### 3. Dashboard Beranda Siswa
![03. Dashboard Siswa](screenshots/lap_03_antarmuka_utama_siswa.png)

---

### 4. Detail Laporan Sarpras (Tampilan Siswa)
![04. Detail Siswa](screenshots/lap_04_tampilan_tiket_fasilitas.png)

---

### 5. Filter Penyaringan Kategori Sarpras
![05. Filter Kategori](screenshots/lap_05_penyaringan_data_kategori.png)

---

### 6. Formulir Tambah Pengaduan Kerusakan
![06. Form Tambah](screenshots/lap_06_form_lapor_kendala_sarpras.png)

---

### 7. Konfirmasi Tiket Baru Tersimpan
![07. Tiket Baru](screenshots/lap_07_penerimaan_laporan_sukses.png)

---

### 8. Dashboard Panel Petugas Sarpras
![08. Dashboard Petugas](screenshots/lap_08_portal_penanganan_petugas.png)

---

### 9. Panel Aksi Tindak Lanjut Petugas
![09. Panel Petugas](screenshots/lap_09_tindakan_petugas_lapangan.png)

---

### 10. Status Pekerjaan Selesai
![10. Status Selesai](screenshots/lap_10_penyelesaian_tiket_selesai.png)

---

### 11. Pengujian Antarmuka Smartphone (Mobile)
![11. Mobile View](screenshots/lap_11_tampilan_responsif_smartphone.png)

---

## 🚀 Panduan Menjalankan di Komputer Lokal

### 1. Menjalankan Backend API
```powershell
cd D:\Husna\beringin-backend
php artisan serve
```

### 2. Menjalankan Frontend
```powershell
cd D:\Husna\Beringin-Smart
npm run dev
```
Akses di browser: `http://localhost:5173`
