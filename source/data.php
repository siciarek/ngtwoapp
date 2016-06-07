<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

$datafile = __DIR__ . '/data.json';
$content = file_get_contents($datafile);

if($_SERVER['REQUEST_METHOD'] == 'POST') {

    $temp = file_get_contents('php://input');
    $obj = json_decode($temp);

    $obj->id = rand(1000, 9999);

    $data = json_decode($content, true);
    $data['data']['items'][] = $obj;

    file_put_contents($datafile, json_encode($data, 128));
    $content = file_get_contents($datafile);
}

header('Content-Type:application/json');
echo $content;
exit;
