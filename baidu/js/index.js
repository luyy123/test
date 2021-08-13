//*************************弹出、关闭图片搜索**************************/
//弹出
var btn = document.querySelector(".soutu-btn");
var area = document.querySelector(".soutu-state-normal");
btn.onclick = function(){
area.style.display = "block";
}
//关闭
var closeButton = document.querySelector(".soutu-close-new");
closeButton.onclick = function(){
area.style.display = "none";
}

//**********************点击弹出框外部关闭弹出框************************/
//封装
function clickoutSide(nameClass,callback){
    // 全局注册点击事件
    document.onclick = function(e){
      var box = document.getElementById('soutu_state_normal');
      //若点击元素为目标元素则返回
      //console.log(e.target.className)
      //debugger
      if(e.target.className==nameClass || e.target.className=="soutu-btn") {
        return  
      }
      if(box.contains(e.target)){
        return
      }
      //否则执行回调函数
      callback()
    }
  }
  clickoutSide('soutu-state-normal',function(){ 
      area.style.display = "none";
  })

//****************************拖动图片,文字消失*****************************/
var dropBox; 
window.onload=function(){
  dropBox = document.getElementById("soutu_drop"); 
  // 鼠标进入放置区时 
  dropBox.ondragenter = ignoreDrag; 
  // 拖动文件的鼠标指针位置放置区之上时发生 
  dropBox.ondragover = ignoreDrag; 
  dropBox.ondrop = drop; 
} 
function ignoreDrag(e){ 
  // 确保其他元素不会取得该事件 
  e.stopPropagation(); 
  e.preventDefault(); 
} 
function drop(e){ 
  e.stopPropagation(); 
  e.preventDefault(); 
  hideDiv();
  // 取得拖放进来的文件 
  var data = e.dataTransfer; 
  var files = data.files; 
  // 将其传给真正的处理文件的函数 
  var file = files[0]; 
  var reader = new FileReader(); 
  reader.onload=function(e){ 
    dropBox.style.backgroundImage = "url('"+e.target.result+"')"; 
  } 
  reader.readAsDataURL(file); 
}
function hideDiv(){
  document.getElementById("soutu_drop_tip").style.display="none";
}

/****************************点击换一换更换百度热榜*****************************/

var tpl = template(document.getElementById('tpl').innerHTML);
var array1 = [{number:1,title:'#2020东京奥运会闭幕式#',href:"https://www.baidu.com/",hot:true,num:491},{number:2,title:'阿里公布女员工被侵犯事件处理结果',hot:true,num:485}
            ,{number:3,title:'郑州确诊护士参加婚宴 流调披露',hot:false,num:475},{number:4,title:'阿里涉事男员工承认有过度亲密行为',hot:false,num:467}
            ,{number:5,title:'#巴黎八分钟#',hot:true,num:456},{number:6,title:'开始期待北京冬奥会了',hot:false,num:446}]

var array2 = [{number:7,title:'#欢迎运动健儿回家#',hot:false,num:428},{number:8,title:'6000名阿里人倡议建反性侵制度',hot:false,num:412}
            ,{number:9,title:'老人散步时被两只大白鹅攻击致残',hot:false,num:408},{number:10,title:'奥运会闭幕式首次为女子马拉松颁奖',hot:false,num:396}
            ,{number:11,title:'奥运五环上落了一只飞蛾',hot:false,num:381},{number:12,title:'哈尔滨一办公楼坍塌致2人死亡',hot:false,num:373}]

var flag = 1
console.log(array1)
var html = tpl({list:array1})

console.log(html);
document.getElementById('baidu_hot').innerHTML = html;

function change(){
    if(flag === 2) {
      flag = 1
      var html = tpl({list:array1})
      document.getElementById('baidu_hot').innerHTML = html;
    }else{
      flag = 2
      var html = tpl({list:array2})
      document.getElementById('baidu_hot').innerHTML = html;
    }
}