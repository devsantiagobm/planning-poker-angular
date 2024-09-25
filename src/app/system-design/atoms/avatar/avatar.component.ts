import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() username: string = "";

  get letters() {
    return this.username.slice(0, 2).toUpperCase()
  }
}
