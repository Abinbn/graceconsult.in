<?php
header('Content-Type: application/json');

// Configuration
$DATA_DIR = 'data/';
$JSON_FILE = $DATA_DIR . 'contact_submissions.json';

// Create data directory if it doesn't exist
if (!file_exists($DATA_DIR)) {
    mkdir($DATA_DIR, 0777, true);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Collect and sanitize form data
        $submission = [
            'id' => uniqid(),
            'timestamp' => date('Y-m-d H:i:s'),
            'name' => filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING),
            'email' => filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL),
            'phone' => filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING),
            'subject' => filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING),
            'message' => filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING),
            'status' => 'new'
        ];

        // Validate required fields
        if (empty($submission['name']) || empty($submission['email']) || empty($submission['message'])) {
            throw new Exception('Please fill in all required fields.');
        }

        // Validate email
        if (!filter_var($submission['email'], FILTER_VALIDATE_EMAIL)) {
            throw new Exception('Please enter a valid email address.');
        }

        // Load existing submissions
        $submissions = [];
        if (file_exists($JSON_FILE)) {
            $fileContent = file_get_contents($JSON_FILE);
            if ($fileContent !== false) {
                $submissions = json_decode($fileContent, true) ?? [];
            }
        }

        // Add new submission
        array_unshift($submissions, $submission); // Add new submission at the beginning

        // Save to JSON file
        if (file_put_contents($JSON_FILE, json_encode($submissions, JSON_PRETTY_PRINT))) {
            // Send email notification
            $to = "alexthomasc77@gmail.com"; // Replace with actual email
            $subject = "New Contact Form Submission - Grace Consultant";
            $emailBody = "New submission received:\n\n";
            $emailBody .= "Name: " . $submission['name'] . "\n";
            $emailBody .= "Email: " . $submission['email'] . "\n";
            $emailBody .= "Phone: " . $submission['phone'] . "\n";
            $emailBody .= "Subject: " . $submission['subject'] . "\n";
            $emailBody .= "Message: " . $submission['message'] . "\n";
            
            $headers = "From: noreply@graceconsult.in\r\n";
            $headers .= "Reply-To: " . $submission['email'] . "\r\n";
            
            mail($to, $subject, $emailBody, $headers);

            echo json_encode([
                'success' => true,
                'message' => 'Thank you for your message. We will get back to you soon.'
            ]);
        } else {
            throw new Exception('Failed to save submission.');
        }
    } catch (Exception $e) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error' => $e->getMessage()
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'error' => 'Method not allowed'
    ]);
}
?>