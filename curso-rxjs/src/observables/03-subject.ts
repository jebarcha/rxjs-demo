import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
	next: (value) => console.log('next:', value),
	error: (error) => console.warn('error:', error),
	complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>((subs) => {
	// emitir un numero random cada segundo
	const intervalID = setInterval(() => subs.next(Math.random()), 1000);

	return () => {
		clearInterval(intervalID);
		console.log('Intervalo destruido');
	};
});

/*
Subject
1.Casteo multiple
2.Tambien es un Observer
3.Next, error, complete
*/
const subject$ = new Subject<number>();
const subscription = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

// const subs1 = intervalo$.subscribe((rnd) => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe((rnd) => console.log('subs2', rnd));

setTimeout(() => {
	subject$.next(10);
	subject$.complete();
	subscription.unsubscribe();
}, 3500);
