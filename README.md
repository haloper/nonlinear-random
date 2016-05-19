# random
Javascript random halper. It's usefull when you want to generate random number non-linearly.

## Basic Sample

```javascript
var Random = window.Random.noConflict();

var ran = Random(1, 20); // Generate random number lineary 1 <= x <=20
var number = ran.nextInt();
/*** Random number count : total 1000
number : 	count
1	: 	50
2	: 	43
3	: 	41
4	: 	51
5	: 	46
6	: 	57
7	: 	51
8	: 	65
9	:	32
10	:	46
11	:	58
12	:	64
13	:	58
14	:	52
15	:	51
16	:	37
17	:	53
18	:	46
19	:	50
20	:	49
***/

var ran = Random(1, 20).slopeTransform();
var number = ran.nextInt();
/*** Random number count : total 1000
number 	: 	count
 1	:	36
 2	:	39
 3	:	37
 4	:	31
 5	:	46
 6	:	43
 7	:	29
 8	:	44
 9	:	60
 10	:	42
 11	:	58
 12	:	47
 13	:	46
 14	:	64
 15	:	60
 16	:	62
 17	:	67
 18	:	71
 19	:	51
 20	:	67
***/

var ran = Random(1, 20).slopeReverseTransform();
var number = ran.nextInt();
/*** Random number count : total 1000
number 	: 	count
 1	:	79
 2	:	77
 3	:	55
 4	:	62
 5	:	46
 6	:	57
 7	:	51
 8	:	50
 9	:	58
 10	:	40
 11	:	49
 12	:	44
 13	:	51
 14	:	54
 15	:	36
 16	:	36
 17	:	40
 18	:	39
 19	:	37
 20	:	39
***/

var ran = Random(1, 20).concaveSlopeTransform();
var number = ran.nextInt();
/*** Random number count : total 1000
number 	: 	count
 1	:	32
 2	:	25
 3	:	19
 4	:	32
 5	:	29
 6	:	34
 7	:	36
 8	:	40
 9	:	36
 10	:	36
 11	:	33
 12	:	32
 13	:	59
 14	:	38
 15	:	55
 16	:	56
 17	:	49
 18	:	79
 19	:	77
 20	:	203
***/

var ran = Random(1, 20).concaveSlopeReverseTransform();
var number = ran.nextInt();
/*** Random number count : total 1000
number 	: 	count
 1	:	199
 2	:	80
 3	:	55
 4	:	50
 5	:	47
 6	:	48
 7	:	52
 8	:	44
 9	:	48
 10	:	29
 11	:	30
 12	:	46
 13	:	40
 14	:	34
 15	:	37
 16	:	46
 17	:	35
 18	:	27
 19	:	21
 20	:	32
***/

var ran = Random(1, 20).hourglassTransform();
var number = ran.nextInt();
/*** Random number count : total 1000
number 	: 	count
 1	:	138
 2	:	67
 3	:	48
 4	:	42
 5	:	38
 6	:	31
 7	:	42
 8	:	25
 9	:	32
 10	:	31
 11	:	36
 12	:	28
 13	:	32
 14	:	37
 15	:	27
 16	:	32
 17	:	56
 18	:	52
 19	:	50
 20	:	156
***/

var ran = Random(1, 20).dTransform();
var number = ran.nextInt();
/*** Random number count : total 1000
number 	: 	count
 1	:	30
 2	:	25
 3	:	35
 4	:	37
 5	:	31
 6	:	48
 7	:	36
 8	:	48
 9	:	56
 10	:	118
 11	:	167
 12	:	46
 13	:	49
 14	:	52
 15	:	51
 16	:	43
 17	:	36
 18	:	34
 19	:	33
 20	:	25
***/
```

## Making custom transform

```javascript
// var ran = Random(min, max).transform(graph, xMin, xMax);
var ran = Random(0, 100).transform(function(x) {
	return x * x;
}, 0, 2);
var number = ran.nextInt();
```






 






