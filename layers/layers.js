var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamento_2 = new ol.format.GeoJSON();
var features_Departamento_2 = format_Departamento_2.readFeatures(json_Departamento_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamento_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamento_2.addFeatures(features_Departamento_2);
var lyr_Departamento_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamento_2, 
                style: style_Departamento_2,
                interactive: true,
                title: '<img src="styles/legend/Departamento_2.png" /> Departamento'
            });
var format_PEAINDEC_3 = new ol.format.GeoJSON();
var features_PEAINDEC_3 = format_PEAINDEC_3.readFeatures(json_PEAINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_3.addFeatures(features_PEAINDEC_3);
var lyr_PEAINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_3, 
                style: style_PEAINDEC_3,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_3_0.png" /> 5.000 - 17.500<br />\
    <img src="styles/legend/PEAINDEC_3_1.png" /> 17.501 - 32.500<br />\
    <img src="styles/legend/PEAINDEC_3_2.png" /> 32.501 - 65.000<br />\
    <img src="styles/legend/PEAINDEC_3_3.png" /> 65.001 - 210.000<br />'
        });
var format_PoblacionpordeptoINDEC_4 = new ol.format.GeoJSON();
var features_PoblacionpordeptoINDEC_4 = format_PoblacionpordeptoINDEC_4.readFeatures(json_PoblacionpordeptoINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacionpordeptoINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacionpordeptoINDEC_4.addFeatures(features_PoblacionpordeptoINDEC_4);
var lyr_PoblacionpordeptoINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacionpordeptoINDEC_4, 
                style: style_PoblacionpordeptoINDEC_4,
                interactive: true,
    title: 'Poblacion por depto (INDEC)<br />\
    <img src="styles/legend/PoblacionpordeptoINDEC_4_0.png" /> 9.575 - 31.050<br />\
    <img src="styles/legend/PoblacionpordeptoINDEC_4_1.png" /> 31.051 - 57.725<br />\
    <img src="styles/legend/PoblacionpordeptoINDEC_4_2.png" /> 57.726 - 107.500<br />\
    <img src="styles/legend/PoblacionpordeptoINDEC_4_3.png" /> 107.501 - 325.000<br />'
        });
var format_ViviendasenreasruralesINDEC_5 = new ol.format.GeoJSON();
var features_ViviendasenreasruralesINDEC_5 = format_ViviendasenreasruralesINDEC_5.readFeatures(json_ViviendasenreasruralesINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasenreasruralesINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasenreasruralesINDEC_5.addFeatures(features_ViviendasenreasruralesINDEC_5);
var lyr_ViviendasenreasruralesINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasenreasruralesINDEC_5, 
                style: style_ViviendasenreasruralesINDEC_5,
                interactive: true,
    title: 'Viviendas en áreas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_0.png" /> 1.000 - 2.000<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_1.png" /> 2.001 - 4.000<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_2.png" /> 4.001 - 7.000<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_3.png" /> 7.001 - 11.500<br />'
        });
var format_CabezasdeporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_6 = format_CabezasdeporcinosMAGyP_6.readFeatures(json_CabezasdeporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_6.addFeatures(features_CabezasdeporcinosMAGyP_6);
var lyr_CabezasdeporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_6, 
                style: style_CabezasdeporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_0.png" /> 450 - 2.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_1.png" /> 2.001 - 7.250<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_2.png" /> 7.251 - 13.250<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_3.png" /> 13.251 o más<br />'
        });
var format_CabezasdeovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_7 = format_CabezasdeovinosMAGyP_7.readFeatures(json_CabezasdeovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_7.addFeatures(features_CabezasdeovinosMAGyP_7);
var lyr_CabezasdeovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_7, 
                style: style_CabezasdeovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_0.png" /> 100 - 600<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_1.png" /> 601 - 1.500<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_2.png" /> 1.501 - 2.600<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_3.png" /> 2.601 - 3.750<br />'
        });
var format_CabezasdecaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_8 = format_CabezasdecaprinosMAGyP_8.readFeatures(json_CabezasdecaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_8.addFeatures(features_CabezasdecaprinosMAGyP_8);
var lyr_CabezasdecaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_8, 
                style: style_CabezasdecaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_0.png" /> 10 - 150<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_1.png" /> 151 - 325<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_2.png" /> 326 - 750<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_3.png" /> 751 - 1.250<br />'
        });
var format_CabezasdebovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_9 = format_CabezasdebovinosMAGyP_9.readFeatures(json_CabezasdebovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_9.addFeatures(features_CabezasdebovinosMAGyP_9);
var lyr_CabezasdebovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_9, 
                style: style_CabezasdebovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_0.png" /> 3.000 - 10.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_1.png" /> 10.001 - 22.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_2.png" /> 22.001 - 40.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_3.png" /> 40.001 o más<br />'
        });
var format_HectreasdemandiocaINDEC_10 = new ol.format.GeoJSON();
var features_HectreasdemandiocaINDEC_10 = format_HectreasdemandiocaINDEC_10.readFeatures(json_HectreasdemandiocaINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdemandiocaINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdemandiocaINDEC_10.addFeatures(features_HectreasdemandiocaINDEC_10);
var lyr_HectreasdemandiocaINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdemandiocaINDEC_10, 
                style: style_HectreasdemandiocaINDEC_10,
                interactive: true,
    title: 'Hectáreas de mandioca (INDEC)<br />\
    <img src="styles/legend/HectreasdemandiocaINDEC_10_0.png" /> 9 - 80<br />\
    <img src="styles/legend/HectreasdemandiocaINDEC_10_1.png" /> 81 - 400<br />\
    <img src="styles/legend/HectreasdemandiocaINDEC_10_2.png" /> 401 - 1.000<br />\
    <img src="styles/legend/HectreasdemandiocaINDEC_10_3.png" /> 1.001 - 1.600<br />'
        });
var format_HectreasdelegumbresINDEC_11 = new ol.format.GeoJSON();
var features_HectreasdelegumbresINDEC_11 = format_HectreasdelegumbresINDEC_11.readFeatures(json_HectreasdelegumbresINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdelegumbresINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdelegumbresINDEC_11.addFeatures(features_HectreasdelegumbresINDEC_11);
var lyr_HectreasdelegumbresINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdelegumbresINDEC_11, 
                style: style_HectreasdelegumbresINDEC_11,
                interactive: true,
    title: 'Hectáreas de legumbres (INDEC)<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_1.png" /> 1 - 10<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_2.png" /> 11 - 200<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_3.png" /> 201 - 575<br />'
        });
var format_HectreassembradasdemazMAGyP_12 = new ol.format.GeoJSON();
var features_HectreassembradasdemazMAGyP_12 = format_HectreassembradasdemazMAGyP_12.readFeatures(json_HectreassembradasdemazMAGyP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassembradasdemazMAGyP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassembradasdemazMAGyP_12.addFeatures(features_HectreassembradasdemazMAGyP_12);
var lyr_HectreassembradasdemazMAGyP_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassembradasdemazMAGyP_12, 
                style: style_HectreassembradasdemazMAGyP_12,
                interactive: true,
    title: 'Hectáreas sembradas de maíz (MAGyP)<br />\
    <img src="styles/legend/HectreassembradasdemazMAGyP_12_0.png" /> 50 - 700<br />\
    <img src="styles/legend/HectreassembradasdemazMAGyP_12_1.png" /> 701 - 2.700<br />\
    <img src="styles/legend/HectreassembradasdemazMAGyP_12_2.png" /> 2.701 - 5.000<br />\
    <img src="styles/legend/HectreassembradasdemazMAGyP_12_3.png" /> 5.001 - 10.000<br />'
        });
var format_HectreasdetabacoINDEC_13 = new ol.format.GeoJSON();
var features_HectreasdetabacoINDEC_13 = format_HectreasdetabacoINDEC_13.readFeatures(json_HectreasdetabacoINDEC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdetabacoINDEC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdetabacoINDEC_13.addFeatures(features_HectreasdetabacoINDEC_13);
var lyr_HectreasdetabacoINDEC_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdetabacoINDEC_13, 
                style: style_HectreasdetabacoINDEC_13,
                interactive: true,
    title: 'Hectáreas de tabaco (INDEC)<br />\
    <img src="styles/legend/HectreasdetabacoINDEC_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdetabacoINDEC_13_1.png" /> 1 - 200<br />\
    <img src="styles/legend/HectreasdetabacoINDEC_13_2.png" /> 201 - 1.000<br />\
    <img src="styles/legend/HectreasdetabacoINDEC_13_3.png" /> 1.001 - 5.250<br />\
    <img src="styles/legend/HectreasdetabacoINDEC_13_4.png" /> 5.251 - 10.500<br />'
        });
var format_HectreasdectricosINDEC_14 = new ol.format.GeoJSON();
var features_HectreasdectricosINDEC_14 = format_HectreasdectricosINDEC_14.readFeatures(json_HectreasdectricosINDEC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdectricosINDEC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdectricosINDEC_14.addFeatures(features_HectreasdectricosINDEC_14);
var lyr_HectreasdectricosINDEC_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdectricosINDEC_14, 
                style: style_HectreasdectricosINDEC_14,
                interactive: true,
    title: 'Hectáreas de cítricos (INDEC)<br />\
    <img src="styles/legend/HectreasdectricosINDEC_14_0.png" /> 1 - 120<br />\
    <img src="styles/legend/HectreasdectricosINDEC_14_1.png" /> 121 - 600<br />\
    <img src="styles/legend/HectreasdectricosINDEC_14_2.png" /> 601 - 1.150<br />'
        });
var format_HectreasdehortalizasINDEC_15 = new ol.format.GeoJSON();
var features_HectreasdehortalizasINDEC_15 = format_HectreasdehortalizasINDEC_15.readFeatures(json_HectreasdehortalizasINDEC_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdehortalizasINDEC_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdehortalizasINDEC_15.addFeatures(features_HectreasdehortalizasINDEC_15);
var lyr_HectreasdehortalizasINDEC_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdehortalizasINDEC_15, 
                style: style_HectreasdehortalizasINDEC_15,
                interactive: true,
    title: 'Hectáreas de hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_15_0.png" /> 1 - 150<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_15_1.png" /> 151 - 425<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_15_2.png" /> 426 - 1.300<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_15_3.png" /> 1.301 - 2.000<br />'
        });
var format_HectreasdeteMAGyP_16 = new ol.format.GeoJSON();
var features_HectreasdeteMAGyP_16 = format_HectreasdeteMAGyP_16.readFeatures(json_HectreasdeteMAGyP_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdeteMAGyP_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdeteMAGyP_16.addFeatures(features_HectreasdeteMAGyP_16);
var lyr_HectreasdeteMAGyP_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdeteMAGyP_16, 
                style: style_HectreasdeteMAGyP_16,
                interactive: true,
    title: 'Hectáreas de te (MAGyP)<br />\
    <img src="styles/legend/HectreasdeteMAGyP_16_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdeteMAGyP_16_1.png" /> 1 - 500<br />\
    <img src="styles/legend/HectreasdeteMAGyP_16_2.png" /> 501 - 2.500<br />\
    <img src="styles/legend/HectreasdeteMAGyP_16_3.png" /> 2.501 - 10.000<br />\
    <img src="styles/legend/HectreasdeteMAGyP_16_4.png" /> 10.001 o más<br />'
        });
var format_HectreasdecaadeazucarINDEC_17 = new ol.format.GeoJSON();
var features_HectreasdecaadeazucarINDEC_17 = format_HectreasdecaadeazucarINDEC_17.readFeatures(json_HectreasdecaadeazucarINDEC_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdecaadeazucarINDEC_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdecaadeazucarINDEC_17.addFeatures(features_HectreasdecaadeazucarINDEC_17);
var lyr_HectreasdecaadeazucarINDEC_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdecaadeazucarINDEC_17, 
                style: style_HectreasdecaadeazucarINDEC_17,
                interactive: true,
    title: 'Hectáreas de caña de azucar (INDEC)<br />\
    <img src="styles/legend/HectreasdecaadeazucarINDEC_17_0.png" /> 1 - 150<br />\
    <img src="styles/legend/HectreasdecaadeazucarINDEC_17_1.png" /> 151 - 550<br />\
    <img src="styles/legend/HectreasdecaadeazucarINDEC_17_2.png" /> 551 - 1.170<br />'
        });
var format_HectreassembradasdesojaMAGyP_18 = new ol.format.GeoJSON();
var features_HectreassembradasdesojaMAGyP_18 = format_HectreassembradasdesojaMAGyP_18.readFeatures(json_HectreassembradasdesojaMAGyP_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassembradasdesojaMAGyP_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassembradasdesojaMAGyP_18.addFeatures(features_HectreassembradasdesojaMAGyP_18);
var lyr_HectreassembradasdesojaMAGyP_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassembradasdesojaMAGyP_18, 
                style: style_HectreassembradasdesojaMAGyP_18,
                interactive: true,
    title: 'Hectáreas sembradas de soja (MAGyP)<br />\
    <img src="styles/legend/HectreassembradasdesojaMAGyP_18_0.png" /> 0<br />\
    <img src="styles/legend/HectreassembradasdesojaMAGyP_18_1.png" /> 1 - 100<br />\
    <img src="styles/legend/HectreassembradasdesojaMAGyP_18_2.png" /> 101 - 1.000<br />\
    <img src="styles/legend/HectreassembradasdesojaMAGyP_18_3.png" /> 1.001 - 2.000<br />'
        });
var format_HectreassembradasdeyerbamateMAGyP_19 = new ol.format.GeoJSON();
var features_HectreassembradasdeyerbamateMAGyP_19 = format_HectreassembradasdeyerbamateMAGyP_19.readFeatures(json_HectreassembradasdeyerbamateMAGyP_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassembradasdeyerbamateMAGyP_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassembradasdeyerbamateMAGyP_19.addFeatures(features_HectreassembradasdeyerbamateMAGyP_19);
var lyr_HectreassembradasdeyerbamateMAGyP_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassembradasdeyerbamateMAGyP_19, 
                style: style_HectreassembradasdeyerbamateMAGyP_19,
                interactive: true,
    title: 'Hectáreas sembradas de yerba mate (MAGyP)<br />\
    <img src="styles/legend/HectreassembradasdeyerbamateMAGyP_19_0.png" /> 500 - 5.500<br />\
    <img src="styles/legend/HectreassembradasdeyerbamateMAGyP_19_1.png" /> 5.501 - 10.000<br />\
    <img src="styles/legend/HectreassembradasdeyerbamateMAGyP_19_2.png" /> 10.001 - 16.000<br />\
    <img src="styles/legend/HectreassembradasdeyerbamateMAGyP_19_3.png" /> 16.001 - 22.000<br />'
        });
var format_Capacitaciones2020tcnicas_20 = new ol.format.GeoJSON();
var features_Capacitaciones2020tcnicas_20 = format_Capacitaciones2020tcnicas_20.readFeatures(json_Capacitaciones2020tcnicas_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2020tcnicas_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2020tcnicas_20.addFeatures(features_Capacitaciones2020tcnicas_20);
var lyr_Capacitaciones2020tcnicas_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2020tcnicas_20, 
                style: style_Capacitaciones2020tcnicas_20,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2020tcnicas_20.png" /> Capacitaciones 2020 (técnicas)'
            });
var format_Capacitaciones2019tcnicas_21 = new ol.format.GeoJSON();
var features_Capacitaciones2019tcnicas_21 = format_Capacitaciones2019tcnicas_21.readFeatures(json_Capacitaciones2019tcnicas_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019tcnicas_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019tcnicas_21.addFeatures(features_Capacitaciones2019tcnicas_21);
var lyr_Capacitaciones2019tcnicas_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019tcnicas_21, 
                style: style_Capacitaciones2019tcnicas_21,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2019tcnicas_21.png" /> Capacitaciones 2019 (técnicas)'
            });
var format_Capacitaciones2018_22 = new ol.format.GeoJSON();
var features_Capacitaciones2018_22 = format_Capacitaciones2018_22.readFeatures(json_Capacitaciones2018_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2018_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2018_22.addFeatures(features_Capacitaciones2018_22);
var lyr_Capacitaciones2018_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2018_22, 
                style: style_Capacitaciones2018_22,
                interactive: true,
    title: 'Capacitaciones 2018<br />\
    <img src="styles/legend/Capacitaciones2018_22_0.png" /> Concientización<br />\
    <img src="styles/legend/Capacitaciones2018_22_1.png" /> Difusión<br />\
    <img src="styles/legend/Capacitaciones2018_22_2.png" /> Técnica<br />'
        });
var format_Capacitaciones2017_23 = new ol.format.GeoJSON();
var features_Capacitaciones2017_23 = format_Capacitaciones2017_23.readFeatures(json_Capacitaciones2017_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2017_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2017_23.addFeatures(features_Capacitaciones2017_23);
var lyr_Capacitaciones2017_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2017_23, 
                style: style_Capacitaciones2017_23,
                interactive: true,
    title: 'Capacitaciones 2017<br />\
    <img src="styles/legend/Capacitaciones2017_23_0.png" /> Difusión<br />\
    <img src="styles/legend/Capacitaciones2017_23_1.png" /> Técnica<br />'
        });
var format_Localidades_24 = new ol.format.GeoJSON();
var features_Localidades_24 = format_Localidades_24.readFeatures(json_Localidades_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_24.addFeatures(features_Localidades_24);
var lyr_Localidades_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_24, 
                style: style_Localidades_24,
                interactive: true,
                title: '<img src="styles/legend/Localidades_24.png" /> Localidades'
            });
var format_BER_25 = new ol.format.GeoJSON();
var features_BER_25 = format_BER_25.readFeatures(json_BER_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_25.addFeatures(features_BER_25);
var lyr_BER_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_25, 
                style: style_BER_25,
                interactive: true,
                title: '<img src="styles/legend/BER_25.png" /> BER'
            });
var format_BER_26 = new ol.format.GeoJSON();
var features_BER_26 = format_BER_26.readFeatures(json_BER_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_26.addFeatures(features_BER_26);
var lyr_BER_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_26, 
                style: style_BER_26,
                interactive: true,
                title: '<img src="styles/legend/BER_26.png" /> BER'
            });
var format_Delegacin_27 = new ol.format.GeoJSON();
var features_Delegacin_27 = format_Delegacin_27.readFeatures(json_Delegacin_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Delegacin_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Delegacin_27.addFeatures(features_Delegacin_27);
var lyr_Delegacin_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Delegacin_27, 
                style: style_Delegacin_27,
                interactive: true,
                title: '<img src="styles/legend/Delegacin_27.png" /> Delegación'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamento_2.setVisible(true);lyr_PEAINDEC_3.setVisible(true);lyr_PoblacionpordeptoINDEC_4.setVisible(true);lyr_ViviendasenreasruralesINDEC_5.setVisible(true);lyr_CabezasdeporcinosMAGyP_6.setVisible(true);lyr_CabezasdeovinosMAGyP_7.setVisible(true);lyr_CabezasdecaprinosMAGyP_8.setVisible(true);lyr_CabezasdebovinosMAGyP_9.setVisible(true);lyr_HectreasdemandiocaINDEC_10.setVisible(true);lyr_HectreasdelegumbresINDEC_11.setVisible(true);lyr_HectreassembradasdemazMAGyP_12.setVisible(true);lyr_HectreasdetabacoINDEC_13.setVisible(true);lyr_HectreasdectricosINDEC_14.setVisible(true);lyr_HectreasdehortalizasINDEC_15.setVisible(true);lyr_HectreasdeteMAGyP_16.setVisible(true);lyr_HectreasdecaadeazucarINDEC_17.setVisible(true);lyr_HectreassembradasdesojaMAGyP_18.setVisible(true);lyr_HectreassembradasdeyerbamateMAGyP_19.setVisible(true);lyr_Capacitaciones2020tcnicas_20.setVisible(true);lyr_Capacitaciones2019tcnicas_21.setVisible(true);lyr_Capacitaciones2018_22.setVisible(true);lyr_Capacitaciones2017_23.setVisible(true);lyr_Localidades_24.setVisible(true);lyr_BER_25.setVisible(true);lyr_BER_26.setVisible(true);lyr_Delegacin_27.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamento_2,lyr_PEAINDEC_3,lyr_PoblacionpordeptoINDEC_4,lyr_ViviendasenreasruralesINDEC_5,lyr_CabezasdeporcinosMAGyP_6,lyr_CabezasdeovinosMAGyP_7,lyr_CabezasdecaprinosMAGyP_8,lyr_CabezasdebovinosMAGyP_9,lyr_HectreasdemandiocaINDEC_10,lyr_HectreasdelegumbresINDEC_11,lyr_HectreassembradasdemazMAGyP_12,lyr_HectreasdetabacoINDEC_13,lyr_HectreasdectricosINDEC_14,lyr_HectreasdehortalizasINDEC_15,lyr_HectreasdeteMAGyP_16,lyr_HectreasdecaadeazucarINDEC_17,lyr_HectreassembradasdesojaMAGyP_18,lyr_HectreassembradasdeyerbamateMAGyP_19,lyr_Capacitaciones2020tcnicas_20,lyr_Capacitaciones2019tcnicas_21,lyr_Capacitaciones2018_22,lyr_Capacitaciones2017_23,lyr_Localidades_24,lyr_BER_25,lyr_BER_26,lyr_Delegacin_27];
lyr_Departamento_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_PEAINDEC_3.set('fieldAliases', {'PEA': 'PEA', });
lyr_PoblacionpordeptoINDEC_4.set('fieldAliases', {'Poblacion': 'Poblacion', });
lyr_ViviendasenreasruralesINDEC_5.set('fieldAliases', {'Viv.Rur': 'Viv.Rur', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldAliases', {'Porcinos': 'Porcinos', });
lyr_CabezasdeovinosMAGyP_7.set('fieldAliases', {'Ovinos': 'Ovinos', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldAliases', {'Caprinos': 'Caprinos', });
lyr_CabezasdebovinosMAGyP_9.set('fieldAliases', {'Bovinos': 'Bovinos', });
lyr_HectreasdemandiocaINDEC_10.set('fieldAliases', {'Mandioca': 'Mandioca', });
lyr_HectreasdelegumbresINDEC_11.set('fieldAliases', {'Legumbres': 'Legumbres', });
lyr_HectreassembradasdemazMAGyP_12.set('fieldAliases', {'Maiz': 'Maiz', });
lyr_HectreasdetabacoINDEC_13.set('fieldAliases', {'Tabaco': 'Tabaco', });
lyr_HectreasdectricosINDEC_14.set('fieldAliases', {'citricos': 'citricos', });
lyr_HectreasdehortalizasINDEC_15.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreasdeteMAGyP_16.set('fieldAliases', {'Te': 'Te', });
lyr_HectreasdecaadeazucarINDEC_17.set('fieldAliases', {'Azucar': 'Azucar', });
lyr_HectreassembradasdesojaMAGyP_18.set('fieldAliases', {'Soja': 'Soja', });
lyr_HectreassembradasdeyerbamateMAGyP_19.set('fieldAliases', {'Yerba-mate': 'Yerba-mate', });
lyr_Capacitaciones2020tcnicas_20.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo Cap': 'Tipo Cap', 'Tematica': 'Tematica', 'Asistentes': 'Asistentes', 'Fechas': 'Fechas', });
lyr_Capacitaciones2019tcnicas_21.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo Cap': 'Tipo Cap', 'Tematica': 'Tematica', 'Asistentes': 'Asistentes', 'Fechas': 'Fechas', });
lyr_Capacitaciones2018_22.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo Cap': 'Tipo Cap', 'Tematica': 'Tematica', 'Asistentes': 'Asistentes', 'Fechas': 'Fechas', });
lyr_Capacitaciones2017_23.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo Cap': 'Tipo Cap', 'Tematica': 'Tematica', 'Asistentes': 'Asistentes', 'Fechas': 'Fechas', });
lyr_Localidades_24.set('fieldAliases', {'Localidad': 'Localidad', 'Poblacion': 'Poblacion', });
lyr_BER_25.set('fieldAliases', {'Num': 'Num', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_BER_26.set('fieldAliases', {'Num': 'Num', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_Delegacin_27.set('fieldAliases', {'Delegacion': 'Delegacion', 'Direccion': 'Direccion', 'Prest 2016': 'Prest 2016', 'Prest 2017': 'Prest 2017', 'Prest 2018': 'Prest 2018', 'Prest 2019': 'Prest 2019', 'Prest 2020': 'Prest 2020', });
lyr_Departamento_2.set('fieldImages', {'Depto': 'TextEdit', });
lyr_PEAINDEC_3.set('fieldImages', {'PEA': 'TextEdit', });
lyr_PoblacionpordeptoINDEC_4.set('fieldImages', {'Poblacion': 'TextEdit', });
lyr_ViviendasenreasruralesINDEC_5.set('fieldImages', {'Viv.Rur': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldImages', {'Porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_7.set('fieldImages', {'Ovinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldImages', {'Caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_9.set('fieldImages', {'Bovinos': 'TextEdit', });
lyr_HectreasdemandiocaINDEC_10.set('fieldImages', {'Mandioca': 'TextEdit', });
lyr_HectreasdelegumbresINDEC_11.set('fieldImages', {'Legumbres': 'TextEdit', });
lyr_HectreassembradasdemazMAGyP_12.set('fieldImages', {'Maiz': 'TextEdit', });
lyr_HectreasdetabacoINDEC_13.set('fieldImages', {'Tabaco': 'TextEdit', });
lyr_HectreasdectricosINDEC_14.set('fieldImages', {'citricos': 'TextEdit', });
lyr_HectreasdehortalizasINDEC_15.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreasdeteMAGyP_16.set('fieldImages', {'Te': 'TextEdit', });
lyr_HectreasdecaadeazucarINDEC_17.set('fieldImages', {'Azucar': 'TextEdit', });
lyr_HectreassembradasdesojaMAGyP_18.set('fieldImages', {'Soja': 'TextEdit', });
lyr_HectreassembradasdeyerbamateMAGyP_19.set('fieldImages', {'Yerba-mate': 'TextEdit', });
lyr_Capacitaciones2020tcnicas_20.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo Cap': 'TextEdit', 'Tematica': 'TextEdit', 'Asistentes': 'Range', 'Fechas': 'TextEdit', });
lyr_Capacitaciones2019tcnicas_21.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo Cap': 'TextEdit', 'Tematica': 'TextEdit', 'Asistentes': 'Range', 'Fechas': 'TextEdit', });
lyr_Capacitaciones2018_22.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo Cap': 'TextEdit', 'Tematica': 'TextEdit', 'Asistentes': 'Range', 'Fechas': 'TextEdit', });
lyr_Capacitaciones2017_23.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo Cap': 'TextEdit', 'Tematica': 'TextEdit', 'Asistentes': 'Range', 'Fechas': 'TextEdit', });
lyr_Localidades_24.set('fieldImages', {'Localidad': 'TextEdit', 'Poblacion': 'TextEdit', });
lyr_BER_25.set('fieldImages', {'Num': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_BER_26.set('fieldImages', {'Num': '', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_Delegacin_27.set('fieldImages', {'Delegacion': 'TextEdit', 'Direccion': '', 'Prest 2016': '', 'Prest 2017': '', 'Prest 2018': '', 'Prest 2019': '', 'Prest 2020': '', });
lyr_Departamento_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_PEAINDEC_3.set('fieldLabels', {'PEA': 'inline label', });
lyr_PoblacionpordeptoINDEC_4.set('fieldLabels', {'Poblacion': 'inline label', });
lyr_ViviendasenreasruralesINDEC_5.set('fieldLabels', {'Viv.Rur': 'inline label', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldLabels', {'Porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_7.set('fieldLabels', {'Ovinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldLabels', {'Caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_9.set('fieldLabels', {'Bovinos': 'inline label', });
lyr_HectreasdemandiocaINDEC_10.set('fieldLabels', {'Mandioca': 'inline label', });
lyr_HectreasdelegumbresINDEC_11.set('fieldLabels', {'Legumbres': 'inline label', });
lyr_HectreassembradasdemazMAGyP_12.set('fieldLabels', {'Maiz': 'inline label', });
lyr_HectreasdetabacoINDEC_13.set('fieldLabels', {'Tabaco': 'inline label', });
lyr_HectreasdectricosINDEC_14.set('fieldLabels', {'citricos': 'inline label', });
lyr_HectreasdehortalizasINDEC_15.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_HectreasdeteMAGyP_16.set('fieldLabels', {'Te': 'inline label', });
lyr_HectreasdecaadeazucarINDEC_17.set('fieldLabels', {'Azucar': 'inline label', });
lyr_HectreassembradasdesojaMAGyP_18.set('fieldLabels', {'Soja': 'inline label', });
lyr_HectreassembradasdeyerbamateMAGyP_19.set('fieldLabels', {'Yerba-mate': 'inline label', });
lyr_Capacitaciones2020tcnicas_20.set('fieldLabels', {'Localidad': 'inline label', 'Tipo Cap': 'inline label', 'Tematica': 'inline label', 'Asistentes': 'inline label', 'Fechas': 'inline label', });
lyr_Capacitaciones2019tcnicas_21.set('fieldLabels', {'Localidad': 'inline label', 'Tipo Cap': 'inline label', 'Tematica': 'inline label', 'Asistentes': 'inline label', 'Fechas': 'inline label', });
lyr_Capacitaciones2018_22.set('fieldLabels', {'Localidad': 'inline label', 'Tipo Cap': 'inline label', 'Tematica': 'inline label', 'Asistentes': 'inline label', 'Fechas': 'inline label', });
lyr_Capacitaciones2017_23.set('fieldLabels', {'Localidad': 'inline label', 'Tipo Cap': 'inline label', 'Tematica': 'inline label', 'Asistentes': 'inline label', 'Fechas': 'inline label', });
lyr_Localidades_24.set('fieldLabels', {'Localidad': 'inline label', 'Poblacion': 'inline label', });
lyr_BER_25.set('fieldLabels', {'Num': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_BER_26.set('fieldLabels', {'Num': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_Delegacin_27.set('fieldLabels', {'Delegacion': 'inline label', 'Direccion': 'inline label', 'Prest 2016': 'inline label', 'Prest 2017': 'inline label', 'Prest 2018': 'inline label', 'Prest 2019': 'inline label', 'Prest 2020': 'inline label', });
lyr_Delegacin_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});