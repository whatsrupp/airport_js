describe('Airplane', function(){

  var plane;
  var airport;

  beforeEach(function(){
    plane = new Airplane();
    airport = jasmine.createSpy('airport');
  });

  describe('#land', function(){

    it('lands at airport', function(){
      plane.land(airport);
      expect(plane.airport).toEqual(airport);
    });
  });





});
