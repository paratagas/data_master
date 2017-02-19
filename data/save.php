<?php

/**
 * old backend logic
 * 
 * @author Yauheni Svirydzenka <partagas@mail.ru>
 * @version 0.0.1
 * @copyright Yauheni Svirydzenka 2017
 */

$data = $_POST["data"];

file_put_contents("data.json", $data);
