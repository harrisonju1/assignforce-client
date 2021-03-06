import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpringXsrfInterceptor } from './interceptors/springXsrfInterceptor';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { OverviewComponent } from './components/overview/overview.component';
import { BatchesComponent } from './components/batches/batches.component';
import {
  // LocationAddBuildingDialogComponent,
  LocationAddLocationDialogComponent,
  LocationAddRoomDialogComponent,
  LocationDeleteBuildingDialogComponent,
  LocationDeleteLocationDialogComponent,
  LocationDeleteRoomDialogComponent,
  LocationEditBuildingDialogComponent,
  LocationEditLocationDialogComponent,
  LocationEditRoomDialogComponent,
  LocationsComponent
} from './components/locations/locations.component';
import { LocationAddDialogComponent } from './components/locations/add-dialog/location-add-dialog.component';
import { CurriculaComponent } from './components/curricula/curricula.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AppRouting } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrainerService } from './services/trainer/trainer.service';
import { SkillService } from './services/skill/skill.service';
import { S3CredentialService } from './services/s3-credential/s3-credential.service';
import { UrlService } from './services/url/url.service';

import { SkillsComponent } from './components/skills/skills.component';
import { FociComponent } from './components/foci/foci.component';
import { CoreComponent } from './components/core/core.component';
import { AddFocusComponent } from './components/add-focus/add-focus.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { EditFocusComponent } from './components/edit-focus/edit-focus.component';
import { EditSkillComponent } from './components/edit-skill/edit-skill.component';

import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AppMaterialModule } from './material.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDbService } from './mockdb/in-mem-db.service';

import { TrainersAddComponent } from './components/trainers/trainers-add/trainers-add.component';
import { TrainerItemComponent } from './components/trainers/trainer-item/trainer-item.component';
import { CurriculaService } from './services/curricula/curricula.service';

import { BatchControllerService } from './services/api/batch-controller/batch-controller.service';
import { AddressControllerService } from './services/api/address-controller/address-controller.service';
import { BuildingControllerService } from './services/api/building-controller/building-controller.service';
import { LocationControllerService } from './services/api/location-controller/location-controller.service';
import { CurriculumControllerService } from './services/api/curriculum-controller/curriculum-controller.service';
import { SettingControllerService } from './services/api/setting-controller/setting-controller.service';
import { SkillControllerService } from './services/api/skill-controller/skill-controller.service';
import { TrainerControllerService } from './services/api/trainer-controller/trainer-controller.service';
import { UnavailableControllerService } from './services/api/unavailable-controller/unavailable-controller.service';
import { AuthService } from './services/auth/auth.service';
import { AuthenticatingComponent } from './components/authenticating/authenticating.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import { SecurityContext } from './services/auth/security-context.service';
import { CurriculumSkillsComponent } from './components/curriculum-skills/curriculum-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    OverviewComponent,
    BatchesComponent,
    LocationsComponent,
    CurriculaComponent,
    TrainersComponent,
    ProfileComponent,
    ReportsComponent,
    SettingsComponent,
    LocationAddLocationDialogComponent,
    LocationDeleteLocationDialogComponent,
    LocationEditLocationDialogComponent,
    LocationAddDialogComponent, // LocationAddBuildingDialogComponent,
    LocationDeleteBuildingDialogComponent,
    LocationEditBuildingDialogComponent,
    LocationAddRoomDialogComponent,
    LocationDeleteRoomDialogComponent,
    LocationEditRoomDialogComponent,
    LoginComponent,
    SkillsComponent,
    FociComponent,
    CoreComponent,
    AddFocusComponent,
    AddSkillComponent,
    EditFocusComponent,
    EditSkillComponent,
    TrainersAddComponent,
    TrainerItemComponent,
    AuthenticatingComponent,
    TrainerItemComponent,
    SkillsComponent,
    CertificationsComponent,
    CurriculumSkillsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    AppMaterialModule,
    InMemoryWebApiModule.forRoot(InMemDbService)
  ],

  exports: [AppMaterialModule],

  providers: [
    TrainerService,
    SkillService,
    S3CredentialService,
    HttpClient,
    UrlService,
    BatchControllerService,
    AddressControllerService,
    BuildingControllerService,
    LocationControllerService,
    CurriculumControllerService,
    SettingControllerService,
    SkillControllerService,
    TrainerControllerService,
    UnavailableControllerService,
    AuthService,
    SecurityContext,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpringXsrfInterceptor,
      multi: true
    },
    CurriculaService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LocationAddLocationDialogComponent,
    LocationDeleteLocationDialogComponent,
    LocationEditLocationDialogComponent,
    LocationAddDialogComponent, // LocationAddBuildingDialogComponent,
    LocationDeleteBuildingDialogComponent,
    LocationEditBuildingDialogComponent,
    LocationAddRoomDialogComponent,
    LocationDeleteRoomDialogComponent,
    LocationEditRoomDialogComponent,
    AddFocusComponent,
    EditFocusComponent,
    AddSkillComponent,
    EditSkillComponent,
    TrainersAddComponent
  ]
})
export class AppModule {}
