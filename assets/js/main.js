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

    $('#magnifi1').on('shown.bs.modal', function() {
        $(this).find('.modal-body').html('<p style="margin-top: 20px;">Redesigned the home screen for Magnifi app. A circular collection view was implemented for this page, where you can scroll to and fro and checkout the latest shows by genre, location and venues. I open sourced the collection view used for this page design on github.</p><div class="item row" style="margin-top: 40px;"><div class="col-md-3 project-wrapper-modal"><div class="img-wrapper clearfix" style="width:250px;height:444.67px"><img class="profile-image img-responsive pull-left" src="assets/images/projects/magnifi/magnifi2.png" alt="magnifi2"/></div></div><div class="col-md-3 project-wrapper-modal"><div class="img-wrapper clearfix" style="width:250px;height:444.67px"><img class="profile-image img-responsive pull-left" src="assets/images/projects/magnifi/magnifi1.png" alt="magnifi1"/></div></div></div><!--//item-->');
    });

    $('#feedModal').on('shown.bs.modal', function() {
        $(this).find('.modal-body').html('<p style="margin-top: 20px;">Implemented the new design for the feed of Roposo. Completely revamped the structure of the code to incorporate <b>AsyncDisplayKit</b>. This increased the scrolling performance by 10x.</p><div class="item row" style="margin-top: 40px;"><div class="col-md-3 project-wrapper-modal"><div class="img-wrapper clearfix" style="width:250px;height:444.67px"><img class="profile-image img-responsive pull-left" src="assets/images/projects/roposo/roposo13.JPG" alt="roposo1"/></div></div><div class="col-md-3 project-wrapper-modal"><div class="img-wrapper clearfix" style="width:250px;height:444.67px"><img class="profile-image img-responsive pull-left" src="assets/images/projects/roposo/roposo14.JPG" alt="roposo1"/></div></div><div class="col-md-3 project-wrapper-modal"><div class="img-wrapper clearfix" style="width:250px;height:444.67px"><img class="profile-image img-responsive pull-left" src="assets/images/projects/roposo/roposo15.JPG" alt="roposo1"/></div></div></div><!--//item-->');
    });

    $('#trimModal').on('shown.bs.modal', function() {
        $(this).find('.modal-body').html('<iframe src="https://marvelapp.com/210b3e8?emb=1" width="300" height="600" allowTransparency="true" frameborder="0"></iframe><p>Implemented the video trim feature to make it easy for user to trim the video while uploading it to Roposo.</p>');
    });

});