const invitedGuest = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];
let invitedList = [];

invitedGuest.forEach((value, index) => {

    let newObj = {
        tableName: 'Tavolo Vip',
        guestName: value,
        place: index
    }
        
    invitedList.push(newObj);
    
    console.log(invitedList);
})