//在src/裡面創建config.js檔案 內容只要包含下面一行就可以
//export const CWA_API_KEY = "CWA-953B2897-2C88-45A0-85EF-0059DB66235E";
// .gitignore裡面加上 src/config.js 這串讓她不會被推到github上

// 要在js中使用 api的話要引入
// import { getCard2RenderData } from "./api.js";
// 如果是要在 例如index.html引入(應該不會 可能用js render就好) 要用下面的
// <script type="module" src="./src/main.js"></script>
// 引入渲染工具
import { renderHourlyForecast, renderDailySummary } from './render.js';

// 跳轉頁面

const homePageBtn = document.getElementById('homePageBtn');
const forecastPageBtn = document.getElementById('forecastPageBtn');

if (forecastPageBtn) {
  forecastPageBtn.addEventListener('click', () => {
    window.location.href = 'forecast.html';
  });
}

if (homePageBtn) {
  homePageBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

renderHourlyForecast();

// 假資料 (以後從 API 抓)
const fakeData = {
  ok: true,
  renderData: {
    minT: 18,
    maxT: 32,
    barLeft: '25', // 模擬算出 25%
    barWidth: '40', // 模擬算出 40%
    weather: '雷陣雨',
    comfortIndex: '悶熱',
    chanceOfRain: 60,
  },
};

// 假資料 (以後從 API 抓)
const fakeErrorData = {
  ok: false,
  error: {
    message: '無法連線到氣象資料服務，請稍後再試。',
  },
};

renderDailySummary(fakeData);
