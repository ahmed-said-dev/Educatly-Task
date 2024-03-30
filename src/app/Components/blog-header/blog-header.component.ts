import { Component } from '@angular/core';
import { SearchService } from '../../services/shared-search.service';



@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrl: './blog-header.component.css',

})
export class BlogHeaderComponent {
  
  searchText= '';
  constructor(private searchService: SearchService) {}

  onSearchChange(event: any): void {
    const searchText = event.target.value;
    this.searchService.setSearchText(searchText);
  }
  
  searchTerm: string = '';
  clearSearch() {
    this.searchTerm = '';
  }
  
}
