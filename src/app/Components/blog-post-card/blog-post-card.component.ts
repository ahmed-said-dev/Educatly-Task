import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { BlogPostCardService } from './blog-post-card.service';
import { SearchService } from '../../services/shared-search.service';
import { distinctUntilChanged } from 'rxjs/operators';

interface BlogPost {
  url: string;
  social_image: string;
  tag_list: string[];
  title: string;
  description: string;
  user: {
    profile_image: string;
    name: string;
  };
  published_at: string;
}


@Component({
  selector: 'app-blog-post-card',
  templateUrl: './blog-post-card.component.html',
  styleUrls: ['./blog-post-card.component.css']
})
export class BlogPostCardComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  @Input() post: any;

  displayedPosts: BlogPost[] = [];
  uniqueUrls: Set<string> = new Set<string>();
  postMap: Map<string, BlogPost> = new Map<string, BlogPost>();


  constructor(
    private blogPostService: BlogPostCardService,
    private searchService: SearchService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.searchService.searchText$
      .pipe(distinctUntilChanged())
      .subscribe(searchText => {
        this.fetchBlogPosts(searchText);
      });
  }

  fetchBlogPosts(searchText: string): void {
    this.blogPostService.getBlogPosts(1)
      .subscribe(response => {

        const filteredPosts = response.filter((post: BlogPost) =>
          post.title.toLowerCase().includes(searchText.toLowerCase())
        );
        const uniquePosts: BlogPost[] = [];
        filteredPosts.forEach((post: any) => {

          if (!uniquePosts.some(p => p.url === post.url)) {
            uniquePosts.push(post);
          }
        });
        this.displayedPosts = uniquePosts;
        this.cdr.detectChanges();
      });
  }

}
