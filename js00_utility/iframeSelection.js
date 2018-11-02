function disableAllButtons()
{

    openAddCircleButton.disabled=true
    openAddIconButton.disabled=true
     openAddEllipseButton.disabled=true
    openAddRectButton.disabled=true
    openAddTextButton.disabled=true
    openAddPathButton.disabled=true
    openAddSymbolButton.disabled=true
    openAddPolygonButton.disabled=true
        openAddBGimageButton.disabled=true

    openAddTextureButton.disabled=true
    openAddGradientButton.disabled=true


}
function enableAllButtons()
{
       openAddCircleButton.disabled=false
    openAddIconButton.disabled=false
    openAddEllipseButton.disabled=false
    openAddRectButton.disabled=false
    openAddTextButton.disabled=false
    openAddPathButton.disabled=false
    openAddSymbolButton.disabled=false
    openAddPolygonButton.disabled=false

    openAddTextureButton.disabled=false
    openAddGradientButton.disabled=false
        openAddBGimageButton.disabled=false

    openAddBGimageButton.style.borderColor=""
    openAddCircleButton.style.borderColor=""
    openAddIconButton.style.borderColor=""
    openAddEllipseButton.style.borderColor=""
    openAddRectButton.style.borderColor=""
    openAddTextButton.style.borderColor=""
    openAddPathButton.style.borderColor=""
    openAddSymbolButton.style.borderColor=""
    openAddPolygonButton.style.borderColor=""
    openAddTextureButton.style.borderColor=""
    openAddGradientButton.style.borderColor=""


    if(svgSaveDiv.style.display!="none")
        showSaveSVG()


}
function openAddArcDraw()
{
    if(addElemArcLoad==true)
        startArcDraw()

        openIframe("AddElem", "addElemArc", 0)
        mySVG.setAttribute("onclick", "placeDrawArc(event)")

        openAddArcButton.style.borderStyle = "inset"
}


function openAddBGimage()
{
   if(addElemBGimageLoad==true)
       startBGimageDraw()
    if(document.getElementById(DrawBGimageEditId))
    {   var cw = addElemBGimageCw
        cw.editTemplateCheckDiv.style.visibility="visible"


    }

        openIframe("AddElem", "addElemBGimage", 0)
       // mySVG.setAttribute("onclick", "plantSymbolSymbol(event)")

        openAddBGimageButton.style.borderStyle = "inset"
}




function openAddSymbolDraw()
{
    if(addElemSymbolLoad==true)
        startSymbolDraw()

        openIframe("AddElem", "addElemSymbol", 0)
        mySVG.setAttribute("onclick", "plantSymbolSymbol(event)")

        openAddSymbolButton.style.borderStyle = "inset"
}
function openAddIconDraw()
{
    if(addElemIconLoad==true)
        startIconDraw()

        openIframe("AddElem", "addElemIcon", 0)
        mySVG.setAttribute("onclick", "plantIcon(event)")

        openAddIconButton.style.borderStyle = "inset"
}

function openAddTexture()
{
    if(addElemTextureLoad==true)
        startTextureDraw()

        openIframe("AddElem", "addElemTexture", 0)
        // mySVG.setAttribute("onclick", "plantSymbolSymbol(event)")

        openAddTextureButton.style.borderStyle = "inset"
}

function openAddGradient()
{
    if(addElemGradientLoad==true)
        startGradientDraw()

        openIframe("AddElem", "addElemGradient", 0)
        // mySVG.setAttribute("onclick", "plantSymbolSymbol(event)")

        openAddGradientButton.style.borderStyle = "inset"
}

function openAddCircleDraw()
{
    if(addElemCircleLoad==true)
        startCircleDraw()

        openIframe("AddElem", "addElemCircle", 0)

        openAddCircleButton.style.borderStyle = "inset"
}

function openAddEllipseDraw()
{
    if(addElemEllipseLoad==true)
        startEllipseDraw()

        openIframe("AddElem", "addElemEllipse", 0)

        openAddEllipseButton.style.borderStyle = "inset"
}

function openAddPolygonDraw()
{
    if(addElemPolygonLoad==true)
        startPolygonDraw()

        openIframe("AddElem", "addElemPolygon", 0)

        openAddPolygonButton.style.borderStyle = "inset"
}

function openAddRectDraw()
{
    if(addElemRectLoad==true)
        startRectDraw()

        openIframe("AddElem", "addElemRect", 0)

        openAddRectButton.style.borderStyle = "inset"
}

function openAddTextDraw()
{
    if(addElemTextLoad==true)
        startTextDraw()
        openIframe("AddElem", "addElemText", 0)

        openAddTextButton.style.borderStyle = "inset"

}
function openAddPathDraw()
{

    if(addElemPathLoad==false)
        openIframe("AddElem", "addElemPath", 0)
        else
        {
            openIframe("AddElem", "addElemPath", 0)
            startPathDraw()
        }

        openAddPathButton.style.borderStyle = "inset"

}

var AddElemOpen = false //--true if any addElem Frame is viz=true
function isAddElemOpen() //---called from iframeSelection.js---
{
    AddElemOpen = false

    if(addElemTextViz==true)AddElemOpen = true;
    if(addElemCircleViz==true)AddElemOpen = true;
    if(addElemIconViz==true)AddElemOpen = true;
    if(addElemEllipseViz==true)AddElemOpen = true;
    if(addElemRectViz==true)AddElemOpen = true;
    if(addElemTextViz==true)AddElemOpen = true;
    if(addElemSymbolViz==true)AddElemOpen = true;
    if(addElemTextureViz==true)AddElemOpen = true;
    if(addElemGradientViz==true)AddElemOpen = true;
    if(addElemPolygonViz==true)AddElemOpen = true;
    if(addElemArcViz==true)AddElemOpen = true;

}

function openIframe(Dir, name, left)
{
    closeAllFrames()
    var top = 30

    var fName = eval(name+"Load")
    var myFrame = document.getElementById(name+'Frame')
    var myDiv = d3.select("#"+name+"FrameDiv")

    if(fName==false)
    {
        eval(name+"Load=true")
        myFrame.src = Dir+"/"+name+".htm";
        eval(name+"Cw=document.getElementById(name+'Frame').contentWindow")
    }
    else
    {

        var height = myFrame.scrollHeight

    }
    myFrame.style.overflow = "hidden"

    myDiv.transition().duration(800).style("height", height+"px")

    eval(name+"Viz=true")

    myDiv.style("visibility", "visible")
    myDiv.style("left", left+"px")
    myDiv.style("top", top+"px")

    if(name=="addElemRect")
        startRectDraw()
        if(name=="addElemCircle")
        startCircleDraw()

        if(name=="addElemText")
        startTextDraw()

}

//---fired from iframe onload----
function sizeFrame(name, width, height)
{
    var myFrame = document.getElementById(name+'Frame')
    var myDiv = d3.select("#"+name+"FrameDiv")

    myFrame.style.width = width+"px"
    myFrame.style.height = height+"px"

    myDiv.style("width", width+"px")
    myDiv.transition().duration(800).style("height", height+"px")

}
//---X button in iframe---
function closeIframe(name)
{
    if(svgSaveDiv.style.display=="block")
        showSaveSVG()
        mySVG.removeAttribute("onclick")
            openAddBGimageButton.style.borderStyle = ""

        openAddCircleButton.style.borderStyle = ""
        openAddArcButton.style.borderStyle = ""
        openAddIconButton.style.borderStyle = ""
        openAddEllipseButton.style.borderStyle = ""
        openAddRectButton.style.borderStyle = ""
        openAddTextButton.style.borderStyle = ""
        openAddPathButton.style.borderStyle = ""
        openAddSymbolButton.style.borderStyle = ""
        openAddPolygonButton.style.borderStyle = ""
        openAddTextureButton.style.borderStyle = ""
        openAddGradientButton.style.borderStyle = ""

        var myDiv = d3.select("#"+name+"FrameDiv")
        myDiv.transition().style("height", 1+"px")
        .on("end", function()
            {
                myDiv.style("visibility", "hidden")
            }
        )
        eval(name+"Viz=false")

}

//---Only one frame visable: fired when another  frame is chosen
function closeAllFrames()
{
    introDiv.style.visibility = "hidden"
    helpDiv.style.visibility = "hidden"
    helpDiv.style.height = "1px"
    if(svgSaveDiv.style.display=="block")
        showSaveSVG()
         openAddBGimageButton.style.borderStyle = ""
        openAddCircleButton.style.borderStyle = ""
        openAddArcButton.style.borderStyle = ""
        openAddIconButton.style.borderStyle = ""

        openAddEllipseButton.style.borderStyle = ""
        openAddRectButton.style.borderStyle = ""
        openAddTextButton.style.borderStyle = ""
        openAddPathButton.style.borderStyle = ""
        openAddSymbolButton.style.borderStyle = ""
        openAddPolygonButton.style.borderStyle = ""
        openAddTextureButton.style.borderStyle = ""
        openAddGradientButton.style.borderStyle = ""
        for(var k = 0; k<iframeNameArray.length; k++)
    {
        var name = iframeNameArray[k]
        var viz = eval(name+"Viz")
        if(viz==true)
        {

            if(name=="addElemText")
                closeDrawText()

                if(name=="addElemCircle")
                closeDrawCircle()

                if(name=="addElemTexture")
                closeDrawTexture()

                if(name=="addElemEllipse")
                closeDrawEllipse()
                if(name=="addElemRect")
                closeDrawRect()

                if(name=="addElemPath")
                closeDrawPath()
                if(name=="addElemSymbol")
                closeDrawSymbol()

                var myDiv = d3.select("#"+name+"FrameDiv")
                myDiv.style("height", 1+"px")
                myDiv.style("visibility", "hidden")
                myDiv.style("overflow", "hidden")

        }
        eval(name+"Viz=false")
    }

}
addElemBGimageLoad = false
var addElemCircleLoad = false
var addElemArcLoad = false
var addElemIconLoad = false
var addElemSymbolLoad = false
var addElemPolygonLoad = false
var addElemTextureLoad = false
var addElemGradientLoad = false
var addElemSymbolEditLoad = false
var addElemEllipseLoad = false
var addElemRectLoad = false
var addElemTextLoad = false
var addElemPathLoad = false
var addElemPathEditLoad = false
addElemBGimageViz = false
var addElemCircleViz = false
var addElemArcViz = false
var addElemIconViz = false

var addElemSymbolViz = false
var addElemPolygonViz = false
var addElemTextureViz = false
var addElemGradientViz = false
var addElemSymbolEditViz = false
var addElemEllipseViz = false
var addElemRectViz = false
var addElemTextViz = false
var addElemPathViz = false
var addElemPathEditViz = false

var addElemCircleCw
var addElemArcCw
var addElemIconCw
 var addElemBGimageCw
var addElemSymbolCw
var addElemPolygonCw
var addElemTextureCw
var addElemGradientCw
var addElemSymbolEditCw
var addElemEllipseCw
var addElemRectCw
var addElemTextCw
var addElemPathCw
var addElemPathEditCw

//---each iframe---

var iframeNameArray =[]

iframeNameArray[0] = 'addElemText'

iframeNameArray[1] = 'addElemPath'
iframeNameArray[2] = 'addElemPathEdit'

iframeNameArray[3] = 'addElemCircle'
iframeNameArray[4] = 'addElemEllipse'
iframeNameArray[5] = 'addElemRect'
iframeNameArray[6] = 'addElemSymbol'
iframeNameArray[7] = 'addElemSymbolEdit'
iframeNameArray[8] = 'addElemTexture'
iframeNameArray[9] = 'addElemIcon'
iframeNameArray[10] = 'addElemGradient'
iframeNameArray[11] = 'addElemPolygon'
iframeNameArray[12] = 'addElemArc'
iframeNameArray[13] = 'addElemBGimage'
