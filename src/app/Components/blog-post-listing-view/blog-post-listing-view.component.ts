import { Component, Input, OnInit } from '@angular/core';
import { BlogPostListingViewService } from './blog-post-listing-view.service';

@Component({
  selector: 'app-blog-post-listing-view',
  templateUrl: './blog-post-listing-view.component.html',
  styleUrl: './blog-post-listing-view.component.css'
})
export class BlogPostListingViewComponent implements OnInit{
  blogPosts: any[] = [];
  displayedPosts: any[] = [];
  currentPage: number = 1;
  postsPerPage: number = 9;
  loading: boolean = false;
  error: boolean = false;


  constructor(private blogPostService: BlogPostListingViewService) { }

  ngOnInit(): void {
    this.fetchBlogPosts();
  }

  fetchBlogPosts(): void {
    this.loading = true;
    this.blogPostService.getBlogPosts(1)
      .subscribe(response => {
        this.blogPosts = response;
        this.loadPosts();
        this.loading = false;
      }, error => {
        console.error('Error fetching blog posts:', error);
        this.error = true;
        this.loading = false;
      });
  }

  loadPosts(): void {
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    const endIndex = startIndex + this.postsPerPage;
    this.displayedPosts = this.blogPosts.slice(startIndex, endIndex);
  }

  loadMorePosts(): void {
    const startIndex = this.displayedPosts.length;
    const endIndex = startIndex + 9;
    this.displayedPosts = [...this.displayedPosts, ...this.blogPosts.slice(startIndex, endIndex)];
  }
  retryFetch(): void {
    this.error = false; 
    this.fetchBlogPosts(); 
}
}
