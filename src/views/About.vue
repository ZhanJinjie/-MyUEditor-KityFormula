<template>
  <div class="about">
    <h1>This is an about page</h1>
    <vue-ueditor-wrap 
    :config="editorConfig" 
    v-model="msg" 
    @ready="ready"
    :destroy="true"
    ></vue-ueditor-wrap>
    <button @click="getContext()">获取内容</button>
  </div>
</template>

<script>
export default {
  name:'Editor',
  components:{
  },
  data(){
    return{
      // msg: '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',
      msg: '<h2>Vue + UEditor + v-model双向绑定</h2>',
      editorConfig:{
        // 你的UEditor资源存放的路径,相对于打包后的index.html
        UEDITOR_HOME_URL: "/UEditor/",
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！部署在国外的服务器，如果无法访问，请自备梯子）
        serverUrl: 'http://35.201.165.105:8000/controller.php',

        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 300,
        // 初始容器宽度
        initialFrameWidth: "80%",
        // 关闭自动保存
        enableAutoSave: false,
        // 自定义工具栏，需要额外选项可以参考ueditor.config.js
        toolbars: [
          // [
          //   "fullscreen",
          //   "source",
          //   "|",
          //   "bold",
          //   "italic",
          //   "underline",
          //   "|",
          //   "fontsize",
          //   "fontfamily",
          //   "|",
          //   "preview",
          //   "|",
          //   "justifyleft",
          //   "justifycenter",
          //   "justifyright",
          //   "justifyjustify",
          //   "|",
          //   "kityformula"
          // ]
              [
        'anchor', //锚点
        'undo', //撤销
        'redo', //重做
        'bold', //加粗
        'indent', //首行缩进
        'snapscreen', //截图
        'italic', //斜体
        'underline', //下划线
        'strikethrough', //删除线
        'subscript', //下标
        'fontborder', //字符边框
        'superscript', //上标
        'formatmatch', //格式刷
        'source', //源代码
        'blockquote', //引用
        'pasteplain', //纯文本粘贴模式
        'selectall', //全选
        'print', //打印
        'preview', //预览
        'horizontal', //分隔线
        'removeformat', //清除格式
        'time', //时间
        'date', //日期
        'unlink', //取消链接
        'insertrow', //前插入行
        'insertcol', //前插入列
        'mergeright', //右合并单元格
        'mergedown', //下合并单元格
        'deleterow', //删除行
        'deletecol', //删除列
        'splittorows', //拆分成行
        'splittocols', //拆分成列
        'splittocells', //完全拆分单元格
        'deletecaption', //删除表格标题
        'inserttitle', //插入标题
        'mergecells', //合并多个单元格
        'deletetable', //删除表格
        'cleardoc', //清空文档
        'insertparagraphbeforetable', //"表格前插入行"
        'insertcode', //代码语言
        'fontfamily', //字体
        'fontsize', //字号
        'paragraph', //段落格式
        'simpleupload', //单图上传
        'insertimage', //多图上传
        'edittable', //表格属性
        'edittd', //单元格属性
        'link', //超链接
        'emotion', //表情
        'spechars', //特殊字符
        'searchreplace', //查询替换
        'map', //Baidu地图
        'gmap', //Google地图
        'insertvideo', //视频
        'help', //帮助
        'justifyleft', //居左对齐
        'justifyright', //居右对齐
        'justifycenter', //居中对齐
        'justifyjustify', //两端对齐
        'forecolor', //字体颜色
        'backcolor', //背景色
        'insertorderedlist', //有序列表
        'insertunorderedlist', //无序列表
        'fullscreen', //全屏
        'directionalityltr', //从左向右输入
        'directionalityrtl', //从右向左输入
        'rowspacingtop', //段前距
        'rowspacingbottom', //段后距
        'pagebreak', //分页
        'insertframe', //插入Iframe
        'imagenone', //默认
        'imageleft', //左浮动
        'imageright', //右浮动
        'attachment', //附件
        'imagecenter', //居中
        'wordimage', //图片转存
        'lineheight', //行间距
        'edittip ', //编辑提示
        'customstyle', //自定义标题
        'autotypeset', //自动排版
        'webapp', //百度应用
        'touppercase', //字母大写
        'tolowercase', //字母小写
        'background', //背景
        'template', //模板
        'scrawl', //涂鸦
        'music', //音乐
        'inserttable', //插入表格
        'drafts', // 从草稿箱加载
        'charts', // 图表
        "|",
        "kityformula", // 数学公式插件
    ]
        ]
      },
      ue: null,
    }
  },
  methods: {
  ready (editorInstance) {
    console.log(`编辑器实例${editorInstance.key}: `, editorInstance)
    this.ue = editorInstance;
  },
  getContext() {
    console.log('=============this.msg=======================');
    console.log(this.msg);
    console.log('===============获取纯文本内容=====================');
    console.log(this.ue.getContentTxt());
    console.log('===============获取保留格式的文本内容=====================');
    console.log(this.ue.getPlainTxt());
  }
}
  
  
}
</script>
