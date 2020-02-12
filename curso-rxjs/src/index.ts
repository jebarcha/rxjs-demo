import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
	next: (value) => console.log('[next]:', value),
	error: (err) => console.warn('[error]: ', err),
	complete: () => console.log('[Completado]')
};
