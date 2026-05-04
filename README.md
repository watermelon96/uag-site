# UAG 制服系推廣俱樂部介紹網頁

Uniform Airsoft Group (U.A.G) — 以「制服 + 沉浸式生存遊戲」為主題的俱樂部介紹網頁。
純 HTML / CSS / JS,可直接部署到 GitHub Pages。

## 專案結構

```
UAG介紹網頁/
├── index.html              # 主頁面
├── css/
│   └── style.css           # 主樣式表(含響應式)
├── js/
│   └── main.js             # 互動腳本(導覽、動畫、計數器)
├── assets/
│   └── images/             # 放置圖片資源
│       ├── uag-flag.jpg    # ⚑ 俱樂部旗幟(Hero / Footer 使用)
│       └── yuna.jpg        # 🎀 看板娘尤娜形象圖
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages 自動部署
├── .gitignore
└── README.md
```

## 必備圖片

請在 `assets/images/` 放入下列兩張圖,網頁會自動顯示:

| 檔名 | 用途 | 建議規格 |
|---|---|---|
| `uag-flag.jpg` | Hero 區頂部旗幟橫幅、Footer 小圖示 | 寬高比 16:9 ~ 2:1,寬度 800px+ |
| `yuna.jpg` | 看板娘區塊主圖 | 直幅人物圖,3:4 比例 |

> 沒有放圖也沒關係——網頁會自動顯示佔位符,提示你檔案路徑。

## 區塊總覽

1. **Hero 首頁** — UAG 旗幟橫幅 + 大標題 + 俱樂部口號 + CTA 按鈕
2. **關於 UAG (01)** — 制服系推廣俱樂部介紹 + 數字統計卡
3. **看板娘 Yuna (02)** — 尤娜形象、命名由來、識別資訊
4. **活動時間軸 (03)** — 沉浸主題場次紀錄(年代制服戰)
5. **核心成員 (04)** — 社長 / 考據官 / 劇本官 / 紀錄官
6. **加入我們 (05)** — Facebook 粉專 / 社團 / Instagram / Email

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

當前配色取自 **U.A.G 旗幟** 與 **看板娘 Yuna**:

| Token | Hex | 對應 |
|---|---|---|
| `--color-accent` | `#c0392b` | 旗幟深紅(主色) |
| `--color-accent-bright` | `#e74c3c` | 鮮紅(hover/強調) |
| `--color-accent-dark` | `#7c1d1d` | 暗酒紅(陰影層次) |
| `--color-warm` | `#d4a574` | 卡其(尤娜防彈背心) |
| `--color-gold` | `#f5b942` | 琥珀金(尤娜眼睛、包帶) |
| `--color-bg` | `#0e0c0d` | 暖暗底色 |

要調整配色請修改 `css/style.css` 最上方的 `:root` 區塊。

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
