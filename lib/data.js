// ── HIKUNA Hospital · central data ─────────────────────────────
// All photography is referenced centrally here — to use your own
// hospital/doctor photos later, just drop files into /public and
// point these URLs at them (e.g. photo: "/doctors/aisyah.jpg").

const U = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const HERO_PHOTO = U("photo-1586773860418-d37222d8fce3", 1200);

export const SPECIALTIES = [
  { id: "cardiology", name: "Cardiology", desc: "Heart & cardiovascular care", photo: U("photo-1505751172876-fa1923c5c528", 800) },
  { id: "neurology", name: "Neurology", desc: "Brain & nervous system", photo: U("photo-1559757175-5700dde675bc", 800) },
  { id: "orthopedics", name: "Orthopedics", desc: "Bones, joints & muscles", photo: U("photo-1544367567-0f2fcb009e0b", 800) },
  { id: "ophthalmology", name: "Ophthalmology", desc: "Eye & vision care", photo: U("photo-1574258495973-f010dfbb5371", 800) },
  { id: "pediatrics", name: "Pediatrics", desc: "Children's healthcare", photo: U("photo-1519689680058-324335c77eba", 800) },
  { id: "radiology", name: "Radiology", desc: "Advanced medical imaging", photo: U("photo-1530026405186-ed1f139313f8", 800) },
  { id: "general", name: "General Medicine", desc: "Primary & everyday care", photo: U("photo-1576091160550-2173dba999ef", 800) },
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
  },
  {
    id: "rizky-maulana", name: "Dr. Rizky Maulana", title: "Interventional Cardiologist",
    specialty: "cardiology", rating: 4.8, reviews: 98, experience: 12,
    fee: 400000, languages: ["Indonesian", "English"], branches: ["Central"],
    gender: "Male", location: "Jakarta", initials: "RM", gradient: "g2",
    photo: U("photo-1612349317150-e413f6a5b16d", 700),
    about: "Interventional cardiologist specialising in coronary angiography, stenting and acute cardiac care.",
    education: ["MD — Gadjah Mada University", "Cardiology Residency — Sardjito Hospital", "Interventional Fellowship — Kuala Lumpur"],
  },
  {
    id: "farhan-hakim", name: "Dr. Farhan Hakim", title: "Consultant Neurologist",
    specialty: "neurology", rating: 4.8, reviews: 87, experience: 13,
    fee: 350000, languages: ["Indonesian", "English", "Arabic"], branches: ["Central", "Bandung"],
    gender: "Male", location: "Jakarta", initials: "FH", gradient: "g3",
    photo: U("photo-1622253692010-333f2da6031d", 700),
    about: "Neurologist treating stroke, epilepsy, movement disorders and chronic headache.",
    education: ["MD — Universitas Indonesia", "Neurology Residency — Cipto Mangunkusumo Hospital", "Stroke Fellowship — Melbourne"],
  },
  {
    id: "nadia-putri", name: "Dr. Nadia Putri", title: "Orthopedic Surgeon",
    specialty: "orthopedics", rating: 4.9, reviews: 111, experience: 11,
    fee: 375000, languages: ["Indonesian", "English"], branches: ["South"],
    gender: "Female", location: "Jakarta", initials: "NP", gradient: "g4",
    photo: U("photo-1594824476967-48c8b964273f", 700),
    about: "Orthopedic surgeon focused on sports injuries, joint replacement and minimally invasive surgery.",
    education: ["MD — Airlangga University", "Orthopedics Residency — Soetomo Hospital", "Sports Medicine Fellowship — Sydney"],
  },
  {
    id: "bima-sakti", name: "Dr. Bima Sakti", title: "Ophthalmologist",
    specialty: "ophthalmology", rating: 4.7, reviews: 76, experience: 10,
    fee: 300000, languages: ["Indonesian", "English"], branches: ["Central"],
    gender: "Male", location: "Jakarta", initials: "BS", gradient: "g5",
    photo: U("photo-1582750433449-648ed127bb54", 700),
    about: "Ophthalmologist offering cataract surgery, LASIK evaluation and comprehensive eye exams.",
    education: ["MD — Diponegoro University", "Ophthalmology Residency — Kariadi Hospital"],
  },
  {
    id: "sarah-lestari", name: "Dr. Sarah Lestari", title: "Pediatrician",
    specialty: "pediatrics", rating: 4.9, reviews: 143, experience: 9,
    fee: 275000, languages: ["Indonesian", "English"], branches: ["Central", "South", "Bandung"],
    gender: "Female", location: "Jakarta", initials: "SL", gradient: "g6",
    photo: U("photo-1631217868264-e5b90bb7e133", 700),
    about: "Pediatrician passionate about growth monitoring, immunisation and child nutrition.",
    education: ["MD — Universitas Indonesia", "Pediatrics Residency — Harapan Kita Children's Hospital"],
  },
  {
    id: "ahmad-fikri", name: "Dr. Ahmad Fikri", title: "Internist",
    specialty: "general", rating: 4.8, reviews: 164, experience: 14,
    fee: 250000, languages: ["Indonesian"], branches: ["Central", "South", "Bandung"],
    gender: "Male", location: "Jakarta", initials: "AF", gradient: "g1",
    photo: U("photo-1576091160399-112ba8d25d1d", 700),
    about: "Internist handling diabetes, hypertension, metabolic disorders and annual health screening.",
    education: ["MD — Gadjah Mada University", "Internal Medicine Residency — Sardjito Hospital"],
  },
];

export const getDoctor = (id) => DOCTORS.find((d) => d.id === id);

export const LOCATIONS = [
  {
    id: "central", name: "HIKUNA Hospital — Central", city: "Jakarta",
    address: "Jl. Sehat Bersama No. 88, Menteng, Jakarta Pusat",
    hours: "Open 24 Hours", phone: "+62 21 555 0188", emergency: true,
    tags: ["🚑 Emergency Care", "🏥 Inpatient", "🧪 Lab 24h"],
    photo: U("photo-1519494026892-80bbd2d6fd0d", 900),
  },
  {
    id: "south", name: "HIKUNA Hospital — South", city: "Jakarta",
    address: "Jl. Bangka Raya No. 21, Kemang, Jakarta Selatan",
    hours: "Open 24 Hours", phone: "+62 21 555 0142", emergency: true,
    tags: ["🚑 Emergency Care", "👶 Mother & Child", "🦷 Dental"],
    photo: U("photo-1538108149393-fbbd81895907", 900),
  },
  {
    id: "bandung", name: "HIKUNA Clinic — Bandung", city: "Bandung",
    address: "Jl. Dipati Ukur No. 45, Bandung",
    hours: "Mon–Sat · 08.00–21.00", phone: "+62 22 555 0931", emergency: false,
    tags: ["🩺 Outpatient", "🧪 Lab", "💊 Pharmacy"],
    photo: U("photo-1551190822-a9333d879b1f", 900),
  },
];

export const MCU_PACKAGES = [
  {
    id: "essential", name: "Essential", price: 750000,
    desc: "Yearly basics to keep you on track.",
    features: ["Basic Blood Test", "Blood Pressure Check", "BMI & Body Composition", "Doctor Consultation"],
    photo: U("photo-1584515933487-779824d29309", 800),
  },
  {
    id: "advanced", name: "Advanced", price: 1750000, highlight: true,
    desc: "Deeper screening for early detection.",
    features: ["Complete Blood Test", "Heart Screening (ECG)", "Liver & Kidney Check", "Doctor Consultation"],
    photo: U("photo-1559757148-5c350d0d3c56", 800),
  },
  {
    id: "executive", name: "Executive", price: 3500000,
    desc: "Comprehensive, all-in-one assessment.",
    features: ["Comprehensive Screening", "Cardiac Check", "Medical Imaging", "Specialist Consultation"],
    photo: U("photo-1516549655169-df83a0774514", 800),
  },
];

// ── scheduling helpers (deterministic demo availability) ─────────
export const TIMES = ["09:00", "10:00", "11:00", "13:00", "14:30", "15:30"];

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

export const rupiah = (n) => "Rp " + n.toLocaleString("id-ID");
