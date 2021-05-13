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
