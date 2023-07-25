gdjs._12513_12452_12531_30011_38754Code = {};
gdjs._12513_12452_12531_30011_38754Code.GDyuiObjects1= [];
gdjs._12513_12452_12531_30011_38754Code.GDyuiObjects2= [];
gdjs._12513_12452_12531_30011_38754Code.GDtokiObjects1= [];
gdjs._12513_12452_12531_30011_38754Code.GDtokiObjects2= [];
gdjs._12513_12452_12531_30011_38754Code.GDsiraObjects1= [];
gdjs._12513_12452_12531_30011_38754Code.GDsiraObjects2= [];
gdjs._12513_12452_12531_30011_38754Code.GDpapaObjects1= [];
gdjs._12513_12452_12531_30011_38754Code.GDpapaObjects2= [];
gdjs._12513_12452_12531_30011_38754Code.GDmamaObjects1= [];
gdjs._12513_12452_12531_30011_38754Code.GDmamaObjects2= [];
gdjs._12513_12452_12531_30011_38754Code.GDachanObjects1= [];
gdjs._12513_12452_12531_30011_38754Code.GDachanObjects2= [];
gdjs._12513_12452_12531_30011_38754Code.GDtitle_9595movieObjects1= [];
gdjs._12513_12452_12531_30011_38754Code.GDtitle_9595movieObjects2= [];
gdjs._12513_12452_12531_30011_38754Code.GDbgObjects1= [];
gdjs._12513_12452_12531_30011_38754Code.GDbgObjects2= [];
gdjs._12513_12452_12531_30011_38754Code.GDtitleObjects1= [];
gdjs._12513_12452_12531_30011_38754Code.GDtitleObjects2= [];
gdjs._12513_12452_12531_30011_38754Code.GDbtnObjects1= [];
gdjs._12513_12452_12531_30011_38754Code.GDbtnObjects2= [];
gdjs._12513_12452_12531_30011_38754Code.GDcprObjects1= [];
gdjs._12513_12452_12531_30011_38754Code.GDcprObjects2= [];


gdjs._12513_12452_12531_30011_38754Code.mapOfGDgdjs_9546_959512513_959512452_959512531_959530011_959538754Code_9546GDbgObjects1Objects = Hashtable.newFrom({"bg": gdjs._12513_12452_12531_30011_38754Code.GDbgObjects1});
gdjs._12513_12452_12531_30011_38754Code.mapOfGDgdjs_9546_959512513_959512452_959512531_959530011_959538754Code_9546GDtitle_95959595movieObjects1Objects = Hashtable.newFrom({"title_movie": gdjs._12513_12452_12531_30011_38754Code.GDtitle_9595movieObjects1});
gdjs._12513_12452_12531_30011_38754Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs._12513_12452_12531_30011_38754Code.GDbgObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._12513_12452_12531_30011_38754Code.mapOfGDgdjs_9546_959512513_959512452_959512531_959530011_959538754Code_9546GDbgObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10935348);
}
}
}
if (isConditionTrue_0) {
gdjs._12513_12452_12531_30011_38754Code.GDtitle_9595movieObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._12513_12452_12531_30011_38754Code.mapOfGDgdjs_9546_959512513_959512452_959512531_959530011_959538754Code_9546GDtitle_95959595movieObjects1Objects, 0, 0, "top");
}{for(var i = 0, len = gdjs._12513_12452_12531_30011_38754Code.GDtitle_9595movieObjects1.length ;i < len;++i) {
    gdjs._12513_12452_12531_30011_38754Code.GDtitle_9595movieObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("title_movie"), gdjs._12513_12452_12531_30011_38754Code.GDtitle_9595movieObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._12513_12452_12531_30011_38754Code.GDtitle_9595movieObjects1.length;i<l;++i) {
    if ( gdjs._12513_12452_12531_30011_38754Code.GDtitle_9595movieObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs._12513_12452_12531_30011_38754Code.GDtitle_9595movieObjects1[k] = gdjs._12513_12452_12531_30011_38754Code.GDtitle_9595movieObjects1[i];
        ++k;
    }
}
gdjs._12513_12452_12531_30011_38754Code.GDtitle_9595movieObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10936604);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "2階の探索", false);
}}

}


};

gdjs._12513_12452_12531_30011_38754Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._12513_12452_12531_30011_38754Code.GDyuiObjects1.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDyuiObjects2.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDtokiObjects1.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDtokiObjects2.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDsiraObjects1.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDsiraObjects2.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDpapaObjects1.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDpapaObjects2.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDmamaObjects1.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDmamaObjects2.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDachanObjects1.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDachanObjects2.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDtitle_9595movieObjects1.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDtitle_9595movieObjects2.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDbgObjects1.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDbgObjects2.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDtitleObjects1.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDtitleObjects2.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDbtnObjects1.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDbtnObjects2.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDcprObjects1.length = 0;
gdjs._12513_12452_12531_30011_38754Code.GDcprObjects2.length = 0;

gdjs._12513_12452_12531_30011_38754Code.eventsList0(runtimeScene);

return;

}

gdjs['_12513_12452_12531_30011_38754Code'] = gdjs._12513_12452_12531_30011_38754Code;
