/**
 * Created by Peter on 30.09.2015.
 */
function PageNavigation() {
    <!-- vars -->
    var nav = $(".nav");
    var homePageJumbo = $(".home-page-jumbo");
    var shopPageJumbo = $(".shop-page-jumbo");
    var contactPageJumbo = $(".contact-page-jumbo");
    <!-- functions -->
    this.openHomePage = function() {
        shopPageJumbo.hide();
        contactPageJumbo.hide();
        homePageJumbo.show();
    };
    this.openShopPage = function() {
        homePageJumbo.hide();
        contactPageJumbo.hide();
        shopPageJumbo.show();
    };
    this.openContactPage = function() {
        homePageJumbo.hide();
        shopPageJumbo.hide();
        contactPageJumbo.show();
    };
    <!-- events -->
    nav.on("click.nav", ".home-button", this.openHomePage);
    nav.on("click.nav", ".shop-button", this.openShopPage);
    nav.on("click.nav", ".contact-button", this.openContactPage);
}

$(document).ready(function(){
    var pageNavigation = new PageNavigation();
});