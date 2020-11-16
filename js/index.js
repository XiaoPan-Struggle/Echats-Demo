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
  var option = {
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['邮件营销', '联盟广告'],
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
            data: [120, 220, 101, 134, 90, 230, 210,600,100,200,300,100],
            /* 圆滑 */
            smooth: true
        },
        {
            name: '游客流动',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310, 134, 90, 230, 210, 500],
            smooth: true
        }
    ]
  };
  myEchart.setOption(option)
  window.addEventListener('resize',function (){
    myEchart.resize()
  })

})()