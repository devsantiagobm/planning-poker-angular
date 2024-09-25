import { Injectable } from '@angular/core';
import { Modals } from '../types.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public modal?: Modals;
  constructor() { }


  public setModal(type: Modals){
    this.modal = type;
  }

  public closeModal(){
    this.modal = undefined;
  }
}
