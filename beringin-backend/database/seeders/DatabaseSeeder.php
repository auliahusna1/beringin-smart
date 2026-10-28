<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Laporan;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Akun Petugas Sarpras
        $petugas = User::create([
            'name' => 'Pak Zulkifli (Koordinator Sarpras)',
            'email' => 'petugas@beringin.sch.id',
            'password' => Hash::make('password123'),
            'role' => 'petugas',
        ]);

        // 2. Akun Siswa Utama
        $siswa = User::create([
            'name' => 'Nurul Husna (XI PPLG 2)',
            'email' => 'husna@beringin.sch.id',
            'password' => Hash::make('password123'),
            'role' => 'siswa',
        ]);

        // 3. Akun Siswa Pendukung
        $teman = User::create([
            'name' => 'M. Rizki (Siswa XI PPLG 2)',
            'email' => 'siswa@beringin.sch.id',
            'password' => Hash::make('password123'),
            'role' => 'siswa',
        ]);

        // 4. Data Awal Laporan Pengaduan Sarpras (Edisi Husna)
        Laporan::create([
            'user_id' => $siswa->id,
            'nama' => 'Proyektor Ruang Multimedia Gambar Bergaris Kuning',
            'lokasi' => 'Ruang Multimedia, Lantai 2',
            'kategori' => 'Laboratorium',
            'deskripsi' => 'Proyektor gantung menampilkan garis-garis artefak warna kuning tebal saat menampilkan slide presentasi.',
            'status' => 'Sedang Diproses',
        ]);

        Laporan::create([
            'user_id' => $teman->id,
            'nama' => 'Pintu Kamar Mandi Siswa Blok Barat Rusak Slotnya',
            'lokasi' => 'Toilet Siswa Lantai 1 Sayap Barat',
            'kategori' => 'Lingkungan/Taman',
            'deskripsi' => 'Kunci slot gerendel pintu toilet nomor 3 patah sehingga tidak bisa dikunci dari dalam oleh siswa.',
            'status' => 'Menunggu',
        ]);

        Laporan::create([
            'user_id' => $siswa->id,
            'nama' => 'Kursi Guru Ruang Teori 3 Patah Sandarannya',
            'lokasi' => 'Ruang Kelas XI PPLG 2',
            'kategori' => 'Fasilitas Kelas',
            'deskripsi' => 'Sandaran kursi busa guru retak pada sambungan besi bawah sehingga berbahaya jika diduduki.',
            'status' => 'Selesai',
        ]);

        Laporan::create([
            'user_id' => $teman->id,
            'nama' => 'Kabel Access Point WiFi Koridor Terjuntai Turun',
            'lokasi' => 'Plafon Lorong Perpustakaan',
            'kategori' => 'Lingkungan/Taman',
            'deskripsi' => 'Kabel UTP patch cord router access point lepas dari klem dinding dan menggantung rendah.',
            'status' => 'Sedang Diproses',
        ]);

        Laporan::create([
            'user_id' => $siswa->id,
            'nama' => 'Papan Tulis Whiteboard Retak di Bagian Sudut',
            'lokasi' => 'Ruang Belajar Teori 3',
            'kategori' => 'Fasilitas Kelas',
            'deskripsi' => 'Lapisan melamin papan tulis mengelupas dan sulit dibersihkan dengan penghapus standar.',
            'status' => 'Selesai',
        ]);
    }
}
