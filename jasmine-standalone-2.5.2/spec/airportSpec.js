describe('Airport', function() {

  var airport;
  // var plane = jasmine.createSpy('plane', ['land', 'take_off']);


  describe('#land', function() {

    beforeEach(function(){
      plane = {land: function(){return null;}}
      airport = new Airport;
    });

    it('instructs plane to land', function(){
      spyOn(plane, 'land')
      airport.land(plane)
      expect(plane.land()).toHaveBeenCalled();
    })

  });


});
