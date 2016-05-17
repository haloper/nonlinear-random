describe("Random", function() {
	var Random = window.Random.noConflict();
	
	describe("Basic Test", function() {
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

		it("scale test", function() {
			var ran = Random(0, 10);
			expect(ran.scale(1, 2, 0, 10, 1)).toBe(0);
			expect(ran.scale(1, 2, 0, 10, 1.5)).toBe(5);
			expect(ran.scale(1, 2, 0, 10, 2)).toBe(10);

			expect(function() {
				ran.scale(1,1,0,10,1);
			}).toThrow();
			expect(function() {
				ran.scale(1,0,0,10,0.5);
			}).toThrow();
		});

		it("Get random by min, max", function() {
			var random = Random(1, 20);
			var result = repeatToArray(function() { return random.nextInt(); }, 1000);
			expect(result.every(function(element) {
				return element >= 1 && element <= 20 || console.log(element);
			})).toBe(true);
		});

		it("Get log random by min, max", function() {
			var ran = Random(1, 20).transform(Random.transform.log(3), 1, 2);
			var map = repeatToMap(function() { return ran.nextInt(); }, 1000);
			expect(map[10] > 0 && map[20] > 0 && map[10] < map[20]).toBe(true);

			var ran2 = Random(1, 20).transform(Random.transform.log2, 1, 2);
			var map2 = repeatToMap(function() { return ran2.nextInt(); }, 1000);
			expect(map2[10] > 0 && map2[20] > 0 && map2[10] < map2[20]).toBe(true);
		});

		it("Get square random by min, max", function() {
			var ran = Random(1, 20).transform(Random.transform.square, 0, 2);
			var map = repeatToMap(function() { return ran.nextInt(); }, 1000);
			expect(map[1] > 0 && map[20] > 0 && map[1] > map[20]).toBe(true);

			var ran2 = Random(1, 20).transform(function(x) { return x * x }, 0, 2);
			var map2 = repeatToMap(function() { return ran2.nextInt(); }, 1000);
			expect(map2[1] > 0 && map2[20] > 0 && map2[1] > map2[20]).toBe(true);
		});




	});
});
