var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (xhr.readyState == 4 && xhr.status == 200) {
		var body = document.getElementsByTagName('body')[0];
		body.innerText = xhr.responseText;
	}
};
xhr.open('GET', 'exercises.json', true);
xhr.send();
