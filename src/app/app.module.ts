import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './shared/store/counter.reducer';
import { StoreModule } from '@ngrx/store';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material.Module';
import { CustomcounterComponent } from './component/customcounter/customcounter.component';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { blogReducer } from './shared/store/Blog/Blog.reducers';
import { BlogComponent } from './component/blog/blog.component';
import { CounterComponent } from './component/counter/counter.component';
import { Appstate } from './shared/store/Global/App.state';
import { MenuheaderComponent } from './component/menuheader/menuheader.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterdisplayComponent,
    CounterbuttonComponent,
    CustomcounterComponent,
    BlogComponent,
    CounterComponent,
    MenuheaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot(Appstate),
    BrowserAnimationsModule,
    FormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
