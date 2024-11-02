let currentId = 1; // Start with the first ID

        function fetchData(id) {
            fetch(`../api/angryApi?id=${id}`)
                .then(response => response.json())
                .then(data => {
                    if (data && data.id) {
                        document.getElementById('verse').textContent = data.id;
                        document.getElementById('sanskrit').textContent = data.Sanskrit;
                        document.getElementById('english').textContent = data.English;
                        document.getElementById('translation').textContent = data.Translation;
                        document.getElementById('purport').textContent = data.Purport;
                    } else {
                        document.getElementById('verse').textContent = 'No data found for this ID.';
                        document.getElementById('sanskrit').textContent = '';
                        document.getElementById('english').textContent = '';
                        document.getElementById('translation').textContent = '';
                        document.getElementById('purport').textContent = '';
                    }
                })
                .catch(error => console.error('Error fetching data:', error));
        }

        document.getElementById('next').addEventListener('click', () => {
            // Fetch the maximum ID dynamically here (you need to implement this)
            fetch(`/api/angry/max-id`)
                .then(response => response.json())
                .then(maxData => {
                    const maxId = maxData.maxId || 1; // Fallback to 1 if maxId is not available
                    currentId = (currentId % maxId) + 1; // Loop around
                    fetchData(currentId);
                });
        });

        document.getElementById('prev').addEventListener('click', () => {
            // Fetch the maximum ID dynamically here (you need to implement this)
            fetch(`/api/angry/max-id`)
                .then(response => response.json())
                .then(maxData => {
                    const maxId = maxData.maxId || 1; // Fallback to 1 if maxId is not available
                    currentId = currentId === 1 ? maxId : currentId - 1; // Loop around
                    fetchData(currentId);
                });
        });

        // Initial fetch
        fetchData(currentId);