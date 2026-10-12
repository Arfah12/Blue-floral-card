import photo1 from "../assets/images/vintage/photo1.jpg";
import photo2 from "../assets/images/vintage/photo2.jpg";

const weddingData = {
  // ==========================================
  // COUPLE
  // ==========================================


  couple: {
    bride: "Aliya",
    groom: "Izzat",
  },

  couplefullname: {
  bride: " Nur Aliya binti Mohamad Nazir",
  groom: " Ahmad Izzat Irfan bin Mohamad Naser",
},

  // ==========================================
  // INVITATION
  // ==========================================
invitation: {
  title: "Walimatul Urus",

  arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",

  bismillah:
    "Dengan nama Allah Yang Maha Pemurah lagi Maha Penyayang",

  greeting:
    "Assalamualaikum warahmatullahi wabarakatuh",

  message:
    "Dengan penuh kesyukuran, kami menjemput anda meraikan hari bahagia kami.",

  parents: {
    father: "Rafidah binti Zakaria ",
    mother: "Mohamad Nazir bin Arshad",
  },

  invitationMessage:
    "Dengan penuh kesyukuran, kami mempersilakan",

  guests:
    "Dato' | Datin | Tuan | Puan | Encik | Cik",

  familyMessage:
    "seisi keluarga hadir ke majlis perkahwinan anakanda kami",

  closing:
    "Semoga dengan kehadiran dan doa restu anda dapat menyerikan lagi majlis anak kami.",
},
  // ==========================================
  // EVENT
  // ==========================================

  event: {
    date: "6 Disember 2026",
    day: "Ahad",
    time: "11:00 AM – 4:00 PM",

    venue: "Dsayang Hall ",

    address: "kampung kedah, Parit Buntar, Perak",

  tentative: [
    {
      time: "11:00 AM",
      activity: "Ketibaan Tetamu & Jamuan Makan",
    },
    {
      time: "12:00 PM",
      activity: "Ketibaan Pengantin",
    },
    {
      time: "1:00 PM",
      activity: "Sesi Bergambar",
    },
    {
      time: "4:00 PM",
      activity: "Majlis Bersurai",
    },
]
  },

  // ==========================================
  // PARENTS
  // ==========================================

  parents: {
    enabled: true,

    bride: {
      father: "Encik ______",
      mother: "Puan ______",
    },

    groom: {
      father: "Encik ______",
      mother: "Puan ______",
    },
  },

  // ==========================================
  // DRESS CODE
  // ==========================================

  dressCode: {
    enabled: true,

    colour: "Marun / Zaitun",

    greeting: "Para tetamu yang dihormati ",

    poem:
      "Baju kurung anggun berseri,\nBaju Melayu segak bergaya,\nHadir memeriahkan majlis kami,\nDengan busana yang sopan dan bergaya. ",

    women:
      "Tetamu perempuan: Baju kurung, dress labuh atau pakaian Muslimah yang sopan.",

    men:
      "Tetamu lelaki: Baju Melayu, kemeja atau pakaian kasual kemas.",

    closing:
      "Terima kasih kerana sudi bersama-sama memeriahkan hari bahagia kami. Kehadiran anda amat kami hargai. ",
  },

  // ==========================================
  // LOCATION
  // ==========================================

  location: {
    enabled: true,

    mapsUrl: "https://maps.app.goo.gl/tdS8rSxZhCuGLg8n9",
  },

  // ==========================================
  // COUNTDOWN
  // ==========================================

  countdown: {
    enabled: true,

    dateTime: "2026-12-06T11:00:00+08:00",
  },

  // ==========================================
  // GALLERY
  // ==========================================

  gallery: {
    enabled: true,

    images: [
      photo1,
      photo2,
  
    ],
  },

  // ==========================================
  // WISHES
  // ==========================================
rsvp: {
  enabled: true,
},



  wishes: {
    enabled: true,
  },

  // ==========================================
  // MUSIC
  // ==========================================

  music: {
    enabled: true,

    file: "/assets/images/vintage/weddingsong.mp3",

    autoplay: false,
  },


  contact: {
  enabled: true,

  representative1: {
    label: "Wakil 1",
    name: "Izzati",
    phone: "601137846513",
  },

  representative2: {
    label: "Wakil 2",
    name: "Insani",
    phone: "60174866562",
  },
},

  // ==========================================
  // FEATURES
  // ==========================================

  features: {
    parents: true,
    dressCode: true,
    location: true,
    countdown: true,
    gallery: true,
    wishes: true,
    music: true,
  },
};

export default weddingData;