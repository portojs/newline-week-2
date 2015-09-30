/**
 * Created by Peter on 30.09.2015.
 */
function PageNavigation() {
    <!-- vars -->
    var nav = $(".nav");
    <!-- functions -->
    this.openHomePage = function() {
        $(".home-page-jumbo").show();
        $(".contact-page-jumbo").hide();
        $(".shop-page-jumbo").hide();
    };
    this.openShopPage = function() {
        $(".home-page-jumbo").hide();
        $(".contact-page-jumbo").hide();
        $(".shop-page-jumbo").show();
    };
    this.openContactPage = function() {
        $(".home-page-jumbo").hide();
        $(".shop-page-jumbo").hide();
        $(".contact-page-jumbo").show();
    };
    <!-- events -->
    nav.on("click.nav", ".home-button", this.openHomePage);
    nav.on("click.nav", ".shop-button", this.openShopPage);
    nav.on("click.nav", ".contact-button", this.openContactPage);
}

$(document).ready(function(){
    var pageNavigation = new PageNavigation();
});