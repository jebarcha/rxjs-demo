import { of, range, asyncScheduler } from 'rxjs';

//const src$ = of(1, 2, 3, 4, 5);
//const src$ = range(-5, 10); // 10 emisiones, el resultado ser del -5 al 4
//const src$ = range(5);  //el valor inicial es 0, resultado del 1 al 4
const src$ = range(1, 5, asyncScheduler); //hacerlo asyncorno

// es sincrono por default, pero con en asyncScheduler se hace asyncrono
console.log('inicio');
src$.subscribe(console.log);
console.log('fin');
