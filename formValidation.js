document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('surveyForm');

    form.addEventListener('submit', function(event) {
        // Lấy tất cả các trường input trong form
        const inputs = form.querySelectorAll('input, select, textarea');
        let allFilled = true;

        // Kiểm tra từng trường
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                allFilled = false;
            }
        });

        if (!allFilled) {
            // Ngăn việc gửi form nếu không tất cả các trường đã được điền
            event.preventDefault();
            alert('Vui lòng điền đầy đủ thông tin trước khi gửi.');
        }
    });
});
