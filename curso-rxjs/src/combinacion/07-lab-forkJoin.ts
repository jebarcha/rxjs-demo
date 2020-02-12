import { forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

// uso mas comun del forjJoin es hacer peticiones Ajax

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'klerith'; //'jebarcha';

forkJoin({
	usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
	repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos1`).pipe(catchError((err) => of([]))),
	gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`)
})
	.pipe(catchError((err) => of(err.message)))
	.subscribe(console.log);
