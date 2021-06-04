<?php
$data["partikelJSON"] = file_get_contents("../data/Partikel.json");
$data["verbalsuffixeJSON"] = file_get_contents("../data/Verbalsuffixe.json");
$data["vokabelnJSON"] = file_get_contents("../data/Vokabeln.json");
$data["legendeJSON"] = file_get_contents("../data/Legende.json");

$data["partikel"] = json_decode($data["partikelJSON"], true);
$data["verbalsuffixe"] = json_decode($data["partikelJSON"], true);
$data["vokabeln"] = json_decode($data["partikelJSON"], true);
$data["legende"] = json_decode($data["partikelJSON"], true);

$which = $_GET["data"];
if(!isset($_GET["cond"]))
{
    $index = $which . "JSON";
    if(isset($data[$index]))
        echo $data[$index];
    else
        echo "{ \"error\": \"bad request; '". $which ."' is not an acceptable parameter. \"}";
}

?>