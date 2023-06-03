<?php
// Get the form fields
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Email recipient
$to = 'benabbesy41@gmail.com';

// Email headers
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";
$headers .= "X-Priority: 1\r\n";

// Email subject and body
$email_subject = "Contact Form: $subject";
$email_body = "You have received a new message from the contact form:\r\n\r\n";
$email_body .= "Name: $name\r\n";
$email_body .= "Email: $email\r\n";
$email_body .= "Subject: $subject\r\n";
$email_body .= "Message:\r\n$message\r\n";

// Send the email
if (mail($to, $email_subject, $email_body, $headers)) {
    // Email sent successfully
    echo json_encode(['success' => true, 'message' => 'Email sent successfully.']);
} else {
    // Failed to send email
    echo json_encode(['success' => false, 'message' => 'Failed to send email.']);
}
?>
