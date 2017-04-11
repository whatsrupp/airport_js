describe('Airport', function() {

  var airport;
  var plane = jasmine.createSpy('plane', ['land', 'take_off']);
  spyOn(plane, 'land').andReturn(null)
  // plane.land.andCallFake(function() {
  //   return null;
  // });
  // plane.take_off.andCallFake(function(){
  //   return null;
  // });

  beforeEach(function(){
    plane = {
      land: function(){
        return null;
      }
    }
    
  });

  describe('#land', function() {
    it('instructs', function() {
      expect(plane.land).toBeNull();
    });
  });


});
