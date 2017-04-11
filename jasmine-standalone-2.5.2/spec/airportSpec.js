'use strict';

describe('Airport', function() {

  var airport;
  var plane;
  // var plane = jasmine.createSpy('plane', ['land', 'take_off']);


  describe('#land', function() {

    beforeEach(function(){
      plane = {
        land: function(airport){
          return null;
        }
      }
      airport = new Airport;
    });

    it('instructs plane to land', function(){
      spyOn(plane, 'land')
      airport.land(plane)
      expect(plane.land).toHaveBeenCalled();
    });

  });


});
