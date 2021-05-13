function textBold() {
	if (window.getSelection().anchorNode.parentNode.id == "uneditable") return;
	var selection = window.getSelection().getRangeAt(0);
	var newNode = document.createElement("strong");
	selection.surroundContents(newNode);
}
function textItalic() {
	if (window.getSelection().anchorNode.parentNode.id == "uneditable") return;
	var selection = window.getSelection().getRangeAt(0);
	var newNode = document.createElement("em");
	selection.surroundContents(newNode);
}
function textPointer() {
	if (window.getSelection().anchorNode.parentNode.id == "uneditable") return;
	var selection = window.getSelection().getRangeAt(0);
	var newNode = document.createElement("li");
	selection.surroundContents(newNode);
}

function save() {
	var xhttp = new XMLHttpRequest();
	var note = document.getElementById("myiframe").innerHTML;
	console.log(note, "note");
	xhttp.open("POST", "http://localhost:3000/note", true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	xhttp.onload = function () {
		if (xhttp.status === 200) {
			var userInfo = JSON.parse(xhttp.responseText);
			console.log(userInfo, "userinfo");
		}
	};
	xhttp.send(
		JSON.stringify({
			note: note,
		})
	);
}

function load() {
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "http://localhost:3000/note", true);
	xhttp.onload = function () {
		if (xhttp.status === 200) {
			var response = JSON.parse(xhttp.responseText);
			console.log(response, "res");
			document.getElementById("myiframe").innerHTML = response.note;
		} else {
			console.log("error");
		}
	};
	xhttp.send();
}
