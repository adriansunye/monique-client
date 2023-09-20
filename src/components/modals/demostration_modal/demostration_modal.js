const DEMOSTRATION_URL = "https://www.youtube-nocookie.com/embed/hCWIMxAzlrM?si=0Hg0UEyyT-Nb9Dfc"

export default /*html*/ `
    <!-- Modal -->
    <div class="modal fade" id="demostrationModal" data-bs-backdrop="true" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe id="demostrationVideo" type="text/html" width="854" height="480" src="${DEMOSTRATION_URL}" 
                            title="YouTube video player" frameborder="0">
                        </iframe>                   
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
;
