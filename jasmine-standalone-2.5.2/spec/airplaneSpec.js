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

    it('raises an error if already landed', function(){
      plane.land(airport)
      expect(function(){plane.land(airport);}).toThrowError("Plane already landed")
    });
  });

  describe('#takeOff', function() {
    it('raises an error if already flying', function() {
      expect(function(){plane.takeOff();}).toThrowError("Plane already flying")
    })
  });





});
