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
// let currentTable = 'lonliness'; // Default table

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
          sanskrit: "समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रिय: ।\n" +
          "ये भजन्ति तु मां भक्त्य‍ा मयि ते तेषु चाप्यहम् ॥ २९ ॥",
          english: "samo ’haṁ sarva-bhūteṣu\n" +
          "na me dveṣyo ’sti na priyaḥ\n" +
          "ye bhajanti tu māṁ bhaktyā\n" +
          "mayi te teṣu cāpy aham",
          translation: "I envy no one, nor am I partial to anyone. I am equal to all. But whoever renders service unto Me in devotion is a friend, is in Me, and I am also a friend to him.",
          purport: "One may question here that if Kṛṣṇa is equal to everyone and no one is His special friend, " +
    "then why does He take a special interest in the devotees who are always engaged in His transcendental service? " +
    "But this is not discrimination; it is natural. Any man in this material world may be very charitably disposed, " +
    "yet he has a special interest in his own children. The Lord claims that every living entity – in whatever form – " +
    "is His son, and so He provides everyone with a generous supply of the necessities of life. He is just like a cloud " +
    "which pours rain all over, regardless of whether it falls on rock or land or water. But for His devotees, He gives " +
    "specific attention. Such devotees are mentioned here: they are always in Kṛṣṇa consciousness, and therefore they are " +
    "always transcendentally situated in Kṛṣṇa. The very phrase “Kṛṣṇa consciousness” suggests that those who are in such " +
    "consciousness are living transcendentalists, situated in Him. The Lord says here distinctly, mayi te: “They are in Me.” " +
    "Naturally, as a result, the Lord is also in them. This is reciprocal. This also explains the words ye yathā māṁ prapadyante " +
    "tāṁs tathaiva bhajāmy aham: “Whoever surrenders unto Me, proportionately I take care of him.” This transcendental " +
    "reciprocation exists because both the Lord and the devotee are conscious. When a diamond is set in a golden ring, it " +
    "looks very nice. The gold is glorified, and at the same time the diamond is glorified. The Lord and the living entity " +
    "eternally glitter, and when a living entity becomes inclined to the service of the Supreme Lord he looks like gold. The " +
    "Lord is a diamond, and so this combination is very nice. Living entities in a pure state are called devotees. The " +
    "Supreme Lord becomes the devotee of His devotees. If a reciprocal relationship is not present between the devotee and the " +
    "Lord, then there is no personalist philosophy. In the impersonal philosophy there is no reciprocation between the Supreme " +
    "and the living entity, but in the personalist philosophy there is.\n\n",
        },
        {
            verse: 2,
            sanskrit: "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति ।\n" +
          "तस्याहं न प्रणश्यामि स च मे न प्रणश्यति ॥ ३० ॥",
            english: "yo māṁ paśyati sarvatra\n" +
          "sarvaṁ ca mayi paśyati\n" +
          "tasyāhaṁ na praṇaśyāmi\n" +
          "sa ca me na praṇaśyati",
            translation: "For one who sees Me everywhere and sees everything in Me, I am never lost, nor is he ever lost to Me.",
            purport: " A person in Kṛṣṇa consciousness certainly sees Lord Kṛṣṇa everywhere, and he sees everything in Kṛṣṇa. Such a person may appear to see all " +
    "separate manifestations of the material nature, but in each and every instance he is conscious of Kṛṣṇa, knowing that everything is a manifestation of " +
    "Kṛṣṇa’s energy. Nothing can exist without Kṛṣṇa, and Kṛṣṇa is the Lord of everything – this is the basic principle of Kṛṣṇa consciousness. " +
    "Kṛṣṇa consciousness is the development of love of Kṛṣṇa – a position transcendental even to material liberation. At this stage of Kṛṣṇa consciousness, " +
    "beyond self-realization, the devotee becomes one with Kṛṣṇa in the sense that Kṛṣṇa becomes everything for the devotee and the devotee becomes full in " +
    "loving Kṛṣṇa. An intimate relationship between the Lord and the devotee then exists. In that stage, the living entity can never be annihilated, nor is the " +
    "Personality of Godhead ever out of the sight of the devotee. To merge in Kṛṣṇa is spiritual annihilation. A devotee takes no such risk. It is stated in the " +
    "Brahma-saṁhitā (5.38):\n\n" +

    "premāñjana-cchurita-bhakti-vilocanena\n" +
    "santaḥ sadaiva hṛdayeṣu vilokayanti\n" +
    "yaṁ śyāmasundaram acintya-guṇa-svarūpaṁ\n" +
    "govindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n" +

    "\"I worship the primeval Lord, Govinda, who is always seen by the devotee whose eyes are anointed with the pulp of love. He is seen in His eternal " +
    "form of Śyāmasundara, situated within the heart of the devotee.\"\n\n" +

    "At this stage, Lord Kṛṣṇa never disappears from the sight of the devotee, nor does the devotee ever lose sight of the Lord. In the case of a yogī who sees " +
    "the Lord as Paramātmā within the heart, the same applies. Such a yogī turns into a pure devotee and cannot bear to live for a moment without seeing the Lord " +
    "within himself."            
          },
        {
            verse: 3,
            sanskrit: "बहिरन्तश्च भूतानामचरं चरमेव च ।\n" +
          "सूक्ष्मत्वात्तदविज्ञेयं दूरस्थं चान्तिके च तत् ॥ १६ ॥",
            english: "bahir antaś ca bhūtānām\n" +
          "acaraṁ caram eva ca\n" +
          "sūkṣmatvāt tad avijñeyaṁ\n" +
          "dūra-sthaṁ cāntike ca tat",
            translation: "The Supreme Truth exists outside and inside of all living beings, the moving and the nonmoving. Because He is subtle, He is beyond the power of the material senses to see or to know. Although far, far away, He is also near to all.",
            purport: "In Vedic literature we understand that Nārāyaṇa, the Supreme Person, is residing both outside and inside of every living entity. He is present in both the spiritual and material worlds. Although He is far, far away, still He is near to us. These are the statements of Vedic literature. Āsīno dūraṁ vrajati śayāno yāti sarvataḥ (Kaṭha Upaniṣad 1.2.21). And because He is always engaged in transcendental bliss, we cannot understand how He is enjoying His full opulence. We cannot see or understand with these material senses. Therefore in the Vedic language it is said that to understand Him our material mind and senses cannot act. But one who has purified his mind and senses by practicing Kṛṣṇa consciousness in devotional service can see Him constantly. It is confirmed in Brahma-saṁhitā that the devotee who has developed love for the Supreme God can see Him always, without cessation. And it is confirmed in Bhagavad-gītā (11.54) that He can be seen and understood only by devotional service. Bhaktyā tv ananyayā śakyaḥ."            
          },
        {
            verse: 4,
            sanskrit: "ज्योतिषामपि तज्ज्योतिस्तमस: परमुच्यते ।\n" +
          "ज्ञानं ज्ञेयं ज्ञानगम्यं हृदि सर्वस्य विष्ठितम् ॥ १८ ॥",
            english: "jyotiṣām api taj jyotis\n" +
          "tamasaḥ param ucyate\n" +
          "jñānaṁ jñeyaṁ jñāna-gamyaṁ\n" +
          "hṛdi sarvasya viṣṭhitam",
            translation: "He is the source of light in all luminous objects. He is beyond the darkness of matter and is unmanifested. He is knowledge, He is the object of knowledge, and He is the goal of knowledge. He is situated in everyone’s heart.",
            purport: "The Supersoul, the Supreme Personality of Godhead, is the source of light in all luminous objects like the sun, moon and stars. In the Vedic literature we " +
    "find that in the spiritual kingdom there is no need of sun or moon, because the effulgence of the Supreme Lord is there. In the material world that brahma-jyotir, " +
    "the Lord’s spiritual effulgence, is covered by the mahat-tattva, the material elements; therefore in this material world we require the assistance of sun, moon, " +
    "electricity, etc., for light. But in the spiritual world there is no need of such things. It is clearly stated in the Vedic literature that because of His luminous " +
    "effulgence, everything is illuminated. It is clear, therefore, that His situation is not in the material world. He is situated in the spiritual world, which is far, far " +
    "away in the spiritual sky. That is also confirmed in the Vedic literature. Āditya-varṇaṁ tamasaḥ parastāt (Śvetāśvatara Upaniṣad 3.8). He is just like the sun, " +
    "eternally luminous, but He is far, far beyond the darkness of this material world.\n\n" +

    "His knowledge is transcendental. The Vedic literature confirms that Brahman is concentrated transcendental knowledge. To one who is anxious to be transferred to that " +
    "spiritual world, knowledge is given by the Supreme Lord, who is situated in everyone’s heart. One Vedic mantra (Śvetāśvatara Upaniṣad 6.18) says, taṁ ha devam ātma-buddhi-prakāśaṁ " +
    "mumukṣur vai śaraṇam ahaṁ prapadye. One must surrender unto the Supreme Personality of Godhead if he at all wants liberation. As far as the goal of ultimate knowledge is concerned, " +
    "it is also confirmed in Vedic literature: tam eva viditvāti mṛtyum eti. “Only by knowing Him can one surpass the boundary of birth and death.” (Śvetāśvatara Upaniṣad 3.8)\n\n" +

    "He is situated in everyone’s heart as the supreme controller. The Supreme has legs and hands distributed everywhere, and this cannot be said of the individual soul. Therefore that " +
    "there are two knowers of the field of activity – the individual soul and the Supersoul – must be admitted. One’s hands and legs are distributed locally, but Kṛṣṇa’s hands and legs are distributed " +
    "everywhere. This is confirmed in the Śvetāśvatara Upaniṣad (3.17): sarvasya prabhum īśānaṁ sarvasya śaraṇaṁ bṛhat. That Supreme Personality of Godhead, Supersoul, is the prabhu, or master, of all living entities; " +
    "therefore He is the ultimate shelter of all living entities. So there is no denying the fact that the Supreme Supersoul and the individual soul are always different."            
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