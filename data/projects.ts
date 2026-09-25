export interface ProjectImages {
  main: string;
  secondary: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  images: ProjectImages;
  client: string;
  techStack: string[];
  desc: string;
  role: string;
  responsibilities: string[];
  impact: string[];
  video?: string;
}

export const projects: Project[] = [
  {
    slug: "cctv-face-recognition",
    title: "CCTV Face Recognition",
    category: "Computer Vision",
    thumbnail: "/images/projects/cctv_face_recog/face_recog_thumb1.png",
    images: {
      main: "/images/projects/cctv_face_recog/face_recog_thumb1.png",
      secondary: ["/images/laptop.webp", "/images/laptop.webp"],
    },
    client: "RSUD Daha Husada",
    techStack: [
      "Laravel",
      "Reverb",
      "Python",
      "Flask",
      "YOLOv8",
      "InsightFace (ArcFace)",
      "Alpine.js",
      "MediaMTX (WHEP)",
      "Hikvision VCA",
    ],
    desc: "Sistem face recognition CCTV dual-mode di RSUD Daha Husada. Sistem 1 memanfaatkan Hikvision VCA alertStream ke Laravel lalu Flask (InsightFace buffalo_l) untuk pengenalan wajah. Sistem 2 sepenuhnya software-based: RTSPReader → YOLOv8 deteksi → InsightFace buffalo_s tracking → strategi 'best frame on track loss' → buffalo_l untuk recognition final, dengan live overlay via MediaMTX WHEP streaming.",
    role: "Fullstack & Computer Vision Developer",
    responsibilities: [
      "Membangun listener Hikvision alertStream dan pipeline face capture, termasuk toolkit simulasi untuk testing lokal",
      "Mengintegrasikan MediaMTX untuk RTSP-to-WHEP streaming dengan live overlay 2-stream MJPEG",
      "Mendesain ulang FaceTracker dua kali untuk strategi 'best frame on track loss' pada sistem software-based",
      "Membangun dashboard health monitoring (CPU/GPU/RAM/disk/FPS, status tiap service) dari nol",
      "Merancang webhook Laravel → Python untuk kontrol RTSP, toggle deteksi per sistem, dan update konfigurasi deteksi",
      "Refactor alur penyimpanan capture: unmatched masuk ke shadow-persons, matched ke face-captures",
    ],
    impact: [
      "Menyatukan dua arsitektur deteksi (hardware VCA dan software YOLOv8) dalam satu sistem yang saling melengkapi",
      "Mengidentifikasi dan mengatasi bottleneck delay database/broadcast pasca-match lewat logging khusus",
      "Menyediakan visibilitas real-time terhadap kesehatan sistem lewat dashboard monitoring",
    ],
    video: "/videos/project/FACE_RECOGNIZE.mp4",
  },
  {
    slug: "cctv-people-counting",
    title: "CCTV People Counting",
    category: "Computer Vision",
    thumbnail: "/images/laptop.webp",
    images: {
      main: "/images/laptop.webp",
      secondary: ["/images/laptop.webp", "/images/laptop.webp"],
    },
    client: "RSUD Daha Husada",
    techStack: ["Python", "YOLOv8", "CVAT", "Nuclio"],
    desc: "Sistem penghitungan jumlah orang dan okupansi ruangan berbasis CCTV di RSUD Daha Husada, dengan pipeline ML self-hosted penuh untuk menggantikan Roboflow demi kepentingan privasi data.",
    role: "Computer Vision Developer",
    responsibilities: [
      "Membangun pipeline anotasi dan fine-tuning YOLOv8s secara self-hosted menggunakan CVAT + Nuclio",
      "Menerapkan active learning dengan perceptual hashing untuk seleksi data",
      "Mengembangkan logika counting berbasis zona (centroid-in-polygon) dengan zone_polygon ternormalisasi",
      "Merancang 4 mode counting per kamera: full screen count, zone count, line cross count, none",
    ],
    impact: [
      "Menghilangkan ketergantungan pada layanan pihak ketiga (Roboflow) untuk data sensitif rumah sakit",
      "Memberikan fleksibilitas mode counting per kamera sesuai kebutuhan tiap area",
    ],
  },
  {
    slug: "patient-tracker",
    title: "Patient Tracker",
    category: "Web App",
    thumbnail: "/images/laptop.webp",
    images: {
      main: "/images/laptop.webp",
      secondary: ["/images/laptop.webp", "/images/laptop.webp"],
    },
    client: "RSUD Daha Husada",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "AES Encryption",
    ],
    desc: "Pelacak perjalanan pasien real-time di RSUD Daha Husada, mencakup alur Admisi → Poliklinik → Penunjang → Kasir, dengan URL pasien terenkripsi dan UI bottom-sheet yang responsif.",
    role: "Frontend Developer",
    responsibilities: [
      "Membangun full patient journey tracker dengan draggable bottom-sheet UI",
      "Mengimplementasikan enkripsi AES + Base64URL untuk parameter no_rawat pada URL pasien",
      "Membuat komponen DraggableBottomSheet dari vanilla Pointer Events setelah Framer Motion bermasalah di performa",
      "Menambahkan dark mode via shadcn CSS variables dan komponen LazyMount untuk optimasi render",
      "Debugging kompatibilitas Safari iPhone 7 Plus (color-mix() tidak didukung di iOS 15.8)",
    ],
    impact: [
      "Meningkatkan transparansi alur pasien bagi staf rumah sakit secara real-time",
      "Menjamin keamanan data pasien lewat URL terenkripsi tanpa mengekspos identitas langsung",
    ],
  },
  {
    slug: "medistaff",
    title: "Medistaff",
    category: "Web App",
    thumbnail: "/images/laptop.webp",
    images: {
      main: "/images/laptop.webp",
      secondary: ["/images/laptop.webp", "/images/laptop.webp"],
    },
    client: "RSUD Daha Husada",
    techStack: ["Laravel", "MySQL"],
    desc: "Sistem HR & payroll untuk rumah sakit, mencakup absensi, penjadwalan, dan penggajian staf.",
    role: "Fullstack Developer",
    responsibilities: [
      "Membangun modul absensi staf rumah sakit",
      "Mengembangkan sistem penjadwalan (shift) staf",
      "Mengimplementasikan perhitungan dan pengelolaan penggajian",
    ],
    impact: ["Mendigitalkan proses HR rumah sakit yang sebelumnya manual"],
  },
  {
    slug: "oss67",
    title: "OSS67",
    category: "Web App",
    thumbnail: "/images/projects/oss67/oss67_thumb.png",
    images: {
      main: "/images/projects/oss67/oss67_thumb.png",
      secondary: ["/images/laptop.webp", "/images/laptop.webp"],
    },
    client: "SMK Kesehatan Bhakti Wiyata & SMK TI Pelita Nusantara",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Cloudinary",
      "Vercel",
    ],
    desc: "Platform landing page publik dan admin dashboard untuk organisasi siswa (OSS67 / OSSEXP) di SMK Kesehatan Bhakti Wiyata & SMK TI Pelita Nusantara, dengan tema Navy & Gold minimalis modern.",
    role: "Frontend Developer",
    responsibilities: [
      "Membangun CRUD manajemen event lengkap dengan slug-based routing",
      "Mengembangkan DocGalleriesPage dengan MasonryPhotoAlbum dan upload ke Cloudinary",
      "Membuat komponen generik DataTable<T> dan CardEvent dengan shadcn DropdownMenu",
      "Menyelesaikan isu deployment: konflik konfigurasi pnpm, case-sensitivity Git di Windows/Linux, dan collision nama icon TypeScript",
      "Mendesain landing page publik dan admin dashboard dengan animasi scroll interaktif",
    ],
    impact: [
      "Menyediakan platform terpusat untuk manajemen event dan galeri dokumentasi organisasi siswa",
      "Deployment stabil di Vercel setelah resolusi berbagai isu lintas platform",
    ],
  },
];
