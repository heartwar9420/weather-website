# iWeather 即時天氣動態

**網址**： https://rachell-tech.github.io/weather-website/index.html

![iWeather Main Demo](https://github.com/user-attachments/assets/3d1a2c30-a62d-4b6a-8900-0df4bd0b9979)

> 一個基於氣象局 API 的動態天氣預報平台，整合即時天氣特效與視覺化數據。

---

## 我的技術貢獻 (Technical Highlights)

在本專案中，我主要負責 **API 資料流串接**、**前端介面開發** 以及 **CSS 架構規劃**。

### 1. 響應式網頁設計 (RWD Strategy)
* **實作：** 針對不同裝置（Mobile/Desktop）規劃斷點，確保資訊卡片在手機版能流暢堆疊，在電腦版則能善用寬螢幕空間。
* **成果：** 如下圖展示，從桌面版切換至手機版時，版面佈局能自動適應。

![RWD Demo](https://github.com/user-attachments/assets/244bb34b-5d2d-4953-90e1-48bfc36da5b9)

### 2. CSS 架構模組化 (Modular CSS)
* **挑戰：** 多人協作易發生樣式衝突 (Class naming conflicts)。
* **解決：** 建立 CSS 模組化規範，將 index、forecast 與共用元件樣式拆分管理，提升團隊協作效率與代碼可維護性。

### 3. 非同步資料串接 (API Integration)
* 負責核心 `fetch` 邏輯，處理中央氣象局複雜的 JSON 資料結構，並確保使用者切換城市時，畫面能即時更新且無資料殘留。

---

## 3. 專案概念
參考 Apple Weather App 的「磨砂玻璃 (Glassmorphism)」風格，透過中央氣象局 API 取得資料並渲染。

![Reference UI](https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/71/26/fa/7126fafa-a1b6-7e28-00ef-efe833157418/iPhone-Location-1320x2868.png/460x998bb.webp)

## 4. 團隊分工 (Team)
本次開發時程僅 4 天，採全前端模式並利用 GitHub Pages 部署。

* **王竣鵬 (Me)**：API 資料串接與渲染、RWD 響應式開發、CSS 架構模組化
* **映叡**：UI/UX 藍圖、Git 管理、功能整合
* **佳弘**：API 資料清洗、Datetime 邏輯
* **元鴻**：天氣特效渲染、模擬器開發

## 5. 主要功能與技術
**使用技術：** HTML, CSS, JavaScript, tsParticles, HTML Canvas

### 獨家功能：天氣模擬器與動態背景
為了方便開發與展示，團隊開發了一套模擬器，可強制切換背景特效（雷雨、下雪、晴天）。

![Weather Simulator](https://github.com/user-attachments/assets/12fbd078-7c17-42f3-a08f-f0c45dc41bea)

### 詳細功能列表
| 版面位置 | 功能說明 |
| :--- | :--- |
| **左側** | 顯示 10 分鐘內即時溫度及天氣狀況。 |
| **右上** | 未來 5 小時逐時天氣預報。 |
| **右下** | 36 小時內天氣摘要。 |
| **城市選單** | 切換城市後，同步更新所有卡片資訊。 |
| **定位功能** | 利用畢氏定理計算最近觀測站，提供精準在地天氣。 |

## 6. 參考連結
* [Dribbble UI Design](https://dribbble.com/shots/19740043-Daily-UI-037-Weather)
* [Dropdown Menu CodePen](https://codepen.io/bogdansandu/pen/Pwzbbwa)
