import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostListingViewComponent } from './Components/blog-post-listing-view/blog-post-listing-view.component';
import { BlogPostItemComponent } from './Components/blog-post-item/blog-post-item.component';
import { PaginationControlsComponent } from './Components/pagination-controls/pagination-controls.component';
import { LoadingIndicatorComponent } from './Components/loading-indicator/loading-indicator.component';
import { ErrorMessageComponent } from './Components/error-message/error-message.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BlogHeaderComponent } from './Components/blog-header/blog-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { BlogPostCardComponent } from './Components/blog-post-card/blog-post-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CustomDatePipe } from './Components/blog-post-card/custom-date.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    BlogPostListingViewComponent,
    BlogPostItemComponent,
    PaginationControlsComponent,
    LoadingIndicatorComponent,
    ErrorMessageComponent,
    BlogHeaderComponent,
    BlogPostCardComponent,
    CustomDatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
