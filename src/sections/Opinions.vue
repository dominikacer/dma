<template>
    <div id='opinions' class="opinions">
        <div class="opinions_title">
            <h2 class="title-big" data-aos="fade-up" data-aos-delay="350">Our clients say about working together<span class="accent">?</span></h2>
        </div>
        <carousel class="quote" :nav="false" :autoplay="true" :items="1" data-aos="fade-left" data-aos-delay="550">
            <div class="quote_slide">
                <p class="quote_slide-opinion custom-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiumdod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p class="quote_slide-info">~ John Snow, GOT.com</p>
            </div>
            <div class="quote_slide">
                <p class="quote_slide-opinion custom-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiumdod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p class="quote_slide-info">~ John Snow, GOT.com</p>
            </div>
            <div class="quote_slide">
                <p class="quote_slide-opinion custom-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiumdod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p class="quote_slide-info">~ John Snow, GOT.com</p>
            </div>
        </carousel>
        
    </div>
</template>
<script>
import carousel from 'vue-owl-carousel';

export default {
    name: 'Opinions',
    data(){
        return{

        }
    },
    components: { carousel }
}
</script>
<style lang="scss">
@import "~styles/global.scss";

%quote_sign{
    position: absolute;
    content: "";
    width: 48px;
    background-size: cover;
    height: 48px;
}

.opinions{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 200px 100px;
    @media (max-width: $screen-lg){
        padding: 30px 30px 50px;
    }
    @media(max-width: $screen-md){
        padding: 30px 15px 50px;
    }
    &_title{
        width: 40%;
        @media(max-width: $screen-md){
            width: 100%;    
        }
        .title-big{
            position: relative;
            &::before{
                @extend %animateTitleBefore;
            }
            .accent{
                margin-left: 15px;
            }
        }
    }
    .quote{
        width: 60%;
        @media(max-width: $screen-md){
            width: 100%;    
        }
        &_slide{
            &-opinion{
                text-align: center;
                color: $light-grey;
                position: relative;
                padding: 50px;
                &:before{
                    top: 0;
                    left: 0;
                    @extend %quote_sign;
                    background-image: url('~images/quote_before.png');
                }
                &:after{
                    @extend %quote_sign;
                    bottom: 0;
                    right: 0;
                    background-image: url('~images/quote_after.png');
                }
            }
            &-info{
                text-align: center;
            }
        }
        .owl-dots{
            .owl-dot{
                outline: none;
                span{
                    background: #000;
                    width: 15px;
                    height: 15px;
                }
            }
            .owl-dot.active{
                span{
                    background: $accent;
                }
            }
        }
    }
}
</style>

