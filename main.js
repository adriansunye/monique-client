import './style.css'
import $ from "#modules/jquery_module.js"
import header_navigation from '#components/navigation/header_navigation/header_navigation'
import product_section from '#components/layout/sections/product_section/product_section'
import demostration_modal from '#components/modals/demostration_modal/demostration_modal';
import information_section from '#components/layout/sections/information_section/information_section';
import contact_section from '#components/layout/sections/contact_section/contact_section';
import associates_section from '#components/layout/sections/associates_section/associates_section';

import { setupHoverMenu } from '#modules/hover_menu/hover_menu';
import { setupNavigationItems } from '#modules/navigation_items/navigation_items';
import { getProductInfo } from '#api/product_api'
import { setupDemostrationModal } from '#modules/product_section/close_modal';
import { getGlobalInfo } from '#/api/product_api';
import { setupAssociatesCards } from '#modules/associates_section/associates_cards';
    
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

  $('#information_section').append(
    information_section,
  );

  $('#contact_section').append(
    contact_section,
  );

  $('#associates_section').append(
    associates_section,
  );



  setupDemostrationModal()
  getProductInfo()
  getGlobalInfo()
  setupAssociatesCards()
});





