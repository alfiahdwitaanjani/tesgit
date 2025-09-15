<?php
include "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $title = trim($_POST['title'] ?? '');
    $content = trim($_POST['content'] ?? '');
    $word_count = intval($_POST['word_count'] ?? 0);

    if ($title === '' || $content === '') {
        echo "Judul dan isi artikel tidak boleh kosong.";
        exit;
    }

    try {
        $sql = "INSERT INTO articles (title, content, created_at) 
                VALUES (:title, :content, NOW())";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ':title' => $title,
            ':content' => $content
        ]);
        echo "Artikel berhasil disimpan ke database!";
    } catch (PDOException $e) {
        echo "Gagal menyimpan artikel: " . $e->getMessage();
    }
} else {
    echo "Metode request tidak valid.";
}
