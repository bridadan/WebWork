// JavaScript Document
function Init()
{
     activeSelector = 0;
     selectorOpacity = new Array();
     selectorOpacity[0] = 1;
     selectorOpacity[1] = 0.3;
     selectorOpacity[2] = 0.3;
     selectorState = new Array();
     selectorState[0] = -1; // -1 idle, 0 fade in, 1 fade out
     selectorState[1] = -1;
     selectorState[2] = -1;
     presenterState = 1; // 1 running, 0 not running
     document.getElementById("selector0").style.opacity = selectorOpacity[0];
     document.getElementById("selector0").style.filter = "alpha(opacity = " + selectorOpacity[0]*100 + ");";
     document.getElementById("selector1").style.opacity = selectorOpacity[1];
     document.getElementById("selector1").style.filter = "alpha(opacity = " + selectorOpacity[1]*100 + ");";
     document.getElementById("selector2").style.opacity = selectorOpacity[2];
     document.getElementById("selector2").style.filter = "alpha(opacity = " + selectorOpacity[2]*100 + ");";
}

function changeSelector(id)
{
     if (activeSelector == id)
     {
     
     }
     else
     {
          var prevSelector = activeSelector;
          activeSelector = id;
          document.getElementById("selector"+prevSelector).src = "images/selector.png";
          fadeOutSelector(prevSelector);
          document.getElementById("selector"+id).src = "images/selector_active.png";
     }
}

function fadeInSelector(id)
{
     if (activeSelector == id)
     {

     }
     else
     {
          if (selectorState[id] == -1 || selectorState[id] == 1)
          {
               selectorState[id] = 0;
               animateFadeIn(id);
          }
     }
}

function animateFadeIn(id)
{
     if (selectorState[id] == 0)
     {
          if (selectorOpacity[id] < 1)
          {
               selectorOpacity[id] += 0.1;
               document.getElementById("selector"+id).style.opacity = selectorOpacity[id];
               document.getElementById("selector"+id).style.filter = "alpha(opacity = " + selectorOpacity[id]*100 + ");";
               setTimeout("animateFadeIn("+id+");", 50);
          }
          else
          {
               selectorState[id] = -1;
          }
     }
}

function fadeOutSelector(id)
{
     if (activeSelector == id)
     {

     }
     else
     {
          if (selectorState[id] == -1 || selectorState[id] == 0)
          {
               selectorState[id] = 1;
               animateFadeOut(id);
          }
     }
}

function animateFadeOut(id)
{
     if (selectorState[id] == 1)
     {
          if (selectorOpacity[id] > 0.5)
          {
               selectorOpacity[id] -= 0.1;
               document.getElementById("selector"+id).style.opacity = selectorOpacity[id];
               document.getElementById("selector"+id).style.filter = "alpha(opacity = " + selectorOpacity[id]*100 + ");";
               setTimeout("animateFadeOut("+id+");", 50);
          }
          else
          {
               selectorState[id] = -1;
          }
     }
}