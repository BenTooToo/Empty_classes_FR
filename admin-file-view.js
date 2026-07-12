const dashboardRoles = {
  monitor: {
    title: "Espace du délégué",
    theme: "dark",
    dashboard: "admin-monitor-dashboard.html",
    files: ["monitor-diary", "monitor-chat", "absence-correction"]
  },
  art: {
    title: "Espace de la déléguée aux arts",
    theme: "dark",
    dashboard: "admin-art-dashboard.html",
    files: ["art-diary", "soul-return-ritual"]
  },
  sports: {
    title: "Espace du délégué aux sports",
    theme: "dark",
    dashboard: "admin-sports-dashboard.html",
    files: ["hospital-report", "sports-info-removal", "sports-familiar-self"]
  },
  info: {
    title: "Espace de la déléguée à l’informatique",
    theme: "dark",
    dashboard: "admin-info-dashboard.html",
    files: ["info-diary-01", "info-diary-02", "info-diary-03"]
  }
};

const fileRecords = {
  "monitor-diary": {
    title: "Journal du délégué",
    html: `
      <article class="role-diary-paper">
        <p><strong>Le rituel est réel</strong>. </p>
        <p>Léa Martin a disparu. Quelle putain de chose diabolique. La bonne nouvelle est que je peux sentir que mes <strong>souhaits</strong> ont été exaucés, et d'autres personnes ont le même sentiment. Même si nous ne le disons pas à voix haute, il semble que le désir lui-même n'ait pas besoin d'être exprimé avec des mots.</p>
        <p>Camille Laurent fait toujours semblant d'être réel. Ce serait bien si elle était sacrifiée ensemble. Je ne connais pas ses petites astuces, mais son programme de cryptage de hachage est resté en arrière-plan depuis qu'elle a créé le compte. Tant qu'elle fait un petit geste, je laisserai Gabriel Roux la tuer</p>
        <p class="diary-red-fragment">Mais qui est Léa Martin</p>
        <div class="diary-copy-cipher">
          <p class="diary-red-fragment diary-cipher-noise">Qui est Léa Martin Qui est Léa Martin Qui est Léa Martin<span class="cipher-scrap scrap-flower">Fleurs sous la fenêtre</span> Qui est Léa Martin Qui est Léa Martin Qui est Léa Martin Qui est Léa Martin<span class="cipher-scrap scrap-have">Oui</span>Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ?</p>
          <p class="diary-red-fragment diary-cipher-noise">Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ?<span class="cipher-scrap scrap-star">Les Célébritéss dans la salle de classe</span> Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ?<span class="cipher-scrap scrap-how">Combien</span> Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ?</p>
          <p class="diary-red-fragment diary-cipher-noise">Qui est Léa Martin ?<span class="cipher-scrap scrap-life">Les vies disparues</span> Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ?<span class="cipher-scrap scrap-tyrant">Le tyran au sang froid</span> Qui est Léa Martin ? Qui est Léa Martin ?<span class="cipher-scrap scrap-many">y en a-t-il</span> Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ? Qui est Léa Martin ?</p>
        </div>
      </article>
    `
  },
  "monitor-chat": {
    title: "Historique des discussions de la déléguée à l’informatique",
    html: `
      <figure class="chat-screenshot" aria-label="Historique des discussions entre le délégué de classe et la déléguée à l’informatique">
        <figcaption>Fichier de récupération : monitor_info_chat_20201026.log</figcaption>
        <div class="chat-window">
          <div class="chat-titlebar">
            <span>Messages privés et extraits récupérés</span>
          </div>
          <div class="chat-message chat-right">
            <strong>Camille Laurent<span class="chat-user-id">quietarchive</span></strong>
            <p>Délégué, pourquoi n’ai-je aucun souvenir de Léa Martin ?</p>
          </div>
          <div class="chat-message chat-left">
            <strong>Julien Moreau<span class="chat-user-id">admin-07</span></strong>
            <p>Qui est Léa Martin ? </p>
          </div>
          <div class="chat-message chat-right">
            <strong>Camille Laurent<span class="chat-user-id">quietarchive</span></strong>
            <p>Je sais que c'était toi</p>
          </div>
          <div class="chat-message chat-right">
            <strong>Camille Laurent<span class="chat-user-id">quietarchive</span></strong>
            <p>Je parle</p>
          </div>
          <div class="chat-message chat-right">
            <strong>Camille Laurent<span class="chat-user-id">quietarchive</span></strong>
            <p>Ne me force pas à te trouver</p>
          </div>
        </div>
      </figure>
    `
  },
  "absence-correction": {
    title: "Correction de la liste des absents",
    html: `
      <dl class="role-file-change-list">
        <dt>Date de modification</dt>
        <dd>09/07/2016</dd>
        <dt>Modifier le compte</dt>
        <dd>admin-07</dd>
        <dt>Modifier le contenu</dt>
        <dd>Supprimé avec succès de la liste des étudiants : Léa Martin</dd>
      </dl>
    `
  },
  "soul-return-ritual": {
    title: "Rituel de restitution de l’âme d’Omoyata",
    html: `
      <article class="role-ritual-document" data-ritual-completion>
        <h2>Rituel de restitution de l’âme d’Omoyata</h2>
        <div class="ritual-committee-watermark" aria-hidden="true">
          <svg viewBox="0 0 300 300" role="img">
            <defs><path id="returnWatermarkPath" d="M 34 150 A 116 116 0 1,1 266 150 A 116 116 0 1,1 34 150"></path></defs>
            <circle class="watermark-ring-outer" cx="150" cy="150" r="132"></circle>
            <circle class="watermark-ring-inner" cx="150" cy="150" r="103"></circle>
            <text class="watermark-ring-text"><textPath href="#returnWatermarkPath" startOffset="8%">Révisé par le Comité de Heysir · Révisé par le Comité de Heysir ·</textPath></text>
            <path class="watermark-eye" d="M65 151 Q150 78 235 151 Q150 224 65 151Z"></path>
            <circle class="watermark-iris" cx="150" cy="151" r="42"></circle>
            <circle class="watermark-pupil" cx="150" cy="151" r="18"></circle>
            <circle class="watermark-glint" cx="137" cy="137" r="7"></circle>
          </svg>
        </div>
        <p class="ritual-document-preface">Ce rituel inverse le rituel d’invocation des âmes d’Omoyata afin de rappeler l’âme précédemment sacrifiée. Il n’annule pas le prix déjà payé : un nouvel échange équivalent doit être accompli. L’officiant doit connaître la liste complète des participants au rituel initial et lire toutes les instructions avant de commencer.</p>
        <section>
          <h3>Heure</h3>
          <p><strong>La nuit anniversaire du rituel initial, entre minuit et deux heures.</strong></p>
          <p>Le soleil doit être complètement absent et le clair de lune ne doit pas briller directement dans l'espace rituel. La résurrection doit commencer après le premier coup de cloche et s'achever avant que la dernière bougie ne s'éteigne ; ceux qui ne respectent pas le délai devraient attendre la prochaine soirée anniversaire. </p>
        </section>
        <section>
          <h3>Lieu</h3>
          <p>Le rappel doit avoir lieu <strong>à l’endroit exact du sacrifice initial</strong>. Le centre du talisman doit coïncider avec le dernier emplacement de la victime. Les portes et fenêtres doivent rester fermées, sans aucun témoin extérieur au rituel initial.</p>
          <p>Si l'emplacement d'origine a été endommagé, modifié ou méconnaissable, un emplacement similaire ne peut pas être remplacé. Un mauvais endroit ne fera que ramener quelque chose qui n'appartient pas à la personne sacrifiée. </p>
        </section>
        <section>
          <h3>Préparation et Prix</h3>
          <p><strong>1. Les âmes de tous les participants à la cérémonie originale. </strong></p>
          <p><strong>2. Un objet ayant appartenu à la victime initiale.</strong></p>
          <p><strong>3. Un talisman d’Omoyata tracé à l’envers.</strong></p>
          <p>Les âmes de tous les participants seront offertes simultanément en échange de l’âme entière de la victime. Quels que soient les bénéfices obtenus, leurs souvenirs ou leur consentement, le prix sera prélevé dans tous les cas.</p>
        </section>
        <section>
          <h3>Cas particulier : ceux abandonnés par les dieux</h3>
          <p>Ceux qui n'ont <strong>pas été acceptés par les dieux et dont les souhaits n'ont pas été exaucés lors de la cérémonie originale ne sont pas considérés comme des participants à la cérémonie</strong>. Cette personne a été oubliée des dieux et son âme ne fait pas partie des sacrifices requis pour son retour. </p>
          <p>L’âme de la personne rejetée ne doit pas être offerte. L’inscrire de force sur la liste risque d’endommager l’âme restituée.</p>
        </section>
        <section>
          <h3>Étapes rituelles</h3>
          <p>Placez l'objet restant au centre du talisman inversé et inscrivez les noms de tous les participants valides à leur position d’origine. L’officiant intervient en dernier : avant que les cloches ne se taisent, il efface les noms un à un afin de transférer les âmes vers l’offrande centrale.</p>
          <p>Lorsque tous les noms ont disparu, l’officiant doit appeler trois fois la victime par son nom. Il ne doit répondre à aucune voix provenant de l’extérieur du cercle ni quitter sa place avant que la personne sacrifiée n’ouvre les yeux.</p>
        </section>
        <section>
          <h3>Résultat et vœu de l’officiant</h3>
          <p>Une fois l’échange accompli, l’âme de la victime regagnera son corps d’origine. Si celui-ci n’existe plus, elle choisira l’objet susceptible de l’accueillir avec lequel elle possède le lien le plus fort.</p>
          <p>En tant que témoin du rappel, <strong>l’officiant pourra voir l’un de ses vœux exaucé</strong> au moment du retour de la victime. Ce vœu n’a pas besoin d’être formulé : Omoyata lit le désir enfoui au plus profond de son âme.</p>
          <p>Une fois le souhait lu, il ne peut plus être retiré. Une fois la récupération des âmes terminée, toutes les âmes sacrifiées en guise de prix ne peuvent plus être récupérées. </p>
        </section>
        <a class="ritual-reversal-button" href="23-true-ending.html">Commencer le rituel d’inversion</a>
      </article>
    `
  },
  "shadow-exchange-ritual": {
    title: "Rituel d’invocation des âmes d’Omoyata",
    html: `
      <article class="role-ritual-document">
        <h2>Rituel d’invocation des âmes d’Omoyata</h2>
        <div class="ritual-committee-watermark" aria-hidden="true">
          <svg viewBox="0 0 300 300" role="img">
            <defs>
              <path id="committeeWatermarkPath" d="M 34 150 A 116 116 0 1,1 266 150 A 116 116 0 1,1 34 150"></path>
            </defs>
            <circle class="watermark-ring-outer" cx="150" cy="150" r="132"></circle>
            <circle class="watermark-ring-inner" cx="150" cy="150" r="103"></circle>
            <text class="watermark-ring-text">
              <textPath href="#committeeWatermarkPath" startOffset="8%">Révisé par le Comité de Heysir · Révisé par le Comité de Heysir ·</textPath>
            </text>
            <path class="watermark-eye" d="M65 151 Q150 78 235 151 Q150 224 65 151Z"></path>
            <circle class="watermark-iris" cx="150" cy="151" r="42"></circle>
            <circle class="watermark-pupil" cx="150" cy="151" r="18"></circle>
            <circle class="watermark-glint" cx="137" cy="137" r="7"></circle>
          </svg>
        </div>
        <p class="ritual-document-preface">Ce rituel offre une âme à Omoyata et permet à chaque participant de voir son désir reconnu. Une fois la cérémonie commencée, la victime ne peut plus être déplacée ni remplacée. Lisez toutes les instructions avant de procéder.</p>
        <section>
          <h3>Heure</h3>
          <p><strong>Quand le soleil est absent. </strong></p>
          <p>Les rituels ne peuvent pas être effectués tant que le soleil est encore visible ou lorsque la lumière restante n'a pas complètement disparu. La pleine lune doit continuer à être témoin de tout le processus du début à la fin de la cérémonie. </p>
        </section>
        <section>
          <h3>Lieu</h3>
          <p>Le lieu de la cérémonie doit être à une altitude de <strong>750 mètres</strong> au-dessus du niveau de la mer et être entièrement éclairé par la pleine lune. Le lieu rituel devrait abriter des papillons de nuit qui agissent comme des gardiens entre les frontières et les esprits. </p>
          <p>Si la hauteur de la cérémonie est inférieure à 750 mètres au-dessus du niveau de la mer, elle risque de déclencher la colère de la mer. Pour soulager le malaise de la vague, veuillez vous référer aux éléments apaisants et curatifs de la <strong>Page 75 du Code de Thor</strong>. </p>
        </section>
        <section>
          <h3>Préparation</h3>
          <p><strong>1. L’âme de la victime.</strong></p>
          <p><strong>2. Un talisman d’Omoyata.</strong></p>
          <p>Le talisman doit être entièrement tracé avant le début du rituel, sans rupture, reprise ni partie masquée. La victime et son âme constituent une seule offrande.</p>
        </section>
        <section>
          <h3>Étapes rituelles et restrictions</h3>
          <p>La victime doit rester au centre du talisman. Tout déplacement volontaire ou forcé, toute substitution ou toute sortie du périmètre sera considéré comme une anomalie rituelle.</p>
          <p>Ne commencez qu’après avoir vérifié que la pleine lune est encore visible, que les papillons de nuit montent toujours la garde et que les limites du cercle sont intactes. L’officiant doit poursuivre le rituel jusqu’à ce que les vœux de tous les participants aient été reconnus.</p>
          <p>Si le sort est brisé, les papillons de nuit s'en vont, le clair de lune est interrompu, le sacrifice franchit la frontière ou d'autres circonstances inexplicables se produisent pendant la cérémonie, veuillez vous référer immédiatement à la <strong>Page 75 du Code Thor</strong> et n'apportez aucune modification basée sur votre jugement personnel. </p>
        </section>
        <section>
          <h3>Résultats</h3>
          <p>Toute personne participant au rituel, y compris la personne sacrifiée, a le droit d'exprimer ses désirs. Les désirs mentionnés ici ne sont pas des mots prononcés et ne nécessitent pas non plus d'écriture, de gestes ou aucune expression extérieure ; ce que lit le rituel est le désir le plus profond caché dans le lieu où vit l'âme. </p>
          <p>Une fois le rituel achevé, le vœu sera exaucé quel qu’en soit le contenu, quels que soient l’identité du demandeur, ses intentions ou sa compréhension des conséquences.</p>
          <p>Si le souhait n'est pas exaucé, cela signifie que celui qui le propose a été oublié par les dieux. Lorsque cela se produit, demandez l’aide d’un bibliothécaire ou d’une personne de confiance et effectuez un rituel de purification dès que possible. Pour la préparation et l'exécution du rituel de purification, veuillez vous référer à la <strong>Page 99 du Code Thor</strong>. </p>
        </section>
      </article>
    `
  },
  "art-profile": {
    title: "Profil",
    html: `
      <figure class="role-file-photo">
        <img src="../lin-ruoxuan.png" alt="Photo de profil publique d’Élise Martin">
        <figcaption>Élise Martin tient sa sixième exposition personnelle</figcaption>
      </figure>
      <p>Élise Martin, née dans la ville de Zhetang, est une jeune artiste chinoise. Les informations publiques indiquent qu'elle a étudié au lycée n°6 de Zhetang et qu'elle y était déléguée aux arts. Plus tard, ses créations picturales l'ont fait connaître du public.</p>
      <p>Ses œuvres sont souvent remarquées pour leurs jeux de profondeur et leur symbolisme, autour de la mémoire, de l’espace et des relations humaines. Après 2020, les apparitions publiques d’Élise Martin se sont nettement raréfiées.</p>
      <p>Lors d'entretiens publics, Élise Martin a expliqué que son intérêt pour les couleurs et les motifs s'était manifesté dès le lycée. Les archives de la classe montrent également qu'elle était souvent chargée des affiches, des décorations et du matériel destiné aux activités scolaires.</p>
    `
  },
  "art-news": {
    title: "Actualités des admissions",
    html: `
      <figure class="role-file-photo">
        <img src="../lin-ruoxuan-ambulance-cn-final.png" alt="Photo montrant les secours transportant Élise Martin vers une ambulance">
        <figcaption> Des photos divulguées sur les lieux montraient que le personnel médical mettait Élise Martin dans une ambulance. </figcaption>
      </figure>
      <p>La jeune peintre Élise Martin a été victime d’un accident dans son atelier. Une exposition prolongée à des pigments contaminés aurait provoqué une intoxication et son coma. Elle est toujours hospitalisée.</p>
      <p>L’hôpital n’a fourni aucune information précise. Selon une source proche du dossier, l’état d’Élise Martin était déjà critique à son admission et ses chances de reprendre conscience seraient extrêmement faibles. L’origine des pigments fait toujours l’objet d’une enquête.</p>
    `
  },
  "ritual-note": {
    title: "Dossier de transfert de cérémonie",
    html: `
      <p>Ce contenu provient d'un ancien message de Blackbox City. Le titre a été changé par l'administrateur en <strong>Cérémonie Omoyata</strong>. La légende du message affirme que l'accomplissement du rituel dans une salle de classe vide à la veille de la remise des diplômes permettra aux personnes présentes de réaliser leurs souhaits. </p>
      <p>Le rituel exige de préparer à l’avance les incantations et le talisman. Le texte sauvegardé est explicite : <strong>le talisman taché de sang et l’incantation doivent être prêts avant la cérémonie</strong>. Élise Martin, déléguée aux arts, a ensuite fourni le talisman, affirmant l’avoir simplement recopié depuis une image du forum.</p>
      <p>La partie la plus dangereuse du message est le mot « sacrifice ». Julien Moreau pensait que le sacrifice signifiait effacer quelqu'un de la vie de chacun, mais personne ne savait que le véritable sens était la possession. </p>
      <p>Une ligne de code corrompu apparaît à la fin de la page : <strong>code du talisman</strong>. Elle renvoie vers une page d’œuvre supprimée, dont seule la sauvegarde de la déléguée à l’informatique conserve encore une copie.</p>
    `
  },
  "art-diary": {
    title: "Journal de la déléguée aux arts",
    html: `
      <article class="role-diary-paper art-villain-diary">
        <p>Au début, je cherchais simplement des moyens de faire en sorte que ma carrière se déroule sans problème dans les forums de boîtes noires. Je ne m’attendais pas à ce que ce qui était écrit dans ce message soit vrai. </p>
        <p>J'ai donné le contenu à Julien Moreau et lui ai expliqué comment préparer le sort. Effectivement, il a mordu à l’hameçon. Tant qu'il se sentait organisateur, il rassemblait tout le monde, préparait le lieu et prenait volontiers des risques pour moi. </p>
        <p>Je suis très satisfait des résultats. Tout le monde a obtenu ce qu'il voulait : j'ai eu du succès dans ma carrière et les deux amis de Julien Moreau ont eu de l'argent. Quant à cet imbécile de Julien Moreau, il faisait toujours semblant d'être gentil à la fin, et son souhait était de <strong>laisser tout le monde oublier que cela s'était produit</strong>. </p>
        <p>La plus grande variable a toujours été Léa Martin. La victime obtient également que ses souhaits soient exaucés, et si elle veut se venger, nous sommes tous foutus. C’est pourquoi je l’ai spécifiquement choisie : une bonne personne bien connue dans la classe. Les gens comme elle, même en fin de compte, ne souhaiteront que du bien aux autres. </p>
        <p>C'est Thomas Dubois qui m'inquiète un peu. Je ne savais pas ce qu’il souhaitait et si je le lui demandais, il ne le dirait pas. Il faut quand même le surveiller de près. </p>
        <p>S'il veut vraiment faire de mauvaises choses, alors sacrifiez-le à nouveau pour vous débarrasser de lui. </p>
        <p class="role-file-signature">10 juillet 2016 Élise Martin</p>
      </article>
    `
  },
  "class-album": {
    title: "Album photos de classe",
    html: `
      <div class="role-file-gallery">
        <figure><img src="../sport.png" alt="Photo de la rencontre sportive d'automne"><figcaption>Réunion sportive d'automne 2014</figcaption></figure>
        <figure><img src="../spring.png" alt="Photo de groupe de la sortie du printemps"><figcaption>Photo de groupe de la sortie du printemps 2015</figcaption></figure>
        <figure><img src="../dimpome.png" alt="Photo de classe avant l'obtention du diplôme"><figcaption>Classe 2016 avant l'obtention du diplôme</figcaption></figure>
        <figure><img src="../credit.png" alt="Scène de rue avec fenêtre"><figcaption>Scène de rue familière</figcaption></figure>
        <figure><img src="../art.png" alt="Photos liées à l'art"><figcaption>Élise Martin est notre fierté</figcaption></figure>
        <figure><img src="../computer.png" alt="Photo de la salle informatique"><figcaption>L'endroit préféré de tous</figcaption></figure>
      </div>
    `
  },
  "hospital-report": {
    title: "cas",
    html: `
      <p>Nom du patient : Thomas Dubois. Le cas a été transféré d'une copie numérisée de l'ancien système vers un texte en lecture seule. </p>
      <p>Le dossier de plainte principal indique : Le patient a longtemps évité ses souvenirs avant et après l'obtention de son diplôme d'études secondaires et a nié à plusieurs reprises avoir jamais participé à une sortie nocturne. Les membres de sa famille ont déclaré qu'après l'examen d'entrée à l'université, son humeur avait fortement fluctué, son sommeil était médiocre et il se réveillait facilement. </p>
      <p>Le médecin soupçonnait d’abord des <strong>troubles psychologiques liés au Gaokao</strong>, mais les consultations suivantes ont fait apparaître des symptômes plus précis : le patient évitait manifestement des mots comme « délégué », « sept personnes » et « Thomas Dubois ».</p>
      <p>Avis d'examen : <strong>Des symptômes d'amnésie apparaissent</strong>. Une consultation psychologique et un traitement médicamenteux sont recommandés. La colonne du plan de traitement indique : <strong>Plan de traitement recommandé : traitement médicamenteux</strong>. Mais il y avait une écriture à la fin du rapport : "Ce n'est pas qu'il a oublié, mais il n'a pas osé y penser."</p>
    `
  },
  "sports-info-removal": {
    title: "Enregistrement de modification des informations",
    html: `
      <dl class="role-file-change-list">
        <dt>Date de modification</dt>
        <dd>09/07/2016</dd>
        <dt>Modifier le compte</dt>
        <dd>qx17 (Thomas Dubois)</dd>
        <dt>Modifier la plage</dt>
        <dd>Toutes les informations publiques sur le site Web</dd>
        <dt>Modifier le contenu</dt>
        <dd>Supprimé avec succès de toutes les informations du site Web : Thomas Dubois</dd>
      </dl>
    `
  },
  "sports-familiar-self": {
    title: "écriture familière",
    html: `
      <article class="role-diary-paper">
        <p>Léa Martin et moi avons été invités à la cérémonie par le délégué. Il m’a menacé : si je ne faisais pas venir Léa Martin, c’est moi qui serais sacrifié. Je ne pensais pas que la cérémonie était réelle, encore moins que Léa Martin disparaîtrait vraiment.</p>
        <p>On dit que tous ceux qui participent à la cérémonie peuvent voir leurs souhaits se réaliser, y compris Léa Martin. Cependant, seul mon souhait ne s'est pas réalisé. Est-ce la punition de Dieu pour moi ? </p>
        <p>J'ai l'impression que ma mémoire et mon jugement se détériorent ces derniers temps. J'espère que ce n'est pas un souhait fait par quelqu'un...</p>
        <p>Si possible, je demanderai à la déléguée à l’informatique de pirater le compte de la déléguée aux arts. Il paraît que les détails de la cérémonie se trouvent dans son compte. Mais je suis vraiment épuisé. Si je me sens mieux demain, je le ferai.</p>
        <p class="role-file-signature">20/07/2016 Thomas Dubois</p>
        <p class="truth-revealed"><a href="34-author-note.html">Félicitations, vous avez découvert la vérité, Thomas Dubois. </a></p>
      </article>
    `
  },
  "recovery-login": {
    title: "Restaurer la connexion",
    html: `
      <p>La guérison ne nécessite qu'un seul mot : <strong>Vérité</strong>. La page ne demande pas de nom d'utilisateur car elle sait déjà qui est le visiteur. </p>
      <p>Message système : vous avez encore un souhait inutilisé. Le rituel n'a pas échoué, vous ne l'avez simplement pas dit avant de craquer. </p>
      <p>Option 1 : <strong>utiliser votre propre souhait</strong> pour ramener la jeune fille et lui rendre son état d’origine. Avertissement : la déléguée à l’informatique disparaîtra du site et tous les enregistrements réécrits par la grâce divine seront réinitialisés.</p>
      <p>Option 2 : <strong>Réalisez vos souhaits, profitez de la gloire et de la richesse, et la fille disparaît</strong>. La page n'explique pas le prix, mais écrit seulement une phrase sous le bouton : "Omoyata ne le donne jamais à personne pour rien."</p>
      <p>Ceci n'est pas une connexion normale. Il s'agissait de demander à Hugo Dubois s'il était prêt à admettre qu'il était Thomas Dubois et s'il était prêt à abandonner son dernier souhait inutilisé. </p>
    `
  },
  "info-diary-01": {
    title: "Journal de la déléguée à l’informatique 1",
    html: `
      <article class="role-diary-paper">
        <p>Le compte <strong>Administrateur</strong> du délégué était si facile à deviner qu’il avait même choisi le nom de son chien comme mot de passe. J’ai ainsi obtenu toutes les informations sur la cérémonie. Tout est presque terminé. Je dois offrir un bon foyer à Léa.</p>
        <p class="role-file-signature">18 juin 2020 Camille Laurent</p>
      </article>
    `
  },
  "info-diary-02": {
    title: "Journal de la déléguée à l’informatique 2",
    html: `
      <article class="role-diary-paper">
        <p>Léa est venue me voir la veille de sa disparition. Elle m’a expliqué que le délégué de classe avait invité quelques personnes au lycée pour une dernière activité avant la remise des diplômes, une activité « que seuls les élèves de notre classe connaîtraient ».</p>
        <p>Elle ne voulait pas y aller, mais elle avait peur de décevoir tout le monde. Elle a aussi dit que le délégué aux sports serait présent, que la déléguée aux arts avait préparé le papier et les motifs, et que les trois amis du délégué de classe monteraient la garde.</p>
        <p>Je lui ai demandé si c’était une plaisanterie. Elle m’a répondu qu’elle n’en savait rien et qu’elle les avait seulement entendus parler d’une méthode trouvée sur le forum. <strong>Ce jour-là, elle m’a dit qu’elle sortait avec le délégué et d’autres camarades de classe, puis elle a disparu.</strong></p>
        <p>Tout le monde a dit qu'elle s'était peut-être enfuie de chez elle, et a ensuite déclaré qu'il n'y avait personne de ce type dans notre classe. Seul le site Web a refusé de l'admettre et a toujours exclu son nom des commentaires des autres. </p>
        <p>Utilisez le chiffrement par hachage pour chiffrer la valeur de hachage. Je suis peut-être un génie. Même si quelqu'un peut le déchiffrer une fois, il ne pensera jamais à le déchiffrer deux fois de suite, haha... Pour le mot de passe d'origine, définissez-le simplement sur la date d'aujourd'hui. </p>
      </article>
    `
  },
  "info-diary-03": {
    title: "Journal de la déléguée à l’informatique 3",
    html: `
      <article class="role-diary-paper">
        <p>Je sais enfin qui il reste. Ce n’est ni Julien Moreau, ni Élise Martin, ni les trois personnes qui suivaient le délégué. Le Registre du retour des âmes les a tous retrouvés.</p>
        <p>Il ne reste plus qu’une personne. Elle était présente elle aussi, mais son nom a été rayé de la liste des élèves. Aujourd’hui, il s’appelle Hugo Dubois, mais je me souviens que Léa l’appelait <strong>Thomas Dubois</strong>.</p>
        <p>Le nom dans l'ancienne liste était <strong>Thomas Dubois</strong>. S'il ne se souvenait vraiment de rien, pourquoi avait-il changé de nom ? Pourquoi n'osez-vous pas cliquer sur « Événements majeurs de juillet » lorsque vous le voyez ? </p>
        <p><strong>L’un des derniers témoins a réellement perdu la mémoire et a même changé de prénom. À quoi bon ?</strong> Le site le retrouvera. Léa aussi.</p>
      </article>
    `
  },
  "soul-return-log": {
    title: "Retour à l'enregistrement de l'âme",
    html: `
      <p>Statut de l'enregistrement : <strong>L'invocation a été réussie et irréversible</strong>. La description de la page indique que les objets invités ne partiront pas à moins que tous les témoins présents sur les lieux n'accusent réception et ne restituent les bénéfices. </p>
      <p>Le registre du retour des âmes compte sept personnes. <strong>Le délégué est mort ; le retour de son âme a réussi.</strong> Celui d’Élise Martin a également réussi, et son état actuel est <strong>végétatif</strong>. Pour Maxime Bernard, Nicolas Petit et Adrien Leroy, les causes consignées sont respectivement une intoxication au gaz, un accident de ski et une chute nocturne.</p>
      <p>Il manque une ligne en bas de la liste. Message système : <strong>Le nom d'un camarade de classe est manquant</strong>. Il n'y a que deux mots dans la colonne des remarques : moi-même. </p>
      <p>L'explication du récit du retour d'âme est très simple : le retour d'âme ne consiste pas à ramener les morts, mais à remettre une partie de la personne vivante. <strong>Rendre son âme signifie partager son âme avec son camarade de classe Léa Martin</strong>. Celui qui a réalisé son souhait à l'époque devrait le rendre. </p>
    `
  }
};

const params = new URLSearchParams(window.location.search);
const roleId = params.get("role");
const fileId = params.get("file");
const role = dashboardRoles[roleId];
const record = fileRecords[fileId];
const backLink = document.querySelector("#backToDashboard");
const kicker = document.querySelector("#detailKicker");
const title = document.querySelector("#detailTitle");
const content = document.querySelector("#detailContent");

if (!role || !record || !role.files.includes(fileId)) {
  document.body.classList.add("theme-light");
  title.textContent = "Impossible de lire le fichier";
  content.innerHTML = "<p>Le fichier n'existe pas, ou le compte courant n'a pas de droits d'accès. </p>";
} else {
  document.body.classList.add(`theme-${role.theme}`, `theme-${roleId}`);
  document.title = `${record.title} - ${role.title}`;
  backLink.href = role.dashboard;
  kicker.textContent = `${role.title} / READ ONLY`;
  title.textContent = record.title;
  content.innerHTML = record.html;
}
