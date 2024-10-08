import { RadioInput } from '@/app/system-design/atoms/radio-input/radio-input.interface';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { SocketsService } from '../../services/sockets.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'classroom-new-player',
    templateUrl: './new-player.component.html',
    styleUrl: './new-player.component.scss',
    animations: [
        trigger('modal', [
            transition(':enter', [
                style({
                    transform: 'translateY(8px) translateX(0px)',
                    opacity: 0,
                }),
                animate('300ms ease-out', style({
                    transform: 'translateY(0)',
                    opacity: 1,
                }))
            ]),

            transition(':leave', [
                animate('300ms ease', style({
                    transform: 'translateX(64px)',
                    opacity: 0,
                }))
            ])
        ]),
    ]
})
export class NewPlayerComponent {
    isFormSubmited = false

    constructor(private socketsService: SocketsService, private userService: UserService) { }

    get players() {

        return this.socketsService.players
    }


    public TypeOfPlayers: RadioInput[] = [
        {
            label: "Jugador",
            value: "player"
        },
        {
            label: "Espectador",
            value: "viewer"
        },
    ]

    public form = new FormGroup({
        username: new FormControl("Jugador", [Validators.required, Validators.minLength(5), Validators.maxLength(20), customNameValidator()]),
        type: new FormControl(this.TypeOfPlayers[0].value)
    })


    getError(field: keyof FormModel): string | null {

        const control = this.form.controls[field];

        if ((control.touched || this.isFormSubmited) && control.errors) {
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


    onSubmit() {
        this.isFormSubmited = true
        if (this.form.invalid) return;

        const username = this.form.get('username')?.value ?? "";
        const type = this.form.get('type')?.value ?? "player";

        this.userService.updateUsernameAndType({ username, type: type as "viewer" | "player" })

        this.socketsService.joinClassroom({ username, type })

    }
}

interface FormModel {
    username: FormControl<string>;
    type: FormControl<"viewer" | "player">
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
