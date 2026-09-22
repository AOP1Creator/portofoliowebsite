/**
 * Main JavaScript File for Ari Okta Pratama Portfolio
 * Theme: Minimalist Light / Editorial Warm
 */

document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi icon Lucide
    if (typeof lucide !== 'undefined') {
        try {
            lucide.createIcons();
        } catch (e) {
            console.error("Gagal memuat Lucide icons:", e);
        }
    }

    // Update tahun copyright otomatis di footer
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // ========================================================
    // Mobile Drawer Navigation (Card Modal Style)
    // ========================================================
    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuCard = document.getElementById('mobile-menu-card');

    function openMobileMenu() {
        if (!mobileMenuOverlay) return;
        mobileMenuOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Mengunci scroll body

        if (typeof lucide !== 'undefined') {
            try { lucide.createIcons(); } catch (e) {}
        }

        // Animasi transisi masuk halus
        requestAnimationFrame(() => {
            mobileMenuOverlay.classList.remove('opacity-0');
            mobileMenuOverlay.classList.add('opacity-100');
            if (mobileMenuCard) {
                mobileMenuCard.classList.remove('scale-95', 'opacity-0');
                mobileMenuCard.classList.add('scale-100', 'opacity-100');
            }
        });
    }

    function closeMobileMenu() {
        if (!mobileMenuOverlay) return;
        if (mobileMenuCard) {
            mobileMenuCard.classList.remove('scale-100', 'opacity-100');
            mobileMenuCard.classList.add('scale-95', 'opacity-0');
        }
        mobileMenuOverlay.classList.remove('opacity-100');
        mobileMenuOverlay.classList.add('opacity-0');

        setTimeout(() => {
            mobileMenuOverlay.style.display = 'none';
            document.body.style.overflow = ''; // Mengembalikan scroll body normal
        }, 250);
    }

    // Buka drawer melalui tombol menu hamburger
    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openMobileMenu();
        });
    }

    // Tutup drawer melalui tombol 'X'
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeMobileMenu();
        });
    }

    // Klik pada area backdrop luar menutup menu
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', (e) => {
            if (e.target === mobileMenuOverlay) {
                closeMobileMenu();
            }
        });
    }

    // Menutup menu saat salah satu link navigasi di dalam menu diklik
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // ========================================================
    // Modal Backdrops & Escape Key Listener
    // ========================================================
    const projectModal = document.getElementById('project-modal');
    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) closeProject();
        });
    }

    const certModal = document.getElementById('certificate-modal');
    if (certModal) {
        certModal.addEventListener('click', (e) => {
            if (e.target === certModal) closeCertificate();
        });
    }

    // Tutup semua modal / drawer dengan tombol Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProject();
            closeCertificate();
            closeMobileMenu();
        }
    });
});

/* ========================================================
   DATA SERTIFIKAT LOMBA (BCC & BPC)
   ======================================================== */
const certificatesData = {
    digcofest: {
        title: "DIGCOFEST GO INTERNATIONAL BCC",
        category: "International BCC • 2024",
        year: "2024",
        event: "DIGCOFEST International BCC - FEB UNESA & PDAM Surya Sembada Surabaya",
        status: "Semi Finalist",
        hasCertificate: true,
        desc: "Sertifikat Semi Finalist Business Case Competition bertaraf internasional FEB UNESA & PDAM Surabaya.",
        image: "https://i.ibb.co.com/sdxB2wfm/Ari-Okta-Pratama-page-0001.jpg"
    },
    intl_mgmt: {
        title: "International Management BCC",
        category: "International BCC • 2024",
        year: "2024",
        event: "International Management Business Case Competition",
        status: "Participant (Tanpa E-Sertifikat)",
        hasCertificate: false,
        note: "Penyelenggara kompetisi ini tidak menerbitkan sertifikat kepesertaan digital resmi.",
        desc: "Analisis problem manajemen strategis dan optimasi operasional perusahaan berskala global.",
        image: ""
    },
    bstartion: {
        title: "BSTARTION 2024",
        category: "Digital Startup Competition • 2024",
        year: "2024",
        event: "B-Startion Digital Start-Up Competition - B-Preneur BINUS University",
        status: "Semi Finalist (Team Vaz Bunga)",
        hasCertificate: true,
        desc: "Semi-Finalist dalam kompetisi rintisan bisnis digital UKM B-Preneur BINUS University.",
        image: "https://i.ibb.co.com/qFn0tbcg/Ari-Okta-Pratama-Semi-Final-page-0001.jpg"
    },
    gem: {
        title: "Gerakan Entrepreneur Muda (GEM) 2025",
        category: "Business Plan • 2025",
        year: "2025",
        event: "Kompetisi Gerakan Entrepreneur Muda (GEM) 2025",
        status: "Official Participant",
        hasCertificate: true,
        desc: "Sertifikat partisipasi kompetisi rencana bisnis terapan GEM 2025.",
        image: "https://i.ibb.co.com/rRCkz28B/ari-okta-pratama.png"
    },
    progressio: {
        title: "Progressio Business Challenge",
        category: "Business Challenge • 2025",
        year: "2025",
        event: "Progressio Business Challenge 2025",
        status: "Participant (Tanpa E-Sertifikat)",
        hasCertificate: false,
        note: "Penyelenggara kegiatan tidak menerbitkan sertifikat kepesertaan digital.",
        desc: "Perumusan strategi bisnis solutif dalam dinamika transformasi digital.",
        image: ""
    },
    recursion: {
        title: "Recursion 1.0",
        category: "Tech & Business Case • 2025",
        year: "2025",
        event: "Recursion 1.0 Tech & Business Competition",
        status: "Participant (Tanpa E-Sertifikat)",
        hasCertificate: false,
        desc: "Kompetisi integrasi teknologi informasi dan strategi bisnis problem industri.",
        image: ""
    },
    nbpc: {
        title: "National Business Plan Competition (NBPC)",
        category: "National BPC • 2025",
        year: "2025",
        event: "National Business Plan Competition 2025",
        status: "Official Participant",
        hasCertificate: true,
        desc: "Kompetisi rencana bisnis nasional uji kelayakan model bisnis dan proyeksi pasar.",
        image: "https://i.ibb.co.com/Y4ZnbtQN/Whats-App-Image-2026-09-18-at-18-52-34-2.jpg"
    },
    econeering: {
        title: "Econeering FTUI 2025",
        category: "Business Plan Competition • 2025",
        year: "2025",
        event: "Business Case Competition Econeering FTUI 2025",
        status: "Official Participant",
        hasCertificate: true,
        desc: "Studi kasus kolaborasi carbon offset dan inovasi dampak lingkungan oleh BEM FTUI.",
        image: "https://i.ibb.co.com/qMyvRcL3/Ari-Okta-Pratama-1-page-0001.jpg"
    },
    logicodix: {
        title: "LOGICODIX 2025",
        category: "Business Plan Competition • 2025",
        year: "2025",
        event: "Business Plan Competition LOGICODIX 2025 - FT UNESA",
        status: "Official Participant",
        hasCertificate: true,
        desc: "Kompetisi rencana bisnis nasional FT UNESA bertema Ignite the Future.",
        image: "https://i.ibb.co.com/d41Zs3JG/Whats-App-Image-2026-09-18-at-17-53-32.jpg"
    }
};

/* Buka Modal Sertifikat */
window.openCertificate = function(certKey) {
    const data = certificatesData[certKey];
    const modal = document.getElementById('certificate-modal');
    if (!data || !modal) return;

    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text || '';
    };

    setText('cert-modal-title', data.title);
    setText('cert-modal-category', data.category);
    setText('cert-modal-event', data.event);
    setText('cert-modal-year', data.year);
    setText('cert-modal-status-text', data.status);
    setText('cert-modal-desc', data.desc);

    const imgContainer = document.getElementById('cert-modal-image-container');
    const noImgNotice = document.getElementById('cert-modal-no-image');
    const certImg = document.getElementById('cert-modal-image');
    const certLink = document.getElementById('cert-modal-link');
    const certVerifiedBadge = document.getElementById('cert-modal-verified');
    const certNoteText = document.getElementById('cert-modal-note-text');
    const certStatusContainer = document.getElementById('cert-modal-status');

    if (data.hasCertificate && data.image) {
        if (imgContainer) imgContainer.style.display = 'flex';
        if (noImgNotice) noImgNotice.style.display = 'none';
        if (certImg) {
            certImg.src = data.image;
            certImg.alt = `Sertifikat ${data.title}`;
        }
        if (certLink) {
            certLink.href = data.image;
            certLink.style.display = 'inline-flex';
        }
        if (certVerifiedBadge) {
            certVerifiedBadge.innerHTML = `
                <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i>
                <span class="text-stone-700">Dokumen Terverifikasi & Resmi</span>
            `;
        }
        if (certStatusContainer) {
            certStatusContainer.className = 'text-emerald-700 text-xs font-semibold flex items-center gap-1.5';
        }
    } else {
        if (imgContainer) imgContainer.style.display = 'none';
        if (noImgNotice) noImgNotice.style.display = 'flex';
        if (certNoteText) {
            certNoteText.textContent = data.note || "Penyelenggara kegiatan ini tidak menerbitkan sertifikat kepesertaan digital resmi.";
        }
        if (certLink) certLink.style.display = 'none';
        if (certVerifiedBadge) {
            certVerifiedBadge.innerHTML = `
                <i data-lucide="info" class="w-4 h-4 text-amber-600"></i>
                <span class="text-amber-800">Catatan: Sertifikat Tidak Diterbitkan</span>
            `;
        }
        if (certStatusContainer) {
            certStatusContainer.className = 'text-stone-500 text-xs font-semibold flex items-center gap-1.5';
        }
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    if (typeof lucide !== 'undefined') {
        try { lucide.createIcons(); } catch(e) {}
    }
};

/* Tutup Modal Sertifikat */
window.closeCertificate = function() {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
};

/* ========================================================
   DATA PROYEK PORTOFOLIO
   ======================================================== */
const projectsData = {
    agilis: {
        title: "Agilis",
        category: "Gamification Lifestyle App(BPC)",
        desc: "Aplikasi mobile inovatif yang dirancang untuk membantu pengguna mengelola kebiasaan harian dan produktivitas dengan elemen gamifikasi.",
        role: "UI/UX Designer, Financial Analysis",
        timeline: "Februari 2024 - Mei 2024",
        tech: "Figma, Excel",
        image: "https://i.ibb.co.com/VWc8RjyK/Whats-App-Image-2026-09-19-at-12-47-53.jpg",
        tasks: [
            "Melakukan User Research terhadap pola produktivitas harian anak muda.",
            "Merancang User Flow, Wireframe, hingga visual Mockup High-Fidelity di Figma.",
            "Mendesain sistem visual gamifikasi (level bar, quest card, lencana).",
            "Membangun interactive prototype mikro interaksi dan mengujinya ke pengguna.",
            "Menganalisis aspek finansial produk, termasuk estimasi biaya operasional, proyeksi pendapatan, serta potensi Return on Investment (ROI)."

        ]
    },
    howl: {
        title: "Howl Library & Creative Space",
        category: "Web Administration & Reservation(BPC)",
        desc: "Platform manajemen terpadu perpustakaan digital dan sistem reservasi ruang kreatif secara real-time.",
        role: "Frontend Developer & UI Designer",
        timeline: "Januari 2025 - Juni 2025",
        tech: "Laravel, PHP, Bootstrap, MySQL",
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=80",
        tasks: [
            "Merancang dashboard admin yang intuitif untuk mengelola buku dan peminjaman.",
            "Mengembangkan antarmuka katalog perpustakaan digital dan formulir reservasi studio.",
            "Mengintegrasikan frontend dengan backend Laravel dan endpoint API reservasi.",
            "Melakukan pengujian responsivitas antarmuka di berbagai perangkat."
        ]
    },
    eatventory: {
        title: "SmartMeal",
        category: "SaaS Kitchen Inventory & Tracker(BPC)",
        desc: "Aplikasi pelacak inventaris dapur pintar untuk meminimalkan sisa makanan (food waste) dengan pengingat tanggal kedaluwarsa.",
        role: "UI/UX Designer, Financial Analysis",
        timeline: "Februari 2025 - Mei 2025",
        tech: "Figma",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80",
        tasks: [
            "Merancang UI/UX dashboard inventaris dengan pendekatan bento-grid untuk menciptakan tampilan yang intuitif dan informatif.",
            "Mendesain visualisasi data stok bahan makanan dan masa simpan agar informasi mudah dipahami oleh pengguna.",
            "Menyusun user flow, wireframe, hingga high-fidelity prototype untuk fitur monitoring inventaris dan pengingat masa simpan",
            "Melakukan Financial Analysis untuk mengestimasi biaya pengembangan, potensi pendapatan, serta kelayakan finansial produk.",

        ]
    },
    damakara: {
        title: "DAMAKARA",
        category: "E-Commerce & Sustainable Fashion Web",
        desc: "Platform e-commerce dan katalog busana digital interaktif untuk brand fesyen lokal Damakara. Proyek ini memadukan nilai artistik karya seni inklusif—yang digambar oleh individu berkebutuhan khusus—dengan arsitektur belanja daring modern yang responsif, terstruktur, dan ramah pengguna.",
        role: "UI/UX Designer & Frontend Developer",
        timeline: "November 2024 - Februari 2025",
        tech: "Figma, React, Tailwind CSS, REST API",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80",
        tasks: [
            "Melakukan user research dan merancang antarmuka e-commerce berfokus pada kemudahan eksplorasi katalog busana serta konversi belanja.",
            "Mendesain Design System, wireframe, hingga prototype high-fidelity di Figma yang mencerminkan identitas brand yang hangat dan inklusif.",
            "Mengembangkan komponen katalog produk responsif, fitur filter koleksi dinamis, dan keranjang belanja berbasis React & Tailwind CSS.",
            "Mengoptimalkan kinerja rendering halaman produk serta memastikan pengalaman mobile-first berjalan mulus di seluruh resolusi layar."
        ]
    },
    curhatinaja: {
        title: "CurhatinAja",
        category: "UI/UX Research & Mental Health Platform",
        desc: "Platform ruang aman daring anonim bagi pengguna untuk berbagi cerita dan terhubung dengan peer-counselor terlatih.",
        role: "UX Researcher & UI Designer",
        timeline: "Agustus 2024 - November 2024",
        tech: "Figma, FigJam, Miro",
        image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=800&auto=format&fit=crop&q=80",
        tasks: [
            "Menyusun User Persona, Empathy Map, dan User Journey Map melalui wawancara pengguna.",
            "Merancang antarmuka ruang percakapan anonim yang menjaga privasi.",
            "Menerapkan psikologi warna menenangkan (calming soft tones).",
            "Melakukan usability testing alur tanggap darurat dan kepatuhan kontras."
        ]
    },
    clevago: {
        title: "ClevaGo",
        category: "Mobile Smart Travel Companion",
        desc: "Aplikasi pendamping perjalanan cerdas berbasis lokasi yang menyusun rencana perjalanan harian (itinerary) secara otomatis.",
        role: "UI/UX Designer",
        timeline: "Oktober 2024 - Januari 2025",
        tech: "Figma, Adobe Illustrator",
        image: "https://i.ibb.co.com/93TRYBr6/logo-1.png",
        tasks: [
            "Merancang alur onboarding intuitif untuk memetakan budget dan minat pengguna.",
            "Mendesain tampilan peta rute interaktif dengan rute dan estimasi waktu.",
            "Membuat prototipe interaktif pemesanan tiket wisata mandiri di Figma.",
            "Menyusun Design System komprehensif untuk standarisasi aplikasi."
        ]
    },
    filmint: {
        title: "Filmint",
        category: "Minimalist Movie Recommendation Engine",
        desc: "Mesin pencari rekomendasi film minimalis yang terintegrasi dengan database TMDB API.",
        role: "Frontend Developer",
        timeline: "Desember 2024 - Februari 2025",
        tech: "React, Tailwind CSS, REST API",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=80",
        tasks: [
            "Menghubungkan antarmuka web dengan REST API TMDB secara real-time.",
            "Membangun fitur filter multi-kategori (genre, rating IMDb, tahun rilis).",
            "Merancang grid poster film responsif dengan cuplikan sinopsis interaktif.",
            "Menerapkan lazy-loading poster beresolusi tinggi guna menghemat kuota."
        ]
    },
    jejakbandung: {
        title: "Jejak Bandung",
        category: "Interactive Heritage Tour Guide",
        desc: "Platform penjelajahan sejarah kota Bandung yang menyajikan titik bersejarah, arsip foto lawas, dan rute jelajah mandiri.",
        role: "Fullstack Developer & Designer",
        timeline: "Januari 2025 - Maret 2025",
        tech: "Next.js, Tailwind CSS, MySQL, LeafletJS",
        image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1200&auto=format&fit=crop&q=80",
        tasks: [
            "Merancang identitas visual dan antarmuka bernuansa heritage retro-modern.",
            "Mengintegrasikan peta interaktif berbasis LeafletJS untuk rute jalan kaki cagar budaya.",
            "Mengelola arsitektur database MySQL untuk lokasi bersejarah dan arsip foto lawas.",
            "Mengimplementasikan Server-Side Rendering (SSR) Next.js untuk performa optimal."
        ]
    }
};

/* Buka Modal Proyek */
window.openProject = function(projectKey) {
    const data = projectsData[projectKey];
    const modal = document.getElementById('project-modal');
    if (!data || !modal) return;

    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text || '';
    };

    setText('modal-title', data.title);
    setText('modal-category', data.category);
    setText('modal-desc', data.desc);
    setText('modal-role', data.role);
    setText('modal-timeline', data.timeline);
    setText('modal-tech', data.tech);

    const modalImg = document.getElementById('modal-image');
    if (modalImg) {
        modalImg.src = data.image;
        modalImg.alt = data.title;
        modalImg.style.display = 'block';
    }

    const listContainer = document.getElementById('modal-tasks');
    if (listContainer) {
        listContainer.innerHTML = '';
        data.tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = 'text-stone-700 text-xs sm:text-sm leading-relaxed';
            li.textContent = task;
            listContainer.appendChild(li);
        });
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
};

/* Tutup Modal Proyek */
window.closeProject = function() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
};