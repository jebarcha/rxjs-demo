import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
//const clickBtn$ = fromEvent(boton, 'click');
const clickBtn$ = fromEvent(boton, 'click').pipe(
	tap(() => console.log('tap antes del skip')),
	skip(1),
	tap(() => console.log('tap despues del skip'))
);

counter$.pipe(takeUntil(clickBtn$)).subscribe({
	next: (val) => console.log('next', val),
	complete: () => console.log('Complete')
});
