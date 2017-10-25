window.onload=function () {
    var oDiv=document.getElementById("dlt");
    var oSj=document.getElementById("shuju");
    var oWc=document.getElementById("yqwc");
    var oP=document.getElementsByTagName("p");
    var oBut=document.getElementById("a1");
    oSj.onfocus=function ()
    {
        if(this.value=="输入测量数据（用/分隔）")
        {
            this.value='';
        }
    }
    oSj.onblur=function ()
    {
        if(this.value=="")
        {
            oInput.value="输入测量数据（用/分隔）";
        }
    }
    oWc.onfocus=function ()
    {
        if(this.value=="输入仪器误差")
        {
            this.value='';
        }
    }
    oWc.onblur=function ()
    {
        if(this.value=="")
        {
            oInput.value="输入仪器误差";
        }
    }


oBut.onclick=function () {
        var qw=String(oSj.value);
    var strs1=new Array();
    var strs=new Array();
    strs1=qw.split("/");
    for(var t=0;t<strs1.length;t++)
    {
        strs[t]=Number(strs1[t]);
    }
    var cou=0;
    var co=0;
    for(var i=0;i<strs.length;i++)
    {
        cou=cou+strs[i];
    }
    var ave=cou/i;


    for(var j=0;j<strs.length;j++)
    {
        co=(ave-strs[j])*(ave-strs[j])+co;
    }
    var c=co/(strs.length-1);
    var s=Math.pow(c,1/2);


    var x=Number(oWc.value);
    var u=x/(Math.pow(3,1/2));
    var o=Math.pow(s*s+u*u,1/2);
    alert("平均值为："+ave+"       "+"残差为"+co+"          "+"s为"+s+"     "+"u为"+u+"     "+"总不确定度为"+o);
}
}