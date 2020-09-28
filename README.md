# IgniteGrid

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Steps to use 

### 1. You can simply copy grid partial folder into your application.
### 2. Update package.json with "igniteui-angular": "10.1.6". You may need to use different version according to your angular version compatibility.
### 3. Update App.module with components in declarations:  "GridPartialComponent", "PasteHandler" and add module in imports: IgxGridModule
```
@NgModule({
  declarations: [
    AppComponent,
    GridPartialComponent,
    PasteHandler
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
````
### 4. Run command: npm install
### 5. Just add following HTML in your component which is reusable:
```
<app-grid-partial [inputGridList]="gridList"[inputGridColumns]="gridColumns" 
*ngIf="gridList?.length>0 && gridColumns?.length>0" [allowFilter]="true" [allowPaging]="true" [allowPasting]="true"  >
</app-grid-partial>
  ````
### 6. Just run your application and you can edit the grid values and also copy from excel and paste in this grid and vice versa.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
