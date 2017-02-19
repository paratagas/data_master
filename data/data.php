<?php

/**
 * old backend logic
 * 
 * @author Yauheni Svirydzenka <partagas@mail.ru>
 * @version 0.0.1
 * @copyright Yauheni Svirydzenka 2017
 */

$dataFromFile = json_decode(file_get_contents("data.json"));

echo json_encode($dataFromFile);

/*$example_json_data = array(
  array (title => "My Fair Lady", year => 1964, votes => 533848, rating => 8.9, rank => 5),
  array (title => "Film 1", year => 1984, votes => 933848, rating => 6.9, rank => 4),
  array (title => "Film 2", year => 1966, votes => 53848, rating => 4.3, rank => 5),
  array (title => "Film 3", year => 1975, votes => 567848, rating => 2.9, rank => 2),
  array (title => "Film 4", year => 1981, votes => 433788, rating => 6.3, rank => 1)
);*/

//echo json_encode($example_json_data);
