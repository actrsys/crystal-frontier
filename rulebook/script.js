let currentData = [];

function loadPage(fileName, title) {
    document.getElementById('page-title').innerText = title;
    const container = document.getElementById('data-container');
    container.innerHTML = '<p>Loading Crystal Data...</p>';

    Papa.parse(`./data/${fileName}`, {
        download: true,
        header: true,
        complete: function(results) {
            currentData = results.data;
            renderData(currentData);
        },
        error: function(err) {
            container.innerHTML = `<p style="color:red;">Error: CSVファイルの読み込みに失敗しました (${fileName})</p>`;
        }
    });
}

function renderData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = '';

    data.forEach(item => {
        // CSVの列名が「項目名」「解説」などのバリエーションに対応
        const name = item['種類・領域'] || item['項目名'] || item['用語名'] || item['能力語'] || item['能力名'] || item['処理名'] || item['カウンター名'];
        const desc = item['解説'];

        if (name && desc) {
            const card = document.createElement('div');
            card.className = 'rule-card';
            card.innerHTML = `
                <h3>${name}</h3>
                <p>${desc}</p>
            `;
            container.appendChild(card);
        }
    });
}

function filterContent() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.rule-card');

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(query) ? 'block' : 'none';
    });
}
