import $ from "#modules/jquery_module.js"

const DEMOSTRATION_URL = "https://www.youtube-nocookie.com/embed/hCWIMxAzlrM?si=0Hg0UEyyT-Nb9Dfc"

export function setupDemostrationModal() {
    const setDemostrationModal = () => {
        $("body").click(function(){
          $('.modal iframe').prop('src', `${DEMOSTRATION_URL}`);
        });
        
    }
    setDemostrationModal();
}