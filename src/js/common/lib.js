/**
 * Created by sunrise2075 on 2017/3/3.
 */
$(document).ready(function(){//
    $(window).resize(function () {
        var h = $(window).height();

        $('#map-canvas').css('height', h - 120);
    }).resize();

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
});

/**
 * @description: 检查一个字符串的内容是否全部为中文
 * @param content 等待被检验的字符串内容
 * @return 如果全部是中文就返回true，否则返回false
 */
function   isChineseText(content){

    if(!content){
        return false;
    }
    //输入内容全部是汉字的正则表达式
    //参考：http://www.cleey.com/blog/single/id/654.html
    var reg= /^[\u4e00-\u9fa5]+$/i;
    var isChinese = reg.test(content);

    return  isChinese;
}


