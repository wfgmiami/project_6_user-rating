<?php
$target = "http://www.webbotsspidersscreenscrapers.com/hello_world.html";
$file_handle = fopen($target, "r");

while(!feof($file_handle))
  echo fgets($file_handle, 4096);
fclose($file_handle);
?>
