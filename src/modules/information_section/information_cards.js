import $ from "#modules/jquery_module.js"

export function setupInformationCards(info) {
    const setInformationCards = () => {
        info.items.forEach((el) => {
            $("#information_section .cards").append(/*html*/`
            <div class="col-md-8-auto">
                <div class="card h-100 text-dark bg-light text-center border-0">
                    <div class="card-body">
                        <h5 class="card-title">${el.title}</h5>
                        <p class="card-text">${el.text}</p>
                    </div>
                </div>
            </div>`
            )
        });
    }
    setInformationCards();
}