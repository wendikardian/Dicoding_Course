import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends HTMLElement{

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
            <nav class="navbar navbar-light" >
                <h2> <span class="fa fa-music "></span> Top Albums App</h2>
            </nav>
        <script src="https://use.fontawesome.com/5c0b25bbfc.js"></script>
        `;
        
    }

}

customElements.define("nav-bar", Navbar);