(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{301:function(v,_,t){"use strict";t.r(_);var o=t(4),e=Object(o.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("排列问题不需要"),_("code",[v._v("startIndex")]),v._v("，因为不同的顺序代表了不同的结果，"),_("code",[v._v("1,3,2")]),v._v("和"),_("code",[v._v("1,2,3")]),v._v("是两种情况，这也是排列和组合的区别")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("组合问题中的切割问题，是通过不断移动切割的位置来考虑。切割线不断移动，得到不同的结果。\n子集问题其实就是组合问题（无序性），"),_("code",[v._v("for")]),v._v("循环需要"),_("code",[v._v("startIndex")])])]),v._v(" "),_("li",[_("p",[v._v("而排列问题是有序的，则"),_("code",[v._v("for")]),v._v("循坏需要每次都从"),_("code",[v._v("0")]),v._v("开始")])])]),v._v(" "),_("div",{staticClass:"custom-block danger"},[_("p",{staticClass:"custom-block-title"},[v._v("DANGER")]),v._v(" "),_("p",[v._v("去重问题需要提前排序！")])]),v._v(" "),_("p",[v._v("递归的时候用不用担心无限递归的情况？"),_("br"),v._v("\n保证传入的参数为"),_("code",[v._v("i+1")]),v._v("，就不会出现无限递归的情况，因为i在"),_("code",[v._v("for")]),v._v("循环里有限制条件。")]),v._v(" "),_("p",[v._v("如果要求递增的子序列，那就不能对原数据进行排序了，如果同时还需要去重的话，那就不能使用当前元素跟上一个元素比较了，因为元素是无序的，所以要用"),_("code",[v._v("set")]),v._v("来唯一表示，且在每一层回溯前要进行初始化，因为每一层的去重情况都应重新考虑，层之间是互不影响的。"),_("br"),v._v("\n整颗树的同一层是否重复出现元素是我们控制不了的（这颗树本来就是抽象出来的），所以子集问题才会通过排序之后，判断相邻两个分支（"),_("code",[v._v("nums[i] == nums[i - 1]")]),v._v("）的同一层是否同时出现元素来达到去重的目的")])])}),[],!1,null,null,null);_.default=e.exports}}]);