/* 就业情况 */
(function (){
  /* echarts 实列 */
  var myEchart = echarts.init(document.querySelector('.bar .chart'))
  /* 配置项与数据 */
  var option = {
    // 柱子颜色
    color: ['#d14a61'],
    // 提示信息
    tooltip: {
        trigger: 'axis', // 触发条件
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    // 表格位置
    grid: {
        left: '0%',
        right: '4%',
        top:'10px',
        bottom: '0%',
        containLabel: true // 刻度
    },
    /* x 轴 */
    xAxis: [
        {
            type: 'category', 
            data: ['旅游', '游戏', '电商', '金融', '人工智能','传统行业'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel:{
              color: 'rgba(255,255,255,0.6)',
              fontSize:'12'
            },
            axisLine:{
              lineStyle:{
                color:'rgba(255,255,255,0.2)'
              }
            },
            axisTick: {
              show: false
            }
        }
    ],
    /* y 轴 */
    yAxis: [
        {
            type: 'value',
            axisLabel:{
              color: 'rgba(255,255,255,0.6)',
              fontSize:'12'
            },
            axisLine:{
              lineStyle: {
                color:'rgba(255,255,255,0.2)',
                width:'2'
              }
            },
            splitLine: {
              lineStyle:{
                color:'rgba(255,255,255,0.1)'
              }
            }
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [200,600, 1500, 600, 800, 500],
            /* 修改柱子 */
            barWidth: '40%',
            itemStyle: {
              barBorderRadius: 5
            }
        },{
          name:'行业情况',
          type:'line',
          data: [200,600, 1500, 600, 800, 500],
          color:'#5793f3'
        }
    ]
  };
  myEchart.setOption(option)
  /* 监听页面大小变化 */
  window.addEventListener('resize',function (){
    myEchart.resize() // 触发ecarts图变化
  })
})();

/* 技术栈 */
(function (){
  var myEchart = echarts.init(document.querySelector('.bar2 .chart'))
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6",'#ffeb7b','#9cda6e'];
  var option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        type: 'category',
        data: ['HTML', 'CSS', 'JavaScript','Jquery', 'VUE', 'React', 'Node'],
        /* 轴线 */
        axisLine: {
          show:false
        },
        /* 刻度 */
        axisTick: {
          show: false
        },
        /* 轴线上文字颜色 */
        axisLabel: {
          color: '#fff'
        },
        /* 反转数据 */
        inverse: true
    },{
      data: ['100','100','100','100','100','100','100'],
      /* 轴线 */
      axisLine: {
        show:false
      },
      /* 刻度 */
      axisTick: {
        show: false
      },
      /* 轴线上文字颜色 */
      axisLabel: {
        fontSize:12,
        color: '#fff'
      },
      /* 反转数据 */
      inverse: true
    }
  ],
    series: [
      {
        name: '掌握情况',
        type: 'bar',
        data: [95, 90, 90, 80, 90, 40, 80],
        yAxisIndex: 0,
        /* 柱子之间的距离 */
        barCategoryGap: 50,
        /* 柱子宽度 */
        barWidth: 10,
        /* 柱子内文字 */
        label: {
          show: true,
          position:'inside',
          formatter: "{c}%"
        },
        itemStyle: {
          barBorderRadius: 15,
          color: function (params) {
            // console.log(params)
            // 对象里有个 dataIndex 是数组的 index
            return myColor[params.dataIndex]
          }
        }
      },
      {
          name: '总体范围',
          type: 'bar',
          barCategoryGap: 50,
          barWidth: 15,
          itemStyle: {
            color: 'none',
            borderColor:'#00c1de',
            borderWidth: 3,
            barBorderRadius: 15
          },
          yAxisIndex: 1,
          data: [100, 100, 100, 100, 100, 100, 100]
      }
    ]
  };
  myEchart.setOption(option)
  /* 监听页面大小变化 */
  window.addEventListener('resize',function (){
    myEchart.resize() // 触发ecarts图变化
  })

})();

/* 人员变化 */
(function (){
  var myEchart = echarts.init(document.querySelector('.line .chart'))
  var yearData = [{
    year:'2020',
    data: [
      [24,40,101,123,90,239,210,230,120,230,210,120],
      [40,300,180,191,330,210,230,180,230,210,120,79]
    ]
  },{
    year:'2021',
    data: [
      [134,175,112,197,121,67,98,21,43,64,76,38],
      [142,131,165,213,178,21,82,64,42,60,19,34]
    ]
  }]
  var option = {
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        right: '10%',
        textStyle: {
          color:'#3748aa'
        }
    },
    grid: {
      top:'20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,
      borderColor:'#012f4a',
      containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月','', '3月','', '5月','', '7月','', '9月','', '11月',''],
        axisLabel:{
          color:'rgba(255,255,255,0.6)'
        },
        axisTick: {
          show:false
        },
        axisLine: {
          show: false
        }
    },
    yAxis: {
        type: 'value',
        axisLabel:{
          color:'rgba(255,255,255,0.6)'
        },
        splitLine: {
          lineStyle:{
            color:'rgba(255,255,255,0.1)'
          }
        },
        axisTick: {
          show:false
        }
    },
    series: [
        {
            name: '新增游客',
            type: 'line',
            stack: '新增',
            data: yearData[0].data[0],
            /* 圆滑 */
            smooth: true
        },
        {
            name: '游客流动',
            type: 'line',
            stack: '总量',
            data: yearData[0].data[1],
            smooth: true
        }
    ]
  };
  myEchart.setOption(option)
  window.addEventListener('resize',function (){
    myEchart.resize()
  })
  $('.line h2').on('click','a',function(){
    var obj = yearData[$(this).index()]
    for(let i=0; i<option.series.length;i++){
      option.series[i].data = obj.data[i]
    }
    myEchart.setOption(option)
    console.log($(this).index())
  })

})();

/* 播放量 */
(function (){
  var myEchart = echarts.init(document.querySelector('.line2 .chart'))

  var option = {
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['播放量', '转发量'],
        textStyle: {
          color: 'rgba(255,255,255,0.6)'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: 'rgba(255,255,255,0.6)',
                fontSize: 12
              }
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.2)'
              }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: {
              show:false
            },
            axisLabel: {
              textStyle: {
                color: 'rgba(255,255,255,0.6)',
                fontSize: 12
              }
            },
            splitLine: {
              lineStyle: {
                color:'rgba(255,255,255,0.1)'
              }
            }
        }
    ],
    series: [
        {
            name: '播放量',
            type: 'line',
            data: [ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
            /* 圆滑 */
            smooth: true,
            lineStyle: {
              color: '#0184d5',
              width: 2
            },
             // 填充区域
          areaStyle: {
            // 渐变色，只需要复制即可
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
          },
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          itemStyle: {
            color: '#0184d5',
            borderColor: 'rgba(221,220,107,0.1)',
            borderWidth: 12
          }
        },
        {
            name: '转发量',
            type: 'line',
               // 填充区域
          areaStyle: {
            // 渐变色，只需要复制即可
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
          },
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          itemStyle: {
            color: '#00d887',
            borderColor: 'rgba(221,220,107,0.1)',
            borderWidth: 12
          },
          data: [ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20, 140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20],
            smooth: true
        }
    ]
  };
  myEchart.setOption(option)
  window.addEventListener('resize',function (){
    myEchart.resize()
  })

})();

/* 程序员年龄分部 */
(function (){
  var myEchart = echarts.init(document.querySelector('.pie .chart'))

  var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        bottom: '0%',
        /* 小图标设置 */
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color:'rgba(255,255,255,0.5)',
          fontSize: '12'
        },
        data: ['20岁以下', '20岁-29岁', '30岁-39岁', '40岁-49岁', '50岁以上']
    },
    series: [
        {
            name: '程序员年龄统计',
            type: 'pie',
            /* 大小，第一个参数，里面的圈，第二参数，外圈 */
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            /* 图形上的文字 */
            label: {
                show: false,
                position: 'center'
            },
            /* 内圈里文字设置 */
            emphasis: {
                label: {
                    show: true,
                    fontSize: '18',
                    fontWeight: 'bold'
                }
            },
            /* 连接图形和文字的线 */
            labelLine: {
                show: false
            },
            data: [
                {value: 5, name: '20岁以下'},
                {value: 70, name: '20岁-29岁',itemStyle:{color:'#78bb98'}},
                {value: 20, name: '30岁-39岁'},
                {value: 4, name: '40岁-49岁'},
                {value: 1, name: '50岁以上'}
            ]
        }
    ]
};

  myEchart.setOption(option)

  window.addEventListener('resize', function (){
    myEchart.resize()
  })
})();


/* 地区分部 */
(function (){
  var myEchart = echarts.init(document.querySelector('.pie2 .chart'))

  var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
        top: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    series: [
        {
            name: '面积模式',
            type: 'pie',
            radius: [10, 100],
            center: ['50%', '50%'],
            roseType: 'area',
            color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
            data: [
                {value: 50, name: '湖北'},
                {value: 40, name: '四川'},
                {value: 15, name: '浙江'},
                {value: 25, name: '北京'},
                {value: 20, name: '上海'},
                {value: 35, name: '云南'},
                {value: 30, name: '河北'},
                {value: 35, name: '江苏'}
            ]
        }
    ]
  };
  myEchart.setOption(option)

  window.addEventListener('resize',function() {
    myEchart.resize()
  })
})();