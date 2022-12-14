import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { IndexLayoutComponent } from './layout/index-layout/index-layout.component';
import { AboutComponent } from './core/about/about.component';
import { ServiceComponent } from './core/service/service.component';
import { CertificateComponent } from './core/certificate/certificate.component';
import { ContactComponent } from './core/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: IndexLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {path: 'about', component: AboutComponent},
      {path: 'service', component: ServiceComponent},
      {path: 'certificate', component: CertificateComponent},
      {path: 'contact', component: ContactComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
