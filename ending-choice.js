const storyText = document.querySelector("#endingChoiceText");
const options = document.querySelector("#endingChoiceOptions");
const hint = document.querySelector("#endingChoiceHint");

const intro = [
  "Vous êtes Xiao Qing.",
  "Vous êtes un participant au rituel, un paria, un amnésique et un explorateur.",
  "Vous décidez de ressusciter Lin Yuan, votre ami."
];

const companionStories = {
  yes: [
    "Vous arrivez au domicile de la déléguée à l’informatique.",
    "La déléguée à l’informatique vous dit : « Ça y est, je comprends. En vous observant, j’ai aussi compris que vous n’aviez aucune mauvaise intention. »",
    "\"Je pense que dans votre état actuel, vous êtes peut-être plus apte à être l'initiateur de la cérémonie que moi, car vous avez moins de pensées distrayantes depuis que vous avez perdu la mémoire.\"",
    "La déléguée à l’informatique vous donne quelques consignes. Bientôt revient la nuit de la pleine lune."
  ],
  no: [
    "Vous vous introduisez discrètement au domicile de la déléguée à l’informatique.",
    "Vous avez pris un moment pour comprendre le programme de Xu Zhixia.",
    "Un mois plus tard, vous avez volé toutes les données de son ordinateur alors qu'elle était absente.",
    "Bientôt, ce fut à nouveau la nuit de la pleine lune."
  ]
};

const commonRitualEnding = [
  "C'est précisément parce que votre souhait n'a pas été réalisé que vous avez l'opportunité de vous tenir ici à nouveau aujourd'hui et de commencer la cérémonie du renversement.",
  "Votre souhait est——"
];

const brutalWishes = [
  ["vengeance", "vengeance"],
  ["Tuez tous ceux qui savent", "Tuez tous ceux qui savent"],
  ["Qu'ils soient sacrifiés, y compris eux-mêmes", "Que tous ceux qui le savent soient sacrifiés, y compris vous-même"],
  ["Qu'ils soient sacrifiés, en s'excluant", "Que tous ceux qui le savent soient sacrifiés, à l'exclusion de vous-même"],
  ["fin du monde", "Que le monde prenne fin"],
  ["Invoquer l'Ancien", "Invoquer l'Ancien"]
];

const greedyWishes = [
  ["Immortalité", "Obtenez l'immortalité"],
  ["riche", "Avoir d'innombrables richesses"],
  ["beautés du harem", "Avoir un harem de beautés"],
  ["créer un nouveau monde", "créer un nouveau monde"],
  ["Nourriture sans fin", "Ayez de la nourriture sans fin"],
  ["plus de vœux", "envie d'en avoir plus"],
  ["acquérir des super pouvoirs", "acquérir des super pouvoirs"],
  ["Omniscient et omnipotent", "Devenez un être omniscient et omnipotent"]
];

const selfKindWishes = [
  ["Rendre votre corps à nouveau en bonne santé", "Rendre votre corps à nouveau en bonne santé"],
  ["Arrêter la dépendance", "Arrêtez toutes les choses qui vous rendent accro"]
];

const animals = ["chien", "chat", "bœuf", "mouton", "cochon", "cheval", "poulet", "canard", "lapin", "souris"];
const plants = ["riz", "blé", "maïs", "Pomme de terre", "tomate", "pommier", "pin", "bambou", "Rose", "tournesol"];
const fantasyCreatures = ["dragon", "Phénix", "licorne", "Elfe", "sirène", "Ange", "démon", "Vase", "géant", "démon renard"];

let typingTimer = 0;
let typing = false;
let fullText = "";
let nextAction = null;

function finishTyping() {
  window.clearInterval(typingTimer);
  storyText.textContent = fullText;
  typing = false;
}

function typeLine(text, after) {
  window.clearInterval(typingTimer);
  fullText = text;
  nextAction = after;
  storyText.textContent = "";
  options.hidden = true;
  hint.hidden = false;
  typing = true;
  let index = 0;
  typingTimer = window.setInterval(() => {
    storyText.textContent = text.slice(0, ++index);
    if (index >= text.length) finishTyping();
  }, 52);
}

function playSequence(lines, after) {
  let index = 0;
  const advance = () => index < lines.length ? typeLine(lines[index++], advance) : after();
  advance();
}

function showChoices(prompt, choices) {
  typeLine(prompt, null);
  finishTyping();
  hint.hidden = true;
  options.innerHTML = "";
  choices.forEach(({ label, action, className = "" }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.className = className;
    button.addEventListener("click", (event) => { event.stopPropagation(); action(); });
    options.appendChild(button);
  });
  options.hidden = false;
}

function chooseCompanion(choice) {
  options.hidden = true;
  typeLine("très bien.", () => playSequence([...companionStories[choice], ...commonRitualEnding], showWishRoot));
}

function askCompanion() {
  showChoices("Souhaitez-vous impliquer la déléguée à l’informatique ?", [
    { label: "Oui", action: () => chooseCompanion("yes") },
    { label: "Non", action: () => chooseCompanion("no") }
  ]);
}

function showWishRoot() {
  showChoices("Quel est votre souhait ?", [
    { label: "Sauvez vos camarades de classe", action: () => confirmWish("Sauver Lin Yuan", true) },
    { label: "Ne pas sauver ses camarades de classe", action: showWishCategories }
  ]);
}

function showWishCategories() {
  showChoices("Choisissez le type de désir.", [
    { label: "Revenir à l'étape précédente", action: showWishRoot, className: "choice-back" },
    { label: "gentilles pensées", action: showKindCategories },
    { label: "brutal", action: () => showWishList("brutal", brutalWishes) },
    { label: "Avidité", action: () => showWishList("Avidité", greedyWishes) },
    { label: "voyage dans le temps", action: showTravelCategories },
    { label: "Transformer", action: showTransformationCategories }
  ]);
}

function showKindCategories() {
  showChoices("Bonnes pensées. À qui veux-tu offrir du bonheur et de la santé ?", [
    { label: "Revenir à l'étape précédente", action: showWishCategories, className: "choice-back" },
    { label: "Propre", action: () => showWishList("donne-toi", selfKindWishes, showKindCategories) },
    { label: "quelqu'un à aimer", action: () => confirmWish("Que vos proches soient toujours heureux et en bonne santé", false, showKindCategories) },
    { label: "vous et vos proches", action: () => confirmWish("Laissez vos proches et vous être toujours heureux et en bonne santé", false, showKindCategories) },
    { label: "tout le monde", action: () => confirmWish("Que tout le monde soit heureux et en bonne santé pour toujours", false, showKindCategories) }
  ]);
}

function showTravelCategories() {
  showChoices("voyage dans le temps. Où veux-tu aller ?", [
    { label: "Revenir à l'étape précédente", action: showWishCategories, className: "choice-back" },
    { label: "remonter le temps", action: showPastDestinations },
    { label: "Voyagez dans un autre monde", action: () => confirmWish("Voyagez dans un autre monde", false, showTravelCategories) },
    { label: "Voyagez dans la deuxième dimension", action: () => confirmWish("Voyagez dans la deuxième dimension", false, showTravelCategories) }
  ]);
}

function showPastDestinations() {
  showChoices("Dans quel passé aimeriez-vous retourner ?", [
    { label: "Revenir à l'étape précédente", action: showTravelCategories, className: "choice-back" },
    { label: "l’Antiquité", action: () => askKeepMemory("l’Antiquité") },
    { label: "l’époque moderne", action: () => askKeepMemory("l’époque moderne") },
    { label: "votre enfance", action: () => askKeepMemory("votre enfance") }
  ]);
}

function askKeepMemory(destination) {
  showChoices("Vous souhaitez conserver vos souvenirs ?", [
    { label: "Revenir à l'étape précédente", action: showPastDestinations, className: "choice-back" },
    { label: "conserver ses souvenirs", action: () => confirmWish(`Conserver ses souvenirs et retourner dans ${destination}`, false, () => askKeepMemory(destination)) },
    { label: "abandonner ses souvenirs", action: () => confirmWish(`Abandonner ses souvenirs et retourner dans ${destination}`, false, () => askKeepMemory(destination)) }
  ]);
}

function showTransformationCategories() {
  showChoices("Transformer. Que veux-tu être ?", [
    { label: "Revenir à l'étape précédente", action: showWishCategories, className: "choice-back" },
    { label: "devenir un vampire", action: () => confirmWish("devenir un vampire", false, showTransformationCategories) },
    { label: "devenir un animal", action: () => showNamedTransformations("animal", animals) },
    { label: "devenir une plante", action: () => showNamedTransformations("usine", plants) },
    { label: "devenir une créature fantastique", action: () => showNamedTransformations("créatures fantastiques", fantasyCreatures) },
    { label: "devenir un champignon", action: () => confirmWish("devenir un champignon", false, showTransformationCategories) },
    { label: "devenir des bactéries", action: () => confirmWish("devenir des bactéries", false, showTransformationCategories) },
    { label: "devenir un virus", action: () => confirmWish("devenir un virus", false, showTransformationCategories) }
  ]);
}

function showNamedTransformations(category, names) {
  const wishes = names.map((name) => [name, `devenir ${name}`]);
  showWishList(`Devenez ${category}`, wishes, showTransformationCategories);
}

function showWishList(category, wishes, categoryBack = showWishCategories) {
  const choices = [{ label: "Revenir à l'étape précédente", action: categoryBack, className: "choice-back" }];
  wishes.forEach(([label, result]) => choices.push({
    label,
    action: () => confirmWish(result, false, () => showWishList(category, wishes, categoryBack))
  }));
  showChoices(`${category}. Que veux-tu ?`, choices);
}

function confirmWish(wish, savesFriend, back = showWishRoot) {
  showChoices(`Es-tu sûr? Ceci est votre décision finale : ${wish}.`, [
    { label: "Revenir à l'étape précédente", action: back, className: "choice-back" },
    { label: "OK, c'est ma décision finale", action: () => finishChoice(wish, savesFriend) }
  ]);
}

function finishChoice(wish, savesFriend) {
  options.hidden = true;
  hint.hidden = true;
  storyText.textContent = "";
  document.body.classList.add("ending-fade-white");
  window.setTimeout(() => window.location.assign(savesFriend ? "36-ending-good.html" : `37-ending-desire.html?wish=${encodeURIComponent(wish)}`), 1800);
}

function advanceStory() {
  if (!options.hidden) return;
  if (typing) { finishTyping(); return; }
  if (nextAction) { const action = nextAction; nextAction = null; action(); }
}

document.addEventListener("click", advanceStory);
document.addEventListener("keydown", (event) => {
  if (["Shift", "Control", "Alt", "Meta"].includes(event.key)) return;
  event.preventDefault();
  advanceStory();
});

playSequence(intro, askCompanion);
