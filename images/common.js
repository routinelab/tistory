/**
 * Mobile Menu Bar Toggle
 * @return {[type]}
 */
$('#menu-toggle').on('click', function() {
	if ($('body').hasClass('nav-on')) {
		$('body').removeClass('nav-on');
		$('span', this).removeClass('fa-times').addClass('fa-bars');
	} else {
		$('body').addClass('nav-on');
		$('span', this).removeClass('fa-bars').addClass('fa-times');
	}
});


/**
 * Mobile Search
 * @return {[type]} [description]
 */
$('.search-wrap').on('blur', 'input', function() {
	if ($(this).val() != '') {
		window.location.href = '/search/' + looseURIEncode($(this).val());
		$(this).val('');
	}
});


$('.datetime').each(function() {
	$(this).text($(this).text().replace(/\//g, '.').split(' ')[0]);
});


/**
 * Page Title
 * @return {[type]} [description]
 */
(function() {
	var pathname = location.pathname.substring(1).split('/');
	
	if (pathname[0] == '') {
		$('#page-title').text('All Archives');
	} else if (!isNaN(pathname[0])) { // article
		$('#page-title').text($('.entry-title').text());
	} else if (pathname[0] == 'category') {
		if (pathname.length > 1) {
			$('#page-title').text('Category Archives : ' + decodeURIComponent(pathname[pathname.length - 1]));
		} else {
			$('#page-title').text('All Category Archives');
		}
		
	}
})();
