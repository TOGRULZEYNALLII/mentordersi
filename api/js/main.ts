const configs = { 
    API_KEY: 'yJwx3NLHdwWnIxvVXHSp7bUyXidnqanuiHaLIeYC',
    API_URL: 'https://api.nasa.gov/planetary/apod?api_key='
}
const apiUrl = `${configs.API_URL}${configs.API_KEY}`;

async function fetchData(): Promise<any> {
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        if (!res.status || res.status !== 200 || !data) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        showData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData()

let picture = document.getElementById('picture') as HTMLImageElement;
let title = document.getElementById('title') as HTMLHeadingElement;
let explanation = document.getElementById('explanation') as HTMLParagraphElement;
let date = document.getElementById('date') as HTMLParagraphElement;

interface INasaData {
    url: string;
    title: string;
    explanation: string;
    date: string;
}

function showData(data: INasaData): void {
    picture.src = data.url;
    title.textContent = data.title;
    explanation.textContent = data.explanation;
    date.textContent = data.date;
}