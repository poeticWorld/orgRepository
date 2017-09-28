
    var $table = $('#table'),
       
        $remove = $('#remove'), 
        selections = []; 
   

  
    // function operateFormatter(value, row, index) { 
    //      return [ 
    //          '<span style="color:#137;cursor:pointer;margin-right:20px;">查看详情</span>'
    //      ].join(''); 
    //  } 
      function operateFormatter(value, row, index) { 
         return [ 
             '<a class="like" href="./authorization_audit.html" title="详情">审核</a>　',
             '<a class="like" href="./billof_article.html" title="详情">详情</a>　'
           
         ].join(''); 
     }
     var s=1
     $(document).ready(function() {
     	$('#price .pinpai-center u').click(function(event) {
		s=s+1;
		// alert(s)
		if (s==2) {
			$('#price .pinpai-center .numgmfen:eq(1)').show();
		
		} else if(s==3){
			$('#price .pinpai-center .numgmfen:eq(2)').show();
			$('#price .pinpai-center .numgmfen:eq(1)').find('.fa-remove').hide();
			s=1;
		};
	
	});
	$('#price .numgmfen .fa-remove').click(function(event) {
		var mydex=$(this).parents('.numgmfen').index()-1;
		// alert(mydex)
		$(this).parents('.numgmfen').hide()
		$(this).parents('.numgmfen').prev('.numgmfen').find('.fa-remove').show()
		
	});
	$('.listcontent-contfenshang i').click(function(event) {
		$(this).parents('.listcontent-contfen').find('.listcontent-contfenxia').slideToggle('fast');
	});
 });