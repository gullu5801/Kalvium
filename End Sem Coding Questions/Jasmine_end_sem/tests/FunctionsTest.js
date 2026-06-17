describe('Health Analytics Utility Toolkit', function() {

  // --- Task 1: aggregateVitals ---

  // Test 1 
  it('should aggregate vitals correctly using a sum aggregator', function() {
    const sum = function(a, b) { return a + b; };
    expect(aggregateVitals([70, 80, 90], sum, 0)).toBe(240);
    expect(aggregateVitals([60, 40], sum, 10)).toBe(110);
  });

  // Test 2 
  it('should aggregate correctly with different logic (multiplication) and handle empty arrays', function() {
    const multiply = function(a, b) { return a * b; };
    const sum = function(a, b) { return a + b; };
    expect(aggregateVitals([2, 3, 4], multiply, 1)).toBe(24);
    expect(aggregateVitals([], sum, 100)).toBe(100);
  });


  // --- Task 2: adjustReadings ---

  // Test 3 
  it('should correctly adjust all readings and return a new array', function() {
    const expectedResult = [105, 210, 52.5];
    const result = adjustReadings([100, 200, 50], 0.05);
    expect(result).toEqual(expectedResult);
  });

  // Test 4 
  it('should be a pure function that does not mutate the original array', function() {
    const originalReadings = [100, 200];
    const originalCopy = [100, 200];
    const result = adjustReadings(originalReadings, 0.10);
    
    // Validate transformation first
    expect(result).toEqual([110, 220]); 
    // Must return new array reference
    expect(result).not.toBe(originalReadings);
    // Original array must remain unchanged
    expect(originalReadings).toEqual(originalCopy);
  });


  // --- Task 3: createThresholdChecker ---

  // Test 5 
  it('should return a closure function that checks threshold correctly', function() {
    const isAbove100 = createThresholdChecker(100);
    expect(typeof isAbove100).toBe('function');
    expect(isAbove100(120)).toBe(true);
    expect(isAbove100(80)).toBe(false);
  });

  // Test 6 
  it('should maintain independent closures for different thresholds', function() {
    const isAbove50 = createThresholdChecker(50);
    const isAbove200 = createThresholdChecker(200);
    
    expect(isAbove50(60)).toBe(true);
    expect(isAbove200(60)).toBe(false);
  });


  // --- Task 4: flattenPatientData ---

  // Test 7 
  it('should recursively flatten deeply nested patient data arrays', function() {
    const nestedArray = ["HR", ["BP", ["Temp", "O2"], "Sugar"], "ECG"];
    const expectedFlat = ["HR", "BP", "Temp", "O2", "Sugar", "ECG"];
    const result = flattenPatientData(nestedArray);
    
    expect(result).toEqual(expectedFlat);
  });

  // Test 8 
  it('should flatten without using Array.prototype.flat', function() {
    spyOn(Array.prototype, 'flat').and.callThrough();
    const nested = ["A", ["B", ["C"]]];
    const result = flattenPatientData(nested);
    
    expect(result).toEqual(["A", "B", "C"]); 
    expect(Array.prototype.flat).not.toHaveBeenCalled();
  });


  // --- Task 5: vitalStats IIFE ---

  // Test 9 
  it('should correctly return max and min readings via the IIFE module', function() {
    const readings = [120, 80, 140, 100];
    expect(vitalStats).toBeDefined();
    expect(typeof vitalStats.getMaxReading).toBe('function');
    expect(typeof vitalStats.getMinReading).toBe('function');
    
    expect(vitalStats.getMaxReading(readings)).toBe(140);
    expect(vitalStats.getMinReading(readings)).toBe(80);
  });

  // Test 10 
  it('should correctly calculate the average reading and handle empty arrays', function() {
    const readings = [120, 80, 140, 100];
    
    expect(typeof vitalStats.getAverageReading).toBe('function');
    expect(vitalStats.getAverageReading(readings)).toBe(110); 
    
    // Edge case
    expect(vitalStats.getAverageReading([])).toBe(0);
  });

});