(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208527"],{a3fe:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-card",[n("v-card-title",[n("h2",{staticClass:"grey--text"},[e._v("Status Report Template 1")])]),n("v-divider"),n("v-card-text",[n("Template1Form",{on:{actionSuccess:function(t){e.snackbar=!0}}})],1)],1),n("v-snackbar",{attrs:{timeout:7e3,left:"",color:"green darken-1"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[n("span",[e._v("Submitted Successfully!")]),n("v-btn",{attrs:{flat:"",color:"white"},on:{click:function(t){e.snackbar=!1}}},[e._v("Close")])],1)],1)},a=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"pa-3",attrs:{xs12:"",sm6:""}},[n("v-menu",{ref:"menuStart",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.newReport.weekstart,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.newReport,"weekstart",t)},"update:return-value":function(t){return e.$set(e.newReport,"weekstart",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[n("v-text-field",e._g({attrs:{rules:e.inputRules,label:"Week Start","prepend-icon":"event",readonly:""},model:{value:e.newReport.weekstart,callback:function(t){e.$set(e.newReport,"weekstart",t)},expression:"newReport.weekstart"}},s))]}}]),model:{value:e.menuStart,callback:function(t){e.menuStart=t},expression:"menuStart"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.newReport.weekstart,callback:function(t){e.$set(e.newReport,"weekstart",t)},expression:"newReport.weekstart"}},[n("v-spacer"),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.menuStart=!1}}},[e._v("Cancel")]),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){return e.$refs.menuStart.save(e.newReport.weekstart)}}},[e._v("OK")])],1)],1)],1),n("v-flex",{staticClass:"pa-3",attrs:{xs12:"",sm6:""}},[n("v-menu",{ref:"menuEnd",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.newReport.weekend,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.newReport,"weekend",t)},"update:return-value":function(t){return e.$set(e.newReport,"weekend",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[n("v-text-field",e._g({attrs:{rules:e.inputRules,label:"Week End","prepend-icon":"event",readonly:""},model:{value:e.newReport.weekend,callback:function(t){e.$set(e.newReport,"weekend",t)},expression:"newReport.weekend"}},s))]}}]),model:{value:e.menuEnd,callback:function(t){e.menuEnd=t},expression:"menuEnd"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.newReport.weekend,callback:function(t){e.$set(e.newReport,"weekend",t)},expression:"newReport.weekend"}},[n("v-spacer"),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.menuEnd=!1}}},[e._v("Cancel")]),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){return e.$refs.menuEnd.save(e.newReport.weekend)}}},[e._v("OK")])],1)],1)],1)],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"pa-3",attrs:{xs12:"",sm6:""}},[n("v-text-field",{attrs:{label:"Project Manager","prepend-icon":"person",rules:e.inputRules},model:{value:e.newReport.distribution,callback:function(t){e.$set(e.newReport,"distribution",t)},expression:"newReport.distribution"}})],1),n("v-flex",{staticClass:"pa-3",attrs:{xs12:"",sm6:""}},[n("v-text-field",{attrs:{label:"Project Name","prepend-icon":"folder_special",rules:e.inputRules},model:{value:e.newReport.project,callback:function(t){e.$set(e.newReport,"project",t)},expression:"newReport.project"}})],1)],1),n("v-layout",{staticClass:"pa-3",attrs:{row:""}},[n("v-textarea",{attrs:{label:"Accomplishments this Period","prepend-icon":"trending_up",rules:e.inputRules},model:{value:e.newReport.accomplishments,callback:function(t){e.$set(e.newReport,"accomplishments",t)},expression:"newReport.accomplishments"}})],1),n("v-layout",{staticClass:"pa-3",attrs:{row:""}},[n("v-textarea",{attrs:{label:"Plans for Next Period","prepend-icon":"turned_in_not",rules:e.inputRules},model:{value:e.newReport.plans,callback:function(t){e.$set(e.newReport,"plans",t)},expression:"newReport.plans"}})],1),n("v-layout",{staticClass:"pa-3",attrs:{row:""}},[n("v-textarea",{attrs:{label:"Major Issues and Concerns","prepend-icon":"warning",rules:e.inputRules},model:{value:e.newReport.issues,callback:function(t){e.$set(e.newReport,"issues",t)},expression:"newReport.issues"}})],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"pa-3",attrs:{xs12:"",sm6:""}},[n("v-text-field",{attrs:{label:"Billable Hours","prepend-icon":"access_time",rules:e.inputRules},model:{value:e.newReport.bh,callback:function(t){e.$set(e.newReport,"bh",t)},expression:"newReport.bh"}})],1),n("v-flex",{staticClass:"pa-3",attrs:{xs12:"",sm6:""}},[n("v-text-field",{attrs:{label:"Non-Billable Hours","prepend-icon":"timer_off",rules:e.inputRules},model:{value:e.newReport.nbh,callback:function(t){e.$set(e.newReport,"nbh",t)},expression:"newReport.nbh"}})],1)],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"pa-3",attrs:{xs12:"",sm6:""}},[n("v-text-field",{attrs:{label:"Expenses this Period","prepend-icon":"attach_money"},model:{value:e.newReport.expenses,callback:function(t){e.$set(e.newReport,"expenses",t)},expression:"newReport.expenses"}})],1),n("v-flex",{staticClass:"pa-3",attrs:{xs12:"",sm6:""}},[n("v-text-field",{attrs:{label:"Expenses Planned for Next Period","prepend-icon":"attach_money"},model:{value:e.newReport.expensesNext,callback:function(t){e.$set(e.newReport,"expensesNext",t)},expression:"newReport.expensesNext"}})],1)],1),n("v-btn",{staticClass:"success ml-3",attrs:{flat:"",loading:e.loading},on:{click:e.submit}},[n("span",[e._v("Submit")]),n("v-icon",{attrs:{right:""}},[e._v("chevron_right")])],1)],1)},o=[],l=n("cebc"),i=n("2f62"),c=n("4868"),p=n("340b"),u={name:"Template1Form",data:function(){return{newReport:{weekstart:"",weekend:"",distribution:"",project:"",accomplishments:"",plans:"",issues:"",bh:"",nbh:"",expenses:"",expensesNext:""},menuStart:!1,menuEnd:!1,loading:!1,inputRules:[function(e){return e.length>0||"Cannot be empty"}]}},mounted:function(){var e=Object(p["startOfToday"])();this.newReport.weekstart=String(Object(p["format"])(Object(p["startOfISOWeek"])(e),"YYYY-MM-DD")),this.newReport.weekend=String(Object(p["format"])(Object(p["addDays"])(Object(p["endOfISOWeek"])(e),1),"YYYY-MM-DD"))},methods:Object(l["a"])({},Object(i["c"])(["ADD_REPORTST1"]),{submit:function(e){var t=this;e.preventDefault(),this.$refs.form.validate()&&this.$apollo.mutate({mutation:c["d"],variables:{userId:this.$store.state.username,weekstart:this.newReport.weekstart,weekend:this.newReport.weekend,distribution:this.newReport.distribution,project:this.newReport.project,accomplishments:this.newReport.accomplishments,plans:this.newReport.plans,issues:this.newReport.issues,bh:this.newReport.bh,nbh:this.newReport.nbh,expenses:this.newReport.expenses,expensesNext:this.newReport.expensesNext}}).then(function(){t.ADD_REPORTST1({weekstart:t.newReport.weekstart,weekend:t.newReport.weekend,distribution:t.newReport.distribution,project:t.newReport.project,accomplishments:t.newReport.accomplishments,plans:t.newReport.plans,issues:t.newReport.issues,bh:t.newReport.bh,nbh:t.newReport.nbh,expenses:t.newReport.expenses,expensesNext:t.newReport.expensesNext}),t.$emit("actionSuccess")})}})},w=u,d=n("2877"),m=n("6544"),f=n.n(m),b=n("8336"),v=n("2e4b"),R=n("0e8f"),x=n("4bd4"),k=n("132d"),h=n("a722"),_=n("e449"),y=n("9910"),$=n("2677"),S=n("a844"),C=Object(d["a"])(w,r,o,!1,null,null,null),j=C.exports;f()(C,{VBtn:b["a"],VDatePicker:v["a"],VFlex:R["a"],VForm:x["a"],VIcon:k["a"],VLayout:h["a"],VMenu:_["a"],VSpacer:y["a"],VTextField:$["a"],VTextarea:S["a"]});var g={name:"Template1",data:function(){return{snackbar:!1}},components:{Template1Form:j}},O=g,V=n("b0af"),E=n("99d9"),T=n("12b2"),D=n("a523"),N=n("ce7e6"),P=n("2db4"),Y=Object(d["a"])(O,s,a,!1,null,null,null);t["default"]=Y.exports;f()(Y,{VBtn:b["a"],VCard:V["a"],VCardText:E["b"],VCardTitle:T["a"],VContainer:D["a"],VDivider:N["a"],VSnackbar:P["a"]})}}]);
//# sourceMappingURL=chunk-2d208527.e928a8c9.js.map