<?php
require_once 'contactscontroller.php';
require_once 'paymentscontroller.php';

$uri = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

if ($uri === '/contact/add' && $method === 'POST') {
    $controller = new ContactsController();
    $controller->add();
} elseif ($uri === '/admin/contacts') {
    $controller = new ContactsController();
    $controller->index();
} elseif ($uri === '/payment/add' && $method === 'POST') {
    $controller = new PaymentsController();
    $controller->add();
} else {
    echo "Página no encontrada.";
}
?>
