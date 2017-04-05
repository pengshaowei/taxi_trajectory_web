(function(){
    $(document).ready(function(){
    // alert("页面加载完成");
    require([
        "esri/map",
        "tdtlib/TDTVecLayer",
        "tdtlib/TDTAnnoLayer",
        "esri/layers/FeatureLayer",
        "esri/geometry/Point",
        "esri/SpatialReference",
        "dojo/domReady!"
        ], function(
        Map,
        TDTVecLayer,
        TDTAnnoLayer,
        FeatureLayer,
        Point,
        SpatialReference
    ){
        var map;
        var tdtvecMap;
        var tdtannoMap;

        (function () {
            function resolveFullHeight() {
                $("#content").height($(window).height());
            }
            resolveFullHeight();
        })();

        (function(){
            map = new Map("main_map",{logo:false});

            tdtvecMap = new TDTVecLayer();
            map.addLayer(tdtvecMap);
            tdtannoMap = new TDTAnnoLayer();
            map.addLayer(tdtannoMap);
            var pt = new Point(118.78 ,32.04, new SpatialReference({ wkid: 4326 }));
            map.centerAndZoom(pt, 10);
        })();

    });


    });
})();