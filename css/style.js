import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "movingCar": {
        "background": "url(../images/bg_slider_bottom.png) repeat-x 0 0",
        "top": -110,
        "content": "",
        "display": "block",
        "height": 73,
        "left": 0,
        "position": "relative",
        "width": "1000000%",
        "zIndex": 6,
        "WebkitAnimation": "wave-animation-s 180s infinite linear",
        "MozAnimation": "wave-animation-s 180s infinite linear",
        "OAnimation": "wave-animation-s 180s infinite linear",
        "animation": "wave-animation-s 180s infinite linear"
    },
    "font-thin": {
        "fontFamily": "\"Titillium Web\", sans-serif",
        "fontWeight": "200"
    },
    "font-semibold": {
        "fontFamily": "\"Titillium Web\", sans-serif",
        "fontWeight": "600"
    },
    "font-light": {
        "fontFamily": "\"Titillium Web\", sans-serif",
        "fontWeight": "300"
    },
    "breaker": {
        "clear": "both",
        "fontSize": 1,
        "lineHeight": 1,
        "height": 1
    },
    "html": {
        "height": "100%",
        "width": "100%"
    },
    "body": {
        "height": "100%",
        "width": "100%",
        "backgroundColor": "#2f2f2f",
        "fontFamily": "\"Titillium Web\", sans-serif",
        "fontWeight": "normal",
        "overflowX": "hidden",
        "WebkitFontSmoothing": "antialiased !important"
    },
    "justify-text": {
        "textAlign": "justify"
    },
    "navbar": {
        "backgroundImage": "url(\"../images/barrasAtencion.jpg\")",
        "backgroundSize": "contain",
        "backgroundColor": "rgba( 228, 230, 229, .85 )",
        "borderBottom": "0 none",
        "fontSize": 16,
        "transition": ".25s all linear",
        "minHeight": 55
    },
    "navbar container": {
        "paddingLeft": 50
    },
    "logo": {
        "position": "absolute",
        "overflow": "visible",
        "float": "left",
        "left": 5,
        "top": 7
    },
    "navbarinv": {
        "backgroundImage": "none",
        "backgroundColor": "rgba( 0, 0, 0, .5 )",
        "borderBottom": "1px solid #bfbfbf"
    },
    "navbar nav li:hover a": {
        "color": "#F00"
    },
    "navbar nav a": {
        "color": "#000",
        "fontFamily": "\"Titillium Web\", sans-serif",
        "fontWeight": "800",
        "transition": ".5s all linear",
        "cursor": "pointer",
        "paddingBottom": 0,
        "paddingTop": 15
    },
    "navbarinv a": {
        "color": "#FFF"
    },
    "navbar-responsive-collapse": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "nav li": {
        "textAlign": "center",
        "whiteSpace": "nowrap"
    },
    "nav > li > a:hover": {
        "backgroundColor": "inherit",
        "outline": "none"
    },
    "nav > li > a:focus": {
        "backgroundColor": "inherit",
        "outline": "none"
    },
    "navbar-brand": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8
    },
    "nav-parent *": {
        "position": "relative"
    },
    "active-menu": {
        "backgroundColor": "#38322b",
        "content": "'.'",
        "display": "block",
        "height": 5,
        "left": 0,
        "position": "absolute",
        "top": 0,
        "transition": ".5s all linear",
        "width": "1%",
        "zIndex": 9
    },
    "inv active-menu": {
        "backgroundColor": "#FFF"
    },
    "special-active-menu": {
        "zIndex": 10
    },
    "special-active-menu-1": {
        "backgroundColor": "#F00 !important"
    },
    "special-active-menu-2": {
        "backgroundColor": "#F00 !important"
    },
    "special-active-menu-3": {
        "backgroundColor": "#F00 !important"
    },
    "special-active-menu-4": {
        "backgroundColor": "#F00 !important"
    },
    "special-active-menu-5": {
        "backgroundColor": "#F00 !important"
    },
    "special-active-menu-6": {
        "backgroundColor": "#F00 !important"
    },
    "botonSandwich": {
        "top": 4,
        "height": 30,
        "borderColor": "#000"
    },
    "botonSandwich span": {
        "backgroundColor": "#000 !important"
    },
    ":focus": {
        "outline": "none"
    },
    "::-moz-focus-inner": {
        "border": 0
    },
    "slide-1": {
        "backgroundPosition": "center center",
        "backgroundRepeat": "no-repeat",
        "textAlign": "center",
        "color": "#ffffff",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "OBackgroundSize": "cover",
        "backgroundSize": "cover",
        "width": "100%",
        "height": "calc(100vh - 28px)"
    },
    "slide-2": {
        "backgroundPosition": "center center",
        "backgroundRepeat": "no-repeat",
        "textAlign": "center",
        "backgroundColor": "#e01c16",
        "color": "#e4e6e5",
        "paddingTop": 90
    },
    "slide-3": {
        "backgroundPosition": "center center",
        "backgroundRepeat": "no-repeat",
        "textAlign": "center",
        "backgroundColor": "#2f2f2f",
        "color": "#e4e6e5",
        "fontSize": 35,
        "lineHeight": 50,
        "marginTop": 30
    },
    "slide-4": {
        "backgroundPosition": "center center",
        "backgroundRepeat": "no-repeat",
        "textAlign": "center",
        "backgroundColor": "#bb5807",
        "marginTop": 40,
        "marginRight": "auto",
        "marginBottom": 40,
        "marginLeft": "auto",
        "overflow": "hidden",
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0,
        "width": "100%",
        "color": "white"
    },
    "slide-5": {
        "backgroundPosition": "center center",
        "backgroundRepeat": "no-repeat",
        "textAlign": "center",
        "backgroundColor": "#e0af24",
        "color": "#e4e6e5",
        "paddingTop": 90
    },
    "slide-6": {
        "backgroundPosition": "center center",
        "backgroundRepeat": "no-repeat",
        "textAlign": "center",
        "backgroundColor": "#2f2f2f",
        "color": "#e4e6e5",
        "paddingBottom": 350,
        "paddingTop": 90
    },
    "slide-1 h1": {
        "paddingTop": 130
    },
    "home-row-1": {
        "paddingTop": 25
    },
    "home-row-2": {
        "paddingTop": 25,
        "fontSize": 25
    },
    "home-row-1 h1": {
        "fontSize": 54
    },
    "home-row-1 h4": {
        "fontSize": 32
    },
    "home-row-2 col-12": {
        "height": 232,
        "paddingTop": 30
    },
    "home-row-2 col-12 home-hover": {
        "height": 166,
        "overflow": "hidden",
        "paddingTop": 26,
        "transition": "all ease-in .5s"
    },
    "home-row-2 col-12 home-hover:hover": {
        "height": 166,
        "paddingTop": 0
    },
    "carousel": {
        "height": "calc(100vh - 28px)"
    },
    "myCarousel main-text": {
        "position": "absolute",
        "top": 100,
        "width": "100%",
        "zIndex": 100
    },
    "myCarousel tres carousel-caption": {
        "top": "5%"
    },
    "myCarousel cuatro carousel-caption": {
        "top": "5%"
    },
    "carousel-caption": {
        "zIndex": 10
    },
    "carousel-caption p": {
        "fontFamily": "'Roboto', sans-serif",
        "fontSize": 40,
        "fontWeight": "700",
        "color": "#ffdd3d",
        "textShadow": "2.5px 2.5px #000"
    },
    "carousel-caption btn": {
        "fontSize": 20,
        "backgroundColor": "#ebce45",
        "color": "#39332d"
    },
    "myCarousel item": {
        "backgroundSize": "cover",
        "backgroundPosition": "center center",
        "height": "calc(100vh - 28px)"
    },
    "myCarousel itemuno": {
        "backgroundImage": "url(\"../images/carousel1.jpg\")"
    },
    "myCarousel itemdos": {
        "backgroundImage": "url(\"../images/carousel2.jpg\")"
    },
    "myCarousel itemtres": {
        "backgroundImage": "url(\"../images/carousel3.jpg\")",
        "backgroundPosition": "button)"
    },
    "myCarousel itemcuatro": {
        "backgroundImage": "url(\"../images/carousel4.jpg\")"
    },
    "myCarousel itemcinco": {
        "backgroundImage": "url(\"../images/carousel5.jpeg\")"
    },
    "myCarousel itemseis": {
        "backgroundImage": "url(\"../images/carousel6.jpeg\")"
    },
    "carousel-control i": {
        "fontSize": 50,
        "top": "50%",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "position": "relative",
        "zIndex": 120
    },
    "title-row": {
        "fontSize": 45,
        "paddingBottom": 50
    },
    "line-row hr": {
        "backgroundColor": "#e4e6e5",
        "height": 5,
        "marginTop": 30,
        "marginRight": "auto",
        "marginBottom": 30,
        "marginLeft": "auto",
        "width": "33%"
    },
    "subtitle-row": {
        "fontSize": 35,
        "paddingBottom": 40,
        "paddingTop": 40
    },
    "content-row": {
        "paddingTop": 45
    },
    "videos": {
        "marginTop": 0,
        "marginRight": 30,
        "marginBottom": 0,
        "marginLeft": 30,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 70,
        "paddingLeft": 0
    },
    "videos div iframe": {
        "background": "orange",
        "width": 30 * vw,
        "height": 16.86 * vw
    },
    "slide-3 curso1 jumbotronclase": {
        "backgroundColor": "#F00"
    },
    "slide-3 curso2 jumbotronclase": {
        "backgroundColor": "#d4c717"
    },
    "slide-3 curso3 jumbotronclase": {
        "backgroundColor": "#4caf50"
    },
    "slide-3 jumbotronclase": {
        "borderRadius": "15% 15% 2% 2%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflow": "hidden"
    },
    "slide-3 jumbotrontitle": {
        "backgroundColor": "transparent",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "slide-3 jumbotrontitle h2": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "slide-3 jumbotroncontent": {
        "backgroundColor": "#e4e6e5",
        "color": "#2f2f2f",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "borderRadius": "0 0 5px 5px"
    },
    "slide-3 jumbotroncontent h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3
    },
    "slide-3 jumbotroncontent h4": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3
    },
    "slide-3 jumbotroncontent p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3,
        "fontSize": 15
    },
    "slide-3 jumbotroncontent hr": {
        "marginTop": 15,
        "marginBottom": 15,
        "backgroundColor": "#2f2f2f"
    },
    "slide-3 jumbotroncontent ul": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "slide-3 jumbotroncontent a": {
        "width": "100%"
    },
    "curso1:hover": {
        "WebkitAnimation": "pulse 1s forwards",
        "animation": "pulse 1s forwards"
    },
    "curso2:hover": {
        "WebkitAnimation": "pulse 1s forwards",
        "animation": "pulse 1s forwards"
    },
    "curso3:hover": {
        "WebkitAnimation": "pulse 1s forwards",
        "animation": "pulse 1s forwards"
    },
    "slide-4 jumbotron div": {
        "paddingTop": 5,
        "paddingBottom": 5,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "slide-4 jumbotron h2": {
        "paddingTop": 5,
        "paddingBottom": 5,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "slide-4 jumbotron": {
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30,
        "background": "#e0af24"
    },
    "slide-4 jumbotron p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "slide-4 jumbotron a": {
        "width": "100%"
    },
    "slide-5 fancybox img": {
        "width": 70 * vw,
        "height": 90 * vw
    },
    "slide-5 container": {
        "paddingBottom": 40
    },
    "slide-6 line-row hr": {
        "backgroundColor": "#4e4e4e",
        "color": "#4e4e4e"
    },
    "slide-6 a": {
        "color": "inherit",
        "outline": "none",
        "textDecoration": "none"
    },
    "contact-row-4": {
        "paddingTop": 125,
        "float": "none"
    },
    "contact-row-4 col-12": {
        "height": 175,
        "overflow": "hidden",
        "paddingTop": 20,
        "transition": "all ease-in .5s"
    },
    "contact-row-4 img": {
        "display": "block",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "maxHeight": "100%",
        "maxWidth": "100%"
    },
    "contact-row-4 col-12:hover": {
        "height": 175,
        "paddingTop": 0
    },
    "contact-row-4 col-12 hover-text": {
        "display": "none",
        "fontSize": 20
    },
    "lightbox-out": {
        "backgroundColor": "rgba( 0, 0, 0, 0.7 )",
        "height": "100%",
        "position": "fixed",
        "width": "100%",
        "zIndex": 99999
    },
    "with-hover-text span": {
        "display": "none"
    },
    "no-padding": {
        "paddingTop": 0,
        "paddingRight": "!important",
        "paddingBottom": 0,
        "paddingLeft": "!important"
    },
    "zoom": {
        "backgroundImage": "url('../images/zoom.png')",
        "backgroundPosition": "center center",
        "backgroundRepeat": "no-repeat",
        "height": "100%",
        "left": 0,
        "position": "absolute",
        "top": 0,
        "width": "100%",
        "zIndex": 999
    },
    "arrows": {
        "bottom": "10%",
        "height": 80,
        "position": "fixed",
        "right": "10%",
        "width": 80,
        "zIndex": 1000
    },
    "arrows div": {
        "backgroundImage": "url('../images/website-arrows.png')",
        "cursor": "pointer",
        "height": 30,
        "position": "absolute",
        "width": 30
    },
    "arrow-right": {
        "backgroundPosition": "30px -90px",
        "right": 0,
        "top": 25
    },
    "arrow-rightdisabled": {
        "backgroundPosition": "0 -90px"
    },
    "navigation-slide": {
        "cursor": "pointer"
    },
    "slide-6 container>div": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0
    },
    "slide-6 title-row": {
        "marginBottom": 20,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "contactenos": {
        "fontSize": 26,
        "textAlign": "center",
        "color": "#ff4842"
    },
    "slide-6 jumbotron": {
        "backgroundColor": "#5cb85c",
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30,
        "textAlign": "right"
    },
    "slide-6 jumbotron ul": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "slide-6 jumbotron hr": {
        "marginTop": 5,
        "marginRight": 15,
        "marginBottom": 0,
        "marginLeft": 0,
        "float": "right",
        "visibility": "hidden"
    },
    "mapa iframe": {
        "width": "100%",
        "height": 212
    },
    "form-signin form-control:focus": {
        "zIndex": 2,
        "boxShadow": "0 0 10px red"
    },
    "form-signin form-control": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "fontSize": 16
    },
    "contactForm textarea": {
        "height": 6,
        "marginBottom": 10
    },
    "content-row i": {
        "display": "block",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "maxHeight": "100%",
        "maxWidth": "100%"
    },
    "content-row h2": {
        "fontSize": 28,
        "paddingBottom": 40
    },
    "content-row h4": {
        "fontFamily": "\"Titillium Web\", \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif",
        "fontSize": 20,
        "fontWeight": "300"
    },
    "i": {
        "fontSize": "40px !important",
        "color": "white"
    }
});