'use strict';

describe ('Feature Test:', function() {

  var plane;
  var airport;

  beforeEach(function(){
    plane = new Airplane;
    airport = new Airport;
  });

  it('successfully lands a plane', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});
