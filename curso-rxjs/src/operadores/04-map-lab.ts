import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, libero vitae efficitur sodales, ipsum ligula imperdiet purus, quis viverra nulla enim vitae odio. Suspendisse pellentesque mauris et rutrum porttitor. Nulla facilisi. Donec ultrices, ex eu maximus accumsan, sem leo porttitor sapien, at facilisis justo velit quis urna. Duis in bibendum est. Duis imperdiet interdum libero ut consequat. Integer scelerisque purus at mi tincidunt, eget aliquet ex sollicitudin. In at accumsan eros, eget faucibus lectus. Etiam nec lacus ut magna ullamcorper aliquet vitae nec elit. Maecenas pharetra augue in ipsum tempor euismod. Vivamus id diam at urna fermentum efficitur. Curabitur ultrices vestibulum varius. Duis sed urna et nulla dignissim tincidunt vel a neque. Maecenas fringilla fringilla erat a egestas.
</br></br>
Praesent pulvinar fermentum tincidunt. Maecenas ornare ipsum eu quam condimentum convallis. Sed pulvinar tempus commodo. Pellentesque quis felis congue, facilisis erat a, viverra lorem. Aenean ut arcu quis justo auctor pellentesque tincidunt a turpis. Sed imperdiet egestas odio, eu ullamcorper quam viverra mattis. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi enim nisi, congue eu eros sed, posuere faucibus lacus. Maecenas finibus, lectus ut porta convallis, nunc est posuere metus, in faucibus sapien dui eget quam. Suspendisse augue neque, efficitur non magna eget, finibus ultricies diam. Aenean sodales quis leo et iaculis. Etiam tellus massa, venenatis et congue vel, suscipit nec dui.
</br></br>
Etiam non lacus nec velit egestas bibendum a id ante. Donec a porttitor ligula. Suspendisse vel elementum urna. Fusce a molestie tellus, non sodales dui. Fusce dictum felis tristique, ultrices nulla non, posuere dolor. Nam mauris justo, euismod vitae aliquet sed, euismod lobortis augue. Vestibulum at nibh id nunc pellentesque dapibus. Pellentesque dolor velit, dapibus id libero nec, aliquet tempus ex. Cras eu imperdiet purus, sit amet ullamcorper turpis. Praesent euismod tortor nulla, at euismod urna gravida quis. Aliquam quis leo sem. Vivamus iaculis bibendum arcu vulputate ullamcorper. Proin in mollis velit. Sed posuere accumsan orci a condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat.
</br></br>
Donec non turpis semper, accumsan odio id, accumsan nulla. In bibendum, mauris vel dapibus accumsan, sapien urna elementum lacus, placerat molestie mauris quam non mi. Nulla facilisi. Curabitur suscipit eget orci non suscipit. Mauris ut justo neque. In eu enim tempus, malesuada tellus in, tempus odio. Phasellus ornare dui mattis, porttitor mauris eget, tempus sem. Aenean viverra placerat tempor. Curabitur bibendum id elit at imperdiet. Ut ut quam at lorem auctor vehicula non sit amet dolor. Maecenas eget dignissim erat. Sed dignissim mauris et dapibus ornare. Aliquam ultrices lacus sem, vel luctus metus pellentesque in.
</br></br>
Proin auctor libero ut ornare mattis. In aliquet urna quis felis bibendum bibendum. Aenean elementum orci sed congue bibendum. Quisque et sem et diam ullamcorper ultricies sit amet eget ex. Nunc quis semper risus. Duis vel ultricies urna. Phasellus eu pellentesque tortor, non luctus urna. Nam ut turpis id nulla facilisis efficitur. Ut quis blandit urna. Vivamus urna quam, convallis a lobortis sagittis, sagittis commodo sem. Vestibulum et elementum leo. Maecenas sodales tortor nisl, ut consectetur urna faucibus id. Aliquam erat volutpat. Vestibulum suscipit facilisis placerat. Nam eros metus, efficitur ut urna non, vulputate volutpat justo.	
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
	const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;

	//console.log({ scrollTop, scrollHeight, clientHeight });
	return scrollTop / (scrollHeight - clientHeight) * 100;
};

// Streams
const scroll$ = fromEvent(document, 'scroll');
//scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
	//map((event) => calcularPorcentajeScroll(event))
	map(calcularPorcentajeScroll),
	tap(console.log)
);

progress$.subscribe((porcentaje) => {
	//console.log('porcentaje', porcentaje);
	progressBar.style.width = `${porcentaje}%`;
});
