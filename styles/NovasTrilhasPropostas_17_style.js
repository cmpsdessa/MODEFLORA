var size = 0;
var placement = 'point';
function categories_NovasTrilhasPropostas_17(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Monitoramento_Pesquisa_Dificil':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(48,18,59,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Monitoramento_Pesquisa_Medio':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(71,119,239,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Monitoramento_Pesquisa_Medio_Alternativa':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(27,208,213,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Trilha da Cachoeira':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,253,106,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Trilha da Pedra Grande':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(211,232,53,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Trilha do Mato':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(254,153,44,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Trilha Mirante das Aves':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(217,56,7,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_NovasTrilhasPropostas_17 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Nome");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Liberation Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("Nome") !== null) {
        labelText = String(feature.get("Nome"));
    }
    
var style = categories_NovasTrilhasPropostas_17(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
