(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0b5f":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".tui-loading-init[data-v-cb0ba0f4]{min-width:%?200?%;min-height:%?200?%;max-width:%?500?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:9999;font-size:%?26?%;color:#fff;background-color:rgba(0,0,0,.7);border-radius:%?10?%}.tui-loading-center[data-v-cb0ba0f4]{width:%?50?%;height:%?50?%;border:3px solid #fff;border-radius:50%;margin:0 6px;display:inline-block;vertical-align:middle;-webkit-clip-path:polygon(0 0,100% 0,100% 40%,0 40%);clip-path:polygon(0 0,100% 0,100% 40%,0 40%);-webkit-animation:rotate-data-v-cb0ba0f4 1s linear infinite;animation:rotate-data-v-cb0ba0f4 1s linear infinite;margin-bottom:%?36?%}.tui-loadmore-tips[data-v-cb0ba0f4]{text-align:center;padding:0 %?20?%;box-sizing:border-box}@-webkit-keyframes rotate-data-v-cb0ba0f4{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-data-v-cb0ba0f4{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""]),t.exports=i},"0d9b":function(t,i,e){"use strict";var a=e("4ea4");e("99af"),e("26e9"),e("a434"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("d34f")),o=a(e("97ce")),r=a(e("db9d")),c={components:{tuiIcon:n.default,tuiLoadmore:o.default,goodsCard:r.default},data:function(){return{current:0,hotSearch:["休闲零食","自热火锅","小冰箱迷你"],banner:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],category:[{img:"1.jpg",name:"短袖T恤"},{img:"2.jpg",name:"足球"},{img:"3.jpg",name:"运动鞋"},{img:"4.png",name:"中老年"},{img:"5.png",name:"甜美风"},{img:"6.jpg",name:"鱼尾裙"},{img:"7.jpg",name:"相机配件"},{img:"8.jpg",name:"护肤套装"},{img:"9.jpg",name:"单肩包"},{img:"10.jpg",name:"卫衣"}],newProduct:[{name:"时尚舒适公主裙高街修身长裙",present:198,original:298,pic:"1.jpg",type:1,isLabel:!0},{name:"高街修身雪纺衫",present:398,original:598,pic:"2.jpg",type:2,isLabel:!0},{name:"轻奢商务上衣",present:99,original:199,pic:"3.jpg",type:1,isLabel:!0},{name:"品质牛皮婚鞋牛皮婚鞋品质就是好",present:99,original:199,pic:"5.jpg",type:1,isLabel:!0},{name:"轻奢时尚大包限时新品推荐",present:99,original:199,pic:"6.jpg",type:1,isLabel:!1},{name:"高街修身长裙",present:999,original:1299,pic:"4.jpg",type:2,isLabel:!0}],productList:[{img:1,name:"欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）",sale:599,factory:899,payNum:2342},{img:2,name:"德国DMK进口牛奶  欧德堡（Oldenburger）超高温处理全脂纯牛奶1L*12盒",sale:29,factory:69,payNum:999},{img:3,name:"【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",sale:299,factory:699,payNum:666},{img:4,name:"百雀羚套装女补水保湿护肤品",sale:1599,factory:2899,payNum:236},{img:5,name:"百草味 肉干肉脯 休闲零食 靖江精制猪肉脯200g/袋",sale:599,factory:899,payNum:2399},{img:6,name:"短袖睡衣女夏季薄款休闲家居服短裤套装女可爱韩版清新学生两件套 短袖粉色长颈鹿 M码75-95斤",sale:599,factory:899,payNum:2399},{img:1,name:"欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜",sale:599,factory:899,payNum:2342},{img:2,name:"德国DMK进口牛奶",sale:29,factory:69,payNum:999},{img:3,name:"【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",sale:299,factory:699,payNum:666},{img:4,name:"百雀羚套装女补水保湿护肤品",sale:1599,factory:2899,payNum:236}],pageIndex:1,loadding:!1,pullUpOn:!0}},methods:{detail:function(){uni.navigateTo({url:"/pages/goods/detail"})},coupon:function(){uni.navigateTo({url:"/pages/coupon/index"})},classify:function(){uni.navigateTo({url:"/pages/classify/classify"})},more:function(t){var i=t.currentTarget.dataset.key||"";uni.navigateTo({url:"/pages/search/list?searchKey="+i})},search:function(){uni.navigateTo({url:"/pages/search/search"})},onCardClick:function(t){}},onPullDownRefresh:function(){var t=JSON.parse(JSON.stringify(this.productList));t=t.splice(0,10),this.productList=t,this.pageIndex=1,this.pullUpOn=!0,this.loadding=!1,uni.stopPullDownRefresh()},onReachBottom:function(){if(this.pullUpOn)if(this.loadding=!0,4==this.pageIndex)this.loadding=!1,this.pullUpOn=!1;else{var t=JSON.parse(JSON.stringify(this.productList));t=t.splice(0,10),1==this.pageIndex&&(t=t.reverse()),this.productList=this.productList.concat(t),this.pageIndex=this.pageIndex+1,this.loadding=!1}}};i.default=c},"0f27":function(t,i,e){var a=e("211d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("7d548a28",a,!0,{sourceMap:!1,shadowMode:!1})},1943:function(t,i,e){"use strict";var a=e("3825"),n=e.n(a);n.a},"211d":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".tui-pro-item[data-v-4fb4314e]{width:100%;margin-bottom:4%;background:#fff;box-sizing:border-box;border-radius:%?12?%;overflow:hidden}.tui-pro-img[data-v-4fb4314e]{width:100%;display:block}.tui-pro-content[data-v-4fb4314e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;box-sizing:border-box;padding:%?20?%}.tui-pro-tit[data-v-4fb4314e]{color:#2e2e2e;font-size:%?26?%;word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.tui-pro-price[data-v-4fb4314e]{padding-top:%?18?%}.tui-sale-price[data-v-4fb4314e]{font-size:%?34?%;font-weight:500;color:#e41f19}.tui-factory-price[data-v-4fb4314e]{font-size:%?24?%;color:#a0a0a0;text-decoration:line-through;padding-left:%?12?%}.tui-pro-pay[data-v-4fb4314e]{padding-top:%?10?%;font-size:%?24?%;color:#656565}",""]),t.exports=i},3825:function(t,i,e){var a=e("84f7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("39853aa6",a,!0,{sourceMap:!1,shadowMode:!1})},"3e63":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"goodsCard",props:{goodsId:{type:[Number,String],required:!0},title:String,imgUrl:String,price:Number,constPrice:Number,payNum:Number},data:function(){return{}},methods:{cardTap:function(){this.$emit("goodscard-click",this.goodsId)}}};i.default=a},"43da":function(t,i,e){"use strict";var a=e("0f27"),n=e.n(a);n.a},"5ce9":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"tui-pro-item",attrs:{"hover-class":"hover","hover-start-time":150},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.cardTap.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"tui-pro-img",attrs:{src:t.imgUrl,mode:"widthFix"}}),e("v-uni-view",{staticClass:"tui-pro-content"},[e("v-uni-view",{staticClass:"tui-pro-tit"},[t._v(t._s(t.title))]),e("v-uni-view",[e("v-uni-view",{staticClass:"tui-pro-price"},[e("v-uni-text",{staticClass:"tui-sale-price"},[t._v("￥"+t._s(t.price))]),t.constPrice?e("v-uni-text",{staticClass:"tui-factory-price"},[t._v("￥"+t._s(t.constPrice))]):t._e()],1),t.payNum?e("v-uni-view",{staticClass:"tui-pro-pay"},[t._v(t._s(t.payNum)+"人付款")]):t._e()],1)],1)],1)},o=[]},"6a79":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"tui-loading-init"},[e("v-uni-view",{staticClass:"tui-loading-center"}),e("v-uni-view",{staticClass:"tui-loadmore-tips"},[t._v(t._s(t.text))])],1)},o=[]},"766d":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"tuiLoading",props:{text:{type:String,default:"正在加载..."}}};i.default=a},"7b5b":function(t,i,e){var a=e("0b5f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("4f2af0d6",a,!0,{sourceMap:!1,shadowMode:!1})},8069:function(t,i,e){"use strict";e.r(i);var a=e("0d9b"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"84f7":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * scss预处理 内置的常用样式变量\n * 后期项目会考虑使用scss\n*/\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-0caccd3a]{background-color:#f7f7f7}.container[data-v-0caccd3a]{padding-bottom:%?100?%;color:#333}.tui-ptop-4[data-v-0caccd3a]{padding-top:%?4?%}.tui-scale[data-v-0caccd3a]{font-weight:700;-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center 100%;transform-origin:center 100%;line-height:%?30?%}.tui-item-active[data-v-0caccd3a]{color:#e41f19!important}\n/*tabbar*/.tui-header[data-v-0caccd3a]{width:100%;height:%?100?%;padding:0 %?30?% 0 %?20?%;box-sizing:border-box;background-color:#e41f19;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:fixed;left:0;top:0;top:44px;z-index:999}.tui-rolling-search[data-v-0caccd3a]{width:100%;height:%?60?%;border-radius:%?35?%;padding:0 %?40?% 0 %?30?%;box-sizing:border-box;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;color:#999}.tui-category[data-v-0caccd3a]{font-size:%?24?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:0;margin-right:%?22?%;-webkit-flex-shrink:0;flex-shrink:0}.tui-category-scale[data-v-0caccd3a]{-webkit-transform:scale(.7);transform:scale(.7);line-height:%?24?%}.tui-icon-category[data-v-0caccd3a]{line-height:20px!important;margin-bottom:0!important}.tui-swiper[data-v-0caccd3a]{font-size:%?26?%;height:%?60?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:%?12?%}.tui-swiper-item[data-v-0caccd3a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-hot-item[data-v-0caccd3a]{line-height:%?26?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tui-header-banner[data-v-0caccd3a]{padding-top:%?100?%;box-sizing:border-box;background:#e41f19}.tui-hot-search[data-v-0caccd3a]{color:#fff;font-size:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?20?%;box-sizing:border-box;position:relative;z-index:2}.tui-hot-tag[data-v-0caccd3a]{background-color:hsla(0,0%,100%,.15);padding:%?10?% %?24?%;border-radius:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;line-height:%?24?%}.tui-banner-bg[data-v-0caccd3a]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?180?%;background-color:#e41f19;position:relative}.tui-primary-bg[data-v-0caccd3a]{width:50%;display:inline-block;height:%?224?%;border:1px solid transparent;position:relative;z-index:1;background-color:#e41f19}.tui-route-left[data-v-0caccd3a]{-webkit-transform:skewY(8deg);transform:skewY(8deg)}.tui-route-right[data-v-0caccd3a]{-webkit-transform:skewY(-8deg);transform:skewY(-8deg)}.tui-banner-box[data-v-0caccd3a]{width:100%;padding:0 %?20?%;box-sizing:border-box;position:absolute;\n  /* overflow: hidden; */z-index:99;bottom:%?-80?%;left:0}.tui-banner-swiper[data-v-0caccd3a]{width:100%;height:%?240?%;border-radius:%?12?%;overflow:hidden;-webkit-transform:translateY(0);transform:translateY(0)}.tui-slide-image[data-v-0caccd3a]{width:100%;height:%?240?%;display:block}> > > .tui-banner-swiper .uni-swiper-dot[data-v-0caccd3a]{width:%?8?%;height:%?8?%;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;background-color:none;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}> > > .tui-banner-swiper .uni-swiper-dot[data-v-0caccd3a]::before{content:"";-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;background-color:hsla(0,0%,100%,.8);border-radius:%?16?%;overflow:hidden}> > > .tui-banner-swiper .uni-swiper-dot-active[data-v-0caccd3a]::before{background-color:#fff}> > > .tui-banner-swiper .uni-swiper-dot.uni-swiper-dot-active[data-v-0caccd3a]{width:%?16?%}.tui-product-category[data-v-0caccd3a]{background-color:#fff;padding:%?80?% %?20?% %?30?% %?20?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap;font-size:%?24?%;color:#555;margin-bottom:%?20?%}.tui-badge[data-v-0caccd3a]{position:absolute;font-size:%?24?%;height:%?32?%;min-width:%?20?%;padding:0 %?6?%;border-radius:%?40?%;right:%?10?%;top:%?-5?%;-webkit-transform:scale(.8) translateX(60%);transform:scale(.8) translateX(60%);-webkit-transform-origin:center center;transform-origin:center center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:10}.tui-badge-red[data-v-0caccd3a]{background:#f74d54;color:#fff}.tui-badge-white[data-v-0caccd3a]{background:#fff;color:#f74d54}.tui-badge-dot[data-v-0caccd3a]{position:absolute;height:%?12?%;width:%?12?%;border-radius:50%;right:%?-12?%;top:0;background:#f74d54}.tui-category-item[data-v-0caccd3a]{width:20%;height:%?118?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding-top:%?30?%;position:relative}.tui-category-item .tui-badge[data-v-0caccd3a]{position:absolute;font-size:%?24?%;height:%?32?%;min-width:%?20?%;padding:0 %?12?%;border-radius:%?40?%;right:%?20?%;top:%?24?%;-webkit-transform:scale(.8) translateX(60%);transform:scale(.8) translateX(60%);-webkit-transform-origin:center center;transform-origin:center center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:10;color:#fff}.tui-category-img[data-v-0caccd3a]{height:%?80?%;width:%?80?%;display:block}.tui-category-name[data-v-0caccd3a]{line-height:%?24?%}.tui-product-box[data-v-0caccd3a]{margin-top:%?20?%;padding:0 %?20?%;box-sizing:border-box}.tui-pb-20[data-v-0caccd3a]{padding-bottom:%?20?%}.tui-bg-white[data-v-0caccd3a]{background-color:#fff}.tui-group-name[data-v-0caccd3a]{width:100%;font-size:%?32?%;font-weight:700;text-align:center;padding:%?24?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-activity-box[data-v-0caccd3a]{display:-webkit-box;display:-webkit-flex;display:flex;border-radius:%?12?%;overflow:hidden}.tui-activity-img[data-v-0caccd3a]{width:50%;display:block}.tui-new-box[data-v-0caccd3a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}.tui-new-item[data-v-0caccd3a]{width:49%;height:%?200?%;padding:0 %?20?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#f5f2f9;position:relative;border-radius:%?12?%}.tui-new-mtop[data-v-0caccd3a]{margin-top:2%}.tui-title-box[data-v-0caccd3a]{font-size:%?24?%}.tui-new-title[data-v-0caccd3a]{line-height:%?32?%;word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.tui-new-price[data-v-0caccd3a]{padding-top:%?18?%}.tui-new-present[data-v-0caccd3a]{color:#ff201f;font-weight:700}.tui-new-original[data-v-0caccd3a]{display:inline-block;color:#a0a0a0;text-decoration:line-through;padding-left:%?12?%;-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}.tui-new-img[data-v-0caccd3a]{width:%?160?%;height:%?160?%;display:block;-webkit-flex-shrink:0;flex-shrink:0}.tui-new-label[data-v-0caccd3a]{width:%?56?%;height:%?56?%;border-top-left-radius:%?12?%;position:absolute;left:0;top:0}.tui-product-list[data-v-0caccd3a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;box-sizing:border-box\n  /* padding-top: 20rpx; */}.tui-product-container[data-v-0caccd3a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-right:2%}.tui-product-container[data-v-0caccd3a]:last-child{margin-right:0}.tui-pro-item[data-v-0caccd3a]{width:100%;margin-bottom:4%;background:#fff;box-sizing:border-box;border-radius:%?12?%;overflow:hidden}.tui-pro-img[data-v-0caccd3a]{width:100%;display:block}.tui-pro-content[data-v-0caccd3a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;box-sizing:border-box;padding:%?20?%}.tui-pro-tit[data-v-0caccd3a]{color:#2e2e2e;font-size:%?26?%;word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.tui-pro-price[data-v-0caccd3a]{padding-top:%?18?%}.tui-sale-price[data-v-0caccd3a]{font-size:%?34?%;font-weight:500;color:#e41f19}.tui-factory-price[data-v-0caccd3a]{font-size:%?24?%;color:#a0a0a0;text-decoration:line-through;padding-left:%?12?%}.tui-pro-pay[data-v-0caccd3a]{padding-top:%?10?%;font-size:%?24?%;color:#656565}body.?%PAGE?%[data-v-0caccd3a]{background-color:#f7f7f7}',""]),t.exports=i},"97ce":function(t,i,e){"use strict";e.r(i);var a=e("6a79"),n=e("b2b2");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("d3ad");var r,c=e("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"cb0ba0f4",null,!1,a["a"],r);i["default"]=s.exports},ad26:function(t,i,e){"use strict";e.r(i);var a=e("3e63"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},ae14:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"tui-header"},[e("v-uni-view",{staticClass:"tui-category",attrs:{"hover-class":"opcity","hover-stay-time":150},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.classify.apply(void 0,arguments)}}},[e("tui-icon",{attrs:{name:"manage-fill",color:"#fff",size:44,unit:"rpx"}}),e("v-uni-view",{staticClass:"tui-category-scale"},[t._v("分类")])],1),e("v-uni-view",{staticClass:"tui-rolling-search"},[e("tui-icon",{attrs:{name:"search-2",size:32,unit:"rpx"}}),e("v-uni-swiper",{staticClass:"tui-swiper",attrs:{vertical:!0,autoplay:!0,circular:!0,interval:"8000"}},t._l(t.hotSearch,(function(i,a){return e("v-uni-swiper-item",{key:a,staticClass:"tui-swiper-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.search.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"tui-hot-item"},[t._v(t._s(i))])],1)})),1)],1)],1),e("v-uni-view",{staticClass:"tui-header-banner"},[e("v-uni-view",{staticClass:"tui-hot-search"},[e("v-uni-view",[t._v("热搜")]),e("v-uni-view",{staticClass:"tui-hot-tag",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.search.apply(void 0,arguments)}}},[t._v("自热火锅")]),e("v-uni-view",{staticClass:"tui-hot-tag",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.search.apply(void 0,arguments)}}},[t._v("华为手机")]),e("v-uni-view",{staticClass:"tui-hot-tag",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.search.apply(void 0,arguments)}}},[t._v("有机酸奶")]),e("v-uni-view",{staticClass:"tui-hot-tag",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.search.apply(void 0,arguments)}}},[t._v("苹果手机")])],1),e("v-uni-view",{staticClass:"tui-banner-bg"},[e("v-uni-view",{staticClass:"tui-primary-bg tui-route-left"}),e("v-uni-view",{staticClass:"tui-primary-bg tui-route-right"}),e("v-uni-view",{staticClass:"tui-banner-box"},[e("v-uni-swiper",{staticClass:"tui-banner-swiper",attrs:{"indicator-dots":!0,autoplay:!0,interval:5e3,duration:150,circular:!0,"indicator-color":"rgba(255, 255, 255, 0.8)","indicator-active-color":"#fff"}},t._l(t.banner,(function(i,a){return e("v-uni-swiper-item",{key:a,on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.detail.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"tui-slide-image",attrs:{src:"/static/images/mall/banner/"+i,mode:"scaleToFill"}})],1)})),1)],1)],1)],1),e("v-uni-view",{staticClass:"tui-product-category"},t._l(t.category,(function(i,a){return e("v-uni-view",{key:a,staticClass:"tui-category-item",attrs:{"data-key":i.name},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.more.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"tui-category-img",attrs:{src:"/static/images/mall/category/"+i.img,mode:"scaleToFill"}}),e("v-uni-view",{staticClass:"tui-badge tui-badge-red"},[t._v("热门")]),e("v-uni-view",{staticClass:"tui-category-name"},[t._v(t._s(i.name))])],1)})),1),e("v-uni-view",{staticClass:"tui-product-box tui-pb-20 tui-bg-white"},[e("v-uni-view",{staticClass:"tui-group-name",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.more.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("新人专享")]),e("tui-icon",{attrs:{name:"arrowright",size:42,unit:"rpx",color:"#555"}})],1),e("v-uni-view",{staticClass:"tui-activity-box"},[e("v-uni-image",{staticClass:"tui-activity-img",attrs:{src:"/static/images/mall/activity/activity_1.jpg",mode:"widthFix"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.coupon.apply(void 0,arguments)}}}),e("v-uni-image",{staticClass:"tui-activity-img",attrs:{src:"/static/images/mall/activity/activity_2.jpg",mode:"widthFix"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.detail.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{staticClass:"tui-product-box tui-pb-20 tui-bg-white"},[e("v-uni-view",{staticClass:"tui-group-name",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.more.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("新品推荐")]),e("tui-icon",{attrs:{name:"arrowright",size:42,unit:"rpx",color:"#555"}})],1),e("v-uni-view",{staticClass:"tui-new-box"},t._l(t.newProduct,(function(i,a){return e("v-uni-view",{key:a,staticClass:"tui-new-item",class:[0!=a&&1!=a?"tui-new-mtop":""],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.detail.apply(void 0,arguments)}}},[i.isLabel?e("v-uni-image",{staticClass:"tui-new-label",attrs:{src:"/static/images/mall/new/"+(1==i.type?"new":"discount")+".png"}}):t._e(),e("v-uni-view",{staticClass:"tui-title-box"},[e("v-uni-view",{staticClass:"tui-new-title"},[t._v(t._s(i.name))]),e("v-uni-view",{staticClass:"tui-new-price"},[e("v-uni-text",{staticClass:"tui-new-present"},[t._v("￥"+t._s(i.present))]),e("v-uni-text",{staticClass:"tui-new-original"},[t._v("￥"+t._s(i.original))])],1)],1),e("v-uni-image",{staticClass:"tui-new-img",attrs:{src:"/static/images/mall/new/"+i.pic}})],1)})),1)],1),e("v-uni-view",{staticClass:"tui-product-box"},[e("v-uni-view",{staticClass:"tui-group-name"},[e("v-uni-text",[t._v("热门推荐")])],1),e("v-uni-view",{staticClass:"tui-product-list"},[e("v-uni-view",{staticClass:"tui-product-container"},[t._l(t.productList,(function(i,a){return(a+1)%2!=0?[e("goodsCard",{key:a+"_0",attrs:{goodsId:a,imgUrl:"/static/images/mall/product/"+i.img+".jpg",title:i.name,price:i.sale,constPrice:i.factory,payNum:i.payNum},on:{goodscardClick:function(i){arguments[0]=i=t.$handleEvent(i),t.onCardClick.apply(void 0,arguments)}}})]:t._e()}))],2),e("v-uni-view",{staticClass:"tui-product-container"},[t._l(t.productList,(function(i,a){return(a+1)%2==0?[e("goodsCard",{key:a+"_0",attrs:{goodsId:a,imgUrl:"/static/images/mall/product/"+i.img+".jpg",title:i.name,price:i.sale,constPrice:i.factory,payNum:i.payNum},on:{"goodscard-click":function(i){arguments[0]=i=t.$handleEvent(i),t.onCardClick.apply(void 0,arguments)}}})]:t._e()}))],2)],1)],1),t.loadding?e("tui-loadmore",{attrs:{index:3,type:"red"}}):t._e(),e("v-uni-view",{staticClass:"tui-safearea-bottom"})],1)},o=[]},b2b2:function(t,i,e){"use strict";e.r(i);var a=e("766d"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},d3ad:function(t,i,e){"use strict";var a=e("7b5b"),n=e.n(a);n.a},db9d:function(t,i,e){"use strict";e.r(i);var a=e("5ce9"),n=e("ad26");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("43da");var r,c=e("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"4fb4314e",null,!1,a["a"],r);i["default"]=s.exports},f75a:function(t,i,e){"use strict";e.r(i);var a=e("ae14"),n=e("8069");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("1943");var r,c=e("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"0caccd3a",null,!1,a["a"],r);i["default"]=s.exports}}]);