<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Validate data
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(['success' => false, 'error' => 'All fields are required.']);
        exit;
    }

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'error' => 'Invalid email format.']);
        exit;
    }

    // Save to JSON file
    $data = [
        'name' => $name,
        'email' => $email,
        'message' => $message,
        'timestamp' => date('Y-m-d H:i:s'),
        'ip' => $_SERVER['REMOTE_ADDR']
    ];

    $file = 'data/contact-data.json';
    
    // Create directory if it doesn't exist
    if (!file_exists('data')) {
        mkdir('data', 0777, true);
    }

    if (file_exists($file)) {
        $currentData = json_decode(file_get_contents($file), true);
        $currentData[] = $data;
    } else {
        $currentData = [$data];
    }

    if (!file_put_contents($file, json_encode($currentData, JSON_PRETTY_PRINT))) {
        echo json_encode(['success' => false, 'error' => 'Failed to save data.']);
        exit;
    }

    // Send email
    $to = 'designmania.org@gmail.com'; // Client's email
    $subject = "New Contact Form Submission from $name";
    $headers = "From: consult.grace.in@gmail.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    $emailMessage = "You have received a new message from your website:\n\n";
    $emailMessage .= "Name: $name\n";
    $emailMessage .= "Email: $email\n";
    $emailMessage .= "Message:\n$message\n\n";
    $emailMessage .= "Timestamp: " . date('Y-m-d H:i:s') . "\n";
    $emailMessage .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";

    if (!mail($to, $subject, $emailMessage, $headers)) {
        echo json_encode(['success' => false, 'error' => 'Failed to send email.']);
        exit;
    }

    // Send confirmation to user
    $userSubject = "Thank you for contacting Er. Vr. Alex Thomas";
    $userMessage = "Dear $name,\n\n";
    $userMessage .= "Thank you for contacting Er. Vr. Alex Thomas. We have received your message and will get back to you shortly.\n\n";
    $userMessage .= "Best regards,\nGrace Consultant Team";
    
    mail($email, $userSubject, $userMessage, $headers);

    // Respond with success
    echo json_encode(['success' => true, 'message' => 'Thank you for your message. We will get back to you soon.']);
    exit;
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request method.']);
    exit;
}
?>