/**
 * Created by Peter on 30.09.2015.
 */
function PageNavigation() {
    <!-- vars -->
    var nav = $(".nav");
    var jumbotron = $(".jumbotron");
    var homePageJumbo = $(".home-page-jumbo");
    var shopPageJumbo = $(".shop-page-jumbo");
    var contactPageJumbo = $(".contact-page-jumbo");
    <!-- functions -->
    this.openHomePage = function() {
        $(this).addClass("active");
        $(this).closest(".nav").find(".shop-button").removeClass("active");
        $(this).closest(".nav").find(".contact-button").removeClass("active");
        shopPageJumbo.hide();
        contactPageJumbo.hide();
        homePageJumbo.show();
    };
    this.openShopPage = function() {
        $(this).addClass("active");
        $(this).closest(".nav").find(".home-button").removeClass("active");
        $(this).closest(".nav").find(".contact-button").removeClass("active");
        homePageJumbo.hide();
        contactPageJumbo.hide();
        shopPageJumbo.show();
    };
    this.openContactPage = function() {
        $(this).addClass("active");
        $(this).closest(".nav").find(".shop-button").removeClass("active");
        $(this).closest(".nav").find(".home-button").removeClass("active");

        homePageJumbo.hide();
        shopPageJumbo.hide();
        contactPageJumbo.show();
    };
    this.showRegForm = function() {
        $(this).closest(".jumbotron").find(".home-page-reg-form").slideToggle();
    };
    this.showLoginForm = function() {
        $(this).closest(".jumbotron").find(".home-page-login-form").slideToggle();
    };
    <!-- events -->
    nav.on("click.nav", ".home-button", this.openHomePage);
    nav.on("click.nav", ".shop-button", this.openShopPage);
    nav.on("click.nav", ".contact-button", this.openContactPage);
    jumbotron.on("click.form", ".signup-button", this.showRegForm);
    jumbotron.on("click.form", ".login-button", this.showLoginForm);
}

$(document).ready(function(){
    var pageNavigation = new PageNavigation();
});