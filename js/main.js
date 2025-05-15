const itemProject = document.querySelectorAll('.item-project')

itemProject.forEach(item => {
	item.addEventListener('click', () => {
		item.classList.toggle('active')
	})
})
