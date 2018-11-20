<template>
    <div id="plan" class="plan">
        <div class="plan_work">
            <h2 class="title-big light" data-aos="fade-up" data-aos-delay="350">#Plan<span class="accent">.</span></h2>
            <p class="custom-p" data-aos="fade-up" data-aos-delay="500">DMA #Lab is our in-house innovation group. Lab team improves your business in a world of progressive technology and looks for solutions you might never have even thought of before. The market is constantly evolving. WDF Lab helps drives this evolution by transferring its constant flow of technical innovation and ideas into real world applications.</p>
            <div class="plan_box">
                <div class="plan_box-single">
                    <p class="plan_box-title light">Idea<span class="accent">.</span></p>
                    <p class="plan_box-title light">Design<span class="accent">.</span></p>
                    <p class="plan_box-title light">Develop<span class="accent">.</span></p>
                </div>
            </div>
        </div>
        <div class="plan_features">
            <h2 class="title-big light" data-aos="fade-up" data-aos-delay="350">#Creative<span class="accent">.</span></h2>
            <div class="plan_features-single">
                <p class="plan_features-title light">Quality<span class="accent">.</span></p>
                <p class="plan_features-title light">Solid<span class="accent">.</span></p>
                <p class="plan_features-title light">Passion<span class="accent">.</span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Plan',
    data(){
        return {

        }
    }
}
</script>
<style lang="scss">
@import '~styles/global.scss';

%single-mark{
    font-size: 50px;
    transition: color 0.25s;
    position: relative;
    padding: 10px;
    &::before,
    &::after{
        border: 2px solid transparent;
        width: 0;
        height: 0;
        position: absolute;
        content: "";
    }
    &::before{
        top: 0;
        left: 0;
    }
    &::after{
        bottom: 0;
        right: 0;
    }
    &:hover{
        color: $accent;
        &::before,
        &::after{
            width: 100%;
            height: 100%;
        }
    }
    &:hover::before {
        border-top-color: $accent; 
        border-right-color: $accent;
        transition:
        width 0.25s ease-out, 
        height 0.25s ease-out 0.25s; 
    }
    &:hover::after {
        border-bottom-color: $accent; 
        border-left-color: $accent;
        transition:
        border-color 0s ease-out 0.5s, 
        width 0.25s ease-out 0.5s, 
        height 0.25s ease-out 0.75s; 
    }
}

.plan{
    background-image: url('~images/plan.jpg');
    background-size: cover;
    background-position: 500px 0;
    display: flex;
    margin-top: 250px;
    &_work{
        padding: 150px 100px;
        clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
        width: 50%;
        background-color: #151617;
        margin-top: -50px;
        margin-bottom: 50px;
    }
    &_box{
        &-single{
            display: flex;
            justify-content: space-around;
            .plan_box-title{
                @extend %single-mark;
            }
        }
    }
    &_features{
        padding: 100px;
        width: 50%;
        &-single{
            display: flex;
            justify-content: space-between;
            .plan_features-title{
                @extend %single-mark;
            }
        }
    }
}
</style>

