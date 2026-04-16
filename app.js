const STORAGE_KEYS = {
  database: "jennaverse-database-v3",
  session: "jennaverse-session-v3",
  language: "jennaverse-language-v3",
};

const OWNER_EMAIL = "gokalpemirbas81@gmail.com";
const OWNER_USERNAME = "Jenna Ortega";
const OWNER_PASSWORD = "Emrauto81";
const OWNER_USER_ID = "user-owner";

const LOCALE_MAP = {
  tr: "tr-TR",
  en: "en-US",
  de: "de-DE",
};

const LANGUAGE_OPTIONS = [
  { id: "tr", label: "Türkçe" },
  { id: "en", label: "English" },
  { id: "de", label: "Deutsch" },
];

const FONT_OPTIONS = [
  { id: "outfit", label: "Outfit", family: '"Outfit", sans-serif' },
  { id: "playfair", label: "Playfair", family: '"Playfair Display", serif' },
  { id: "bebas", label: "Bebas Neue", family: '"Bebas Neue", sans-serif' },
  { id: "marker", label: "Permanent Marker", family: '"Permanent Marker", cursive' },
];

const FILTER_PRESETS = {
  clean: { brightness: 100, contrast: 100, saturation: 100, sepia: 0, grayscale: 0, blur: 0 },
  film: { brightness: 96, contrast: 116, saturation: 118, sepia: 14, grayscale: 0, blur: 0 },
  mono: { brightness: 102, contrast: 108, saturation: 0, sepia: 0, grayscale: 100, blur: 0 },
  glow: { brightness: 110, contrast: 94, saturation: 128, sepia: 8, grayscale: 0, blur: 0.4 },
};

const SYSTEM_GROUPS = [
  {
    id: "group-country-tr",
    name: "JennaChatTürkiye",
    description: {
      tr: "Türkiye topluluğu için herkese açık ana grup.",
      en: "Main open group for the Türkiye community.",
      de: "Offene Hauptgruppe für die Türkiye-Community.",
    },
  },
  {
    id: "group-country-de",
    name: "JennaChatGermany",
    description: {
      tr: "Almanya topluluğu için herkese açık ana grup.",
      en: "Main open group for the Germany community.",
      de: "Offene Hauptgruppe für die Germany-Community.",
    },
  },
  {
    id: "group-country-eu",
    name: "JennaChatEurope",
    description: {
      tr: "Avrupa topluluğu için herkese açık ana grup.",
      en: "Main open group for the Europe community.",
      de: "Offene Hauptgruppe für die Europa-Community.",
    },
  },
];

const PHOTO_LIBRARY = {
  hero: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Jenna_Ortega-63792_%28cropped%29.jpg",
  portrait: "https://upload.wikimedia.org/wikipedia/commons/5/54/Jenna_Ortega_2025_%281%29.png",
};

const ICONS = {
  home: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z" />
    </svg>
  `,
  friends: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm8 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" />
      <path d="M2 20a6 6 0 0 1 12 0M13.5 20a4.5 4.5 0 0 1 9 0" />
    </svg>
  `,
  groups: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 10a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm10 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" />
      <path d="M2.5 19a4.5 4.5 0 0 1 9 0m1 0a4.5 4.5 0 0 1 9 0" />
    </svg>
  `,
  messages: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 3 9 14" />
      <path d="m21 3-8 18-4-7-7-4Z" />
    </svg>
  `,
  plus: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  `,
  logout: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4" />
      <path d="m16 17 5-5-5-5M21 12H9" />
    </svg>
  `,
  heart: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20s-7-4.4-9.2-8.7A5.6 5.6 0 0 1 12 5.2a5.6 5.6 0 0 1 9.2 6.1C19 15.6 12 20 12 20Z" />
    </svg>
  `,
  send: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 3 9 14" />
      <path d="m21 3-8 18-4-7-7-4Z" />
    </svg>
  `,
  bookmark: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 4h10a1 1 0 0 1 1 1v15l-6-3-6 3V5a1 1 0 0 1 1-1Z" />
    </svg>
  `,
  search: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  `,
  filter: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16M7 12h10M10 18h4" />
    </svg>
  `,
  music: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 4v10.5a2.5 2.5 0 1 1-2-2.45V6.4L20 5v8.5a2.5 2.5 0 1 1-2-2.45V4.65Z" />
    </svg>
  `,
  text: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16M8 6v12m8-12v12M6 18h12" />
    </svg>
  `,
  close: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  `,
  image: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.5" />
      <path d="m21 16-5-5-8 8" />
    </svg>
  `,
  dots: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="5" cy="12" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="19" cy="12" r="1.6" />
    </svg>
  `,
};

const TR_COPY = {
  app: {
    name: "JENNAverse",
    tagline: "Jenna Ortega hayranları için düzenli, modern ve paylaşım odaklı sosyal alan",
  },
  auth: {
    eyebrow: "Jenna Ortega hayran ağı",
    title: "Form dolduruyormuş gibi değil, gerçek bir platformdaymış gibi hisset.",
    body: "Akış, mesajlar, gruplar ve içerik üretimi tek dilde, tek düzende ve daha doğal bir deneyimde birleşir.",
    loginTitle: "Giriş yap",
    registerTitle: "Kayıt ol",
    loginBody: "Mail ve şifre ile hesabına dön.",
    registerBody: "Benzersiz kullanıcı adı, mail, şifre ve doğum tarihi ile hesabını aç.",
    loginTab: "Giriş yap",
    registerTab: "Kayıt ol",
    language: "Site dili",
    username: "Kullanıcı adı",
    email: "Mail adresi",
    password: "Şifre",
    birthDate: "Doğum tarihi",
    usernameHelp: "Kullanıcı adı tüm platformda tekildir.",
    rules: "Topluluk kurallarını kabul ediyorum.",
    rulesHelp: "Veriler şu an bu tarayıcıda localStorage ile tutulur.",
    loginButton: "Giriş yap",
    registerButton: "Hesabı oluştur",
    imageAlt: "Jenna Ortega fotoğrafı",
  },
  nav: {
    feed: "Akış",
    friends: "Arkadaşlar",
    groups: "Gruplar",
    messages: "Mesajlar",
    profile: "Profil",
    create: "Oluştur",
    logout: "Çıkış",
  },
  feed: {
    forYou: "Senin için",
    fanCircle: "Jenna çevresi",
    createPrompt: "Jenna evrenine yeni bir kare bırak",
    createCta: "Paylaşım oluştur",
    empty: "Henüz görünür paylaşım yok.",
    suggestionsTitle: "Senin için öneriler",
    suggestionsCopy: "Akışını büyütmek için kullanıcı adıyla arkadaş ekleyebilirsin.",
    suggestionsEmpty: "Şimdilik önerilecek kullanıcı görünmüyor.",
    seeAll: "Tümünü gör",
    visibleTo: "Görünürlük",
    tagged: "Etiketler",
    music: "Müzik",
    sendExisting: "Bu paylaşımı arkadaşına gönder",
    sendPanelEmpty: "Gönderebileceğin arkadaşın yok.",
    commentPlaceholder: "Yorum ekle...",
    postButton: "Gönder",
  },
  composer: {
    modalTitle: "Yeni paylaşım oluştur",
    modalBody: "JENNAverse paylaşımını yayınlamadan önce görselini şekillendir.",
    emptyTitle: "Fotoğrafını buraya sürükle ya da seç",
    emptyBody: "Jenna Ortega içeren görselini yükle, sonra filtreleri, yazıları ve paylaşım ayarlarını düzenle.",
    selectButton: "Bilgisayardan seç",
    clearImage: "Görseli kaldır",
    caption: "Açıklama",
    captionPlaceholder: "Jenna evrenine ne bırakıyorsun?",
    privacyTitle: "Kimler görebilir?",
    selectedPeopleTitle: "Belirli kişiler",
    tagsTitle: "Etiketler",
    shareFriendsTitle: "Arkadaşa gönder",
    musicTitle: "Müzik adı",
    musicArtist: "Sanatçı",
    filtersTitle: "Ton ve filtre",
    filterInfo: "Hazır görünüm seç ya da kaydırıcılarla ince ayar yap.",
    presetClean: "Temiz",
    presetFilm: "Film",
    presetMono: "Mono",
    presetGlow: "Glow",
    brightness: "Parlaklık",
    contrast: "Kontrast",
    saturation: "Doygunluk",
    sepia: "Sepya",
    grayscale: "Siyah beyaz",
    blur: "Bulanıklık",
    textTitle: "Fotoğraf üstü yazı",
    textDraft: "Katman yazısı",
    textDraftPlaceholder: "Başlık, slogan ya da kısa not",
    textFont: "Yazı tipi",
    textColor: "Renk",
    textSize: "Boyut",
    addTextLayer: "Katman ekle",
    updateLayer: "Katmanı güncelle",
    removeLayer: "Katmanı sil",
    layerList: "Katmanlar",
    confirmJenna: "Seçtiğim görselde Jenna Ortega yer alıyor.",
    publishButton: "Paylaşımı yayınla",
    selectedUsersEmpty: "Seçebileceğin kullanıcı yok.",
    tagsEmpty: "Etiketleyebileceğin kullanıcı yok.",
    shareEmpty: "Gönderebileceğin arkadaş yok.",
  },
  shared: {
    send: "Gönder",
    save: "Kaydet",
    cancel: "İptal",
    create: "Oluştur",
    invite: "Davet et",
    share: "Paylaş",
    shareToFriend: "Arkadaşa gönder",
    likes: "beğeni",
    members: "üye",
    owner: "Sahip",
    systemGroup: "Sistem grubu",
    customGroup: "Özel grup",
    directMessage: "Özel mesaj",
    profilePhoto: "Profil fotoğrafı",
    noImage: "Henüz görsel seçilmedi.",
    remove: "Kaldır",
    update: "Güncelle",
    openChat: "Sohbet aç",
    noFriends: "Henüz arkadaşın yok.",
  },
  friends: {
    title: "Arkadaş sistemi",
    body: "Kullanıcı adına göre ara, istek gönder, gelen istekleri yönet ve doğrudan sohbet başlat.",
    searchTitle: "Kullanıcı adı ara",
    searchPlaceholder: "Örnek: JennaFan34",
    searchButton: "Ara",
    noResults: "Aramana uygun kullanıcı bulunamadı.",
    incomingTitle: "Gelen istekler",
    incomingEmpty: "Bekleyen arkadaşlık isteği yok.",
    listTitle: "Arkadaş listen",
    listEmpty: "Henüz arkadaşın yok.",
    sendRequest: "İstek gönder",
    accept: "Kabul et",
    decline: "Reddet",
    openChat: "Özel sohbet",
    pending: "Beklemede",
  },
  groups: {
    title: "Gruplar",
    body: "Sistem grupları herkese açıktır. Ayrıca kendi gruplarını açıp arkadaşlarını davet edebilirsin.",
    createTitle: "Yeni grup oluştur",
    name: "Grup adı",
    description: "Açıklama",
    namePlaceholder: "Örnek: Wednesday Theory Club",
    descriptionPlaceholder: "Grubun amacını kısaca yaz.",
    inviteFriends: "Arkadaşları davet et",
    inviteHint: "Sadece arkadaş listendeki kişileri seçebilirsin.",
    listTitle: "Grupların",
    empty: "Henüz erişilebilir bir grup yok.",
    messagesEmpty: "Bu grupta henüz mesaj yok.",
    messagePlaceholder: "Gruba mesaj yaz",
    lockedInfo: "Bu bir sistem grubudur ve üyeleri çıkarılamaz.",
    customInfo: "Bu grup kullanıcı tarafından oluşturuldu.",
    inviteMore: "Gruba yeni arkadaş davet et",
    inviteEmpty: "Davet edilebilecek başka arkadaş kalmadı.",
    membersTitle: "Grup üyeleri",
  },
  messages: {
    title: "Mesajlar",
    body: "Arkadaşlarınla birebir sohbet et ya da bir gönderiyi direkt yolla.",
    sidebarTitle: "Sohbetler",
    searchPlaceholder: "Sohbet ara",
    emptyFriends: "Özel mesaj için önce arkadaş eklemelisin.",
    emptyStateTitle: "Mesajların",
    emptyStateBody: "Bir arkadaş seçerek özel sohbet başlat veya bir gönderiyi doğrudan yolla.",
    startButton: "Mesaj gönder",
    emptyThread: "Bu sohbette henüz mesaj yok.",
    placeholder: "Mesaj yaz",
    sharedPostLabel: "Bir gönderi paylaştı",
  },
  profile: {
    title: "Profil",
    body: "Profil fotoğrafını güncelle, istatistiklerini gör ve paylaşımlarını galeri gibi incele.",
    uploadPhoto: "Profil fotoğrafı yükle",
    photoHelp: "Profil fotoğrafın tüm akış ve mesaj alanlarında görünür.",
    username: "Kullanıcı adı",
    email: "Mail adresi",
    birthDate: "Doğum tarihi",
    joined: "Katılım tarihi",
    statsPosts: "Paylaşım",
    statsFriends: "Arkadaş",
    statsGroups: "Grup",
    recentPosts: "Son paylaşımlar",
    recentPostsEmpty: "Henüz paylaşımın yok.",
    reservedBadge: "Resmî Jenna hesabı",
    standardBadge: "Hayran hesabı",
  },
  privacy: {
    public: "Herkese açık",
    friends: "Sadece arkadaşlar",
    selected: "Belirli kişiler",
  },
  notices: {
    loginError: "Mail veya şifre yanlış.",
    loginSuccess: "Tekrar hoş geldin.",
    registerSuccess: "Hesabın oluşturuldu.",
    registerEmailExists: "Bu mail adresi zaten kullanılıyor.",
    registerUsernameExists: "Bu kullanıcı adı zaten kullanılıyor.",
    reservedUsername: "Bu kullanıcı adı rezerve edilmiş durumda.",
    passwordWeak: "Şifren en az 8 karakter olmalı.",
    invalidBirthDate: "Geçerli bir doğum tarihi gir.",
    underage: "Kaydolmak için en az 13 yaşında olmalısın.",
    logout: "Oturum kapatıldı.",
    imageLarge: "Görsel boyutu 3 MB altında olmalı.",
    postNeedsImage: "Paylaşım için önce Jenna Ortega içeren bir görsel seçmelisin.",
    postNeedsConfirmation: "Jenna onay kutusunu işaretlemelisin.",
    postCreated: "Paylaşımın akışa eklendi.",
    commentEmpty: "Yorum boş olamaz.",
    groupNameShort: "Grup adı ve açıklaması gerekli.",
    groupCreated: "Grup oluşturuldu.",
    groupMessageEmpty: "Mesaj boş olamaz.",
    groupInvited: "Arkadaş gruba davet edildi.",
    dmEmpty: "Mesaj boş olamaz.",
    requestSent: "Arkadaşlık isteği gönderildi.",
    requestCancelled: "Arkadaşlık isteği iptal edildi.",
    requestAccepted: "Arkadaşlık kabul edildi.",
    requestDeclined: "Arkadaşlık isteği reddedildi.",
    profilePhotoUpdated: "Profil fotoğrafı güncellendi.",
    overlayMissingText: "Önce yazı katmanı metni gir.",
    overlayAdded: "Yazı katmanı eklendi.",
    overlayUpdated: "Yazı katmanı güncellendi.",
    overlayRemoved: "Yazı katmanı kaldırıldı.",
    postShared: "Gönderi arkadaşına iletildi.",
  },
};

const EN_COPY = {
  auth: {
    eyebrow: "Jenna Ortega fan network",
    title: "Feel like you are inside a real platform, not filling out a form.",
    body: "Feed, messages, groups and content creation come together in one clean and natural experience.",
    loginTitle: "Log in",
    registerTitle: "Sign up",
    loginBody: "Return to your account with email and password.",
    registerBody: "Open your account with a unique username, email, password and birth date.",
    loginTab: "Log in",
    registerTab: "Sign up",
    language: "Site language",
    username: "Username",
    email: "Email address",
    password: "Password",
    birthDate: "Birth date",
    usernameHelp: "Your username is unique across the platform.",
    rules: "I accept the community rules.",
    rulesHelp: "Data is currently stored in this browser with localStorage.",
    loginButton: "Log in",
    registerButton: "Create account",
    imageAlt: "Jenna Ortega photo",
  },
  nav: {
    feed: "Feed",
    friends: "Friends",
    groups: "Groups",
    messages: "Messages",
    profile: "Profile",
    create: "Create",
    logout: "Log out",
  },
  feed: {
    forYou: "For you",
    fanCircle: "Jenna circle",
    createPrompt: "Drop a new moment into the Jenna universe",
    createCta: "Create post",
    empty: "There are no visible posts yet.",
    suggestionsTitle: "Suggestions for you",
    suggestionsCopy: "Grow your feed by adding friends with usernames.",
    suggestionsEmpty: "No user suggestions are visible right now.",
    seeAll: "See all",
    visibleTo: "Visibility",
    tagged: "Tags",
    music: "Music",
    sendExisting: "Send this post to a friend",
    sendPanelEmpty: "You have no friend to send this to.",
    commentPlaceholder: "Add a comment...",
    postButton: "Post",
  },
  composer: {
    modalTitle: "Create new post",
    modalBody: "Shape your JENNAverse post before you publish it.",
    emptyTitle: "Drag your photo here or choose one",
    emptyBody: "Upload an image containing Jenna Ortega, then tune filters, text layers and visibility.",
    selectButton: "Choose from computer",
    clearImage: "Remove image",
    caption: "Caption",
    captionPlaceholder: "What are you leaving in the Jenna universe?",
    privacyTitle: "Who can see it?",
    selectedPeopleTitle: "Selected people",
    tagsTitle: "Tags",
    shareFriendsTitle: "Send to friend",
    musicTitle: "Track title",
    musicArtist: "Artist",
    filtersTitle: "Tone and filter",
    filterInfo: "Pick a preset or fine tune the sliders.",
    presetClean: "Clean",
    presetFilm: "Film",
    presetMono: "Mono",
    presetGlow: "Glow",
    brightness: "Brightness",
    contrast: "Contrast",
    saturation: "Saturation",
    sepia: "Sepia",
    grayscale: "Black and white",
    blur: "Blur",
    textTitle: "Text on photo",
    textDraft: "Layer text",
    textDraftPlaceholder: "Headline, slogan or a short note",
    textFont: "Font",
    textColor: "Color",
    textSize: "Size",
    addTextLayer: "Add layer",
    updateLayer: "Update layer",
    removeLayer: "Delete layer",
    layerList: "Layers",
    confirmJenna: "I confirm that Jenna Ortega appears in the selected image.",
    publishButton: "Publish post",
    selectedUsersEmpty: "No user can be selected.",
    tagsEmpty: "No user can be tagged.",
    shareEmpty: "You have no friend to send this to.",
  },
  messages: {
    title: "Messages",
    body: "Chat one to one with your friends or send a post directly.",
    sidebarTitle: "Chats",
    searchPlaceholder: "Search chat",
    emptyFriends: "Add a friend before using direct messages.",
    emptyStateTitle: "Your messages",
    emptyStateBody: "Pick a friend to start a private chat or send a post directly.",
    startButton: "Send message",
    emptyThread: "No messages in this chat yet.",
    placeholder: "Write a message",
    sharedPostLabel: "Shared a post",
  },
  privacy: {
    public: "Public",
    friends: "Friends only",
    selected: "Selected people",
  },
};

const DE_COPY = {
  auth: {
    eyebrow: "Jenna-Ortega-Fan-Netzwerk",
    title: "Es soll sich wie eine echte Plattform anfühlen, nicht wie ein Formular.",
    body: "Feed, Nachrichten, Gruppen und Content-Erstellung laufen in einer sauberen und natürlichen Erfahrung zusammen.",
    loginTitle: "Anmelden",
    registerTitle: "Registrieren",
    loginBody: "Mit E-Mail und Passwort zu deinem Konto zurückkehren.",
    registerBody: "Erstelle dein Konto mit eindeutigem Benutzernamen, E-Mail, Passwort und Geburtsdatum.",
    loginTab: "Anmelden",
    registerTab: "Registrieren",
    language: "Seitensprache",
    username: "Benutzername",
    email: "E-Mail-Adresse",
    password: "Passwort",
    birthDate: "Geburtsdatum",
    usernameHelp: "Dein Benutzername ist auf der gesamten Plattform eindeutig.",
    rules: "Ich akzeptiere die Community-Regeln.",
    rulesHelp: "Die Daten werden derzeit mit localStorage in diesem Browser gespeichert.",
    loginButton: "Anmelden",
    registerButton: "Konto erstellen",
    imageAlt: "Jenna-Ortega-Foto",
  },
  nav: {
    feed: "Feed",
    friends: "Freunde",
    groups: "Gruppen",
    messages: "Nachrichten",
    profile: "Profil",
    create: "Erstellen",
    logout: "Abmelden",
  },
  feed: {
    forYou: "Für dich",
    fanCircle: "Jenna-Kreis",
    createPrompt: "Lass einen neuen Moment im Jenna-Universum da",
    createCta: "Beitrag erstellen",
    empty: "Noch sind keine sichtbaren Beiträge da.",
    suggestionsTitle: "Empfehlungen für dich",
    suggestionsCopy: "Erweitere deinen Feed, indem du Freunde per Benutzername hinzufügst.",
    suggestionsEmpty: "Zurzeit sind keine Empfehlungen sichtbar.",
    seeAll: "Alle sehen",
    visibleTo: "Sichtbarkeit",
    tagged: "Markierungen",
    music: "Musik",
    sendExisting: "Diesen Beitrag an einen Freund senden",
    sendPanelEmpty: "Du hast keinen Freund zum Senden.",
    commentPlaceholder: "Kommentar hinzufügen...",
    postButton: "Senden",
  },
  composer: {
    modalTitle: "Neuen Beitrag erstellen",
    modalBody: "Gestalte deinen JENNAverse-Beitrag, bevor du ihn veröffentlichst.",
    emptyTitle: "Ziehe dein Foto hierher oder wähle eines aus",
    emptyBody: "Lade ein Bild mit Jenna Ortega hoch und passe danach Filter, Text und Sichtbarkeit an.",
    selectButton: "Vom Computer wählen",
    clearImage: "Bild entfernen",
    caption: "Beschreibung",
    captionPlaceholder: "Was lässt du im Jenna-Universum zurück?",
    privacyTitle: "Wer kann es sehen?",
    selectedPeopleTitle: "Ausgewählte Personen",
    tagsTitle: "Markierungen",
    shareFriendsTitle: "An Freund senden",
    musicTitle: "Titel",
    musicArtist: "Interpret",
    filtersTitle: "Ton und Filter",
    filterInfo: "Wähle ein Preset oder stelle die Regler fein ein.",
    presetClean: "Klar",
    presetFilm: "Film",
    presetMono: "Mono",
    presetGlow: "Glow",
    brightness: "Helligkeit",
    contrast: "Kontrast",
    saturation: "Sättigung",
    sepia: "Sepia",
    grayscale: "Schwarzweiß",
    blur: "Unschärfe",
    textTitle: "Text auf Foto",
    textDraft: "Ebenentext",
    textDraftPlaceholder: "Überschrift, Slogan oder kurze Notiz",
    textFont: "Schrift",
    textColor: "Farbe",
    textSize: "Größe",
    addTextLayer: "Ebene hinzufügen",
    updateLayer: "Ebene aktualisieren",
    removeLayer: "Ebene löschen",
    layerList: "Ebenen",
    confirmJenna: "Ich bestätige, dass Jenna Ortega im gewählten Bild zu sehen ist.",
    publishButton: "Beitrag veröffentlichen",
    selectedUsersEmpty: "Es gibt keinen auswählbaren Nutzer.",
    tagsEmpty: "Es gibt keinen markierbaren Nutzer.",
    shareEmpty: "Du hast keinen Freund zum Senden.",
  },
  messages: {
    title: "Nachrichten",
    body: "Chatte direkt mit deinen Freunden oder sende einen Beitrag direkt weiter.",
    sidebarTitle: "Chats",
    searchPlaceholder: "Chat suchen",
    emptyFriends: "Füge zuerst einen Freund hinzu, um Direktnachrichten zu nutzen.",
    emptyStateTitle: "Deine Nachrichten",
    emptyStateBody: "Wähle einen Freund für einen privaten Chat oder sende direkt einen Beitrag.",
    startButton: "Nachricht senden",
    emptyThread: "In diesem Chat gibt es noch keine Nachrichten.",
    placeholder: "Nachricht schreiben",
    sharedPostLabel: "Hat einen Beitrag geteilt",
  },
  privacy: {
    public: "Öffentlich",
    friends: "Nur Freunde",
    selected: "Ausgewählte Personen",
  },
};

const COPY = {
  tr: TR_COPY,
  en: mergeTranslations(TR_COPY, EN_COPY),
  de: mergeTranslations(TR_COPY, DE_COPY),
};

const app = document.getElementById("app");
const database = loadDatabase();

ensureOwnerAccount(database);
normalizeDatabase(database);
ensureSystemGroups(database);
saveDatabase();

const state = {
  lang: loadLanguage(),
  authMode: "login",
  currentView: "feed",
  notice: null,
  friendSearch: "",
  dmSearch: "",
  activeGroupId: null,
  activeDmUserId: null,
  shareMenuPostId: null,
  commentDrafts: {},
  dmDrafts: {},
  groupDrafts: {},
  drag: null,
  ui: {
    composerOpen: false,
  },
  composer: createEmptyComposer(),
};

boot();

function boot() {
  if (!state.activeGroupId) {
    state.activeGroupId = getVisibleGroups(getSessionUserId())[0]?.id || null;
  }
  document.documentElement.lang = state.lang;
  attachHandlers();
  setupGlobalPointerHandlers();
  render();
}

function render() {
  document.documentElement.lang = state.lang;
  const currentUser = getCurrentUser();
  if (!currentUser) {
    app.innerHTML = renderAuth();
    return;
  }

  if (!state.activeGroupId) {
    state.activeGroupId = getVisibleGroups(currentUser.id)[0]?.id || null;
  }

  app.innerHTML = `
    <div class="app-shell">
      ${renderRail(currentUser)}
      <div class="page-shell">
        ${renderNotice()}
        ${renderCurrentView(currentUser)}
      </div>
      ${renderFloatingDm(currentUser)}
      ${state.ui.composerOpen ? renderComposerModal(currentUser) : ""}
    </div>
  `;
}

function renderAuth() {
  const isLogin = state.authMode === "login";
  return `
    <div class="auth-shell">
      <section class="auth-showcase">
        <div class="eyebrow">${escapeHtml(t("auth.eyebrow"))}</div>
        <h1 class="auth-title">${escapeHtml(t("auth.title"))}</h1>
        <p class="auth-copy">${escapeHtml(t("auth.body"))}</p>
        <div class="auth-photos">
          <div class="auth-photo auth-photo-large">
            <img src="${PHOTO_LIBRARY.hero}" alt="${escapeHtml(t("auth.imageAlt"))}" />
          </div>
          <div class="auth-photo auth-photo-small">
            <img src="${PHOTO_LIBRARY.portrait}" alt="${escapeHtml(t("auth.imageAlt"))}" />
          </div>
        </div>
      </section>

      <section class="auth-card">
        <div class="auth-topbar">
          <div>
            <div class="label">${escapeHtml(t("auth.language"))}</div>
            <div class="lang-switch">
              ${renderLanguageButtons()}
            </div>
          </div>

          <div class="auth-tabs">
            <button type="button" class="tab-btn ${isLogin ? "active" : ""}" data-action="switch-auth" data-mode="login">${escapeHtml(
              t("auth.loginTab"),
            )}</button>
            <button type="button" class="tab-btn ${!isLogin ? "active" : ""}" data-action="switch-auth" data-mode="register">${escapeHtml(
              t("auth.registerTab"),
            )}</button>
          </div>
        </div>

        ${renderNotice()}

        <div class="auth-heading">
          <h2>${escapeHtml(t(isLogin ? "auth.loginTitle" : "auth.registerTitle"))}</h2>
          <p>${escapeHtml(t(isLogin ? "auth.loginBody" : "auth.registerBody"))}</p>
        </div>

        ${
          isLogin
            ? `
              <form class="form-stack" data-form="login">
                <label class="field">
                  <span>${escapeHtml(t("auth.email"))}</span>
                  <input class="input" name="email" type="email" required />
                </label>
                <label class="field">
                  <span>${escapeHtml(t("auth.password"))}</span>
                  <input class="input" name="password" type="password" required />
                </label>
                <button class="btn btn-primary" type="submit">${escapeHtml(t("auth.loginButton"))}</button>
              </form>
            `
            : `
              <form class="form-stack" data-form="register">
                <label class="field">
                  <span>${escapeHtml(t("auth.username"))}</span>
                  <input class="input" name="username" type="text" required />
                  <small>${escapeHtml(t("auth.usernameHelp"))}</small>
                </label>
                <label class="field">
                  <span>${escapeHtml(t("auth.email"))}</span>
                  <input class="input" name="email" type="email" required />
                </label>
                <label class="field">
                  <span>${escapeHtml(t("auth.password"))}</span>
                  <input class="input" name="password" type="password" required />
                </label>
                <label class="field">
                  <span>${escapeHtml(t("auth.birthDate"))}</span>
                  <input class="input" name="birthDate" type="date" required />
                </label>
                <label class="checkbox-row">
                  <input type="checkbox" name="rules" required />
                  <span>${escapeHtml(t("auth.rules"))}<br /><small>${escapeHtml(t("auth.rulesHelp"))}</small></span>
                </label>
                <button class="btn btn-primary" type="submit">${escapeHtml(t("auth.registerButton"))}</button>
              </form>
            `
        }
      </section>
    </div>
  `;
}

function renderRail(user) {
  const items = [
    { type: "view", id: "feed", label: t("nav.feed"), icon: icon("home") },
    { type: "view", id: "friends", label: t("nav.friends"), icon: icon("friends") },
    { type: "view", id: "groups", label: t("nav.groups"), icon: icon("groups") },
    { type: "view", id: "messages", label: t("nav.messages"), icon: icon("messages") },
    { type: "action", id: "open-composer", label: t("nav.create"), icon: icon("plus") },
    { type: "view", id: "profile", label: t("nav.profile"), icon: renderAvatar(user, "sm") },
  ];

  return `
    <aside class="rail">
      <div class="rail-top">
        <div class="brand-badge">J</div>
        <div class="brand-copy">
          <strong>${escapeHtml(t("app.name"))}</strong>
          <span>${escapeHtml(t("app.tagline"))}</span>
        </div>
      </div>

      <nav class="rail-nav">
        ${items
          .map((item) => {
            if (item.type === "view") {
              return `
                <button type="button" class="rail-btn ${state.currentView === item.id ? "active" : ""}" data-action="change-view" data-view="${escapeHtml(
                  item.id,
                )}">
                  <span class="rail-icon">${item.icon}</span>
                  <span class="rail-label">${escapeHtml(item.label)}</span>
                </button>
              `;
            }

            return `
              <button type="button" class="rail-btn rail-btn-create" data-action="${escapeHtml(item.id)}">
                <span class="rail-icon">${item.icon}</span>
                <span class="rail-label">${escapeHtml(item.label)}</span>
              </button>
            `;
          })
          .join("")}
      </nav>

      <div class="rail-bottom">
        <div class="lang-switch lang-switch-rail">
          ${renderLanguageButtons()}
        </div>
        <button type="button" class="rail-btn rail-btn-muted" data-action="logout">
          <span class="rail-icon">${icon("logout")}</span>
          <span class="rail-label">${escapeHtml(t("nav.logout"))}</span>
        </button>
      </div>
    </aside>
  `;
}

function renderCurrentView(user) {
  switch (state.currentView) {
    case "friends":
      return renderFriendsView(user);
    case "groups":
      return renderGroupsView(user);
    case "messages":
      return renderMessagesView(user);
    case "profile":
      return renderProfileView(user);
    case "feed":
    default:
      return renderFeedView(user);
  }
}

function renderFeedView(user) {
  const visiblePosts = getVisiblePosts(user.id);
  const suggestions = getSuggestedUsers(user);
  const storyUsers = getStoryUsers(user);

  return `
    <section class="feed-layout">
      <main class="feed-main">
        <div class="story-surface">
          <div class="surface-head">
            <div class="feed-tab-row">
              <span class="feed-tab active">${escapeHtml(t("feed.forYou"))}</span>
              <span class="feed-tab">${escapeHtml(t("feed.fanCircle"))}</span>
            </div>
            <button type="button" class="mini-action" data-action="open-composer">
              ${icon("plus")}
              <span>${escapeHtml(t("nav.create"))}</span>
            </button>
          </div>

          <div class="story-row">
            ${
              storyUsers.length
                ? storyUsers.map((storyUser, index) => renderStoryBubble(storyUser, index === 0)).join("")
                : `<div class="empty-inline">${escapeHtml(t("shared.noFriends"))}</div>`
            }
          </div>
        </div>

        <button type="button" class="create-bar" data-action="open-composer">
          <span class="create-bar-avatar">${renderAvatar(user, "sm")}</span>
          <span class="create-bar-copy">${escapeHtml(t("feed.createPrompt"))}</span>
          <strong>${escapeHtml(t("feed.createCta"))}</strong>
        </button>

        <div class="post-stack">
          ${
            visiblePosts.length
              ? visiblePosts.map((post) => renderPostCard(post, user)).join("")
              : `<div class="panel-card panel-empty">${escapeHtml(t("feed.empty"))}</div>`
          }
        </div>
      </main>

      <aside class="feed-side">
        <div class="side-card">
          <div class="side-profile">
            ${renderAvatar(user, "lg")}
            <div>
              <strong>@${escapeHtml(user.username)}</strong>
              <p>${escapeHtml(user.email)}</p>
            </div>
          </div>
        </div>

        <div class="side-card">
          <div class="side-head">
            <strong>${escapeHtml(t("feed.suggestionsTitle"))}</strong>
            <span>${escapeHtml(t("feed.seeAll"))}</span>
          </div>
          <p class="side-copy">${escapeHtml(t("feed.suggestionsCopy"))}</p>
          <div class="suggestion-list">
            ${
              suggestions.length
                ? suggestions.map((candidate) => renderSuggestionRow(user, candidate)).join("")
                : `<div class="empty-inline">${escapeHtml(t("feed.suggestionsEmpty"))}</div>`
            }
          </div>
        </div>
      </aside>
    </section>
  `;
}

function renderStoryBubble(user, isCurrentUser) {
  return `
    <button type="button" class="story-bubble ${isCurrentUser ? "current" : ""}" data-action="change-view" data-view="profile">
      <span class="story-ring">
        ${renderAvatar(user, "md")}
      </span>
      <span class="story-name">@${escapeHtml(excerpt(user.username, 14))}</span>
    </button>
  `;
}

function renderSuggestionRow(currentUser, candidate) {
  const isFriend = currentUser.friendIds.includes(candidate.id);
  const isIncoming = currentUser.incomingRequestIds.includes(candidate.id);
  const isPending = currentUser.outgoingRequestIds.includes(candidate.id);

  return `
    <div class="suggestion-row">
      <div class="suggestion-meta">
        ${renderAvatar(candidate, "sm")}
        <div>
          <strong>@${escapeHtml(candidate.username)}</strong>
          <p>${escapeHtml(formatDate(candidate.joinedAt))}</p>
        </div>
      </div>
      ${
        isFriend
          ? `<button type="button" class="text-action" data-action="open-dm-user" data-user-id="${escapeHtml(candidate.id)}">${escapeHtml(
              t("friends.openChat"),
            )}</button>`
          : isIncoming
            ? `<button type="button" class="text-action" data-action="accept-request" data-user-id="${escapeHtml(candidate.id)}">${escapeHtml(
                t("friends.accept"),
              )}</button>`
            : isPending
              ? `<button type="button" class="text-action" data-action="cancel-request" data-user-id="${escapeHtml(candidate.id)}">${escapeHtml(
                  t("friends.pending"),
                )}</button>`
              : `<button type="button" class="text-action" data-action="send-request" data-user-id="${escapeHtml(candidate.id)}">${escapeHtml(
                  t("friends.sendRequest"),
                )}</button>`
      }
    </div>
  `;
}

function renderPostCard(post, currentUser) {
  const author = getUserById(post.userId);
  if (!author) {
    return "";
  }

  const comments = Array.isArray(post.comments) ? post.comments : [];
  const shareOpen = state.shareMenuPostId === post.id;
  const likeCount = Array.isArray(post.likes) ? post.likes.length : 0;
  const friendUsers = currentUser.friendIds.map(getUserById).filter(Boolean);

  return `
    <article class="post-card">
      <div class="post-head">
        <div class="identity-line">
          ${renderAvatar(author, "sm")}
          <div class="identity-copy">
            <strong>@${escapeHtml(author.username)}</strong>
            <p>${escapeHtml(formatRelativeTime(post.createdAt))}</p>
          </div>
        </div>
        <button type="button" class="icon-btn icon-btn-ghost" data-action="toggle-post-share" data-post-id="${escapeHtml(post.id)}">
          ${icon("dots")}
        </button>
      </div>

      <div class="post-stage">
        <img
          class="post-image"
          src="${escapeHtml(post.imageUrl)}"
          alt="${escapeHtml(t("auth.imageAlt"))}"
          style="filter:${buildFilterString(post.filters)}"
        />
        ${(post.overlays || []).map((overlay) => renderPostOverlay(overlay)).join("")}
      </div>

      <div class="post-actions">
        <div class="action-cluster">
          <button type="button" class="icon-btn ${post.likes.includes(currentUser.id) ? "active" : ""}" data-action="toggle-like" data-post-id="${escapeHtml(
            post.id,
          )}">
            ${icon("heart")}
          </button>
          <button type="button" class="icon-btn" data-action="toggle-post-share" data-post-id="${escapeHtml(post.id)}">
            ${icon("send")}
          </button>
        </div>
        <button type="button" class="icon-btn">${icon("bookmark")}</button>
      </div>

      <div class="caption-block">
        <div class="stat-line">${escapeHtml(`${likeCount} ${t("shared.likes")}`)}</div>
        <p class="caption-line">
          <strong>@${escapeHtml(author.username)}</strong>
          <span>${escapeHtml(post.caption || "")}</span>
        </p>
        ${
          post.musicTitle
            ? `<p class="post-extra"><strong>${escapeHtml(t("feed.music"))}:</strong> ${escapeHtml(
                buildMusicLabel(post.musicTitle, post.musicArtist),
              )}</p>`
            : ""
        }
      </div>

      ${
        shareOpen
          ? `
            <div class="share-sheet">
              <div class="section-mini-head">
                <strong>${escapeHtml(t("feed.sendExisting"))}</strong>
              </div>
              ${
                friendUsers.length
                  ? friendUsers
                      .map(
                        (friend) => `
                          <button
                            type="button"
                            class="share-user-btn"
                            data-action="share-post-to-friend"
                            data-post-id="${escapeHtml(post.id)}"
                            data-user-id="${escapeHtml(friend.id)}"
                          >
                            ${renderAvatar(friend, "xs")}
                            <span>@${escapeHtml(friend.username)}</span>
                          </button>
                        `,
                      )
                      .join("")
                  : `<div class="empty-inline">${escapeHtml(t("feed.sendPanelEmpty"))}</div>`
              }
            </div>
          `
          : ""
      }

      <div class="comment-list">
        ${comments.map((comment) => renderCommentLine(comment)).join("")}
      </div>

      <form class="comment-form" data-form="comment" data-post-id="${escapeHtml(post.id)}">
        <input
          class="input input-quiet"
          type="text"
          data-bind="comment-draft"
          data-post-id="${escapeHtml(post.id)}"
          value="${escapeHtml(state.commentDrafts[post.id] || "")}"
          placeholder="${escapeHtml(t("feed.commentPlaceholder"))}"
        />
        <button class="text-action" type="submit">${escapeHtml(t("feed.postButton"))}</button>
      </form>
    </article>
  `;
}

function renderCommentLine(comment) {
  const commentUser = getUserById(comment.userId);
  if (!commentUser) {
    return "";
  }

  return `
    <div class="comment-item">
      ${renderAvatar(commentUser, "xs")}
      <p><strong>@${escapeHtml(commentUser.username)}</strong> ${escapeHtml(comment.text)}</p>
    </div>
  `;
}

function renderPostOverlay(overlay) {
  return `<div class="post-overlay" style="${overlayStyle(overlay)}">${escapeHtml(overlay.text)}</div>`;
}

function renderFriendsView(user) {
  const incomingUsers = user.incomingRequestIds.map(getUserById).filter(Boolean);
  const friendUsers = user.friendIds.map(getUserById).filter(Boolean);
  const searchResults = getFriendSearchResults(user);

  return `
    <section class="view-shell">
      <div class="view-header">
        <div>
          <h2>${escapeHtml(t("friends.title"))}</h2>
          <p>${escapeHtml(t("friends.body"))}</p>
        </div>
      </div>

      <div class="split-panels">
        <div class="panel-card">
          <div class="section-mini-head">
            <strong>${escapeHtml(t("friends.searchTitle"))}</strong>
          </div>
          <form class="search-form" data-form="friend-search">
            <span class="search-icon">${icon("search")}</span>
            <input class="input input-quiet" type="text" name="query" value="${escapeHtml(state.friendSearch)}" placeholder="${escapeHtml(
              t("friends.searchPlaceholder"),
            )}" />
            <button class="text-action" type="submit">${escapeHtml(t("friends.searchButton"))}</button>
          </form>

          <div class="directory-list">
            ${
              state.friendSearch.trim()
                ? searchResults.length
                  ? searchResults.map((candidate) => renderFriendSearchRow(user, candidate)).join("")
                  : `<div class="empty-inline">${escapeHtml(t("friends.noResults"))}</div>`
                : `<div class="empty-inline">${escapeHtml(t("friends.searchPlaceholder"))}</div>`
            }
          </div>
        </div>

        <div class="panel-card">
          <div class="section-mini-head">
            <strong>${escapeHtml(t("friends.incomingTitle"))}</strong>
          </div>
          <div class="directory-list">
            ${
              incomingUsers.length
                ? incomingUsers.map((candidate) => renderIncomingRow(candidate)).join("")
                : `<div class="empty-inline">${escapeHtml(t("friends.incomingEmpty"))}</div>`
            }
          </div>
        </div>
      </div>

      <div class="panel-card">
        <div class="section-mini-head">
          <strong>${escapeHtml(t("friends.listTitle"))}</strong>
        </div>
        <div class="directory-list">
          ${
            friendUsers.length
              ? friendUsers.map((friend) => renderFriendRow(friend)).join("")
              : `<div class="empty-inline">${escapeHtml(t("friends.listEmpty"))}</div>`
          }
        </div>
      </div>
    </section>
  `;
}

function renderFriendSearchRow(currentUser, candidate) {
  const isFriend = currentUser.friendIds.includes(candidate.id);
  const pending = currentUser.outgoingRequestIds.includes(candidate.id);
  const incoming = currentUser.incomingRequestIds.includes(candidate.id);

  return `
    <div class="directory-row">
      <div class="directory-main">
        ${renderAvatar(candidate, "sm")}
        <div>
          <strong>@${escapeHtml(candidate.username)}</strong>
          <p>${escapeHtml(candidate.email)}</p>
        </div>
      </div>
      <div class="inline-actions">
        ${
          isFriend
            ? `<button type="button" class="text-action" data-action="open-dm-user" data-user-id="${escapeHtml(candidate.id)}">${escapeHtml(
                t("friends.openChat"),
              )}</button>`
            : incoming
              ? `<button type="button" class="text-action" data-action="accept-request" data-user-id="${escapeHtml(candidate.id)}">${escapeHtml(
                  t("friends.accept"),
                )}</button>`
              : pending
                ? `<button type="button" class="text-action" data-action="cancel-request" data-user-id="${escapeHtml(candidate.id)}">${escapeHtml(
                    t("friends.pending"),
                  )}</button>`
                : `<button type="button" class="text-action" data-action="send-request" data-user-id="${escapeHtml(candidate.id)}">${escapeHtml(
                    t("friends.sendRequest"),
                  )}</button>`
        }
      </div>
    </div>
  `;
}

function renderIncomingRow(user) {
  return `
    <div class="directory-row">
      <div class="directory-main">
        ${renderAvatar(user, "sm")}
        <div>
          <strong>@${escapeHtml(user.username)}</strong>
          <p>${escapeHtml(user.email)}</p>
        </div>
      </div>
      <div class="inline-actions">
        <button type="button" class="text-action" data-action="accept-request" data-user-id="${escapeHtml(user.id)}">${escapeHtml(
          t("friends.accept"),
        )}</button>
        <button type="button" class="text-action" data-action="decline-request" data-user-id="${escapeHtml(user.id)}">${escapeHtml(
          t("friends.decline"),
        )}</button>
      </div>
    </div>
  `;
}

function renderFriendRow(user) {
  return `
    <div class="directory-row">
      <div class="directory-main">
        ${renderAvatar(user, "sm")}
        <div>
          <strong>@${escapeHtml(user.username)}</strong>
          <p>${escapeHtml(user.email)}</p>
        </div>
      </div>
      <button type="button" class="text-action" data-action="open-dm-user" data-user-id="${escapeHtml(user.id)}">${escapeHtml(
        t("friends.openChat"),
      )}</button>
    </div>
  `;
}

function renderGroupsView(user) {
  const groups = getVisibleGroups(user.id);
  const activeGroup = groups.find((group) => group.id === state.activeGroupId) || groups[0] || null;
  const inviteableFriends = getInviteableFriends(user, activeGroup);

  return `
    <section class="view-shell">
      <div class="view-header">
        <div>
          <h2>${escapeHtml(t("groups.title"))}</h2>
          <p>${escapeHtml(t("groups.body"))}</p>
        </div>
      </div>

      <div class="split-panels">
        <div class="panel-card">
          <div class="section-mini-head">
            <strong>${escapeHtml(t("groups.createTitle"))}</strong>
          </div>
          <form class="form-stack" data-form="create-group">
            <div class="two-field">
              <label class="field">
                <span>${escapeHtml(t("groups.name"))}</span>
                <input class="input" type="text" name="name" placeholder="${escapeHtml(t("groups.namePlaceholder"))}" required />
              </label>
              <label class="field">
                <span>${escapeHtml(t("groups.description"))}</span>
                <input class="input" type="text" name="description" placeholder="${escapeHtml(
                  t("groups.descriptionPlaceholder"),
                )}" required />
              </label>
            </div>
            <div class="field">
              <span>${escapeHtml(t("groups.inviteFriends"))}</span>
              <small>${escapeHtml(t("groups.inviteHint"))}</small>
              <div class="chip-grid">
                ${
                  user.friendIds.length
                    ? user.friendIds
                        .map((friendId) => {
                          const friend = getUserById(friendId);
                          return `
                            <label class="check-chip">
                              <input type="checkbox" name="memberIds" value="${escapeHtml(friendId)}" />
                              <span>@${escapeHtml(friend?.username || "")}</span>
                            </label>
                          `;
                        })
                        .join("")
                    : `<div class="empty-inline">${escapeHtml(t("shared.noFriends"))}</div>`
                }
              </div>
            </div>
            <button class="btn btn-primary" type="submit">${escapeHtml(t("shared.create"))}</button>
          </form>
        </div>

        <div class="panel-card">
          <div class="section-mini-head">
            <strong>${escapeHtml(t("groups.listTitle"))}</strong>
          </div>
          <div class="conversation-list">
            ${
              groups.length
                ? groups.map((group) => renderGroupListItem(group)).join("")
                : `<div class="empty-inline">${escapeHtml(t("groups.empty"))}</div>`
            }
          </div>
        </div>
      </div>

      <div class="messenger-layout">
        <div class="message-main message-main-wide">
          ${
            activeGroup
              ? `
                <div class="message-header">
                  <div>
                    <strong>${escapeHtml(activeGroup.name)}</strong>
                    <p>${escapeHtml(resolveGroupDescription(activeGroup))}</p>
                  </div>
                  <div class="badge-row">
                    <span class="soft-badge">${escapeHtml(`${activeGroup.memberIds.length} ${t("shared.members")}`)}</span>
                    <span class="soft-badge">${escapeHtml(
                      activeGroup.type === "system" ? t("shared.systemGroup") : t("shared.customGroup"),
                    )}</span>
                  </div>
                </div>
                <div class="info-banner">${escapeHtml(
                  activeGroup.type === "system" ? t("groups.lockedInfo") : t("groups.customInfo"),
                )}</div>
                <div class="member-box">
                  <div class="section-mini-head">
                    <strong>${escapeHtml(t("groups.membersTitle"))}</strong>
                  </div>
                  <div class="chip-grid">
                    ${activeGroup.memberIds.map((memberId) => renderMemberChip(memberId, activeGroup.ownerId)).join("")}
                  </div>
                </div>
                ${
                  activeGroup.type === "custom"
                    ? `
                      <div class="member-box">
                        <div class="section-mini-head">
                          <strong>${escapeHtml(t("groups.inviteMore"))}</strong>
                        </div>
                        ${
                          inviteableFriends.length
                            ? inviteableFriends
                                .map(
                                  (friend) => `
                                    <div class="directory-row">
                                      <div class="directory-main">
                                        ${renderAvatar(friend, "sm")}
                                        <div>
                                          <strong>@${escapeHtml(friend.username)}</strong>
                                        </div>
                                      </div>
                                      <button type="button" class="text-action" data-action="invite-friend-group" data-group-id="${escapeHtml(
                                        activeGroup.id,
                                      )}" data-user-id="${escapeHtml(friend.id)}">${escapeHtml(t("shared.invite"))}</button>
                                    </div>
                                  `,
                                )
                                .join("")
                            : `<div class="empty-inline">${escapeHtml(t("groups.inviteEmpty"))}</div>`
                        }
                      </div>
                    `
                    : ""
                }
                <div class="thread">
                  ${
                    activeGroup.messages.length
                      ? activeGroup.messages.map((message) => renderGroupMessage(message, user.id)).join("")
                      : `<div class="empty-inline">${escapeHtml(t("groups.messagesEmpty"))}</div>`
                  }
                </div>
                <form class="dm-form" data-form="group-message" data-group-id="${escapeHtml(activeGroup.id)}">
                  <input
                    class="input input-quiet"
                    type="text"
                    data-bind="group-draft"
                    data-group-id="${escapeHtml(activeGroup.id)}"
                    value="${escapeHtml(state.groupDrafts[activeGroup.id] || "")}"
                    placeholder="${escapeHtml(t("groups.messagePlaceholder"))}"
                  />
                  <button class="btn btn-primary" type="submit">${escapeHtml(t("shared.send"))}</button>
                </form>
              `
              : `<div class="empty-inline">${escapeHtml(t("groups.empty"))}</div>`
          }
        </div>
      </div>
    </section>
  `;
}

function renderGroupListItem(group) {
  return `
    <button type="button" class="conversation-item ${group.id === state.activeGroupId ? "active" : ""}" data-action="open-group" data-group-id="${escapeHtml(
      group.id,
    )}">
      <div class="conversation-main">
        <div class="conversation-avatar conversation-avatar-group">${icon("groups")}</div>
        <div>
          <strong>${escapeHtml(group.name)}</strong>
          <p>${escapeHtml(resolveGroupDescription(group))}</p>
        </div>
      </div>
      <span>${escapeHtml(`${group.memberIds.length} ${t("shared.members")}`)}</span>
    </button>
  `;
}

function renderGroupMessage(message, currentUserId) {
  const author = getUserById(message.senderId);
  return `
    <div class="message-bubble ${message.senderId === currentUserId ? "own" : ""}">
      <div class="bubble-head">
        <strong>@${escapeHtml(author?.username || "")}</strong>
        <span>${escapeHtml(formatRelativeTime(message.createdAt))}</span>
      </div>
      <p>${escapeHtml(message.text)}</p>
    </div>
  `;
}

function renderMessagesView(user) {
  const friendUsers = user.friendIds.map(getUserById).filter(Boolean);
  const filteredFriends = state.dmSearch.trim()
    ? friendUsers.filter((friend) => normalizeUsername(friend.username).includes(normalizeUsername(state.dmSearch)))
    : friendUsers;
  const activeFriend = getUserById(state.activeDmUserId);
  const conversation = activeFriend ? getConversationByUsers(user.id, activeFriend.id) : null;

  return `
    <section class="view-shell">
      <div class="view-header">
        <div>
          <h2>${escapeHtml(t("messages.title"))}</h2>
          <p>${escapeHtml(t("messages.body"))}</p>
        </div>
      </div>

      <div class="messenger-layout">
        <aside class="message-sidebar">
          <div class="message-sidebar-head">
            <div>
              <strong>@${escapeHtml(user.username)}</strong>
              <p>${escapeHtml(t("messages.sidebarTitle"))}</p>
            </div>
          </div>

          <label class="search-form search-form-compact">
            <span class="search-icon">${icon("search")}</span>
            <input
              class="input input-quiet"
              type="text"
              data-bind="dm-search"
              value="${escapeHtml(state.dmSearch)}"
              placeholder="${escapeHtml(t("messages.searchPlaceholder"))}"
            />
          </label>

          <div class="story-row story-row-compact">
            ${friendUsers.slice(0, 8).map((friend) => renderStoryBubble(friend, false)).join("")}
          </div>

          <div class="conversation-list">
            ${
              filteredFriends.length
                ? filteredFriends.map((friend) => renderConversationItem(user, friend)).join("")
                : `<div class="empty-inline">${escapeHtml(t("messages.emptyFriends"))}</div>`
            }
          </div>
        </aside>

        <div class="message-main">
          ${
            activeFriend
              ? `
                <div class="message-header">
                  <div class="directory-main">
                    ${renderAvatar(activeFriend, "sm")}
                    <div>
                      <strong>@${escapeHtml(activeFriend.username)}</strong>
                      <p>${escapeHtml(t("shared.directMessage"))}</p>
                    </div>
                  </div>
                </div>
                <div class="thread">
                  ${
                    conversation && conversation.messages.length
                      ? conversation.messages.map((message) => renderDmMessage(message, user.id)).join("")
                      : `<div class="empty-inline">${escapeHtml(t("messages.emptyThread"))}</div>`
                  }
                </div>
                <form class="dm-form" data-form="dm-message" data-user-id="${escapeHtml(activeFriend.id)}">
                  <input
                    class="input input-quiet"
                    type="text"
                    data-bind="dm-draft"
                    data-user-id="${escapeHtml(activeFriend.id)}"
                    value="${escapeHtml(state.dmDrafts[activeFriend.id] || "")}"
                    placeholder="${escapeHtml(t("messages.placeholder"))}"
                  />
                  <button class="btn btn-primary" type="submit">${escapeHtml(t("shared.send"))}</button>
                </form>
              `
              : `
                <div class="message-empty">
                  <div class="message-empty-icon">${icon("messages")}</div>
                  <h3>${escapeHtml(t("messages.emptyStateTitle"))}</h3>
                  <p>${escapeHtml(t("messages.emptyStateBody"))}</p>
                  <button type="button" class="btn btn-primary" data-action="change-view" data-view="friends">${escapeHtml(
                    t("messages.startButton"),
                  )}</button>
                </div>
              `
          }
        </div>
      </div>
    </section>
  `;
}

function renderConversationItem(currentUser, friend) {
  const conversation = getConversationByUsers(currentUser.id, friend.id);
  const lastMessage = conversation?.messages?.[conversation.messages.length - 1];
  return `
    <button type="button" class="conversation-item ${friend.id === state.activeDmUserId ? "active" : ""}" data-action="open-dm-user" data-user-id="${escapeHtml(
      friend.id,
    )}">
      <div class="conversation-main">
        ${renderAvatar(friend, "sm")}
        <div>
          <strong>@${escapeHtml(friend.username)}</strong>
          <p>${escapeHtml(lastMessage ? summarizeDmMessage(lastMessage) : t("messages.emptyStateBody"))}</p>
        </div>
      </div>
      <span>${escapeHtml(lastMessage ? formatRelativeTime(lastMessage.createdAt) : "")}</span>
    </button>
  `;
}

function renderDmMessage(message, currentUserId) {
  const sender = getUserById(message.senderId);
  if (message.type === "post_share") {
    return `
      <div class="message-bubble ${message.senderId === currentUserId ? "own" : ""}">
        <div class="bubble-head">
          <strong>@${escapeHtml(sender?.username || "")}</strong>
          <span>${escapeHtml(formatRelativeTime(message.createdAt))}</span>
        </div>
        <p>${escapeHtml(t("messages.sharedPostLabel"))}</p>
        ${renderSharedSnapshot(message.snapshot)}
      </div>
    `;
  }

  return `
    <div class="message-bubble ${message.senderId === currentUserId ? "own" : ""}">
      <div class="bubble-head">
        <strong>@${escapeHtml(sender?.username || "")}</strong>
        <span>${escapeHtml(formatRelativeTime(message.createdAt))}</span>
      </div>
      <p>${escapeHtml(message.text)}</p>
    </div>
  `;
}

function renderSharedSnapshot(snapshot) {
  if (!snapshot) {
    return "";
  }

  return `
    <div class="shared-snapshot">
      <div class="snapshot-stage">
        <img src="${escapeHtml(snapshot.imageUrl)}" alt="${escapeHtml(t("auth.imageAlt"))}" style="filter:${buildFilterString(
          snapshot.filters,
        )}" />
        ${(snapshot.overlays || []).map((overlay) => renderPostOverlay(overlay)).join("")}
      </div>
      <div class="snapshot-copy">
        <strong>@${escapeHtml(snapshot.authorUsername)}</strong>
        <p>${escapeHtml(snapshot.caption || "")}</p>
      </div>
    </div>
  `;
}

function renderProfileView(user) {
  const userPosts = database.posts.filter((post) => post.userId === user.id);
  const isOwner = normalizeEmail(user.email) === normalizeEmail(OWNER_EMAIL);

  return `
    <section class="view-shell">
      <div class="view-header">
        <div>
          <h2>${escapeHtml(t("profile.title"))}</h2>
          <p>${escapeHtml(t("profile.body"))}</p>
        </div>
      </div>

      <div class="profile-hero">
        <div class="profile-avatar-wrap">
          ${renderAvatar(user, "xl")}
          <label class="avatar-upload">
            <input type="file" accept="image/*" data-bind="profile-avatar" />
            <span>${escapeHtml(t("profile.uploadPhoto"))}</span>
          </label>
        </div>

        <div class="profile-copy">
          <div class="profile-topline">
            <h3>@${escapeHtml(user.username)}</h3>
            <span class="soft-badge">${escapeHtml(isOwner ? t("profile.reservedBadge") : t("profile.standardBadge"))}</span>
          </div>
          <p>${escapeHtml(t("profile.photoHelp"))}</p>
          <div class="profile-meta-list">
            <div><span>${escapeHtml(t("profile.email"))}</span><strong>${escapeHtml(user.email)}</strong></div>
            <div><span>${escapeHtml(t("profile.birthDate"))}</span><strong>${escapeHtml(formatOptionalDate(user.birthDate))}</strong></div>
            <div><span>${escapeHtml(t("profile.joined"))}</span><strong>${escapeHtml(formatDate(user.joinedAt))}</strong></div>
          </div>
        </div>
      </div>

      <div class="profile-stats">
        ${renderStatTile(t("profile.statsPosts"), userPosts.length)}
        ${renderStatTile(t("profile.statsFriends"), user.friendIds.length)}
        ${renderStatTile(t("profile.statsGroups"), getVisibleGroups(user.id).length)}
      </div>

      <div class="panel-card">
        <div class="section-mini-head">
          <strong>${escapeHtml(t("profile.recentPosts"))}</strong>
        </div>
        ${
          userPosts.length
            ? `
              <div class="profile-grid">
                ${userPosts
                  .slice(0, 12)
                  .map(
                    (post) => `
                      <div class="profile-tile">
                        <img src="${escapeHtml(post.imageUrl)}" alt="${escapeHtml(t("auth.imageAlt"))}" />
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            `
            : `<div class="empty-inline">${escapeHtml(t("profile.recentPostsEmpty"))}</div>`
        }
      </div>
    </section>
  `;
}

function renderStatTile(label, value) {
  return `
    <div class="stat-tile">
      <strong>${escapeHtml(String(value))}</strong>
      <span>${escapeHtml(label)}</span>
    </div>
  `;
}

function renderComposerModal(user) {
  const otherUsers = database.users.filter((candidate) => candidate.id !== user.id);
  const friendUsers = user.friendIds.map(getUserById).filter(Boolean);
  const selectedOverlay = getSelectedOverlay();

  return `
    <div class="modal-layer">
      <button type="button" class="modal-backdrop" data-action="close-composer" aria-label="${escapeHtml(t("shared.cancel"))}"></button>
      <section class="composer-modal ${state.composer.imageDataUrl ? "filled" : "empty"}">
        <div class="modal-header">
          <div class="modal-title-block">
            <h3>${escapeHtml(t("composer.modalTitle"))}</h3>
            <p>${escapeHtml(t("composer.modalBody"))}</p>
          </div>
          <div class="inline-actions">
            ${
              state.composer.imageDataUrl
                ? `<button type="button" class="text-action" data-action="clear-composer-image">${escapeHtml(
                    t("composer.clearImage"),
                  )}</button>`
                : ""
            }
            <button type="button" class="icon-btn icon-btn-ghost" data-action="close-composer">${icon("close")}</button>
          </div>
        </div>

        ${
          !state.composer.imageDataUrl
            ? `
              <label class="upload-stage">
                <input type="file" accept="image/*" data-bind="composer-image" />
                <div class="upload-icon">${icon("image")}</div>
                <h4>${escapeHtml(t("composer.emptyTitle"))}</h4>
                <p>${escapeHtml(t("composer.emptyBody"))}</p>
                <span class="btn btn-primary">${escapeHtml(t("composer.selectButton"))}</span>
              </label>
            `
            : `
              <div class="modal-body">
                <div class="modal-preview-panel">
                  <div class="preview-badges">
                    <span class="soft-badge">${escapeHtml(t(`privacy.${state.composer.privacy}`))}</span>
                  </div>
                  ${renderEditorStage()}
                </div>

                <div class="modal-controls">
                  <div class="composer-author">
                    ${renderAvatar(user, "sm")}
                    <div>
                      <strong>@${escapeHtml(user.username)}</strong>
                      <p>${escapeHtml(t("nav.create"))}</p>
                    </div>
                  </div>

                  <label class="field">
                    <span>${escapeHtml(t("composer.caption"))}</span>
                    <textarea class="input textarea" data-bind="composer-caption" placeholder="${escapeHtml(
                      t("composer.captionPlaceholder"),
                    )}">${escapeHtml(state.composer.caption)}</textarea>
                  </label>

                  <section class="modal-section">
                    <div class="section-mini-head">
                      <strong>${escapeHtml(t("composer.privacyTitle"))}</strong>
                    </div>
                    <div class="privacy-row">
                      ${renderPrivacyButton("public")}
                      ${renderPrivacyButton("friends")}
                      ${renderPrivacyButton("selected")}
                    </div>
                    ${
                      state.composer.privacy === "selected"
                        ? renderUserPicker(otherUsers, state.composer.selectedUserIds, "toggle-selected-user", t("composer.selectedUsersEmpty"))
                        : ""
                    }
                  </section>

                  <section class="modal-section">
                    <div class="section-mini-head">
                      <strong>${escapeHtml(t("composer.tagsTitle"))}</strong>
                    </div>
                    ${renderUserPicker(otherUsers, state.composer.taggedUserIds, "toggle-tag-user", t("composer.tagsEmpty"))}
                  </section>

                  <section class="modal-section">
                    <div class="section-mini-head">
                      <strong>${escapeHtml(t("composer.shareFriendsTitle"))}</strong>
                    </div>
                    ${renderUserPicker(friendUsers, state.composer.shareFriendIds, "toggle-share-friend", t("composer.shareEmpty"))}
                  </section>

                  <section class="modal-section">
                    <div class="section-mini-head">
                      <strong>${icon("music")}${escapeHtml(t("composer.musicTitle"))}</strong>
                    </div>
                    <div class="two-field">
                      <label class="field">
                        <span>${escapeHtml(t("composer.musicTitle"))}</span>
                        <input class="input" type="text" data-bind="composer-music-title" value="${escapeHtml(
                          state.composer.musicTitle,
                        )}" />
                      </label>
                      <label class="field">
                        <span>${escapeHtml(t("composer.musicArtist"))}</span>
                        <input class="input" type="text" data-bind="composer-music-artist" value="${escapeHtml(
                          state.composer.musicArtist,
                        )}" />
                      </label>
                    </div>
                  </section>

                  <section class="modal-section">
                    <div class="section-mini-head">
                      <strong>${icon("filter")}${escapeHtml(t("composer.filtersTitle"))}</strong>
                    </div>
                    <p class="section-copy">${escapeHtml(t("composer.filterInfo"))}</p>
                    <div class="chip-grid">
                      ${renderPresetButton("clean", t("composer.presetClean"))}
                      ${renderPresetButton("film", t("composer.presetFilm"))}
                      ${renderPresetButton("mono", t("composer.presetMono"))}
                      ${renderPresetButton("glow", t("composer.presetGlow"))}
                    </div>
                    ${renderFilterSlider("brightness", 60, 150, 1, "%")}
                    ${renderFilterSlider("contrast", 60, 150, 1, "%")}
                    ${renderFilterSlider("saturation", 0, 200, 1, "%")}
                    ${renderFilterSlider("sepia", 0, 100, 1, "%")}
                    ${renderFilterSlider("grayscale", 0, 100, 1, "%")}
                    ${renderFilterSlider("blur", 0, 6, 0.1, "px")}
                  </section>

                  <section class="modal-section">
                    <div class="section-mini-head">
                      <strong>${icon("text")}${escapeHtml(t("composer.textTitle"))}</strong>
                    </div>
                    <label class="field">
                      <span>${escapeHtml(t("composer.textDraft"))}</span>
                      <input class="input" type="text" data-bind="overlay-draft-text" value="${escapeHtml(
                        state.composer.overlayDraftText,
                      )}" placeholder="${escapeHtml(t("composer.textDraftPlaceholder"))}" />
                    </label>
                    <div class="three-field">
                      <label class="field">
                        <span>${escapeHtml(t("composer.textFont"))}</span>
                        <select class="input" data-bind="overlay-draft-font">
                          ${FONT_OPTIONS.map(
                            (font) =>
                              `<option value="${font.id}" ${state.composer.overlayDraftFont === font.id ? "selected" : ""}>${escapeHtml(
                                font.label,
                              )}</option>`,
                          ).join("")}
                        </select>
                      </label>
                      <label class="field">
                        <span>${escapeHtml(t("composer.textColor"))}</span>
                        <input class="input color-input" type="color" data-bind="overlay-draft-color" value="${escapeHtml(
                          state.composer.overlayDraftColor,
                        )}" />
                      </label>
                      <label class="field">
                        <span>${escapeHtml(t("composer.textSize"))}</span>
                        <input class="slider" type="range" min="16" max="84" step="1" data-bind="overlay-draft-size" value="${escapeHtml(
                          String(state.composer.overlayDraftSize),
                        )}" />
                      </label>
                    </div>
                    <div class="inline-actions">
                      <button type="button" class="text-action" data-action="add-overlay">${escapeHtml(
                        t("composer.addTextLayer"),
                      )}</button>
                      ${
                        selectedOverlay
                          ? `
                            <button type="button" class="text-action" data-action="update-overlay">${escapeHtml(
                              t("composer.updateLayer"),
                            )}</button>
                            <button type="button" class="text-action" data-action="remove-overlay">${escapeHtml(
                              t("composer.removeLayer"),
                            )}</button>
                          `
                          : ""
                      }
                    </div>
                    <div class="overlay-list">
                      ${
                        state.composer.overlays.length
                          ? state.composer.overlays
                              .map(
                                (overlay, index) => `
                                  <button type="button" class="overlay-chip ${overlay.id === state.composer.selectedOverlayId ? "active" : ""}" data-action="select-overlay" data-overlay-id="${escapeHtml(
                                    overlay.id,
                                  )}">
                                    <span>#${escapeHtml(String(index + 1))}</span>
                                    <strong>${escapeHtml(excerpt(overlay.text, 22))}</strong>
                                  </button>
                                `,
                              )
                              .join("")
                          : `<div class="empty-inline">${escapeHtml(t("shared.noImage"))}</div>`
                      }
                    </div>
                  </section>

                  <label class="toggle-row">
                    <input type="checkbox" data-bind="composer-confirm" ${state.composer.confirmJenna ? "checked" : ""} />
                    <span>${escapeHtml(t("composer.confirmJenna"))}</span>
                  </label>

                  <button type="button" class="btn btn-primary btn-wide" data-action="publish-post">${escapeHtml(
                    t("composer.publishButton"),
                  )}</button>
                </div>
              </div>
            `
        }
      </section>
    </div>
  `;
}

function renderEditorStage() {
  if (!state.composer.imageDataUrl) {
    return `<div class="editor-placeholder">${escapeHtml(t("shared.noImage"))}</div>`;
  }

  return `
    <div class="editor-stage">
      <img class="editor-image" src="${escapeHtml(state.composer.imageDataUrl)}" alt="${escapeHtml(t("auth.imageAlt"))}" style="filter:${buildFilterString(
        state.composer.filters,
      )}" />
      ${state.composer.overlays.map((overlay) => renderOverlayItem(overlay)).join("")}
    </div>
  `;
}

function renderOverlayItem(overlay) {
  return `
    <div class="overlay-item ${overlay.id === state.composer.selectedOverlayId ? "is-selected" : ""}" data-overlay-id="${escapeHtml(
      overlay.id,
    )}" style="${overlayStyle(overlay)}">
      ${escapeHtml(overlay.text)}
    </div>
  `;
}

function renderPrivacyButton(privacy) {
  return `
    <button type="button" class="tiny-pill ${state.composer.privacy === privacy ? "active" : ""}" data-action="set-privacy" data-privacy="${escapeHtml(
      privacy,
    )}">
      ${escapeHtml(t(`privacy.${privacy}`))}
    </button>
  `;
}

function renderPresetButton(preset, label) {
  const active = sameFilterValues(state.composer.filters, FILTER_PRESETS[preset]);
  return `
    <button type="button" class="tiny-pill ${active ? "active" : ""}" data-action="set-filter-preset" data-preset="${escapeHtml(preset)}">
      ${escapeHtml(label)}
    </button>
  `;
}

function renderFilterSlider(key, min, max, step, unit) {
  return `
    <label class="slider-field">
      <span>${escapeHtml(t(`composer.${key}`))}</span>
      <div class="slider-row">
        <input class="slider" type="range" min="${min}" max="${max}" step="${step}" value="${escapeHtml(
          String(state.composer.filters[key]),
        )}" data-filter-key="${escapeHtml(key)}" />
        <strong>${escapeHtml(`${state.composer.filters[key]}${unit}`)}</strong>
      </div>
    </label>
  `;
}

function renderUserPicker(users, selectedIds, action, emptyLabel) {
  if (!users.length) {
    return `<div class="empty-inline">${escapeHtml(emptyLabel)}</div>`;
  }

  return `
    <div class="chip-grid">
      ${users
        .map(
          (user) => `
            <button type="button" class="user-chip ${selectedIds.includes(user.id) ? "active" : ""}" data-action="${escapeHtml(
              action,
            )}" data-user-id="${escapeHtml(user.id)}">
              ${renderAvatar(user, "xs")}
              <span>@${escapeHtml(user.username)}</span>
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderMemberChip(userId, ownerId) {
  const user = getUserById(userId);
  if (!user) {
    return "";
  }
  return `
    <span class="member-chip">
      ${renderAvatar(user, "xs")}
      <strong>@${escapeHtml(user.username)}</strong>
      ${ownerId === userId ? `<small>${escapeHtml(t("shared.owner"))}</small>` : ""}
    </span>
  `;
}

function renderFloatingDm(user) {
  return `
    <button type="button" class="floating-dm" data-action="change-view" data-view="messages">
      ${icon("send")}
      <span>${escapeHtml(t("nav.messages"))}</span>
      <strong>${escapeHtml(String(user.friendIds.length))}</strong>
    </button>
  `;
}

function renderLanguageButtons() {
  return LANGUAGE_OPTIONS.map(
    (language) => `
      <button type="button" class="lang-btn ${state.lang === language.id ? "active" : ""}" data-action="change-language" data-lang="${escapeHtml(
        language.id,
      )}">
        ${escapeHtml(language.label)}
      </button>
    `,
  ).join("");
}

function renderNotice() {
  if (!state.notice) {
    return "";
  }
  return `<div class="notice ${escapeHtml(state.notice.type)}">${escapeHtml(state.notice.text)}</div>`;
}

function attachHandlers() {
  app.onclick = (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) {
      return;
    }

    const action = target.dataset.action;

    if (action === "change-language") {
      state.lang = target.dataset.lang;
      localStorage.setItem(STORAGE_KEYS.language, state.lang);
      render();
      return;
    }

    if (action === "switch-auth") {
      state.authMode = target.dataset.mode;
      state.notice = null;
      render();
      return;
    }

    if (action === "change-view") {
      state.currentView = target.dataset.view;
      state.shareMenuPostId = null;
      render();
      return;
    }

    if (action === "logout") {
      clearSession();
      state.ui.composerOpen = false;
      state.notice = createNotice("success", t("notices.logout"));
      state.currentView = "feed";
      render();
      return;
    }

    if (action === "open-composer") {
      state.ui.composerOpen = true;
      render();
      return;
    }

    if (action === "close-composer") {
      state.ui.composerOpen = false;
      render();
      return;
    }

    if (action === "clear-composer-image") {
      state.composer.imageDataUrl = "";
      state.composer.overlays = [];
      state.composer.selectedOverlayId = "";
      render();
      return;
    }

    if (action === "set-privacy") {
      state.composer.privacy = target.dataset.privacy;
      render();
      return;
    }

    if (action === "toggle-selected-user") {
      toggleArrayValue(state.composer.selectedUserIds, target.dataset.userId);
      render();
      return;
    }

    if (action === "toggle-tag-user") {
      toggleArrayValue(state.composer.taggedUserIds, target.dataset.userId);
      render();
      return;
    }

    if (action === "toggle-share-friend") {
      toggleArrayValue(state.composer.shareFriendIds, target.dataset.userId);
      render();
      return;
    }

    if (action === "set-filter-preset") {
      state.composer.filters = { ...FILTER_PRESETS[target.dataset.preset] };
      render();
      return;
    }

    if (action === "add-overlay") {
      handleAddOverlay();
      return;
    }

    if (action === "update-overlay") {
      handleUpdateOverlay();
      return;
    }

    if (action === "remove-overlay") {
      handleRemoveOverlay();
      return;
    }

    if (action === "select-overlay") {
      selectOverlay(target.dataset.overlayId);
      render();
      return;
    }

    if (action === "publish-post") {
      handleCreatePost();
      return;
    }

    if (action === "toggle-like") {
      handleToggleLike(target.dataset.postId);
      return;
    }

    if (action === "toggle-post-share") {
      state.shareMenuPostId = state.shareMenuPostId === target.dataset.postId ? null : target.dataset.postId;
      render();
      return;
    }

    if (action === "share-post-to-friend") {
      handleShareExistingPost(target.dataset.postId, target.dataset.userId);
      return;
    }

    if (action === "send-request") {
      handleSendRequest(target.dataset.userId);
      return;
    }

    if (action === "cancel-request") {
      handleCancelRequest(target.dataset.userId);
      return;
    }

    if (action === "accept-request") {
      handleAcceptRequest(target.dataset.userId);
      return;
    }

    if (action === "decline-request") {
      handleDeclineRequest(target.dataset.userId);
      return;
    }

    if (action === "open-group") {
      state.activeGroupId = target.dataset.groupId;
      render();
      return;
    }

    if (action === "invite-friend-group") {
      handleInviteFriendToGroup(target.dataset.groupId, target.dataset.userId);
      return;
    }

    if (action === "open-dm-user") {
      state.currentView = "messages";
      state.activeDmUserId = target.dataset.userId;
      render();
    }
  };

  app.oninput = (event) => {
    if (event.target.matches("[data-bind='composer-caption']")) {
      state.composer.caption = event.target.value;
      return;
    }
    if (event.target.matches("[data-bind='composer-music-title']")) {
      state.composer.musicTitle = event.target.value;
      return;
    }
    if (event.target.matches("[data-bind='composer-music-artist']")) {
      state.composer.musicArtist = event.target.value;
      return;
    }
    if (event.target.matches("[data-bind='comment-draft']")) {
      state.commentDrafts[event.target.dataset.postId] = event.target.value;
      return;
    }
    if (event.target.matches("[data-bind='group-draft']")) {
      state.groupDrafts[event.target.dataset.groupId] = event.target.value;
      return;
    }
    if (event.target.matches("[data-bind='dm-draft']")) {
      state.dmDrafts[event.target.dataset.userId] = event.target.value;
      return;
    }
    if (event.target.matches("[data-bind='dm-search']")) {
      state.dmSearch = event.target.value;
      render();
      return;
    }
    if (event.target.matches("[data-bind='overlay-draft-text']")) {
      state.composer.overlayDraftText = event.target.value;
      return;
    }
    if (event.target.matches("[data-bind='overlay-draft-font']")) {
      state.composer.overlayDraftFont = event.target.value;
      return;
    }
    if (event.target.matches("[data-bind='overlay-draft-color']")) {
      state.composer.overlayDraftColor = event.target.value;
      return;
    }
    if (event.target.matches("[data-bind='overlay-draft-size']")) {
      state.composer.overlayDraftSize = Number(event.target.value);
    }
  };

  app.onchange = async (event) => {
    if (event.target.matches("[data-bind='composer-image']")) {
      const file = event.target.files?.[0];
      if (!file) {
        return;
      }
      if (file.size > 3 * 1024 * 1024) {
        state.notice = createNotice("error", t("notices.imageLarge"));
        render();
        return;
      }
      state.composer.imageDataUrl = await readFileAsDataUrl(file);
      render();
      return;
    }

    if (event.target.matches("[data-bind='profile-avatar']")) {
      const file = event.target.files?.[0];
      if (!file) {
        return;
      }
      if (file.size > 3 * 1024 * 1024) {
        state.notice = createNotice("error", t("notices.imageLarge"));
        render();
        return;
      }
      handleProfilePhotoUpdate(await readFileAsDataUrl(file));
      return;
    }

    if (event.target.matches("[data-bind='composer-confirm']")) {
      state.composer.confirmJenna = event.target.checked;
      return;
    }

    if (event.target.matches("[data-filter-key]")) {
      const key = event.target.dataset.filterKey;
      state.composer.filters[key] = Number(event.target.value);
      render();
    }
  };

  app.onsubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formName = form.dataset.form;

    if (formName === "login") {
      handleLogin(new FormData(form));
      return;
    }
    if (formName === "register") {
      handleRegister(new FormData(form));
      return;
    }
    if (formName === "friend-search") {
      state.friendSearch = String(new FormData(form).get("query") || "").trim();
      render();
      return;
    }
    if (formName === "comment") {
      handleAddComment(form.dataset.postId);
      return;
    }
    if (formName === "create-group") {
      handleCreateGroup(new FormData(form));
      return;
    }
    if (formName === "group-message") {
      handleSendGroupMessage(form.dataset.groupId);
      return;
    }
    if (formName === "dm-message") {
      handleSendDirectMessage(form.dataset.userId);
    }
  };
}

function setupGlobalPointerHandlers() {
  document.addEventListener("pointerdown", (event) => {
    const overlayElement = event.target.closest(".overlay-item");
    if (!overlayElement || !overlayElement.closest(".editor-stage")) {
      return;
    }

    const overlay = state.composer.overlays.find((item) => item.id === overlayElement.dataset.overlayId);
    if (!overlay) {
      return;
    }

    const stage = overlayElement.closest(".editor-stage");
    const rect = stage.getBoundingClientRect();
    state.composer.selectedOverlayId = overlay.id;
    hydrateOverlayDraft(overlay);
    state.drag = {
      overlayId: overlay.id,
      element: overlayElement,
      width: rect.width,
      height: rect.height,
      startClientX: event.clientX,
      startClientY: event.clientY,
      originX: overlay.x,
      originY: overlay.y,
    };
    event.preventDefault();
  });

  window.addEventListener("pointermove", (event) => {
    if (!state.drag) {
      return;
    }
    const overlay = state.composer.overlays.find((item) => item.id === state.drag.overlayId);
    if (!overlay) {
      return;
    }

    const deltaX = event.clientX - state.drag.startClientX;
    const deltaY = event.clientY - state.drag.startClientY;
    overlay.x = clamp(state.drag.originX + (deltaX / state.drag.width) * 100, 8, 92);
    overlay.y = clamp(state.drag.originY + (deltaY / state.drag.height) * 100, 8, 92);

    if (state.drag.element) {
      state.drag.element.style.left = `${overlay.x}%`;
      state.drag.element.style.top = `${overlay.y}%`;
    }
  });

  window.addEventListener("pointerup", () => {
    if (!state.drag) {
      return;
    }
    state.drag = null;
    render();
  });
}

function handleLogin(formData) {
  const email = normalizeEmail(formData.get("email"));
  const password = String(formData.get("password") || "");
  const user = database.users.find((item) => normalizeEmail(item.email) === email && item.password === password);

  if (!user) {
    state.notice = createNotice("error", t("notices.loginError"));
    render();
    return;
  }

  setSession(user.id);
  state.notice = createNotice("success", t("notices.loginSuccess"));
  render();
}

function handleRegister(formData) {
  const username = cleanUsername(formData.get("username"));
  const email = normalizeEmail(formData.get("email"));
  const password = String(formData.get("password") || "");
  const birthDate = String(formData.get("birthDate") || "");

  if (!username) {
    state.notice = createNotice("error", t("notices.registerUsernameExists"));
    render();
    return;
  }
  if (database.users.some((user) => normalizeEmail(user.email) === email)) {
    state.notice = createNotice("error", t("notices.registerEmailExists"));
    render();
    return;
  }
  if (database.users.some((user) => normalizeUsername(user.username) === normalizeUsername(username))) {
    state.notice = createNotice("error", t("notices.registerUsernameExists"));
    render();
    return;
  }
  if (isReservedUsername(username) && email !== normalizeEmail(OWNER_EMAIL)) {
    state.notice = createNotice("error", t("notices.reservedUsername"));
    render();
    return;
  }
  if (password.length < 8) {
    state.notice = createNotice("error", t("notices.passwordWeak"));
    render();
    return;
  }
  if (!birthDate || Number.isNaN(new Date(birthDate).getTime())) {
    state.notice = createNotice("error", t("notices.invalidBirthDate"));
    render();
    return;
  }
  if (calculateAge(birthDate) < 13) {
    state.notice = createNotice("error", t("notices.underage"));
    render();
    return;
  }

  const user = {
    id: generateId("user"),
    username,
    email,
    password,
    birthDate,
    joinedAt: new Date().toISOString(),
    avatarUrl: "",
    friendIds: [],
    incomingRequestIds: [],
    outgoingRequestIds: [],
  };

  database.users.push(user);
  ensureSystemGroups(database);
  saveDatabase();
  setSession(user.id);
  state.notice = createNotice("success", t("notices.registerSuccess"));
  render();
}

function handleCreatePost() {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    return;
  }
  if (!state.composer.imageDataUrl) {
    state.notice = createNotice("error", t("notices.postNeedsImage"));
    render();
    return;
  }
  if (!state.composer.confirmJenna) {
    state.notice = createNotice("error", t("notices.postNeedsConfirmation"));
    render();
    return;
  }

  const post = {
    id: generateId("post"),
    userId: currentUser.id,
    imageUrl: state.composer.imageDataUrl,
    caption: state.composer.caption.trim(),
    privacy: state.composer.privacy,
    selectedUserIds: uniqueIds(state.composer.selectedUserIds),
    taggedUserIds: uniqueIds(state.composer.taggedUserIds),
    shareFriendIds: uniqueIds(state.composer.shareFriendIds),
    musicTitle: state.composer.musicTitle.trim(),
    musicArtist: state.composer.musicArtist.trim(),
    filters: { ...state.composer.filters },
    overlays: state.composer.overlays.map((overlay) => ({ ...overlay })),
    likes: [],
    comments: [],
    createdAt: new Date().toISOString(),
  };

  database.posts.unshift(post);
  state.composer.shareFriendIds.forEach((friendId) => {
    const conversation = findOrCreateConversation(currentUser.id, friendId);
    conversation.messages.push({
      id: generateId("message"),
      senderId: currentUser.id,
      createdAt: new Date().toISOString(),
      type: "post_share",
      snapshot: createPostSnapshot(post, currentUser.username),
    });
  });

  saveDatabase();
  state.composer = createEmptyComposer();
  state.ui.composerOpen = false;
  state.notice = createNotice("success", t("notices.postCreated"));
  state.currentView = "feed";
  render();
}

function handleAddComment(postId) {
  const post = database.posts.find((item) => item.id === postId);
  const currentUser = getCurrentUser();
  const text = String(state.commentDrafts[postId] || "").trim();
  if (!post || !currentUser) {
    return;
  }
  if (!text) {
    state.notice = createNotice("error", t("notices.commentEmpty"));
    render();
    return;
  }

  post.comments.push({
    id: generateId("comment"),
    userId: currentUser.id,
    text,
    createdAt: new Date().toISOString(),
  });

  state.commentDrafts[postId] = "";
  saveDatabase();
  render();
}

function handleToggleLike(postId) {
  const post = database.posts.find((item) => item.id === postId);
  const currentUser = getCurrentUser();
  if (!post || !currentUser) {
    return;
  }
  if (post.likes.includes(currentUser.id)) {
    post.likes = post.likes.filter((id) => id !== currentUser.id);
  } else {
    post.likes.push(currentUser.id);
  }
  saveDatabase();
  render();
}

function handleShareExistingPost(postId, userId) {
  const post = database.posts.find((item) => item.id === postId);
  const currentUser = getCurrentUser();
  if (!post || !currentUser || !getUserById(userId)) {
    return;
  }

  const conversation = findOrCreateConversation(currentUser.id, userId);
  conversation.messages.push({
    id: generateId("message"),
    senderId: currentUser.id,
    createdAt: new Date().toISOString(),
    type: "post_share",
    snapshot: createPostSnapshot(post, getUserById(post.userId)?.username || currentUser.username),
  });

  saveDatabase();
  state.shareMenuPostId = null;
  state.notice = createNotice("success", t("notices.postShared"));
  render();
}

function handleSendRequest(userId) {
  const currentUser = getCurrentUser();
  const targetUser = getUserById(userId);
  if (!currentUser || !targetUser || currentUser.id === targetUser.id) {
    return;
  }
  if (currentUser.friendIds.includes(userId) || currentUser.outgoingRequestIds.includes(userId)) {
    return;
  }
  currentUser.outgoingRequestIds.push(userId);
  targetUser.incomingRequestIds.push(currentUser.id);
  saveDatabase();
  state.notice = createNotice("success", t("notices.requestSent"));
  render();
}

function handleCancelRequest(userId) {
  const currentUser = getCurrentUser();
  const targetUser = getUserById(userId);
  if (!currentUser || !targetUser) {
    return;
  }
  currentUser.outgoingRequestIds = currentUser.outgoingRequestIds.filter((id) => id !== userId);
  targetUser.incomingRequestIds = targetUser.incomingRequestIds.filter((id) => id !== currentUser.id);
  saveDatabase();
  state.notice = createNotice("success", t("notices.requestCancelled"));
  render();
}

function handleAcceptRequest(userId) {
  const currentUser = getCurrentUser();
  const targetUser = getUserById(userId);
  if (!currentUser || !targetUser) {
    return;
  }
  currentUser.incomingRequestIds = currentUser.incomingRequestIds.filter((id) => id !== userId);
  targetUser.outgoingRequestIds = targetUser.outgoingRequestIds.filter((id) => id !== currentUser.id);
  if (!currentUser.friendIds.includes(userId)) {
    currentUser.friendIds.push(userId);
  }
  if (!targetUser.friendIds.includes(currentUser.id)) {
    targetUser.friendIds.push(currentUser.id);
  }
  saveDatabase();
  state.notice = createNotice("success", t("notices.requestAccepted"));
  render();
}

function handleDeclineRequest(userId) {
  const currentUser = getCurrentUser();
  const targetUser = getUserById(userId);
  if (!currentUser || !targetUser) {
    return;
  }
  currentUser.incomingRequestIds = currentUser.incomingRequestIds.filter((id) => id !== userId);
  targetUser.outgoingRequestIds = targetUser.outgoingRequestIds.filter((id) => id !== currentUser.id);
  saveDatabase();
  state.notice = createNotice("success", t("notices.requestDeclined"));
  render();
}

function handleCreateGroup(formData) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    return;
  }

  const name = String(formData.get("name") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const memberIds = uniqueIds([currentUser.id, ...formData.getAll("memberIds").map(String)]);
  if (!name || !description) {
    state.notice = createNotice("error", t("notices.groupNameShort"));
    render();
    return;
  }

  const group = {
    id: generateId("group"),
    name,
    description: { tr: description, en: description, de: description },
    type: "custom",
    ownerId: currentUser.id,
    memberIds,
    messages: [],
  };

  database.groups.push(group);
  saveDatabase();
  state.activeGroupId = group.id;
  state.notice = createNotice("success", t("notices.groupCreated"));
  render();
}

function handleSendGroupMessage(groupId) {
  const currentUser = getCurrentUser();
  const group = getGroupById(groupId);
  const text = String(state.groupDrafts[groupId] || "").trim();
  if (!currentUser || !group) {
    return;
  }
  if (!text) {
    state.notice = createNotice("error", t("notices.groupMessageEmpty"));
    render();
    return;
  }

  group.messages.push({
    id: generateId("group-message"),
    senderId: currentUser.id,
    text,
    createdAt: new Date().toISOString(),
  });

  state.groupDrafts[groupId] = "";
  saveDatabase();
  render();
}

function handleInviteFriendToGroup(groupId, userId) {
  const group = getGroupById(groupId);
  if (!group) {
    return;
  }
  if (!group.memberIds.includes(userId)) {
    group.memberIds.push(userId);
    saveDatabase();
  }
  state.notice = createNotice("success", t("notices.groupInvited"));
  render();
}

function handleSendDirectMessage(userId) {
  const currentUser = getCurrentUser();
  const targetUser = getUserById(userId);
  const text = String(state.dmDrafts[userId] || "").trim();
  if (!currentUser || !targetUser) {
    return;
  }
  if (!text) {
    state.notice = createNotice("error", t("notices.dmEmpty"));
    render();
    return;
  }

  const conversation = findOrCreateConversation(currentUser.id, userId);
  conversation.messages.push({
    id: generateId("message"),
    senderId: currentUser.id,
    text,
    type: "text",
    createdAt: new Date().toISOString(),
  });

  state.dmDrafts[userId] = "";
  saveDatabase();
  render();
}

function handleProfilePhotoUpdate(avatarUrl) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    return;
  }
  currentUser.avatarUrl = avatarUrl;
  saveDatabase();
  state.notice = createNotice("success", t("notices.profilePhotoUpdated"));
  render();
}

function handleAddOverlay() {
  const text = state.composer.overlayDraftText.trim();
  if (!text) {
    state.notice = createNotice("error", t("notices.overlayMissingText"));
    render();
    return;
  }
  const overlay = {
    id: generateId("overlay"),
    text,
    font: state.composer.overlayDraftFont,
    color: state.composer.overlayDraftColor,
    size: state.composer.overlayDraftSize,
    x: 50,
    y: 84,
  };
  state.composer.overlays.push(overlay);
  state.composer.selectedOverlayId = overlay.id;
  hydrateOverlayDraft(overlay);
  state.notice = createNotice("success", t("notices.overlayAdded"));
  render();
}

function handleUpdateOverlay() {
  const overlay = getSelectedOverlay();
  const text = state.composer.overlayDraftText.trim();
  if (!overlay || !text) {
    state.notice = createNotice("error", t("notices.overlayMissingText"));
    render();
    return;
  }
  overlay.text = text;
  overlay.font = state.composer.overlayDraftFont;
  overlay.color = state.composer.overlayDraftColor;
  overlay.size = state.composer.overlayDraftSize;
  state.notice = createNotice("success", t("notices.overlayUpdated"));
  render();
}

function handleRemoveOverlay() {
  const overlay = getSelectedOverlay();
  if (!overlay) {
    return;
  }
  state.composer.overlays = state.composer.overlays.filter((item) => item.id !== overlay.id);
  state.composer.selectedOverlayId = "";
  state.composer.overlayDraftText = "";
  state.notice = createNotice("success", t("notices.overlayRemoved"));
  render();
}

function getSelectedOverlay() {
  return state.composer.overlays.find((overlay) => overlay.id === state.composer.selectedOverlayId) || null;
}

function selectOverlay(overlayId) {
  state.composer.selectedOverlayId = overlayId;
  const overlay = getSelectedOverlay();
  if (overlay) {
    hydrateOverlayDraft(overlay);
  }
}

function hydrateOverlayDraft(overlay) {
  state.composer.overlayDraftText = overlay.text;
  state.composer.overlayDraftFont = overlay.font;
  state.composer.overlayDraftColor = overlay.color;
  state.composer.overlayDraftSize = overlay.size;
}

function createEmptyComposer() {
  return {
    imageDataUrl: "",
    caption: "",
    privacy: "public",
    selectedUserIds: [],
    taggedUserIds: [],
    shareFriendIds: [],
    musicTitle: "",
    musicArtist: "",
    filters: { ...FILTER_PRESETS.clean },
    overlays: [],
    selectedOverlayId: "",
    overlayDraftText: "",
    overlayDraftFont: "outfit",
    overlayDraftColor: "#ffffff",
    overlayDraftSize: 30,
    confirmJenna: false,
  };
}

function loadDatabase() {
  const raw = localStorage.getItem(STORAGE_KEYS.database);
  if (!raw) {
    return { users: [], posts: [], groups: [], dms: [] };
  }
  try {
    const parsed = JSON.parse(raw);
    return {
      users: Array.isArray(parsed.users) ? parsed.users : [],
      posts: Array.isArray(parsed.posts) ? parsed.posts : [],
      groups: Array.isArray(parsed.groups) ? parsed.groups : [],
      dms: Array.isArray(parsed.dms) ? parsed.dms : [],
    };
  } catch (error) {
    return { users: [], posts: [], groups: [], dms: [] };
  }
}

function normalizeDatabase(db) {
  db.users = db.users.map((user) => ({
    id: user.id || generateId("user"),
    username: user.username || "user",
    email: normalizeEmail(user.email || ""),
    password: user.password || "",
    birthDate: user.birthDate || "",
    joinedAt: user.joinedAt || new Date().toISOString(),
    avatarUrl: user.avatarUrl || "",
    friendIds: Array.isArray(user.friendIds) ? uniqueIds(user.friendIds) : [],
    incomingRequestIds: Array.isArray(user.incomingRequestIds) ? uniqueIds(user.incomingRequestIds) : [],
    outgoingRequestIds: Array.isArray(user.outgoingRequestIds) ? uniqueIds(user.outgoingRequestIds) : [],
  }));

  db.posts = db.posts
    .map((post) => ({
      id: post.id || generateId("post"),
      userId: post.userId,
      imageUrl: post.imageUrl || post.imageDataUrl || "",
      caption: String(post.caption || ""),
      privacy: ["public", "friends", "selected"].includes(post.privacy) ? post.privacy : "public",
      selectedUserIds: Array.isArray(post.selectedUserIds) ? uniqueIds(post.selectedUserIds) : [],
      taggedUserIds: Array.isArray(post.taggedUserIds) ? uniqueIds(post.taggedUserIds) : [],
      shareFriendIds: Array.isArray(post.shareFriendIds) ? uniqueIds(post.shareFriendIds) : [],
      musicTitle: String(post.musicTitle || ""),
      musicArtist: String(post.musicArtist || ""),
      filters: normalizeFilters(post.filters),
      overlays: Array.isArray(post.overlays)
        ? post.overlays.map((overlay) => ({
            id: overlay.id || generateId("overlay"),
            text: String(overlay.text || ""),
            font: overlay.font || "outfit",
            color: overlay.color || "#ffffff",
            size: Number(overlay.size) || 30,
            x: Number.isFinite(overlay.x) ? overlay.x : 50,
            y: Number.isFinite(overlay.y) ? overlay.y : 84,
          }))
        : [],
      likes: Array.isArray(post.likes) ? uniqueIds(post.likes) : [],
      comments: Array.isArray(post.comments)
        ? post.comments.map((comment) => ({
            id: comment.id || generateId("comment"),
            userId: comment.userId,
            text: String(comment.text || ""),
            createdAt: comment.createdAt || new Date().toISOString(),
          }))
        : [],
      createdAt: post.createdAt || new Date().toISOString(),
    }))
    .filter((post) => post.userId && post.imageUrl);

  db.groups = db.groups.map((group) => ({
    id: group.id || generateId("group"),
    name: String(group.name || "Group"),
    description:
      typeof group.description === "object" && group.description
        ? {
            tr: String(group.description.tr || group.description.en || group.description.de || ""),
            en: String(group.description.en || group.description.tr || group.description.de || ""),
            de: String(group.description.de || group.description.tr || group.description.en || ""),
          }
        : { tr: String(group.description || ""), en: String(group.description || ""), de: String(group.description || "") },
    type: group.type === "system" ? "system" : "custom",
    ownerId: group.ownerId || OWNER_USER_ID,
    memberIds: Array.isArray(group.memberIds) ? uniqueIds(group.memberIds) : [],
    messages: Array.isArray(group.messages)
      ? group.messages.map((message) => ({
          id: message.id || generateId("group-message"),
          senderId: message.senderId,
          text: String(message.text || ""),
          createdAt: message.createdAt || new Date().toISOString(),
        }))
      : [],
  }));

  db.dms = db.dms.map((conversation) => ({
    id: conversation.id || generateId("dm"),
    participants: Array.isArray(conversation.participants) ? uniqueIds(conversation.participants).slice(0, 2) : [],
    messages: Array.isArray(conversation.messages)
      ? conversation.messages.map((message) => ({
          id: message.id || generateId("message"),
          senderId: message.senderId,
          text: String(message.text || ""),
          type: message.type === "post_share" ? "post_share" : "text",
          snapshot: message.snapshot || null,
          createdAt: message.createdAt || new Date().toISOString(),
        }))
      : [],
  }));
}

function ensureOwnerAccount(db) {
  let owner = db.users.find((user) => normalizeEmail(user.email) === normalizeEmail(OWNER_EMAIL));
  if (!owner) {
    db.users.unshift({
      id: OWNER_USER_ID,
      username: OWNER_USERNAME,
      email: OWNER_EMAIL,
      password: OWNER_PASSWORD,
      birthDate: "2002-09-27",
      joinedAt: new Date().toISOString(),
      avatarUrl: PHOTO_LIBRARY.portrait,
      friendIds: [],
      incomingRequestIds: [],
      outgoingRequestIds: [],
    });
  } else {
    owner.id = OWNER_USER_ID;
    owner.username = OWNER_USERNAME;
    owner.email = OWNER_EMAIL;
    owner.password = OWNER_PASSWORD;
    owner.avatarUrl = owner.avatarUrl || PHOTO_LIBRARY.portrait;
  }
}

function ensureSystemGroups(db) {
  const allUserIds = db.users.map((user) => user.id);
  SYSTEM_GROUPS.forEach((definition) => {
    const existing = db.groups.find((group) => group.id === definition.id);
    if (!existing) {
      db.groups.push({
        id: definition.id,
        name: definition.name,
        description: { ...definition.description },
        type: "system",
        ownerId: OWNER_USER_ID,
        memberIds: [...allUserIds],
        messages: [],
      });
      return;
    }
    existing.type = "system";
    existing.name = definition.name;
    existing.description = { ...definition.description };
    existing.ownerId = OWNER_USER_ID;
    existing.memberIds = uniqueIds([...(existing.memberIds || []), ...allUserIds]);
  });
}

function saveDatabase() {
  localStorage.setItem(STORAGE_KEYS.database, JSON.stringify(database));
}

function getSessionUserId() {
  return localStorage.getItem(STORAGE_KEYS.session) || "";
}

function setSession(userId) {
  localStorage.setItem(STORAGE_KEYS.session, userId);
}

function clearSession() {
  localStorage.removeItem(STORAGE_KEYS.session);
}

function getCurrentUser() {
  const sessionUserId = getSessionUserId();
  const user = database.users.find((item) => item.id === sessionUserId) || null;
  if (!user && sessionUserId) {
    clearSession();
  }
  return user;
}

function getUserById(userId) {
  return database.users.find((user) => user.id === userId) || null;
}

function getGroupById(groupId) {
  return database.groups.find((group) => group.id === groupId) || null;
}

function getConversationByUsers(a, b) {
  return database.dms.find((conversation) => conversation.participants.includes(a) && conversation.participants.includes(b)) || null;
}

function findOrCreateConversation(a, b) {
  let conversation = getConversationByUsers(a, b);
  if (!conversation) {
    conversation = { id: generateId("dm"), participants: uniqueIds([a, b]), messages: [] };
    database.dms.push(conversation);
  }
  return conversation;
}

function getVisiblePosts(viewerId) {
  return database.posts
    .filter((post) => canUserViewPost(post, viewerId))
    .sort((left, right) => new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime());
}

function canUserViewPost(post, viewerId) {
  if (!post || !viewerId) {
    return false;
  }
  if (post.userId === viewerId || post.privacy === "public") {
    return true;
  }
  const author = getUserById(post.userId);
  if (!author) {
    return false;
  }
  if (post.privacy === "friends") {
    return author.friendIds.includes(viewerId);
  }
  if (post.privacy === "selected") {
    return post.selectedUserIds.includes(viewerId);
  }
  return false;
}

function getVisibleGroups(userId) {
  if (!userId) {
    return [];
  }
  return database.groups.filter((group) => group.type === "system" || group.memberIds.includes(userId));
}

function getSuggestedUsers(currentUser) {
  return database.users
    .filter((candidate) => candidate.id !== currentUser.id && !currentUser.friendIds.includes(candidate.id))
    .slice(0, 6);
}

function getStoryUsers(currentUser) {
  const visibleUsers = getVisiblePosts(currentUser.id)
    .map((post) => getUserById(post.userId))
    .filter(Boolean);
  return uniqueById([currentUser, ...currentUser.friendIds.map(getUserById).filter(Boolean), ...visibleUsers]).slice(0, 10);
}

function getFriendSearchResults(currentUser) {
  const query = normalizeUsername(state.friendSearch);
  if (!query) {
    return [];
  }
  return database.users
    .filter((user) => user.id !== currentUser.id)
    .filter((user) => normalizeUsername(user.username).includes(query))
    .slice(0, 10);
}

function getInviteableFriends(currentUser, group) {
  if (!group) {
    return [];
  }
  return currentUser.friendIds.map(getUserById).filter((friend) => friend && !group.memberIds.includes(friend.id));
}

function resolveGroupDescription(group) {
  const description = group.description || {};
  return description[state.lang] || description.tr || description.en || description.de || "";
}

function createPostSnapshot(post, authorUsername) {
  return {
    imageUrl: post.imageUrl,
    caption: post.caption,
    filters: { ...post.filters },
    overlays: Array.isArray(post.overlays) ? post.overlays.map((overlay) => ({ ...overlay })) : [],
    authorUsername,
  };
}

function summarizeDmMessage(message) {
  if (message.type === "post_share") {
    return t("messages.sharedPostLabel");
  }
  return excerpt(message.text, 36);
}

function normalizeFilters(filters) {
  return {
    brightness: Number.isFinite(filters?.brightness) ? filters.brightness : 100,
    contrast: Number.isFinite(filters?.contrast) ? filters.contrast : 100,
    saturation: Number.isFinite(filters?.saturation) ? filters.saturation : 100,
    sepia: Number.isFinite(filters?.sepia) ? filters.sepia : 0,
    grayscale: Number.isFinite(filters?.grayscale) ? filters.grayscale : 0,
    blur: Number.isFinite(filters?.blur) ? filters.blur : 0,
  };
}

function buildFilterString(filters) {
  const safe = normalizeFilters(filters);
  return `brightness(${safe.brightness}%) contrast(${safe.contrast}%) saturate(${safe.saturation}%) sepia(${safe.sepia}%) grayscale(${safe.grayscale}%) blur(${safe.blur}px)`;
}

function buildMusicLabel(title, artist) {
  const cleanTitle = String(title || "").trim();
  const cleanArtist = String(artist || "").trim();
  if (cleanTitle && cleanArtist) {
    return `${cleanTitle} - ${cleanArtist}`;
  }
  return cleanTitle || cleanArtist;
}

function sameFilterValues(left, right) {
  const a = normalizeFilters(left);
  const b = normalizeFilters(right);
  return Object.keys(a).every((key) => a[key] === b[key]);
}

function overlayStyle(overlay) {
  const font = FONT_OPTIONS.find((option) => option.id === overlay.font) || FONT_OPTIONS[0];
  return [`left:${overlay.x}%`, `top:${overlay.y}%`, `color:${overlay.color}`, `font-size:${overlay.size}px`, `font-family:${font.family}`].join(
    ";",
  );
}

function renderAvatar(user, size = "md") {
  const classes = `avatar avatar-${size}`;
  if (!user) {
    return `<div class="${classes}">?</div>`;
  }
  if (user.avatarUrl) {
    return `<div class="${classes}"><img src="${escapeHtml(user.avatarUrl)}" alt="${escapeHtml(user.username)}" /></div>`;
  }
  return `<div class="${classes}" style="--avatar:${avatarColor(user.username)}">${escapeHtml(getInitials(user.username))}</div>`;
}

function normalizeUsername(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function cleanUsername(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function isReservedUsername(username) {
  return normalizeUsername(username) === normalizeUsername(OWNER_USERNAME);
}

function calculateAge(birthDate) {
  const date = new Date(birthDate);
  const now = new Date();
  let age = now.getFullYear() - date.getFullYear();
  const monthDiff = now.getMonth() - date.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < date.getDate())) {
    age -= 1;
  }
  return age;
}

function avatarColor(seed) {
  const colors = [
    "linear-gradient(135deg, #1f2a44 0%, #44597f 100%)",
    "linear-gradient(135deg, #8a3cff 0%, #ff4d88 100%)",
    "linear-gradient(135deg, #0e7490 0%, #22c55e 100%)",
    "linear-gradient(135deg, #d946ef 0%, #f97316 100%)",
    "linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)",
  ];
  const total = String(seed || "")
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return colors[total % colors.length];
}

function getInitials(value) {
  return String(value || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

function uniqueIds(values) {
  return [...new Set(values.filter(Boolean))];
}

function uniqueById(values) {
  const seen = new Set();
  return values.filter((item) => {
    if (!item?.id || seen.has(item.id)) {
      return false;
    }
    seen.add(item.id);
    return true;
  });
}

function toggleArrayValue(array, value) {
  const index = array.indexOf(value);
  if (index >= 0) {
    array.splice(index, 1);
  } else {
    array.push(value);
  }
}

function createNotice(type, text) {
  return { type, text };
}

function formatRelativeTime(value) {
  const date = new Date(value);
  const diffMs = date.getTime() - Date.now();
  const formatter = new Intl.RelativeTimeFormat(LOCALE_MAP[state.lang], { numeric: "auto" });
  const ranges = [
    { unit: "year", ms: 365 * 24 * 60 * 60 * 1000 },
    { unit: "month", ms: 30 * 24 * 60 * 60 * 1000 },
    { unit: "day", ms: 24 * 60 * 60 * 1000 },
    { unit: "hour", ms: 60 * 60 * 1000 },
    { unit: "minute", ms: 60 * 1000 },
  ];

  for (const range of ranges) {
    if (Math.abs(diffMs) >= range.ms || range.unit === "minute") {
      return formatter.format(Math.round(diffMs / range.ms), range.unit);
    }
  }
  return formatter.format(0, "minute");
}

function formatDate(value) {
  if (!value) {
    return "-";
  }
  try {
    return new Intl.DateTimeFormat(LOCALE_MAP[state.lang], { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value));
  } catch (error) {
    return String(value);
  }
}

function formatOptionalDate(value) {
  if (!value) {
    return "-";
  }
  return formatDate(value);
}

function excerpt(value, length) {
  const text = String(value || "");
  if (text.length <= length) {
    return text;
  }
  return `${text.slice(0, length - 1)}…`;
}

function generateId(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}-${Date.now().toString(36)}`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function icon(name) {
  return `<span class="icon">${ICONS[name] || ""}</span>`;
}

function loadLanguage() {
  const stored = localStorage.getItem(STORAGE_KEYS.language);
  return LANGUAGE_OPTIONS.some((language) => language.id === stored) ? stored : "tr";
}

function t(path) {
  const source = COPY[state.lang] || COPY.tr;
  const value = path.split(".").reduce((result, key) => (result && key in result ? result[key] : null), source);
  return value ?? path;
}

function mergeTranslations(base, overrides) {
  const output = Array.isArray(base) ? [...base] : { ...base };
  Object.keys(overrides).forEach((key) => {
    const baseValue = base[key];
    const overrideValue = overrides[key];
    if (
      baseValue &&
      overrideValue &&
      typeof baseValue === "object" &&
      typeof overrideValue === "object" &&
      !Array.isArray(baseValue) &&
      !Array.isArray(overrideValue)
    ) {
      output[key] = mergeTranslations(baseValue, overrideValue);
      return;
    }
    output[key] = overrideValue;
  });
  return output;
}
