import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HowtoComponent } from './howto/howto.component';
import { ExamplesComponent } from './examples/examples.component';

const routes: Routes = [
  { path: '', redirectTo: 'howto', pathMatch: 'full' },
  { path: 'howto', component: HowtoComponent },
  { path: 'examples', component: ExamplesComponent }
];

// const routes: ModuleWithProviders = RouterModule.forRoot(router);

@NgModule({
  declarations: [
    AppComponent,
    HowtoComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
