'use strict';

describe ('Feature Test:', function() {

  var plane;
  var airport;

  beforeEach(function(){
    plane = new Airplane;
    airport = new Airport;
  });

  it('successfully lands a plane', function() {
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  });
});
