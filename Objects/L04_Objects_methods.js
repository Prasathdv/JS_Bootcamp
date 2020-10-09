// Challenge is to create method to book seats in a restaurant based on seat availability

let restaurant = {
    name: 'AAB',
    guestsCapacity: 75,
    guests:0,
    seatOccupied: 0,
    bookingNo:0,
    // 75-32 = 43
    // 75-43 = 32
    isSeatAvailable: function(guestsCount){
        this.guests = this.guestsCapacity - this.seatOccupied
       return guestsCount <= this.guests
    },
    seatParty: function(seatTobeBooked){
       this.seatOccupied = this.seatOccupied + seatTobeBooked
    },
    removeParty: function(seatToBeRemoved){
        this.seatOccupied = this.seatOccupied - seatToBeRemoved
    }
}
restaurant.seatParty(72)
console.log(restaurant.isSeatAvailable(4));
restaurant.removeParty(5)
console.log(restaurant.isSeatAvailable(5));