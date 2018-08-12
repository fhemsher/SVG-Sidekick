//-------------------Path zone marker----
var PathZoneMarker = false
function pathZoneMarkerChecked()
{
    var cw = addElemPathCw
    if(cw.pathZoneMarkerCheck.checked)
    {
        PathZoneMarker = true
        cw.pathZoneMarkerDiv.style.visibility = "visible"
    }
    else
    {
        cw.pathZoneMarkerDiv.style.visibility = "hidden"

        if(PathZoneMarker)
        {
            for(var k = 0; k<ZoneMarkerArray.length; k++)
            {
                var marker = ZoneMarkerArray[k]
                domActiveElemG.removeChild(marker)

            }

            cw.pathZoneMarkerSelect.selectedIndex = 0
            ZoneMarkerArray =[]

        }
        PathZoneMarker = false

    }

}

var ZoneMarkerArray =[]
function pathZoneMarkerSelected()
{
    var cw = addElemPathCw
    if(PathZoneMarker==true&&activeElem)
    {
        //---remove previous---
        for(var k = 0; k<ZoneMarkerArray.length; k++)
        {
            var marker = ZoneMarkerArray[k]
            domActiveElemG.removeChild(marker)

        }

        ZoneMarkerArray =[]
        var unicode = cw.pathZoneMarkerSelect.options[cw.pathZoneMarkerSelect.selectedIndex].value
        var fill = cw.pathZoneMarkerFillColorSelect.options[cw.pathZoneMarkerFillColorSelect.selectedIndex].value
        var fontSize = +cw.pathZoneMarkerFontSizeSelect.options[cw.pathZoneMarkerFontSizeSelect.selectedIndex].text
        var quantity = +cw.pathZoneMarkerQuantitySelect.options[cw.pathZoneMarkerQuantitySelect.selectedIndex].text

        var strokeFactor = .02
        var strokeWidth = strokeFactor*fontSize

        var code = parseInt(unicode, 16)

        var icon = document.createElementNS(NS, "text")

        icon.setAttribute("font-size", fontSize)

        icon.setAttribute("text-anchor", "middle")
        icon.setAttribute("font-family", "Arial Unicode MS")
        icon.setAttribute("stroke-width", strokeWidth)
        icon.setAttribute("fill", fill)
        icon.setAttribute("stroke", "black")
        icon.textContent = String.fromCharCode(code)

        var direction = -1

        if(DrawPathType!="basis")
            var myPath = activeElem
            else
                var myPath = drawPathSmooth

                var pathLen = myPath.getTotalLength()

                var seg = (pathLen/quantity)
                for (var k = 1; k<quantity; k++)
            {
                direction *= -1
                var clone = icon.cloneNode(true)
                clone.setAttribute("pointer-events", "none")

                var segLen = k*seg

                var p1 = myPath.getPointAtLength(segLen);

                p2 = myPath.getPointAtLength((segLen)+direction);

                angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;

                clone.setAttribute("transform", "translate(" + p1.x + "," + p1.y + ")rotate(" + angle + ")");

                domActiveElemG.appendChild(clone)
                ZoneMarkerArray.push(clone)

            }

    }

}

function pathZoneMarkerFillColorSelected()
{
    var cw = addElemPathCw
    var fill = cw.pathZoneMarkerFillColorSelect.options[cw.pathZoneMarkerFillColorSelect.selectedIndex].value

    cw.pathZoneMarkerFillBg.style.backgroundColor = fill
    if(ZoneMarkerArray.length>0)
    {
        for(var k = 0; k<ZoneMarkerArray.length; k++)
        {
            var marker = ZoneMarkerArray[k]
            marker.setAttribute("fill", fill)

        }
    }
}

function pathZoneMarkerQuantitySelected()
{
    if(ZoneMarkerArray.length>0)
        pathZoneMarkerSelected()

}
function pathZoneMarkerFontSizeSelected()
{

    var cw = addElemPathCw
    var fontSize = cw.pathZoneMarkerFontSizeSelect.options[cw.pathZoneMarkerFontSizeSelect.selectedIndex].text

    for(var k = 0; k<ZoneMarkerArray.length; k++)
    {
        var marker = ZoneMarkerArray[k]
        marker.setAttribute("font-size", fontSize)

    }

}
//---point drag/quantity change---
function refreshMarkers()
{
    pathZoneMarkerSelected()
}