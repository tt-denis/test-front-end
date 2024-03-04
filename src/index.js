import { model } from './model.js';
import { templates } from './elements/templates.js';
import { getArrow } from './helpers/getArrow.js';

const root = document.querySelector('#root');

export function renderAll(data) {
	model.forEach((block) => {
		const toHtml = templates[block.type];

		if (toHtml) {
			root.insertAdjacentHTML('beforeend', toHtml(data, block));
		}
	});

	const buttonLink = document.querySelector('.item-list');
	const mainElement = document.getElementById('main');

	buttonLink.addEventListener(
		'click',
		(event) => {
			if (event.target.closest('.button-link')) {
				mainElement.insertAdjacentHTML('afterbegin', getArrow());
			}
		},
		{ once: true },
	);
}
