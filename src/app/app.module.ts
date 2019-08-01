import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { FormsModule } from '@angular/forms';
import { MyHttpInterceptor } from './interceptors/my-http-interceptor';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [
        AuthGuard,
        { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
