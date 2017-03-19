var beers;

function getBeersJSON() {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true);
    xobj.onreadystatechange = function (data) {
        if (xobj.readyState == 4 && xobj.status == "200") {
            beers = JSON.parse(xobj.response);
            beers = beers.beers;
        }
    };
    xobj.send(null);
}

function Beer(name, type, brewery, origin, bitterness, alcohol_content, hops, malts) {
    this.name = name;
    this.type = type;
    this.brewery = brewery;
    this.origin = origin;
    this.bitterness = bitterness;
    this.alcohol_content = alcohol_content;
    this.hops = hops;
    this.malts = malts;
}

function addBeer(name, type, brewery, origin, bitterness, alcohol_content, hops, malts) {
    var beer = new Beer(name, type, brewery, origin, bitterness, alcohol_content, hops, malts);
    beers.push(beer);
}

function showBeersTable(){
    document.body.innerHTML = '<table id="table"><tr><td>Name</td><td>Type</td><td>Brewery</td><td>origin</td><td>bitterness</td><td>alcohol</td><td>hops</td><td>malts</td><tr></table>';
    var i = 0;
    for(i; i < beers.length ; i ++){
        document.getElementById('table').innerHTML += '<tr id="td' + i + '"></tr>';
        document.getElementById('td'+ i ).innerHTML = '<td>' + beers[i].name + '</td><td>' + beers[i].type +  '</td><td>' + beers[i].brewery +  '</td><td>' + beers[i].origin + '</td><td>' + beers[i].bitterness + '</td><td>' + beers[i].alcohol_content + '</td><td>' + beers[i].hops + '</td><td>' + beers[i].malts + '</td>';
    }
}

(function init() {
    var data;
    var that = this;

    getBeersJSON();

    setTimeout(function(){

        console.log(beers);
        addBeer('Atak Chmielu', 'IPA', 'Pinta', 'Poland', '75 IBU', '5%', 'American', 'Pale Ale');
        showBeersTable();
    },200)

})();
