const { data } = require("jquery")

$.getJSON("get.php",function (data) {
    var items = []
    $.each(data,function (key,val) {
        items.push("<tr>")
        items.push("<td id="+key+"'>"+val.entries+"</td>")
        items.push("</tr>")
    })
    $('<tbody/>',{html:items.join("")}).appendTo("table")
})
if(data = 0){
    document.write(No, Entries, Yet)
}