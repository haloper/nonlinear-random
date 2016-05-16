describe("Object Wrapper", function() {
	var random = window.Random.noConflict();
	
	describe("Simple objectWrapper Structure", function() {
		beforeEach(function() {

		}); 

		function repeatToArray(func, count) {
			var result = [];
			for(var i=0;i<count;i++) {
				result.push(func());	
			}
			return result;
		}

		function repeatToMap(func, count) {
			var result = {};
			for(var i=0;i<count;i++) {
				var val = func();
				if(result[val] >= 0) result[val]++;
				else result[val] = 1;
			}
			return result;	
		}

		it("Get random by min, max", function() {
			var result = repeatToArray(function() { return random(10, 20); }, 100);
			expect(result.every(function(element) {
				return element >= 10 && element <= 20 || console.log(element);
			})).toBe(true);
		});

		it("Get random by min, max, log", function() {
			var map = repeatToMap(function() { return random(10, 20, 2); }, 1000);
			expect(map[10] > 0 && map[20] > 0 && map[10] < map[20]).toBe(true);

			var mapZeroTo = repeatToMap(function() { return random(0, 1000, 2); }, 100000);
			expect(mapZeroTo[0] > 0 && mapZeroTo[1000] > 0 && mapZeroTo[0] < mapZeroTo[1000]).toBe(true);
		});

		it("Wrong arguments", function() {
			expect(function() { random(0, 1, 1) }).toThrow();
		});
	});
});
