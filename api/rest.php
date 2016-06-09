<?php

/**
 * Simple rest service
 */
error_reporting(E_ALL);
ini_set("display_errors", 1);


$datafile = __DIR__ . '/' . SOURCE . '.json';
$content = file_get_contents($datafile);

$data = json_decode($content, true);
$temp = file_get_contents('php://input');
$obj = json_decode($temp, true);
$id = (int) preg_replace('|^.*?/(\d+)$|', '$1', $_SERVER['REQUEST_URI']);

if($_SERVER['REQUEST_METHOD'] === 'GET') {

}
elseif($_SERVER['REQUEST_METHOD'] === 'POST') {

    do {
        $id = rand(1, 999);
        $temp = array_filter($data['data']['items'], function($e) use ($id) {
            return $e['id'] === $id;
        });
    } while (count($temp) > 0);

    $obj['id'] = $id;

    array_unshift($data['data']['items'], $obj);
}
elseif($_SERVER['REQUEST_METHOD'] === 'PUT') {

    $data['data']['items'] = array_map(function($e) use ($id, $obj) {
        return $id === $e['id'] ? $obj : $e;
    }, $data['data']['items']);
}
elseif($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    $temp = array_filter($data['data']['items'], function($e) use($id) {
        return $e['id'] != $id;
    });

    $data['data']['items'] = array_values($temp);
}

file_put_contents($datafile, json_encode($data, 128));
$content = file_get_contents($datafile);

header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.
header('Content-Type:application/json');
echo $content;
exit;
