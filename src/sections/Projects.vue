<template>
    <div class="projects">
        <h2 class="title-big light" data-aos="fade-up" data-aos-delay="350">Recent Projects<span class="accent">.</span></h2>
        <div class="projects_wrapper">
            <div class="single_project" data-aos="flip-up" data-aos-delay="500">
                <figure class="single_project-image">
                    <img src="~images/project.jpeg" alt="">
                </figure>
                <span class="single_project-overlay overlay-a"></span>
                <div class="single_project-content">
                    <div class="project-logo">Logo</div>
                    <div class="project-tech">#UX/UI #Design</div>
                </div>
            </div>
            <div class="single_project" data-aos="flip-up" data-aos-delay="700">
                <figure class="single_project-image">
                    <img src="~images/project.jpeg" alt="">
                </figure>
                <span class="single_project-overlay overlay-b"></span>
                <div class="single_project-content">
                    <div class="project-logo">Logo</div>
                    <div class="project-tech">#Analize #Marketing</div>
                </div>
            </div>
            <div class="single_project" data-aos="flip-up" data-aos-delay="900">
                <figure class="single_project-image">
                    <img src="~images/project.jpeg" alt="">
                </figure>
                <span class="single_project-overlay overlay-c"></span>
                <div class="single_project-content">
                    <div class="project-logo">Logo</div>
                    <div class="project-tech">#UX/UI #Design #Coding #Programming</div>
                </div>
            </div>
            <div class="single_project" data-aos="flip-up" data-aos-delay="1100">
                <figure class="single_project-image">
                    <img src="~images/project.jpeg" alt="">
                </figure>
                <span class="single_project-overlay overlay-d"></span>
                <div class="single_project-content">
                    <div class="project-logo">Logo</div>
                    <div class="project-tech">#SEO #Marketing</div>
                </div>
            </div>
            <div class="single_project" data-aos="flip-up" data-aos-delay="1300">
                <figure class="single_project-image">
                    <img src="~images/project.jpeg" alt="">
                </figure>
                <span class="single_project-overlay overlay-e"></span>
                <div class="single_project-content">
                    <div class="project-logo">Logo</div>
                    <div class="project-tech">#Programming #Hosting</div>
                </div>
            </div>
            <div class="single_project" data-aos="flip-up" data-aos-delay="1500">
                <figure class="single_project-image">
                    <img src="~images/project.jpeg" alt="">
                </figure>
                <span class="single_project-overlay overlay-f"></span>
                <div class="single_project-content">
                    <div class="project-logo">Logo</div>
                    <div class="project-tech">#UX/UI #Design #Coding #Programming</div>
                </div>
            </div>
            <div class="single_project" data-aos="flip-up" data-aos-delay="1700">
                <figure class="single_project-image">
                    <img src="~images/project.jpeg" alt="">
                </figure>
                <span class="single_project-overlay overlay-g"></span>
                <div class="single_project-content">
                    <div class="project-logo">Logo</div>
                    <div class="project-tech"></div>
                </div>
            </div>
            <div class="single_project" data-aos="flip-up" data-aos-delay="1900">
                <figure class="single_project-image">
                    <img src="~images/project.jpeg" alt="">
                </figure>
                <span class="single_project-overlay overlay-h"></span>
                <div class="single_project-content">
                    <div class="project-logo">Logo</div>
                    <div class="project-tech">#UX/UI #Design #Coding #Programming</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import vanillatilt from 'vanilla-tilt';

export default {
    name: 'Projects',
    data(){
        return{

        }
    },
    components: {
        vanillatilt
    },
    mounted() {
        VanillaTilt.init(document.querySelectorAll(".single_project"), {
            max: 25,
            speed: 400
	    });
    },
}
</script>
<style lang="scss">
@import '~styles/global.scss';

.projects{
    background-color: #151617;
    padding: 100px 10%;
    @media(max-width: $screen-sm){
        padding: 10px 10% 20px;       
    }
    &_wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 1600px;
        .single_project{
            width: 25%;
            padding: 0 10px;
            height: 400px;
            margin-bottom: 20px;
            position: relative;
            perspective: 40px;
            transition: transform 0.5s;
            display: flex;
            justify-content: center;
            align-items: center;
            @media (max-width: $screen-md){
                width: 50%;
                max-width: 320px;
            }
            @media(max-width: $screen-sm){
                width: 100%;
                margin: 20px auto;
                max-width: 320px;
            }
            &-image{
                position: absolute;
                margin: 0;
                height: 100%;
                width: calc(100% - 20px);
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            &-overlay{
                position: absolute;
                width: calc(100% - 20px);
                height: 100%;
                content: "";
                opacity: 0.5;
            }
            &-content{
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 100%;
                justify-content: space-evenly;
                z-index: 2;
                .project-logo{
                    color: #fff;
                    font-size: 45px;
                    font-weight: 700;
                }
                .project-tech{
                    color: #fff;
                    padding: 0 20px;
                }
            }
        }
    }
}
.overlay-a{
    background-color: aqua;
}
.overlay-b{
    background-color: olive;
}
.overlay-c{
    background-color: blueviolet;
}
.overlay-d{
    background-color: chocolate;
}
.overlay-e{
    background-color: firebrick;
}
.overlay-f{
    background-color: powderblue;
}
.overlay-g{
    background-color: teal;
}
.overlay-h{
    background-color: midnightblue;
}

</style>