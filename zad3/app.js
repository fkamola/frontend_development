
var q = $('#q');
var list = $('<ul />');

var keyups = Rx.Observable.fromEvent(q, 'keyup');

keyups.throttleTime(500).map(function(x) {
        return q.val();
    })
    .switchMap(function(x) {
        return searchWikipedia(x)
    })
    .do(function(x) {
        console.log(x);
    })
    .subscribe(function(x) {
        extractResult(x);
        $('body').append(list);
    });

function searchWikipedia(term) {
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}


function extractResult(result){
    jQuery.each(result, function(index, value) {
        $('<li />', {text: '' + value}).appendTo(list);
    });
}
