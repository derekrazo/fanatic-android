var locationsDB = ['San Diego', 'LA', 'NorCal'];
var eventsDB = Array(10);
var fansDB = [];

function EventObj(name, date, location, venue) {
    this.name = name;
    this.date = date;
    this.location = location;
    this.venue = venue;
    this.tour = '';
}

function FanObj(email) {
    this.name = '';
    this.email = email;
    this.labels = {};
}

function prepopulateDB() {
    var fan1 = new FanObj('johnsmith@mail.com');
    fan1.name = 'John Smith';
    fan1.labels = {'San Diego':3, 'LA':1};
    fansDB.push(fan1);
    
    var fan2 = new FanObj('susiepark@mail.com');
    fan2.name = 'Susie Park';
    fan2.labels = {'San Diego':2};
    fansDB.push(fan2);
    
    var fan3 = new FanObj('ninjasarecool@mail.com');
    fan3.labels = {'NorCal':1};
    fansDB.push(fan3);
            
    var fan4 = new FanObj('lee1987@mail.com');
    fan4.labels = {'NorCal':5, 'LA':1};
    fansDB.push(fan4);
    
    var fan5 = new FanObj('penguin999@mail.com');
    fan5.labels = {'San Diego': 1};
    fansDB.push(fan5); 
    /*
    var myEvent1 = EventObj("MOB Fall Concert", "Dec. 7 2013 - 7:00 PM", "NorCal", "2224 University Ave.");
    eventsDB.push(myEvent1);

    var myEvent2 = EventObj("MOB Post-Concert BBQ", "Dec. 14 2013 - 12:00 PM", "NorCal", "1245 Arch st.");
    eventsDB.push(myEvent2);
    */
}
/*
function createEventFeedList() {   
    var myUL = document.getElementById("fansUL");
            myUL.innerHTML = '';
            var h1 = '<a href="#singleFanView" data-ajax="true" data-transition="slide" onclick="testFunc(\'';
            var h2 = '\')">'
            var h3 = '</a>';
            for (var i = 0; i < fansDB.length; i++) {
                var fan = fansDB[i];
                var myLI = document.createElement('li');
                
                if (fan.name !== '') {
                    myLI.innerHTML =  h1 + fan.email + h2 + fan.email + ' (' + fan.name + ')' + h3;
                } else {
                    myLI.innerHTML = h1 + fan.email + h2 + fan.email + h3;
                }
                
                myUL.appendChild(myLI);
            }                
}

*/