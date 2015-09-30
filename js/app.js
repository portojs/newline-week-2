/**
 * Created by Peter on 30.09.2015.
 */
function PageNavigation() {
    <!-- vars -->
    var nav = $(".nav");
    <!-- functions -->
    this.openHomePage = function() {
        $(".home-page-jumbo").show();
        $(".shop-page-jumbo").hide();
    };
    this.openShopPage = function() {
        $(".home-page-jumbo").hide();
        $(".shop-page-jumbo").show();
    };
    <!-- events -->
    nav.on("click.nav", ".home-button", this.openHomePage);
    nav.on("click.nav", ".shop-button", this.openShopPage);
}

$(document).ready(function(){
    var pageNavigation = new PageNavigation();
});