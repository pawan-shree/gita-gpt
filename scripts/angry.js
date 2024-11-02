// /scripts/angry.js
function fetchData(id) {
    fetch(`/api/fetchData?table=${currentTable}&id=${id}`)
        .then(response => response.json())
        .then(data => {
            if (Object.keys(data).length === 0) {
                console.error('No data found for this ID.');
                return;
            }
            document.getElementById('verse').textContent = data.id;
            document.getElementById('sanskrit').textContent = data.Sanskrit;
            document.getElementById('english').textContent = data.English;
            document.getElementById('translation').textContent = data.Translation;
            document.getElementById('purport').textContent = data.Purport;
        })
        .catch(error => console.error('Error fetching data:', error));
}

function fetchMaxId() {
    fetch(`/api/maxId?table=${currentTable}`)
        .then(response => response.json())
        .then(data => {
            maxId = data.maxId;
        })
        .catch(error => console.error('Error fetching max ID:', error));
}
