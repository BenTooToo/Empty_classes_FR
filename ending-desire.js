const requestedWish = new URLSearchParams(window.location.search).get("wish") || "";

const stories = {
  "vengeance": "Tous ceux qui vous ont fait du mal en ont payé le prix. Un par un, les noms de la liste disparaissent jusqu'à ce que vous réalisiez que la haine ne s'arrête pas quand il n'y a personne à haïr.",
  "Tuez tous ceux qui savent": "Tous ceux qui étaient au courant ont disparu du monde. Personne ne peut dire la vérité sur cette nuit, et personne ne peut prouver que vous avez déjà eu ces amis.",
  "Que tous ceux qui le savent soient sacrifiés, y compris vous-même": "Le sort enlève tous ceux qui le connaissent, y compris vous. Le secret est enfin préservé car plus personne au monde ne peut s’en souvenir.",
  "Que tous ceux qui le savent soient sacrifiés, à l'exclusion de vous-même": "Tous ceux qui savaient ont été sacrifiés, et vous seul êtes resté là où vous étiez. Vous avez gardé le secret et êtes devenu la seule personne au monde encore torturée par les secrets.",
  "Que le monde prenne fin": "Après que le clair de lune se soit éteint, le ciel ne s’est plus jamais éclairé. Vous obtenez un monde sans lendemain et vous serez témoin de chaque seconde restante de la fin de vos propres yeux.",
  "Invoquer l'Ancien": "Ils sont revenus dans ce monde, et l'effondrement et la reconstruction se sont répétés. Vous vous demandez combien de temps la raison humaine peut tenir devant le Grand Être. Et ce qui se passe ensuite est une autre histoire.",
  "Obtenez l'immortalité": "Le temps contourne votre corps. De vieux amis, des villes et des époques continuent de partir, mais vous resterez toujours cette nuit de cérémonie de lancement.",
  "Avoir d'innombrables richesses": "Vous disposez d’une richesse incalculable et il n’y a rien que vous ne puissiez vous permettre. Mais ensuite, comment allez-vous utiliser cette richesse qui ne pourra jamais être dépensée ?",
  "Avoir un harem de beautés": "D'innombrables personnes viennent vers vous comme vous le souhaitez. Vous êtes aimé de tous, mais vous ne pouvez plus confirmer si l'un de vos sentiments est sincère.",
  "créer un nouveau monde": "Un nouveau monde s'ouvre devant vous. Il n'a pas les péchés et les regrets du passé, mais s'il se transformera en paradis ou en un autre abîme, cela sera écrit de vos propres mains.",
  "Ayez de la nourriture sans fin": "La table est toujours pleine et les assiettes vides sont à nouveau remplies en un clin d'œil. Vous n’aurez plus jamais faim, mais peu à peu vous avez oublié ce que l’on ressent lorsqu’on est rassasié.",
  "envie d'en avoir plus": "Un souhait s'est transformé en d'innombrables souhaits. Chaque satisfaction entraîne de nouveaux désirs et Omoya attend toujours patiemment que vous payiez le prochain prix.",
  "acquérir des super pouvoirs": "Une puissance incroyable s’éveille en vous. Le monde ne respecte plus les règles que vous connaissez et vous devez décider qui vous voulez être avec ce pouvoir.",
  "Devenez un être omniscient et omnipotent": "Le passé et le futur, le réel et le possible envahissent votre conscience en même temps. Vous savez enfin tout et pouvez tout faire, et vous perdez enfin vos surprises, vos questions et vos attentes.",
  "Rendre votre corps à nouveau en bonne santé": "La douleur et la faiblesse ont disparu du corps. Vous ressentez la facilité de respirer, de courir et de vous réveiller pour la première fois depuis longtemps. Pour la première fois, une journée ordinaire semble si précieuse.",
  "Arrêtez toutes les choses qui vous rendent accro": "Ces désirs qui vous tenaient autrefois se sont calmés. Vous vous en souvenez encore, mais vous êtes enfin en mesure de décider vous-même où aller ensuite.",
  "Que vos proches soient toujours heureux et en bonne santé": "Vos proches sont libérés de la maladie et de la souffrance. Vous les regardez vivre heureux et savez que vos souhaits ont atteint la place la plus importante.",
  "Laissez vos proches et vous être toujours heureux et en bonne santé": "Votre douleur et celle de vos proches sont guéries. Les choses changeront avec le temps, mais le bonheur et la santé seront toujours avec vous.",
  "Que tout le monde soit heureux et en bonne santé pour toujours": "La maladie, la douleur et le désespoir disparaissent chez chacun. Pour la première fois, le monde accueille le bonheur de ne pas oublier et votre nom n’a besoin d’être connu de personne.",
  "Conserver ses souvenirs et retourner dans l’Antiquité": "Vous emportez tous vos souvenirs dans une Antiquité où la civilisation n’a pas encore pris sa forme définitive. Un monde primitif et immense attend d’être exploré, et chaque découverte pourrait changer l’avenir de l’humanité.",
  "Conserver ses souvenirs et retourner dans l’époque moderne": "Vous ouvrez les yeux avec des connaissances qui dépassent votre époque. Vous devenez l’une des personnes les plus visionnaires de ce temps, et chacun de vos choix ouvre une nouvelle branche de l’Histoire.",
  "Conserver ses souvenirs et retourner dans votre enfance": "Vous retrouvez une chambre familière et votre corps d’enfant. Pour revivre les beaux jours ou simplement vous offrir une seconde chance, vous poussez la porte de vos souvenirs.",
  "Abandonner ses souvenirs et retourner dans l’Antiquité": "On vous a souvent dit qu’autrefois, la vie était meilleure. Vous vous réveillez dans une Antiquité inconnue, sans aucun souvenir de la raison qui vous y a conduit.",
  "Abandonner ses souvenirs et retourner dans l’époque moderne": "On vous a souvent dit qu’autrefois, la vie était meilleure. Vous vous réveillez à l’époque moderne et acceptez cette existence comme la seule que vous ayez jamais connue.",
  "Abandonner ses souvenirs et retourner dans votre enfance": "On vous a souvent dit qu’autrefois, la vie était meilleure. Vous redevenez l’enfant que vous étiez ; les joies et les regrets à venir se produiront comme pour la première fois.",
  "Voyagez dans un autre monde": "Le clair de lune s'est transformé en une porte étrange. Il n’y a pas d’école derrière la porte et il n’y a pas de règles familières ; un tout autre monde vous attend pour choisir une nouvelle identité pour vous-même.",
  "Voyagez dans la deuxième dimension": "Les frontières de la réalité deviennent papier et lumière. Vous entrez dans le monde bidimensionnel que vous regardiez autrefois à travers l'écran. Cette fois, vous n’êtes plus seulement un public extérieur à l’histoire.",
  "devenir un vampire": "Vous entendez le sang couler dans chaque corps vivant. L’histoire des mille prochaines années sera écrite par vous qui ne vieillirez jamais.",
  "devenir un champignon": "Vous vous étendez dans l'ombre et le sol, et le fin mycélium relie un autre monde immense. Les frontières des individus s’estompent et la vie prend une toute nouvelle dimension.",
  "devenir des bactéries": "Le monde devint soudain extrêmement vaste. Une goutte d’eau est l’océan, un corps est la planète et vous continuerez à exister là où l’œil nu ne peut pas le voir.",
  "devenir un virus": "Vous perdez votre corps familier et il ne vous reste plus qu'une information en attente de copie. Que vous soyez toujours en vie n’est plus une question facile à répondre."
};

const animalNames = ["chien", "chat", "bœuf", "mouton", "cochon", "cheval", "poulet", "canard", "lapin", "souris"];
const plantNames = ["riz", "blé", "maïs", "Pomme de terre", "tomate", "pommier", "pin", "bambou", "Rose", "tournesol"];
const fantasyNames = ["dragon", "Phénix", "licorne", "Elfe", "sirène", "Ange", "démon", "Vase", "géant", "démon renard"];

const kindWishRegret = "Même ainsi, ceux qui sont décédés, y compris Lin Yuan, resteront toujours un fardeau dans votre mémoire.";
const kindWishNames = [
  "Rendre votre corps à nouveau en bonne santé",
  "Arrêtez toutes les choses qui vous rendent accro",
  "Que vos proches soient toujours heureux et en bonne santé",
  "Laissez vos proches et vous être toujours heureux et en bonne santé",
  "Que tout le monde soit heureux et en bonne santé pour toujours"
];

kindWishNames.forEach((name) => {
  stories[name] = `${kindWishRegret}${stories[name]}`;
});

animalNames.forEach((name) => {
  stories[`devenir ${name}`] = `Votre corps devient ${name}. Le langage humain disparaît progressivement et les odeurs, les sons et les instincts forment un nouveau monde jamais vu auparavant.`;
});
plantNames.forEach((name) => {
  stories[`devenir ${name}`] = `Vous prenez racine dans le sol et devenez un ${name}. Le soleil, la pluie et les quatre saisons remplacent les horloges et la vie commence à s'écouler lentement et tranquillement.`;
});
fantasyNames.forEach((name) => {
  stories[`devenir ${name}`] = `Les légendes deviennent réalité en vous. Vous devenez ${name}, et à partir de là, ces histoires qui n'existent que dans la fantasy ont aussi de vrais témoins.`;
});

const wish = Object.prototype.hasOwnProperty.call(stories, requestedWish) ? requestedWish : "réaliser ton souhait";
const story = stories[wish] || "Votre souhait est devenu réalité. Jusqu’où mènera l’histoire d’aujourd’hui, vous seul pouvez répondre.";
const copy = document.querySelector("#desireEndingCopy");
const endingDescription = document.createElement("p");
const resultWish = document.createElement("strong");
endingDescription.append("tu as réussi");
resultWish.textContent = wish;
endingDescription.append(resultWish, "。");

const burdenText = "fardeau en mémoire";
const burdenIndex = story.indexOf(burdenText);
if (burdenIndex === -1) {
  endingDescription.append(story);
} else {
  const burden = document.createElement("strong");
  burden.textContent = burdenText;
  endingDescription.append(
    story.slice(0, burdenIndex),
    burden,
    story.slice(burdenIndex + burdenText.length)
  );
}
copy.append(endingDescription);
document.title = `Fin 3 · ${wish}`;
