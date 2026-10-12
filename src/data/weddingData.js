import photo1 from "../assets/images/vintage/bride1.jpg";
import photo2 from "../assets/images/vintage/bride2.jpg";
import photo3 from "../assets/images/vintage/bride3.jpg";
import photo4 from "../assets/images/vintage/bride4.jpg";

const weddingData = {
  // ==========================================
  // COUPLE
  // ==========================================


  couple: {
    bride: "Hawani",
    groom: "Alif",
  },

  couplefullname: {
  bride: " Nama Penuh Pengantin Perempuan",
  groom: " Nama Penuh Pengantin Lelaki",
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
    father: "Nama bapa pengantin perempuan",
    mother: "Nama ibu pengantin perempuan",
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

    venue: "Bintang Banquet Hall",

    address: "Venue Address, City, State, Country",

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
      photo3,
      photo4,
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
    name: "Wakil 1",
    phone: "60123456789",
  },

  representative2: {
    label: "Wakil 2",
    name: "Wakil 2",
    phone: "0123456789",
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