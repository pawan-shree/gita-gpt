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

// let currentId = 1; // Start with ID 1
// let maxId = 1; // To hold the maximum ID
// let currentTable = 'angry'; // Default table

// function fetchData(id) {
//     fetch(`http://localhost:3000/api/${currentTable}/data/${id}`)
//         .then(response => response.json())
//         .then(data => {
//             if (Object.keys(data).length === 0) {
//                 console.error('No data found for this ID.');
//                 return; // Optionally handle no data found
//             }
//             // Display the data in the respective divs
//             document.getElementById('verse').textContent = data.id;
//             document.getElementById('sanskrit').textContent = data.Sanskrit;
//             document.getElementById('english').textContent = data.English;
//             document.getElementById('translation').textContent = data.Translation;
//             document.getElementById('purport').textContent = data.Purport;
//         })
//         .catch(error => console.error('Error fetching data:', error));
// }

// function fetchMaxId() {
//     fetch(`http://localhost:3000/api/${currentTable}/max-id`)
//         .then(response => response.json())
//         .then(data => {
//             maxId = data.maxId; // Set maxId from response
//         })
//         .catch(error => console.error('Error fetching max ID:', error));
// }

// // Initial fetch for max ID and ID 1
// fetchMaxId();
// fetchData(currentId);

// // Next button event listener
// document.getElementById('next').addEventListener('click', () => {
//     currentId++;
//     if (currentId > maxId) {
//         currentId = 1; // Loop to first ID
//     }
//     fetchData(currentId);
// });

// // Previous button event listener
// document.getElementById('prev').addEventListener('click', () => {
//     currentId--;
//     if (currentId < 1) {
//         currentId = maxId; // Loop to last ID
//     }
//     fetchData(currentId);
// });

// // Table change event listener
// document.getElementById('tableDropdown').addEventListener('change', (event) => {
//     currentTable = event.target.value; // Update current table based on selection
//     currentId = 1; // Reset to the first ID for the new table
//     fetchMaxId(); // Fetch the new max ID for the selected table
//     fetchData(currentId); // Fetch data for the first ID of the new table
// });


      // JavaScript to manage verse navigation
      const verses = [
        {
          verse: 1,
          sanskrit: "दुःखेष्वनुद्विग्न‍मनाः सुखेषु विगतस्पृहः । वीतरागभयक्रोधः स्थिधीर्मुनिरुच्यते ॥ ५६ ॥",
          english: "duḥkheṣv anudvigna-manāḥ sukheṣu vigata-spṛhaḥ vīta-rāga-bhaya-krodhaḥ sthita-dhīr munir ucyate",
          translation: "One who is not disturbed in mind even amidst the threefold miseries or elated when there is happiness, and who is free from attachment, fear and anger, is called a sage of steady mind.",
          purport: "The word muni means one who can agitate his mind in various ways for mental speculation without coming to a factual conclusion. It is said that every muni has a different angle of vision, and unless a muni differs from other munis, he cannot be called a muni in the strict sense of the term. Nāsāv ṛṣir yasya mataṁ na bhinnam (Mahābhārata, Vana-parva 313.117). But a sthita-dhīr muni, as mentioned herein by the Lord, is different from an ordinary muni. The sthita-dhīr muni is always in Kṛṣṇa consciousness, for he has exhausted all his business of creative speculation. He is called praśānta-niḥśeṣa-mano-rathāntara (Stotra-ratna 43), or one who has surpassed the stage of mental speculations and has come to the conclusion that Lord Śrī Kṛṣṇa, or Vāsudeva, is everything (vāsudevaḥ sarvam iti sa mahātmā su-durlabhaḥ). He is called a muni fixed in mind. Such a fully Kṛṣṇa conscious person is not at all disturbed by the onslaughts of the threefold miseries, for he accepts all miseries as the mercy of the Lord, thinking himself only worthy of more trouble due to his past misdeeds; and he sees that his miseries, by the grace of the Lord, are minimized to the lowest. Similarly, when he is happy he gives credit to the Lord, thinking himself unworthy of the happiness; he realizes that it is due only to the Lord’s grace that he is in such a comfortable condition and able to render better service to the Lord. And, for the service of the Lord, he is always daring and active and is not influenced by attachment or aversion. Attachment means accepting things for one’s own sense gratification, and detachment is the absence of such sensual attachment. But one fixed in Kṛṣṇa consciousness has neither attachment nor detachment because his life is dedicated in the service of the Lord. Consequently he is not at all angry even when his attempts are unsuccessful. Success or no success, a Kṛṣṇa conscious person is always steady in his determination.",
        },
        {
            verse: 2,
            sanskrit: "ध्यायतो विषयान्पुंस: सङ्गस्तेषूपजायते |\nसङ्गात्सञ्जायते काम: कामात्क्रोधोऽभिजायते || 62 ||",
            english: "dhyāyato viṣayān puṁsaḥ saṅgas teṣūpajāyate |\nsaṅgāt sañjāyate kāmaḥ kāmāt krodho'bhijāyate || 62 ||",
            translation: "When a man contemplates the objects of sense, he develops attachment for them; from attachment, desire arises, and from desire, anger.",
            purport: "One who is not Kṛṣṇa conscious is subjected to material desires while contemplating the objects of the senses. The senses require real engagements, and if they are not engaged in the transcendental loving service of the Lord, they will certainly seek engagement in the service of materialism. In the material world everyone, including Lord Śiva and Lord Brahmā – to say nothing of other demigods in the heavenly planets – is subjected to the influence of sense objects, and the only method to get out of this puzzle of material existence is to become Kṛṣṇa conscious. Lord Śiva was deep in meditation, but when Pārvatī agitated him for sense pleasure, he agreed to the proposal, and as a result Kārtikeya was born. When Haridāsa Ṭhākura was a young devotee of the Lord, he was similarly allured by the incarnation of Māyā-devī, but Haridāsa easily passed the test because of his unalloyed devotion to Lord Kṛṣṇa. As illustrated in the above-mentioned verse of Śrī Yāmunācārya, a sincere devotee of the Lord shuns all material sense enjoyment due to his higher taste for spiritual enjoyment in the association of the Lord. That is the secret of success. One who is not, therefore, in Kṛṣṇa consciousness, however powerful he may be in controlling the senses by artificial repression, is sure ultimately to fail, for the slightest thought of sense pleasure will agitate him to gratify his desires."
          },
          {
            verse: 3,
            sanskrit: "क्रोधाद्भवति सम्मोह: सम्मोहात्स्मृतिविभ्रम: |\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति || 63 ||",
            english: "krodhād bhavati sammohaḥ sammohāt smṛti-vibhramaḥ |\nsmṛti-bhraṃśād buddhi-nāśo buddhi-nāśāt praṇaśyati || 63 ||",
            translation: "From anger, delusion arises; from delusion, confusion of memory; from the confusion of memory, the loss of intelligence; and from the loss of intelligence, one is destroyed.",
            purport: "Śrīla Rūpa Gosvāmī has given us this direction:\n\n" +
            "prāpañcikatayā buddhyā\n" +
            "hari-sambandhi-vastunaḥ\n" +
            "mumukṣubhiḥ parityāgo\n" +
            "vairāgyaṁ phalgu kathyate\n" +
            "(Bhakti-rasāmṛta-sindhu 1.2.258)\n\n" +
            "By development of Kṛṣṇa consciousness one can know that everything has its use in the service of the Lord. Those who are without knowledge of Kṛṣṇa consciousness artificially try to avoid material objects, and as a result, although they desire liberation from material bondage, they do not attain to the perfect stage of renunciation. Their so-called renunciation is called phalgu, or less important. On the other hand, a person in Kṛṣṇa consciousness knows how to use everything in the service of the Lord; therefore he does not become a victim of material consciousness. For example, for an impersonalist, the Lord, or the Absolute, being impersonal, cannot eat. Whereas an impersonalist tries to avoid good eatables, a devotee knows that Kṛṣṇa is the supreme enjoyer and that He eats all that is offered to Him in devotion. So, after offering good eatables to the Lord, the devotee takes the remnants, called prasādam. Thus everything becomes spiritualized, and there is no danger of a downfall. The devotee takes prasādam in Kṛṣṇa consciousness, whereas the nondevotee rejects it as material. The impersonalist, therefore, cannot enjoy life, due to his artificial renunciation; and for this reason, a slight agitation of the mind pulls him down again into the pool of material existence. It is said that such a soul, even though rising up to the point of liberation, falls down again due to his not having support in devotional service."            
          },
          {
            verse: 4,
            sanskrit: "कामक्रोधवियुक्तानां यतीनां यतचेतसाम् |\nअभितो ब्रह्मनिर्वाणं वर्तते विदितात्मनाम् || 26 ||",
            english: "kāma-krodha-viyuktānāṁ yatīnāṁ yata-cetasām |\nabhito brahma-nirvāṇaṁ vartate viditātmanām || 26 ||",
            translation: "For those who have conquered their desires and anger, and who are self-controlled, the state of Brahman is ever accessible.",
            purport: "Of the saintly persons who are constantly engaged in striving toward salvation, one who is in Kṛṣṇa consciousness is the best of all. The Bhāgavatam (4.22.39) confirms this fact as follows:\n\n" +
            "yat-pāda-paṅkaja-palāśa-vilāsa-bhaktyā\n" +
            "karmāśayaṁ grathitam udgrathayanti santaḥ\n" +
            "tadvan na rikta-matayo yatayo ’pi ruddha-\n" +
            "sroto-gaṇās tam araṇaṁ bhaja vāsudevam\n\n" +
            "“Just try to worship, in devotional service, Vāsudeva, the Supreme Personality of Godhead. Even great sages are not able to control the forces of the senses as effectively as those who are engaged in transcendental bliss by serving the lotus feet of the Lord, uprooting the deep-grown desire for fruitive activities.”\n\n" +
            "In the conditioned soul the desire to enjoy the fruitive results of work is so deep-rooted that it is very difficult even for the great sages to control such desires, despite great endeavors. A devotee of the Lord, constantly engaged in devotional service in Kṛṣṇa consciousness, perfect in self-realization, very quickly attains liberation in the Supreme. Owing to his complete knowledge in self-realization, he always remains in trance. To cite an analogous example of this:\n\n" +
            "darśana-dhyāna-saṁsparśair\n" +
            "matsya-kūrma-vihaṅgamāḥ\n" +
            "svāny apatyāni puṣṇanti\n" +
            "tathāham api padma-ja\n\n" +
            "“By vision, by meditation and by touch only do the fish, the tortoise and the birds maintain their offspring. Similarly do I also, O Padmaja!”\n\n" +
            "The fish brings up its offspring simply by looking at them. The tortoise brings up its offspring simply by meditation. The eggs of the tortoise are laid on land, and the tortoise meditates on the eggs while in the water. Similarly, the devotee in Kṛṣṇa consciousness, although far away from the Lord’s abode, can elevate himself to that abode simply by thinking of Him constantly – by engagement in Kṛṣṇa consciousness. He does not feel the pangs of material miseries; this state of life is called brahma-nirvāṇa, or the absence of material miseries due to being constantly immersed in the Supreme."            
          },
          {
            verse: 5,
            sanskrit: "त्रिविधं नरकस्येदं द्वारं नाशनमात्मन: |\nकाम: क्रोधस्तथा लोभस्तस्मादेतत्‍त्रयं त्यजेत् ॥ २१ ॥",
            english: "trividaṁ narakasyedaṁ dvāraṁ nāśanam ātmanaḥ |\nkāmaḥ krodhas tathā lobhas tasmād etat-trayaṁ tyajet ॥ 21 ॥",
            translation: "There are three gates leading to hell: lust, anger, and greed. Therefore, one should abandon these three.",
            purport: "The beginning of demoniac life is described herein. One tries to satisfy his lust, and when he cannot, anger and greed arise. A sane man who does not want to glide down to the species of demoniac life must try to give up these three enemies, which can kill the self to such an extent that there will be no possibility of liberation from this material entanglement."
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
