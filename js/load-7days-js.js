var imgs = $.getJSON("img7DaysOfJS.json", function(result) {
        data = result;
        gen_side();
    });

function gen_side(){
    var items = [];
    console.log(data);
    $.each(data["Education"], function(i, obj){
        var cur = $("<li></li>", {"role": "presentation"});
        var link = $("<a></a>", {"href": obj.link,"class": "left-menu-text"}).text(obj.name);
        cur.append(link);
        $("#left-menu").append(cur);
    });

    var cur = $("<li></li>", {"role": "presentation"});
    var link = $("<a></a>", {"href": "custom-search.php","class": "left-menu-text"}).text("Custom Search");
    cur.append(link);
    $("#left-menu").append(cur);
    var cur = $("<li></li>", {"role": "presentation"});
    var link = $("<a></a>", {"href": "#","class": "left-menu-text"}).text("");
    $("#left-menu").append(cur);
}
