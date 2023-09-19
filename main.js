import './style.css'
import $ from "./src/modules/jquery_module.js"
import header_navigation from './src/components/navigation/header_navigation/header_navigation'
import { setupHoverMenu } from './src/modules/hover_menu/hover_menu';
    
$(document).ready(function(){  
  $('#header_navigation').append(
    header_navigation,
  );
  
  $("nav .hover-menu").each(function() {
    setupHoverMenu($( this ))
  })
});





