/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./web/src/main.js":
/*!*************************!*\
  !*** ./web/src/main.js ***!
  \*************************/
/***/ (() => {

eval("function getData(req, f) {\r\n    fetch('./api/fetcher.php?data=' + req)\r\n        .then((response) => {\r\n            return response.json();\r\n        })\r\n        .then((data) => {\r\n            f(data);\r\n        });\r\n}\r\n\r\nfunction entitize(req, f){\r\n    getData(req, (data) => {\r\n        var results = [];\r\n        //iterate over the first layer containing the generaal category with the target object as value, given in entries\r\n        for (const [category, entries] of Object.entries(data)) {\r\n            //iterate over all the entries that are to be displayed as such (さへ、こそ、etc.)\r\n            for (const [entry, obj] of Object.entries(entries)) {\r\n                //entitize based on the partikel.json data model\r\n                if(req === \"partikel\") {\r\n\r\n                    var meanings = [];\r\n                    //get the key for the \"Bedeutung\" subtree\r\n                    for (const [key, val] of Object.entries(obj)) {\r\n                        if(key !== \"Anschluss\" && key !== \"Anmerkung\"){\r\n                            meanings.push({ anschluss: key, meaningList: val.Bedeutung});\r\n                        }\r\n                    }\r\n                    results.push({ entry: entry, category: category, obj: obj, meanings: meanings});\r\n                } else if(req === \"verbalsuffixe\") {\r\n                    //filter out the \"Anmerkungen\" section for the current katsuyou\r\n                    if(entry !== \"Anmerkung\") {\r\n                        var katsuyou = [];\r\n                        //get the key for the \"Formen\" subtree\r\n                        for (const [key, val] of Object.entries(obj.Formen)) {\r\n                            katsuyou.push({ Form: key, Lesung: val});\r\n                        }\r\n                        results.push({ entry: entry, category: category, obj: obj, katsuyou: katsuyou});\r\n                    }\r\n                } else if(req === \"vokabeln\") {\r\n                    //for entries with the same readings\r\n                    for (const [key, val] of Object.entries(obj)) {\r\n                        results.push({ entry: entry, category: category, obj: val});\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        f(results);\r\n    });\r\n}\r\n\r\nentitize(\"partikel\", (results) => {\r\n    const Partikel = {\r\n        data() {\r\n            return {\r\n                data: results,\r\n                topBar: {\r\n                    identifier: \"助詞\",\r\n                    anschluss: \"接続\",\r\n                    flexion: \"\",\r\n                    bedeutung: \"意味\"\r\n                }\r\n            }\r\n        }\r\n    } \r\n    \r\n    Vue.createApp(Partikel).mount('#partikel')\r\n});\r\n\r\nentitize(\"verbalsuffixe\", (results) => {\r\n    const Verbalsuffixe = {\r\n        data() {\r\n            return {\r\n                data: results,\r\n                topBar: {\r\n                    identifier: \"助動詞\",\r\n                    anschluss: \"接続\",\r\n                    flexion: \"活用\",\r\n                    bedeutung: \"意味\"\r\n                }\r\n            }\r\n        }\r\n    } \r\n    \r\n    Vue.createApp(Verbalsuffixe).mount('#verbalsuffixe')\r\n});\r\n\r\nentitize(\"vokabeln\", (results) => {\r\n    const Vokabeln = {\r\n        data() {\r\n            return {\r\n                data: results,\r\n                topBar: {\r\n                    identifier: \"単語\",\r\n                    anschluss: \"漢字\",\r\n                    flexion: \"活用\",\r\n                    bedeutung: \"意味\"\r\n                }\r\n            }\r\n        }\r\n    } \r\n    \r\n    Vue.createApp(Vokabeln).mount('#vokabeln')\r\n});\r\n\r\n$('#search').on('input',(e) => {\r\n    if($(\"#search\").val() === \"\") {\r\n        $(\".card\").css(\"display\", \"unset\");\r\n    } else {\r\n        $(\".card\").css(\"display\", \"none\");\r\n        const searches = $(\"#search\").val().split(/[ 　]/);\r\n        searches.forEach((str) => {\r\n            if(str !== \"　\" && str !== \" \" && str !== \"\") {\r\n                $('[id*=' + str + ']').each(function() {\r\n                    if($(this).attr(\"class\") === \"katsuyou-lesung\" || $(this).attr(\"class\") === \"variation\") {\r\n                        //the original div that was hidden in the verbal suffixes and in vocabulary\r\n                        var e = $(this).parent().parent().parent().parent();\r\n                        e.css(\"display\", \"unset\");\r\n                    } else {\r\n                        $(this).css(\"display\", \"unset\");\r\n                    }\r\n                });\r\n            }\r\n        });\r\n    }\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./web/src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./web/src/main.js"]();
/******/ 	
/******/ })()
;