import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// ajax
// 	.put(
// 		url,
// 		{
// 			id: 1,
// 			nombre: 'Jose'
// 		},
// 		{
// 			'Content-Type': 'json',
// 			'mi-token': 'ABC123'
// 		}
// 	)
// 	.subscribe(console.log);

ajax({
	url: url,
	method: 'POST',
	headers: { 'mi-token': 'ABC1123' },
	body: { id: 1, nombre: 'Jose' }
}).subscribe(console.log);
