(function (){
  var myEchart = echarts.init(document.querySelector('.bar .chart'))
  var option = {
    color: ['#d14a61'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '0%',
        right: '4%',
        top:'10px',
        bottom: '0%',
        containLabel: true
    },
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
        }
    ],
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
})();