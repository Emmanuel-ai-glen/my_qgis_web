var wms_layers = [];


        var lyr_EsriStreet_0 = new ol.layer.Tile({
            'title': 'Esri Street',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_shapefileShapefilesShapefilestza_admbnda_adm1_20181019tza_admbnda_adm1_20181019shp_1 = new ol.format.GeoJSON();
var features_shapefileShapefilesShapefilestza_admbnda_adm1_20181019tza_admbnda_adm1_20181019shp_1 = format_shapefileShapefilesShapefilestza_admbnda_adm1_20181019tza_admbnda_adm1_20181019shp_1.readFeatures(json_shapefileShapefilesShapefilestza_admbnda_adm1_20181019tza_admbnda_adm1_20181019shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shapefileShapefilesShapefilestza_admbnda_adm1_20181019tza_admbnda_adm1_20181019shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shapefileShapefilesShapefilestza_admbnda_adm1_20181019tza_admbnda_adm1_20181019shp_1.addFeatures(features_shapefileShapefilesShapefilestza_admbnda_adm1_20181019tza_admbnda_adm1_20181019shp_1);
var lyr_shapefileShapefilesShapefilestza_admbnda_adm1_20181019tza_admbnda_adm1_20181019shp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shapefileShapefilesShapefilestza_admbnda_adm1_20181019tza_admbnda_adm1_20181019shp_1, 
                style: style_shapefileShapefilesShapefilestza_admbnda_adm1_20181019tza_admbnda_adm1_20181019shp_1,
                popuplayertitle: 'shapefile — Shapefiles/Shapefiles/tza_admbnda_adm1_20181019/tza_admbnda_adm1_20181019.shp',
                interactive: true,
    title: 'shapefile — Shapefiles/Shapefiles/tza_admbnda_adm1_20181019/tza_admbnda_adm1_20181019.shp<br />' });

lyr_EsriStreet_0.setVisible(true);lyr_shapefileShapefilesShapefilestza_admbnda_adm1_20181019tza_admbnda_adm1_20181019shp_1.setVisible(true);
var layersList = [lyr_EsriStreet_0,lyr_shapefileShapefilesShapefilestza_admbnda_adm1_20181019tza_admbnda_adm1_20181019shp_1];
lyr_shapefileShapefilesShapefilestza_admbnda_adm1_20181019tza_admbnda_adm1_20181019shp_1.set('fieldAliases', {'ADM0_EN': 'ADM0_EN', 'ADM0_SW': 'ADM0_SW', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', });
lyr_shapefileShapefilesShapefilestza_admbnda_adm1_20181019tza_admbnda_adm1_20181019shp_1.set('fieldImages', {'ADM0_EN': 'TextEdit', 'ADM0_SW': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', });
lyr_shapefileShapefilesShapefilestza_admbnda_adm1_20181019tza_admbnda_adm1_20181019shp_1.set('fieldLabels', {'ADM0_EN': 'no label', 'ADM0_SW': 'no label', 'ADM0_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', });
lyr_shapefileShapefilesShapefilestza_admbnda_adm1_20181019tza_admbnda_adm1_20181019shp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});