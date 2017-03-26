let beers = [];


class Beer{
    constructor (name, type, brewery, origin, bitterness, alcohol_content, hops, malts){
        this.name = name;
        this.type = type;
        this.brewery = brewery;
        this.origin = origin;
        this.bitterness = bitterness;
        this.alcohol_content = alcohol_content;
        this.hops = hops;
        this.malts = malts;
    }

    addBeer(){
        beers.push(this);
    }

    showBeersTable(){
        document.body.innerHTML = '<table id="table"><tr><td>Name</td><td>Type</td><td>Brewery</td><td>origin</td><td>bitterness</td><td>alcohol</td><td>hops</td><td>malts</td><tr></table>';
        for (let i = 0; i < beers.length; i++) {
            document.getElementById('table').innerHTML += `<tr id="td${i}"></tr>`;
            document.getElementById(`td${i}`).innerHTML = `<td>${beers[i].name}</td><td>${beers[i].type}</td><td>${beers[i].brewery}</td><td>${beers[i].origin}</td><td>${beers[i].bitterness}</td><td>${beers[i].alcohol_content}</td><td>${beers[i].hops}</td><td>${beers[i].malts}</td>`;
        }
    }

    getBeersJSON() {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'data.json', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                beers = JSON.parse(xobj.response);
                beers = beers.beers;
            }
        };
        xobj.send(null);
    }
}


(function init() {
    beer = new Beer('Atak Chmielu', 'IPA', 'Pinta', 'Poland', '75 IBU', '5%', 'American', 'pale ale');
    beer.getBeersJSON();

    setTimeout(function () {
        console.log(beers);
        beer.addBeer();
        beer.showBeersTable();
    }, 200)
})();
