# weather-website
## icon contribute: https://www.flaticon.com/search?author_id=1&style_id=1&type=standard&word=weather
目前我做了兩個頁面
1. Home
    1)右側card1：每隔一小時的溫度＋天氣狀況。https://opendata.cwa.gov.tw/dataset/forecast/F-D0047-089。api：https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=rdec-key-123-45678-011121314 （規律是第一天從 00:00 到第二天 12:00 為止 每 1 小時一筆溫度，第二天 15:00 開始變成 每 3 小時一筆（15、18、21、第三天 00、03、06…））
    2)右側card2：今天最高溫最低溫圖示，包含Wx(天氣現象)、CI(舒適度)、PoP(降雨機率)、MaxT(最高溫度)、MinT(最低溫度)。api：https://opendata.cwa.gov.tw/dataset/forecast/F-C0032-001。api：https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=rdec-key-123-45678-011121314。
    3)左側：每10分鍾的現在氣溫。https://opendata.cwa.gov.tw/dataset/observation/O-A0003-001。api：https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=rdec-key-123-45678-011121314
2. Forcast：未來七日的天氣預報。https://opendata.cwa.gov.tw/dataset/forecast/F-D0047-091。api：https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=rdec-key-123-45678-011121314。