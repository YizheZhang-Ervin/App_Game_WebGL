Vue.component('eg-home', {
    data: function () {
        return {
            comments: {
                "Local": {
                    url: './static/img/js.mp4',
                    title: 'Have a nice day',
                },
                "Internet": {
                    url: 'http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/76/47/104514776/104514776-1-208.mp4?e=ig8euxZM2rNcNbKV7WdVhwdl7wdBhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1607573779&gen=playurl&os=kodobv&oi=978800370&trid=aecf3c1b794241b7832efa3c2aa7124dT&platform=html5&upsig=98d01f696d16dfbf28d61131a20ab7eb&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=524602686&orderid=0,1&logo=80000000',
                    title: '差不多姑娘',
                },
            }
        }
    },
    methods: {
        allowDrop(ev) {
            ev.preventDefault();
        },
        drag(ev) {
            ev.dataTransfer.setData("Text", ev.target.innerText);
        },
        drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("Text");
            ev.target.src = data;
        }
    },
    template: `
<div id="homeComponent">
<div class="scroll-v" style="overflow-x:hidden">

<el-row style="background-color: #2b2b2b;">
  <!-- 播放器 -->
  <el-col :span="18" class="v70 padding-all">
    <video height="100%" width="100%" controls autoplay @drop="drop(event)" @dragover="allowDrop(event)">
    </video>
  </el-col>

  <!-- 资源区 -->
  <el-col :span="6" class="v70 border-left padding-all">
    <h2 class="center">资源区</h2>
    <p class="center">使用方式:将地址拖入播放器</p>
    <el-collapse>
        <el-collapse-item :title="c.title" v-for="c in comments">
        <div @dragstart="drag(event)" draggable="true" style="word-break:break-all">{{c.url}}</div>
        </el-collapse-item>
    </el-collapse>
  </el-col>
</el-row>

<!-- 底部 -->
<footer class="space-v">
    <!-- 分割线 -->
    <el-divider content-position="center">EGGroup</el-divider>
    <!-- 底部菜单列表 -->
    <el-row class="text-center">
        <el-col :span="6">
            <ul>
                <li>专业介绍</li>
                <li>经济学基础</li>
                <li>计算机基础</li>
                <li>管理学基础</li>
            </ul>
        </el-col>
        <el-col :span="6">
            <ul>
                <li>信息系统</li>
                <li>软件开发</li>
                <li>产品设计</li>
                <li>测试运维</li>
            </ul>
        </el-col>
        <el-col :span="6">
            <ul>
                <li>信息管理</li>
                <li>数据相关</li>
                <li>管理科学</li>
                <li>情报处理</li>
            </ul>
        </el-col>
        <el-col :span="6">
            <ul>
                <li>相关方向</li>
                <li>战略咨询</li>
                <li>市场销售</li>
                <li>其他</li>
            </ul>
        </el-col>
    </el-row>
    <!-- 分割线 -->
    <el-divider></el-divider>
    <!-- 底部标签 -->
    <el-row class="text-center">
        <el-col :span="9">
            <span>©IM 2020 00000000</span>
        </el-col>
        <el-col :span="2">
            <el-avatar icon="el-icon-trophy">
            </el-avatar>

        </el-col>
        <el-col :span="2">
            <el-avatar icon="el-icon-trophy">
            </el-avatar>
        </el-col>
        <el-col :span="2">
            <el-avatar icon="el-icon-trophy">
            </el-avatar>
        </el-col>
        <el-col :span="9">
            <span>法律声明</span>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <span>网站地图</span>
        </el-col>
    </el-row>
</footer>
</div>
</div>
    `
})