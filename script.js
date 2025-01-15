document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = username.includes('teacher') ? 'teacher' : 'student';

    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('userRole').textContent = role;
    document.getElementById(role + 'Panel').style.display = 'block';
};

function manageSlot(action) {
    const slotTime = new Date(document.getElementById('slotTime').value);
    const currentTime = new Date();

    if ((slotTime - currentTime) < 3600000) {
        alert('You cannot modify a class less than 1 hour before the schedule.');
        return;
    }
    alert(`Slot ${action}ed successfully.`);
}

function bookClass() {
    const bookingTime = new Date(document.getElementById('bookingTime').value);
    const currentTime = new Date();

    if ((bookingTime - currentTime) < 3600000) {
        alert('You cannot book a class less than 1 hour before the schedule.');
        return;
    }
    alert('Class booked successfully.');
}

function showSignUpForm(role) {
    if (role === 'teacher') {
        document.getElementById('signUpTeacherForm').style.display = 'block';
        document.getElementById('signUpStudentForm').style.display = 'none';
    } else if (role === 'student') {
        document.getElementById('signUpTeacherForm').style.display = 'none';
        document.getElementById('signUpStudentForm').style.display = 'block';
    }
}

