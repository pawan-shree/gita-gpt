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
      "क्ल‍ैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते |\n" +
      "क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप ॥ ३ ॥",
    english:
      "klaibyaṁ mā sma gamaḥ pārtha\n" +
      "naitat tvayy upapadyate\n" +
      "kṣudraṁ hṛdaya-daurbalyaṁ\n" +
      "tyaktvottiṣṭha paran-tapa" +
      "mayaivaite nihatāḥ pūrvam eva\n" +
      "nimitta-mātraṁ bhava savya-sācin",
    translation:
      "O son of Pṛthā, do not yield to this degrading impotence. It does not become you. Give up such petty weakness of heart and arise, O chastiser of the enemy.",
    purport:
      "Arjuna was addressed as the son of Pṛthā, who happened to be the sister of Kṛṣṇa’s father Vasudeva. Therefore Arjuna had a blood relationship with Kṛṣṇa. If the son of a kṣatriya declines to fight, he is a kṣatriya in name only, and if the son of a brāhmaṇa acts impiously, he is a brāhmaṇa in name only. Such kṣatriyas and brāhmaṇas are unworthy sons of their fathers; therefore, Kṛṣṇa did not want Arjuna to become an unworthy son of a kṣatriya. Arjuna was the most intimate friend of Kṛṣṇa, and Kṛṣṇa was directly guiding him on the chariot; but in spite of all these credits, if Arjuna abandoned the battle he would be committing an infamous act. Therefore Kṛṣṇa said that such an attitude in Arjuna did not fit his personality. Arjuna might argue that he would give up the battle on the grounds of his magnanimous attitude for the most respectable Bhīṣma and his relatives, but Kṛṣṇa considered that sort of magnanimity mere weakness of heart. Such false magnanimity was not approved by any authority. Therefore, such magnanimity or so-called nonviolence should be given up by persons like Arjuna under the direct guidance of Kṛṣṇa.",
  },
  {
    verse: 2,
    sanskrit:
      "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदु:खदा: |\n" +
      "आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत || १४ ||",
    english:
      "mātrā-sparśhās tu kaunteya śhītoṣhṇa-sukha-duḥkha-dāḥ\n" +
      "āgamāpāyino ’nityās tāns-titikṣhasva bhārata" +
      "sa-doṣam api na tyajet\n" +
      "sarvārambhā hi doṣeṇa\n" +
      "dhūmenāgnir ivāvṛtāḥ",
    translation:
      "O son of Kuntī, the nonpermanent appearance of happiness and distress, and their disappearance in due course, are like the appearance and disappearance of winter and summer seasons. They arise from sense perception, O scion of Bharata, and one must learn to tolerate them without being disturbed.",
    purport: `
    In the proper discharge of duty, one has to learn to tolerate nonpermanent appearances and disappearances of happiness and distress. According to Vedic injunction, one has to take his bath early in the morning even during the month of Māgha (January-February). It is very cold at that time, but in spite of that a man who abides by the religious principles does not hesitate to take his bath. Similarly, a woman does not hesitate to cook in the kitchen in the months of May and June, the hottest part of the summer season. One has to execute his duty in spite of climatic inconveniences. Similarly, to fight is the religious principle of the kṣatriyas, and although one has to fight with some friend or relative, one should not deviate from his prescribed duty. One has to follow the prescribed rules and regulations of religious principles in order to rise up to the platform of knowledge, because by knowledge and devotion only can one liberate himself from the clutches of māyā (illusion).

    The two different names of address given to Arjuna are also significant. To address him as Kaunteya signifies his great blood relations from his mother’s side; and to address him as Bhārata signifies his greatness from his father’s side. From both sides he is supposed to have a great heritage. A great heritage brings responsibility in the matter of proper discharge of duties; therefore, he cannot avoid fighting.
    `,
  },
  {
    verse: 3,
    sanskrit:
      "वेदाविनाशिनं नित्यं य एनमजमव्ययम् |\n" +
      "कथं स पुरुष: पार्थ कं घातयति हन्ति कम् || २१ ||" +
      "सर्वारम्भा हि दोषेण धूमेनाग्न‍िरिवावृता: ॥ ४८ ॥",
    english:
      "vedāvināśhinaṁ nityaṁ ya enam ajam avyayam\n" +
      "kathaṁ sa puruṣhaḥ pārtha kaṁ ghātayati hanti kam" +
      "sa-doṣam api na tyajet\n" +
      "sarvārambhā hi doṣeṇa\n" +
      "dhūmenāgnir ivāvṛtāḥ",
    translation:
      "O Parth, how can one who knows the soul to be imperishable, eternal, unborn, and immutable kill anyone or cause anyone to kill?",
    purport:
      "Everything has its proper utility, and a man who is situated in complete knowledge knows how and where to apply a thing for its proper utility. Similarly, violence also has its utility, and how to apply violence rests with the person in knowledge. Although the justice of the peace awards capital punishment to a person condemned for murder, the justice of the peace cannot be blamed, because he orders violence to another person according to the codes of justice. In Manu-saṁhitā, the lawbook for mankind, it is supported that a murderer should be condemned to death so that in his next life he will not have to suffer for the great sin he has committed. Therefore, the king’s punishment of hanging a murderer is actually beneficial. Similarly, when Kṛṣṇa orders fighting, it must be concluded that violence is for supreme justice, and thus Arjuna should follow the instruction, knowing well that such violence, committed in the act of fighting for Kṛṣṇa, is not violence at all because, at any rate, the man, or rather the soul, cannot be killed; so for the administration of justice, so-called violence is permitted. A surgical operation is not meant to kill the patient, but to cure him. Therefore the fighting to be executed by Arjuna at the instruction of Kṛṣṇa is with full knowledge, so there is no possibility of sinful reaction.",
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
