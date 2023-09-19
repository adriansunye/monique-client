import './style.css'
import $ from "#modules/jquery_module.js"
import header_navigation from '#components/navigation/header_navigation/header_navigation'
import product_section from '#components/layout/sections/product_section/product_section'
import { setupHoverMenu } from '#modules/hover_menu/hover_menu';
import { setupNavigationItems } from '#modules/navigation_items/navigation_items';
    
$(document).ready(function(){  
  $('#header_navigation').append(
    header_navigation,
  );

  $("nav .hover-menu").each(function() {
    setupNavigationItems($( this ))
    setupHoverMenu($( this ))
  })

  $('#product_section').append(
    product_section
  );
});





