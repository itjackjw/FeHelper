(function(a){a(CodeMirror)})(function(a){"use strict";function b(a){for(var b=0;b<a.state.activeLines.length;b++)a.removeLineClass(a.state.activeLines[b],"wrap","CodeMirror-activeline"),a.removeLineClass(a.state.activeLines[b],"background","CodeMirror-activeline-background"),a.removeLineClass(a.state.activeLines[b],"gutter","CodeMirror-activeline-gutter")}function c(c,a){if(c.length!=a.length)return!1;for(var b=0;b<c.length;b++)if(c[b]!=a[b])return!1;return!0}function d(a,d){for(var e=[],f=0;f<d.length;f++){var g=d[f],h=a.getOption("styleActiveLine");if("object"==typeof h&&h.nonEmpty?g.anchor.line==g.head.line:!!g.empty()){var i=a.getLineHandleVisualStart(g.head.line);e[e.length-1]!=i&&e.push(i)}}c(a.state.activeLines,e)||a.operation(function(){b(a);for(var c=0;c<e.length;c++)a.addLineClass(e[c],"wrap","CodeMirror-activeline"),a.addLineClass(e[c],"background","CodeMirror-activeline-background"),a.addLineClass(e[c],"gutter","CodeMirror-activeline-gutter");a.state.activeLines=e})}function e(a,b){d(a,b.ranges)}a.defineOption("styleActiveLine",!1,function(c,f,g){var h=g!=a.Init&&g;f==h||(h&&(c.off("beforeSelectionChange",e),b(c),delete c.state.activeLines),f&&(c.state.activeLines=[],d(c,c.listSelections()),c.on("beforeSelectionChange",e)))})});