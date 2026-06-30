export type Project = {
  id: string;
  title: string;
  desc: string;
  fullDesc: string;
  category: "Real Project" | "Exploration";
  tags: string[];
  placeholderText: string;
  imageUrl?: string;
  repoUrl?: string;
  demoUrl?: string;
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "p1",
    title: "Zonapetik: Fitur Kalender Tanam & Prediksi Iklim (Holt-Winters & LSTM)",
    desc: "Sistem pendukung keputusan pertanian interaktif berbasis web untuk memprediksi curah hujan dan menyusun Kalender Tanam dinamis menggunakan dua pemodelan machine learning time-series.",
    fullDesc: "Zonapetik adalah data-driven agricultural decision support system berskala modular yang dirancang untuk analisis cuaca dan simulasi Kalender Tanam padi. Proyek ini dibangun secara tim dengan arsitektur termodular (Hono.js & Next.js). Di dalam kolaborasi ini, peran utama saya secara krusial difokuskan pada perbaikan (optimasi) User Interface (UI) di sisi Frontend, serta perancangan logika dan integrasi model pemodelan Machine Learning LSTM untuk proyeksi data iklim BMKG/NASA.",
    category: "Real Project",
    tags: ["Next.js 15", "React Query", "Hono.js", "MongoDB", "Python (LSTM & Holt-Winters)"],
    placeholderText: "Zonapetik x LSTM",
    imageUrl: "/assets/zonapetik-landing.webp",
    repoUrl: "https://github.com/kiramDz/tumbuh-baik",
    demoUrl: "https://www.zonapetik.tech/"
  },
  {
    id: "p2",
    title: "NexHR — Enterprise HRIS Dashboard",
    desc: "Sistem Informasi Manajemen Sumber Daya Manusia tersentralisasi dengan fitur Role-Based Access Control (RBAC) ketat dan pengarsipan Soft-Delete.",
    fullDesc: "NexHR adalah sistem informasi manajemen sumber daya manusia yang dirancang untuk perusahaan menengah hingga besar. Fokus utama aplikasi ini adalah mengelola struktur organisasi (Jabatan & Departemen), data kehadiran, serta profil karyawan secara jelas dan aman.\n\nSistem ini dipersenjatai dengan pemisahan akses yang ketat (Role-Based Access Control) antara Staf Operasional HR dan Super Admin atas data rahasia. Fitur unggulan tambahannya meliputi sistem pengarsipan berlapis (Soft-Delete) yang mencegah terhapusnya data perusahaan secara prematur, serta sistem ekspor laporan CSV cerdas yang otomatis menyembunyikan kolom sensitif (seperti angka nominal gaji) apabila diunduh oleh staf tanpa wewenang penuh.",
    category: "Exploration",
    tags: ["Next.js", "PostgreSQL", "Prisma ORM", "RBAC", "TypeScript"],
    placeholderText: "NexHR Dashboard",
    imageUrl: "/assets/NexHR.webp",
    repoUrl: "https://github.com/MRKOsius/Manajemen-Karyawan",
    demoUrl: "https://manajemen-karyawan-phi.vercel.app/"
  }
];
