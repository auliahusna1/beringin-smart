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
        $siswa_utama = User::create([
            'name' => 'Nurul Husna (XI PPLG 2)',
            'email' => 'husna@beringin.sch.id',
            'password' => Hash::make('password123'),
            'role' => 'siswa',
        ]);

        // 3. Akun Siswa Pendukung
        $siswa_pendukung = User::create([
            'name' => 'Muhammad Rizki (XI PPLG 1)',
            'email' => 'siswa@beringin.sch.id',
            'password' => Hash::make('password123'),
            'role' => 'siswa',
        ]);

        // 4. Data Awal Laporan Pengaduan Sarpras (Edisi Husna)
        
        Laporan::create([
            'user_id' => $siswa_utama->id,
            'judul' => 'Plafon Asbes Selasar Depan Ruang Tata Usaha Bolong',
            'deskripsi' => 'Plafon asbes jebol terkena rembesan air talang dan serpihannya berisiko jatuh menimpa orang lewat.',
            'lokasi' => 'Selasar Depan Kantor TU',
            'kategori' => 'Lingkungan Sekolah',
            'foto' => null,
            'status' => 'diproses',
        ]);

        Laporan::create([
            'user_id' => $siswa_pendukung->id,
            'judul' => 'AC Ruang Lab Jaringan Tidak Dingin & Bocor Air',
            'deskripsi' => 'Unit AC indoor meneteskan air ke lantai dan suhu ruangan tetap panas saat praktikum server.',
            'lokasi' => 'Lab Jaringan Komputer Gedung C',
            'kategori' => 'Lab & Bengkel',
            'foto' => null,
            'status' => 'selesai',
        ]);

        Laporan::create([
            'user_id' => $siswa_utama->id,
            'judul' => 'Kran Tempat Cuci Tangan Musholla Guru Patah',
            'deskripsi' => 'Kran air bagian kiri patah di pangkal drat pipa sehingga air menyemprot tidak terkontrol.',
            'lokasi' => 'Musholla Al-Ikhlas SMKN 1',
            'kategori' => 'Fasilitas Umum',
            'foto' => null,
            'status' => 'menunggu',
        ]);

    }
}
