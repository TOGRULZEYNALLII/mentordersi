// const { text } = require("body-parser");

const toggleTheme = document.querySelector('#toggleTheme');
const body = document.querySelector('body');
const clearButton = document.querySelector('#clearBtn');
const textArea = document.querySelector('#note');
const saveButton = document.querySelector('#saveBtn');
const p = document.querySelector('.status');
const status = document.querySelector('#status');

textArea.value = "";






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


clearButton.addEventListener('click', async () => {
  textArea.value = "";
  try {
    // Bütün postları çək
    const getRes = await fetch('http://localhost:3001/posts');
    const posts = await getRes.json();

    // Hər bir post üçün ayrı DELETE göndər
    for (let post of posts) {
      await fetch(`http://localhost:3001/posts/${post.id}`, {
        method: 'DELETE',
      });
    }

    setTimeout(() => {
      p.textContent = 'Note cleared successfully!';
    }, 2000);
  } catch (error) {
    p.textContent = 'Failed to clear note!';
    console.error(error);
  }
});


saveButton.addEventListener('click', async() => {
    // const text = textArea.value;
    // localStorage.setItem('note', text);
    // if(p.classList.contains('status-active')) {
    //     p.classList.remove('status-active');
    // }
    // p.classList.add('status-active');
    // p.textContent = 'Note saved successfully!';
    // setTimeout(() => {
    //     p.classList.remove('status-active');
    // }, 2000);
    // let savedattime= new Date().toLocaleTimeString();
    // localStorage.setItem('savedattime', savedattime);
    // status.textContent = `Last saved at: ${savedattime}`;
   const dataformat = {
       title: "Notes",
       body: textArea.value,
       time: new Date().toLocaleTimeString(),
       theme: localStorage.getItem('theme') || 'light'
       
   };
    const response = await fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataformat)
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

});




async function fetchData() {
      const response = await fetch('http://localhost:3001/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        data.forEach((item) => {
            if (item.title === "Notes") {
                textArea.value += ` ${item.body}`;
            }
        });
        theme = data[data.length-1].theme ? data[data.length-1].theme : 'light';
        status.textContent = `Last saved at: ${data[data.length - 1].time}`;
}
fetchData();



