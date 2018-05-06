var drawGraphDou = function(dataDou){
  var ctx = document.getElementById('graphDou').getContext('2d');
  var datas = {
    labels: dataDou[0],
    datasets: [{
      backgroundColor: ["rgba(200,20,20,0.3)","rgba(20,200,20,0.3)","rgba(20,20,200,0.3)"],
      hoverBackgroundColor: ["rgba(250,20,20,0.3)","rgba(20,250,20,0.3)","rgba(20,20,250,0.3)"],
      data: dataDou[1]
    }]
  };
  var config = {
    type: 'doughnut',
    data: datas
  };
  var myChart = new Chart(ctx, config);
};


var drawGraphLine = function(dataLine){
  var ctx = document.getElementById('graphLine').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: { labels: dataLine[0],
    datasets: [{ label:'気温', data:dataLine[1] },
               { label:'湿度', data:dataLine[2] }]
    }
  });
};


var drawGraphBar = function(dataBar){
  var ctx = document.getElementById('graphBar').getContext('2d');
  // 棒1
  var data1 = { 
    label:'今日', 
    data:dataBar[1],
    backgroundColor: "#DE4E33",
    borderColor: "#DE4E33",
    pointHoverBackgroundColor: "#DE4E33",
    pointHoverBorderColor: "#DE4E33",
  };
  // 棒2
  var data2 = {
    label:'昨日',
    data:dataBar[2],
    backgroundColor: "#97DBF2",
    borderColor: "#97DBF2",
    pointHoverBackgroundColor: "#97DBF2",
    pointHoverBorderColor: "#97DBF2",
  }
  // ラベル(横軸)
  var label = dataBar[0];
  // x軸, y軸の設定
  var xAxes = [{ 
    gridLines:{
      color: "#5f5f5f",
    },
    ticks: {
      fontColor: "#aaa",
      fontSize: 15,
    }
  }]
  var yAxes = [{ 
    gridLines:{
      color: "#5f5f5f",
    },
    ticks: {
      fontColor: "#aaa",
      fontSize: 15,
    }
  }]
  var scales = {xAxes, yAxes};
  // グラフ全体の設定
  var option = {scales};
  // データの設定
  var config = {
    type: 'bar', // グラフの種類（棒グラフを指定）
    data: { labels: label, datasets: [data1, data2]},
    options: option,
    
  }
  var myChart = new Chart(ctx, config);

};


window.onload=function () {
    var dataDou = [['A', 'B', 'C'],
                [200, 100, 50]]
    drawGraphDou(dataDou);

    var dataLine = [['12:00', '13:00', '14:00', '15:00', '16:00'],
                [22, 23, 21, 20, 19],
                [55, 50, 45, 43, 42]]
    drawGraphLine(dataLine);

    var dataBar = [['12:00', '13:00', '14:00', '15:00', '16:00'],
                [22, 23, 21, 20, 19],
                [25, 23, 25, 23, 22]]
    drawGraphBar(dataBar);
};
