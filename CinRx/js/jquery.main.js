jQuery(function() {
	initDropDownClasses();
	initColumnsWidth();
});


// add classes if item has dropdown
function initDropDownClasses() {
	jQuery('#nav li').each(function() {
		var item = jQuery(this);
		var drop = item.find('ul');
		var link = item.find('a').eq(0);
		if (drop.length) {
			item.addClass('has-drop-down');
			if (link.length) link.addClass('has-drop-down-a');
		}
	});

	jQuery('#nav li').each(function() {
		var item = jQuery(this);
		var drop = item.find('ul');
		var link = item.find('a').eq(0);
		if (drop.length) {
			item.addClass('has-drop-down');
			if (link.length) link.addClass('has-drop-down-a');
		}
	});
}

function initColumnsWidth(){
	jQuery('.pipe').each(function(){
		var holder = jQuery(this);
		var tableFields = holder.find('.pipe-list td');
		var lists = holder.find('.blue-list');
		if(tableFields.length && lists.length){
			var setWidth = function(){
				lists.find('>li').css({width:''});
				tableFields.each(function(n){
					var field = jQuery(this);
					lists.find('>li:eq('+ n +')').css({width: field.width()});
				});
			};
			setWidth();
			jQuery(window).on('resize orientationchange',setWidth);
		}
	});
}
