<?php
require_once 'Model.php';

class contactscontroller {
    private $model;

    public function __construct() {
        $this->model = new Model();
    }

    public function add() {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
            $name = htmlspecialchars($_POST['name']);
            $comment = htmlspecialchars($_POST['comment']);
            $ipAddress = $_SERVER['REMOTE_ADDR'];

            if (filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($name) && !empty($comment)) {
                $this->model->saveContact($email, $name, $comment, $ipAddress);
                echo "Mensaje enviado con éxito.";
            } else {
                echo "Datos invalidos.";
            }
        }
    }

    public function index() {
        $contacts = $this->model->getContacts();
        include '/formularios/contacts_view.php'; 
    }
}
?>
