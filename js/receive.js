// Recieves the data and ideally pushes to html

$.getJSON("php/get.php",function (data) {
    var items = [];
    $.each(data,function (key,val) {
        items.push("<p> id='"+key+"'>"+val.uId+"</p>");
    });
    $('<tbody/>',{html:items.join("")}).appendTo("table");
});

if (data > 0) {
    greeting = "No Entries Yet";
}