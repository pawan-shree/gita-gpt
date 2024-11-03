window.addEventListener("load", function () {
  document.body.style.opacity = "1";
});

const logo = document.getElementById("logo");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const devs = document.getElementById("devs");

logo.addEventListener("click", () => {
  location.href = "index.html";
});

about.addEventListener("click", () => {
  location.href = "about.html";
});

contact.addEventListener("click", () => {
  location.href = "contact.html";
});

devs.addEventListener("click", () => {
  location.href = "devs.html";
});

//

// JavaScript to manage verse navigation
const verses = [
  {
    verse: 1,
    sanskrit:
      "श्री भगवानुवाच\n" +
      "काम एष क्रोध एष रजोगुणसमुद्भ‍वः ।\n" +
      "महाशनो महापाप्मा विद्ध्येनमिह वैरिणम् ॥ ३७ ॥",
    english:
      "śrī-bhagavān uvāca\n" +
      "kāma eṣa krodha eṣa\n" +
      "rajo-guṇa-samudbhavaḥ\n" +
      "mahāśano mahā-pāpmā\n" +
      "viddhy enam iha vairiṇam",
    translation:
      "The Supreme Personality of Godhead said: It is lust only, Arjuna, which is born of contact with the material mode of passion and later transformed into wrath, and which is the all-devouring sinful enemy of this world.",
    purport:
      "When a living entity comes in contact with the material creation, his eternal love for Kṛṣṇa is transformed into lust, in association with the mode of passion. Or, in other words, the sense of love of God becomes transformed into lust, as milk in contact with sour tamarind is transformed into yogurt. Then again, when lust is unsatisfied, it turns into wrath; wrath is transformed into illusion, and illusion continues the material existence. Therefore, lust is the greatest enemy of the living entity, and it is lust only which induces the pure living entity to remain entangled in the material world. Wrath is the manifestation of the mode of ignorance; these modes exhibit themselves as wrath and other corollaries. If, therefore, the mode of passion, instead of being degraded into the mode of ignorance, is elevated to the mode of goodness by the prescribed method of living and acting, then one can be saved from the degradation of wrath by spiritual attachment.\n" +
      "The Supreme Personality of Godhead expanded Himself into many for His ever-increasing spiritual bliss, and the living entities are parts and parcels of this spiritual bliss. They also have partial independence, but by misuse of their independence, when the service attitude is transformed into the propensity for sense enjoyment, they come under the sway of lust. This material creation is created by the Lord to give facility to the conditioned souls to fulfill these lustful propensities, and when completely baffled by prolonged lustful activities, the living entities begin to inquire about their real position.\n" +
      "This inquiry is the beginning of the Vedānta-sūtras, wherein it is said, athāto brahma-jijñāsā: one should inquire into the Supreme. And the Supreme is defined in Śrīmad-Bhāgavatam as janmādy asya yato ’nvayād itarataś ca, or, “The origin of everything is the Supreme Brahman.” Therefore the origin of lust is also in the Supreme. If, therefore, lust is transformed into love for the Supreme, or transformed into Kṛṣṇa consciousness – or, in other words, desiring everything for Kṛṣṇa – then both lust and wrath can be spiritualized. Hanumān, the great servitor of Lord Rāma, exhibited his wrath by burning the golden city of Rāvaṇa, but by doing so he became the greatest devotee of the Lord. Here also, in Bhagavad-gītā, the Lord induces Arjuna to engage his wrath upon his enemies for the satisfaction of the Lord. Therefore, lust and wrath, when they are employed in Kṛṣṇa consciousness, become our friends instead of our enemies.",
  },
  {
    verse: 2,
    sanskrit:
      "तस्मात्त्वमिन्द्रियाण्यादौ नियम्य भरतर्षभ |\n" +
      "पाप्मानं प्रजहि ह्येनं ज्ञानविज्ञाननाशनम् || 41||",
    english:
      "tasmāt tvam indriyāṇyādau niyamya bharatarṣhabha\n" +
      "pāpmānaṁ prajahi hyenaṁ jñāna-vijñāna-nāśhanam",
    translation:
      "The Supreme Personality of Godhead said: It is lust only, Arjuna, which is born of contact with the material mode of passion and later transformed into wrath, and which is the all-devouring sinful enemy of this world.",
    purport:
      "Now, Shree Krishna explains how to overcome lust, the root of all evil, which is so pernicious to human consciousness. Having identified the repositories of lust, Shree Krishna asks Arjun, at the outset, to curb the desires of the senses. Permitting them to arise is the cause of our miseries, while eliminating them is the way to peace.\n" +
      "Consider the following example. Ramesh and Dinesh were two fellow students sharing the same room in the hostel. At 10 pm at night, Ramesh developed the desire to smoke cigarettes. He said, “I am getting the urge to smoke.” Dinesh replied, “It is so late at night. Forget about cigarettes and go to sleep.” “No…no…I will not be able to sleep until I puff the tobacco,” said Ramesh. Dinesh went to sleep, but Ramesh went out in search of cigarettes. The shops nearby had closed. It took him two hours until he finally returned to the hostel with the cigarette and had a smoke.\n" +
      "In the morning, Dinesh asked him, “Ramesh, when did you sleep at night?” “At midnight.” “Really! That means you remained agitated for cigarettes for two hours and when you had your puffs, you returned to the same state that you were in at 10 pm.” “What do you mean by that?” asked Ramesh. “Look, at 10 pm you did not have any desire for cigarettes, and you were peaceful. Then you yourself created the desire for them. From 10 pm to midnight, you remained agitated for cigarettes. Finally, when you smoked them, the disease, which you had created, went away, and you got to sleep. I, on the other hand, did not create any desire, and slept peacefully at 10 pm itself.”\n" +
      "In this way, we create desires for the objects of the senses of the body, and then become agitated by them. When we get the cherished object, the disease of our own creation gets eradicated, and we think of it as happiness. However, if we think of ourselves as the soul and our only purpose is happiness of the soul, then it becomes easier to renounce such material desires. Shree Krishna tells Arjun to bring the senses under control, thereby slaying the lust residing in them. To accomplish this we must use the higher instruments given by God to us, as stated in the next verse.",
  },
  {
    verse: 3,
    sanskrit:
      "एवं बुद्धेः परं बुद्ध्वा संस्तभ्यात्मानमात्मना ।\n" +
      "जहि शत्रुं महाबाहो कामरूपं दुरासदम् ॥ ४३ ॥",
    english:
      "evaṁ buddheḥ paraṁ buddhvā\n" +
      "saṁstabhyātmānam ātmanā\n" +
      "jahi śatruṁ mahā-bāho\n" +
      "kāma-rūpaṁ durāsadam",
    translation:
      "Thus knowing oneself to be transcendental to the material senses, mind and intelligence, O mighty-armed Arjuna, one should steady the mind by deliberate spiritual intelligence [Kṛṣṇa consciousness] and thus – by spiritual strength – conquer this insatiable enemy known as lust.",
    purport:
      "This Third Chapter of the Bhagavad-gītā is conclusively directive to Kṛṣṇa consciousness by knowing oneself as the eternal servitor of the Supreme Personality of Godhead, without considering impersonal voidness the ultimate end. In the material existence of life, one is certainly influenced by propensities for lust and desire for dominating the resources of material nature. Desire for overlording and for sense gratification is the greatest enemy of the conditioned soul; but by the strength of Kṛṣṇa consciousness, one can control the material senses, the mind and the intelligence. One may not give up work and prescribed duties all of a sudden; but by gradually developing Kṛṣṇa consciousness, one can be situated in a transcendental position without being influenced by the material senses and the mind – by steady intelligence directed toward one’s pure identity. This is the sum total of this chapter. In the immature stage of material existence, philosophical speculations and artificial attempts to control the senses by the so-called practice of yogic postures can never help a man toward spiritual life. He must be trained in Kṛṣṇa consciousness by higher intelligence.",
  },
  {
    verse: 4,
    sanskrit:
      "ये हि संस्पर्शजा भोगा दु:खयोनय एव ते ।\n" +
      "आद्यन्तवन्त: कौन्तेय न तेषु रमते बुध: ॥ २२ ॥",
    english:
      "ye hi saṁsparśa-jā bhogā\n" +
      "duḥkha-yonaya eva te\n" +
      "ādy-antavantaḥ kaunteya\n" +
      "na teṣu ramate budhaḥ",
    translation:
      "An intelligent person does not take part in the sources of misery, which are due to contact with the material senses. O son of Kuntī, such pleasures have a beginning and an end, and so the wise man does not delight in them.",
    purport:
      "Material sense pleasures are due to the contact of the material senses, which are all temporary because the body itself is temporary. A liberated soul is not interested in anything which is temporary. Knowing well the joys of transcendental pleasures, how can a liberated soul agree to enjoy false pleasure? In the Padma Purāṇa it is said:\n" +
      "ramante yogino ’nante\n" +
      "satyānande cid-ātmani\n" +
      "iti rāma-padenāsau\n" +
      "paraṁ brahmābhidhīyate\n" +
      "“The mystics derive unlimited transcendental pleasures from the Absolute Truth, and therefore the Supreme Absolute Truth, the Personality of Godhead, is also known as Rāma.”\n" +
      "In the Śrīmad-Bhāgavatam also (5.5.1) it is said:\n" +
      "nāyaṁ deho deha-bhājāṁ nṛ-loke\n" +
      "kaṣṭān kāmān arhate viḍ-bhujāṁ ye\n" +
      "tapo divyaṁ putrakā yena sattvaṁ\n" +
      "śuddhyed yasmād brahma-saukhyaṁ tv anantam\n" +
      "“My dear sons, there is no reason to labor very hard for sense pleasure while in this human form of life; such pleasures are available to the stool-eaters [hogs]. Rather, you should undergo penances in this life by which your existence will be purified, and as a result you will be able to enjoy unlimited transcendental bliss.”\n" +
      "Therefore, those who are true yogīs or learned transcendentalists are not attracted by sense pleasures, which are the causes of continuous material existence. The more one is addicted to material pleasures, the more he is entrapped by material miseries.",
  },
  {
    verse: 5,
    sanskrit:
      "त्रिविधं नरकस्येदं द्वारं नाशनमात्मन: ।\n" +
      "काम: क्रोधस्तथा लोभस्तस्मादेतत्‍त्रयं त्यजेत् ॥ २१ ॥",
    english:
      "tri-vidhaṁ narakasyedaṁ\n" +
      "dvāraṁ nāśanam ātmanaḥ\n" +
      "kāmaḥ krodhas tathā lobhas\n" +
      "tasmād etat trayaṁ tyajet",
    translation:
      "There are three gates leading to this hell – lust, anger and greed. Every sane man should give these up, for they lead to the degradation of the soul.",
    purport:
      "The beginning of demoniac life is described herein. One tries to satisfy his lust, and when he cannot, anger and greed arise. A sane man who does not want to glide down to the species of demoniac life must try to give up these three enemies, which can kill the self to such an extent that there will be no possibility of liberation from this material entanglement.",
  },
];

let currentIndex = 0;

function updateContent() {
  const verseData = verses[currentIndex];
  document.getElementById("verse").textContent = verseData.verse;
  document.getElementById("sanskrit").textContent = verseData.sanskrit;
  document.getElementById("english").textContent = verseData.english;
  document.getElementById("translation").textContent = verseData.translation;
  document.getElementById("purport").textContent = verseData.purport;
}

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % verses.length; // Cycle forwards
  updateContent();
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + verses.length) % verses.length; // Cycle backwards
  updateContent();
});

// Initial content load
updateContent();
