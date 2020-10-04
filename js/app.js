    Vue.component('header-template',{
        template:`
    <header>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">

                <a class="navbar-brand" href="#">
                <img class="logo" src="./Assets/imagens/logo.png">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Sobre Nós<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link menuitem" href="#">Dúvidas Frequentes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Central de Doações</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Gerador de QR Code</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link subscribe-Btn" href="#">Baixe o App</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    </header>
        `
    });

    //BANNER
    Vue.component('section-one',{
        props:['firstTitle', 'secondTitle'],
        template:`     
            <section id="first">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 texto-conceptual">
                            <h1>{{ firstTitle }} <br> {{ secondTitle }}</h1>
                            <div class="container btnDownload">
                                <a class="btnDefault" href="#">Baixe e aproveite</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>                
        `
    });

    //FEATURE 1
    Vue.component('section-two',{
        props:['title','titleSecond','description', 'featImg'],
        template:`     
            <section id="second">
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-xs-12 col-md-4">
                            <h3>{{ title }} <br> {{ titleSecond }}</h3>
                            <p>{{ description }}</p>
                        </div>

                        <div class="col-xs-12 col-md-5" id="imagebox">
                            <img src="./Assets/imagens/sub-hero.png" class="img-fluid">
                        </div>
                    </div>
                </div>
            </section>                
        `
    });


    var app = new Vue({
    el: '#app',
    data: {
            backgroundGray: {
                backgroundColor:'#1b1d21'
            },
            backgroundBlack: {
                backgroundColor:'#fff'
            },
            fuckColor:{
                backgroundColor:'blue'
            }
        }
    })