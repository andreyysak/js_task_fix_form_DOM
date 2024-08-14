function e(e){return e.replace(/([A-Z])/g," $1").trim().replace(/^./,function(e){return e.toUpperCase()})}document.querySelectorAll("input").forEach(function(t){var r=document.createElement("label");r.className="field-label",r.setAttribute("for",t.id),r.textContent=e(t.name),t.setAttribute("placeholder",e(t.name)),t.parentNode.insertBefore(r,t)});
//# sourceMappingURL=index.b797daf1.js.map
