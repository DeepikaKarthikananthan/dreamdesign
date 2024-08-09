<?php
$cname = $_POST['cname'];
$cemail = $_POST['cemail'];
$rating = $_POST['rating'];
$reviewdet = $_POST['reviewdet'];

// Database connection
$conn = new mysqli('localhost', 'root', 'root123', 'review');
if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed: " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("UPDATE review_val SET cname=?, rating=?, reviewdet=? WHERE cemail=?");
    $stmt->bind_param("siss", $cname, $rating, $reviewdet, $cemail);
    $execval = $stmt->execute();

    if ($execval === false) {
        echo "Error updating record: " . $stmt->error;
    } else {
        $stmt->close();
        $conn->close();
        // Echo response message for AJAX
        echo "Record updated successfully";
    }
}
?>
