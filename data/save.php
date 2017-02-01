<?php

$data = $_POST["data"];

file_put_contents("data.json", $data);
