import { NgModule, Component } from "@angular/core";

@Component({
    selector: 'lib-cmp',
    template: `
    lib component
  `
})
export class LibComponent { }

@NgModule({
    declarations: [LibComponent],
    exports: [LibComponent]
})
export class LibModule {}