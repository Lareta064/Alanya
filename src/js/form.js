const formItems = document.querySelectorAll('.form-item');
if (formItems.length >0){
	for (item of formItems){
		const inputEl = item.querySelector('.form-input');
		const plhEl = item.querySelector('.fake-placeholder');
		const textEl = item.querySelector('p');
		if (plhEl){
			if (inputEl.classList.contains('disable')){
				if (inputEl.value.length>0){
					plhEl.classList.add('active');
				}
			}
			inputEl.addEventListener('focus',()=>{
				inputEl.classList.add('valid');
				plhEl.classList.add('active');
			});
			inputEl.addEventListener('blur', () => {
				
				if (inputEl.value.length == 0){
					
					inputEl.classList.remove('valid');
					plhEl.classList.remove('active');
					
				}
				
			});
		}
	}
}