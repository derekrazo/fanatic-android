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
}