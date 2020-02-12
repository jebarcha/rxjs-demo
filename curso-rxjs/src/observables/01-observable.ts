import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
	next: (value) => console.log('siguiente [next]:', value),
	error: (error) => console.warn('error [obs]:', error),
	complete: () => console.info('completado [obs]')
};

const obs$ = new Observable<string>((subs) => {
	subs.next('Hola');
	subs.next('Mundo');

	subs.next('Hola');
	subs.next('Mundo');

	// Forzar un error
	// const a = undefined;
	// a.nombre = 'Jose';

	subs.complete();

	subs.next('Mundo 2');
});

// obs$.subscribe((resp) => {
// 	console.log('resp', resp);
// });

//obs$.subscribe(console.log);

// obs$.subscribe(
// 	(valor) => console.log('next:', valor),
// 	(error) => console.warn(error),
// 	() => console.info('Completado')
// );

obs$.subscribe(observer);
