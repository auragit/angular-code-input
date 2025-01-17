import { AfterViewChecked, AfterViewInit, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { CodeInputComponentConfig } from './code-input.component.config';
import * as i0 from "@angular/core";
export declare class CodeInputComponent implements AfterViewInit, OnInit, OnChanges, OnDestroy, AfterViewChecked, CodeInputComponentConfig {
    inputsList: QueryList<ElementRef>;
    codeLength: number;
    inputType: string;
    inputMode: string;
    initialFocusField?: number;
    /** @deprecated Use isCharsCode prop instead. */
    isNonDigitsCode: boolean;
    isCharsCode: boolean;
    isCodeHidden: boolean;
    isPrevFocusableAfterClearing: boolean;
    isFocusingOnLastByClickIfFilled: boolean;
    code?: string | number;
    disabled: boolean;
    autocapitalize?: string;
    readonly codeChanged: EventEmitter<string>;
    readonly codeCompleted: EventEmitter<string>;
    placeholders: number[];
    private inputs;
    private inputsStates;
    private inputsListSubscription;
    private _codeLength;
    private state;
    constructor(config?: CodeInputComponentConfig);
    /**
     * Life cycle
     */
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    /**
     * Methods
     */
    reset(isChangesEmitting?: boolean): void;
    focusOnField(index: number): void;
    onClick(e: any): void;
    onInput(e: any, i: number): void;
    onPaste(e: ClipboardEvent, i: number): void;
    onKeydown(e: any, i: number): Promise<void>;
    private onInputCodeChanges;
    private onCodeLengthChanges;
    private onInputsListChanges;
    private focusOnInputAfterAppearing;
    private emitChanges;
    private emitCode;
    private getCurrentFilledCode;
    private isBackspaceKey;
    private isDeleteKey;
    private setInputValue;
    private canInputValue;
    private setStateForInput;
    private getStateForInput;
    private isEmpty;
    static ɵfac: i0.ɵɵFactoryDeclaration<CodeInputComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CodeInputComponent, "code-input", never, { "codeLength": "codeLength"; "inputType": "inputType"; "inputMode": "inputMode"; "initialFocusField": "initialFocusField"; "isNonDigitsCode": "isNonDigitsCode"; "isCharsCode": "isCharsCode"; "isCodeHidden": "isCodeHidden"; "isPrevFocusableAfterClearing": "isPrevFocusableAfterClearing"; "isFocusingOnLastByClickIfFilled": "isFocusingOnLastByClickIfFilled"; "code": "code"; "disabled": "disabled"; "autocapitalize": "autocapitalize"; }, { "codeChanged": "codeChanged"; "codeCompleted": "codeCompleted"; }, never, never, false>;
}
