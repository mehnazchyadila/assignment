//Calculating Feet To Mile 

function feetToMile(feet){
    var mile = feet / 5280;
    return(mile);
}
var result = feetToMile(3456); 
console.log(result);

//calculating Total Wood
function woodCalculator(noOfChair,noOfTable,noOfBed){
    var wood = 1 * noOfChair + 3 * noOfTable + 4 * noOfBed ;
    return wood;
}

var result = woodCalculator(10,3,7);
console.log(result);

// Calculating Total Bricks Need For A Building
function brickcalculator(floors){
    if(floors <= 10){
            total = (floors * 15 *1000);
            return total;
        }
        else if(floors <= 20){
            first = 10 ;
            second = floors -10;
            total = (first*15*1000) + (second * 12 *1000);
            return total;
        }
        else if(floors > 20){
            first = 10;
            second =10;
            third = floors - 20;
            total = (first * 15 *1000) + (second * 12 * 1000) +( third * 10 * 1000) ;
            return total;
        
        }

}

var result = brickcalculator(34);
console.log(result);

//Finding Tiny Friend

function tinyFriend(friends){
    var tiny = friends[0];
    for(var i=0 ; i < friends.length; i++){
            var friend = friends[i];
           if(friend.length < tiny.length){
             tiny =friend ;
            }
         }
         return tiny;
}

var result = tinyFriend(['Afifa' , 'Raisa' ,'Tajri','Sunny','Rizuana','Jia']);
console.log(result);

