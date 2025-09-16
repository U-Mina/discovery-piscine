const bl = document.getElementById('ballonBtn');

let size = 200;
const minSize = 200;
const maxSize = 420;
const colors = ['red', 'green', 'blue'];
let idx = 0;

function blowBallon() {
	bl.style.width = size + 'px';
	bl.style.height = size + 'px';
	bl.style.backgroundColor = colors[idx];
}

bl.addEventListener('click', () => {
	size += 10;
	idx = (idx + 1) % colors.length;

	if (size > maxSize) {
		size = minSize;
		idx = 0;
	}
	blowBallon();
});

// the hovering
bl.addEventListener('mouseleave', () => {
	size = Math.max(minSize, size - 5);
	// math.max(n1, n2): always take the bigger nbr, so it make sure never go beyond minSize

	idx = (idx - 1 + colors.length) % colors.length;
	blowBallon();
});

blowBallon();