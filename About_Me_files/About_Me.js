// Created by iWeb 3.0.4 local-build-20120814

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_3:new IWShadow({blurRadius:2,offset:new IWPoint(0.0000,-0.0000),color:'#000000',opacity:0.300000}),shadow_0:new IWShadow({blurRadius:1,offset:new IWPoint(0.0000,-0.0000),color:'#000000',opacity:0.230000}),shadow_1:new IWShadow({blurRadius:2,offset:new IWPoint(0.0000,-0.0000),color:'#000000',opacity:0.300000}),shadow_2:new IWShadow({blurRadius:2,offset:new IWPoint(0.0000,-0.0000),color:'#000000',opacity:0.300000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-3,3,6,26),url:'About_Me_files/stroke.png'},{rect:new IWRect(-3,-3,6,6),url:'About_Me_files/stroke_1.png'},{rect:new IWRect(3,-3,98,6),url:'About_Me_files/stroke_2.png'},{rect:new IWRect(101,-3,6,6),url:'About_Me_files/stroke_3.png'},{rect:new IWRect(101,3,6,26),url:'About_Me_files/stroke_4.png'},{rect:new IWRect(101,29,6,6),url:'About_Me_files/stroke_5.png'},{rect:new IWRect(3,29,98,6),url:'About_Me_files/stroke_6.png'},{rect:new IWRect(-3,29,6,6),url:'About_Me_files/stroke_7.png'}],new IWSize(104,32))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('About_Me_files/About_MeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
