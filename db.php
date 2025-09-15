<?php
$host = "localhost";
$port = "5432";
$dbname = "article";   // nama database sesuai di pgAdmin
$user = "postgres";    // username PostgreSQL
$password = "123456";  // password PostgreSQL

try {
    $conn = new PDO("pgsql:host=$host;port=$port;dbname=$dbname", $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    file_put_contents(
        __DIR__ . '/db_connection_error.log',
        '[' . date('Y-m-d H:i:s') . '] ' . $e->getMessage() . PHP_EOL,
        FILE_APPEND
    );
    die('Koneksi gagal (cek db_connection_error.log)');
}
