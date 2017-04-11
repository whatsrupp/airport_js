describe('Airport', function() {

  var airport;
  // var plane = jasmine.createSpy('plane', ['land', 'take_off']);


  describe('#land', function() {

    beforeEach(function(){
      plane = {land: function(){return null;}}
    });

    it('instructs plane to land', function(){
      spyOn(plane, 'land')
      debugger;
      airport.land(plane)
      expect(plane.land()).toHaveBeenCalled();
    })

  });


});
