import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './components/intro/intro.component';
import { MembersComponent } from './components/members/members.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { MainRoutingModule } from "./main-routing.module";

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [IntroComponent, MembersComponent, FooterComponent, IndexComponent]
})
export class MainModule { }
