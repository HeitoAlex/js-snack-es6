const invitedGuest = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];
const invitedList = {};

invitedGuest.forEach((value, index) => {
    invitedList.tableName = 'Tavolo Vip';
    invitedList.guestName = value;
    invitedList.place = index;
    
    console.log(invitedList);
})