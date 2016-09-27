/**
 * Created by Administrator on 2016/9/22 0022.
 */
(function($){
    $.fn.htmlPage=function(options,target){

        if (!target)
            target=$("body");
        var now=getScriptSrc($("html").html());
        var result=options;
        for (var i = 0 ;i<now.length;i++){
            var reg= new RegExp("<script[^>]*src=\"(.*\/)*"+now[i]+"\"[^>]*>.*<\/script>")
            result=result.replace (reg,"");
        }
        var _new= getScript(result);
        for (var i=0;i<_new.length;i++){
            result=result.replace (_new[i],"");
        }
        $(this).html(result);
        for (var i=0;i<_new.length;i++){
            target.append (_new[i]);
        }

        function getScriptSrc(nowhtml){
            var arr = getScript(nowhtml);
            var arrsrc = new Array();
            var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
            for (var i=0;i<arr.length;i++){
                var res= arr[i];
                res=srcReg.exec(res);
                if (res[1].lastIndexOf("/")!=-1)
                    res[1]=res[1].substring(res[1].lastIndexOf("/")+1);
                arrsrc.push(res[1]);
            }
            return arrsrc;
        }
        function getScript(nowhtml){
            var arr = new Array();
            var reg=/<script[^>]*>.*<\/script>/g;
            var res;
            while (1){
                res=reg.exec(nowhtml);
                if (!res)
                    break;
                arr.push(res);
            }
            return arr;
        }
    };
})(jQuery);