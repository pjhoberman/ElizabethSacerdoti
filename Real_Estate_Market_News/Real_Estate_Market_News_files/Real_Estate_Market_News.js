// Created by iWeb 3.0.4 local-build-20120814

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:6,offset:new IWPoint(3.0000,-0.0000),color:'#000000',opacity:0.300000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://www.elizabethsacerdoti.com/ElizabethSacerdoti.com/Real_Estate_Market_News/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Real_Estate_Market_News_files/Real_Estate_Market_NewsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');detectBrowser();adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
