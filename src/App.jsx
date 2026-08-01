import { useEffect, useId, useState } from "react";
import {
  ArrowRight,
  Blueprint,
  CaretDown,
  CheckCircle,
  Crosshair,
  EnvelopeSimple,
  Factory,
  Hammer,
  List,
  MapPin,
  Package,
  Phone,
  Ruler,
  Scissors,
  ShieldCheck,
  Truck,
  UploadSimple,
  WhatsappLogo,
  X,
} from "@phosphor-icons/react";
import {
  capacityRows,
  portfolioItems,
  processSteps,
  technicalStats,
} from "./content.js";

const whatsappNumber = "628112748787";
const whatsappIntro = encodeURIComponent(
  "Halo Braling Inti Logam, saya ingin konsultasi mengenai kebutuhan fabrikasi logam.",
);
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappIntro}`;

const services = [
  {
    icon: Crosshair,
    title: "Cutting Laser CNC",
    description:
      "Pemotongan presisi untuk berbagai jenis plat dengan hasil rapi dan toleransi terjaga.",
    detail: "Cocok untuk komponen mesin, panel, dekorasi, dan produksi berulang.",
  },
  {
    icon: Ruler,
    title: "Bending Plat",
    description:
      "Tekuk plat akurat dengan sudut dan dimensi yang konsisten sesuai gambar kerja.",
    detail: "Untuk box panel, bracket, ducting, rangka, dan part fabrikasi custom.",
  },
  {
    icon: Scissors,
    title: "Potong Shearing",
    description:
      "Pemotongan plat lurus yang cepat dan efisien untuk kebutuhan skala kecil hingga besar.",
    detail: "Hasil potong bersih, ukuran konsisten, dan siap masuk proses berikutnya.",
  },
];

const processIcons = [Blueprint, Ruler, Factory, Truck];

const faqs = [
  {
    question: "Apakah bisa melayani pesanan satuan?",
    answer:
      "Bisa. Kami melayani kebutuhan prototipe atau satuan hingga produksi partai. Informasikan jumlah pada saat konsultasi agar proses dan penawaran dapat disesuaikan.",
  },
  {
    question: "Format file desain apa yang dapat dikirim?",
    answer:
      "Anda dapat mengirim DXF, DWG, PDF, atau gambar berukuran jelas. Jika belum memiliki file siap produksi, kirim sketsa dan ukuran untuk kami review terlebih dahulu.",
  },
  {
    question: "Apakah menerima pengiriman ke luar Purbalingga?",
    answer:
      "Ya. Pesanan dapat dikirim ke berbagai wilayah Indonesia. Biaya dan pilihan ekspedisi dikonfirmasi sesuai dimensi, berat, dan tujuan pengiriman.",
  },
  {
    question: "Berapa lama proses pengerjaan?",
    answer:
      "Durasi bergantung pada material, ketebalan, kompleksitas, dan jumlah. Estimasi diberikan setelah gambar dan kebutuhan Anda selesai direview.",
  },
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Braling Inti Logam, kembali ke awal">
      <img
        className="brand__mark"
        src="/assets/braling-mark.png"
        alt=""
        width="56"
        height="56"
      />
      <span className="brand__text">
        <span>BRALING INTI LOGAM</span>
        <small>PRESISI DALAM SETIAP POTONGAN</small>
      </span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const closeWithEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeWithEscape);
    return () => window.removeEventListener("keydown", closeWithEscape);
  }, []);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container nav-shell">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <List aria-hidden="true" />}
        </button>

        <nav
          className={`main-nav ${menuOpen ? "main-nav--open" : ""}`}
          id={menuId}
          aria-label="Navigasi utama"
        >
          <div className="main-nav__links">
            <a href="#layanan" onClick={closeMenu}>Layanan <CaretDown aria-hidden="true" /></a>
            <a href="#kapasitas" onClick={closeMenu}>Kapasitas</a>
            <a href="#portofolio" onClick={closeMenu}>Portofolio</a>
            <a href="#tentang" onClick={closeMenu}>Tentang Kami</a>
            <a href="#kontak" onClick={closeMenu}>Kontak</a>
          </div>
          <a
            className="button button--primary nav-cta"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <WhatsappLogo aria-hidden="true" /> Minta Penawaran
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__copy">
        <div className="hero__copy-inner" data-reveal="left">
          <h1 id="hero-title">Laser Cutting &amp; Fabrikasi Logam Presisi Hingga 20 mm</h1>
          <span className="hero__rule" aria-hidden="true" />
          <p className="hero__lead">
            Menerima Mild Steel, Stainless Steel, Aluminium, dan Brass—dari
            prototipe hingga produksi partai dengan quality control sebelum kirim.
          </p>
          <ul className="hero__specs" aria-label="Spesifikasi utama">
            <li><strong>1500 × 3000 mm</strong><span>Area kerja mock</span></li>
            <li><strong>±0.1 mm</strong><span>Toleransi mock</span></li>
            <li><strong>DXF / DWG / STEP</strong><span>File siap review</span></li>
          </ul>
          <div className="hero__actions">
            <a
              className="button button--primary"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              Kirim Drawing &amp; Minta Penawaran <ArrowRight aria-hidden="true" />
            </a>
            <a className="button button--secondary" href="#kapasitas">
              Lihat Kapasitas <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="hero__media" data-reveal="image">
        <img
          src="/assets/hero-laser-cutting.webp"
          alt="Mesin laser CNC memotong plat logam dengan percikan api"
          width="1600"
          height="1000"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Ringkasan kapasitas teknis">
      <div className="container trust-strip__grid">
        {technicalStats.map(({ value, label }, index) => (
          <article
            className="trust-item"
            key={value}
            data-reveal="up"
            style={{ "--reveal-delay": `${index * 90}ms` }}
          >
            <div>
              <strong>{value}</strong>
              <p>{label}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CapacityMatrix() {
  return (
    <section className="section capacity" id="kapasitas" aria-labelledby="capacity-title">
      <div className="container">
        <div className="section-heading capacity__heading" data-reveal="up">
          <div>
            <h2 id="capacity-title">Spesifikasi yang Engineer Butuhkan di Awal</h2>
          </div>
          <div className="capacity__intro">
            <span className="mock-badge">Data mock presentasi</span>
            <p>Angka berikut adalah contoh kapasitas dan wajib divalidasi bersama tim produksi sebelum publikasi komersial.</p>
          </div>
        </div>
        <p className="table-scroll-hint"><ArrowRight aria-hidden="true" /> Geser tabel untuk melihat seluruh spesifikasi</p>
        <div className="capacity-table-wrap" data-reveal="up">
          <table>
            <caption className="sr-only">Kapasitas laser cutting berdasarkan material</caption>
            <thead>
              <tr>
                <th scope="col">Material</th>
                <th scope="col">Ketebalan</th>
                <th scope="col">Toleransi</th>
                <th scope="col">Contoh aplikasi</th>
              </tr>
            </thead>
            <tbody>
              {capacityRows.map((row) => (
                <tr key={row.material}>
                  <th scope="row">{row.material}</th>
                  <td>{row.thickness}</td>
                  <td>{row.tolerance}</td>
                  <td>{row.useCase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="capacity__footer" data-reveal="up">
          <span><Ruler aria-hidden="true" /> Meja kerja mock 1500 × 3000 mm</span>
          <span><ShieldCheck aria-hidden="true" /> Pemeriksaan dimensi sebelum pengiriman</span>
          <a className="text-link" href="#kontak">Cek kelayakan drawing <ArrowRight aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="layanan" aria-label="Layanan utama">
      <div className="container">
        <div className="services-grid">
          {services.map(({ icon: Icon, title, description }, index) => (
            <article
              className="service-item"
              key={title}
              data-reveal="up"
              style={{ "--reveal-delay": `${index * 100}ms` }}
            >
              <Icon className="service-item__icon" aria-hidden="true" weight="regular" />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#kontak">Baca selengkapnya <ArrowRight aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitySection() {
  const capabilities = [
    { icon: Package, label: "Pesanan satuan dan partai" },
    { icon: Blueprint, label: "Pengerjaan sesuai gambar" },
    { icon: Hammer, label: "Komponen custom & otomotif" },
    { icon: ShieldCheck, label: "Pemeriksaan sebelum kirim" },
  ];

  return (
    <section className="section capability" id="kemampuan" aria-labelledby="capability-title">
      <div className="container capability__layout">
        <div className="capability__copy" data-reveal="left">
          <h2 id="capability-title">Satu Mitra untuk Proses Fabrikasi Anda</h2>
          <p>
            Kami membantu bengkel, usaha, reseller, dan kebutuhan pribadi
            mengubah gambar kerja menjadi komponen logam siap pakai.
          </p>
          <ul className="capability-list">
            {capabilities.map(({ icon: Icon, label }) => (
              <li key={label}><Icon aria-hidden="true" /> {label}</li>
            ))}
          </ul>
          <a className="text-link text-link--light" href="#kontak">
            Diskusikan kebutuhan Anda <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <figure className="capability__figure" data-reveal="right">
          <img
            src="/assets/portfolio-fabrication.webp"
            alt="Enclosure logam hasil laser cutting dan bending presisi"
            width="1200"
            height="900"
            loading="lazy"
          />
          <figcaption>
            <span>Contoh hasil fabrikasi</span>
            Enclosure presisi dengan potongan ventilasi dan tekukan konsisten.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function PortfolioGallery() {
  return (
    <section className="section portfolio" id="portofolio" aria-labelledby="portfolio-title">
      <div className="container">
        <div className="section-heading portfolio__heading" data-reveal="up">
          <div>
            <h2 id="portfolio-title">Kualitas Tepi dan Detail yang Terlihat</h2>
          </div>
          <p>Contoh visual mock untuk mempresentasikan kategori hasil kerja yang paling relevan bagi calon klien B2B.</p>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <article
              className="portfolio-card"
              key={item.title}
              data-reveal="up"
              style={{ "--reveal-delay": `${index * 80}ms` }}
            >
              <div className="portfolio-card__image">
                <img src={item.image} alt={item.alt} width="1536" height="1024" loading="lazy" />
                <span>{item.category}</span>
              </div>
              <div className="portfolio-card__body">
                <h3>{item.title}</h3>
                <dl>
                  <div><dt>Proses</dt><dd>{item.process}</dd></div>
                  <div><dt>Material</dt><dd>{item.material}</dd></div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section about" id="tentang" aria-labelledby="about-title">
      <div className="container about__layout">
        <div className="about__image-wrap" data-reveal="left">
          <img
            src="/assets/workshop-team.webp"
            alt="Tim fabrikasi memeriksa komponen logam di area produksi"
            width="1200"
            height="800"
            loading="lazy"
          />
          <span className="about__location"><MapPin aria-hidden="true" /> Purbalingga, Jawa Tengah</span>
        </div>
        <div className="about__copy" data-reveal="right">
          <h2 id="about-title">Detail yang Baik Dimulai dari Komunikasi yang Jelas</h2>
          <p>
            Braling Inti Logam bergerak di bidang fabrikasi logam, cutting laser CNC,
            bending, shearing, dan penyediaan part kendaraan bermotor.
          </p>
          <p>
            Setiap pesanan direview berdasarkan fungsi, ukuran, material, dan jumlah
            agar hasil akhirnya sesuai kebutuhan—bukan sekadar selesai diproduksi.
          </p>
          <div className="about__principles" aria-label="Prinsip kerja">
            <span><CheckCircle aria-hidden="true" /> Komunikasi responsif</span>
            <span><CheckCircle aria-hidden="true" /> Pengerjaan bertanggung jawab</span>
            <span><CheckCircle aria-hidden="true" /> Hasil rapi dan presisi</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section process" aria-labelledby="process-title">
      <div className="container">
        <div className="section-heading" data-reveal="up">
          <h2 id="process-title">Mulai dari Gambar, Lanjut ke Produksi</h2>
          <p>Empat tahap transparan dari review file hingga produk dikirim.</p>
        </div>
        <ol className="process-grid">
          {processSteps.map(({ number, title, description }, index) => {
            const Icon = processIcons[index];
            return (
              <li
                key={number}
                data-reveal="up"
                style={{ "--reveal-delay": `${index * 100}ms` }}
              >
                <span className="process-grid__number">{number}</span>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="section faq" aria-labelledby="faq-title">
      <div className="container faq__layout">
        <div className="section-heading" data-reveal="left">
          <h2 id="faq-title">Sebelum Anda Memesan</h2>
          <p>Informasi singkat untuk membantu menyiapkan kebutuhan fabrikasi.</p>
        </div>
        <div className="faq-list" data-reveal="right">
          {faqs.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}<span aria-hidden="true">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [errors, setErrors] = useState({});
  const [resultUrl, setResultUrl] = useState("");
  const [fileName, setFileName] = useState("");

  const validate = (values) => {
    const nextErrors = {};
    if (!values.get("name")?.trim()) nextErrors.name = "Masukkan nama Anda.";
    if (!values.get("phone")?.trim()) nextErrors.phone = "Masukkan nomor WhatsApp.";
    if (!values.get("service")) nextErrors.service = "Pilih layanan yang dibutuhkan.";
    if (!values.get("material")) nextErrors.material = "Pilih material.";
    if (!values.get("thickness")?.trim()) nextErrors.thickness = "Masukkan ketebalan.";
    if (!values.get("quantity")?.trim()) nextErrors.quantity = "Masukkan jumlah.";
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      requestAnimationFrame(() => form.querySelector("[aria-invalid='true']")?.focus());
      return;
    }

    const message = [
      "Halo Braling Inti Logam, saya ingin meminta penawaran.",
      `Nama: ${formData.get("name")}`,
      `WhatsApp: ${formData.get("phone")}`,
      `Layanan: ${formData.get("service")}`,
      `Material: ${formData.get("material")}`,
      `Ketebalan: ${formData.get("thickness")} mm`,
      `Jumlah: ${formData.get("quantity")} pcs`,
      formData.get("message") ? `Kebutuhan: ${formData.get("message")}` : "",
      `File yang akan dikirim manual: ${fileName || "Belum dipilih"}`,
    ].filter(Boolean).join("\n");

    setResultUrl(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`);
  };

  return (
    <section className="section quote" id="kontak" aria-labelledby="quote-title">
      <div className="container quote__layout">
        <div className="quote__copy" data-reveal="left">
          <h2 id="quote-title">Ceritakan Kebutuhan Anda</h2>
          <p>
            Isi spesifikasi utama. Ringkasannya akan disiapkan untuk dikirim
            melalui WhatsApp tanpa menyimpan data di website ini.
          </p>
          <div className="contact-list">
            <a href={`tel:+${whatsappNumber}`}><Phone aria-hidden="true" /> +62 811-2748-787</a>
            <a href="mailto:bralingintilogam@gmail.com"><EnvelopeSimple aria-hidden="true" /> bralingintilogam@gmail.com</a>
            <span><MapPin aria-hidden="true" /> Purbalingga, Jawa Tengah</span>
          </div>
        </div>

        <form className="quote-form" onSubmit={handleSubmit} noValidate data-reveal="right" aria-describedby="required-note">
          <p className="form-required-note" id="required-note"><span aria-hidden="true">*</span> Wajib diisi</p>
          <div className="field">
            <label htmlFor="name">Nama <span aria-hidden="true">*</span></label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <span className="field__error" id="name-error">{errors.name}</span>}
          </div>

          <div className="field">
            <label htmlFor="phone">Nomor WhatsApp <span aria-hidden="true">*</span></label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="Contoh: 0811 2748 787"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && <span className="field__error" id="phone-error">{errors.phone}</span>}
          </div>

          <div className="field">
            <label htmlFor="service">Layanan <span aria-hidden="true">*</span></label>
            <select
              id="service"
              name="service"
              defaultValue=""
              required
              aria-required="true"
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? "service-error" : undefined}
            >
              <option value="" disabled>Pilih layanan</option>
              <option>Cutting Laser CNC</option>
              <option>Bending Plat</option>
              <option>Potong Shearing</option>
              <option>Fabrikasi Custom</option>
              <option>Produk Otomotif</option>
            </select>
            {errors.service && <span className="field__error" id="service-error">{errors.service}</span>}
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="material">Material <span aria-hidden="true">*</span></label>
              <select
                id="material"
                name="material"
                defaultValue=""
                required
                aria-required="true"
                aria-invalid={Boolean(errors.material)}
                aria-describedby={errors.material ? "material-error" : undefined}
              >
                <option value="" disabled>Pilih material</option>
                {capacityRows.map((row) => <option key={row.material}>{row.material}</option>)}
              </select>
              {errors.material && <span className="field__error" id="material-error">{errors.material}</span>}
            </div>
            <div className="field">
              <label htmlFor="thickness">Ketebalan (mm) <span aria-hidden="true">*</span></label>
              <input
                id="thickness"
                name="thickness"
                type="text"
                inputMode="decimal"
                placeholder="Contoh: 3"
                required
                aria-required="true"
                aria-invalid={Boolean(errors.thickness)}
                aria-describedby={errors.thickness ? "thickness-error" : undefined}
              />
              {errors.thickness && <span className="field__error" id="thickness-error">{errors.thickness}</span>}
            </div>
            <div className="field">
              <label htmlFor="quantity">Jumlah (pcs) <span aria-hidden="true">*</span></label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                min="1"
                inputMode="numeric"
                placeholder="Contoh: 50"
                required
                aria-required="true"
                aria-invalid={Boolean(errors.quantity)}
                aria-describedby={errors.quantity ? "quantity-error" : undefined}
              />
              {errors.quantity && <span className="field__error" id="quantity-error">{errors.quantity}</span>}
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Detail kebutuhan <span>(opsional)</span></label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Material, ketebalan, jumlah, ukuran, atau target pengerjaan"
            />
          </div>

          <div className={`field file-field ${fileName ? "file-field--selected" : ""}`}>
            <label className="file-field__label" htmlFor="drawing">
              <UploadSimple aria-hidden="true" />
              <span>{fileName || "Pilih gambar atau file desain"}</span>
            </label>
            <input
              id="drawing"
              name="drawing"
              type="file"
              accept=".dxf,.dwg,.pdf,.step,.jpg,.jpeg,.png"
              onChange={(event) => setFileName(event.target.files?.[0]?.name || "")}
            />
            <small>DXF, DWG, PDF, STEP, JPG, atau PNG. Website hanya mencatat nama file; lampirkan file manual di WhatsApp.</small>
          </div>

          <button className="button button--primary button--full" type="submit">
            Siapkan Pesan WhatsApp <ArrowRight aria-hidden="true" />
          </button>

          <div className="form-result" aria-live="polite">
            {resultUrl && (
              <>
                <CheckCircle aria-hidden="true" weight="fill" />
                <div>
                  <strong>Ringkasan sudah siap.</strong>
                  <p>Buka WhatsApp, lalu lampirkan file pilihan Anda jika ada.</p>
                  <a href={resultUrl} target="_blank" rel="noreferrer">
                    Lanjutkan ke WhatsApp <ArrowRight aria-hidden="true" />
                  </a>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <Brand />
          <p>Laser cutting CNC, bending, shearing, dan fabrikasi logam custom dari Purbalingga.</p>
        </div>
        <nav aria-label="Navigasi footer">
          <strong>Jelajahi</strong>
          <a href="#layanan">Layanan</a>
          <a href="#kapasitas">Kapasitas</a>
          <a href="#portofolio">Portofolio</a>
          <a href="#tentang">Tentang Kami</a>
          <a href="#kontak">Kontak</a>
        </nav>
        <div>
          <strong>Kontak</strong>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp Admin</a>
          <a href="mailto:bralingintilogam@gmail.com">bralingintilogam@gmail.com</a>
          <span>Purbalingga, Jawa Tengah</span>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© 2026 Braling Inti Logam.</span>
        <span>Fabrikasi presisi untuk kebutuhan Anda.</span>
      </div>
    </footer>
  );
}

function MobileWhatsappCta() {
  return (
    <a
      className="mobile-whatsapp-cta"
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Minta penawaran melalui WhatsApp"
    >
      <WhatsappLogo aria-hidden="true" weight="fill" />
      Minta Penawaran
    </a>
  );
}

export function App() {
  useEffect(() => {
    const root = document.documentElement;
    const revealItems = [...document.querySelectorAll("[data-reveal]")];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    root.classList.add("motion-ready");

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return () => root.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -2% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
      <div id="top" />
      <Header />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <CapacityMatrix />
        <Services />
        <CapabilitySection />
        <PortfolioGallery />
        <AboutSection />
        <ProcessSection />
        <FaqSection />
        <QuoteForm />
      </main>
      <Footer />
      <MobileWhatsappCta />
    </>
  );
}
