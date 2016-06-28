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
    $obj['createdAt'] = date('Y-m-d H:i:s');
    $obj['updatedAt'] = $obj['createdAt'];

    array_unshift($data['data']['items'], $obj);
}
elseif($_SERVER['REQUEST_METHOD'] === 'PUT') {

    // header_status(500);

    $obj['updatedAt'] = date('Y-m-d H:i:s');

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

$now = date('Y-m-d H:i:s');
$data['datetime'] = $now;

if($_SERVER['REQUEST_METHOD'] !== 'GET') {
    $newcontent = json_encode($data, 128);

    file_put_contents($datafile, $newcontent, LOCK_EX);

    $content = <<<OK
{
    "success": true,
    "type": "info",
    "datetime": "$now",
    "msg": "OK",
    "data": {}
}
OK;

}
else {
    $content = `cat $datafile`;
}


function header_status($statusCode) {
    static $status_codes = null;

    if ($status_codes === null) {
        $status_codes = array (
            100 => 'Continue',
            101 => 'Switching Protocols',
            102 => 'Processing',
            200 => 'OK',
            201 => 'Created',
            202 => 'Accepted',
            203 => 'Non-Authoritative Information',
            204 => 'No Content',
            205 => 'Reset Content',
            206 => 'Partial Content',
            207 => 'Multi-Status',
            300 => 'Multiple Choices',
            301 => 'Moved Permanently',
            302 => 'Found',
            303 => 'See Other',
            304 => 'Not Modified',
            305 => 'Use Proxy',
            307 => 'Temporary Redirect',
            400 => 'Bad Request',
            401 => 'Unauthorized',
            402 => 'Payment Required',
            403 => 'Forbidden',
            404 => 'Not Found',
            405 => 'Method Not Allowed',
            406 => 'Not Acceptable',
            407 => 'Proxy Authentication Required',
            408 => 'Request Timeout',
            409 => 'Conflict',
            410 => 'Gone',
            411 => 'Length Required',
            412 => 'Precondition Failed',
            413 => 'Request Entity Too Large',
            414 => 'Request-URI Too Long',
            415 => 'Unsupported Media Type',
            416 => 'Requested Range Not Satisfiable',
            417 => 'Expectation Failed',
            422 => 'Unprocessable Entity',
            423 => 'Locked',
            424 => 'Failed Dependency',
            426 => 'Upgrade Required',
            500 => 'Internal Server Error',
            501 => 'Not Implemented',
            502 => 'Bad Gateway',
            503 => 'Service Unavailable',
            504 => 'Gateway Timeout',
            505 => 'HTTP Version Not Supported',
            506 => 'Variant Also Negotiates',
            507 => 'Insufficient Storage',
            509 => 'Bandwidth Limit Exceeded',
            510 => 'Not Extended'
        );
    }

    if ($status_codes[$statusCode] !== null) {
        $status_string = $statusCode . ' ' . $status_codes[$statusCode];
        header($_SERVER['SERVER_PROTOCOL'] . ' ' . $status_string, true, $statusCode);
    }
}

header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.
header('Content-Type:application/json');
echo $content;
exit;
