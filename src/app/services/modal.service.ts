import { Injectable } from '@angular/core';

interface IModal{
  id: string,
  visible: boolean
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  private modals: IModal[] = [];
  constructor() {}

  register(id: string){
    this.modals.push({
      id,
      visible : false
    })

    console.log(this.modals);
    
  }

  isModalOpen(id: string): boolean {
    return !!this.modals.find(ele => ele.id === id)?.visible;
  }

  toggleModal(id: string) {
    const modals = this.modals.find(ele => ele.id === id);

    if (modals) {
      modals.visible = !modals.visible;
    }

  }
}
