var drawGraphDou = function(dataDou){
  var ctx = document.getElementById('graphDou').getContext('2d');
  var datas = {
    labels: dataDou[0],
    datasets: [{
      backgroundColor: ["rgba(70,130,180,1)","rgba(135,206,250,1)","rgba(192,192,192,1)"],
      hoverBackgroundColor: ["rgba(70,130,180,0.8)","rgba(135,206,250,0.8)","rgba(192,192,192,0.8)"],
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
    datasets: [{ label:'原材料費合計', data:dataLine[1],backgroundColor: "#4682b4"  },
               { label:'販売単価', data:dataLine[2],backgroundColor: "#87cefa" }]
    }
  });
};


var drawGraphBar = function(dataBar){
  var ctx = document.getElementById('graphBar').getContext('2d');
  // 棒1
  var data1 = { 
    label:'予算', 
    data:dataBar[1],
    backgroundColor: "#87cefa",
    borderColor: "#87cefa",
    pointHoverBackgroundColor: "#87cefa",
    pointHoverBorderColor: "#87cefa",
  };
  // 棒2
  var data2 = {
    label:'実績',
    data:dataBar[2],
    backgroundColor: "#4682b4",
    borderColor: "#4682b4",
    pointHoverBackgroundColor: "#4682b4",
    pointHoverBorderColor: "#4682b4",
  }
  // ラベル(横軸)
  var label = dataBar[0];
  // x軸, y軸の設定
  var xAxes = [{ 
    gridLines:{
      color: "#5f5f5f",
    },
    ticks: {
      fontSize: 12,
    }
  }]
  var yAxes = [{ 
    gridLines:{
      color: "#5f5f5f",
    },
    ticks: {
      min: 16,
      max: 32,
      stepSize: 4,
      fontSize: 12,
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

var drawGraphBar2 = function(dataBar2){
  var ctx = document.getElementById('graphBar2').getContext('2d');
  // 棒1
  var data1 = { 
    label:'販売数量', 
    data:dataBar2[1],
    backgroundColor: "#4682b4",
    borderColor: "#4682b4",
    pointHoverBackgroundColor: "#4682b4",
    pointHoverBorderColor: "#4682b4",
  };
  // ラベル(横軸)
  var label = dataBar2[0];
  // x軸, y軸の設定
  var xAxes = [{ 
    gridLines:{
      color: "#5f5f5f",
    },
    ticks: {
      fontSize: 12,
    }
  }]
  var yAxes = [{ 
    gridLines:{
      color: "#5f5f5f",
    },
    ticks: {
      min: 36,
      max: 48,
      stepSize: 3,
      fontSize: 12,
    }
  }]
  var scales = {xAxes,yAxes};
  // グラフ全体の設定
  var option = {scales};
  // データの設定
  var config = {
    type: 'bar', // グラフの種類（棒グラフを指定）
    data: { labels: label, datasets: [data1]},
    options: option,
    
  }
  var myChart = new Chart(ctx, config);

};


window.onload=function () {
    var dataDou = [['A社', 'B社', 'その他'],
                [200, 100, 50]]
    drawGraphDou(dataDou);

    var dataLine = [['17/11', '17/12', '18/01', '18/02', '18/03'],
                [22, 23, 21, 20, 19],
                [55, 50, 45, 43, 42]]
    drawGraphLine(dataLine);

    var dataBar = [['17/11', '17/12', '18/01', '18/02', '18/03'],
                [22, 23, 21, 20, 21],
                [25, 23, 25, 23, 22]]
    drawGraphBar(dataBar);
  
    var dataBar2 = [['17/11', '17/12', '18/01', '18/02', '18/03'],
                [43, 39, 44, 41, 40]]
    drawGraphBar2(dataBar2);

};
