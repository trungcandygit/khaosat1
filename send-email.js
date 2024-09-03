// Function to prepare and send answers via email
function sendAnswersByEmail() {
    // Get the table body element
    const tableBody = document.querySelector('#questionsTable tbody');

    // Collect the questions and answers
    let content = '';
    tableBody.querySelectorAll('tr').forEach(row => {
        const question = row.cells[0].innerText;
        const answer = row.cells[1].innerText;
        content += `${question}%0A${answer}%0A%0A`; // Use %0A for line breaks
    });

    // Create the mailto link
    const email = 'trungxcpro@gmail.com';
    const subject = 'Câu trả lời từ trang web';
    const body = `Dưới đây là câu hỏi và câu trả lời:%0A%0A${content}`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open the default mail client with the prepared email
    window.location.href = mailtoLink;
}

// Attach the function to the button click event
document.getElementById('emailButton').addEventListener('click', sendAnswersByEmail);
