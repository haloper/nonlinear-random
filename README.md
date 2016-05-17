# random
Javascript random halper. It's usefull when you want to generate random number log-linearly.

## Sample

```javascript
var Random = window.Random.noConflict();

var ran = Random(1, 20); // Generate random number lineary 1 <= x <=20
var number = ran.nextInt();
/*** Random number count : total 1000
number 	: 	count
1		: 	50
2		: 	43
3		: 	41
4		: 	51
5		: 	46
6		: 	57
7		: 	51
8		: 	65
9		:	32
10		:	46
11		:	58
12		:	64
13		:	58
14		:	52
15		:	51
16		:	37
17		:	53
18		:	46
19		:	50
20		:	49
***/

var ran = Random(1, 20).transform(Random.transform.log2, 1, 2); //Generate random number log-linearly 1 <= x <=20
var number = ran.nextInt();
/*** Random number count : total 1000
number 	: 	count
1		: 	21
2		: 	35
3		: 	32
4		: 	39
5		: 	33
6		: 	39
7		: 	32
8		: 	46
9		: 	48
10		: 	47
11		: 	51
12		: 	57
13		: 	39
14		: 	53
15		: 	55
16		: 	68
17		: 	73
18		: 	67
19		: 	80
20		: 	85
***/

var ran = Random(1, 20).transform(Random.transform.square, 0, 2); //Generate random number (x^2) 1 <= x <=20
var number = ran.nextInt();
/*** Random number count : total 1000
number 	: 	count
1		:	220
2		:	98
3		:	60
4		:	71
5		:	42
6		:	47
7		:	47
8		:	45
9		:	47
10		:	37
11		:	37
12		:	33
13		:	30
14		:	33
15		:	34
16		:	19
17		:	23
18		:	19
19		:	33
20		:	25
***/
```
