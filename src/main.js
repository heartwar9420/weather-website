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
