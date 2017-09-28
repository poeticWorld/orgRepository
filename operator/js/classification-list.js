    $(document).ready(function() {
     	$('.oneu li:eq(1)').next('.twou').css('display', 'block');
	    $('.oneu li:eq(1)').addClass('activespe');
	    $('.oneu li:eq(1)').next('.twou').find('li:eq(4)').css('background', '#0099CC');
	    $('.navy2 li:eq(1)').next('.twou').css('display', 'block');
	    $('.navy2 li:eq(1)').addClass('activespe');
	    $('.navy2 li:eq(1)').next('.twou').find('li:eq(4)').css('background', '#0099CC');
     });
var setting = {
			view: {
				addHoverDom: addHoverDom,
				removeHoverDom: removeHoverDom,
				selectedMulti: false
			},
			edit: {
				enable: true,
				editNameSelectAll: true,
				showRemoveBtn: showRemoveBtn,
				showRenameBtn: showRenameBtn
			},
			data: {
				simpleData: {
					enable: true
				}
			},
			callback: {
				beforeDrag: beforeDrag,
				beforeEditName: beforeEditName,
				beforeRemove: beforeRemove,
				beforeRename: beforeRename,
				onRemove: onRemove,
				onRename: onRename
			}
		};

		var zNodes =[
			{ id:1, pId:0, name:"食品类", title:"", open:true},
			{ id:11, pId:1, name:"坚果", title:""},
			{ id:12, pId:1, name:"糖果", title:""},
			{ id:13, pId:1, name:"水果", title:""},
			{ id:14, pId:1, name:"水果白糖", title:""},
			
			{ id:2, pId:0, name:"酒水类", title:"", open:false},
			{ id:21, pId:2, name:"白酒", title:"", open:true},
			{ id:22, pId:2, name:"红酒酒", title:"", open:true},
			{ id:23, pId:2, name:"黄酒酒", title:"", open:true},
			{ id:3, pId:0, name:"百货类", title:"", open:false},
			{ id:31, pId:3, name:"毛巾", title:"", open:true},
			{ id:32, pId:3, name:"餐巾纸", title:"", open:true},
			{ id:33, pId:3, name:"桌子", title:"", open:true},
		];
		var setting2 = {
			check: {
				enable: true,
				chkStyle: "radio"
			},
			data: {
				key: {
					title: "title"
				},
				simpleData: {
					enable: true
				}
			},
			callback: {
				onCheck: onCheck
			}
		};

		var zNodes2 =[
			{ id:1, pId:0, name:"食品类", title:"", open:true},
			{ id:11, pId:1, name:"坚果", title:""},
			{ id:12, pId:1, name:"糖果", title:""},
			{ id:13, pId:1, name:"水果", title:""},
			{ id:14, pId:1, name:"水果白糖", title:""},
			
			{ id:2, pId:0, name:"酒水类", title:"", open:false},
			{ id:21, pId:2, name:"白酒", title:"", open:true},
			{ id:22, pId:2, name:"红酒酒", title:"", open:true},
			{ id:23, pId:2, name:"黄酒酒", title:"", open:true},
			{ id:3, pId:0, name:"百货类", title:"", open:false},
			{ id:31, pId:3, name:"毛巾", title:"", open:true},
			{ id:32, pId:3, name:"餐巾纸", title:"", open:true},
			{ id:33, pId:3, name:"桌子", title:"", open:true},
		];
		function onCheck(e, treeId, treeNode) {
			count();
		}
		var log, className = "dark";
		function beforeDrag(treeId, treeNodes) {
			return false;
		}
		function beforeClick(treeId, treeNode, clickFlag) {
			alert('kp');
		}
		function beforeEditName(treeId, treeNode) {
			className = (className === "dark" ? "":"dark");
			showLog("[ "+getTime()+" beforeEditName ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
			var zTree = $.fn.zTree.getZTreeObj("treeDemo333");
			zTree.selectNode(treeNode);
			return confirm("进入节点 -- " + treeNode.name + " 的编辑状态吗？");
		}
		function beforeRemove(treeId, treeNode) {
			className = (className === "dark" ? "":"dark");
			showLog("[ "+getTime()+" beforeRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
			var zTree = $.fn.zTree.getZTreeObj("treeDemo333");
			zTree.selectNode(treeNode);
			return confirm("确认删除 节点 -- " + treeNode.name + " 吗？");
		}
		function onRemove(e, treeId, treeNode) {
			showLog("[ "+getTime()+" onRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
		}
		function beforeRename(treeId, treeNode, newName, isCancel) {
			className = (className === "dark" ? "":"dark");
			showLog((isCancel ? "<span style='color:red'>":"") + "[ "+getTime()+" beforeRename ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name + (isCancel ? "</span>":""));
			if (newName.length == 0) {
				alert("节点名称不能为空.");
				var zTree = $.fn.zTree.getZTreeObj("treeDemo333");
				setTimeout(function(){zTree.editName(treeNode)}, 10);
				return false;
			}
			return true;
		}
		function onRename(e, treeId, treeNode, isCancel) {
			showLog((isCancel ? "<span style='color:red'>":"") + "[ "+getTime()+" onRename ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name + (isCancel ? "</span>":""));
		}
		function showRemoveBtn(treeId, treeNode) {
			return !treeNode.isFirstNode;
		}
		function showRenameBtn(treeId, treeNode) {
			return !treeNode.isLastNode;
		}
		function showLog(str) {
			if (!log) log = $("#log");
			log.append("<li class='"+className+"'>"+str+"</li>");
			if(log.children("li").length > 8) {
				log.get(0).removeChild(log.children("li")[0]);
			}
		}
		function getTime() {
			var now= new Date(),
			h=now.getHours(),
			m=now.getMinutes(),
			s=now.getSeconds(),
			ms=now.getMilliseconds();
			return (h+":"+m+":"+s+ " " +ms);
		}

		var newCount = 1;
		var nummu=1;
		function addHoverDom(treeId, treeNode) {
			var sObj = $("#" + treeNode.tId + "_span");
			if (treeNode.editNameFlag || $("#addBtn_"+treeNode.tId).length>0) return;
			var addStr = "<span class='button add' id='addBtn_" + treeNode.tId
				+ "' title='add node' onfocus='this.blur();'></span>";
			sObj.after(addStr);
			var btn = $("#addBtn_"+treeNode.tId);
			// $('#addBtn_treeDemo333_1').click(function(event) {
			// 		 location.href='menu_add.html';
			// 		$(this).off('click');
			// 		return false;			
			// 	});
			if (btn) btn.bind("click", function(){
				// alert($(this).attr('id'))
				$('.popup').stop(true).fadeIn('slow');
				var zTree = $.fn.zTree.getZTreeObj("treeDemo333");

				$('.preservation').attr('id', 'shimu' + (nummu++));
				// });
				var ashimu=$('.preservation').attr('id');
				var myashimu='#'+ashimu;
		
				$('.btnadd').on('click','myashimu',function(){
					alert(1)
				})

				
				$(myashimu).click(function(event) {

						var myvalna=$('#namemu').val()
					// alert(myvalna)
						

						
						$('.popup').stop(true).fadeOut('slow');
						
						zTree.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:myvalna});
						$(myashimu).off('click')
					});
				$('.removed').click(function(event) {
							$('.popup').stop(true).fadeOut('slow');
							$(myashimu).off('click')
						});
				});
						// $(myashimu).off('click')
						// return false;
		};
		function removeHoverDom(treeId, treeNode) {
			$("#addBtn_"+treeNode.tId).unbind().remove();
		};
		function selectAll() {
			var zTree = $.fn.zTree.getZTreeObj("treeDemo333");
			zTree.setting.edit.editNameSelectAll =  $("#selectAll").attr("checked");
		}
		
		$(document).ready(function(){
			$.fn.zTree.init($("#treeDemo333"), setting, zNodes);
			$.fn.zTree.init($("#treeDemo2"), setting2, zNodes2);
			$("#selectAll").bind("click", selectAll);
			$('.removed').click(function(event) {
				$('.popup').stop(true).fadeOut('slow');
	
			});
		});



    var $table = $('#table'),
        $table2 = $('#table2'),
        $remove = $('#remove'), 
        selections = []; 
   

  
    // function operateFormatter(value, row, index) { 
    //      return [ 
    //          '<span style="color:#137;cursor:pointer;margin-right:20px;">查看详情</span>'
    //      ].join(''); 
    //  } 
      function operateFormatter(value, row, index) { 
         return [ 
             '<a class="like" href="./billof_article.html" title="详情">详情</a>　',
             '<a class="like" href="./authorization_audit.html" title="详情">修改</a>　',
             '<span class="remove" style="color:blue;cursor:pointer;">删除</span>' 
         ].join(''); 
     }	
     function operateFormatter2(value, row, index) { 
         return [ 
             '<a class="like" href="./billof_article.html" title="详情">详情</a>　',
             '<a class="like" href="./authorization_audit.html" title="详情">修改</a>　',
             '<span class="remove" style="color:blue;cursor:pointer;">删除</span>' 
         ].join(''); 
     }	
      window.operateEvents = { 
         // 'click .like': function (e, value, row, index) { 
         //     alert('You click like action, row: ' + JSON.stringify(row)); 
         // }, 
         'click .remove': function (e, value, row, index) { 
             $table.bootstrapTable('remove', { 
                 field: 'code', 
                 values: [row.code] 
             }); 
         },
         'click .remove': function (e, value, row, index) { 
             $table2.bootstrapTable('remove', { 
                 field: 'code', 
                 values: [row.code] 
             }); 
         } 
     }; 
     $(document).ready(function() {
        var myhtml='<div class="row inputa"><div class="col-md-1"><input type="checkbox" class="checkboxa" style="margin:2px 0 0;"></div><div class="col-md-2"><input type="text" size="50"></div><div class="col-md-4"><input type="text"></div><div class="col-md-2"><input type="text"></div><div class="col-md-3"><input type="text"></div></div>'
         $('#addthxx').click(function(event) {
           
            $('.tihxinx').append(myhtml);
            $('#removethxx').click(function(event) {
               $("input[type='checkbox']:checked").parents('.inputa').remove();
            });
         });
     });