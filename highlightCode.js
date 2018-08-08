function showSourceJS()
{
    var jsString = myScript.text

    jsString = jsString.replace(/\</g, "&lt;")
    jsString = jsString.replace(/\>/g, "&gt;")
    jsCodeDiv.innerHTML = '<pre><code id="codeJS" class="javascript">'+jsString+'</code></pre>'

    var aCode = document.getElementById('codeJS');
    hljs.highlightBlock(aCode);

}
function showSourceSVG()
{
    var svgString = svgDiv.innerHTML
    svgString = svgString.replace(/\</g, "&lt;")
    svgString = svgString.replace(/\>/g, "&gt;\n")
    svgSourceDiv.innerHTML = '<pre><code id="codeSVG" class="xml">'+svgString+'</code></pre>'

    var aCode = document.getElementById('codeSVG');

    hljs.highlightBlock(aCode);

    //svgSourceDiv.style.height = +svgSourceDiv.scrollHeight+"px"

}
function showSaveSVG()
{
    svgSaveDiv.style.height="1px"
    var saveSVG = mySVG.cloneNode(true)
    saveSVG.setAttribute("id", "sideKickSVG")
    saveSVG.removeAttribute("onmousedown")
    saveSVG.removeAttribute("onmouseup")
    saveSVG.removeAttribute("onmousemove")
    saveSVG.removeAttribute("onclick")

 for(var j = saveSVG.childNodes.length-1; j>=0; j--)
    {
        var elem = saveSVG.childNodes.item(j)
        var id = elem.getAttribute("id")

         if(id=="endArrowDefs")saveSVG.removeChild(elem)

         if(id=="domActiveElemG")saveSVG.removeChild(elem)
         if(id=="domWrapper")saveSVG.removeChild(elem)
         if(id=="coverRect")saveSVG.removeChild(elem)
         if(id=="dragDot")saveSVG.removeChild(elem)
         if(id=="pvStripChart")saveSVG.removeChild(elem)

   }


    for(var k = saveSVG.childNodes.length-1; k>=0; k--)
    {
        var elem = saveSVG.childNodes.item(k)
        if(elem.nodeName!="#text")
        {
            var id = elem.getAttribute("id")
            elem.removeAttribute("pointer-events")
            if(id=="zoomG")
            {     elem.removeChild(elem.firstChild) //---grid---
                 var gGz=elem.childNodes
                 for (m=0;m<gGz.length;m++)
                 {

                     var elem=gGz.item(m)
                     var id = elem.getAttribute("id")


                    //---remove non needed attributes---
                    if(elem.id=="topG")
                    {
                            var pathG=elem.childNodes.item(0)
                            pathG.removeAttribute("pointer-events")
                            for(var p = 0; p<pathG.childNodes.length; p++)
                            {
                                pathG.childNodes.item(p).removeAttribute("onmousedown");
                                pathG.childNodes.item(p).removeAttribute("style");
                                pathG.childNodes.item(p).removeAttribute("class");
                                pathG.childNodes.item(p).removeAttribute("id")
                                pathG.childNodes.item(p).removeAttribute("vector-effect")
                            }


                            var elemG = elem.childNodes.item(1)
                            elemG.removeAttribute("pointer-events")
                            for(var e = 0; e<elemG.childNodes.length; e++)
                            {
                                elemG.childNodes.item(e).removeAttribute("onmousedown");
                                elemG.childNodes.item(e).removeAttribute("style");
                                elemG.childNodes.item(e).removeAttribute("class");
                                elemG.childNodes.item(e).removeAttribute("id")
                                elemG.childNodes.item(e).removeAttribute("cursor")
                            }

                     }

                    if(id=="domAddSymbolG")
                    {
                        //---remove non needed attributes---
                        for(var e = 0; e<elem.childNodes.length; e++)
                        {
                            elem.childNodes.item(e).removeAttribute("onmousedown");
                            elem.childNodes.item(e).removeAttribute("id");
                            elem.childNodes.item(e).removeAttribute("class");
                            elem.childNodes.item(e).removeAttribute("onclick")
                            elem.childNodes.item(e).removeAttribute("cursor")
                        }
                    }
                    if(id=="domAddIconG")
                    {
                        //---remove non needed attributes---
                        for(var e = 0; e<elem.childNodes.length; e++)
                        {
                            elem.childNodes.item(e).removeAttribute("onmousedown");
                            elem.childNodes.item(e).removeAttribute("id");
                            elem.childNodes.item(e).removeAttribute("class");
                            elem.childNodes.item(e).removeAttribute("onclick")
                            elem.childNodes.item(e).removeAttribute("cursor")
                        }
                    }

                }
            }

        }
    }

    var svgString = new XMLSerializer().serializeToString(saveSVG)
     svgString = svgString.replace(/\</g, "&lt;")
    svgString = svgString.replace(/\>/g, "&gt;\n")
    svgSaveDiv.innerHTML = '<pre><code id="saveSVG" class="xml">'+svgString+'</code></pre>'

    var sCode = document.getElementById('saveSVG');

    hljs.highlightBlock(sCode);

    svgSaveDiv.style.height = +svgSaveDiv.scrollHeight+"px"

}
