<?php
require_once 'Model.php';

class PaymentsController {
    private $model;

    public function __construct() {
        $this->model = new Model();
    }

    public function add() {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            echo "Pago realizado";
        }
    }
}
?>
