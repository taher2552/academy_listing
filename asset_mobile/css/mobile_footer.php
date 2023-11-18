
<footer class="mobile_home_footer">

<div class="mob_footer_fix">

    <div class="mob_blog_top_icon">
        <div class="mob_blog_top_btn">
            <img src="<?=base_url(); ?>asset_mobile/images/blog_angle_up.svg" alt="">
        </div>
     </div>

     <div class="mobile_home_fix mob_blog_fixed">
   
        <div class="home_fix_active mobile_home_display">
            <img src="<?=base_url(); ?>asset_mobile/images/mobile_home.svg" alt="">
            <span>Home</span>
        </div>
        <div class="mobile_home_display">
            <img src="<?=base_url(); ?>asset_mobile/images/mobile_ball.svg" alt="">
            <span>Sports</span>
        </div>
        <div class="mobile_home_display">
            <img src="<?=base_url(); ?>asset_mobile/images/mobile_run.svg" alt="">
            <span>About</span>
        </div>
        <div class="mobile_home_display">
            <img src="<?=base_url(); ?>asset_mobile/images/mobile_user.svg" alt="">
            <span>Profile</span>
        </div>
    </div>



</div>






<div>
    <img src="<?=base_url(); ?>asset_mobile/images/logo.svg" alt="" class="mobile_home_logo">
</div>

<div class="mobile_home_para mobile_home_footer_para">
    <p class="mobile_home_description">Unlock your potential and connect with your dream clubs today! Join
        and
        showcase your talent to a world of opportunities. Empower your athletic journey and take the first
        step towards realizing your dreams. Start creating your profile now!"</p>
</div>

<div class="mobile_home_media">
    <img src="<?=base_url(); ?>asset_mobile/images/instagram.png" alt="">
    <img src="<?=base_url(); ?>asset_mobile/images/linkedin.png" alt="" class="mobile_home_insta">
</div>


<div class="mobile_home_links">
    <p class="mobile_home_touch">Get In Touch</p>
    <p class="mobile_home_address">BookMyPlayer Pvt Ltd
        1204, Palm Square. Golf Course Ext Road, Gurgaon. Haryana. India 122018</p>
</div>

<div>
    <div class="mobile_home_contact">
        <img src="<?=base_url(); ?>asset_mobile/images/phone.svg" alt="">
        <p class="mobile_home_contact_no">+91 9811155939</p>
    </div>
    <div class="mobile_home_contact">
        <img src="<?=base_url(); ?>asset_mobile/images/sms.svg" alt="">
        <p class="mobile_home_contact_no">care@bookmyplayer.com</p>
    </div>
</div>

<div class="mobile_home_bottom mob_blog_copy">
    <p class="mobile_home_copyright">Copyright © 2023 <span>BookMyPlayer</span>. All rights reserved.</p>

</div>

</footer>

<script src="<?=base_url(); ?>asset_mobile/js/mobile_home.js"></script>


<script src="<?=base_url('search/assets/js/modernizr-2.6.2.min.js')?>"></script>
        
        <script src="<?=base_url('search/assets/js/jquery-1.10.2.min.js')?>"></script> 
        <script type="text/javascript" src="<?=base_url('search/assets/js/jquery-ui-1.8.2.custom.min.js')?>"></script> 
        <link href="<?=base_url('search/assets/css/css_mobile.css')?>" rel="stylesheet" type="text/css" />
        
        <script type="text/javascript"> 
            $(function() {
        
                $("#dd_user_input").autocomplete({
                    source: "front/search_test",
                    minLength: 2,
                    select: function(event, ui) {
                    var getUrl = ui.item.id;
                
                    if(getUrl != '#') {
                        location.href = getUrl;
                    }
                },
        
                html: true, 
        
                open: function(event, ui) {
                $(".ui-autocomplete").css("z-index", 1000);
                }
                });
        
                });
                </script>
</body>

</html>
