//load the DOM and fetch data from JSON file
document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then   (response => {
            if (!response.ok) {
                throw new Error('Network response was not ok'); 
            }
            return response.json();
    })
    .then   (data => populateTable(data))
    .catch  (error => console.error('There has been a problem with your fetch operation:', error));
});

// populate the table with data
function populateTable(data) {
    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.title}</td>
            <td>${item.type}</td>
            <td>${item.createdAt}</td>
            <td>${item.createdBy}</td>
            <td>
            <button class = "edit" title = "Edit"><i class="fas fa-edit"></i></button>
            <button class = "view" title
            <button class = "delete" title = "Delete"><i class="fas fa-trash-alt"></i></button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}