import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-controls',
  templateUrl: './pagination-controls.component.html',
  styleUrl: './pagination-controls.component.css'
})
export class PaginationControlsComponent {
  @Output() next = new EventEmitter<void>();

  loadMore(): void {
    this.next.emit();
  }

}
