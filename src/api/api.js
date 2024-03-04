import { renderAll } from '../index.js';

const url = 'https://veryfast.io/t/front_test_api.php';
const xhr = new XMLHttpRequest();

xhr.open('GET', url, true);

xhr.send();

xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		if (xhr.status === 200) {
			const responseData = JSON.parse(xhr.responseText).result;
			renderAll(responseData);
			console.log('Выдповыдь від сереверу:', responseData);
		} else {
			console.error(
				'Помилка при виконанні запиту. HTTP-статус:',
				xhr.status,
			);
		}
	}
};
