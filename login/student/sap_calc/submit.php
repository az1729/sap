<?php
// Connect to MySQL database
$servername = "localhost";
$username = "root";
$password = "Giri@1729.S!";
$dbname = "sap";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $student_id = 25; // Change to the desired student ID
    $student_name = "Giri S"; // Change to the desired student name

    // Get the event type
    $event_type = ""; // Initialize event type variable
    foreach ($_POST as $key => $value) {
        if ($value != "" && $key != "proof") {
            $event_type = $key;
            break;
        }
    }

    // Get the points
    $points = intval($_POST[$event_type]);

    // Get the proof image name
    $proof_image = $_FILES["proof"]["name"];

    // Move uploaded file to desired location
    $upload_directory ="./uploads";
    $target_file = $upload_directory . basename($_FILES["proof"]["name"]);
    if (move_uploaded_file($_FILES["proof"]["tmp_name"], $target_file)) {
        echo "File uploaded successfully.";
    } else {
        echo "Error uploading file.";
    }

    // Insert data into the database
    $sql = "INSERT INTO activity_points (student_id, student_name, event_type, points, proof_image)
            VALUES ('$student_id', '$student_name', '$event_type', '$points', '$proof_image')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close MySQL connection
$conn->close();
?>
