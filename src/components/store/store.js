import { observable, computed, action, configure } from "mobx";

configure({ enforceActions: "observed" })

class Store {
  @observable price = 0;
  @observable photos = [];
  @observable albums = [];
  @observable search = '';

  @computed
  get photosByAlbum() {
    return this.photos.filter(item => item.title.toLowerCase().includes(this.search.toLowerCase()))
  }

  @action
  getAlbum = (id) => {
    const currentAlbum = this.albums.find(item => item.id === +id)
    return currentAlbum.title
  }

  @action
  updatePhotos = data => {
    this.photos.replace(data)
  }

  @action
  updateAlbums = data => {
    this.albums.replace(data)
  }

  @action
  getPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(result => {
        this.updatePhotos(result)
      })
  }

  @action
  getAlbums = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(result => {
        this.updateAlbums(result)
      })
  }

  @action
  updateSearch = (e) => {
    this.search = e.target.value
  }

}

export default new Store()
