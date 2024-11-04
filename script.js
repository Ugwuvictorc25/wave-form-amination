const formControlLabels = document.querySelectorAll(".form-control label");

formControlLabels.forEach((label) => {
	label.innerHTML = label.innerText
		.split("")
		.map((letter, indx) => `<span style="transition-delay:${indx * 50}ms">${letter}</span>`)
		.join("");
});
