import './add-album.css';

class AddAlbum extends HTMLElement{

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">    
        <div type="button" class="add-album" data-target="#addAlbum" data-toggle="modal">
                <h3><span class="fa fa-plus"></span></h3>
            </div>
            <div class="modal fade" id="addAlbum" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Album</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Album title</label>
                            <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Album title">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Artist</label>
                            <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Artist">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Release year</label>
                            <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Release year">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Top song</label>
                            <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="1">
                            <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="2">
                        </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>

        `;


    }

}

customElements.define("add-album", AddAlbum);