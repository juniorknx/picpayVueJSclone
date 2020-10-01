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


    Vue.component('section-one',{
        props:['firstTitle', 'secondTitle'],
        template:`     
            <section id="first">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 texto-conceptual">
                            <h1>{{ firstTitle }} <br> {{ secondTitle }}</h1>
                        </div>
                    </div>
                </div>
            </section>                
        `
    });

    var app = new Vue({
    el: '#app',
    data: {

    }
    })