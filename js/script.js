// ==============================
// Dropdown Bahasa
// ==============================
const switcher = document.getElementById("languageSwitcher");

// Data translasi
const translations = {
    id: {
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_services: "Layanan",
        nav_article: "Artikel",
        nav_advantages: "Keunggulan",
        nav_commitmenttoexcellence: "Komitmen pada Keunggulan",
        nav_principles: "Prinsip",
        nav_lawyers: "Pengacara",
        nav_contact: "Kontak",
        consult_email: "Konsultasi via Email",
        hero_badge: "Kami tidak meminta kepercayaan, tapi kami akan membuktikannya",
        hero_title:
            "Solusi Hukum yang <span class='gradient-text'>Tuntas, Strategis </span> & Terpercaya",
        hero_desc:
            "Kami mendampingi individu dan korporasi dalam litigasi maupun non-litigasi dengan standar profesional tertinggi.",
        see_services: "Lihat Layanan",
        tagline:
            'Tagline: "Kami tidak meminta kepercayaan, tapi kami akan membuktikannya"',
        send_email: "Kirim Email",
        about_point1: "Profesionalisme & integritas tinggi",
        about_point2: "Pendekatan strategis & terukur",
        about_point3: "Responsif, konsultatif, dan solutif",
        about_point4: "Menjunjung kode etik profesi",
        litigation: "Litigasi",
        labor_law: "Hukum Ketenagakerjaan",
        criminal_law: "Hukum Pidana",
        civil_law: "Hukum Perdata",
        non_litigation: "Non-Litigasi",
        legal_opinion: "Konsultasi & Legal Opinion",
        contract_review: "Drafting & Review Kontrak",
        industrial_relation: "Hubungan Industrial",
        lawyer_role: "Mitra Pengelola",
        lawyer_role1: "Mitra",
        lawyer_contact: "18 Office Park Building, Jl. TB Simatupang No.Kav. 18 lantai 21 Unit C, Kebagusan, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12520",
        about_1: "Tentang Kami",
        layanan: "Layanan Kami",
        jenis_layanan: "Litigasi",
        jenis_layanan1: "Non-Litigasi",
        data_layanan: "Hukum Ketenagakerjaan",
        data_layanan1: "Hukum Pidana",
        data_layanan2: "Hukum Perdata",
        data_layanan3: "Konsultasi & Legal Opinion",
        data_layanan4: "Drafting & Review Kontrak",
        data_layanan5: "Hubungan Industrial",
        keunggulan: "Mengapa Memilih Kami",
        keunggulan_1: "01. Tim Profesional & Kompeten",
        keunggulan_2: "02. Pendekatan Strategis & Terukur",
        keunggulan_3: "03. Konsultatif & Responsif",
        keunggulan_4: "04. Etika & Integritas",
        keunggulan_12: "Dipimpin oleh advokat berpengalaman, kami memahami dinamika hukum dari sisi praktisi maupun pelaku bisnis.",
        keunggulan_22: "Setiap langkah hukum kami didasarkan pada analisis mendalam dan solusi yang aplikatif.",
        keunggulan_33: "Kami siap menjadi mitra hukum yang menjawab setiap kebutuhan klien, kapan pun dibutuhkan.",
        keunggulan_44: "Kami menjunjung tinggi kode etik profesi sebagai landasan dalam setiap tindakan hukum.",
        komitmen: "Nilai & Komitmen",
        komitmen_1: "S – Berorientasi Layanan",
        komitmen_2: "I – Inklusivitas",
        komitmen_3: "M – Teliti",
        komitmen_4: "P – Profesional",
        komitmen_5: "A – Akurat",
        komitmen_6: "T – Dapat Dipercaya",
        komitmen_7: "I – Integritas",
        komitmen_11: "Kebutuhan dan kepuasan klien sebagai prioritas utama.",
        komitmen_21: "Menciptakan ruang dimana setiap orang merasa diterima dan dihargai.",
        komitmen_31: "Cermat (efektif & efisiensi) penyelesaian pekerjaan.",
        komitmen_41: "Bekerja dengan standar tinggi, etika, dan tanggung jawab.",
        komitmen_51: "Bekerja dengan tepat dan minim kesalahan.",
        komitmen_61: "Dapat dipercaya dan menjaga amanah.",
        komitmen_71: "Melakukan hal yang benar bahkan ketika tidak ada orang yang melihat.",        
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_article: "Article",
        nav_advantages: "Advantages",
        nav_commitmenttoexcellence: "Commitment to Excellence",
        nav_principles: "Principles",
        nav_lawyers: "Lawyers",
        nav_contact: "Contact",
        consult_email: "Consult via Email",
        hero_badge: "We Don’t Ask for Trust, But We Will Prove It",
        hero_title:
            "Legal Solutions that are <span class='gradient-text'>Comprehensive, Strategic </span> & Reliable",
        hero_desc:
            "We assist individuals and corporations in both litigation and non-litigation with the highest professional standards.",
        see_services: "See Services",
        tagline: 'Tagline: "We Don’t Ask for Trust, But We Will Prove It"',
        send_email: "Send Email",
        about_point1: "High professionalism & integrity",
        about_point2: "Strategic & measurable approach",
        about_point3: "Responsive, consultative, and solution-oriented",
        about_point4: "Upholding the professional code of ethics",
        litigation: "Litigation",
        labor_law: "Labor Law",
        criminal_law: "Criminal Law",
        civil_law: "Civil Law",
        non_litigation: "Non-Litigation",
        legal_opinion: "Consultation & Legal Opinion",
        contract_review: "Contract Drafting & Review",
        industrial_relation: "Industrial Relations",
        lawyer_role: "Managing Partner",
        lawyer_role1: "Partner",
        lawyer_contact: "18 Office Park Building, 21st Floor, Unit C, Jl. TB Simatupang No. 18 Kav,Kebagusan, Pasar Minggu, South Jakarta City, Special Capital Region of Jakarta 12520",
        about_1: "About Us",
        layanan: "Our Services",
        jenis_layanan: "Litigation",
        jenis_layanan1: "Non-Litigation",
        data_layanan: "Labor Law",
        data_layanan1: "Criminal Law",
        data_layanan2: "Civil Law",
        data_layanan3: "Consultation & Legal Opinion",
        data_layanan4: "Contract Drafting & Review",
        data_layanan5: "Industrial Relations",
        keunggulan: "Why Choose Us",
        keunggulan_1: "01. Professional & Competent Team",
        keunggulan_2: "02. Strategic & Measured Approach",
        keunggulan_3: "03. Consultative & Responsive",
        keunggulan_4: "04. Ethics & Integrity",
        keunggulan_12: "Led by experienced advocates, we understand the dynamics of law from both practitioner and business perspectives.",
        keunggulan_22: "Every legal step we take is based on in-depth analysis and practical solutions.",
        keunggulan_33: "We are ready to be a legal partner that addresses every client’s needs, anytime.",
        keunggulan_44: "We uphold professional ethics as the foundation of every legal action.",
        komitmen: "Values & Commitment",
        komitmen_1: "S – Service Oriented",
        komitmen_2: "I – Inclusivity",
        komitmen_3: "M – Meticulous",
        komitmen_4: "P – Professional",
        komitmen_5: "A – Accurate",
        komitmen_6: "T – Trustworthy",
        komitmen_7: "I – Integrity",
        komitmen_11: "Client needs and satisfaction are the top priority.",
        komitmen_21: "Creating a space where everyone feels accepted and respected.",
        komitmen_31: "Thorough (effective & efficient) in completing work.",
        komitmen_41: "Working with high standards, ethics, and responsibility.",
        komitmen_51: "Working precisely with minimal errors.",
        komitmen_61: "Reliable and keeping entrusted responsibilities.",
        komitmen_71: "Doing the right thing even when no one is watching.",
    },
};

// Fungsi update bahasa
function updateLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach((el) => {
        let key = el.getAttribute("data-translate");
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // update atribut data-flag untuk CSS bendera
    switcher.setAttribute("data-flag", lang);
}

// Set default Indonesia
updateLanguage("id");

// Event saat pilihan bahasa berubah
switcher.addEventListener("change", (e) => {
    updateLanguage(e.target.value);
});

// ==============================
// Slider Otomatis (Hero / Home)
// ==============================
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;
    const nextBtn = document.querySelector(".next-slide");
    const prevBtn = document.querySelector(".prev-slide");

    let index = 0;
    let interval;

    // Fungsi pindah slide
    function showSlide(i) {
        index = (i + totalSlides) % totalSlides; // biar tidak keluar index
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    // Auto slide tiap 1 menit (60.000 ms)
    function startAutoSlide() {
        interval = setInterval(() => {
            showSlide(index + 1);
        }, 60000);
    }

    // Tombol Next
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            clearInterval(interval); // reset timer
            showSlide(index + 1);
            startAutoSlide();
        });
    }

    // Tombol Prev
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            clearInterval(interval); // reset timer
            showSlide(index - 1);
            startAutoSlide();
        });
    }

    // Jalankan pertama kali
    showSlide(index);
    startAutoSlide();
});


