function getData(req, f) {
    fetch('./api/fetcher.php?data=' + req)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            f(data);
        });
}

function entitize(req, f){
    getData(req, (data) => {
        var results = [];
        //iterate over the first layer containing the generaal category with the target object as value, given in entries
        for (const [category, entries] of Object.entries(data)) {
            //iterate over all the entries that are to be displayed as such (さへ、こそ、etc.)
            for (const [entry, obj] of Object.entries(entries)) {
                //entitize based on the partikel.json data model
                if(req === "partikel") {

                    var meanings = [];
                    //get the key for the "Bedeutung" subtree
                    for (const [key, val] of Object.entries(obj)) {
                        if(key !== "Anschluss" && key !== "Anmerkung"){
                            meanings.push({ anschluss: key, meaningList: val.Bedeutung});
                        }
                    }
                    results.push({ entry: entry, category: category, obj: obj, meanings: meanings});
                } else if(req === "verbalsuffixe") {
                    //filter out the "Anmerkungen" section for the current katsuyou
                    if(entry !== "Anmerkung") {
                        var katsuyou = [];
                        //get the key for the "Formen" subtree
                        for (const [key, val] of Object.entries(obj.Formen)) {
                            katsuyou.push({ Form: key, Lesung: val});
                        }
                        results.push({ entry: entry, category: category, obj: obj, katsuyou: katsuyou});
                    }
                } else if(req === "vokabeln") {
                    //for entries with the same readings
                    for (const [key, val] of Object.entries(obj)) {
                        results.push({ entry: entry, category: category, obj: val});
                    }
                }
            }
        }
        f(results);
    });
}

entitize("partikel", (results) => {
    const Partikel = {
        data() {
            return {
                data: results,
                topBar: {
                    identifier: "助詞",
                    anschluss: "接続",
                    flexion: "",
                    bedeutung: "意味"
                }
            }
        }
    } 
    
    Vue.createApp(Partikel).mount('#partikel')
});

entitize("verbalsuffixe", (results) => {
    const Verbalsuffixe = {
        data() {
            return {
                data: results,
                topBar: {
                    identifier: "助動詞",
                    anschluss: "接続",
                    flexion: "活用",
                    bedeutung: "意味"
                }
            }
        }
    } 
    
    Vue.createApp(Verbalsuffixe).mount('#verbalsuffixe')
});

entitize("vokabeln", (results) => {
    const Vokabeln = {
        data() {
            return {
                data: results,
                topBar: {
                    identifier: "単語",
                    anschluss: "漢字",
                    flexion: "活用",
                    bedeutung: "意味"
                }
            }
        }
    } 
    
    Vue.createApp(Vokabeln).mount('#vokabeln')
});

$('#search').on('input',(e) => {
    if($("#search").val() === "") {
        $(".card").css("display", "unset");
    } else {
        $(".card").css("display", "none");
        const searches = $("#search").val().split(/[ 　]/);
        searches.forEach((str) => {
            if(str !== "　" && str !== " " && str !== "") {
                $('[id*=' + str + ']').each(function() {
                    if($(this).attr("class") === "katsuyou-lesung" || $(this).attr("class") === "variation") {
                        //the original div that was hidden in the verbal suffixes and in vocabulary
                        var e = $(this).parent().parent().parent().parent();
                        e.css("display", "unset");
                    } else {
                        if(str === $(this).attr('id'))
                            $(this).css("display", "unset");
                    }
                });
            }
        });
    }
});


