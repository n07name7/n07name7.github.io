ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-1305252.084536, 3930216.999144, 6556255.759763, 9243376.243101]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Vysledek_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Vysledek',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Vysledek_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-20037508.342789, -44927335.427097, 20037508.342789, 44927335.427096]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Vysledek_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Vysledek_1];
