const searchRecords = [
  {
    title: "Forum de la ville boîte noire",
    type: "Encyclopédie de la boîte noire",
    href: "pages/38-heixiang-forum-intro.html",
    keys: ["boîte noire", "Ville boîte noire", "Forum de la ville boîte noire"],
    text: "Le site de forum le plus célèbre au monde est célèbre pour ses légendes urbaines et ses anecdotes, dont beaucoup sont encore discutées par les internautes aujourd'hui."
  },
  {
    title: "Comité de Heysir",
    type: "inconnu",
    href: "pages/32-heysir-committee.html",
    keys: ["Comité de Heysir", "Heysir"]
  },
  {
    title: "Merci d'envoyer les photos rapidement afin qu'elles puissent être enregistrées sur le site",
    type: "annonce",
    href: "pages/03-photo-submit-notice.html",
    keys: ["annonce", "Annonce de ce site"]
  },
  {
    title: "Ne répandez pas de rumeurs",
    type: "annonce",
    href: "pages/04-stop-maintenance-notice.html",
    keys: ["annonce", "Annonce de ce site"]
  },
  {
    title: "Services de conseil psychologique recommandés à Fu'anfan",
    type: "annonce",
    href: "pages/26-fuanfan-counseling-notice.html",
    keys: ["Riz Fu'an", "Restaurant de cuisine maison Fu'an"]
  },
  {
    title: "Album photos de classe",
    type: "photo album",
    href: "pages/05-class-album.html",
    keys: ["album","Album photos de classe", "photo album","Sortie du printemps 2015_Photo au bord du lac"]
  },
  {
    title: "Lycée n°6 de Zhetang",
    type: "Encyclopédie de la boîte noire",
    href: "pages/06-zhetang-six-intro.html",
    keys: ["lycée 6 Zhetang", "sixième lycée de Zhetang", "ville de Zhetang", "lycée n°6 de Zhetang"]
  },
  {
    title: "Connexion administrateur",
    type: "Entrée du site",
    href: "admin.html",
    keys: ["administrateur", "admin", "admistrateur"]
  },
  {
    title: "erreur",
    href: "pages/admin-file-view.html?role=monitor&file=absence-correction",
    keys: ["absent", "liste des absents"]
  },
  {
    title: "liste des étudiants",
    type: "liste",
    href: "pages/09-student-roster.html",
    keys: [
      "liste des élèves",
      "Liang Zhiyuan", "Liang", "Zhiyuan", "délégué de classe",
      "Xu Zhixia", "Xu", "Zhixia", "déléguée à l’informatique",
      "Lin Ruoxuan", "Lin", "Ruoxuan", "déléguée aux arts",
      "Xiao Qing", "Xiao", "Qing", "délégué aux sports"
    ]
  },
  {
    title: "capture d'écran",
    type: "photo",
    href: "pages/28-zhang-yuhang-call-record.html",
    keys: ["Zhang Yuhang", "Zhang", "Yuhang", "Liang Zhiyuan", "Liang", "Zhiyuan"]
  },
  {
    title: "Lin Ruoxuan",
    type: "Encyclopédie de la boîte noire",
    href: "pages/24-lin-ruoxuan-profile.html",
    keys: ["Lin Ruoxuan", "Lin", "Ruoxuan"]
  },
  {
    title: "ben2lapin",
    type: "Encyclopédie de la boîte noire",
    href: "pages/27-ben2tu-profile.html",
    keys: ["ben2lapin", "Ben Ertu", "ben2tu", "bilibili", "auteur de l'annuaire des anciens du lycée n°6 de Zhetang"]
  },
  {
    title: "Fonction de hachage",
    type: "Encyclopédie de la boîte noire",
    href: "pages/30-hash-function-intro.html",
    keys: ["Hacher", "Fonction de hachage", "hash","Cryptage de hachage","valeur de hachage"]
  },
  {
    title: "Site officiel de Jianbing Control System Co., Ltd.",
    type: "Site officiel",
    href: "pages/35-pancake-control.html",
    keys: ["Crêpes", "Système de contrôle des crêpes", "Contrôle des crêpes Ltd.", "Systèmes de contrôle des crêpes Ltd."]
  },
  {
    title: "soudain",
    type: "actualités du divertissement",
    href: "pages/25-lin-ruoxuan-news.html",
    keys: ["Lin Ruoxuan", "Lin", "Ruoxuan"]
  },
  {
    title: "Le délégué et mon mot de passe",
    type: "journal",
    href: "pages/admin-file-view.html?role=info&file=info-diary-01",
    keys: ["Xu Zhixia", "Xu", "Zhixia"]
  },
  {
    title: "Journal 2",
    type: "journal",
    href: "pages/admin-file-view.html?role=info&file=info-diary-02",
    keys: []
  },
  {
    title: "Mon journal 3 : déléguée à l’informatique",
    type: "journal",
    href: "pages/admin-file-view.html?role=info&file=info-diary-03",
    keys: ["Mon journal 3", "Xu Zhixia", "Xu", "Zhixia", "Xiao Qing", "Xiao", "Qing", "Xiaoqing", "témoin", "nom changé"]
  },

  {
    title: "Affaire non résolue : une fille fantôme apparaît sur le site Web de l'école",
    type: "actualités du divertissement",
    href: "pages/29-ghost-girl-news.html",
    keys: ["fille fantôme", "cas non résolu"]
  },
 
  {
    title: "La cérémonie de séduction de l'âme d'Omoya peut vraiment réaliser votre souhait",
    type: "Forum boîte noire",
    href: "pages/31-omoyeta-ritual-thread.html",
    keys: ["Cérémonie de séduction de l'âme Omoyata", "Omoyata", "Cérémonie de séduction de l'âme"]
  },
  
];

const form = document.querySelector("#siteSearch");
const input = document.querySelector("#searchInput");
const resultBox = document.querySelector("#searchResults");
const modal = document.querySelector("#searchModal");
const closeButton = document.querySelector("#closeSearchModal");

function normalize(value) {
  return value
    .trim()
    .toLocaleLowerCase("fr")
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

function matchesQuery(key, query) {
  const normalizedKey = normalize(key);

  if (normalizedKey === query) {
    return true;
  }

  if (query.length < 3) {
    return false;
  }

  return normalizedKey.startsWith(query) || normalizedKey
    .split(/[\s'’_-]+/)
    .some((part) => part.startsWith(query));
}

function renderEmpty(message) {
  resultBox.innerHTML = `
    <p class="empty-result">${message}</p>
  `;
}

function renderResults(query, matches) {
  const items = matches.map((item) => `
    <li>
      <a href="${item.href}" target="_blank" rel="noopener">${item.title}</a>
      <span>${item.type}</span>
      ${item.text ? `<p>${item.text}</p>` : ""}
    </li>
  `).join("");

  resultBox.innerHTML = `
    <p class="result-summary">Mot-clé : ${query} · ${matches.length} résultat${matches.length > 1 ? "s" : ""}.</p>
    <ul class="result-list">${items}</ul>
  `;
}

function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  closeButton.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  input.focus();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = normalize(input.value);
  if (!query) {
    renderEmpty("Veuillez saisir des mots-clés. Prend en charge le nom, le nom de l'album, l'ancien numéro d'enregistrement.");
    openModal();
    return;
  }

  const matches = searchRecords.filter((record) => {
    return record.keys.some((key) => matchesQuery(key, query));
  });

  if (!matches.length) {
    renderEmpty(`Aucun enregistrement public trouvé pour "${query}". Veuillez essayer un nom, un numéro ou un mot-clé de dossier de maintenance antérieur.`);
    openModal();
    return;
  }

  renderResults(query, matches);
  openModal();
});

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

const guestbookSubmit = document.querySelector("#guestbookSubmit");
const guestbookForm = document.querySelector("#guestbookCompose");
const guestbookToast = document.querySelector("#guestbookToast");
let guestbookToastTimer;

function showGuestbookClosedToast() {
  if (!guestbookToast) {
    return;
  }

  window.clearTimeout(guestbookToastTimer);
  guestbookToast.classList.add("is-visible");

  guestbookToastTimer = window.setTimeout(() => {
    guestbookToast.classList.remove("is-visible");
  }, 1800);
}

if (guestbookSubmit) {
  guestbookSubmit.addEventListener("click", showGuestbookClosedToast);
}

if (guestbookForm) {
  guestbookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showGuestbookClosedToast();
  });
}

const photoPreviewTriggers = document.querySelectorAll(".photo-preview-trigger");
const photoLightbox = document.querySelector("#photoLightbox");
const photoLightboxImage = document.querySelector("#photoLightboxImage");
let activePhotoPreviewTrigger;

function openPhotoLightbox(photo) {
  if (!photoLightbox || !photoLightboxImage) {
    return;
  }

  activePhotoPreviewTrigger = photo;
  photoLightboxImage.src = photo.currentSrc || photo.src;
  photoLightboxImage.alt = photo.alt;
  photoLightbox.classList.add("is-open");
  photoLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("photo-lightbox-open");
  photoLightbox.focus();
}

function closePhotoLightbox() {
  if (!photoLightbox || !photoLightboxImage) {
    return;
  }

  photoLightbox.classList.remove("is-open");
  photoLightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("photo-lightbox-open");
  photoLightboxImage.removeAttribute("src");
  activePhotoPreviewTrigger?.focus();
}

photoPreviewTriggers.forEach((photo) => {
  photo.addEventListener("click", () => {
    openPhotoLightbox(photo);
  });

  photo.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPhotoLightbox(photo);
    }
  });
});

if (photoLightbox) {
  photoLightbox.addEventListener("click", (event) => {
    if (event.target === photoLightbox) {
      closePhotoLightbox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && photoLightbox?.classList.contains("is-open")) {
    closePhotoLightbox();
  }
});
