(()=>{"use strict";var e={998:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=joplin},143:(e,t)=>{var o,n,i,a,r,l,s,c,u,d;Object.defineProperty(t,"__esModule",{value:!0}),t.ContentScriptType=t.SettingStorage=t.AppType=t.SettingItemSubType=t.SettingItemType=t.ToolbarButtonLocation=t.isContextMenuItemLocation=t.MenuItemLocation=t.ModelType=t.ImportModuleOutputFormat=t.FileSystemItem=void 0,(d=t.FileSystemItem||(t.FileSystemItem={})).File="file",d.Directory="directory",(u=t.ImportModuleOutputFormat||(t.ImportModuleOutputFormat={})).Markdown="md",u.Html="html",(c=t.ModelType||(t.ModelType={}))[c.Note=1]="Note",c[c.Folder=2]="Folder",c[c.Setting=3]="Setting",c[c.Resource=4]="Resource",c[c.Tag=5]="Tag",c[c.NoteTag=6]="NoteTag",c[c.Search=7]="Search",c[c.Alarm=8]="Alarm",c[c.MasterKey=9]="MasterKey",c[c.ItemChange=10]="ItemChange",c[c.NoteResource=11]="NoteResource",c[c.ResourceLocalState=12]="ResourceLocalState",c[c.Revision=13]="Revision",c[c.Migration=14]="Migration",c[c.SmartFilter=15]="SmartFilter",c[c.Command=16]="Command",function(e){e.File="file",e.Edit="edit",e.View="view",e.Note="note",e.Tools="tools",e.Help="help",e.Context="context",e.NoteListContextMenu="noteListContextMenu",e.EditorContextMenu="editorContextMenu",e.FolderContextMenu="folderContextMenu",e.TagContextMenu="tagContextMenu"}(o=t.MenuItemLocation||(t.MenuItemLocation={})),t.isContextMenuItemLocation=function(e){return[o.Context,o.NoteListContextMenu,o.EditorContextMenu,o.FolderContextMenu,o.TagContextMenu].includes(e)},(s=t.ToolbarButtonLocation||(t.ToolbarButtonLocation={})).NoteToolbar="noteToolbar",s.EditorToolbar="editorToolbar",(l=t.SettingItemType||(t.SettingItemType={}))[l.Int=1]="Int",l[l.String=2]="String",l[l.Bool=3]="Bool",l[l.Array=4]="Array",l[l.Object=5]="Object",l[l.Button=6]="Button",(r=t.SettingItemSubType||(t.SettingItemSubType={})).FilePathAndArgs="file_path_and_args",r.FilePath="file_path",r.DirectoryPath="directory_path",(a=t.AppType||(t.AppType={})).Desktop="desktop",a.Mobile="mobile",a.Cli="cli",(i=t.SettingStorage||(t.SettingStorage={}))[i.Database=1]="Database",i[i.File=2]="File",(n=t.ContentScriptType||(t.ContentScriptType={})).MarkdownItPlugin="markdownItPlugin",n.CodeMirrorPlugin="codeMirrorPlugin"},156:function(e,t,o){var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,a){function r(e){try{s(n.next(e))}catch(e){a(e)}}function l(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,l)}s((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=o(998),a=o(681);i.default.plugins.register({onStart:function(){return n(this,void 0,void 0,(function*(){a.noteVariables.init()}))}})},681:function(e,t,o){var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,a){function r(e){try{s(n.next(e))}catch(e){a(e)}}function l(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,l)}s((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.noteVariables=void 0;const i=o(998),a=o(143),r=o(527),l=o(946);!function(e){const t=e=>n(this,void 0,void 0,(function*(){2===e.event&&(0,l.loadVariablesNotes)()})),o="show-colored-imports",s=()=>n(this,void 0,void 0,(function*(){const e="mathieu-plugin";yield i.default.settings.registerSection(e,{label:"Mathieu's plugin",description:"Settings for Mathieu's plugin.",iconName:"fas fa-edit"}),yield i.default.settings.registerSettings({[o]:{section:e,value:!0,public:!0,type:a.SettingItemType.Bool,label:"Show colored imports"}})})),c=e=>n(this,void 0,void 0,(function*(){yield i.default.contentScripts.onMessage(e,(e=>n(this,void 0,void 0,(function*(){if("getSettings"===e)return{showColoredImports:yield i.default.settings.value(o)}}))))}));e.init=function(){return n(this,void 0,void 0,(function*(){const e="noteVariablesMD";yield s(),yield c(e),yield i.default.contentScripts.register(a.ContentScriptType.MarkdownItPlugin,e,"./markdownItPlugin.js"),yield i.default.workspace.onNoteChange(t),yield i.default.workspace.onNoteSelectionChange(l.loadVariablesNotes),yield i.default.commands.register({name:"newVariablesNote",label:"Create variables note",iconName:"fas fa-superscript",execute:()=>n(this,void 0,void 0,(function*(){const e=yield i.default.workspace.selectedFolder();(0,r.createVariablesNote)(e.id)}))}),yield i.default.views.menuItems.create("Create variables vote","newVariablesNote",a.MenuItemLocation.Note),yield(0,l.loadVariablesNotes)()}))}}(t.noteVariables||(t.noteVariables={}))},527:function(e,t,o){var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,a){function r(e){try{s(n.next(e))}catch(e){a(e)}}function l(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,l)}s((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.createVariablesNote=void 0;const i=o(998),a=o(971);t.createVariablesNote=e=>n(void 0,void 0,void 0,(function*(){const t=yield(0,a.fetchAllNotes)(),o=`%Variables${Math.max(0,...t.map((e=>{const t=e.title.match(/^%Variables([0-9]+)%$/);return null==t?0:parseInt(t[1])})))+1}%`;yield i.default.data.post(["notes"],null,{body:"| variable | value |\n| -------- | ----- |\n|          |       |\n",title:o,parent_id:e})}))},971:function(e,t,o){var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,a){function r(e){try{s(n.next(e))}catch(e){a(e)}}function l(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,l)}s((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchAllNotes=void 0;const i=o(998);t.fetchAllNotes=()=>n(void 0,void 0,void 0,(function*(){const e=[];let t=1;for(;;){const o=yield i.default.data.get(["notes"],{page:t});if(e.push(...o.items),console.debug("[FETC] Fetched the following notes:"),console.debug(JSON.stringify(o.items)),!o.has_more)return e;t++}}))},292:function(e,t,o){var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,a){function r(e){try{s(n.next(e))}catch(e){a(e)}}function l(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,l)}s((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchImplicitNotes=void 0;const i=o(998);t.fetchImplicitNotes=()=>n(void 0,void 0,void 0,(function*(){const e=(yield i.default.data.get(["tags"])).items.filter((e=>"variablenote"==e.title))[0].id,t=[];let o=1;for(;;){const n=yield i.default.data.get(["tags",e,"notes"],{page:o});if(t.push(...n.items),!n.has_more)return t;o++}}))},437:function(e,t,o){var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,a){function r(e){try{s(n.next(e))}catch(e){a(e)}}function l(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,l)}s((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.findVariablesNotes=void 0;const i=o(971);t.findVariablesNotes=()=>n(void 0,void 0,void 0,(function*(){return yield(0,i.fetchAllNotes)()}))},946:function(e,t,o){var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,a){function r(e){try{s(n.next(e))}catch(e){a(e)}}function l(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,l)}s((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.loadVariablesNotes=void 0;const i=o(998),a=o(437),r=o(292),l=o(945);t.loadVariablesNotes=()=>n(void 0,void 0,void 0,(function*(){const e=yield(0,a.findVariablesNotes)(),t=yield Promise.all(e.map((e=>n(void 0,void 0,void 0,(function*(){return yield i.default.data.get(["notes",e.id],{fields:["title","body"]})})))));console.debug("[LOAD] Begining parsing of notes:"),console.debug(JSON.stringify(t));const o={};t.forEach((e=>{if(null!=o[e.title])return;console.debug('[LOAD] Parsing note: "'+e.title+'"');const t=(0,l.parseNote)(e);o[e.title]={vars:t}}));const s=yield(0,r.fetchImplicitNotes)(),c=[];s.forEach((e=>{c.push(e.title)})),localStorage.setItem("NoteVariables",JSON.stringify(o)),localStorage.setItem("ImplicitNoteVariablesIDs",JSON.stringify(c)),localStorage.setItem("UpdateNoteVariablesMDP","true"),console.info("[LOAD] Stored variable notes:"),console.info(JSON.stringify(o)),console.info("[LOAD] Stored implicit IDs:"),console.info(JSON.stringify(c))}))},945:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.parseNote=void 0;const o=/^\|\s*[^|]*\s*\|\s*[^|]*\s*\|/gm,n=/^\|\s*([^|]*)\s*\|\s*([^|]*)\s*\|/;t.parseNote=e=>{const{body:t}=e,i=null!=t.match(/`set left_delim=.?;`/)?t.match(/`set left_delim=(.?);`/)[1]:"%",a=null!=t.match(/`set right_delim=.?;`/)?t.match(/`set right_delim=(.?);`/)[1]:"%",r=t.match(o),l={};if(null==r)return l;for(const e of r.slice(2)){const t=e.match(n);if(""===t[1])continue;const o=i+t[1].trimEnd()+a,r=t[2].trimEnd();null==l[o]&&(l[o]=r,console.debug("Added variable '"+o+"' : "+r))}return l}}},t={};!function o(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}(156)})();