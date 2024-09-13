import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/shared/modules/material.module";
import { LoaderComponent } from "../components/preloader/loader.component";
import { BuilderUiComponent } from "../../modules/resume-builder/components/builder-ui/builder-ui.component";
import { TemplateSkComponent } from "../resume-templates/template-sk/template-sk.component";
// import { PreviewUiComponent } from "../../modules/resume-builder/components/preview-ui/preview-ui.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TemplateBrightComponent } from "../resume-templates/template-bright/template-bright.component";
import { TemplateKingdomComponent } from "../resume-templates/template-kingdom/template-kingdom.component";
import { TemplateObjectionComponent } from "../resume-templates/template-objection/template-objection.component";
import { TemplateScallerComponent } from "../resume-templates/template-scaller/template-scaller.component";
import { TemplatePincodeComponent } from "../resume-templates/template-pincode/template-pincode.component";
import { TemplateSunshineComponent } from "../resume-templates/template-sunshine/template-sunshine.component";
import { CustomEditorComponent } from "../components/custom-editor/custom-editor.component";
 
@NgModule({
  declarations: [
    TemplateSkComponent,
    LoaderComponent,
    TemplateBrightComponent,
    TemplateKingdomComponent,
    TemplateObjectionComponent,
    TemplateScallerComponent,
    TemplatePincodeComponent,
    TemplateSunshineComponent,
    CustomEditorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  exports: [
    CustomEditorComponent,
    TemplateSkComponent,
    TemplateBrightComponent,
    LoaderComponent,
    TemplateKingdomComponent,
    TemplateObjectionComponent,
    TemplateScallerComponent,
    TemplatePincodeComponent,
    TemplateSunshineComponent
  ],
})
export class SharedModule {}
