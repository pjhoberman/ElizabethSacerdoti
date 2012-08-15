// Created by iWeb 3.0.4 local-build-20120814

function createMediaStream_id1()
{return IWCreatePhotocast("http://www.elizabethsacerdoti.com/ElizabethSacerdoti.com/Properties_Open_Houses_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.elizabethsacerdoti.com/ElizabethSacerdoti.com',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.elizabethsacerdoti.com/ElizabethSacerdoti.com',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(2,new IWSize(241,241),new IWSize(241,68),new IWSize(290,324),27,27,0,new IWSize(5,5)),new IWPhotoFrame([IWCreateImage('Properties_Open_Houses_files/comic-1_01.png'),IWCreateImage('Properties_Open_Houses_files/comic-1_02.png'),IWCreateImage('Properties_Open_Houses_files/comic-1_03.png'),IWCreateImage('Properties_Open_Houses_files/comic-1_06.png'),IWCreateImage('Properties_Open_Houses_files/comic-1_09.png'),IWCreateImage('Properties_Open_Houses_files/comic-1_08.png'),IWCreateImage('Properties_Open_Houses_files/comic-1_07.png'),IWCreateImage('Properties_Open_Houses_files/comic-1_04.png')],null,0,0.750000,4.000000,4.000000,1.000000,1.000000,5.000000,5.000000,6.000000,6.000000,71.000000,115.000000,71.000000,115.000000,null,null,null,0.500000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Properties_Open_Houses_files/Properties_Open_HousesMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id5');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
