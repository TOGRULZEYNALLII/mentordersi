const toggleTheme = document.querySelector('#toggleTheme');
const body = document.querySelector('body');
const clearButton = document.querySelector('#clearBtn');
const textArea = document.querySelector('#note');
const saveButton = document.querySelector('#saveBtn');
const p = document.querySelector('.status');
const status = document.querySelector('#status');




localStorage.getItem('note') && (textArea.value = localStorage.getItem('note'));




 (status.textContent = `Last saved at: ${localStorage.getItem('savedattime')}`);
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
}else{
    body.classList.add('light');
}
if (localStorage.getItem('theme') === 'dark') {
    toggleTheme.classList.add('dark');
}

toggleTheme.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        localStorage.setItem('theme',"light")
    }else{
        body.classList.add('dark');
        localStorage.setItem('theme',"dark")

    }
});


clearButton.addEventListener('click', () => {
  textArea.value = "";
  setTimeout(() => {
    p.textContent = 'Note cleared successfully!';
  }, 2000);
});

saveButton.addEventListener('click', () => {
    const text = textArea.value;
    localStorage.setItem('note', text);
    if(p.classList.contains('status-active')) {
        p.classList.remove('status-active');
    }
    p.classList.add('status-active');
    p.textContent = 'Note saved successfully!';
    setTimeout(() => {
        p.classList.remove('status-active');
    }, 2000);
    let savedattime= new Date().toLocaleTimeString();
    localStorage.setItem('savedattime', savedattime);
    status.textContent = `Last saved at: ${savedattime}`;
});


