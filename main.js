import './style.css'
import $ from "#modules/jquery_module.js"
import header_navigation from '#components/navigation/header_navigation/header_navigation'
import product_section from '#components/layout/sections/product_section/product_section'
import demostration_modal from '#components/modals/demostration_modal/demostration_modal';

import { setupHoverMenu } from '#modules/hover_menu/hover_menu';
import { setupNavigationItems } from '#modules/navigation_items/navigation_items';
import { getProductInfo } from '#api/product_api'
import { setupDemostrationModal } from './src/modules/product_section/close_modal';
    
$(document).ready(function(){  
  $('#header_navigation').append(
    header_navigation,
  );

  $("nav .hover-menu").each(function() {
    setupNavigationItems($( this ))
    setupHoverMenu($( this ))
  })

  $('#product_section').append(
    product_section,
    demostration_modal
  );

  setupDemostrationModal()
  /*$('.modal').on('hide.bs.modal', function() { var memory = $(this).html(); $(this).html(memory); })*/

  getProductInfo( $('#product_section'))
});





