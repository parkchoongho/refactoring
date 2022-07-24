class Book {
  addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this.reservations.push(customer);
  }
}
