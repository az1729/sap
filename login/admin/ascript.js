document.addEventListener("DOMContentLoaded", function() {
    showSection('add'); // Show the add section by default on page load

    // Add event listeners for navigation links
    document.querySelectorAll('nav ul li a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of the link
            var sectionId = link.getAttribute('href').substring(1); // Get the section id from the href attribute
            showSection(sectionId); // Show the corresponding section
        });
    });
});

function showSection(sectionId) {
    // Check if the section is for add/update or view/delete
    if (sectionId === 'add' || sectionId === 'update') {
        // For add/update section
        document.querySelectorAll('#add, #update').forEach(function(section) {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        });
        // Show add/update buttons
        document.getElementById('addButtons').style.display = 'block';
        document.getElementById('updateButtons').style.display = 'block';
    } else {
        // For view/delete section
        document.querySelectorAll('#view, #delete').forEach(function(section) {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        });
        // Hide add/update buttons
        document.getElementById('addButtons').style.display = 'none';
        document.getElementById('updateButtons').style.display = 'none';
    }
}

function showForm(formId) {
    // Hide all forms
    document.querySelectorAll('div[id^="add"], div[id^="update"]').forEach(function(form) {
        form.style.display = 'none';
    });

    // Show the selected form
    document.getElementById(formId).style.display = 'block';
}

function addAdvisor() {
    // Get form values
    var advisorId = document.getElementById("addAdvisorId").value;
    var advisorName = document.getElementById("addAdvisorName").value;
    var advisorPassword = document.getElementById("addAdvisorPassword").value;

    // Perform validation
    if (!advisorId || !advisorName || !advisorPassword) {
        alert("Please fill in all fields for adding an advisor.");
        return;
    }

    // Perform AJAX request to add advisor to the database
    var data = {
        advisorId: advisorId,
        advisorName: advisorName,
        advisorPassword: advisorPassword
    };
    fetch('http://127.0.0.1:5500/add/advisor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Advisor added successfully:', data);
        alert("Advisor added successfully!");
        // Optionally, perform actions after adding advisor
    })
    .catch(error => {
        console.error('Error adding advisor:', error);
        alert("Error adding advisor. Please try again later.");
    });
}

function addStudent() {
    // Get form values
    var studentId = document.getElementById("addStudentId").value;
    var studentName = document.getElementById("addStudentName").value;
    var studentDepartment = document.getElementById("addStudentDepartment").value;
    var studentYear = document.getElementById("addStudentYear").value;
    var studentSection = document.getElementById("addStudentSection").value;

    // Perform validation
    if (!studentId || !studentName || !studentDepartment || !studentYear || !studentSection) {
        alert("Please fill in all fields for adding a student.");
        return;
    }

    // Perform AJAX request to add student to the database
    var data = {
        studentId: studentId,
        studentName: studentName,
        studentDepartment: studentDepartment,
        studentYear: studentYear,
        studentSection: studentSection
    };

    fetch('http://127.0.0.1:5500/add/student', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Student added successfully:', data);
        alert("Student added successfully!");
        // Optionally, perform actions after adding student
    })
    .catch(error => {
        console.error('Error adding student:', error);
        alert("Error adding student. Please try again later.");
    });
}

function updateAdvisor() {
    // Get form values
    var advisorId = document.getElementById("updateAdvisorId").value;
    var advisorName = document.getElementById("updateAdvisorName").value;
    var advisorPassword = document.getElementById("updateAdvisorPassword").value;

    // Perform validation
    if (!advisorId || !advisorName || !advisorPassword) {
        alert("Please fill in all fields for updating an advisor.");
        return;
    }

    // Perform AJAX request to update advisor in the database
    var data = {
        advisorId: advisorId,
        advisorName: advisorName,
        advisorPassword: advisorPassword
    };

    fetch('http://127.0.0.1:5500/update/advisor', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Advisor updated successfully:', data);
        alert("Advisor updated successfully!");
        // Optionally, perform actions after updating advisor
    })
    .catch(error => {
        console.error('Error updating advisor:', error);
        alert("Error updating advisor. Please try again later.");
    });
}

function updateStudent() {
    // Get form values
    var studentId = document.getElementById("updateStudentId").value;
    var studentName = document.getElementById("updateStudentName").value;
    var studentDepartment = document.getElementById("updateStudentDepartment").value;
    var studentYear = document.getElementById("updateStudentYear").value;
    var studentSection = document.getElementById("updateStudentSection").value;

    // Perform validation
    if (!studentId || !studentName || !studentDepartment || !studentYear || !studentSection) {
        alert("Please fill in all fields for updating a student.");
        return;
    }

    // Perform AJAX request to update student in the database
    var data = {
        studentId: studentId,
        studentName: studentName,
        studentDepartment: studentDepartment,
        studentYear: studentYear,
        studentSection: studentSection
    };

    fetch('http://127.0.0.1:5500/update/student', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Student updated successfully:', data);
        alert("Student updated successfully!");
        // Optionally, perform actions after updating student
    })
    .catch(error => {
        console.error('Error updating student:', error);
        alert("Error updating student. Please try again later.");
    });
}

function viewDetails() {
    // Get form value
    var viewId = document.getElementById("viewId").value;

    // Perform AJAX request to view details from the database
    fetch('http://127.0.0.1:5500/view/' + viewId)
    .then(response => response.json())
    .then(data => {
        console.log('Details retrieved successfully:', data);
        // Display the details as needed
        // Optionally, perform actions after viewing details
    })
    .catch(error => {
        console.error('Error viewing details:', error);
        alert("Error viewing details. Please try again later.");
    });
}

function deleteRecord() {
    // Get form values
    var deleteId = document.getElementById("deleteId").value;
    var deleteSemester = document.getElementById("deleteSemester").value;

    // Perform AJAX request to delete record from the database
    var data = {
        deleteId: deleteId,
        deleteSemester: deleteSemester
    };

    fetch('http://127.0.0.1:5500/delete', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Record deleted successfully:', data);
        alert("Record deleted successfully!");
        // Optionally, perform actions after deleting record
    })
    .catch(error => {
        console.error('Error deleting record:', error);
        alert("Error deleting record. Please try again later.");
    });
}
