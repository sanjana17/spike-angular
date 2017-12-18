import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatTabsModule,
  MatButtonModule,
  MatListModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatStepperModule
} from '@angular/material';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { NavigationComponent } from './navigation/navigation.component';
import { PiechartComponent } from './piechart/piechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { RecipesComponent } from './recipes/recipes.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NavbarComponent} from "./navbar/navbar.component";
import { BloombergComponent } from './bloomberg/bloomberg.component'
const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'recipes', component: RecipesComponent },
  {path: 'recipes/:id', component: BloombergComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    PiechartComponent,
    BarchartComponent,
    RecipesComponent,
    SidebarComponent,
    NavbarComponent,
    BloombergComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes)
    ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
