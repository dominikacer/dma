<template>
    <footer class="footer">
        <div class="footer_outer">
            <div class="footer_wrapper">
                <div class="footer_content_left">
                    <h2 class="title-big" data-aos="fade-up" data-aos-delay="350">Contact</h2>
                    <p class="custom-p" data-aos="fade-up" data-aos-delay="550">Ready to start something new and amazing with us?</p>
                    <p class="custom-p" data-aos="fade-up" data-aos-delay="650">Just say hello!</p>
                    <div class="footer_details" data-aos="fade-up" data-aos-delay="750">
                        <p class="footer_label">Email Address</p>
                        <p class="footer_info">hello@dma.pl</p>
                        <p class="footer_label">Telephone</p>
                        <p class="footer_info">+48 555 444 333</p>
                    </div>
                </div>
                <div class="footer_content_right" data-aos="fade-up" data-aos-delay="350">
                    <img src="~images/poland.svg" alt="">
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="copyright_wrapper">
                <p>© 2018. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
@import '~styles/global.scss';

.footer{
    .title-big{
        position: relative;
        &:before{
            @extend %animateTitleBefore;
        }
    }
    .footer_outer{
        padding: 100px;
        max-width: 1600px;
        margin: 0 auto;
    }
    .footer_wrapper{
        display: flex;
        align-items: center;
        padding: 0 100px;
    }
    .footer_content_right{
        margin-left: 150px;
    }
    .footer_label{
        text-transform: uppercase;
        color: $font-grey;
        font-size: 16px;
        margin: 0;
    }
    .footer_info{
        font-size: 32px;
        font-weight: 700;
        margin: 5px 0 30px;
    }
    .footer_details{
        margin-top: 50px;
        .footer_position,
        .footer_mail,
        .footer_phone{
            font-size: 18px;
            line-height: 26px;
            margin: 0;
            color: #000;
        }
    }
    .copyright{
        padding: 15px 0;
        background-color: #151617;
        .copyright_wrapper{
            max-width: 1600px;
            margin: 0 auto;
            color: $light-grey;
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            .js-back-to-top{
                font-size: 14px;
                text-transform: uppercase;
                font-weight: 500;
                cursor: pointer;
                color: #fff;
            }
        }
    }
}
</style>

