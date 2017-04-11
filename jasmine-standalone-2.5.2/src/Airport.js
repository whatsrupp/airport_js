function Airport (){

}


Airport.prototype.planes = [];

Airport.prototype.land = function(plane){
  plane.land(this);
  this.planes.push(plane);


}
