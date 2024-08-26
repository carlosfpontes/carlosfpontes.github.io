<?php

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

if (!file_exists('screenshots/')){mkdir('screenshots', 0755, true);};
define('UPLOAD_DIR', 'screenshots/');
$img = $_POST['imgBase64'];
$img = str_replace('data:image/jpeg;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$base64 = base64_decode($img);

// $stamp = false;
if($_POST['watermark'] === "true") {
   $stamp = imagecreatefrompng('favicon.png');
} else {
  $stamp = false;
}

$im = imagecreatefromstring($base64);

if ($im !== false) {
    header('Content-Type: image/jpeg');

    if ($stamp) {
      $marge_right = 0;
      $marge_bottom = 0;
      $sx = (imagesx($im) * 4) / 10;
      $sy = $sx / (imagesx($stamp) / imagesy($stamp));



$watermark_width = imagesx($stamp);
$watermark_height = imagesy($stamp);

// this is an example to resized your watermark to 0.5% from their original size.
// You can change this with your specific new sizes.
$newwidth = $sx;
$newheight = $sy;

// create a new image with the new dimension.
$new_watermark = imagecreatetruecolor($newwidth, $newheight);

// Retain image transparency for your watermark, if any.
imagealphablending($new_watermark, false);
imagesavealpha($new_watermark, true);

// copy $watermark, and resized, into $new_watermark
// change to `imagecopyresampled` for better quality
imagecopyresized($new_watermark, $stamp, 0, 0, 0, 0, $newwidth, $newheight, $watermark_width, $watermark_height);




      imagealphablending($new_watermark,false);
      imagesavealpha($new_watermark,true);

      imagecopy($im, $new_watermark, imagesx($im) - $sx - $marge_right, imagesy($im) - $sy - $marge_bottom, 0, 0, $sx, $sy);

    }


    $file = UPLOAD_DIR . uniqid() . '.jpg';
    $success =  imagejpeg($im, $file, 75);
    imagedestroy($im);
    echo $file;
}
?>
