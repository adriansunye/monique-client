import './style.css'
import $ from "./src/modules/jquery_module.js"
import header_navigation from './src/components/navigation/header_navigation/header_navigation.js'
    
$(document).ready(function(){  
  $('#app').append(
    $(header_navigation)
  );
});





