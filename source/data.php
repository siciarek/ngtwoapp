<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

$datafile = __DIR__ . '/data.json';
$content = file_get_contents($datafile);

$data = json_decode($content, true);

if($_SERVER['REQUEST_METHOD'] == 'DELETE') {

    $id = (int) preg_replace('/^.*?(\d+)$/', '$1', $_SERVER['REQUEST_URI']);

    $data['data']['items'] = array_filter($data['data']['items'], function($e) use($id) {
        return $e['id'] != $id;
    });

    $data['data']['items'] = array_values($data['data']['items']);

    file_put_contents($datafile, json_encode($data, 128));
    $content = file_get_contents($datafile);
}
elseif($_SERVER['REQUEST_METHOD'] == 'POST') {

    $temp = file_get_contents('php://input');
    $obj = json_decode($temp);

    $obj->id = rand(1000, 9999);

    $data['data']['items'][] = $obj;

    file_put_contents($datafile, json_encode($data, 128));
    $content = file_get_contents($datafile);
}

header('Content-Type:application/json');
echo $content;
exit;
