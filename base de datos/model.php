<?php
class Model {
    protected $db;

    public function __construct() {
        $this->db = new PDO('sqlite:database.db');
        $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    public function saveContact($email, $name, $comment, $ipAddress) {
        $stmt = $this->db->prepare("INSERT INTO contacts (email, name, comment, ip_address, created_at) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$email, $name, $comment, $ipAddress, date('Y-m-d H:i:s')]);
    }

    public function getContacts() {
        $stmt = $this->db->query("SELECT * FROM contacts");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function savePayment($email, $cardHolderName, $cardNumber, $expirationMonth, $expirationYear, $cvv, $amount, $currency) {
        $stmt = $this->db->prepare("INSERT INTO payments (email, card_holder_name, card_number, expiration_month, expiration_year, cvv, amount, currency, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$email, $cardHolderName, $cardNumber, $expirationMonth, $expirationYear, $cvv, $amount, $currency, date('Y-m-d H:i:s')]);
    }
}
?>
