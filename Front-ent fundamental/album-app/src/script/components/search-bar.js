import './search-bar.css';

class SearchBar extends HTMLElement{

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="search-bar">
                <input type="text" class="form-search" placeholder="Search Album Title" autocomplete="off">
                <div class="button-search">
                    <span class="fa fa-search"></span>
                </div>
            </div>
        `;
    }
}

customElements.define("search-bar", SearchBar);