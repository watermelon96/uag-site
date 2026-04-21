# UAG 生存遊戲團體介紹網頁

一個以「軍事風 / 迷彩暗色系」為主題的靜態介紹網頁,純 HTML / CSS / JS,可直接部署到 GitHub Pages。

## 專案結構

```
UAG介紹網頁/
├── index.html              # 主頁面
├── css/
│   └── style.css           # 主樣式表(含響應式)
├── js/
│   └── main.js             # 互動腳本(導覽、動畫、計數器)
├── assets/
│   └── images/             # 放置圖片資源(成員照片、場地照等)
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages 自動部署
├── .gitignore
└── README.md
```

## 區塊總覽

1. **Hero 首頁** — 大標題、團體口號、CTA 按鈕
2. **關於 UAG** — 團體介紹文字 + 數字統計卡
3. **活動時間軸** — 近期 / 過往活動,含日期、地點、標籤
4. **核心成員** — 成員卡片網格,含角色、簡介、裝備標籤
5. **加入我們** — Facebook / Discord / Instagram / Email 連結

## 本地開發

不需要任何編譯工具,直接用瀏覽器打開 `index.html` 即可。

如果希望有熱重載,可在專案根目錄執行:

```bash
# Python 3
python -m http.server 8000

# 或 Node.js
npx serve .
```

然後瀏覽 http://localhost:8000

## 部署到 GitHub Pages

### 步驟 1:建立 GitHub Repository

1. 在 GitHub 建立一個新的 repository(例如 `uag-site`)
2. 在本地專案目錄執行:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<你的帳號>/<repo名稱>.git
git push -u origin main
```

### 步驟 2:開啟 GitHub Pages

1. 進入 repo 的 **Settings** → **Pages**
2. 在 **Source** 選擇 **GitHub Actions**
3. 推送到 `main` 分支後,`.github/workflows/deploy.yml` 會自動部署
4. 幾分鐘後可在 `https://<你的帳號>.github.io/<repo名稱>/` 看到網頁

> 💡 如果 repo 名稱是 `<你的帳號>.github.io`,網址會是 `https://<你的帳號>.github.io/`

## 自訂內容

### 修改文字 / 活動資訊

所有文字內容都在 `index.html` 中,用編輯器搜尋關鍵字直接修改即可。

### 換成員照片

1. 把照片放到 `assets/images/`(建議正方形,500×500px 以上)
2. 在 `index.html` 找到 `.member-photo` 區塊,把:

```html
<div class="member-photo">
    <div class="photo-placeholder">👤</div>
</div>
```

替換成:

```html
<div class="member-photo">
    <img src="assets/images/alpha.jpg" alt="Alpha">
</div>
```

並在 `css/style.css` 的 `.member-photo` 加上:

```css
.member-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

### 調整配色

在 `css/style.css` 最上方的 `:root` 區塊修改 CSS 變數:

```css
:root {
    --color-accent: #6b8e23;        /* 主色(軍綠) */
    --color-accent-bright: #9acd32; /* 亮色強調 */
    --color-bg: #0d1117;            /* 背景 */
    /* ... */
}
```

### 新增活動

在 `index.html` 找到 `<div class="timeline">`,複製一個 `.timeline-item` 區塊,修改日期、標題、地點即可。`badge-upcoming` 是即將舉辦,`badge-done` 是已完成。

### 社群連結

在 `index.html` 搜尋 `https://www.facebook.com/`、`https://discord.com/`、`https://www.instagram.com/`、`mailto:contact@example.com`,改成實際連結。

## 擴充建議

- **加入活動報名表單** — 可使用 Google Forms 嵌入,或用 Formspree 接表單
- **加入圖庫 / 相簿頁** — 新增 `gallery.html`,共用 `style.css`
- **SEO 優化** — 在 `<head>` 加入 Open Graph meta、favicon
- **效能** — 圖片建議用 WebP 格式並壓縮到 200KB 以下
- **分析工具** — 加入 Google Analytics 或 Plausible

## 瀏覽器支援

支援所有主流現代瀏覽器(Chrome、Firefox、Safari、Edge 最新兩個版本)。使用到的特性:CSS Grid、Flexbox、CSS Variables、IntersectionObserver、backdrop-filter。

## 授權

專案骨架可自由修改使用。
