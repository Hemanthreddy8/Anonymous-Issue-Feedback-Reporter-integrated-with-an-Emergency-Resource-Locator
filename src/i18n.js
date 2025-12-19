export const languages = {
  en: { label: "English" },
  hi: { label: "हिन्दी" },
  ta: { label: "தமிழ்" }
};

export const strings = {
  en: {
    appTitle: "SpeakSafe",
    tagline: "Anonymous Reporting & Emergency Help",

    navHome: "Home",
    navReport: "Report",
    navEmergency: "Emergency",

    heroTitle1: "Speak Up.",
    heroTitle2: "Stay Safe.",
    heroSubtitle:
      "Report issues anonymously without fear of retaliation. Find emergency resources instantly when you need them most.",

    reportTitle: "Report an Issue",
    reportSubtitle:
      "Scope your report to a gated community, city, state, country, or global.",
    scope: "Scope",
    country: "Country",
    state: "State / Region",
    city: "City / District",
    community: "Community / Campus",
    whatHappened: "What happened?",
    whereExactly: "Exact location (optional)",
    evidence: "Evidence (optional)",
    submit: "Submit Anonymous Report",
    privacyBanner:
      "Your privacy is protected. No IP addresses, device info, or personal data is collected.",

    emTitle: "Emergency Resources",
    emSubtitle: "Find help near you quickly.",
    emHotlines: "Emergency Hotlines",
    emHotlinesDesc: "Call immediately in life‑threatening situations.",
    useMyLocation: "Use My Location",
    tip:
      "Tip: Save this page for offline access. Emergency numbers work without internet, and your map app may use cached data."
  },

  hi: {
    appTitle: "SpeakSafe",
    tagline: "गोपनीय शिकायत व आपात सहायता",

    navHome: "होम",
    navReport: "शिकायत",
    navEmergency: "आपातकाल",

    heroTitle1: "बोलिए.",
    heroTitle2: "सुरक्षित रहिए.",
    heroSubtitle:
      "बिना पहचान बताए शिकायत दर्ज करें। जब ज़रूरत हो, तुरंत आपात सहायता संसाधन खोजें।",

    reportTitle: "शिकायत दर्ज करें",
    reportSubtitle:
      "अपनी शिकायत को सोसाइटी, शहर, राज्य, देश या ग्लोबल स्तर पर चिन्हित करें।",
    scope: "क्षेत्र",
    country: "देश",
    state: "राज्य / क्षेत्र",
    city: "शहर / ज़िला",
    community: "सोसाइटी / कैंपस",
    whatHappened: "क्या हुआ?",
    whereExactly: "सटीक स्थान (वैकल्पिक)",
    evidence: "प्रमाण (वैकल्पिक)",
    submit: "गुमनाम रूप से भेजें",
    privacyBanner:
      "आपकी गोपनीयता सुरक्षित है। कोई IP, डिवाइस जानकारी या व्यक्तिगत डेटा नहीं लिया जाता।",

    emTitle: "आपातकालीन संसाधन",
    emSubtitle: "पास की सहायता जल्दी खोजें।",
    emHotlines: "आपातकालीन नंबर",
    emHotlinesDesc: "जानलेवा स्थिति में तुरंत कॉल करें।",
    useMyLocation: "मेरा स्थान उपयोग करें",
    tip:
      "टिप: इस पेज को ऑफलाइन के लिए सेव रखें। इमरजेंसी नंबर इंटरनेट के बिना भी काम करते हैं।"
  },

  ta: {
    appTitle: "SpeakSafe",
    tagline: "அடையாளம் தெரியாத புகார் & அவசர உதவி",

    navHome: "முகப்பு",
    navReport: "புகார்",
    navEmergency: "அவசரம்",

    heroTitle1: "பேசுங்க.",
    heroTitle2: "பாதுகாப்பாக இருங்க.",
    heroSubtitle:
      "பயம் இல்லாமல் ரகசியமாக புகார் அளிக்கலாம். அவசர உதவி தேவைப்பட்டால் உடனே வளங்களை கண்டுபிடிக்கலாம்.",

    reportTitle: "புகார் அளிக்க",
    reportSubtitle:
      "உங்கள் புகாரை குடியிருப்பு, நகரம், மாநிலம், நாடு அல்லது உலகளவில் குறிக்கலாம்.",
    scope: "வட்டம்",
    country: "நாடு",
    state: "மாநிலம் / பகுதி",
    city: "நகரம் / மாவட்டம்",
    community: "கூட்டுத்தளம் / காம்பஸ்",
    whatHappened: "என்ன நடந்தது?",
    whereExactly: "கண்டிப்பான இடம் (விருப்பம்)",
    evidence: "ஆதாரம் (விருப்பம்)",
    submit: "அடையாளம் தெரியாமல் அனுப்புக",
    privacyBanner:
      "உங்கள் தனியுரிமை பாதுகாக்கப்படுகிறது. எந்த IP, சாதன தகவலும் சேமிக்கப்படாது.",

    emTitle: "அவசர உதவி வளங்கள்",
    emSubtitle: "உங்களுக்கு அருகில் உள்ள உதவியை விரைவாக காணுங்கள்.",
    emHotlines: "அவசர எண்கள்",
    emHotlinesDesc: "பெரும் அவசரத்தில் உடனே அழைக்கவும்.",
    useMyLocation: "என் இருப்பிடத்தை பயன்படுத்தவும்",
    tip:
      "குறிப்பு: இந்த பக்கத்தை ஆஃப்லைன் பயன்பாட்டிற்காக சேமிக்கவும். அவசர எண்கள் இணையம் இல்லாமலும் செயல்படுகின்றன."
  }
};

export function t(lang, key) {
  return strings[lang]?.[key] || strings.en[key] || key;
}
