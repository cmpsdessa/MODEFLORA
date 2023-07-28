ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:31984").setExtent([194001.343037, 7555144.553881, 194626.248715, 7555536.492431]);
var wms_layers = [];

var lyr_OrtomosaicoOpacidade100_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ortomosaico (Opacidade 100%)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/OrtomosaicoOpacidade100_0.png",
    attributions: ' ',
                                projection: 'EPSG:31984',
                                alwaysInRange: true,
                                imageExtent: [193799.755000, 7555132.411100, 194672.336300, 7555479.072300]
                            })
                        });
var lyr_OrtomosaicoOpacidade50_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ortomosaico (Opacidade 50%)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/OrtomosaicoOpacidade50_1.png",
    attributions: ' ',
                                projection: 'EPSG:31984',
                                alwaysInRange: true,
                                imageExtent: [193799.755000, 7555132.411100, 194672.336300, 7555479.072300]
                            })
                        });
var lyr_ModeloDigitaldeSuperficieOpacidade50_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Modelo Digital de Superf[icie (Opacidade 50%)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ModeloDigitaldeSuperficieOpacidade50_2.png",
    attributions: ' ',
                                projection: 'EPSG:31984',
                                alwaysInRange: true,
                                imageExtent: [193799.796000, 7555132.465100, 194672.294800, 7555479.092300]
                            })
                        });
var lyr_VARIOpacidade100_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "VARI (Opacidade 100%) ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/VARIOpacidade100_3.png",
    attributions: ' ',
                                projection: 'EPSG:31984',
                                alwaysInRange: true,
                                imageExtent: [193799.755000, 7555132.411100, 194672.336300, 7555479.072300]
                            })
                        });
var lyr_VARIOpacidade50_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "VARI (Opacidade 50%)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/VARIOpacidade50_4.png",
    attributions: ' ',
                                projection: 'EPSG:31984',
                                alwaysInRange: true,
                                imageExtent: [193799.755000, 7555132.411100, 194672.336300, 7555479.072300]
                            })
                        });
var format_VegetaoDensa_5 = new ol.format.GeoJSON();
var features_VegetaoDensa_5 = format_VegetaoDensa_5.readFeatures(json_VegetaoDensa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_VegetaoDensa_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VegetaoDensa_5.addFeatures(features_VegetaoDensa_5);
var lyr_VegetaoDensa_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VegetaoDensa_5, 
                style: style_VegetaoDensa_5,
                interactive: false,
                title: '<img src="styles/legend/VegetaoDensa_5.png" /> Vegetação Densa'
            });
var format_VegetaodePequenoPorte_6 = new ol.format.GeoJSON();
var features_VegetaodePequenoPorte_6 = format_VegetaodePequenoPorte_6.readFeatures(json_VegetaodePequenoPorte_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_VegetaodePequenoPorte_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VegetaodePequenoPorte_6.addFeatures(features_VegetaodePequenoPorte_6);
var lyr_VegetaodePequenoPorte_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VegetaodePequenoPorte_6, 
                style: style_VegetaodePequenoPorte_6,
                interactive: false,
                title: '<img src="styles/legend/VegetaodePequenoPorte_6.png" /> Vegetação de Pequeno Porte'
            });
var format_Rocha_7 = new ol.format.GeoJSON();
var features_Rocha_7 = format_Rocha_7.readFeatures(json_Rocha_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Rocha_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rocha_7.addFeatures(features_Rocha_7);
var lyr_Rocha_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rocha_7, 
                style: style_Rocha_7,
                interactive: false,
                title: '<img src="styles/legend/Rocha_7.png" /> Rocha'
            });
var format_SoloExposto_8 = new ol.format.GeoJSON();
var features_SoloExposto_8 = format_SoloExposto_8.readFeatures(json_SoloExposto_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_SoloExposto_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoloExposto_8.addFeatures(features_SoloExposto_8);
var lyr_SoloExposto_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SoloExposto_8, 
                style: style_SoloExposto_8,
                interactive: false,
                title: '<img src="styles/legend/SoloExposto_8.png" /> Solo Exposto'
            });
var format_OrtomosaicoelimitesSitioConceicao_Limites_9 = new ol.format.GeoJSON();
var features_OrtomosaicoelimitesSitioConceicao_Limites_9 = format_OrtomosaicoelimitesSitioConceicao_Limites_9.readFeatures(json_OrtomosaicoelimitesSitioConceicao_Limites_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_OrtomosaicoelimitesSitioConceicao_Limites_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OrtomosaicoelimitesSitioConceicao_Limites_9.addFeatures(features_OrtomosaicoelimitesSitioConceicao_Limites_9);
var lyr_OrtomosaicoelimitesSitioConceicao_Limites_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OrtomosaicoelimitesSitioConceicao_Limites_9, 
                style: style_OrtomosaicoelimitesSitioConceicao_Limites_9,
                interactive: false,
                title: '<img src="styles/legend/OrtomosaicoelimitesSitioConceicao_Limites_9.png" /> Ortomosaico e limites Sitio Conceicao_Limites'
            });
var format_OrtomosaicoelimitesSAF_Modelo_10 = new ol.format.GeoJSON();
var features_OrtomosaicoelimitesSAF_Modelo_10 = format_OrtomosaicoelimitesSAF_Modelo_10.readFeatures(json_OrtomosaicoelimitesSAF_Modelo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_OrtomosaicoelimitesSAF_Modelo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OrtomosaicoelimitesSAF_Modelo_10.addFeatures(features_OrtomosaicoelimitesSAF_Modelo_10);
var lyr_OrtomosaicoelimitesSAF_Modelo_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OrtomosaicoelimitesSAF_Modelo_10, 
                style: style_OrtomosaicoelimitesSAF_Modelo_10,
                interactive: false,
                title: '<img src="styles/legend/OrtomosaicoelimitesSAF_Modelo_10.png" /> Ortomosaico e limites SAF_Modelo'
            });
var format_OrtomosaicoelimitesRPPN_AC_2_Limites_11 = new ol.format.GeoJSON();
var features_OrtomosaicoelimitesRPPN_AC_2_Limites_11 = format_OrtomosaicoelimitesRPPN_AC_2_Limites_11.readFeatures(json_OrtomosaicoelimitesRPPN_AC_2_Limites_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_OrtomosaicoelimitesRPPN_AC_2_Limites_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OrtomosaicoelimitesRPPN_AC_2_Limites_11.addFeatures(features_OrtomosaicoelimitesRPPN_AC_2_Limites_11);
var lyr_OrtomosaicoelimitesRPPN_AC_2_Limites_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OrtomosaicoelimitesRPPN_AC_2_Limites_11, 
                style: style_OrtomosaicoelimitesRPPN_AC_2_Limites_11,
                interactive: false,
                title: '<img src="styles/legend/OrtomosaicoelimitesRPPN_AC_2_Limites_11.png" /> Ortomosaico e limites RPPN_AC_2_Limites'
            });
var format_OrtomosaicoelimitesRPPN_AC_1_Conceicao_Limites_12 = new ol.format.GeoJSON();
var features_OrtomosaicoelimitesRPPN_AC_1_Conceicao_Limites_12 = format_OrtomosaicoelimitesRPPN_AC_1_Conceicao_Limites_12.readFeatures(json_OrtomosaicoelimitesRPPN_AC_1_Conceicao_Limites_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_OrtomosaicoelimitesRPPN_AC_1_Conceicao_Limites_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OrtomosaicoelimitesRPPN_AC_1_Conceicao_Limites_12.addFeatures(features_OrtomosaicoelimitesRPPN_AC_1_Conceicao_Limites_12);
var lyr_OrtomosaicoelimitesRPPN_AC_1_Conceicao_Limites_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OrtomosaicoelimitesRPPN_AC_1_Conceicao_Limites_12, 
                style: style_OrtomosaicoelimitesRPPN_AC_1_Conceicao_Limites_12,
                interactive: false,
                title: '<img src="styles/legend/OrtomosaicoelimitesRPPN_AC_1_Conceicao_Limites_12.png" /> Ortomosaico e limites RPPN_AC_1_Conceicao_Limites'
            });
var format_Contornos_DEM_ALOS_10m_Cota_RPPN_AC_13 = new ol.format.GeoJSON();
var features_Contornos_DEM_ALOS_10m_Cota_RPPN_AC_13 = format_Contornos_DEM_ALOS_10m_Cota_RPPN_AC_13.readFeatures(json_Contornos_DEM_ALOS_10m_Cota_RPPN_AC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Contornos_DEM_ALOS_10m_Cota_RPPN_AC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contornos_DEM_ALOS_10m_Cota_RPPN_AC_13.addFeatures(features_Contornos_DEM_ALOS_10m_Cota_RPPN_AC_13);
var lyr_Contornos_DEM_ALOS_10m_Cota_RPPN_AC_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Contornos_DEM_ALOS_10m_Cota_RPPN_AC_13, 
                style: style_Contornos_DEM_ALOS_10m_Cota_RPPN_AC_13,
                interactive: false,
                title: '<img src="styles/legend/Contornos_DEM_ALOS_10m_Cota_RPPN_AC_13.png" /> Contornos_DEM_ALOS_10m_Cota_RPPN_AC'
            });
var format_CanaisPropostos_14 = new ol.format.GeoJSON();
var features_CanaisPropostos_14 = format_CanaisPropostos_14.readFeatures(json_CanaisPropostos_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_CanaisPropostos_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisPropostos_14.addFeatures(features_CanaisPropostos_14);
var lyr_CanaisPropostos_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CanaisPropostos_14, 
                style: style_CanaisPropostos_14,
                interactive: true,
                title: '<img src="styles/legend/CanaisPropostos_14.png" /> Canais Propostos'
            });
var format_Nascentespropostas_15 = new ol.format.GeoJSON();
var features_Nascentespropostas_15 = format_Nascentespropostas_15.readFeatures(json_Nascentespropostas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Nascentespropostas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentespropostas_15.addFeatures(features_Nascentespropostas_15);
var lyr_Nascentespropostas_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nascentespropostas_15, 
                style: style_Nascentespropostas_15,
                interactive: true,
                title: '<img src="styles/legend/Nascentespropostas_15.png" /> Nascentes propostas'
            });
var format_Trilhaspropostasantigas_16 = new ol.format.GeoJSON();
var features_Trilhaspropostasantigas_16 = format_Trilhaspropostasantigas_16.readFeatures(json_Trilhaspropostasantigas_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Trilhaspropostasantigas_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trilhaspropostasantigas_16.addFeatures(features_Trilhaspropostasantigas_16);
var lyr_Trilhaspropostasantigas_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trilhaspropostasantigas_16, 
                style: style_Trilhaspropostasantigas_16,
                interactive: true,
    title: 'Trilhas propostas antigas<br />\
    <img src="styles/legend/Trilhaspropostasantigas_16_0.png" /> Caminho da Grota<br />\
    <img src="styles/legend/Trilhaspropostasantigas_16_1.png" /> Caminho das Aves<br />\
    <img src="styles/legend/Trilhaspropostasantigas_16_2.png" /> Caminho do Quilombo<br />\
    <img src="styles/legend/Trilhaspropostasantigas_16_3.png" /> Caminho dos Sakurus<br />\
    <img src="styles/legend/Trilhaspropostasantigas_16_4.png" /> Monitoramento e Pesquisa<br />\
    <img src="styles/legend/Trilhaspropostasantigas_16_5.png" /> Trilha da Cachoeira<br />\
    <img src="styles/legend/Trilhaspropostasantigas_16_6.png" /> Trilha da Jamaica<br />\
    <img src="styles/legend/Trilhaspropostasantigas_16_7.png" /> Trilha da Onça<br />\
    <img src="styles/legend/Trilhaspropostasantigas_16_8.png" /> Trilha do Céu<br />\
    <img src="styles/legend/Trilhaspropostasantigas_16_9.png" /> Trilha do Sossego<br />'
        });
var format_NovasTrilhasPropostas_17 = new ol.format.GeoJSON();
var features_NovasTrilhasPropostas_17 = format_NovasTrilhasPropostas_17.readFeatures(json_NovasTrilhasPropostas_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_NovasTrilhasPropostas_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NovasTrilhasPropostas_17.addFeatures(features_NovasTrilhasPropostas_17);
var lyr_NovasTrilhasPropostas_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NovasTrilhasPropostas_17, 
                style: style_NovasTrilhasPropostas_17,
                interactive: true,
    title: 'Novas Trilhas Propostas<br />\
    <img src="styles/legend/NovasTrilhasPropostas_17_0.png" /> Monitoramento_Pesquisa_Dificil<br />\
    <img src="styles/legend/NovasTrilhasPropostas_17_1.png" /> Monitoramento_Pesquisa_Medio<br />\
    <img src="styles/legend/NovasTrilhasPropostas_17_2.png" /> Monitoramento_Pesquisa_Medio_Alternativa<br />\
    <img src="styles/legend/NovasTrilhasPropostas_17_3.png" /> Trilha da Cachoeira<br />\
    <img src="styles/legend/NovasTrilhasPropostas_17_4.png" /> Trilha da Pedra Grande<br />\
    <img src="styles/legend/NovasTrilhasPropostas_17_5.png" /> Trilha do Mato<br />\
    <img src="styles/legend/NovasTrilhasPropostas_17_6.png" /> Trilha Mirante das Aves<br />'
        });
var format_Parcelas_18 = new ol.format.GeoJSON();
var features_Parcelas_18 = format_Parcelas_18.readFeatures(json_Parcelas_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Parcelas_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelas_18.addFeatures(features_Parcelas_18);
var lyr_Parcelas_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcelas_18, 
                style: style_Parcelas_18,
                interactive: false,
                title: '<img src="styles/legend/Parcelas_18.png" /> Parcelas'
            });
var format_Dominncia_19 = new ol.format.GeoJSON();
var features_Dominncia_19 = format_Dominncia_19.readFeatures(json_Dominncia_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Dominncia_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dominncia_19.addFeatures(features_Dominncia_19);
var lyr_Dominncia_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dominncia_19, 
                style: style_Dominncia_19,
                interactive: false,
    title: 'Dominância<br />\
    <img src="styles/legend/Dominncia_19_0.png" /> 0.07 - 0.19<br />\
    <img src="styles/legend/Dominncia_19_1.png" /> 0.19 - 0.31<br />\
    <img src="styles/legend/Dominncia_19_2.png" /> 0.31 - 0.44<br />\
    <img src="styles/legend/Dominncia_19_3.png" /> 0.44 - 0.56<br />\
    <img src="styles/legend/Dominncia_19_4.png" /> 0.56 - 0.68<br />'
        });
var format_RiquezaTaxonomica_20 = new ol.format.GeoJSON();
var features_RiquezaTaxonomica_20 = format_RiquezaTaxonomica_20.readFeatures(json_RiquezaTaxonomica_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_RiquezaTaxonomica_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiquezaTaxonomica_20.addFeatures(features_RiquezaTaxonomica_20);
var lyr_RiquezaTaxonomica_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RiquezaTaxonomica_20, 
                style: style_RiquezaTaxonomica_20,
                interactive: false,
    title: 'Riqueza Taxonomica<br />\
    <img src="styles/legend/RiquezaTaxonomica_20_0.png" /> 4 - 6<br />\
    <img src="styles/legend/RiquezaTaxonomica_20_1.png" /> 6 - 8<br />\
    <img src="styles/legend/RiquezaTaxonomica_20_2.png" /> 8 - 10<br />\
    <img src="styles/legend/RiquezaTaxonomica_20_3.png" /> 10 - 12<br />\
    <img src="styles/legend/RiquezaTaxonomica_20_4.png" /> 12 - 14<br />\
    <img src="styles/legend/RiquezaTaxonomica_20_5.png" /> 14 - 16<br />'
        });
var format_Diversidade_21 = new ol.format.GeoJSON();
var features_Diversidade_21 = format_Diversidade_21.readFeatures(json_Diversidade_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Diversidade_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Diversidade_21.addFeatures(features_Diversidade_21);
var lyr_Diversidade_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Diversidade_21, 
                style: style_Diversidade_21,
                interactive: false,
    title: 'Diversidade<br />\
    <img src="styles/legend/Diversidade_21_0.png" /> 0.73 - 1.13<br />\
    <img src="styles/legend/Diversidade_21_1.png" /> 1.13 - 1.53<br />\
    <img src="styles/legend/Diversidade_21_2.png" /> 1.53 - 1.93<br />\
    <img src="styles/legend/Diversidade_21_3.png" /> 1.93 - 2.33<br />\
    <img src="styles/legend/Diversidade_21_4.png" /> 2.33 - 2.73<br />'
        });
var format_DensidadeIndha_22 = new ol.format.GeoJSON();
var features_DensidadeIndha_22 = format_DensidadeIndha_22.readFeatures(json_DensidadeIndha_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_DensidadeIndha_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DensidadeIndha_22.addFeatures(features_DensidadeIndha_22);
var lyr_DensidadeIndha_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DensidadeIndha_22, 
                style: style_DensidadeIndha_22,
                interactive: false,
    title: 'Densidade (Ind/ha)<br />\
    <img src="styles/legend/DensidadeIndha_22_0.png" /> 257 - 766<br />\
    <img src="styles/legend/DensidadeIndha_22_1.png" /> 766 - 1,274<br />\
    <img src="styles/legend/DensidadeIndha_22_2.png" /> 1,274 - 1,783<br />\
    <img src="styles/legend/DensidadeIndha_22_3.png" /> 1,783 - 2,291<br />\
    <img src="styles/legend/DensidadeIndha_22_4.png" /> 2,291 - 2,800<br />'
        });
var format_SAFPropostoEspcies_23 = new ol.format.GeoJSON();
var features_SAFPropostoEspcies_23 = format_SAFPropostoEspcies_23.readFeatures(json_SAFPropostoEspcies_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_SAFPropostoEspcies_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAFPropostoEspcies_23.addFeatures(features_SAFPropostoEspcies_23);
var lyr_SAFPropostoEspcies_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAFPropostoEspcies_23, 
                style: style_SAFPropostoEspcies_23,
                interactive: false,
    title: 'SAF Proposto (Espécies)<br />\
    <img src="styles/legend/SAFPropostoEspcies_23_0.png" /> Aegiphila sellowiana<br />\
    <img src="styles/legend/SAFPropostoEspcies_23_1.png" /> Aegiphila sellowiana Cham.<br />\
    <img src="styles/legend/SAFPropostoEspcies_23_2.png" /> Cordia trichotoma<br />\
    <img src="styles/legend/SAFPropostoEspcies_23_3.png" /> Dalbergia nigra<br />\
    <img src="styles/legend/SAFPropostoEspcies_23_4.png" /> Handroanthus chrysotrichus<br />\
    <img src="styles/legend/SAFPropostoEspcies_23_5.png" /> Himatanthus bracteatus<br />\
    <img src="styles/legend/SAFPropostoEspcies_23_6.png" /> Machaerium hirtum<br />\
    <img src="styles/legend/SAFPropostoEspcies_23_7.png" /> Moquiniastrum polymorphum<br />\
    <img src="styles/legend/SAFPropostoEspcies_23_8.png" /> Morta<br />\
    <img src="styles/legend/SAFPropostoEspcies_23_9.png" /> Parapiptadenia rigida<br />'
        });
var format_SAFPropostoQualidadedofuste_24 = new ol.format.GeoJSON();
var features_SAFPropostoQualidadedofuste_24 = format_SAFPropostoQualidadedofuste_24.readFeatures(json_SAFPropostoQualidadedofuste_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_SAFPropostoQualidadedofuste_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAFPropostoQualidadedofuste_24.addFeatures(features_SAFPropostoQualidadedofuste_24);
var lyr_SAFPropostoQualidadedofuste_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAFPropostoQualidadedofuste_24, 
                style: style_SAFPropostoQualidadedofuste_24,
                interactive: false,
    title: 'SAF Proposto (Qualidade do fuste)<br />\
    <img src="styles/legend/SAFPropostoQualidadedofuste_24_0.png" /> 1<br />\
    <img src="styles/legend/SAFPropostoQualidadedofuste_24_1.png" /> 2<br />\
    <img src="styles/legend/SAFPropostoQualidadedofuste_24_2.png" /> 3<br />\
    <img src="styles/legend/SAFPropostoQualidadedofuste_24_3.png" /> 4<br />'
        });
var format_SAFPropostoSanidade_25 = new ol.format.GeoJSON();
var features_SAFPropostoSanidade_25 = format_SAFPropostoSanidade_25.readFeatures(json_SAFPropostoSanidade_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_SAFPropostoSanidade_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAFPropostoSanidade_25.addFeatures(features_SAFPropostoSanidade_25);
var lyr_SAFPropostoSanidade_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAFPropostoSanidade_25, 
                style: style_SAFPropostoSanidade_25,
                interactive: false,
    title: 'SAF Proposto (Sanidade)<br />\
    <img src="styles/legend/SAFPropostoSanidade_25_0.png" /> 1<br />\
    <img src="styles/legend/SAFPropostoSanidade_25_1.png" /> 2<br />\
    <img src="styles/legend/SAFPropostoSanidade_25_2.png" /> 3<br />\
    <img src="styles/legend/SAFPropostoSanidade_25_3.png" /> 4<br />'
        });
var format_SAFPropostoDAP_26 = new ol.format.GeoJSON();
var features_SAFPropostoDAP_26 = format_SAFPropostoDAP_26.readFeatures(json_SAFPropostoDAP_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_SAFPropostoDAP_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAFPropostoDAP_26.addFeatures(features_SAFPropostoDAP_26);
var lyr_SAFPropostoDAP_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAFPropostoDAP_26, 
                style: style_SAFPropostoDAP_26,
                interactive: false,
    title: 'SAF Proposto (DAP)<br />\
    <img src="styles/legend/SAFPropostoDAP_26_0.png" /> 5 - 10.8<br />\
    <img src="styles/legend/SAFPropostoDAP_26_1.png" /> 10.8 - 16.6<br />\
    <img src="styles/legend/SAFPropostoDAP_26_2.png" /> 16.6 - 22.4<br />\
    <img src="styles/legend/SAFPropostoDAP_26_3.png" /> 22.4 - 28.2<br />\
    <img src="styles/legend/SAFPropostoDAP_26_4.png" /> 28.2 - 34<br />'
        });
var format_SAFPropostoAlturaTotal_27 = new ol.format.GeoJSON();
var features_SAFPropostoAlturaTotal_27 = format_SAFPropostoAlturaTotal_27.readFeatures(json_SAFPropostoAlturaTotal_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_SAFPropostoAlturaTotal_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAFPropostoAlturaTotal_27.addFeatures(features_SAFPropostoAlturaTotal_27);
var lyr_SAFPropostoAlturaTotal_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAFPropostoAlturaTotal_27, 
                style: style_SAFPropostoAlturaTotal_27,
                interactive: false,
    title: 'SAF Proposto (Altura Total)<br />\
    <img src="styles/legend/SAFPropostoAlturaTotal_27_0.png" /> 2.5 - 4.6<br />\
    <img src="styles/legend/SAFPropostoAlturaTotal_27_1.png" /> 4.6 - 6.7<br />\
    <img src="styles/legend/SAFPropostoAlturaTotal_27_2.png" /> 6.7 - 8.8<br />\
    <img src="styles/legend/SAFPropostoAlturaTotal_27_3.png" /> 8.8 - 10.9<br />\
    <img src="styles/legend/SAFPropostoAlturaTotal_27_4.png" /> 10.9 - 13<br />'
        });
var format_EstruturasPropostas_28 = new ol.format.GeoJSON();
var features_EstruturasPropostas_28 = format_EstruturasPropostas_28.readFeatures(json_EstruturasPropostas_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_EstruturasPropostas_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstruturasPropostas_28.addFeatures(features_EstruturasPropostas_28);
var lyr_EstruturasPropostas_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EstruturasPropostas_28, 
                style: style_EstruturasPropostas_28,
                interactive: false,
    title: 'Estruturas Propostas<br />\
    <img src="styles/legend/EstruturasPropostas_28_0.png" /> Captação<br />\
    <img src="styles/legend/EstruturasPropostas_28_1.png" /> Composteira<br />\
    <img src="styles/legend/EstruturasPropostas_28_2.png" /> Jardim de Borboletas<br />\
    <img src="styles/legend/EstruturasPropostas_28_3.png" /> Jardim Sensorial e Espiral de Ervas<br />\
    <img src="styles/legend/EstruturasPropostas_28_4.png" /> Mirante Carukango<br />\
    <img src="styles/legend/EstruturasPropostas_28_5.png" /> Mirante da Amorosa<br />\
    <img src="styles/legend/EstruturasPropostas_28_6.png" /> Mirante das Aves<br />\
    <img src="styles/legend/EstruturasPropostas_28_7.png" /> Viveiro/Estruturas de Apoio<br />'
        });
var format_PontosdeInteresse_29 = new ol.format.GeoJSON();
var features_PontosdeInteresse_29 = format_PontosdeInteresse_29.readFeatures(json_PontosdeInteresse_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_PontosdeInteresse_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosdeInteresse_29.addFeatures(features_PontosdeInteresse_29);
var lyr_PontosdeInteresse_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PontosdeInteresse_29, 
                style: style_PontosdeInteresse_29,
                interactive: false,
    title: 'Pontos de Interesse<br />\
    <img src="styles/legend/PontosdeInteresse_29_0.png" /> Cachoeira da Amorosa<br />\
    <img src="styles/legend/PontosdeInteresse_29_1.png" /> RPPN Águas Claras I (2,1 ha)<br />\
    <img src="styles/legend/PontosdeInteresse_29_2.png" /> Sede<br />\
    <img src="styles/legend/PontosdeInteresse_29_3.png" /> Sítio Águas Claras - Conceição (4,8 ha)<br />\
    <img src="styles/legend/PontosdeInteresse_29_4.png" /> Sítio e RPPN Águas Claras II - Trajano (3,6 ha)<br />'
        });
var group_PontosdeInteresse = new ol.layer.Group({
                                layers: [lyr_EstruturasPropostas_28,lyr_PontosdeInteresse_29,],
                                title: "Pontos de Interesse"});
var group_ParcelaseSAF = new ol.layer.Group({
                                layers: [lyr_Parcelas_18,lyr_Dominncia_19,lyr_RiquezaTaxonomica_20,lyr_Diversidade_21,lyr_DensidadeIndha_22,lyr_SAFPropostoEspcies_23,lyr_SAFPropostoQualidadedofuste_24,lyr_SAFPropostoSanidade_25,lyr_SAFPropostoDAP_26,lyr_SAFPropostoAlturaTotal_27,],
                                title: "Parcelas e SAF"});
var group_Trilhas = new ol.layer.Group({
                                layers: [lyr_Trilhaspropostasantigas_16,lyr_NovasTrilhasPropostas_17,],
                                title: "Trilhas"});
var group_CanaiseNascentesSugeridos = new ol.layer.Group({
                                layers: [lyr_CanaisPropostos_14,lyr_Nascentespropostas_15,],
                                title: "Canais e Nascentes Sugeridos"});
var group_Cotas = new ol.layer.Group({
                                layers: [lyr_Contornos_DEM_ALOS_10m_Cota_RPPN_AC_13,],
                                title: "Cotas"});
var group_LimitesdaPropriedade = new ol.layer.Group({
                                layers: [lyr_OrtomosaicoelimitesSitioConceicao_Limites_9,lyr_OrtomosaicoelimitesSAF_Modelo_10,lyr_OrtomosaicoelimitesRPPN_AC_2_Limites_11,lyr_OrtomosaicoelimitesRPPN_AC_1_Conceicao_Limites_12,],
                                title: "Limites da Propriedade"});
var group_ClassificaoeCoberturadoSolo = new ol.layer.Group({
                                layers: [lyr_VARIOpacidade100_3,lyr_VARIOpacidade50_4,lyr_VegetaoDensa_5,lyr_VegetaodePequenoPorte_6,lyr_Rocha_7,lyr_SoloExposto_8,],
                                title: "Classificação e Cobertura do Solo"});
var group_MDE = new ol.layer.Group({
                                layers: [lyr_ModeloDigitaldeSuperficieOpacidade50_2,],
                                title: "MDE"});
var group_Ortomosaico = new ol.layer.Group({
                                layers: [lyr_OrtomosaicoOpacidade100_0,lyr_OrtomosaicoOpacidade50_1,],
                                title: "Ortomosaico"});

lyr_OrtomosaicoOpacidade100_0.setVisible(true);lyr_OrtomosaicoOpacidade50_1.setVisible(true);lyr_ModeloDigitaldeSuperficieOpacidade50_2.setVisible(false);lyr_VARIOpacidade100_3.setVisible(false);lyr_VARIOpacidade50_4.setVisible(false);lyr_VegetaoDensa_5.setVisible(false);lyr_VegetaodePequenoPorte_6.setVisible(false);lyr_Rocha_7.setVisible(false);lyr_SoloExposto_8.setVisible(false);lyr_OrtomosaicoelimitesSitioConceicao_Limites_9.setVisible(true);lyr_OrtomosaicoelimitesSAF_Modelo_10.setVisible(true);lyr_OrtomosaicoelimitesRPPN_AC_2_Limites_11.setVisible(true);lyr_OrtomosaicoelimitesRPPN_AC_1_Conceicao_Limites_12.setVisible(true);lyr_Contornos_DEM_ALOS_10m_Cota_RPPN_AC_13.setVisible(false);lyr_CanaisPropostos_14.setVisible(false);lyr_Nascentespropostas_15.setVisible(false);lyr_Trilhaspropostasantigas_16.setVisible(false);lyr_NovasTrilhasPropostas_17.setVisible(false);lyr_Parcelas_18.setVisible(false);lyr_Dominncia_19.setVisible(false);lyr_RiquezaTaxonomica_20.setVisible(false);lyr_Diversidade_21.setVisible(false);lyr_DensidadeIndha_22.setVisible(false);lyr_SAFPropostoEspcies_23.setVisible(false);lyr_SAFPropostoQualidadedofuste_24.setVisible(false);lyr_SAFPropostoSanidade_25.setVisible(false);lyr_SAFPropostoDAP_26.setVisible(false);lyr_SAFPropostoAlturaTotal_27.setVisible(false);lyr_EstruturasPropostas_28.setVisible(true);lyr_PontosdeInteresse_29.setVisible(true);
var layersList = [group_Ortomosaico,group_MDE,group_ClassificaoeCoberturadoSolo,group_LimitesdaPropriedade,group_Cotas,group_CanaiseNascentesSugeridos,group_Trilhas,group_ParcelaseSAF,group_PontosdeInteresse];
lyr_VegetaoDensa_5.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'origem': 'origem', 'layer': 'layer', 'path': 'path', });
lyr_VegetaodePequenoPorte_6.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'origem': 'origem', 'layer': 'layer', 'path': 'path', });
lyr_Rocha_7.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'origem': 'origem', 'layer': 'layer', 'path': 'path', });
lyr_SoloExposto_8.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'origem': 'origem', 'layer': 'layer', 'path': 'path', });
lyr_OrtomosaicoelimitesSitioConceicao_Limites_9.set('fieldAliases', {'id': 'id', 'Area_m2': 'Area_m2', 'Area_ha': 'Area_ha', });
lyr_OrtomosaicoelimitesSAF_Modelo_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_OrtomosaicoelimitesRPPN_AC_2_Limites_11.set('fieldAliases', {'id': 'id', });
lyr_OrtomosaicoelimitesRPPN_AC_1_Conceicao_Limites_12.set('fieldAliases', {'id': 'id', 'Area_ha': 'Area_ha', });
lyr_Contornos_DEM_ALOS_10m_Cota_RPPN_AC_13.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_CanaisPropostos_14.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Tipo': 'Tipo', 'Comentario': 'Comentario', 'Data': 'Data', });
lyr_Nascentespropostas_15.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Comentario': 'Comentario', 'Data': 'Data', });
lyr_Trilhaspropostasantigas_16.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_NovasTrilhasPropostas_17.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Observacao': 'Observacao', });
lyr_Parcelas_18.set('fieldAliases', {'parcela': 'parcela', 'area': 'area', 'origem': 'origem', 'Riqueza T.': 'Riqueza T.', 'No. Indiv.': 'No. Indiv.', 'Dominancia': 'Dominancia', 'Div. Shann': 'Div. Shann', 'Equitab.': 'Equitab.', 'Densidade': 'Densidade', });
lyr_Dominncia_19.set('fieldAliases', {'parcela': 'parcela', 'area': 'area', 'origem': 'origem', 'Riqueza T.': 'Riqueza T.', 'No. Indiv.': 'No. Indiv.', 'Dominancia': 'Dominancia', 'Div. Shann': 'Div. Shann', 'Equitab.': 'Equitab.', 'Densidade': 'Densidade', });
lyr_RiquezaTaxonomica_20.set('fieldAliases', {'parcela': 'parcela', 'area': 'area', 'origem': 'origem', 'Riqueza T.': 'Riqueza T.', 'No. Indiv.': 'No. Indiv.', 'Dominancia': 'Dominancia', 'Div. Shann': 'Div. Shann', 'Equitab.': 'Equitab.', 'Densidade': 'Densidade', });
lyr_Diversidade_21.set('fieldAliases', {'parcela': 'parcela', 'area': 'area', 'origem': 'origem', 'Riqueza T.': 'Riqueza T.', 'No. Indiv.': 'No. Indiv.', 'Dominancia': 'Dominancia', 'Div. Shann': 'Div. Shann', 'Equitab.': 'Equitab.', 'Densidade': 'Densidade', });
lyr_DensidadeIndha_22.set('fieldAliases', {'parcela': 'parcela', 'area': 'area', 'origem': 'origem', 'Riqueza T.': 'Riqueza T.', 'No. Indiv.': 'No. Indiv.', 'Dominancia': 'Dominancia', 'Div. Shann': 'Div. Shann', 'Equitab.': 'Equitab.', 'Densidade': 'Densidade', });
lyr_SAFPropostoEspcies_23.set('fieldAliases', {'Tag.arvore': 'Tag.arvore', 'num.arvore': 'num.arvore', 'n.fuste': 'n.fuste', 'nome.cient': 'nome.cient', 'CAP.cm': 'CAP.cm', 'DAP.cm': 'DAP.cm', 'alt.total.': 'alt.total.', 'alt.com': 'alt.com', 'diam.copa.': 'diam.copa.', 'volume.m3': 'volume.m3', 'qualide.fu': 'qualide.fu', 'sanidade.a': 'sanidade.a', 'LAT': 'LAT', 'LONG': 'LONG', 'Zona': 'Zona', });
lyr_SAFPropostoQualidadedofuste_24.set('fieldAliases', {'Tag.arvore': 'Tag.arvore', 'num.arvore': 'num.arvore', 'n.fuste': 'n.fuste', 'nome.cient': 'nome.cient', 'CAP.cm': 'CAP.cm', 'DAP.cm': 'DAP.cm', 'alt.total.': 'alt.total.', 'alt.com': 'alt.com', 'diam.copa.': 'diam.copa.', 'volume.m3': 'volume.m3', 'qualide.fu': 'qualide.fu', 'sanidade.a': 'sanidade.a', 'LAT': 'LAT', 'LONG': 'LONG', 'Zona': 'Zona', });
lyr_SAFPropostoSanidade_25.set('fieldAliases', {'Tag.arvore': 'Tag.arvore', 'num.arvore': 'num.arvore', 'n.fuste': 'n.fuste', 'nome.cient': 'nome.cient', 'CAP.cm': 'CAP.cm', 'DAP.cm': 'DAP.cm', 'alt.total.': 'alt.total.', 'alt.com': 'alt.com', 'diam.copa.': 'diam.copa.', 'volume.m3': 'volume.m3', 'qualide.fu': 'qualide.fu', 'sanidade.a': 'sanidade.a', 'LAT': 'LAT', 'LONG': 'LONG', 'Zona': 'Zona', });
lyr_SAFPropostoDAP_26.set('fieldAliases', {'Tag.arvore': 'Tag.arvore', 'num.arvore': 'num.arvore', 'n.fuste': 'n.fuste', 'nome.cient': 'nome.cient', 'CAP.cm': 'CAP.cm', 'DAP.cm': 'DAP.cm', 'alt.total.': 'alt.total.', 'alt.com': 'alt.com', 'diam.copa.': 'diam.copa.', 'volume.m3': 'volume.m3', 'qualide.fu': 'qualide.fu', 'sanidade.a': 'sanidade.a', 'LAT': 'LAT', 'LONG': 'LONG', 'Zona': 'Zona', });
lyr_SAFPropostoAlturaTotal_27.set('fieldAliases', {'Tag.arvore': 'Tag.arvore', 'num.arvore': 'num.arvore', 'n.fuste': 'n.fuste', 'nome.cient': 'nome.cient', 'CAP.cm': 'CAP.cm', 'DAP.cm': 'DAP.cm', 'alt.total.': 'alt.total.', 'alt.com': 'alt.com', 'diam.copa.': 'diam.copa.', 'volume.m3': 'volume.m3', 'qualide.fu': 'qualide.fu', 'sanidade.a': 'sanidade.a', 'LAT': 'LAT', 'LONG': 'LONG', 'Zona': 'Zona', });
lyr_EstruturasPropostas_28.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PontosdeInteresse_29.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_VegetaoDensa_5.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'origem': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_VegetaodePequenoPorte_6.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'origem': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Rocha_7.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'origem': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SoloExposto_8.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'origem': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_OrtomosaicoelimitesSitioConceicao_Limites_9.set('fieldImages', {'id': 'TextEdit', 'Area_m2': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_OrtomosaicoelimitesSAF_Modelo_10.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_OrtomosaicoelimitesRPPN_AC_2_Limites_11.set('fieldImages', {'id': 'TextEdit', });
lyr_OrtomosaicoelimitesRPPN_AC_1_Conceicao_Limites_12.set('fieldImages', {'id': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_Contornos_DEM_ALOS_10m_Cota_RPPN_AC_13.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_CanaisPropostos_14.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Tipo': 'TextEdit', 'Comentario': 'TextEdit', 'Data': 'DateTime', });
lyr_Nascentespropostas_15.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Comentario': 'TextEdit', 'Data': 'DateTime', });
lyr_Trilhaspropostasantigas_16.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_NovasTrilhasPropostas_17.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Observacao': 'TextEdit', });
lyr_Parcelas_18.set('fieldImages', {'parcela': 'TextEdit', 'area': 'TextEdit', 'origem': 'TextEdit', 'Riqueza T.': 'TextEdit', 'No. Indiv.': 'TextEdit', 'Dominancia': 'TextEdit', 'Div. Shann': 'TextEdit', 'Equitab.': 'TextEdit', 'Densidade': 'TextEdit', });
lyr_Dominncia_19.set('fieldImages', {'parcela': 'TextEdit', 'area': 'TextEdit', 'origem': 'TextEdit', 'Riqueza T.': 'TextEdit', 'No. Indiv.': 'TextEdit', 'Dominancia': 'TextEdit', 'Div. Shann': 'TextEdit', 'Equitab.': 'TextEdit', 'Densidade': 'TextEdit', });
lyr_RiquezaTaxonomica_20.set('fieldImages', {'parcela': 'TextEdit', 'area': 'TextEdit', 'origem': 'TextEdit', 'Riqueza T.': 'TextEdit', 'No. Indiv.': 'TextEdit', 'Dominancia': 'TextEdit', 'Div. Shann': 'TextEdit', 'Equitab.': 'TextEdit', 'Densidade': 'TextEdit', });
lyr_Diversidade_21.set('fieldImages', {'parcela': 'TextEdit', 'area': 'TextEdit', 'origem': 'TextEdit', 'Riqueza T.': 'TextEdit', 'No. Indiv.': 'TextEdit', 'Dominancia': 'TextEdit', 'Div. Shann': 'TextEdit', 'Equitab.': 'TextEdit', 'Densidade': 'TextEdit', });
lyr_DensidadeIndha_22.set('fieldImages', {'parcela': 'TextEdit', 'area': 'TextEdit', 'origem': 'TextEdit', 'Riqueza T.': 'TextEdit', 'No. Indiv.': 'TextEdit', 'Dominancia': 'TextEdit', 'Div. Shann': 'TextEdit', 'Equitab.': 'TextEdit', 'Densidade': 'TextEdit', });
lyr_SAFPropostoEspcies_23.set('fieldImages', {'Tag.arvore': 'TextEdit', 'num.arvore': 'TextEdit', 'n.fuste': 'TextEdit', 'nome.cient': 'TextEdit', 'CAP.cm': 'TextEdit', 'DAP.cm': 'TextEdit', 'alt.total.': 'TextEdit', 'alt.com': 'TextEdit', 'diam.copa.': 'TextEdit', 'volume.m3': 'TextEdit', 'qualide.fu': 'TextEdit', 'sanidade.a': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'Zona': 'TextEdit', });
lyr_SAFPropostoQualidadedofuste_24.set('fieldImages', {'Tag.arvore': 'TextEdit', 'num.arvore': 'TextEdit', 'n.fuste': 'TextEdit', 'nome.cient': 'TextEdit', 'CAP.cm': 'TextEdit', 'DAP.cm': 'TextEdit', 'alt.total.': 'TextEdit', 'alt.com': 'TextEdit', 'diam.copa.': 'TextEdit', 'volume.m3': 'TextEdit', 'qualide.fu': 'TextEdit', 'sanidade.a': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'Zona': 'TextEdit', });
lyr_SAFPropostoSanidade_25.set('fieldImages', {'Tag.arvore': 'TextEdit', 'num.arvore': 'TextEdit', 'n.fuste': 'TextEdit', 'nome.cient': 'TextEdit', 'CAP.cm': 'TextEdit', 'DAP.cm': 'TextEdit', 'alt.total.': 'TextEdit', 'alt.com': 'TextEdit', 'diam.copa.': 'TextEdit', 'volume.m3': 'TextEdit', 'qualide.fu': 'TextEdit', 'sanidade.a': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'Zona': 'TextEdit', });
lyr_SAFPropostoDAP_26.set('fieldImages', {'Tag.arvore': 'TextEdit', 'num.arvore': 'TextEdit', 'n.fuste': 'TextEdit', 'nome.cient': 'TextEdit', 'CAP.cm': 'TextEdit', 'DAP.cm': 'TextEdit', 'alt.total.': 'TextEdit', 'alt.com': 'TextEdit', 'diam.copa.': 'TextEdit', 'volume.m3': 'TextEdit', 'qualide.fu': 'TextEdit', 'sanidade.a': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'Zona': 'TextEdit', });
lyr_SAFPropostoAlturaTotal_27.set('fieldImages', {'Tag.arvore': 'TextEdit', 'num.arvore': 'TextEdit', 'n.fuste': 'TextEdit', 'nome.cient': 'TextEdit', 'CAP.cm': 'TextEdit', 'DAP.cm': 'TextEdit', 'alt.total.': 'TextEdit', 'alt.com': 'TextEdit', 'diam.copa.': 'TextEdit', 'volume.m3': 'TextEdit', 'qualide.fu': 'TextEdit', 'sanidade.a': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'Zona': 'TextEdit', });
lyr_EstruturasPropostas_28.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_PontosdeInteresse_29.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_VegetaoDensa_5.set('fieldLabels', {});
lyr_VegetaodePequenoPorte_6.set('fieldLabels', {});
lyr_Rocha_7.set('fieldLabels', {});
lyr_SoloExposto_8.set('fieldLabels', {});
lyr_OrtomosaicoelimitesSitioConceicao_Limites_9.set('fieldLabels', {});
lyr_OrtomosaicoelimitesSAF_Modelo_10.set('fieldLabels', {});
lyr_OrtomosaicoelimitesRPPN_AC_2_Limites_11.set('fieldLabels', {});
lyr_OrtomosaicoelimitesRPPN_AC_1_Conceicao_Limites_12.set('fieldLabels', {});
lyr_Contornos_DEM_ALOS_10m_Cota_RPPN_AC_13.set('fieldLabels', {});
lyr_CanaisPropostos_14.set('fieldLabels', {});
lyr_Nascentespropostas_15.set('fieldLabels', {});
lyr_Trilhaspropostasantigas_16.set('fieldLabels', {});
lyr_NovasTrilhasPropostas_17.set('fieldLabels', {});
lyr_Parcelas_18.set('fieldLabels', {});
lyr_Dominncia_19.set('fieldLabels', {});
lyr_RiquezaTaxonomica_20.set('fieldLabels', {});
lyr_Diversidade_21.set('fieldLabels', {});
lyr_DensidadeIndha_22.set('fieldLabels', {});
lyr_SAFPropostoEspcies_23.set('fieldLabels', {});
lyr_SAFPropostoQualidadedofuste_24.set('fieldLabels', {});
lyr_SAFPropostoSanidade_25.set('fieldLabels', {});
lyr_SAFPropostoDAP_26.set('fieldLabels', {});
lyr_SAFPropostoAlturaTotal_27.set('fieldLabels', {});
lyr_EstruturasPropostas_28.set('fieldLabels', {});
lyr_PontosdeInteresse_29.set('fieldLabels', {});
lyr_PontosdeInteresse_29.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});