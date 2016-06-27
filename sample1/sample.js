function getData() {
  var name = [{name: "方案名稱", data: [
    "中國信託企業包班", "捷安特企業包班", "中信信用卡部企業包班",
    "NIKE Tight Night_Cycle/Barre", "NIKE Sports Marketing 主管包班", "NIKE 大中華區員工包班",
    "美麗佳人完美實驗室_Cycle", "名人陪你初體驗_Cycle/Barre", "One Plus 一起愛運動 - 1 Free Class",
    "NTC 專班_Cycle/Barre", "NIKE 大中華區主管包班_Cycle/Barre", "NIKE 選手春酒 - 1Free Class"
  ]}];
  var radius = [{name: "報名人數", data: [
    42, 48, 61, 44, 7, 19, 27, 42, 11, 0, 0, 48
  ]}]
  var x = [{name: "出席率", data: [
    100, 93.8, 63.93, 90.91, 57.14, 100, 96.30, 0, 90.91, 0, 0, 93.8
  ]}]
  var y = [{name: "購買率", data: [
    2.38, 42.22, 20.51, 22.1, 0, 0, 15.38, 0, 0, 0, 0, 4.44
  ]}]
  return {name: name, radius: radius, x: x, y: y};
}

plotdb.load('qsp.plotdb.json', function(chart) {
  chart2 = chart.clone();
  chart2.config({yCriteria: 20, xCriteria: 20});
  chart2.data(getData);
  chart2.attach(document.getElementById("box3"));
}); /* plotdb.load */

function calendarData() {
  return {
    date: [{name: "日期", data: [
      "2016/2/1", "2016/2/2", "2016/2/3", "2016/2/4", "2016/2/5", "2016/2/6",
      "2016/2/7", "2016/2/8", "2016/2/9", "2016/2/10", "2016/2/11", "2016/2/12",
      "2016/2/13", "2016/2/14", "2016/2/15", "2016/2/16", "2016/2/17", "2016/2/18",
      "2016/2/19", "2016/2/20", "2016/2/21", "2016/2/22", "2016/2/23", "2016/2/24",
      "2016/2/25", "2016/2/26", "2016/2/27", "2016/2/28", "2016/2/29", "2016/3/1",
    ]}],
    value: [{name: "一年會籍12堂/月(SY)", data: [
      0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0,
      0, 0, 1, 1, 1, 4, 0, 0, 0, 1, 0,
      0, 0, 0, 2, 0, 0, 0, 0, 
    ]}]
  };
}

plotdb.load('heatmap.plotdb.json', function(chart) {
  chart.data(calendarData);
  chart.attach(document.getElementById("box1"));
});

d3.csv("sales.csv", function(ret) {
  function flowerData() {
    var start =    [{name: "開始日期", data: ret.map(function(d,i) { return d["開始"]; }) }];
    var end =      [{name: "結束日期", data: ret.map(function(d,i) { return d["結束"]; }) }];
    var size =     [{name: "金額",     data: ret.map(function(d,i) { return parseInt(d["金額"]); }) }];
    var category = [{name: "業務名",   data: ret.map(function(d,i) { return d["業務名"]; }) }];
    return {start: start, end: end, size: size, category: category};
  }
  plotdb.load('flowers.plotdb.json', function(chart) {
    chart.config({unit: "month"}); /* one of: day, week, month */
    chart.data(flowerData);
    chart.attach(document.getElementById("box2"));
  });
});
