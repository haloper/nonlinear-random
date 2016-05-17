/*!
 * JavaScript Log Random
 * https://github.com/haloper/js-object-wrapper
 *
 * Released under the MIT license
 */
(function (factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) define(factory); //for AMD(RequireJS)
	else if (typeof exports === 'object') module.exports = factory(); //for CommonJS
	else {
		var oldRandom = window.Random;
		var random = window.Random = factory();

		random.noConflict = function () {
			window.Random = oldRandom;
			return random;
		};
	}
}(function () {
	'use strict';

	function factory(min, max) {
		if(min < 0 || max <= min) throw new Error("Check : min > 0 && max > min");
		return new api(min, max);
	}

	function api(min, max) {
		this.min = min;
		this.max = max;

		this.scale = function(xMin, xMax, yMin, yMax, value) {

			//check arguments
			if(xMin < 0 || xMax <= xMin) throw new Error("Check : xMin > 0 && xMax > xMin");
			if(yMin < 0 || yMax <= yMin) throw new Error("Check : yMin > 0 && yMax > yMin");
			if(value < xMin || value > xMax) throw new Error("Check : rangeMin <= value <= rangeMax");

			return (yMax - yMin) / (xMax - xMin) * (value - xMin) + yMin;

		}

		this.random = function(min, max) {
			return Math.random() * (max - min + 1) + min;	 	
		}
	}

	api.prototype.number = function() {
		if(typeof this.logic === 'function') {
			var value = this.random(this.domainMin, this.domainMax);
			var y = this.logic(value);
			return this.scale(this.rangeMin, this.rangeMax, this.min, this.max + 1, y);
		}
		else {
			return this.random(this.min, this.max);
		}
	}

	api.prototype.next = function() {
		return this.number();
	}

	api.prototype.nextInt = function() {
		return Math.floor(this.number());
	}

	api.prototype.transform = function(logic, domainMin, domainMax) {

		//check arguments
		if(domainMin < 0 || domainMax <= domainMin) throw new Error("Check : domainMin >= 0 && domainMax > domainMin");

		this.logic = logic;
		this.domainMin = domainMin;
		this.domainMax = domainMax;
		this.rangeMin = logic(domainMin);
		this.rangeMax = logic(domainMax + 1);

		if(this.rangeMin < 0 || this.rangeMax <= this.rangeMin) throw new Error("Check : logic(domainMin) >= 0 && logic(domainMax) > logic(domainMin)");

		return this;
	}

	factory.transform = {
		log : function(a) {
			return function(x) {
				return Math.log(x) / Math.log(a);
			}
		},
		log2 : function(x) {
			return Math.log(x) / Math.log(2);
		},
		square: function(x) {
			return x * x;
		}

	}

	return factory;
}));
