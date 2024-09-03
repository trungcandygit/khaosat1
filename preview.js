document.addEventListener('DOMContentLoaded', function() {
    const questionsAndAnswers = JSON.parse(sessionStorage.getItem('questionsAndAnswers')) || [];
    console.log(questionsAndAnswers); // Kiểm tra dữ liệu

    const tableBody = document.querySelector('#questionsTable tbody');

    if (questionsAndAnswers.length > 0) {
        questionsAndAnswers.forEach(item => {
            const row = document.createElement('tr');

            const questionCell = document.createElement('td');
            questionCell.textContent = item.question;
            row.appendChild(questionCell);

            const answerCell = document.createElement('td');
            answerCell.textContent = item.answer;
            row.appendChild(answerCell);

            tableBody.appendChild(row);
        });
    } else {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 2;
        cell.textContent = 'Không có dữ liệu để hiển thị.';
        row.appendChild(cell);
        tableBody.appendChild(row);
    }
});
