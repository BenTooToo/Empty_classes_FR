const accounts = [
  {
    id: "monitor",
    displayName: "délégué",
    aliases: ["admin-07"],
    passwords: ["damao"],
    href: "pages/admin-monitor-dashboard.html"
  },
  {
    id: "art",
    displayName: "déléguée aux arts",
    aliases: ["qoisadjk"],
    passwords: ["inks"],
    passwordCaseSensitive: true,
    href: "pages/admin-art-dashboard.html"
  },
  {
    id: "sports",
    displayName: "Xiao Qing — délégué aux sports",
    aliases: ["qx17"],
    passwords: ["m04"],
    href: "pages/admin-sports-dashboard.html"
  },
  {
    id: "info",
    displayName: "déléguée à l’informatique",
    aliases: ["quietarchive"],
    passwords: ["6D3F8A91C4E72B0F9A5D13E8B6C0472AD9F01C35E8B64A7F2D0C93B18E5A4F6D"],
    href: "pages/admin-info-dashboard.html"
  }
];

const loginForm = document.querySelector("#adminLoginForm");
const usernameInput = document.querySelector("#adminUsername");
const passwordInput = document.querySelector("#adminPassword");
const message = document.querySelector("#adminMessage");
const adminState = document.querySelector("#adminState");
const loginPanel = document.querySelector("#loginPanel");
const loadingPanel = document.querySelector("#loadingPanel");
const loadingLine = document.querySelector("#loadingLine");
const loadingBar = document.querySelector("#loadingBar");

const loadingSteps = [
  { text: "Vérification des autorisations du compte...", width: "26%" },
  { text: "Lecture de la liste des fichiers d'arrière-plan...", width: "54%" },
  { text: "Restauration du miroir en lecture seule...", width: "78%" },
  { text: "Vérification réussie, ouverture de l'arrière-plan...", width: "100%" }
];

function normalize(value) {
  return value.trim().toLowerCase();
}

function findAccount(username, password) {
  const normalizedUsername = normalize(username);
  const trimmedPassword = password.trim();
  const normalizedPassword = normalize(password);

  return accounts.find((account) => {
    const aliasMatched = account.aliases.some((alias) => normalize(alias) === normalizedUsername);
    const passwordMatched = account.passwords.some((item) => {
      if (account.passwordCaseSensitive) {
        return item === trimmedPassword;
      }

      return item === trimmedPassword || normalize(item) === normalizedPassword;
    });

    return aliasMatched && passwordMatched;
  });
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const account = findAccount(usernameInput.value, passwordInput.value);

  if (!account) {
    adminState.textContent = "L'authentification a échoué";
    message.textContent = "Le nom d'utilisateur ou le mot de passe est incorrect.";
    passwordInput.value = "";
    passwordInput.focus();
    return;
  }

  sessionStorage.setItem("zt6AdminAccount", account.id);
  sessionStorage.setItem("zt6AdminDisplayName", account.displayName);
  adminState.textContent = "Vérification réussie";
  message.textContent = "";
  loginPanel.hidden = true;
  loadingPanel.hidden = false;

  loadingSteps.forEach((step, index) => {
    window.setTimeout(() => {
      loadingLine.textContent = step.text;
      loadingBar.style.width = step.width;
    }, index * 420);
  });

  window.setTimeout(() => {
    window.location.assign(account.href);
  }, loadingSteps.length * 420 + 260);
});

usernameInput.focus();
