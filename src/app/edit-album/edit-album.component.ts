import { Component, OnInit, Input } from '@angular/core';
// import { Album } from '../album.model';
import { AlbumService } from '../album.service'

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css'],
  providers: [AlbumService]
})
export class EditAlbumComponent implements OnInit {
  @Input() selectedAlbum;
  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  beginUpdateAnAlbum(albumToUpdate) {
    this.albumService.updateAnAlbum(albumToUpdate);
  }

  initiateAlbumDelete(album) {
    if(confirm('Are you sure?')){
      this.albumService.deleteThis(album); 
    }
  }

}
