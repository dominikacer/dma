<template>
    <section id="whatwedo" class="whatwedo">
        <h2 class="whatwedo-title title-big">What We Do</h2>
    <div class="whatwedo-wrapper">
        <div class="whatwedo_item" data-aos="zoom-in" data-aos-delay="100">
            <div class="whatwedo_item-title">
                <h3 class="title-med">Strategy<span class="accent">.</span></h3>
                <span class="icon icon-strategy"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span><span class="path21"></span><span class="path22"></span><span class="path23"></span></span>
            </div>
            <p class="whatwedo_item-subtitle custom-p">
                Our mission is bring your brand stories to life. Communication using unique content combined with the right strategy will turn visitors into clients.
            </p>
        </div>
        <div class="whatwedo_item" data-aos="zoom-in" data-aos-delay="200">
            <div class="whatwedo_item-title">
                <h3 class="title-med">Design<span class="accent">.</span></h3>
                <span class="icon icon-design"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span></span>
            </div>
            <p class="whatwedo_item-subtitle custom-p">
                A powerful visual experience makes all the difference. We believe that great design can change the way consumers and brands interact with each other.
            </p>
        </div>
        <div class="whatwedo_item" data-aos="zoom-in" data-aos-delay="300">
            <div class="whatwedo_item-title">
                <h3 class="title-med">Development<span class="accent">.</span></h3>
                <span class="icon icon-cloud"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span></span>
            </div>
            <p class="whatwedo_item-subtitle custom-p">
                Fresh ideas, innovation, the latest technology, and an understanding of the business, are vital to developing cutting-edge applications. From back end to front end, we’ve got it covered.
            </p>
        </div>
        <div class="whatwedo_item" data-aos="zoom-in" data-aos-delay="400">
            <div class="whatwedo_item-title">
                <h3 class="title-med">Motion design & videos<span class="accent">.</span></h3>
                <span class="icon icon-cloud"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span></span>
            </div>
            <p class="whatwedo_item-subtitle custom-p">
                Dynamic visual experiences captivate clients. We create video strategy and concepts which attract viewers and evoke the right emotions.
            </p>
        </div>
        <div class="whatwedo_item" data-aos="zoom-in" data-aos-delay="500">
            <div class="whatwedo_item-title">
                <h3 class="title-med">Digital marketing<span class="accent">.</span></h3>
                <span class="icon icon-discount"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span></span>           
            </div>
            <p class="whatwedo_item-subtitle custom-p">
                We don’t just increase your traffic, we target the traffic you want. From market research to marketing concept, we execute marketing strategies that drive conversions.
            </p>
        </div>
        <div class="whatwedo_item" data-aos="zoom-in" data-aos-delay="600">
            <div class="whatwedo_item-title">
                <h3 class="title-med">Data & Analytics<span class="accent">.</span></h3>
                <span class="icon icon-statistics"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></span>  
            </div>
            <p class="whatwedo_item-subtitle custom-p">
                Data and analysis sit at the core of everything we do. We use this data to map user needs to improve your strategy.
            </p>
        </div>
    </div>
    </section>
</template>

<script>
export default {
    name: 'WhatWeDo',
    data(){
        return{

        }
    }
}
</script>
<style lang="scss">
@import '~styles/global.scss';
.whatwedo{
    padding: 0 100px;
    @media (max-width: $screen-lg){
        padding: 0 30px;
    }
    @media(max-width: $screen-md){
        padding: 0 15px;       
    }
    &-title{
        position: relative;
        &:before{
            @extend %animateTitleBefore;
        }
    }
    &-wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        @media(max-width: $screen-sm){
            flex-direction: column;
        }
        .whatwedo_item{
            width: 30%;
            @media(max-width: $screen-md){
                width: 50%;
                &:nth-of-type(odd){
                    padding-right: 10px;
                }
                &:nth-of-type(even){
                    padding-left: 10px;
                }
            }
            @media (max-width: $screen-sm){
                width: 100%;
                &:nth-of-type(odd){
                    padding-right: 0;
                }
                &:nth-of-type(even){
                    padding-left: 0;
                }
            }
            @media(max-width: $screen-sm){
                width: 100%;
            }
            &-title{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .icon{
                font-size: 34px;
            }
            &-subtitle{
                font-size: 18px;
                color: $light-grey;
                line-height: 36px;
                @media(max-width: $screen-sm){
                    font-size: 16px;
                    line-height: 22px;
                }
            }
        }
    }
}
    
</style>


