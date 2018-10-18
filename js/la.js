//Bank Training set
/*
	*Attrs historic, debt, guarantee, revenue, risc
	- historic (0 - unknown, 1 - bad, 2 - good)
    - debt     (0 - none,    1 - low, 2 - high)
    - guarantee(0 - none,    1 - suitable)
    - revenue  (0 -)
    - risc     (0 - low,     1 - moderate, 2 - high )

*/
var data = 
    [{person: 'Homer',  hairLength: 0,  weight: 250, age: 36, sex: 'male'},
     {person: 'Marge',  hairLength: 10, weight: 150, age: 34, sex: 'female'},
     {person: 'Bart',   hairLength: 2,  weight: 90,  age: 10, sex: 'male'},
     {person: 'Lisa',   hairLength: 6,  weight: 78,  age: 8, sex: 'female'},
     {person: 'Maggie', hairLength: 4,  weight: 20,  age: 1, sex: 'female'},
     {person: 'Abe',    hairLength: 1,  weight: 170, age: 70, sex: 'male'},
     {person: 'Selma',  hairLength: 8,  weight: 160, age: 41, sex: 'female'},
     {person: 'Otto',   hairLength: 10, weight: 180, age: 38, sex: 'male'},
     {person: 'Krusty', hairLength: 6,  weight: 200, age: 45, sex: 'male'}];