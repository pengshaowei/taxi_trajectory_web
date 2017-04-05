var map;
var showMap;
var anoCtrl;
require(["esri/map",
        "bdlib/BDVecLayer",
        "bdlib/BDImgLayer",
        "bdlib/BDAnoLayer",
        "esri/layers/FeatureLayer",
        "esri/geometry/Point",
        "esri/SpatialReference",
        "dojo/domReady!"
        ], function (Map,
        BDVecLayer,
        BDImgLayer,
        BDAnoLayer,
        FeatureLayer,
        Point,
        SpatialReference
    ){
        map = new Map("map", {logo: false});
        var vecMap = new BDVecLayer();
        var imgMap = new BDImgLayer();
        var anoMap = new BDAnoLayer();
        map.addLayer(vecMap);
        map.addLayers([imgMap,anoMap]);
        imgMap.hide(),anoMap.hide();

        var pt = new Point(7038512.810510807, 2629489.7975553474, new SpatialReference({ wkid: 102100 }));
        map.centerAndZoom(pt, 5);

        showMap = function(layer){
            //设置按钮样式
            var baseMap = ["vec","img"];
            for(var i= 0, dl=baseMap.length;i<dl;i++){
                $("#"+baseMap[i]).removeClass("base-map-switch-active");
            }
            $("#"+layer).addClass("base-map-switch-active");
            //设置显示地图
            switch(layer){
                case "img":{//影像
                    vecMap.hide();
                    imgMap.show();
                    $("#ano").show();
                    break;
                }
                default :{//地图
                    vecMap.show();
                    imgMap.hide(),anoMap.hide();
                    $("#ano").hide();
                    $("#chkAno").attr("checked",false);
                    break;
                }
            }
        };
        anoCtrl = function(){
            if($("#chkAno").attr("checked")){
                anoMap.show();
            }
            else{
                anoMap.hide();
            }
        }
    });