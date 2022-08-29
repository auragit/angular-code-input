import { NgModule } from '@angular/core';
import { CodeInputComponent } from './code-input.component';
import { CommonModule } from '@angular/common';
import { CodeInputComponentConfigToken } from './code-input.component.config';
import * as i0 from "@angular/core";
export class CodeInputModule {
    static forRoot(config) {
        return {
            ngModule: CodeInputModule,
            providers: [
                { provide: CodeInputComponentConfigToken, useValue: config }
            ]
        };
    }
}
/** @nocollapse */ CodeInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.1", ngImport: i0, type: CodeInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
/** @nocollapse */ CodeInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.1.1", ngImport: i0, type: CodeInputModule, declarations: [CodeInputComponent], imports: [CommonModule], exports: [CodeInputComponent] });
/** @nocollapse */ CodeInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.1.1", ngImport: i0, type: CodeInputModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.1", ngImport: i0, type: CodeInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        CodeInputComponent
                    ],
                    exports: [
                        CodeInputComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1pbnB1dC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9hbmd1bGFyLWNvZGUtaW5wdXQvc3JjL2xpYi9jb2RlLWlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUEyQiw2QkFBNkIsRUFBQyxNQUFNLCtCQUErQixDQUFDOztBQWF0RyxNQUFNLE9BQU8sZUFBZTtJQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQWdDO1FBQzdDLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTthQUM1RDtTQUNGLENBQUM7SUFDSixDQUFDOzsrSEFSVSxlQUFlO2dJQUFmLGVBQWUsaUJBTnhCLGtCQUFrQixhQUhsQixZQUFZLGFBTVosa0JBQWtCO2dJQUdULGVBQWUsWUFUeEIsWUFBWTsyRkFTSCxlQUFlO2tCQVgzQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDWixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7cUJBQ25CO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvZGVJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29kZS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0NvZGVJbnB1dENvbXBvbmVudENvbmZpZywgQ29kZUlucHV0Q29tcG9uZW50Q29uZmlnVG9rZW59IGZyb20gJy4vY29kZS1pbnB1dC5jb21wb25lbnQuY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb2RlSW5wdXRDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvZGVJbnB1dENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvZGVJbnB1dE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogQ29kZUlucHV0Q29tcG9uZW50Q29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDb2RlSW5wdXRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvZGVJbnB1dE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogQ29kZUlucHV0Q29tcG9uZW50Q29uZmlnVG9rZW4sIHVzZVZhbHVlOiBjb25maWcgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==