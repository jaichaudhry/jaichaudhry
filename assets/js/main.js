jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    $('#trimModal').on('shown.bs.modal', function() {
        $(this).find('.modal-body').append('<iframe id="trimIframe" src="https://marvelapp.com/210b3e8" width="100%" height="600"></iframe><p>Implemented the video trim feature to make it easy for user to trim the video while uploading it to Roposo.</p>');
    });

});