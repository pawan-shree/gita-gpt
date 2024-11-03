window.addEventListener("load", function () {
  document.body.style.opacity = "1";
});

const logo = document.getElementById("logo");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const devs = document.getElementById("devs");

logo.addEventListener('click', () => {
    location.href = 'index.html';
});

about.addEventListener('click', () => {
    location.href = 'about.html';
});

contact.addEventListener('click', () => {
    location.href = 'contact.html';
});

devs.addEventListener('click', () => {
    location.href = 'devs.html';
});

// 

      // JavaScript to manage verse navigation
      const verses = [
        {
          verse: 1,
          sanskrit: "तस्मात्त्वमुत्तिष्ठ यशो लभस्व\n" +
          "जित्वा शत्रून्भुंक्ष्व राज्यं समृद्धम् ।\n" +
          "मयैवैते निहता: पूर्वमेव\n" +
          "निमित्तमात्रं भव सव्यसाचिन् ॥ ३३ ॥",
          english: "tasmāt tvam uttiṣṭha yaśo labhasva\n" +
          "jitvā śatrūn bhuṅkṣva rājyaṁ samṛddham\n" +
          "mayaivaite nihatāḥ pūrvam eva\n" +
          "nimitta-mātraṁ bhava savya-sācin",
          translation: "Therefore get up. Prepare to fight and win glory. Conquer your enemies and enjoy a flourishing kingdom. They are already put to death by My arrangement, and you, O Savyasācī, can be but an instrument in the fight.",
          purport: "Savya-sācin refers to one who can shoot arrows very expertly in the field; thus Arjuna is addressed as an expert warrior capable of delivering arrows to kill his enemies. “Just become an instrument”: nimitta-mātram. This word is also very significant. The whole world is moving according to the plan of the Supreme Personality of Godhead. Foolish persons who do not have sufficient knowledge think that nature is moving without a plan and all manifestations are but accidental formations. There are many so-called scientists who suggest that perhaps it was like this, or maybe like that, but there is no question of “perhaps” and “maybe.” There is a specific plan being carried out in this material world. What is this plan? This cosmic manifestation is a chance for the conditioned souls to go back to Godhead, back to home. As long as they have the domineering mentality which makes them try to lord it over material nature, they are conditioned. But anyone who can understand the plan of the Supreme Lord and cultivate Kṛṣṇa consciousness is most intelligent. The creation and destruction of the cosmic manifestation are under the superior guidance of God. Thus the Battle of Kurukṣetra was fought according to the plan of God. Arjuna was refusing to fight, but he was told that he should fight in accordance with the desire of the Supreme Lord. Then he would be happy. If one is in full Kṛṣṇa consciousness and his life is devoted to the Lord’s transcendental service, he is perfect.",
        },
        {
            verse: 2,
            sanskrit: "सहजं कर्म कौन्तेय सदोषमपि न त्यजेत् ।\n" +
          "सर्वारम्भा हि दोषेण धूमेनाग्न‍िरिवावृता: ॥ ४८ ॥",
            english: "saha-jaṁ karma kaunteya\n" +
          "sa-doṣam api na tyajet\n" +
          "sarvārambhā hi doṣeṇa\n" +
          "dhūmenāgnir ivāvṛtāḥ",
            translation: "O son of Kunti, one should not give up the work born of their own nature, even if it is full of faults. All endeavors are covered by some fault, just as fire is covered by smoke.",
            purport: "In conditioned life, all work is contaminated by the material modes of nature. Even if one is a brāhmaṇa, he has to perform sacrifices in which animal killing is necessary. Similarly, a kṣatriya, however pious he may be, has to fight enemies. He cannot avoid it. Similarly, a merchant, however pious he may be, must sometimes hide his profit to stay in business, or he may sometimes have to do business on the black market. These things are necessary; one cannot avoid them. Similarly, even though a man is a śūdra serving a bad master, he has to carry out the order of the master, even though it should not be done. Despite these flaws, one should continue to carry out his prescribed duties, for they are born out of his own nature.\n\n" +
            "A very nice example is given herein. Although fire is pure, still there is smoke. Yet smoke does not make the fire impure. Even though there is smoke in the fire, fire is still considered to be the purest of all elements. If one prefers to give up the work of a kṣatriya and take up the occupation of a brāhmaṇa, he is not assured that in the occupation of a brāhmaṇa there are no unpleasant duties. One may then conclude that in the material world no one can be completely free from the contamination of material nature. This example of fire and smoke is very appropriate in this connection. When in wintertime one takes a stone from the fire, sometimes smoke disturbs the eyes and other parts of the body, but still one must make use of the fire despite disturbing conditions.\n\n" +
            "Similarly, one should not give up his natural occupation because there are some disturbing elements. Rather, one should be determined to serve the Supreme Lord by his occupational duty in Kṛṣṇa consciousness. That is the perfectional point. When a particular type of occupation is performed for the satisfaction of the Supreme Lord, all the defects in that particular occupation are purified. When the results of work are purified, when connected with devotional service, one becomes perfect in seeing the self within, and that is self-realization."            
          }
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