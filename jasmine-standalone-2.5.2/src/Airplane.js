function Airplane(){

};
Airplane.prototype.flying = true;
Airplane.prototype.airport = null;


Airplane.prototype._isLanded = function() {
  return !this.flying;
};


Airplane.prototype.land = function(airport){
  if (this._isLanded() == true ) {
    throw new Error('Plane already landed');
  }
  this.flying = false;
  this.airport = airport;
};

  Airplane.prototype.takeOff = function() {
    debugger;
    if (this._isLanded() == false) {
      throw new Error('Plane already flying');
    }
    this.flying = true;
    this.airport = null;
  };
