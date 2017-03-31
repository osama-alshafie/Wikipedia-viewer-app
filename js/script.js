$(document).ready(function(){
    $(".search_section .btn_search").on("click",function(){
        var searchPattern = $(".search_section .input_search").val();
        var api = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
        var cb = "&callback=?";
        var page = "https://en.wikipedia.org/?curid=";
        $.getJSON(api + searchPattern + cb,function(data){
            $(".results_section").show(2000);
            $.each(data.query.pages,function(index,value){
                var title = value.title;
                var body = value.extract;
                var pageURL = page + value.pageid;
                $(".results_section").append("<a class='entry' href='" + pageURL + "'><h3>" + title + "</h3><p>" + body + "</p></a>");
            });
        });
    });
});