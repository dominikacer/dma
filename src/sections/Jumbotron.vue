<template>
    <div class="hero">
        <div class="hello">
            <div class="hello_nav">
                <div class="hello_nav--logo">
                    logo
                </div>
                <div class="hello_nav--socials">
                    <ul class="hello_socials">
                        <li class="hello_socials-list"><a class="hello_socials-list-link icon-instagram" href="#" target="_blank"></a></li>
                        <li class="hello_socials-list"><a class="hello_socials-list-link icon-facebook" href="#" target="_blank"></a></li>
                        <li class="hello_socials-list"><a class="hello_socials-list-link icon-linkedin" href="#" target="_blank"></a></li>
                    </ul>
                </div>
            </div>
            <main class="hello_content">
                <div v-bind:class="{active : !showMenu}" v-on:click="showMenu = !showMenu" class="hello-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <transition name="fade" mode="out-in">
                    <div v-if="showMenu" key="1" v-bind:class="{hidden : !showMenu}" v-on:click="showMenu = !showMenu" class="hello-body">
                        <h1 class="hello--title">Your new favourite <br> digital agency<span class="accent">.</span></h1>
                        <p class="hello--subtitle custom-p">We are digittal design, development and marketing specialists who turn ideas and business requirements into digital solutions. And we're always looking for new challenges.</p>
                    </div>
                    <div v-else key="2" v-bind:class="{active : !showMenu}" v-on:click="showMenu = !showMenu"  class="hello-menu">
                        <ul class="hello-menu-wrapper">
                            <li class="hello-menu-item"><a class='hello-menu-item-link' href="#">About us</a></li>
                            <li class="hello-menu-item"><a class='hello-menu-item-link' href="#">Clients</a></li>
                            <li class="hello-menu-item"><a class='hello-menu-item-link' href="#">Projects</a></li>
                            <li class="hello-menu-item"><a class='hello-menu-item-link' href="#">Career</a></li>
                            <li class="hello-menu-item"><a class='hello-menu-item-link' href="#">Contact</a></li>
                        </ul>
                    </div>
                </transition>
            </main>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Jumbotron',
    data() {
        return{
            showMenu: true
        }
    },
    methods: {
        fadeElem: function(){
            this.showMenu =! this.showMenu;
        },
        enter: function(el, done){
            var that = this;

            setTimeout(function(){
                that.showMenu = false;
            }, 3000)
            
        }
    }
}
</script>
<style lang="scss">
@import '~styles/global.scss';

.hero{
    width: 100%;
    height: 100vh;
    background-image: url('../assets/img/hero.jpg');
    background-size: cover;
}

.hello{
    clip-path: polygon(0 0, 57% 0, 44% 100%, 0% 100%);
    background-color: rgba(0,0,0, 0.7);
    height: 100%;
    display: flex;
    &_nav{
        padding: 50px 35px;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        &--logo{
            font-size: 40px;
            color: $light;
            font-weight: 700;
            transform: rotate(-45deg);
        }
        &--socials{
            .hello_socials{
                list-style-type: none;
                padding: 0;
                &-list{
                    padding: 10px 0;
                    &-link{
                        color: $light;
                        text-decoration: none;
                        transition: 0.3s ease-in-out;
                        &:hover{
                            color: $accent;
                        }
                    }
                }
            }
        }
    }
    &_content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 50px 0;
        .hello-burger{
            width: 60px;
            height: 45px;
            position: absolute;
            top: 50px;
            transform: rotate(0deg);
            transition: .5s ease-in-out;
            cursor: pointer;
            span{
                display: block;
                position: absolute;
                height: 9px;
                width: 50%;
                background: $accent;
                opacity: 1;
                transform: rotate(0deg);
                transition: .25s ease-in-out;
                &:nth-child(even){
                    left: 50%;
                    border-radius: 0 9px 9px 0;
                }
                &:nth-child(odd){
                    left: 0;
                    border-radius: 9px 0 0 9px;
                }
                &:nth-child(1),
                &:nth-child(2){
                    top: 0;
                }
                &:nth-child(3),
                &:nth-child(4){
                    top: 18px;
                }
                &:nth-child(5),
                &:nth-child(6){
                    top: 36px;
                }
            }
            &.active{
                span{
                    &:nth-child(1),
                    &:nth-child(6){
                        transform: rotate(45deg);
                    }
                    &:nth-child(2),
                    &:nth-child(5){
                        transform: rotate(-45deg);
                    }
                    &:nth-child(1){
                        left: 5px;
                        top: 7px;
                    }
                    &:nth-child(2){
                        left: calc(50% - 5px);
                        top: 7px;
                    }
                    &:nth-child(3){
                        left: -50%;
                        opacity: 0;
                    }
                    &:nth-child(4){
                        left: 100%;
                        opacity: 0;
                    }
                    &:nth-child(5){
                        left: 5px;
                        top: 29px;
                    }
                    &:nth-child(6){
                        left: calc(50% - 5px);
                        top: 29px;
                    }
                }
            }
        }
        .hello-body{
            &.hidden{
                display: none;
            }
            .hello--title{
                color: $light;
                font-size: 64px;
                line-height: 88px;
                max-width: 50%;
            }
            .hello--subtitle{
                max-width: 40%;
                position: relative;
                margin: 0;
                &:before{
                    position: absolute;
                    left: -50px;
                    top: 8px;
                    width: 2px;
                    height: 30px;
                    background-color: $accent;
                    content: "";
                    @keyframes animateBefore{
                        0%{
                            height: 50px;
                        }
                        50%{
                            height: 90px;
                        }
                        100%{
                            height: 50px;
                        }
                    }
                    animation: animateBefore 5s infinite;
                }
            }
        }
    }
    .hello-menu{
        &-wrapper{
            padding: 0;
            margin: 0;
            list-style-type: none;
            .hello-menu-item{
                line-height: 80px;
                .hello-menu-item-link{
                    font-size: 40px;
                    color: $light;
                    text-decoration: none;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    position: relative;
                    &:after{
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 0;
                        height: 3px;
                        content: "";
                        background-color: $accent;
                        transition: 0.5s cubic-bezier(.17, .65, .64 , 1.36);
                    }
                    &:hover{
                        color: $accent;
                        &:after{
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}
</style>


