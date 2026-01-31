import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Card } from 'primeng/card';
import { JsonPipe } from '@angular/common';
import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { Select } from 'primeng/select';
import { ToggleButton } from 'primeng/togglebutton';

interface IAudio {
    id: number;
    name: string;
}

@Component({
    selector: 'app-home',
    imports: [FormsModule, Card, JsonPipe, Highlight, HighlightLineNumbers, Select, ReactiveFormsModule, ToggleButton],
    templateUrl: './home.html',
    styleUrl: './home.scss'
})
export class Home {
    audioCardAvaliables: IAudio[] = [
        {
            id: 1,
            name: 'Realtek Audio'
        },
        {
            id: 2,
            name: 'Realtek Digital Output'
        }
    ];

    form: FormGroup;

    constructor() {
        this.form = new FormGroup({
            audioInput: new FormControl<IAudio | null>(null, []),
            audioOutput: new FormControl<IAudio | null>(null, []),
            enabled: new FormControl<boolean>(false, [])
        });
    }
}
