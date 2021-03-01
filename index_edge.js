(function($, Edge, compId){
var im='https://raw.githubusercontent.com/DeathBarmaglot/thermo/main/images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: '_1',
                type: 'image',
                rect: ['0px', '0px','300px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.jpg",'0px','0px']
            },
            {
                id: '_2',
                type: 'image',
                rect: ['0px', '0px','300px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.jpg",'0px','0px']
            },
            {
                id: '_3',
                type: 'image',
                rect: ['0px', '0px','300px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.jpg",'0px','0px']
            },
            {
                id: '_4',
                type: 'image',
                rect: ['0px', '0px','300px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.jpg",'0px','0px']
            },
            {
                id: '_5',
                type: 'image',
                rect: ['0px', '0px','300px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"5.jpg",'0px','0px']
            },
            {
                id: '_0',
                type: 'image',
                rect: ['0px', '-1px','303px','184px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"0.jpg",'0px','0px']
            },
            {
                id: 'f2',
                type: 'image',
                rect: ['-1px', '0px','301px','181px','auto', 'auto'],
                clip: ['rect(-3px 301px 181px -9px)'],
                fill: ["rgba(0,0,0,0)",im+"f.png",'0px','0px'],
                transform: [[],[],[],['1.01935','1.06522']]
            },
            {
                id: '_15',
                type: 'image',
                rect: ['-9px', '-4px','318px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: '_23',
                type: 'image',
                rect: ['-16px', '53px','335px','76px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: '_33',
                type: 'image',
                rect: ['-17px', '55px','337px','72px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: '_43',
                type: 'image',
                rect: ['-18px', '60px','338px','62px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: '_53',
                type: 'image',
                rect: ['-15px', '41px','332px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"5.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: '_62',
                type: 'image',
                rect: ['4px', '49px','294px','83px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"6.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: '_72',
                type: 'image',
                rect: ['1px', '61px','301px','59px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"7.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: '_82',
                type: 'image',
                rect: ['-24px', '55px','351px','71px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"8.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__32}": [
                ["style", "left", '-367px'],
                ["style", "top", '-171px']
            ],
            "${__22}": [
                ["style", "left", '-358px'],
                ["style", "top", '-180px']
            ],
            "${__52}": [
                ["style", "left", '-353px'],
                ["style", "top", '-234px']
            ],
            "${__6}": [
                ["style", "left", '-263px'],
                ["style", "top", '-193px']
            ],
            "${__5}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${__43}": [
                ["style", "top", '60px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '62px'],
                ["style", "opacity", '0'],
                ["style", "left", '-18px'],
                ["style", "width", '338px']
            ],
            "${__15}": [
                ["style", "top", '-4px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "height", '100px'],
                ["style", "opacity", '0'],
                ["style", "left", '-9px'],
                ["style", "width", '318px']
            ],
            "${__62}": [
                ["style", "top", '49px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '83px'],
                ["style", "opacity", '0'],
                ["style", "left", '4px'],
                ["style", "width", '294px']
            ],
            "${__23}": [
                ["style", "top", '53px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '76px'],
                ["style", "opacity", '0'],
                ["style", "left", '-16px'],
                ["style", "width", '335px']
            ],
            "${__53}": [
                ["style", "top", '41px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '100px'],
                ["style", "opacity", '0'],
                ["style", "left", '-15px'],
                ["style", "width", '332px']
            ],
            "${__33}": [
                ["style", "top", '55px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '72px'],
                ["style", "opacity", '0'],
                ["style", "left", '-17px'],
                ["style", "width", '337px']
            ],
            "${__4}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${__3}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${__72}": [
                ["style", "top", '61px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '59px'],
                ["style", "opacity", '0'],
                ["style", "left", '1px'],
                ["style", "width", '301px']
            ],
            "${__42}": [
                ["style", "left", '-367px'],
                ["style", "top", '-144px']
            ],
            "${__12}": [
                ["style", "left", '-317px'],
                ["style", "top", '-234px']
            ],
            "${__0}": [
                ["style", "top", '-1px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${__1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${__82}": [
                ["style", "top", '55px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '71px'],
                ["style", "opacity", '0'],
                ["style", "left", '-24px'],
                ["style", "width", '351px']
            ],
            "${__8}": [
                ["style", "top", '-166px'],
                ["style", "left", '-398px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_f2}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1.06522'],
                ["transform", "scaleX", '1.01935'],
                ["style", "opacity", '0'],
                ["style", "clip", [-3,301,181,-9], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-1px']
            ],
            "${__7}": [
                ["style", "left", '-281px'],
                ["style", "top", '-139px']
            ],
            "${__2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 32000,
            autoPlay: true,
            timeline: [
                { id: "eid157", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
                { id: "eid122", tween: [ "transform", "${__82}", "scaleY", '0.8', { fromValue: '0'}], position: 28718, duration: 304, easing: "easeInOutCubic" },
                { id: "eid123", tween: [ "transform", "${__82}", "scaleY", '0', { fromValue: '0.8'}], position: 31477, duration: 304, easing: "easeInOutCubic" },
                { id: "eid108", tween: [ "style", "${__62}", "opacity", '1', { fromValue: '0'}], position: 20456, duration: 304, easing: "easeInOutCubic" },
                { id: "eid109", tween: [ "style", "${__62}", "opacity", '0', { fromValue: '1'}], position: 24545, duration: 304, easing: "easeInOutCubic" },
                { id: "eid139", tween: [ "style", "${__62}", "opacity", '0', { fromValue: '0'}], position: 32000, duration: 0 },
                { id: "eid104", tween: [ "transform", "${__53}", "scaleY", '0.8', { fromValue: '0'}], position: 16072, duration: 304, easing: "easeInOutCubic" },
                { id: "eid105", tween: [ "transform", "${__53}", "scaleY", '0', { fromValue: '0.8'}], position: 19933, duration: 304, easing: "easeInOutCubic" },
                { id: "eid10", tween: [ "style", "${__4}", "opacity", '1', { fromValue: '0'}], position: 11851, duration: 304 },
                { id: "eid11", tween: [ "style", "${__4}", "opacity", '0', { fromValue: '1'}], position: 16151, duration: 304 },
                { id: "eid135", tween: [ "style", "${__4}", "opacity", '0', { fromValue: '0'}], position: 32000, duration: 0 },
                { id: "eid110", tween: [ "transform", "${__62}", "scaleY", '0.8', { fromValue: '0'}], position: 20152, duration: 304, easing: "easeInOutCubic" },
                { id: "eid111", tween: [ "transform", "${__62}", "scaleY", '0', { fromValue: '0.8'}], position: 24326, duration: 304, easing: "easeInOutCubic" },
                { id: "eid112", tween: [ "transform", "${__72}", "scaleX", '0.8', { fromValue: '0'}], position: 24359, duration: 304, easing: "easeInOutCubic" },
                { id: "eid113", tween: [ "transform", "${__72}", "scaleX", '0', { fromValue: '0.8'}], position: 27704, duration: 304, easing: "easeInOutCubic" },
                { id: "eid18", tween: [ "style", "${__2}", "opacity", '1', { fromValue: '0'}], position: 20465, duration: 304 },
                { id: "eid19", tween: [ "style", "${__2}", "opacity", '0', { fromValue: '1'}], position: 28641, duration: 304 },
                { id: "eid137", tween: [ "style", "${__2}", "opacity", '0', { fromValue: '0'}], position: 32000, duration: 0 },
                { id: "eid100", tween: [ "transform", "${__53}", "scaleX", '0.8', { fromValue: '0'}], position: 16072, duration: 304, easing: "easeInOutCubic" },
                { id: "eid101", tween: [ "transform", "${__53}", "scaleX", '0', { fromValue: '0.8'}], position: 19933, duration: 304, easing: "easeInOutCubic" },
                { id: "eid90", tween: [ "style", "${__43}", "opacity", '1', { fromValue: '0'}], position: 11738, duration: 304, easing: "easeInOutCubic" },
                { id: "eid91", tween: [ "style", "${__43}", "opacity", '0', { fromValue: '1'}], position: 15879, duration: 357, easing: "easeInOutCubic" },
                { id: "eid138", tween: [ "style", "${__43}", "opacity", '0', { fromValue: '0'}], position: 32000, duration: 0 },
                { id: "eid22", tween: [ "style", "${_f2}", "opacity", '1', { fromValue: '0'}], position: 304, duration: 304 },
                { id: "eid64", tween: [ "transform", "${__15}", "scaleY", '0', { fromValue: '0.8'}], position: 4164, duration: 304, easing: "easeInOutCubic" },
                { id: "eid86", tween: [ "transform", "${__33}", "scaleY", '0.8', { fromValue: '0'}], position: 7771, duration: 304, easing: "easeInOutCubic" },
                { id: "eid87", tween: [ "transform", "${__33}", "scaleY", '0', { fromValue: '0.8'}], position: 11487, duration: 304, easing: "easeInOutCubic" },
                { id: "eid8", tween: [ "style", "${__5}", "opacity", '1', { fromValue: '0'}], position: 4273, duration: 304 },
                { id: "eid9", tween: [ "style", "${__5}", "opacity", '0', { fromValue: '1'}], position: 11851, duration: 304 },
                { id: "eid127", tween: [ "style", "${__5}", "opacity", '0', { fromValue: '0'}], position: 32000, duration: 0 },
                { id: "eid74", tween: [ "style", "${__23}", "opacity", '1', { fromValue: '0'}], position: 4392, duration: 304, easing: "easeInOutCubic" },
                { id: "eid80", tween: [ "style", "${__23}", "opacity", '0', { fromValue: '1'}], position: 7652, duration: 304, easing: "easeInOutCubic" },
                { id: "eid128", tween: [ "style", "${__23}", "opacity", '0', { fromValue: '0'}], position: 32000, duration: 0 },
                { id: "eid84", tween: [ "style", "${__33}", "opacity", '1', { fromValue: '0'}], position: 7889, duration: 304, easing: "easeInOutCubic" },
                { id: "eid85", tween: [ "style", "${__33}", "opacity", '0', { fromValue: '1'}], position: 11487, duration: 304, easing: "easeInOutCubic" },
                { id: "eid125", tween: [ "style", "${__33}", "opacity", '0', { fromValue: '0'}], position: 32000, duration: 0 },
                { id: "eid57", tween: [ "style", "${__15}", "opacity", '1', { fromValue: '0'}], position: 304, duration: 304, easing: "easeInOutCubic" },
                { id: "eid69", tween: [ "style", "${__15}", "opacity", '0', { fromValue: '1'}], position: 4164, duration: 304, easing: "easeInOutCubic" },
                { id: "eid129", tween: [ "style", "${__15}", "opacity", '0', { fromValue: '0'}], position: 32000, duration: 0 },
                { id: "eid63", tween: [ "transform", "${__15}", "scaleX", '0', { fromValue: '0.8'}], position: 4164, duration: 304, easing: "easeInOutCubic" },
                { id: "eid73", tween: [ "transform", "${__23}", "scaleX", '0.8', { fromValue: '0'}], position: 4273, duration: 304, easing: "easeInOutCubic" },
                { id: "eid79", tween: [ "transform", "${__23}", "scaleX", '0', { fromValue: '0.8'}], position: 7652, duration: 304, easing: "easeInOutCubic" },
                { id: "eid106", tween: [ "transform", "${__62}", "scaleX", '0.8', { fromValue: '0'}], position: 20152, duration: 304, easing: "easeInOutCubic" },
                { id: "eid107", tween: [ "transform", "${__62}", "scaleX", '0', { fromValue: '0.8'}], position: 24326, duration: 304, easing: "easeInOutCubic" },
                { id: "eid75", tween: [ "transform", "${__23}", "scaleY", '0.8', { fromValue: '0'}], position: 4273, duration: 304, easing: "easeInOutCubic" },
                { id: "eid81", tween: [ "transform", "${__23}", "scaleY", '0', { fromValue: '0.8'}], position: 7652, duration: 304, easing: "easeInOutCubic" },
                { id: "eid92", tween: [ "transform", "${__43}", "scaleY", '0.8', { fromValue: '0'}], position: 11579, duration: 304, easing: "easeInOutCubic" },
                { id: "eid93", tween: [ "transform", "${__43}", "scaleY", '0', { fromValue: '0.8'}], position: 15879, duration: 304, easing: "easeInOutCubic" },
                { id: "eid12", tween: [ "style", "${__3}", "opacity", '1', { fromValue: '0'}], position: 16151, duration: 304 },
                { id: "eid13", tween: [ "style", "${__3}", "opacity", '0', { fromValue: '1'}], position: 20465, duration: 304 },
                { id: "eid126", tween: [ "style", "${__3}", "opacity", '0', { fromValue: '0'}], position: 32000, duration: 0 },
                { id: "eid82", tween: [ "transform", "${__33}", "scaleX", '0.8', { fromValue: '0'}], position: 7771, duration: 304, easing: "easeInOutCubic" },
                { id: "eid83", tween: [ "transform", "${__33}", "scaleX", '0', { fromValue: '0.8'}], position: 11487, duration: 304, easing: "easeInOutCubic" },
                { id: "eid118", tween: [ "transform", "${__82}", "scaleX", '0.8', { fromValue: '0'}], position: 28718, duration: 304, easing: "easeInOutCubic" },
                { id: "eid119", tween: [ "transform", "${__82}", "scaleX", '0', { fromValue: '0.8'}], position: 31477, duration: 304, easing: "easeInOutCubic" },
                { id: "eid88", tween: [ "transform", "${__43}", "scaleX", '0.8', { fromValue: '0'}], position: 11579, duration: 304, easing: "easeInOutCubic" },
                { id: "eid89", tween: [ "transform", "${__43}", "scaleX", '0', { fromValue: '0.8'}], position: 15879, duration: 304, easing: "easeInOutCubic" },
                { id: "eid116", tween: [ "transform", "${__72}", "scaleY", '0.8', { fromValue: '0'}], position: 24359, duration: 304, easing: "easeInOutCubic" },
                { id: "eid117", tween: [ "transform", "${__72}", "scaleY", '0', { fromValue: '0.8'}], position: 27704, duration: 304, easing: "easeInOutCubic" },
                { id: "eid120", tween: [ "style", "${__82}", "opacity", '1', { fromValue: '0'}], position: 28889, duration: 304, easing: "easeInOutCubic" },
                { id: "eid121", tween: [ "style", "${__82}", "opacity", '0', { fromValue: '1'}], position: 31696, duration: 304, easing: "easeInOutCubic" },
                { id: "eid20", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0'}], position: 28641, duration: 304 },
                { id: "eid154", tween: [ "style", "${__1}", "opacity", '0', { fromValue: '1'}], position: 31605, duration: 395 },
                { id: "eid5", tween: [ "style", "${__0}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 304 },
                { id: "eid7", tween: [ "style", "${__0}", "opacity", '0', { fromValue: '1'}], position: 4273, duration: 304 },
                { id: "eid130", tween: [ "style", "${__0}", "opacity", '0', { fromValue: '0'}], position: 32000, duration: 0 },
                { id: "eid102", tween: [ "style", "${__53}", "opacity", '1', { fromValue: '0'}], position: 16236, duration: 304, easing: "easeInOutCubic" },
                { id: "eid103", tween: [ "style", "${__53}", "opacity", '0', { fromValue: '1'}], position: 20153, duration: 304, easing: "easeInOutCubic" },
                { id: "eid131", tween: [ "style", "${__53}", "opacity", '0', { fromValue: '0'}], position: 32000, duration: 0 },
                { id: "eid114", tween: [ "style", "${__72}", "opacity", '1', { fromValue: '0'}], position: 24629, duration: 304, easing: "easeInOutCubic" },
                { id: "eid115", tween: [ "style", "${__72}", "opacity", '0', { fromValue: '1'}], position: 27923, duration: 304, easing: "easeInOutCubic" },
                { id: "eid136", tween: [ "style", "${__72}", "opacity", '0', { fromValue: '0'}], position: 32000, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-2780808");
