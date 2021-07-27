<?php
require('../vendor/autoload.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1.0, width=device-width">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>Bungo Helper</title>
</head>
<body>
    <header>
        <div id="Logo">
            <span>Bungo Helper</span><br>
            <span style="font-size: .5em;">Denn Tabellen sind für Looser</span>
        </div>
        <input id="search" type="text>" placeholder="Search"></input><br>
    </header>
    <div id="partikel">
        <div v-for="entity in data">
            <div v-bind:id="entity.entry" class="card">
                <div class="card-top-bar">
                    <span class="top-bar-first-three">{{ topBar.identifier }}</span>
                    <span class="top-bar-first-three">{{ topBar.anschluss }}</span>
                    <span class="top-bar-last">{{ topBar.bedeutung }}</span>
                </div>
                <div class="card-content-bar">
                    <div class="content-bar-first-three first-item">{{ entity.entry }}</div>
                    <div class="content-bar-first-three second-item">
                        <span v-for="anschluss in entity.obj.Anschluss">
                            {{ anschluss }}<br>
                        </span>
                    </div>
                    <div class="content-bar-last">
                        <div v-for="meaning in entity.meanings">
                            <span class="">
                                {{ meaning.anschluss }}
                            </span>
                            <span class="">
                                <div v-for="bedeutung in meaning.meaningList">
                                    <span v-for="line in bedeutung">
                                        {{ line }};　
                                    </span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="verbalsuffixe">
        <div v-for="entity in data">
            <div v-bind:id="entity.entry" class="card">
                <div class="card-top-bar">
                    <span class="top-bar-first-three">{{ topBar.identifier }}</span>
                    <span class="top-bar-first-three">{{ topBar.anschluss }}</span>
                    <span class="top-bar-first-three">{{ topBar.flexion }}</span>
                    <span class="top-bar-last">{{ topBar.bedeutung }}</span>
                </div>
                <div class="card-content-bar">
                    <div class="content-bar-first-three first-item">{{ entity.entry }}</div>
                    <div class="content-bar-first-three second-item">
                        <span> {{ entity.category }} </span>
                    </div>
                    <div class="content-bar-first-three">
                        <div class="katsuyou-container" v-for="katsuyou in entity.katsuyou">
                            <span class="katsuyou-form"> {{ katsuyou.Form }} </span><br>
                            <span v-bind:id="katsuyou.Lesung" class="katsuyou-lesung"> {{ katsuyou.Lesung }} </span><br>
                        </div>
                    </div>
                    <div class="content-bar-last">
                        <div v-for="meaning in entity.obj.Bedeutung">
                            <span v-for="bedeutung in meaning">
                                {{ bedeutung }};　  
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="vokabeln">
        <div v-for="entity in data">
            <div v-bind:id="entity.entry" class="card">
                <div class="card-top-bar">
                    <span class="top-bar-first-three">{{ topBar.identifier }}</span>
                    <span class="top-bar-first-three">{{ topBar.anschluss }}</span>
                    <span class="top-bar-first-three">{{ topBar.flexion }}</span>
                    <span class="top-bar-last">{{ topBar.bedeutung }}</span>
                </div>
                <div class="card-content-bar">
                    <div class="content-bar-first-three first-item">{{ entity.entry }}</div>
                    <div class="content-bar-first-three second-item">
                        <span v-for="kanji in entity.obj.Variationen"> 
                            <span v-bind:id="kanji" class="variation">{{ kanji }}</span><br>
                        </span>
                    </div>
                    <div class="content-bar-first-three">
                        <span> {{ entity.obj.Flexion }} </span>
                    </div>
                    <div class="content-bar-last">
                        <span> {{ entity.obj.Bedeutung }}</span>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous">
    </script>
    <script src="https://unpkg.com/vue@3.0.10"></script>
    <script src="dist/main.js"></script>
</body>
</html>