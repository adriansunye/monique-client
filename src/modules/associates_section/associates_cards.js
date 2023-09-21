import $ from "#modules/jquery_module.js"

export function setupAssociatesCards() {
    const folder = "/assets/images/associates/";

    const setAssociatesCards = () => {
        for (let index = 0; index < 8; index++) {
            let val = 'logo' + (index + 1);
            console.log(folder + val + '.png')
            $("#associates_section .associates-cards").append( /*html*/`
                <div class="col-md-8-auto ">
                    <div class="card h-100 text-dark bg-light text-center border-0">
                        <div class="card-body">
                            <img src='${folder + val + '.png'}'>
                        </div>
                    </div>
                </div>`
            );
        }
    }
    setAssociatesCards();
}