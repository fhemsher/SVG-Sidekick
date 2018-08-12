//-------------------Path zone marker----
var PathEditZoneMarker = false
function pathEditZoneMarkerChecked()
{
    var cw = addElemPathEditCw
    if(cw.pathEditZoneMarkerCheck.checked)
    {
        PathEditZoneMarker = true
        cw.pathEditZoneMarkerDiv.style.visibility = "visible"
    }
    else
    {
        cw.pathEditZoneMarkerDiv.style.visibility = "hidden"

        if(PathEditZoneMarker)
        {
            for(var k = 0; k<ZoneMarkerEditArray.length; k++)
            {
                var marker = ZoneMarkerEditArray[k]
                domActiveElemG.removeChild(marker)

            }

            cw.pathEditZoneMarkerSelect.selectedIndex = 0
            ZoneMarkerEditArray =[]

        }

        PathEditZoneMarker = false
    }

}
var ZoneMarkerEditArray =[]
function pathEditZoneMarkerSelected()
{
    var cw = addElemPathEditCw
    if(PathEditZoneMarker==true&&activeElem)
    {
        //---remove previous---
        for(var k = 0; k<ZoneMarkerEditArray.length; k++)
        {
            var marker = ZoneMarkerEditArray[k]
            domActiveElemG.removeChild(marker)

        }

        ZoneMarkerEditArray =[]
        var unicode = cw.pathEditZoneMarkerSelect.options[cw.pathEditZoneMarkerSelect.selectedIndex].value
        var fill = cw.pathEditZoneMarkerFillColorSelect.options[cw.pathEditZoneMarkerFillColorSelect.selectedIndex].value
        var fontSize = +cw.pathEditZoneMarkerFontSizeSelect.options[cw.pathEditZoneMarkerFontSizeSelect.selectedIndex].text
        var quantity = +cw.pathEditZoneMarkerQuantitySelect.options[cw.pathEditZoneMarkerQuantitySelect.selectedIndex].text

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
                var myPath = drawPathEditSmooth

                var pathEditLen = myPath.getTotalLength()

                var seg = (pathEditLen/quantity)
                for (var k = 0; k<quantity; k++)
            {
                direction *= -1;
                var segLen = k*seg

                var p1 = myPath.getPointAtLength(segLen),
                p2 = myPath.getPointAtLength((segLen)+direction),
                angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
                var clone = icon.cloneNode(true)
                clone.setAttribute("pointer-events", "none")

                clone.setAttribute("transform", "translate(" + p1.x + "," + p1.y + ")rotate(" + angle + ")");

                domActiveElemG.appendChild(clone)
                ZoneMarkerEditArray.push(clone)

            }

    }
    window.focus()

}

function pathEditZoneMarkerFillColorSelected()
{
    var cw = addElemPathEditCw
    var fill = cw.pathEditZoneMarkerFillColorSelect.options[cw.pathEditZoneMarkerFillColorSelect.selectedIndex].value

    cw.pathEditZoneMarkerFillBg.style.backgroundColor = fill
    if(ZoneMarkerEditArray.length>0)
    {
        for(var k = 0; k<ZoneMarkerEditArray.length; k++)
        {
            var marker = ZoneMarkerEditArray[k]
            marker.setAttribute("fill", fill)

        }
    }
}

function pathEditZoneMarkerQuantitySelected()
{
    if(ZoneMarkerEditArray.length>0)
        refreshEditMarkers()

}
function pathEditZoneMarkerFontSizeSelected()
{

    var cw = addElemPathEditCw
    var fontSize = cw.pathEditZoneMarkerFontSizeSelect.options[cw.pathEditZoneMarkerFontSizeSelect.selectedIndex].text

    for(var k = 0; k<ZoneMarkerEditArray.length; k++)
    {
        var marker = ZoneMarkerEditArray[k]
        marker.setAttribute("font-size", fontSize)

    }

}
//---point drag/quantity change---
function refreshEditMarkers()
{
    var cw = addElemPathEditCw
    for(var k = ZoneMarkerEditArray.length-1; k>=0; k--)
    {
        var marker = ZoneMarkerEditArray[k]
        domActiveElemG.removeChild(marker)

    }

    ZoneMarkerEditArray =[]
    var unicode = cw.pathEditZoneMarkerSelect.options[cw.pathEditZoneMarkerSelect.selectedIndex].value
    var fill = cw.pathEditZoneMarkerFillColorSelect.options[cw.pathEditZoneMarkerFillColorSelect.selectedIndex].value
    var fontSize = +cw.pathEditZoneMarkerFontSizeSelect.options[cw.pathEditZoneMarkerFontSizeSelect.selectedIndex].text
    var quantity = +cw.pathEditZoneMarkerQuantitySelect.options[cw.pathEditZoneMarkerQuantitySelect.selectedIndex].text
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
            var myPath = drawPathEditSmooth

            var pathEditLen = myPath.getTotalLength()

            var seg = (pathEditLen/quantity)
            for (var k = 0; k<quantity; k++)
        {
            direction *= -1;
            var segLen = k*seg

            var p1 = myPath.getPointAtLength(segLen),
            p2 = myPath.getPointAtLength((segLen)+direction),
            angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
            var clone = icon.cloneNode(true)
            clone.setAttribute("pointer-events", "none")

            clone.setAttribute("transform", "translate(" + p1.x + "," + p1.y + ")rotate(" + angle + ")");

            domActiveElemG.appendChild(clone)
            ZoneMarkerEditArray.push(clone)

        }

}