const weddingData = {
  // ==========================================
  // COUPLE
  // ==========================================


  couple: {
    bride: "Hawa",
    groom: "Adam",
  },

  couplefullname: {
  bride: "Noradam Bin Ahmad",
  groom: "Nur Hawa Binti Ali",
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

  parents: {
    father: "Ahmad Bin Abdullah",
    mother: "Fatimah Binti Abu",
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
    date: "26 December 2026",
    day: "Saturday",
    time: "11:00 AM – 4:00 PM",

    venue: "Dewan Seri Indah",

    address: "no. 123, Jalan Mawar, 12345 Kuala Lumpur, Malaysia",

  tentative: [
    {
      time: "11:00 AM",
      activity: "Guest Arrival",
    },
    {
      time: "12:00 PM",
      activity: "Wedding Ceremony",
    },
    {
      time: "1:00 PM",
      activity: "Lunch",
    },
    {
      time: "4:00 PM",
      activity: "Event Ends",
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

    colour: "Maroon / Olive",

    description:
      "Guests are kindly invited to dress in silver or grey tones.",
  },

  // ==========================================
  // LOCATION
  // ==========================================

  location: {
    enabled: true,

    mapsUrl: "https://maps.google.com/",
  },

  // ==========================================
  // COUNTDOWN
  // ==========================================

  countdown: {
    enabled: true,

    dateTime: "2026-12-26T11:00:00",
  },

  // ==========================================
  // GALLERY
  // ==========================================

  gallery: {
    enabled: true,

    images: [
      "/assets/images/vintage/lace.png",
      "/assets/images/photo2.jpg",
      "/assets/images/photo3.jpg",
       "/assets/images/photo4.jpg",
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

    file: "/music/wedding.mp3",

    autoplay: false,
  },


  contact: {
  enabled: true,

  representative1: {
    label: "Wakil 1",
    name: "Nama Wakil 1",
    phone: "60123456789",
  },

  representative2: {
    label: "Wakil 2",
    name: "Nama Wakil 2",
    phone: "60198765432",
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