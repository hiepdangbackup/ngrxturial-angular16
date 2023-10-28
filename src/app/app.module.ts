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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BlogComponent } from './component/blog/blog.component';
import { CounterComponent } from './component/counter/counter.component';
import { Appstate } from './shared/store/Global/App.state';
import { MenuheaderComponent } from './component/menuheader/menuheader.component';
import { AddblogComponent } from './component/addblog/addblog.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from './shared/store/Blog/Blog.Effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterdisplayComponent,
    CounterbuttonComponent,
    CustomcounterComponent,
    BlogComponent,
    CounterComponent,
    MenuheaderComponent,
    AddblogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot(Appstate),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: false,
      logOnly: !isDevMode(),
    }),
    EffectsModule.forRoot([BlogEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
