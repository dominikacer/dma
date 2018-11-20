<template>
    <section id="AboutUs" class="aboutus">
        <div class="aboutus_image" >
            <img src="~images/aboutus.png" alt="" data-aos="fade-left" data-aos-delay="300">
        </div>
        <div class="aboutus_content">
            <h2 class="aboutus-title title-big" data-aos="fade-up" data-aos-delay="250">About us</h2>
            <p class="aboutus-subtitle custom-p" data-aos="fade-up" data-aos-delay="450">For clients ranging from startups to multinational companies, we’ve developed and launched stunning websites and cutting-edge apps with innovation and the latest digital technology.  Along with that, we’ve founded five startups and won numerous awards for our work. And we don’t plan on slowing down.</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutUs',
    data(){
        return{

        }
    }
}
</script>

<style lang="scss">
@import '~styles/global.scss';

.aboutus{
    padding: 100px;
    display: flex;
    &_image{
        width: 50%;
        img{
            max-width: 100%;
        }
    }
    &_content{
        padding-left: 110px;
        width: 50%;
        .aboutus-title{
            position: relative;
            &:before{
                @extend %animateTitleBefore;
            }
        }
        .aboutus-subtitle{
            color: $light-grey;
        }
    }
}
</style>

