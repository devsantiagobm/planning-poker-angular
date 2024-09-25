import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { NewClassroomService } from './services/new.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'classroom-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss'],
    animations: [
        trigger('animateLogo', [
            transition(':enter', [
                style({
                    transform: 'translateY(8px) translateX(0px)',
                    opacity: 0,
                }),
                animate('500ms ease-out', style({
                    transform: 'translateY(0)',
                    opacity: 1,
                }))
            ]),

            transition(':leave', [
                animate('750ms ease', style({
                    transform: 'translateX(64px)',
                    opacity: 0,
                }))
            ])
        ]),

        trigger("content", [
            transition(":enter", [
                style({
                    opacity: 0,
                    transform: "translateY(8px)"
                }),
                animate("300ms 400ms ease", style({
                    opacity: 1,
                    transform: "translateY(0px)"
                }))
            ])
        ]),

        trigger("error-message", [
            transition(":enter", [
                style({
                    opacity: 0,
                    height: 0,
                }),
                animate("250ms ease", style({
                    opacity: 1,
                    height: 19,
                }))
            ]),
            transition(":leave", [
                animate("200ms ease", style({
                    opacity: 0,
                    height: 0
                }))
            ]),
        ])
    ]
})

export class NewClassroomComponent implements OnInit {
    isLoadingPage = true;
    formSubmitted = false;
    isLoadingRequest = false;
    errorInRequest: string | null = null;

    constructor(private newClassroomService: NewClassroomService, private router: Router) { }

    public form = new FormGroup<FormModel>({
        name: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20), customNameValidator()])
    });


    getError(field: keyof FormModel): string | null {

        const control = this.form.controls[field];


        if ((control.touched || this.formSubmitted) && control.errors) {
            if (control.errors['required']) {
                return 'Este campo es requerido';
            } else if (control.errors['minlength']) {
                return `Mínimo ${control.errors?.["minlength"]?.["requiredLength"]} caracteres`;
            } else if (control.errors["maxlength"]) {
                return `Máximo ${control.errors?.["maxlength"]?.["requiredLength"]} caracteres`;
            } else if (control.errors['custom']) {
                return control.errors['custom'];
            }
        }

        return null;
    }

    ngOnInit() {
        setTimeout(() => {
            this.isLoadingPage = false;
        }, 1500);
    }

    onSubmit() {
        this.formSubmitted = true;

        if (this.form.invalid) return;

        this.isLoadingRequest = true;
        this.errorInRequest = null;

        this.newClassroomService.newClassroom({ name: this.form.controls.name.value as string })
            .subscribe({
                next: (value) => {
                    this.isLoadingRequest = false;
                    this.errorInRequest = null;

                    this.router.navigate([`/classroom/${value.classRoomId}`])


                },
                error: (err: HttpErrorResponse) => {
                    this.isLoadingRequest = false;
                    this.errorInRequest = `Error del servidor: ${err.status} - ${err.message}`;
                }
            });
    }



}


interface FormModel {
    name: FormControl<string | null>;
}


function customNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value as string;

        if (!value) return null;

        if (value !== value.trimEnd()) {
            return { custom: 'Sin espacios al final' };
        }

        if (value !== value.trimStart()) {
            return { custom: 'Sin espacios al inicio' };
        }

        const validCharsRegex = /^[a-z1-9A-ZáéíóúÁÉÍÓÚ\s]*$/;

        if (!validCharsRegex.test(value)) {
            return { custom: 'Sin carácteres especiales' };
        }

        const digits = value.replace(/[^0-9]/g, '');
        if (digits.length > 3) {
            return { custom: 'Máximo 3 números' };
        }

        const isOnlyNumbers = /^\d+$/.test(value);
        if (isOnlyNumbers) {
            return { custom: 'El nombre no puede ser solo números.' };
        }

        return null;
    };
}
