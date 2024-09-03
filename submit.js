function validateForm() {
    // Lấy các giá trị từ form
    var form = document.forms["surveyForm"];
    var fields = [
        {name: "q1", min: 1, max: 5, type: "number"},
        {name: "q2", min: 0, max: 100, type: "number"},
        {name: "q3", min: 0, type: "number"},
        {name: "q4", min: 0, max: 100, type: "number"},
        {name: "q5", min: 0, type: "number"},
        {name: "q6", min: 0, max: 100, type: "number"},
        {name: "q7", min: 0, max: 100, type: "number"},
        {name: "q8", min: 0, max: 100, type: "number"},
        {name: "q9", min: 0, type: "number"},
        {name: "q10", min: 0, max: 100, type: "number"},
        {name: "q11", min: 0, max: 100, type: "number"},
        {name: "q12", min: 0, max: 100, type: "number"},
        {name: "q13", min: 0, type: "number"},
        {name: "q14", options: ["Rất đầy đủ", "Đầy đủ", "Khá đầy đủ", "Chưa đầy đủ", "Không đầy đủ"], type: "select"},
        {name: "q15", options: ["Có", "Không"], type: "select"},
        {name: "q16", options: ["Có", "Không"], type: "select"},
        {name: "q17", options: ["Rất cần thiết", "Cần thiết", "Khá cần thiết", "Ít cần thiết", "Không cần thiết"], type: "select"},
        {name: "q18", min: 1, max: 5, type: "number"},
        {name: "q19", options: ["Hoàn toàn đạt", "Đạt", "Khá đạt", "Chưa đạt", "Không đạt"], type: "select"},
        {name: "q20", options: ["Rất đồng ý", "Đồng ý", "Khá đồng ý", "Không đồng ý", "Rất không đồng ý"], type: "select"}
    ];

    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        var value = form[field.name] ? form[field.name].value : null;

        if (field.type === "number") {
            if (value === null || value === "") {
                alert("Trường " + field.name + " không được để trống.");
                return false;
            }
            if (field.min !== undefined && value < field.min) {
                alert("Trường " + field.name + " phải lớn hơn hoặc bằng " + field.min + ".");
                return false;
            }
            if (field.max !== undefined && value > field.max) {
                alert("Trường " + field.name + " phải nhỏ hơn hoặc bằng " + field.max + ".");
                return false;
            }
        } else if (field.type === "select") {
            if (field.options && !field.options.includes(value)) {
                alert("Trường " + field.name + " phải chọn một trong các giá trị hợp lệ.");
                return false;
            }
        }
    }

    // Nếu tất cả các kiểm tra đều hợp lệ
    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        // Ngăn chặn hành vi gửi form mặc định nếu không hợp lệ
        if (!validateForm()) {
            event.preventDefault();
            return;
        }

        const questionsAndAnswers = [];

        // Lặp qua tất cả các trường input, select, và textarea
        form.querySelectorAll('input, select, textarea').forEach(input => {
            const name = input.name;
            const value = input.value;

            if (name && value) {
                questionsAndAnswers.push({ question: name, answer: value });
            }
        });

        // Lưu dữ liệu vào sessionStorage
        sessionStorage.setItem('questionsAndAnswers', JSON.stringify(questionsAndAnswers));

        // Chuyển hướng đến preview.html
        window.location.href = 'preview.html';
    });
});
