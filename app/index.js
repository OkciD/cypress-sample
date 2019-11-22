(() => {
	const input = document.querySelector('#input');
	const button = document.querySelector('#button');
	const list = document.querySelector('#list');

	if (!input || !button || !list) {
		throw new Error('Insufficient page content');
	}

	button.addEventListener('click', () => {
		const value = input.value;

		if (!value) {
			return;
		}

		const listItem = document.createElement('li');
		listItem.innerText = value;
		listItem.setAttribute('data-test-id', `item:${value}`);

		list.appendChild(listItem);

		input.value = '';
	});
})();
