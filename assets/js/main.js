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
    
    $('#feedModal').on('shown.bs.modal', function() {
        $(this).find('.modal-body').html('<p style="margin-top: 20px;">Implemented the new design for the feed of Roposo. Used AsyncDisplayKit for the same which helped in increasing the scrolling performance by 10x.</p><div class="item row" style="margin-top: 40px;"><div class="col-md-3 project-wrapper-modal"><div class="img-wrapper clearfix" style="width:250px;height:444.67px"><img class="profile-image img-responsive pull-left" src="assets/images/projects/roposo/roposo13.JPG" alt="roposo1"/></div></div><div class="col-md-3 project-wrapper-modal"><div class="img-wrapper clearfix" style="width:250px;height:444.67px"><img class="profile-image img-responsive pull-left" src="assets/images/projects/roposo/roposo14.JPG" alt="roposo1"/></div></div><div class="col-md-3 project-wrapper-modal"><div class="img-wrapper clearfix" style="width:250px;height:444.67px"><img class="profile-image img-responsive pull-left" src="assets/images/projects/roposo/roposo15.JPG" alt="roposo1"/></div></div></div><!--//item-->');
    });

    $('#trimModal').on('shown.bs.modal', function() {
        $(this).find('.modal-body').html('<iframe id="trimIframe" src="https://marvelapp.com/210b3e8" width="100%" height="600"></iframe><p>Implemented the video trim feature to make it easy for user to trim the video while uploading it to Roposo.</p>');
    });

});