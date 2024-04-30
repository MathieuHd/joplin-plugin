(()=>{"use strict";var t={998:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=joplin},143:(t,e)=>{var o,n,i,a,r,l,u,c,s,d;Object.defineProperty(e,"__esModule",{value:!0}),e.ContentScriptType=e.SettingStorage=e.AppType=e.SettingItemSubType=e.SettingItemType=e.ToolbarButtonLocation=e.isContextMenuItemLocation=e.MenuItemLocation=e.ModelType=e.ImportModuleOutputFormat=e.FileSystemItem=void 0,(d=e.FileSystemItem||(e.FileSystemItem={})).File="file",d.Directory="directory",(s=e.ImportModuleOutputFormat||(e.ImportModuleOutputFormat={})).Markdown="md",s.Html="html",(c=e.ModelType||(e.ModelType={}))[c.Note=1]="Note",c[c.Folder=2]="Folder",c[c.Setting=3]="Setting",c[c.Resource=4]="Resource",c[c.Tag=5]="Tag",c[c.NoteTag=6]="NoteTag",c[c.Search=7]="Search",c[c.Alarm=8]="Alarm",c[c.MasterKey=9]="MasterKey",c[c.ItemChange=10]="ItemChange",c[c.NoteResource=11]="NoteResource",c[c.ResourceLocalState=12]="ResourceLocalState",c[c.Revision=13]="Revision",c[c.Migration=14]="Migration",c[c.SmartFilter=15]="SmartFilter",c[c.Command=16]="Command",function(t){t.File="file",t.Edit="edit",t.View="view",t.Note="note",t.Tools="tools",t.Help="help",t.Context="context",t.NoteListContextMenu="noteListContextMenu",t.EditorContextMenu="editorContextMenu",t.FolderContextMenu="folderContextMenu",t.TagContextMenu="tagContextMenu"}(o=e.MenuItemLocation||(e.MenuItemLocation={})),e.isContextMenuItemLocation=function(t){return[o.Context,o.NoteListContextMenu,o.EditorContextMenu,o.FolderContextMenu,o.TagContextMenu].includes(t)},(u=e.ToolbarButtonLocation||(e.ToolbarButtonLocation={})).NoteToolbar="noteToolbar",u.EditorToolbar="editorToolbar",(l=e.SettingItemType||(e.SettingItemType={}))[l.Int=1]="Int",l[l.String=2]="String",l[l.Bool=3]="Bool",l[l.Array=4]="Array",l[l.Object=5]="Object",l[l.Button=6]="Button",(r=e.SettingItemSubType||(e.SettingItemSubType={})).FilePathAndArgs="file_path_and_args",r.FilePath="file_path",r.DirectoryPath="directory_path",(a=e.AppType||(e.AppType={})).Desktop="desktop",a.Mobile="mobile",a.Cli="cli",(i=e.SettingStorage||(e.SettingStorage={}))[i.Database=1]="Database",i[i.File=2]="File",(n=e.ContentScriptType||(e.ContentScriptType={})).MarkdownItPlugin="markdownItPlugin",n.CodeMirrorPlugin="codeMirrorPlugin"},156:function(t,e,o){var n=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))((function(i,a){function r(t){try{u(n.next(t))}catch(t){a(t)}}function l(t){try{u(n.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(r,l)}u((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const i=o(998),a=o(681);i.default.plugins.register({onStart:function(){return n(this,void 0,void 0,(function*(){a.noteVariables.init()}))}})},681:function(t,e,o){var n=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))((function(i,a){function r(t){try{u(n.next(t))}catch(t){a(t)}}function l(t){try{u(n.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(r,l)}u((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.noteVariables=void 0;const i=o(998),a=o(143),r=o(527),l=o(946);!function(t){const e=t=>n(this,void 0,void 0,(function*(){2===t.event&&null!=(yield i.default.data.get(["notes",t.id],{fields:["title"]})).title.match(/^\%[^%]*\%$/)&&(0,l.loadVariablesNotes)()}));t.init=function(){return n(this,void 0,void 0,(function*(){yield i.default.contentScripts.register(a.ContentScriptType.MarkdownItPlugin,"noteVariablesMD","./markdownItPlugin.js"),yield i.default.workspace.onNoteChange(e),yield i.default.workspace.onNoteSelectionChange(l.loadVariablesNotes),yield i.default.commands.register({name:"newVariablesNote",label:"Create variables note",iconName:"fas fa-superscript",execute:()=>n(this,void 0,void 0,(function*(){const t=yield i.default.workspace.selectedFolder();(0,r.createVariablesNote)(t.id)}))}),yield i.default.views.menuItems.create("Create variables vote","newVariablesNote",a.MenuItemLocation.Note),yield(0,l.loadVariablesNotes)()}))}}(e.noteVariables||(e.noteVariables={}))},527:function(t,e,o){var n=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))((function(i,a){function r(t){try{u(n.next(t))}catch(t){a(t)}}function l(t){try{u(n.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(r,l)}u((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.createVariablesNote=void 0;const i=o(998),a=o(971);e.createVariablesNote=t=>n(void 0,void 0,void 0,(function*(){const e=yield(0,a.fetchAllNotes)(),o=`%Variables${Math.max(0,...e.map((t=>{const e=t.title.match(/^%Variables([0-9]+)%$/);return null==e?0:parseInt(e[1])})))+1}%`;yield i.default.data.post(["notes"],null,{body:"| variable | value |\n| -------- | ----- |\n|          |       |\n",title:o,parent_id:t})}))},971:function(t,e,o){var n=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))((function(i,a){function r(t){try{u(n.next(t))}catch(t){a(t)}}function l(t){try{u(n.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(r,l)}u((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.fetchAllNotes=void 0;const i=o(998);e.fetchAllNotes=()=>n(void 0,void 0,void 0,(function*(){const t=[];let e=1;for(;;){const o=yield i.default.data.get(["notes"],{page:e});if(t.push(...o.items),!o.has_more)return t;e++}}))},437:function(t,e,o){var n=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))((function(i,a){function r(t){try{u(n.next(t))}catch(t){a(t)}}function l(t){try{u(n.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(r,l)}u((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.findVariablesNotes=void 0;const i=o(971);e.findVariablesNotes=()=>n(void 0,void 0,void 0,(function*(){return(yield(0,i.fetchAllNotes)()).filter((t=>null!=t.title.match(/^\%[^%]*\%$/)))}))},946:function(t,e,o){var n=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))((function(i,a){function r(t){try{u(n.next(t))}catch(t){a(t)}}function l(t){try{u(n.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(r,l)}u((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.loadVariablesNotes=void 0;const i=o(998),a=o(437),r=o(945);e.loadVariablesNotes=()=>n(void 0,void 0,void 0,(function*(){const t=yield(0,a.findVariablesNotes)(),e=yield Promise.all(t.map((t=>n(void 0,void 0,void 0,(function*(){return yield i.default.data.get(["notes",t.id],{fields:["title","body"]})}))))),o={};e.forEach((t=>{if(null!=o[t.title])return;const e=(0,r.parseNote)(t);o[t.title]={vars:e}})),localStorage.setItem("NoteVariables",JSON.stringify(o)),localStorage.setItem("UpdateNoteVariablesMDP","true")}))},945:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.parseNote=void 0;const o=/^\|\s*[^|]*\s*\|\s*[^|]*\s*\|/gm,n=/^\|\s*([^|]*)\s*\|\s*([^|]*)\s*\|/;e.parseNote=t=>{const{body:e}=t,i=e.match(o),a={};if(null==i)return a;for(const t of i.slice(2)){const e=t.match(n);if(""===e[1])continue;const o=e[1].trimEnd(),i=e[2].trimEnd();null==a[o]&&(a[o]=i)}return a}}},e={};!function o(n){var i=e[n];if(void 0!==i)return i.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,o),a.exports}(156)})();