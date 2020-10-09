// This challenge uses objects and within that a method. Any function which are declared inside an object refers to methods specific to that object.

//  Creating an object of Resturaunt 
let resturauntBooking = {
    name: 'Amman Mess',
    noOfSeatsAvailable: 45,
    noOfSeatsfilled:0,
    bookingToken:0,
    isSeatsAvailable: function(guestsCount){
        let seats = this.noOfSeatsAvailable - this.noOfSeatsfilled
        this.noOfSeatsfilled = this.noOfSeatsfilled + guestsCount
        if(seats>guestsCount){
            this.bookingToken = this.bookingToken + 1
            return `Your request is accepted. your booking #${this.bookingToken}. Welcome to our Mess by 1:00 PM`
        }else{
            return `We have no seats available. Regret. Please visit tomorrow.`
        }
    }
}

console.log(resturauntBooking.isSeatsAvailable(8));
console.log(resturauntBooking.isSeatsAvailable(12));
console.log(resturauntBooking.isSeatsAvailable(20));
console.log(resturauntBooking.isSeatsAvailable(5));
console.log(resturauntBooking.isSeatsAvailable(2));
console.log(resturauntBooking.isSeatsAvailable(9));