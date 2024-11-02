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

let currentId = 1; // Start with ID 1
let maxId = 1; // To hold the maximum ID
let currentTable = 'angry'; // Default table

function fetchData(id) {
    fetch(`http://localhost:3000/api/${currentTable}/data/${id}`)
        .then(response => response.json())
        .then(data => {
            if (Object.keys(data).length === 0) {
                console.error('No data found for this ID.');
                return; // Optionally handle no data found
            }
            // Display the data in the respective divs
            document.getElementById('verse').textContent = data.id;
            document.getElementById('sanskrit').textContent = data.Sanskrit;
            document.getElementById('english').textContent = data.English;
            document.getElementById('translation').textContent = data.Translation;
            document.getElementById('purport').textContent = data.Purport;
        })
        .catch(error => console.error('Error fetching data:', error));
}

function fetchMaxId() {
    fetch(`http://localhost:3000/api/${currentTable}/max-id`)
        .then(response => response.json())
        .then(data => {
            maxId = data.maxId; // Set maxId from response
        })
        .catch(error => console.error('Error fetching max ID:', error));
}

// Initial fetch for max ID and ID 1
fetchMaxId();
fetchData(currentId);

// Next button event listener
document.getElementById('next').addEventListener('click', () => {
    currentId++;
    if (currentId > maxId) {
        currentId = 1; // Loop to first ID
    }
    fetchData(currentId);
});

// Previous button event listener
document.getElementById('prev').addEventListener('click', () => {
    currentId--;
    if (currentId < 1) {
        currentId = maxId; // Loop to last ID
    }
    fetchData(currentId);
});

// Table change event listener
document.getElementById('tableDropdown').addEventListener('change', (event) => {
    currentTable = event.target.value; // Update current table based on selection
    currentId = 1; // Reset to the first ID for the new table
    fetchMaxId(); // Fetch the new max ID for the selected table
    fetchData(currentId); // Fetch data for the first ID of the new table
});