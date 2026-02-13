:root {
    --bg-color: #0b0f19;
    --sidebar-color: #111827;
    --accent-color: #38bdf8; /* クリスタル・ブルー */
    --text-color: #e2e8f0;
    --card-bg: rgba(30, 41, 59, 0.8);
    --border-color: rgba(56, 189, 248, 0.3);
    --header-height: 60px; /* スマホ用ヘッダーの高さ */
}

body {
    margin: 0;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    overflow: hidden; /* PCではスクロールバーを二重に出さない */
}

/* --- レイアウト構造 --- */
.app-container {
    display: flex;
    height: 100vh;
    position: relative;
}

/* --- サイドバー (PC) --- */
.sidebar {
    width: 260px;
    background-color: var(--sidebar-color);
    border-right: 1px solid var(--border-color);
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    z-index: 1000;
    transition: transform 0.3s ease;
    flex-shrink: 0; /* サイドバーが潰れるのを防ぐ */
    overflow-y: auto; /* メニューが縦に長い場合スクロール */
}

.logo {
    font-size: 1.2rem;
    color: var(--accent-color);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 20px;
    margin-top: 0;
}
.logo span { color: #fff; }

nav ul { list-style: none; padding: 0; }
nav li { margin: 8px 0; }
nav a {
    color: var(--text-color);
    text-decoration: none;
    font-size: 0.9rem;
    transition: 0.3s;
    display: block;
    padding: 10px;
    border-radius: 4px;
}
nav a:hover {
    background: var(--border-color);
    color: var(--accent-color);
}

/* --- 全検索エリア --- */
.global-search-area {
    display: flex;
    gap: 5px;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--border-color);
}

#globalSearchInput {
    flex: 1;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border-color);
    color: #fff;
    padding: 8px;
    border-radius: 4px;
    font-size: 0.85rem;
}

.search-btn {
    background: var(--accent-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: #000;
    padding: 0 10px;
}

/* --- コンテンツエリア --- */
.content {
    flex: 1;
    padding: 40px;
    overflow-y: auto; /* コンテンツだけスクロール */
    height: 100vh;
    box-sizing: border-box;
}

.content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 10px;
    flex-wrap: wrap; /* 画面が狭い時に折り返す */
    gap: 15px;
}

.content-header h2 {
    margin: 0;
    font-size: 1.5rem;
}

#localSearchInput {
    background: var(--sidebar-color);
    border: 1px solid var(--border-color);
    color: #fff;
    padding: 8px 15px;
    border-radius: 20px;
    outline: none;
    width: 250px;
    transition: 0.3s;
}
#localSearchInput:focus {
    border-color: var(--accent-color);
    box-shadow: 0 0 8px rgba(56, 189, 248, 0.3);
}

/* --- カードデザイン --- */
.rule-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-left: 4px solid var(--accent-color);
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 8px;
    backdrop-filter: blur(5px);
    animation: fadeIn 0.5s ease;
}
.rule-card h3 {
    margin-top: 0;
    color: var(--accent-color);
    font-size: 1.1rem;
}
.rule-card p {
    line-height: 1.6;
    font-size: 0.95rem;
    white-space: pre-wrap; /* 改行を反映 */
    margin-bottom: 0;
}

/* カテゴリタグ（全検索時） */
.category-tag {
    display: inline-block;
    background: rgba(56, 189, 248, 0.2);
    color: var(--accent-color);
    font-size: 0.75rem;
    padding: 2px 8px;
    border-radius: 10px;
    margin-bottom: 8px;
    border: 1px solid var(--accent-color);
}

.welcome-msg {
    text-align: center;
    margin-top: 50px;
    color: var(--text-color);
    opacity: 0.8;
}

/* --- スマホ用パーツ（初期非表示） --- */
.mobile-header, .close-btn, .overlay {
    display: none;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* =========================================
   スマホ対応 (画面幅 768px以下)
   ========================================= */
@media screen and (max-width: 768px) {
    body {
        overflow: auto; /* スマホでは全体スクロール */
    }

    .app-container {
        flex-direction: column;
        height: auto;
        padding-top: var(--header-height);
    }

    /* スマホヘッダー */
    .mobile-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        height: var(--header-height);
        background: var(--sidebar-color);
        border-bottom: 1px solid var(--border-color);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 900;
        box-sizing: border-box;
    }
    
    #menu-toggle {
        background: none;
        border: none;
        color: var(--accent-color);
        font-size: 1.8rem;
        cursor: pointer;
    }

    .mobile-logo {
        color: #fff;
        font-weight: bold;
        letter-spacing: 1px;
    }

    /* サイドバー（スライド式） */
    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 280px;
        transform: translateX(-100%);
        box-shadow: 2px 0 10px rgba(0,0,0,0.5);
    }

    .sidebar.active {
        transform: translateX(0);
    }

    .logo {
        display: none; /* スマホサイドバー内ではロゴを隠す（ヘッダーにあるため） */
    }

    .close-btn {
        display: block;
        position: absolute;
        top: 15px;
        right: 15px;
        background: none;
        border: none;
        color: #fff;
        font-size: 2rem;
        cursor: pointer;
    }

    .overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        backdrop-filter: blur(2px);
        z-index: 950;
    }
    .overlay.active {
        display: block;
    }

    /* コンテンツ調整 */
    .content {
        padding: 20px;
        height: auto;
        overflow: visible;
    }

    .content-header {
        flex-direction: column;
        align-items: flex-start;
    }
    
    #localSearchInput {
        width: 100%;
    }
}
