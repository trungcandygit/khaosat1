// Function to save answers to a file
function saveAnswers() {
    // Get the table body element
    const tableBody = document.querySelector('#questionsTable tbody');

    // Collect the questions and answers
    let content = '';
    tableBody.querySelectorAll('tr').forEach(row => {
        const question = row.cells[0].innerText;
        const answer = row.cells[1].innerText;
        content += `${question}\n${answer}\n\n`;
    });

    // Create a Blob from the content
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create a link element and set it to download the Blob
    const a = document.createElement('a');
    a.href = url;
    a.download = 'answers.txt';

    // Append the link to the document and trigger the download
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Attach the function to the button click event
document.getElementById('saveButton').addEventListener('click', saveAnswers);
