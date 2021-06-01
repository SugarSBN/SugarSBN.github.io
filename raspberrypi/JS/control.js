/*
 * @Author: SuBonan
 * @Date: 2021-05-09 16:41:23
 * @LastEditTime: 2021-05-09 18:24:53
 * @FilePath: \undefinedc:\SuBonan\Blog\source\raspberrypi\JS\control.js
 * @Github: https://github.com/SugarSBN
 * これなに、これなに、これない、これなに、これなに、これなに、ねこ！ヾ(*´∀｀*)ﾉ
 */
// index.js
// 获取应用实例
function test(){    
        
    var url = "https://api.heclouds.com/devices/710289579/datapoints";     
            
    //1.创建XMLHttpRequest组建    
    xmlHttpRequest = new XMLHttpRequest();    
        
    //2.设置回调函数    
    xmlHttpRequest.onreadystatechange = zswFun;    
    
    //3.初始化XMLHttpRequest组建    
    xmlHttpRequest.open("POST",url,true);    
    xmlHttpRequest.setRequestHeader('api-key', 'p2CLc6GlMAsKnBwSQ80H3TeQMec=');
        
    //4.发送请求    
    xmlHttpRequest.send("114514hello!");      
}       
    
    
//回调函数    
function zswFun(){    
    if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){    
        var b = xmlHttpRequest.responseText;    
        if(b == "true"){    
            alert("登录成功！");    
        }else{    
            alert("登录失败！");    
        }           
    }    
}  