// ── HIKUNA Hospital · central data ─────────────────────────────
// All photography is referenced centrally here — to use your own
// hospital/doctor photos later, just drop files into /public and
// point these URLs at them (e.g. photo: "/doctors/aisyah.jpg").

const U = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const HERO_PHOTO = U("photo-1586773860418-d37222d8fce3", 1200);

// Full-bleed section backgrounds (distinct photo per section)
export const HERO_BG = U("photo-1586773860418-d37222d8fce3", 1800);
export const SERVICES_BG = U("photo-1504439468489-c8920d796a29", 1800);
export const WHY_BG = U("photo-1666214280557-f1b5022eb634", 1800);
export const MCU_BG = U("photo-1638202993928-7267aad84c31", 1800);

export const SPECIALTIES = [
  { id: "cardiology", name: "Cardiology", desc: "Heart & cardiovascular care", photo: U("photo-1505751172876-fa1923c5c528", 800), keywords: ["heart", "chest", "cardiac", "blood pressure", "ecg"] },
  { id: "neurology", name: "Neurology", desc: "Brain & nervous system", photo: U("photo-1559757175-5700dde675bc", 800), keywords: ["brain", "headache", "stroke", "nerve", "migraine", "epilepsy"] },
  { id: "orthopedics", name: "Orthopedics", desc: "Bones, joints & muscles", photo: U("photo-1544367567-0f2fcb009e0b", 800), keywords: ["bone", "joint", "fracture", "knee", "back pain", "sports"] },
  { id: "ophthalmology", name: "Ophthalmology", desc: "Eye & vision care", photo: U("photo-1574258495973-f010dfbb5371", 800), keywords: ["eye", "vision", "cataract", "glasses", "lasik"] },
  { id: "pediatrics", name: "Pediatrics", desc: "Children's healthcare", photo: U("photo-1519689680058-324335c77eba", 800), keywords: ["child", "baby", "immunisation", "vaccine", "growth"] },
  { id: "radiology", name: "Radiology", desc: "Advanced medical imaging", photo: U("photo-1530026405186-ed1f139313f8", 800), keywords: ["x-ray", "mri", "ct scan", "ultrasound", "imaging"] },
  { id: "general", name: "General Medicine", desc: "Primary & everyday care", photo: U("photo-1576091160550-2173dba999ef", 800), keywords: ["fever", "flu", "diabetes", "checkup", "general"] },
];

export const specialtyName = (id) =>
  SPECIALTIES.find((s) => s.id === id)?.name ?? id;

export const specialtyPhoto = (id) =>
  SPECIALTIES.find((s) => s.id === id)?.photo ?? "";

export const DOCTORS = [
  {
    id: "aisyah-rahma", name: "Dr. Aisyah Rahma", title: "Consultant Cardiologist",
    specialty: "cardiology", rating: 4.9, reviews: 132, experience: 15,
    fee: 350000, languages: ["Indonesian", "English"], branches: ["Central", "South"],
    gender: "Female", location: "Jakarta", initials: "AR", gradient: "g1",
    photo: U("photo-1559839734-2b71ea197ec2", 700),
    about: "Consultant cardiologist focused on preventive cardiology, heart failure and cardiac rehabilitation.",
    education: ["MD — Universitas Indonesia", "Cardiology Residency — Harapan Kita Heart Hospital", "Fellowship in Echocardiography — Singapore"],
    career: ["Senior Cardiologist — HIKUNA Central Hospital (2015—now)", "Cardiology Resident — Harapan Kita Hospital (2010—2015)"],
    expertise: ["Preventive cardiology", "Heart failure", "Echocardiography", "Cardiac rehabilitation"],
    hours: "Mon — Fri · 09:00 — 16:00",
  },
  {
    id: "rizky-maulana", name: "Dr. Rizky Maulana", title: "Interventional Cardiologist",
    specialty: "cardiology", rating: 4.8, reviews: 98, experience: 12,
    fee: 400000, languages: ["Indonesian", "English"], branches: ["Central"],
    gender: "Male", location: "Jakarta", initials: "RM", gradient: "g2",
    photo: U("photo-1612349317150-e413f6a5b16d", 700),
    about: "Interventional cardiologist specialising in coronary angiography, stenting and acute cardiac care.",
    education: ["MD — Gadjah Mada University", "Cardiology Residency — Sardjito Hospital", "Interventional Fellowship — Kuala Lumpur"],
    career: ["Interventional Cardiologist — HIKUNA Central Hospital (2018—now)", "Cardiology Fellow — Kuala Lumpur Heart Centre (2015—2018)"],
    expertise: ["Coronary angiography", "Cardiac stenting", "Acute cardiac care"],
    hours: "Mon — Sat · 10:00 — 17:00",
  },
  {
    id: "farhan-hakim", name: "Dr. Farhan Hakim", title: "Consultant Neurologist",
    specialty: "neurology", rating: 4.8, reviews: 87, experience: 13,
    fee: 350000, languages: ["Indonesian", "English", "Arabic"], branches: ["Central", "Bandung"],
    gender: "Male", location: "Jakarta", initials: "FH", gradient: "g3",
    photo: U("photo-1622253692010-333f2da6031d", 700),
    about: "Neurologist treating stroke, epilepsy, movement disorders and chronic headache.",
    education: ["MD — Universitas Indonesia", "Neurology Residency — Cipto Mangunkusumo Hospital", "Stroke Fellowship — Melbourne"],
    career: ["Consultant Neurologist — HIKUNA Central Hospital (2016—now)", "Neurology Resident — Cipto Mangunkusumo Hospital (2011—2016)"],
    expertise: ["Stroke care", "Epilepsy", "Headache & migraine", "Movement disorders"],
    hours: "Tue — Sat · 09:00 — 15:00",
  },
  {
    id: "nadia-putri", name: "Dr. Nadia Putri", title: "Orthopedic Surgeon",
    specialty: "orthopedics", rating: 4.9, reviews: 111, experience: 11,
    fee: 375000, languages: ["Indonesian", "English"], branches: ["South"],
    gender: "Female", location: "Jakarta", initials: "NP", gradient: "g4",
    photo: U("photo-1594824476967-48c8b964273f", 700),
    about: "Orthopedic surgeon focused on sports injuries, joint replacement and minimally invasive surgery.",
    education: ["MD — Airlangga University", "Orthopedics Residency — Soetomo Hospital", "Sports Medicine Fellowship — Sydney"],
    career: ["Orthopedic Surgeon — HIKUNA South Hospital (2017—now)", "Sports Medicine Fellow — Sydney (2015—2017)"],
    expertise: ["Sports injuries", "Joint replacement", "Arthroscopy"],
    hours: "Mon — Fri · 10:00 — 16:00",
  },
  {
    id: "bima-sakti", name: "Dr. Bima Sakti", title: "Ophthalmologist",
    specialty: "ophthalmology", rating: 4.7, reviews: 76, experience: 10,
    fee: 300000, languages: ["Indonesian", "English"], branches: ["Central"],
    gender: "Male", location: "Jakarta", initials: "BS", gradient: "g5",
    photo: U("photo-1582750433449-648ed127bb54", 700),
    about: "Ophthalmologist offering cataract surgery, LASIK evaluation and comprehensive eye exams.",
    education: ["MD — Diponegoro University", "Ophthalmology Residency — Kariadi Hospital"],
    career: ["Ophthalmologist — HIKUNA Central Hospital (2019—now)", "Cataract Surgeon — Kariadi Hospital (2016—2019)"],
    expertise: ["Cataract surgery", "LASIK evaluation", "Glaucoma care"],
    hours: "Mon — Sat · 08:00 — 14:00",
  },
  {
    id: "sarah-lestari", name: "Dr. Sarah Lestari", title: "Pediatrician",
    specialty: "pediatrics", rating: 4.9, reviews: 143, experience: 9,
    fee: 275000, languages: ["Indonesian", "English"], branches: ["Central", "South", "Bandung"],
    gender: "Female", location: "Jakarta", initials: "SL", gradient: "g6",
    photo: U("photo-1631217868264-e5b90bb7e133", 700),
    about: "Pediatrician passionate about growth monitoring, immunisation and child nutrition.",
    education: ["MD — Universitas Indonesia", "Pediatrics Residency — Harapan Kita Children's Hospital"],
    career: ["Pediatrician — HIKUNA Central Hospital (2019—now)", "Pediatrics Resident — Harapan Kita Hospital (2016—2019)"],
    expertise: ["Immunisation", "Growth & nutrition", "Child development"],
    hours: "Mon — Sat · 09:00 — 15:00",
  },
  {
    id: "ahmad-fikri", name: "Dr. Ahmad Fikri", title: "Internist",
    specialty: "general", rating: 4.8, reviews: 164, experience: 14,
    fee: 250000, languages: ["Indonesian"], branches: ["Central", "South", "Bandung"],
    gender: "Male", location: "Jakarta", initials: "AF", gradient: "g1",
    photo: U("photo-1576091160399-112ba8d25d1d", 700),
    about: "Internist handling diabetes, hypertension, metabolic disorders and annual health screening.",
    education: ["MD — Gadjah Mada University", "Internal Medicine Residency — Sardjito Hospital"],
    career: ["Internist — HIKUNA Central Hospital (2014—now)", "Internal Medicine Resident — Sardjito Hospital (2010—2014)"],
    expertise: ["Diabetes & metabolic", "Hypertension", "Health screening"],
    hours: "Mon — Fri · 08:00 — 14:00",
  },
];

export const getDoctor = (id) => DOCTORS.find((d) => d.id === id);

export const BRANCH_NAMES = {
  Central: "HIKUNA Central Hospital",
  South: "HIKUNA South Hospital",
  Bandung: "HIKUNA Bandung Clinic",
};

export const LOCATIONS = [
  {
    id: "central", name: "HIKUNA Central Hospital", city: "Jakarta",
    address: "Jl. Sehat Bersama No. 88, Menteng, Jakarta Pusat",
    hours: "Open 24 Hours", phone: "+62 21 555 0188", emergency: true,
    tags: ["Emergency Care", "Inpatient", "Lab 24h"],
    photo: U("photo-1519494026892-80bbd2d6fd0d", 900),
  },
  {
    id: "south", name: "HIKUNA South Hospital", city: "Jakarta",
    address: "Jl. Bangka Raya No. 21, Kemang, Jakarta Selatan",
    hours: "Open 24 Hours", phone: "+62 21 555 0142", emergency: true,
    tags: ["Emergency Care", "Mother & Child", "Dental"],
    photo: U("photo-1538108149393-fbbd81895907", 900),
  },
  {
    id: "bandung", name: "HIKUNA Bandung Clinic", city: "Bandung",
    address: "Jl. Dipati Ukur No. 45, Bandung",
    hours: "Mon–Sat · 08.00–21.00", phone: "+62 22 555 0931", emergency: false,
    tags: ["Outpatient", "Lab", "Pharmacy"],
    photo: U("photo-1551190822-a9333d879b1f", 900),
  },
];

export const MCU_PACKAGES = [
  {
    id: "essential", name: "Essential", price: 750000,
    desc: "Basic health screening for your yearly routine.",
    bestFor: "Best for adults under 35",
    features: ["Basic Blood Test", "Blood Pressure Check", "BMI & Body Composition", "Doctor Consultation"],
    photo: U("photo-1584515933487-779824d29309", 800),
  },
  {
    id: "advanced", name: "Advanced", price: 1750000, highlight: true,
    desc: "Comprehensive health assessment for early detection.",
    bestFor: "Best for adults 35+",
    features: ["Complete Blood Test", "Heart Screening (ECG)", "Liver & Kidney Check", "Doctor Consultation"],
    photo: U("photo-1559757148-5c350d0d3c56", 800),
  },
  {
    id: "executive", name: "Executive", price: 3500000,
    desc: "Complete executive screening, top to toe.",
    bestFor: "Best for busy professionals",
    features: ["Comprehensive Screening", "Cardiac Check", "Medical Imaging", "Specialist Consultation"],
    photo: U("photo-1516549655169-df83a0774514", 800),
  },
];

// ── scheduling helpers (deterministic demo availability) ─────────
export const TIMES = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM"];

export function nextDays(n = 14) {
  const out = [];
  const today = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    out.push(d);
  }
  return out;
}

export function daysFrom(offset, n = 7) {
  const out = [];
  const today = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + offset + i);
    out.push(d);
  }
  return out;
}

export const dateKey = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export const fmtDay = (d) => ({
  dow: d.toLocaleDateString("en-GB", { weekday: "short" }),
  num: d.getDate(),
  mon: d.toLocaleDateString("en-GB", { month: "short" }),
  full: d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }),
});

export function slotStatus(doctorId, key, time) {
  const s = `${doctorId}|${key}|${time}`;
  let h = 0;
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h % 3 === 0 ? "booked" : "available";
}

// First free slot in the coming days — powers "Next available" labels.
export function nextAvailable(doctorId, within = 7) {
  for (const d of nextDays(within)) {
    const key = dateKey(d);
    for (const t of TIMES) {
      if (slotStatus(doctorId, key, t) === "available") {
        const f = fmtDay(d);
        return { label: `${f.dow}, ${f.num} ${f.mon}`, time: t };
      }
    }
  }
  return null;
}

export const rupiah = (n) => "Rp " + n.toLocaleString("id-ID");
