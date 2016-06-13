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

  chart.config({yCriteria: 20, xCriteria: 20});
  chart.data(getData);
  chart.attach(document.getElementById("box1"));

  chart2 = chart.clone();
  chart2.config({yCriteria: 20, xCriteria: 20});
  chart2.data(getData);
  chart2.attach(document.getElementById("box2"));

  chart3 = chart.clone();
  chart3.config({yCriteria: 20, xCriteria: 20});
  chart3.data(getData);
  chart3.attach(document.getElementById("box3"));

  var box = document.body.getBoundingClientRect();
  /*
  d3.select("#box1")
    .style({width: box.width})
    .transition().duration(2000)
    .style({width: box.width / 2})
    .tween("resize", function(){ return function(t) { chart.resize(); chart.render(); }})
    .transition().duration(2000)
    .style({width: box.width})
    .tween("resize", function(){ return function(t) { chart.resize(); chart.render(); }});
  */
}); /* plotdb.load */
