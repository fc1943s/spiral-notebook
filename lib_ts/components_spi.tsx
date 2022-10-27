import { Union, Record } from "./fable_modules/fable-library-ts/Types.js";
import { lambda_type, unit_type, bool_type, class_type, array_type, tuple_type, string_type, union_type, int32_type, record_type, obj_type, TypeInfo } from "./fable_modules/fable-library-ts/Reflection.js";
import { op_UnaryNegation_Int32, int32 } from "./fable_modules/fable-library-ts/Int32.js";
import { createStoreon } from "storeon";
import { int64, fromBits, op_Division, op_Subtraction, toString } from "./fable_modules/fable-library-ts/Long.js";
import { getTicks, utcNow } from "./fable_modules/fable-library-ts/Date.js";
import { Index, For, createEffect, on, createSignal, createComponent, onCleanup } from "solid-js";
import { fill } from "./fable_modules/fable-library-ts/Array.js";
import { hope, Input, useColorMode, RadioGroup, Radio, Anchor, Tr, Td, Stack, IconButton, Icon, Button, Checkbox, Box, Table, Tbody } from "@hope-ui/solid";
import { int32ToString, uncurry, createObj } from "./fable_modules/fable-library-ts/Util.js";
import { BiRegularMinus, BiRegularPlus, BiRegularLinkExternal, BiRegularUndo, BiRegularUpArrow, BiRegularDownArrow, BiRegularRefresh } from "solid-icons/bi";
import { useStoreon } from "@storeon/solidjs";
import { nonSeeded } from "./fable_modules/fable-library-ts/Random.js";

export class Mut0 extends Record {
    l0: any;
    constructor(l0: any) {
        super();
        this.l0 = l0;
    }
}

export function Mut0$reflection(): TypeInfo {
    return record_type("Components_spi.Mut0", [], Mut0, () => [["l0", obj_type]]);
}

export const enum US0_Tag {
    US0_0 = 0,
    US0_1 = 1
}

export type US0_Fields = [[], [int32]];

export type US0 = US0_Cons<US0_Tag.US0_0> | US0_Cons<US0_Tag.US0_1>;

export function US0_US0_0() {
    return new US0_Cons<US0_Tag.US0_0>(US0_Tag.US0_0, []);
}

export function US0_US0_1(f1_0: int32) {
    return new US0_Cons<US0_Tag.US0_1>(US0_Tag.US0_1, [f1_0]);
}

export class US0_Cons<Tag extends keyof US0_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US0_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US0_0", "US0_1"];
    }
}

export function US0$reflection(): TypeInfo {
    return union_type("Components_spi.US0", [], US0_Cons, () => [[], [["f1_0", int32_type]]]);
}

export const enum US1_Tag {
    US1_0 = 0,
    US1_1 = 1
}

export type US1_Fields = [[], [string]];

export type US1 = US1_Cons<US1_Tag.US1_0> | US1_Cons<US1_Tag.US1_1>;

export function US1_US1_0() {
    return new US1_Cons<US1_Tag.US1_0>(US1_Tag.US1_0, []);
}

export function US1_US1_1(f1_0: string) {
    return new US1_Cons<US1_Tag.US1_1>(US1_Tag.US1_1, [f1_0]);
}

export class US1_Cons<Tag extends keyof US1_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US1_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US1_0", "US1_1"];
    }
}

export function US1$reflection(): TypeInfo {
    return union_type("Components_spi.US1", [], US1_Cons, () => [[], [["f1_0", string_type]]]);
}

export const enum US2_Tag {
    US2_0 = 0,
    US2_1 = 1
}

export type US2_Fields = [[], []];

export type US2 = US2_Cons<US2_Tag.US2_0> | US2_Cons<US2_Tag.US2_1>;

export function US2_US2_0() {
    return new US2_Cons<US2_Tag.US2_0>(US2_Tag.US2_0, []);
}

export function US2_US2_1() {
    return new US2_Cons<US2_Tag.US2_1>(US2_Tag.US2_1, []);
}

export class US2_Cons<Tag extends keyof US2_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US2_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US2_0", "US2_1"];
    }
}

export function US2$reflection(): TypeInfo {
    return union_type("Components_spi.US2", [], US2_Cons, () => [[], []]);
}

export class Mut1 extends Record {
    l0: [string, string, string, string][];
    l1: US0;
    l2: US1;
    l3: US1;
    l4: [US2, int32, string, string][];
    l5: [US2, US2][];
    l6: [int32, any][];
    l7: [int32, any][];
    l8: [int32, int32][];
    l9: US0;
    constructor(l0: [string, string, string, string][], l1: US0, l2: US1, l3: US1, l4: [US2, int32, string, string][], l5: [US2, US2][], l6: [int32, any][], l7: [int32, any][], l8: [int32, int32][], l9: US0) {
        super();
        this.l0 = l0;
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
        this.l4 = l4;
        this.l5 = l5;
        this.l6 = l6;
        this.l7 = l7;
        this.l8 = l8;
        this.l9 = l9;
    }
}

export function Mut1$reflection(): TypeInfo {
    return record_type("Components_spi.Mut1", [], Mut1, () => [["l0", array_type(tuple_type(string_type, string_type, string_type, string_type))], ["l1", US0$reflection()], ["l2", US1$reflection()], ["l3", US1$reflection()], ["l4", array_type(tuple_type(US2$reflection(), int32_type, string_type, string_type))], ["l5", array_type(tuple_type(US2$reflection(), US2$reflection()))], ["l6", array_type(tuple_type(int32_type, obj_type))], ["l7", array_type(tuple_type(int32_type, obj_type))], ["l8", array_type(tuple_type(int32_type, int32_type))], ["l9", US0$reflection()]]);
}

export const enum US3_Tag {
    US3_0 = 0,
    US3_1 = 1
}

export type US3_Fields = [[], [any]];

export type US3 = US3_Cons<US3_Tag.US3_0> | US3_Cons<US3_Tag.US3_1>;

export function US3_US3_0() {
    return new US3_Cons<US3_Tag.US3_0>(US3_Tag.US3_0, []);
}

export function US3_US3_1(f1_0: any) {
    return new US3_Cons<US3_Tag.US3_1>(US3_Tag.US3_1, [f1_0]);
}

export class US3_Cons<Tag extends keyof US3_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US3_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US3_0", "US3_1"];
    }
}

export function US3$reflection(): TypeInfo {
    return union_type("Components_spi.US3", [], US3_Cons, () => [[], [["f1_0", class_type("Fable.Core.JS.Function")]]]);
}

export const enum US4_Tag {
    US4_0 = 0,
    US4_1 = 1
}

export type US4_Fields = [[], [boolean]];

export type US4 = US4_Cons<US4_Tag.US4_0> | US4_Cons<US4_Tag.US4_1>;

export function US4_US4_0() {
    return new US4_Cons<US4_Tag.US4_0>(US4_Tag.US4_0, []);
}

export function US4_US4_1(f1_0: boolean) {
    return new US4_Cons<US4_Tag.US4_1>(US4_Tag.US4_1, [f1_0]);
}

export class US4_Cons<Tag extends keyof US4_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US4_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US4_0", "US4_1"];
    }
}

export function US4$reflection(): TypeInfo {
    return union_type("Components_spi.US4", [], US4_Cons, () => [[], [["f1_0", bool_type]]]);
}

export const enum US5_Tag {
    US5_0 = 0,
    US5_1 = 1
}

export type US5_Fields = [[], [() => any[]]];

export type US5 = US5_Cons<US5_Tag.US5_0> | US5_Cons<US5_Tag.US5_1>;

export function US5_US5_0() {
    return new US5_Cons<US5_Tag.US5_0>(US5_Tag.US5_0, []);
}

export function US5_US5_1(f1_0: () => any[]) {
    return new US5_Cons<US5_Tag.US5_1>(US5_Tag.US5_1, [f1_0]);
}

export class US5_Cons<Tag extends keyof US5_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US5_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US5_0", "US5_1"];
    }
}

export function US5$reflection(): TypeInfo {
    return union_type("Components_spi.US5", [], US5_Cons, () => [[], [["f1_0", lambda_type(unit_type, array_type(class_type("Fable.Core.JSX.Element")))]]]);
}

export const enum US6_Tag {
    US6_0 = 0,
    US6_1 = 1
}

export type US6_Fields = [[], [any]];

export type US6 = US6_Cons<US6_Tag.US6_0> | US6_Cons<US6_Tag.US6_1>;

export function US6_US6_0() {
    return new US6_Cons<US6_Tag.US6_0>(US6_Tag.US6_0, []);
}

export function US6_US6_1(f1_0: any) {
    return new US6_Cons<US6_Tag.US6_1>(US6_Tag.US6_1, [f1_0]);
}

export class US6_Cons<Tag extends keyof US6_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US6_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US6_0", "US6_1"];
    }
}

export function US6$reflection(): TypeInfo {
    return union_type("Components_spi.US6", [], US6_Cons, () => [[], [["f1_0", obj_type]]]);
}

export const enum US7_Tag {
    US7_0 = 0,
    US7_1 = 1
}

export type US7_Fields = [[], [any[]]];

export type US7 = US7_Cons<US7_Tag.US7_0> | US7_Cons<US7_Tag.US7_1>;

export function US7_US7_0() {
    return new US7_Cons<US7_Tag.US7_0>(US7_Tag.US7_0, []);
}

export function US7_US7_1(f1_0: any[]) {
    return new US7_Cons<US7_Tag.US7_1>(US7_Tag.US7_1, [f1_0]);
}

export class US7_Cons<Tag extends keyof US7_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US7_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US7_0", "US7_1"];
    }
}

export function US7$reflection(): TypeInfo {
    return union_type("Components_spi.US7", [], US7_Cons, () => [[], [["f1_0", array_type(obj_type)]]]);
}

export const enum US8_Tag {
    US8_0 = 0,
    US8_1 = 1
}

export type US8_Fields = [[], [any]];

export type US8 = US8_Cons<US8_Tag.US8_0> | US8_Cons<US8_Tag.US8_1>;

export function US8_US8_0() {
    return new US8_Cons<US8_Tag.US8_0>(US8_Tag.US8_0, []);
}

export function US8_US8_1(f1_0: any) {
    return new US8_Cons<US8_Tag.US8_1>(US8_Tag.US8_1, [f1_0]);
}

export class US8_Cons<Tag extends keyof US8_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US8_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US8_0", "US8_1"];
    }
}

export function US8$reflection(): TypeInfo {
    return union_type("Components_spi.US8", [], US8_Cons, () => [[], [["f1_0", class_type("Fable.Core.JSX.Element")]]]);
}

export const enum US9_Tag {
    US9_0 = 0,
    US9_1 = 1
}

export type US9_Fields = [[], [(arg0: any) => void]];

export type US9 = US9_Cons<US9_Tag.US9_0> | US9_Cons<US9_Tag.US9_1>;

export function US9_US9_0() {
    return new US9_Cons<US9_Tag.US9_0>(US9_Tag.US9_0, []);
}

export function US9_US9_1(f1_0: (arg0: any) => void) {
    return new US9_Cons<US9_Tag.US9_1>(US9_Tag.US9_1, [f1_0]);
}

export class US9_Cons<Tag extends keyof US9_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US9_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US9_0", "US9_1"];
    }
}

export function US9$reflection(): TypeInfo {
    return union_type("Components_spi.US9", [], US9_Cons, () => [[], [["f1_0", lambda_type(obj_type, unit_type)]]]);
}

export const enum US10_Tag {
    US10_0 = 0,
    US10_1 = 1
}

export type US10_Fields = [[], [() => void]];

export type US10 = US10_Cons<US10_Tag.US10_0> | US10_Cons<US10_Tag.US10_1>;

export function US10_US10_0() {
    return new US10_Cons<US10_Tag.US10_0>(US10_Tag.US10_0, []);
}

export function US10_US10_1(f1_0: () => void) {
    return new US10_Cons<US10_Tag.US10_1>(US10_Tag.US10_1, [f1_0]);
}

export class US10_Cons<Tag extends keyof US10_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US10_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US10_0", "US10_1"];
    }
}

export function US10$reflection(): TypeInfo {
    return union_type("Components_spi.US10", [], US10_Cons, () => [[], [["f1_0", lambda_type(unit_type, unit_type)]]]);
}

export class Mut2 extends Record {
    l0: US1;
    l1: US1;
    l2: US3;
    l3: US1;
    l4: US1;
    l5: US1;
    l6: US1;
    l7: US1;
    l8: US1;
    l9: US4;
    l10: US5;
    l11: US1;
    l12: US1;
    l13: US4;
    l14: US6;
    l15: US1;
    l16: US1;
    l17: US1;
    l18: US7;
    l19: US4;
    l20: US1;
    l21: US1;
    l22: US1;
    l23: US1;
    l24: US1;
    l25: US8;
    l26: US1;
    l27: US1;
    l28: US1;
    l29: US8;
    l30: US1;
    l31: US1;
    l32: US1;
    l33: US1;
    l34: US1;
    l35: US1;
    l36: US1;
    l37: US1;
    l38: US9;
    l39: US10;
    l40: US9;
    l41: US1;
    l42: US1;
    l43: US1;
    l44: US1;
    l45: US1;
    l46: US1;
    l47: US1;
    l48: US1;
    l49: US1;
    l50: US1;
    l51: US1;
    l52: US1;
    l53: US1;
    l54: US1;
    l55: US1;
    l56: US8;
    l57: US1;
    l58: US1;
    l59: US6;
    l60: US1;
    l61: US0;
    l62: US1;
    constructor(l0: US1, l1: US1, l2: US3, l3: US1, l4: US1, l5: US1, l6: US1, l7: US1, l8: US1, l9: US4, l10: US5, l11: US1, l12: US1, l13: US4, l14: US6, l15: US1, l16: US1, l17: US1, l18: US7, l19: US4, l20: US1, l21: US1, l22: US1, l23: US1, l24: US1, l25: US8, l26: US1, l27: US1, l28: US1, l29: US8, l30: US1, l31: US1, l32: US1, l33: US1, l34: US1, l35: US1, l36: US1, l37: US1, l38: US9, l39: US10, l40: US9, l41: US1, l42: US1, l43: US1, l44: US1, l45: US1, l46: US1, l47: US1, l48: US1, l49: US1, l50: US1, l51: US1, l52: US1, l53: US1, l54: US1, l55: US1, l56: US8, l57: US1, l58: US1, l59: US6, l60: US1, l61: US0, l62: US1) {
        super();
        this.l0 = l0;
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
        this.l4 = l4;
        this.l5 = l5;
        this.l6 = l6;
        this.l7 = l7;
        this.l8 = l8;
        this.l9 = l9;
        this.l10 = l10;
        this.l11 = l11;
        this.l12 = l12;
        this.l13 = l13;
        this.l14 = l14;
        this.l15 = l15;
        this.l16 = l16;
        this.l17 = l17;
        this.l18 = l18;
        this.l19 = l19;
        this.l20 = l20;
        this.l21 = l21;
        this.l22 = l22;
        this.l23 = l23;
        this.l24 = l24;
        this.l25 = l25;
        this.l26 = l26;
        this.l27 = l27;
        this.l28 = l28;
        this.l29 = l29;
        this.l30 = l30;
        this.l31 = l31;
        this.l32 = l32;
        this.l33 = l33;
        this.l34 = l34;
        this.l35 = l35;
        this.l36 = l36;
        this.l37 = l37;
        this.l38 = l38;
        this.l39 = l39;
        this.l40 = l40;
        this.l41 = l41;
        this.l42 = l42;
        this.l43 = l43;
        this.l44 = l44;
        this.l45 = l45;
        this.l46 = l46;
        this.l47 = l47;
        this.l48 = l48;
        this.l49 = l49;
        this.l50 = l50;
        this.l51 = l51;
        this.l52 = l52;
        this.l53 = l53;
        this.l54 = l54;
        this.l55 = l55;
        this.l56 = l56;
        this.l57 = l57;
        this.l58 = l58;
        this.l59 = l59;
        this.l60 = l60;
        this.l61 = l61;
        this.l62 = l62;
    }
}

export function Mut2$reflection(): TypeInfo {
    return record_type("Components_spi.Mut2", [], Mut2, () => [["l0", US1$reflection()], ["l1", US1$reflection()], ["l2", US3$reflection()], ["l3", US1$reflection()], ["l4", US1$reflection()], ["l5", US1$reflection()], ["l6", US1$reflection()], ["l7", US1$reflection()], ["l8", US1$reflection()], ["l9", US4$reflection()], ["l10", US5$reflection()], ["l11", US1$reflection()], ["l12", US1$reflection()], ["l13", US4$reflection()], ["l14", US6$reflection()], ["l15", US1$reflection()], ["l16", US1$reflection()], ["l17", US1$reflection()], ["l18", US7$reflection()], ["l19", US4$reflection()], ["l20", US1$reflection()], ["l21", US1$reflection()], ["l22", US1$reflection()], ["l23", US1$reflection()], ["l24", US1$reflection()], ["l25", US8$reflection()], ["l26", US1$reflection()], ["l27", US1$reflection()], ["l28", US1$reflection()], ["l29", US8$reflection()], ["l30", US1$reflection()], ["l31", US1$reflection()], ["l32", US1$reflection()], ["l33", US1$reflection()], ["l34", US1$reflection()], ["l35", US1$reflection()], ["l36", US1$reflection()], ["l37", US1$reflection()], ["l38", US9$reflection()], ["l39", US10$reflection()], ["l40", US9$reflection()], ["l41", US1$reflection()], ["l42", US1$reflection()], ["l43", US1$reflection()], ["l44", US1$reflection()], ["l45", US1$reflection()], ["l46", US1$reflection()], ["l47", US1$reflection()], ["l48", US1$reflection()], ["l49", US1$reflection()], ["l50", US1$reflection()], ["l51", US1$reflection()], ["l52", US1$reflection()], ["l53", US1$reflection()], ["l54", US1$reflection()], ["l55", US1$reflection()], ["l56", US8$reflection()], ["l57", US1$reflection()], ["l58", US1$reflection()], ["l59", US6$reflection()], ["l60", US1$reflection()], ["l61", US0$reflection()], ["l62", US1$reflection()]]);
}

export const enum UH0_Tag {
    UH0_0 = 0,
    UH0_1 = 1
}

export type UH0_Fields = [[[string, any], UH0], []];

export type UH0 = UH0_Cons<UH0_Tag.UH0_0> | UH0_Cons<UH0_Tag.UH0_1>;

export function UH0_UH0_0(Item1: [string, any], Item2: UH0) {
    return new UH0_Cons<UH0_Tag.UH0_0>(UH0_Tag.UH0_0, [Item1, Item2]);
}

export function UH0_UH0_1() {
    return new UH0_Cons<UH0_Tag.UH0_1>(UH0_Tag.UH0_1, []);
}

export class UH0_Cons<Tag extends keyof UH0_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: UH0_Fields[Tag]) {
        super();
    }
    cases() {
        return ["UH0_0", "UH0_1"];
    }
}

export function UH0$reflection(): TypeInfo {
    return union_type("Components_spi.UH0", [], UH0_Cons, () => [[["Item1", tuple_type(string_type, obj_type)], ["Item2", UH0$reflection()]], []]);
}

export const enum US11_Tag {
    US11_0 = 0,
    US11_1 = 1
}

export type US11_Fields = [[], [(arg0: Mut1, arg1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void]];

export type US11 = US11_Cons<US11_Tag.US11_0> | US11_Cons<US11_Tag.US11_1>;

export function US11_US11_0() {
    return new US11_Cons<US11_Tag.US11_0>(US11_Tag.US11_0, []);
}

export function US11_US11_1(f1_0: (arg0: Mut1, arg1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void) {
    return new US11_Cons<US11_Tag.US11_1>(US11_Tag.US11_1, [f1_0]);
}

export class US11_Cons<Tag extends keyof US11_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US11_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US11_0", "US11_1"];
    }
}

export function US11$reflection(): TypeInfo {
    return union_type("Components_spi.US11", [], US11_Cons, () => [[], [["f1_0", lambda_type(Mut1$reflection(), lambda_type(lambda_type(lambda_type(Mut1$reflection(), lambda_type(Mut1$reflection(), unit_type)), unit_type), unit_type))]]]);
}

export const enum US12_Tag {
    US12_0 = 0,
    US12_1 = 1,
    US12_2 = 2
}

export type US12_Fields = [[], [], []];

export type US12 = US12_Cons<US12_Tag.US12_0> | US12_Cons<US12_Tag.US12_1> | US12_Cons<US12_Tag.US12_2>;

export function US12_US12_0() {
    return new US12_Cons<US12_Tag.US12_0>(US12_Tag.US12_0, []);
}

export function US12_US12_1() {
    return new US12_Cons<US12_Tag.US12_1>(US12_Tag.US12_1, []);
}

export function US12_US12_2() {
    return new US12_Cons<US12_Tag.US12_2>(US12_Tag.US12_2, []);
}

export class US12_Cons<Tag extends keyof US12_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US12_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US12_0", "US12_1", "US12_2"];
    }
}

export function US12$reflection(): TypeInfo {
    return union_type("Components_spi.US12", [], US12_Cons, () => [[], [], []]);
}

export class Mut3 extends Record {
    l0: US11;
    l1: Mut2;
    l2: US12;
    constructor(l0: US11, l1: Mut2, l2: US12) {
        super();
        this.l0 = l0;
        this.l1 = l1;
        this.l2 = l2;
    }
}

export function Mut3$reflection(): TypeInfo {
    return record_type("Components_spi.Mut3", [], Mut3, () => [["l0", US11$reflection()], ["l1", Mut2$reflection()], ["l2", US12$reflection()]]);
}

export class Mut4 extends Record {
    l0: boolean;
    l1: boolean;
    l2: US11;
    l3: Mut2;
    constructor(l0: boolean, l1: boolean, l2: US11, l3: Mut2) {
        super();
        this.l0 = l0;
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }
}

export function Mut4$reflection(): TypeInfo {
    return record_type("Components_spi.Mut4", [], Mut4, () => [["l0", bool_type], ["l1", bool_type], ["l2", US11$reflection()], ["l3", Mut2$reflection()]]);
}

export class Mut5 extends Record {
    l0: int32;
    constructor(l0: int32) {
        super();
        this.l0 = (l0 | 0);
    }
}

export function Mut5$reflection(): TypeInfo {
    return record_type("Components_spi.Mut5", [], Mut5, () => [["l0", int32_type]]);
}

export class Mut6 extends Record {
    l0: (arg0: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1]) => [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1];
    l1: () => any;
    l2: (arg0: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1]) => [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1];
    constructor(l0: (arg0: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1]) => [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1], l1: () => any, l2: (arg0: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1]) => [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1]) {
        super();
        this.l0 = l0;
        this.l1 = l1;
        this.l2 = l2;
    }
}

export function Mut6$reflection(): TypeInfo {
    return record_type("Components_spi.Mut6", [], Mut6, () => [["l0", lambda_type(tuple_type(US1$reflection(), US1$reflection(), US3$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US4$reflection(), US5$reflection(), US1$reflection(), US1$reflection(), US4$reflection(), US6$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US7$reflection(), US4$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US8$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US8$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US9$reflection(), US10$reflection(), US9$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US8$reflection(), US1$reflection(), US1$reflection(), US6$reflection(), US1$reflection(), US0$reflection(), US1$reflection()), tuple_type(US1$reflection(), US1$reflection(), US3$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US4$reflection(), US5$reflection(), US1$reflection(), US1$reflection(), US4$reflection(), US6$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US7$reflection(), US4$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US8$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US8$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US9$reflection(), US10$reflection(), US9$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US8$reflection(), US1$reflection(), US1$reflection(), US6$reflection(), US1$reflection(), US0$reflection(), US1$reflection()))], ["l1", lambda_type(unit_type, class_type("Fable.Core.JS.Function"))], ["l2", lambda_type(tuple_type(US1$reflection(), US1$reflection(), US3$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US4$reflection(), US5$reflection(), US1$reflection(), US1$reflection(), US4$reflection(), US6$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US7$reflection(), US4$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US8$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US8$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US9$reflection(), US10$reflection(), US9$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US8$reflection(), US1$reflection(), US1$reflection(), US6$reflection(), US1$reflection(), US0$reflection(), US1$reflection()), tuple_type(US1$reflection(), US1$reflection(), US3$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US4$reflection(), US5$reflection(), US1$reflection(), US1$reflection(), US4$reflection(), US6$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US7$reflection(), US4$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US8$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US8$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US9$reflection(), US10$reflection(), US9$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US1$reflection(), US8$reflection(), US1$reflection(), US1$reflection(), US6$reflection(), US1$reflection(), US0$reflection(), US1$reflection()))]]);
}

export class Mut7 extends Record {
    l0: (arg0: Mut1) => US1;
    l1: (arg0: Mut1, arg1: Mut1, arg2: US1) => void;
    constructor(l0: (arg0: Mut1) => US1, l1: (arg0: Mut1, arg1: Mut1, arg2: US1) => void) {
        super();
        this.l0 = l0;
        this.l1 = l1;
    }
}

export function Mut7$reflection(): TypeInfo {
    return record_type("Components_spi.Mut7", [], Mut7, () => [["l0", lambda_type(Mut1$reflection(), US1$reflection())], ["l1", lambda_type(Mut1$reflection(), lambda_type(Mut1$reflection(), lambda_type(US1$reflection(), unit_type)))]]);
}

export class Mut8 extends Record {
    l0: (arg0: Mut1) => US0;
    l1: (arg0: Mut1, arg1: Mut1, arg2: US0) => void;
    constructor(l0: (arg0: Mut1) => US0, l1: (arg0: Mut1, arg1: Mut1, arg2: US0) => void) {
        super();
        this.l0 = l0;
        this.l1 = l1;
    }
}

export function Mut8$reflection(): TypeInfo {
    return record_type("Components_spi.Mut8", [], Mut8, () => [["l0", lambda_type(Mut1$reflection(), US0$reflection())], ["l1", lambda_type(Mut1$reflection(), lambda_type(Mut1$reflection(), lambda_type(US0$reflection(), unit_type)))]]);
}

export class Mut9 extends Record {
    l0: US2;
    constructor(l0: US2) {
        super();
        this.l0 = l0;
    }
}

export function Mut9$reflection(): TypeInfo {
    return record_type("Components_spi.Mut9", [], Mut9, () => [["l0", US2$reflection()]]);
}

export class Mut10 extends Record {
    l0: US2;
    l1: (arg0: [US2, int32, string, string]) => US1;
    l2: (arg0: [US2, int32, string, string], arg1: US1) => [US2, int32, string, string];
    constructor(l0: US2, l1: (arg0: [US2, int32, string, string]) => US1, l2: (arg0: [US2, int32, string, string], arg1: US1) => [US2, int32, string, string]) {
        super();
        this.l0 = l0;
        this.l1 = l1;
        this.l2 = l2;
    }
}

export function Mut10$reflection(): TypeInfo {
    return record_type("Components_spi.Mut10", [], Mut10, () => [["l0", US2$reflection()], ["l1", lambda_type(tuple_type(US2$reflection(), int32_type, string_type, string_type), US1$reflection())], ["l2", lambda_type(tuple_type(US2$reflection(), int32_type, string_type, string_type), lambda_type(US1$reflection(), tuple_type(US2$reflection(), int32_type, string_type, string_type)))]]);
}

export class Mut11 extends Record {
    l0: int32;
    l1: US1;
    constructor(l0: int32, l1: US1) {
        super();
        this.l0 = (l0 | 0);
        this.l1 = l1;
    }
}

export function Mut11$reflection(): TypeInfo {
    return record_type("Components_spi.Mut11", [], Mut11, () => [["l0", int32_type], ["l1", US1$reflection()]]);
}

export const enum US13_Tag {
    US13_0 = 0,
    US13_1 = 1
}

export type US13_Fields = [[], [US2, int32, string, string]];

export type US13 = US13_Cons<US13_Tag.US13_0> | US13_Cons<US13_Tag.US13_1>;

export function US13_US13_0() {
    return new US13_Cons<US13_Tag.US13_0>(US13_Tag.US13_0, []);
}

export function US13_US13_1(f1_0: US2, f1_1: int32, f1_2: string, f1_3: string) {
    return new US13_Cons<US13_Tag.US13_1>(US13_Tag.US13_1, [f1_0, f1_1, f1_2, f1_3]);
}

export class US13_Cons<Tag extends keyof US13_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US13_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US13_0", "US13_1"];
    }
}

export function US13$reflection(): TypeInfo {
    return union_type("Components_spi.US13", [], US13_Cons, () => [[], [["f1_0", US2$reflection()], ["f1_1", int32_type], ["f1_2", string_type], ["f1_3", string_type]]]);
}

export class Mut12 extends Record {
    l0: int32;
    l1: US13;
    constructor(l0: int32, l1: US13) {
        super();
        this.l0 = (l0 | 0);
        this.l1 = l1;
    }
}

export function Mut12$reflection(): TypeInfo {
    return record_type("Components_spi.Mut12", [], Mut12, () => [["l0", int32_type], ["l1", US13$reflection()]]);
}

export class Mut13 extends Record {
    l0: US2;
    l1: (arg0: [US2, int32, string, string]) => US0;
    l2: (arg0: [US2, int32, string, string], arg1: US0) => [US2, int32, string, string];
    constructor(l0: US2, l1: (arg0: [US2, int32, string, string]) => US0, l2: (arg0: [US2, int32, string, string], arg1: US0) => [US2, int32, string, string]) {
        super();
        this.l0 = l0;
        this.l1 = l1;
        this.l2 = l2;
    }
}

export function Mut13$reflection(): TypeInfo {
    return record_type("Components_spi.Mut13", [], Mut13, () => [["l0", US2$reflection()], ["l1", lambda_type(tuple_type(US2$reflection(), int32_type, string_type, string_type), US0$reflection())], ["l2", lambda_type(tuple_type(US2$reflection(), int32_type, string_type, string_type), lambda_type(US0$reflection(), tuple_type(US2$reflection(), int32_type, string_type, string_type)))]]);
}

export class Mut14 extends Record {
    l0: int32;
    l1: US0;
    constructor(l0: int32, l1: US0) {
        super();
        this.l0 = (l0 | 0);
        this.l1 = l1;
    }
}

export function Mut14$reflection(): TypeInfo {
    return record_type("Components_spi.Mut14", [], Mut14, () => [["l0", int32_type], ["l1", US0$reflection()]]);
}

export const enum UH1_Tag {
    UH1_0 = 0,
    UH1_1 = 1
}

export type UH1_Fields = [[int32, int32, UH1], []];

export type UH1 = UH1_Cons<UH1_Tag.UH1_0> | UH1_Cons<UH1_Tag.UH1_1>;

export function UH1_UH1_0(Item1: int32, Item2: int32, Item3: UH1) {
    return new UH1_Cons<UH1_Tag.UH1_0>(UH1_Tag.UH1_0, [Item1, Item2, Item3]);
}

export function UH1_UH1_1() {
    return new UH1_Cons<UH1_Tag.UH1_1>(UH1_Tag.UH1_1, []);
}

export class UH1_Cons<Tag extends keyof UH1_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: UH1_Fields[Tag]) {
        super();
    }
    cases() {
        return ["UH1_0", "UH1_1"];
    }
}

export function UH1$reflection(): TypeInfo {
    return union_type("Components_spi.UH1", [], UH1_Cons, () => [[["Item1", int32_type], ["Item2", int32_type], ["Item3", UH1$reflection()]], []]);
}

export class Mut15 extends Record {
    l0: int32;
    l1: UH1;
    constructor(l0: int32, l1: UH1) {
        super();
        this.l0 = (l0 | 0);
        this.l1 = l1;
    }
}

export function Mut15$reflection(): TypeInfo {
    return record_type("Components_spi.Mut15", [], Mut15, () => [["l0", int32_type], ["l1", UH1$reflection()]]);
}

export const enum UH2_Tag {
    UH2_0 = 0,
    UH2_1 = 1
}

export type UH2_Fields = [[int32, any, UH2], []];

export type UH2 = UH2_Cons<UH2_Tag.UH2_0> | UH2_Cons<UH2_Tag.UH2_1>;

export function UH2_UH2_0(Item1: int32, Item2: any, Item3: UH2) {
    return new UH2_Cons<UH2_Tag.UH2_0>(UH2_Tag.UH2_0, [Item1, Item2, Item3]);
}

export function UH2_UH2_1() {
    return new UH2_Cons<UH2_Tag.UH2_1>(UH2_Tag.UH2_1, []);
}

export class UH2_Cons<Tag extends keyof UH2_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: UH2_Fields[Tag]) {
        super();
    }
    cases() {
        return ["UH2_0", "UH2_1"];
    }
}

export function UH2$reflection(): TypeInfo {
    return union_type("Components_spi.UH2", [], UH2_Cons, () => [[["Item1", int32_type], ["Item2", obj_type], ["Item3", UH2$reflection()]], []]);
}

export class Mut16 extends Record {
    l0: int32;
    l1: UH2;
    constructor(l0: int32, l1: UH2) {
        super();
        this.l0 = (l0 | 0);
        this.l1 = l1;
    }
}

export function Mut16$reflection(): TypeInfo {
    return record_type("Components_spi.Mut16", [], Mut16, () => [["l0", int32_type], ["l1", UH2$reflection()]]);
}

export function method0(): [[string, string, string, string][], US0, US1, US1, [US2, int32, string, string][], [US2, US2][], [int32, any][], [int32, any][], [int32, int32][], US0] {
    return [[["4ZZJNAAPJGOUBHORYKX5DQSJJIMQLADNUIH7ONXZAVEZYZGOAM5CM7HV2M", "admin", "poem slush dry adult final thunder price pause concert topic mesh wild dry gate judge celery winter list promote clump country loan move about faith", "OBVzhzxAK4ZPdaF1QbkXsd8hgRUPJeCfYFjFghgMGnLmcpaAD0mdQJ3Rwq/RwklKGQWAbaIP9zb5BUmcZM4DOg=="], ["Q2MAJEB7HYFK42KSN2MY26PL3P5P7HVIGR22GDAGCJQUARDEIM4WLHSIFQ", "x", "crater dove click normal kitten aisle obvious error exotic lunar guard impact donkey gun lamp divide announce match cement excess piano turn fish above make", "lHFQVWKpvRYU00yAQqHOHJegn5nvP0owYkroBFKr94qGmASQPz4KrmlSbpmNeevb+v+eqDR1owwGEmFARGRDOQ=="], ["KVGJONR4BETXZ3AS224T4MAJATTSTQGVO3VC3YAGSWAYBVD7KPR23RKNBI", "o", "key churn alert mother lock run lyrics category office lamp silver nut cement pistol fury hollow faculty feed capable announce index cloth faint about bid", "0DNKDAK5QfWuMCTMNJ+Re5mSlc7rbI0q1UOUYDmvPGpVTJc2PAknfOwS1rk+MAkE5ynA1XbqLeAGlYGA1H9T4w=="]], US0_US0_1(4001), US1_US1_1("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), US1_US1_1("http://localhost"), [], [], [], [], [], US0_US0_0()];
}

export function closure1(v0_1: any, v1_1: any): void {
    const v2: any = v1_1.on;
    v2("@init", ((): any => v0_1));
    v2("set", ((_: any, state: any) => state));
}

export function closure0(unitVar: void, v0_1: any): any {
    const v3: any = createStoreon;
    const v4: (arg0: any) => void = (v: any): void => {
        closure1(v0_1, v);
    };
    return v3([v4]);
}

export function method1(): (arg0: any) => any {
    return (v: any): any => closure0(void 0, v);
}

export function method2(): [any, string, boolean] {
    const v0_1: any = components_spi.env;
    const v1_1: string = v0_1.GITHUB_RUN_ID;
    const v2: any = v0_1.IS_TEST;
    return [v0_1, v1_1, (!v2) === false];
}

export function method3(v0_1_mut: int32, v1_1_mut: string): string {
    method3:
    while (true) {
        const v0_1: int32 = v0_1_mut, v1_1: string = v1_1_mut;
        if (v1_1.length < v0_1) {
            v0_1_mut = v0_1;
            v1_1_mut = (`0${v1_1}`);
            continue method3;
        }
        else {
            return v1_1;
        }
        break;
    }
}

export function closure3(v0_1: any, v1_1: string, v2: boolean, v3: int64, _arg: [Mut1, Mut1, any]): void {
    let copyOfStruct: Date;
    const v5: Mut1 = _arg[1];
    const v11: any[] = [">> db_listener store.on(@changed)", ["b_changed:", v5]];
    const v18: string = `[${method3(6, toString(op_Subtraction(op_Division((copyOfStruct = utcNow(), getTicks(copyOfStruct)), fromBits(1000, 0, false)), v3)))}] ${components_spi.run_id}`;
    const v19: string = JSON.stringify(v11);
    const v21: string = JSON.stringify([]);
    let patternInput: [string, string, string, string, string];
    if (v2) {
        const v22: string = "";
        patternInput = [v18, v19, v21, v22, v22];
    }
    else {
        patternInput = [`${v18} %c%s %c%s`, `font-weight: bold; color: ${"#cf1100"}`, v19, "font-weight: bold; color: #444", v21];
    }
    console.log.apply(console, [patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4]]);
    const patternInput_1: [[US2, int32, string, string][], [US2, US2][]] = [v5.l4, v5.l5];
    let v40: boolean;
    if ((!patternInput_1[1]) === false) {
        v40 = true;
    }
    else {
        const patternInput_2: [[US2, int32, string, string][], [US2, US2][]] = [v5.l4, v5.l5];
        v40 = ((!patternInput_2[0]) === false);
    }
}

export function closure2(v0_1: any, v1_1: Mut2): any {
    let copyOfStruct: Date, copyOfStruct_1: Date;
    const patternInput: [any, string, boolean] = method2();
    const v4: boolean = patternInput[2];
    const v5: int64 = op_Division((copyOfStruct = utcNow(), getTicks(copyOfStruct)), fromBits(1000, 0, false));
    const v8: any[] = ["> db_listener ()"];
    const v15: string = `[${method3(6, toString(op_Subtraction(op_Division((copyOfStruct_1 = utcNow(), getTicks(copyOfStruct_1)), fromBits(1000, 0, false)), v5)))}] ${components_spi.run_id}`;
    const v16: string = JSON.stringify(v8);
    const v18: string = JSON.stringify([]);
    let patternInput_1: [string, string, string, string, string];
    if (v4) {
        const v19: string = "";
        patternInput_1 = [v15, v16, v18, v19, v19];
    }
    else {
        patternInput_1 = [`${v15} %c%s %c%s`, `font-weight: bold; color: ${"#cf1100"}`, v16, "font-weight: bold; color: #444", v18];
    }
    console.log.apply(console, [patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4]]);
    const v29: any = v0_1.on;
    const v30: (arg0: [Mut1, Mut1, any]) => void = (arg10$0040: [Mut1, Mut1, any]): void => {
        closure3(patternInput[0], patternInput[1], v4, v5, arg10$0040);
    };
    const v31: any = (...args: any[]) => v30(args);
    const v32: () => void = v29("@changed", v31);
    const v35: any = onCleanup;
    v35(v32);
    return <></>;
}

export function method4(): [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] {
    return [US1_US1_0(), US1_US1_0(), US3_US3_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US4_US4_0(), US5_US5_0(), US1_US1_0(), US1_US1_0(), US4_US4_0(), US6_US6_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US7_US7_0(), US4_US4_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US8_US8_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US8_US8_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US9_US9_0(), US10_US10_0(), US9_US9_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US1_US1_0(), US8_US8_0(), US1_US1_0(), US1_US1_0(), US6_US6_0(), US1_US1_0(), US0_US0_0(), US1_US1_0()];
}

export function closure8(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function method8(v0_1_mut: UH0, v1_1_mut: int32): int32 {
    method8:
    while (true) {
        const v0_1: UH0 = v0_1_mut, v1_1: int32 = v1_1_mut;
        if (v0_1.tag === UH0_Tag.UH0_1) {
            return v1_1 | 0;
        }
        else {
            v0_1_mut = v0_1.fields[1];
            v1_1_mut = (v1_1 + 1);
            continue method8;
        }
        break;
    }
}

export function method9(v0_1_mut: [string, any][], v1_1_mut: UH0, v2_mut: int32): int32 {
    method9:
    while (true) {
        const v0_1: [string, any][] = v0_1_mut, v1_1: UH0 = v1_1_mut, v2: int32 = v2_mut;
        if (v1_1.tag === UH0_Tag.UH0_1) {
            return v2 | 0;
        }
        else {
            v0_1[v2] = v1_1.fields[0];
            v0_1_mut = v0_1;
            v1_1_mut = v1_1.fields[1];
            v2_mut = (v2 + 1);
            continue method9;
        }
        break;
    }
}

export function method7(v0_1: UH0): [string, any][] {
    const v2: int32 = method8(v0_1, 0) | 0;
    const v3: [string, any][] = fill(new Array(v2), 0, v2, null);
    const v5: int32 = method9(v3, v0_1, 0) | 0;
    return v3;
}

export function method6(v0_1: US1, v1_1: US1, v2: US3, v3: US1, v4: US1, v5: US1, v6: US1, v7: US1, v8: US1, v9: US4, v10: US5, v11: US1, v12: US1, v13: US4, v14: US6, v15: US1, v16: US1, v17: US1, v18: US7, v19: US4, v20: US1, v21: US1, v22: US1, v23: US1, v24: US1, v25: US8, v26: US1, v27: US1, v28: US1, v29: US8, v30: US1, v31: US1, v32: US1, v33: US1, v34: US1, v35: US1, v36: US1, v37: US1, v38: US9, v39: US10, v40: US9, v41: US1, v42: US1, v43: US1, v44: US1, v45: US1, v46: US1, v47: US1, v48: US1, v49: US1, v50: US1, v51: US1, v52: US1, v53: US1, v54: US1, v55: US1, v56: US8, v57: US1, v58: US1, v59: US6, v60: US1, v61: US0, v62: US1): [string, any][] {
    const v66_1: any = (v0_1.tag === US1_Tag.US1_1) ? v0_1.fields[0] : (void 0);
    const v73_1: UH0 = (!v66_1) ? UH0_UH0_1() : UH0_UH0_0(["alignItems", v66_1], UH0_UH0_1());
    const v77_1: any = (v1_1.tag === US1_Tag.US1_1) ? v1_1.fields[0] : (void 0);
    const v82_1: UH0 = (!v77_1) ? v73_1 : UH0_UH0_0(["aria-label", v77_1], v73_1);
    const v86_1: any = (v2.tag === US3_Tag.US3_1) ? v2.fields[0] : (void 0);
    const v91_1: UH0 = (!v86_1) ? v82_1 : UH0_UH0_0(["as", v86_1], v82_1);
    const v95: any = (v3.tag === US1_Tag.US1_1) ? v3.fields[0] : (void 0);
    const v100: UH0 = (!v95) ? v91_1 : UH0_UH0_0(["backgroundColor", v95], v91_1);
    const v104: any = (v4.tag === US1_Tag.US1_1) ? v4.fields[0] : (void 0);
    const v109: UH0 = (!v104) ? v100 : UH0_UH0_0(["border", v104], v100);
    const v113: any = (v5.tag === US1_Tag.US1_1) ? v5.fields[0] : (void 0);
    const v118: UH0 = (!v113) ? v109 : UH0_UH0_0(["borderBottomWidth", v113], v109);
    const v122: any = (v6.tag === US1_Tag.US1_1) ? v6.fields[0] : (void 0);
    const v127: UH0 = (!v122) ? v118 : UH0_UH0_0(["borderColor", v122], v118);
    const v131: any = (v7.tag === US1_Tag.US1_1) ? v7.fields[0] : (void 0);
    const v136: UH0 = (!v131) ? v127 : UH0_UH0_0(["borderWidth", v131], v127);
    const v140: any = (v8.tag === US1_Tag.US1_1) ? v8.fields[0] : (void 0);
    const v145: UH0 = (!v140) ? v136 : UH0_UH0_0(["bottom", v140], v136);
    const v149: any = (v9.tag === US4_Tag.US4_1) ? v9.fields[0] : (void 0);
    const v154: UH0 = (!v149) ? v145 : UH0_UH0_0(["checked", v149], v145);
    const v158: any = (v10.tag === US5_Tag.US5_1) ? v10.fields[0] : (void 0);
    const v163: UH0 = (!v158) ? v154 : UH0_UH0_0(["children", v158], v154);
    const v167: any = (v11.tag === US1_Tag.US1_1) ? v11.fields[0] : (void 0);
    const v172: UH0 = (!v167) ? v163 : UH0_UH0_0(["color", v167], v163);
    const v176: any = (v12.tag === US1_Tag.US1_1) ? v12.fields[0] : (void 0);
    const v181: UH0 = (!v176) ? v172 : UH0_UH0_0(["colorScheme", v176], v172);
    const v185: any = (v13.tag === US4_Tag.US4_1) ? v13.fields[0] : (void 0);
    const v190: UH0 = (!v185) ? v181 : UH0_UH0_0(["compact", v185], v181);
    const v194: any = (v14.tag === US6_Tag.US6_1) ? v14.fields[0] : (void 0);
    const v199: UH0 = (!v194) ? v190 : UH0_UH0_0(["css", v194], v190);
    const v203: any = (v15.tag === US1_Tag.US1_1) ? v15.fields[0] : (void 0);
    const v208: UH0 = (!v203) ? v199 : UH0_UH0_0(["defaultValue", v203], v199);
    const v212: any = (v16.tag === US1_Tag.US1_1) ? v16.fields[0] : (void 0);
    const v217: UH0 = (!v212) ? v208 : UH0_UH0_0(["direction", v212], v208);
    const v221: any = (v17.tag === US1_Tag.US1_1) ? v17.fields[0] : (void 0);
    const v226: UH0 = (!v221) ? v217 : UH0_UH0_0(["display", v221], v217);
    const v230: any = (v18.tag === US7_Tag.US7_1) ? v18.fields[0] : (void 0);
    const v235: UH0 = (!v230) ? v226 : UH0_UH0_0(["each", v230], v226);
    const v239: any = (v19.tag === US4_Tag.US4_1) ? v19.fields[0] : (void 0);
    const v244: UH0 = (!v239) ? v235 : UH0_UH0_0(["external", v239], v235);
    const v248: any = (v20.tag === US1_Tag.US1_1) ? v20.fields[0] : (void 0);
    const v253: UH0 = (!v248) ? v244 : UH0_UH0_0(["flex", v248], v244);
    const v257: any = (v21.tag === US1_Tag.US1_1) ? v21.fields[0] : (void 0);
    const v262: UH0 = (!v257) ? v253 : UH0_UH0_0(["flexDirection", v257], v253);
    const v266: any = (v22.tag === US1_Tag.US1_1) ? v22.fields[0] : (void 0);
    const v271: UH0 = (!v266) ? v262 : UH0_UH0_0(["fontSize", v266], v262);
    const v275: any = (v23.tag === US1_Tag.US1_1) ? v23.fields[0] : (void 0);
    const v280: UH0 = (!v275) ? v271 : UH0_UH0_0(["height", v275], v271);
    const v284: any = (v24.tag === US1_Tag.US1_1) ? v24.fields[0] : (void 0);
    const v289: UH0 = (!v284) ? v280 : UH0_UH0_0(["href", v284], v280);
    const v293: any = (v25.tag === US8_Tag.US8_1) ? v25.fields[0] : (void 0);
    const v298: UH0 = (!v293) ? v289 : UH0_UH0_0(["icon", v293], v289);
    const v302: any = (v26.tag === US1_Tag.US1_1) ? v26.fields[0] : (void 0);
    const v307: UH0 = (!v302) ? v298 : UH0_UH0_0(["id", v302], v298);
    const v311: any = (v27.tag === US1_Tag.US1_1) ? v27.fields[0] : (void 0);
    const v316: UH0 = (!v311) ? v307 : UH0_UH0_0(["justifyContent", v311], v307);
    const v320: any = (v28.tag === US1_Tag.US1_1) ? v28.fields[0] : (void 0);
    const v325: UH0 = (!v320) ? v316 : UH0_UH0_0(["left", v320], v316);
    const v329: any = (v29.tag === US8_Tag.US8_1) ? v29.fields[0] : (void 0);
    const v334: UH0 = (!v329) ? v325 : UH0_UH0_0(["leftIcon", v329], v325);
    const v338: any = (v30.tag === US1_Tag.US1_1) ? v30.fields[0] : (void 0);
    const v343: UH0 = (!v338) ? v334 : UH0_UH0_0(["lineHeight", v338], v334);
    const v347: any = (v31.tag === US1_Tag.US1_1) ? v31.fields[0] : (void 0);
    const v352: UH0 = (!v347) ? v343 : UH0_UH0_0(["margin", v347], v343);
    const v356: any = (v32.tag === US1_Tag.US1_1) ? v32.fields[0] : (void 0);
    const v361: UH0 = (!v356) ? v352 : UH0_UH0_0(["marginBottom", v356], v352);
    const v365: any = (v33.tag === US1_Tag.US1_1) ? v33.fields[0] : (void 0);
    const v370: UH0 = (!v365) ? v361 : UH0_UH0_0(["marginLeft", v365], v361);
    const v374: any = (v34.tag === US1_Tag.US1_1) ? v34.fields[0] : (void 0);
    const v379: UH0 = (!v374) ? v370 : UH0_UH0_0(["marginRight", v374], v370);
    const v383: any = (v35.tag === US1_Tag.US1_1) ? v35.fields[0] : (void 0);
    const v388: UH0 = (!v383) ? v379 : UH0_UH0_0(["marginTop", v383], v379);
    const v392: any = (v36.tag === US1_Tag.US1_1) ? v36.fields[0] : (void 0);
    const v397: UH0 = (!v392) ? v388 : UH0_UH0_0(["maxHeight", v392], v388);
    const v401: any = (v37.tag === US1_Tag.US1_1) ? v37.fields[0] : (void 0);
    const v406: UH0 = (!v401) ? v397 : UH0_UH0_0(["maxWidth", v401], v397);
    const v410: any = (v38.tag === US9_Tag.US9_1) ? v38.fields[0] : (void 0);
    const v415: UH0 = (!v410) ? v406 : UH0_UH0_0(["onChange", v410], v406);
    const v419: any = (v39.tag === US10_Tag.US10_1) ? v39.fields[0] : (void 0);
    const v424: UH0 = (!v419) ? v415 : UH0_UH0_0(["onClick", v419], v415);
    const v428: any = (v40.tag === US9_Tag.US9_1) ? v40.fields[0] : (void 0);
    const v433: UH0 = (!v428) ? v424 : UH0_UH0_0(["onInput", v428], v424);
    const v437: any = (v41.tag === US1_Tag.US1_1) ? v41.fields[0] : (void 0);
    const v442: UH0 = (!v437) ? v433 : UH0_UH0_0(["outline", v437], v433);
    const v446: any = (v42.tag === US1_Tag.US1_1) ? v42.fields[0] : (void 0);
    const v451: UH0 = (!v446) ? v442 : UH0_UH0_0(["overflowX", v446], v442);
    const v455: any = (v43.tag === US1_Tag.US1_1) ? v43.fields[0] : (void 0);
    const v460: UH0 = (!v455) ? v451 : UH0_UH0_0(["overflowY", v455], v451);
    const v464: any = (v44.tag === US1_Tag.US1_1) ? v44.fields[0] : (void 0);
    const v469: UH0 = (!v464) ? v460 : UH0_UH0_0(["padding", v464], v460);
    const v473: any = (v45.tag === US1_Tag.US1_1) ? v45.fields[0] : (void 0);
    const v478: UH0 = (!v473) ? v469 : UH0_UH0_0(["paddingBottom", v473], v469);
    const v482: any = (v46.tag === US1_Tag.US1_1) ? v46.fields[0] : (void 0);
    const v487: UH0 = (!v482) ? v478 : UH0_UH0_0(["paddingLeft", v482], v478);
    const v491: any = (v47.tag === US1_Tag.US1_1) ? v47.fields[0] : (void 0);
    const v496: UH0 = (!v491) ? v487 : UH0_UH0_0(["paddingRight", v491], v487);
    const v500: any = (v48.tag === US1_Tag.US1_1) ? v48.fields[0] : (void 0);
    const v505: UH0 = (!v500) ? v496 : UH0_UH0_0(["paddingTop", v500], v496);
    const v509: any = (v49.tag === US1_Tag.US1_1) ? v49.fields[0] : (void 0);
    const v514: UH0 = (!v509) ? v505 : UH0_UH0_0(["position", v509], v505);
    const v518: any = (v50.tag === US1_Tag.US1_1) ? v50.fields[0] : (void 0);
    const v523: UH0 = (!v518) ? v514 : UH0_UH0_0(["right", v518], v514);
    const v527: any = (v51.tag === US1_Tag.US1_1) ? v51.fields[0] : (void 0);
    const v532: UH0 = (!v527) ? v523 : UH0_UH0_0(["size", v527], v523);
    const v536: any = (v52.tag === US1_Tag.US1_1) ? v52.fields[0] : (void 0);
    const v541: UH0 = (!v536) ? v532 : UH0_UH0_0(["spacing", v536], v532);
    const v545: any = (v53.tag === US1_Tag.US1_1) ? v53.fields[0] : (void 0);
    const v550: UH0 = (!v545) ? v541 : UH0_UH0_0(["src", v545], v541);
    const v554: any = (v54.tag === US1_Tag.US1_1) ? v54.fields[0] : (void 0);
    const v559: UH0 = (!v554) ? v550 : UH0_UH0_0(["striped", v554], v550);
    const v563: any = (v55.tag === US1_Tag.US1_1) ? v55.fields[0] : (void 0);
    const v568: UH0 = (!v563) ? v559 : UH0_UH0_0(["thickness", v563], v559);
    const v572: any = (v56.tag === US8_Tag.US8_1) ? v56.fields[0] : (void 0);
    const v577: UH0 = (!v572) ? v568 : UH0_UH0_0(["title", v572], v568);
    const v581: any = (v57.tag === US1_Tag.US1_1) ? v57.fields[0] : (void 0);
    const v586: UH0 = (!v581) ? v577 : UH0_UH0_0(["top", v581], v577);
    const v590: any = (v58.tag === US1_Tag.US1_1) ? v58.fields[0] : (void 0);
    const v595: UH0 = (!v590) ? v586 : UH0_UH0_0(["type", v590], v586);
    const v599: any = (v59.tag === US6_Tag.US6_1) ? v59.fields[0] : (void 0);
    const v604: UH0 = (!v599) ? v595 : UH0_UH0_0(["value", v599], v595);
    const v608: any = (v60.tag === US1_Tag.US1_1) ? v60.fields[0] : (void 0);
    const v613: UH0 = (!v608) ? v604 : UH0_UH0_0(["width", v608], v604);
    const v617: any = (v61.tag === US0_Tag.US0_1) ? v61.fields[0] : (void 0);
    const v622: UH0 = (!v617) ? v613 : UH0_UH0_0(["zIndex", v617], v613);
    const v626: any = (v62.tag === US1_Tag.US1_1) ? v62.fields[0] : (void 0);
    return method7((!v626) ? v622 : UH0_UH0_0(["zoom", v626], v622));
}

export function method5(v0_1: US1, v1_1: US1, v2: US3, v3: US1, v4: US1, v5: US1, v6: US1, v7: US1, v8: US1, v9: US4, v10: US5, v11: US1, v12: US1, v13: US4, v14: US6, v15: US1, v16: US1, v17: US1, v18: US7, v19: US4, v20: US1, v21: US1, v22: US1, v23: US1, v24: US1, v25: US8, v26: US1, v27: US1, v28: US1, v29: US8, v30: US1, v31: US1, v32: US1, v33: US1, v34: US1, v35: US1, v36: US1, v37: US1, v38: US9, v39: US10, v40: US9, v41: US1, v42: US1, v43: US1, v44: US1, v45: US1, v46: US1, v47: US1, v48: US1, v49: US1, v50: US1, v51: US1, v52: US1, v53: US1, v54: US1, v55: US1, v56: US8, v57: US1, v58: US1, v59: US6, v60: US1, v61: US0, v62: US1): [string, any][] {
    return method6(v0_1, v1_1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, v22, v23, v24, v25, v26, v27, v28, v29, v30, v31, v32, v33, v34, v35, v36, v37, v38, v39, v40, v41, v42, v43, v44, v45, v46, v47, v48, v49, v50, v51, v52, v53, v54, v55, v56, v57, v58, v59, v60, v61, v62);
}

export function closure7(v0_1: Mut2, unitVar: void): any[] {
    const v1_1: US5 = v0_1.l10;
    const v4: () => any[] = (v1_1.tag === US5_Tag.US5_1) ? v1_1.fields[0] : ((): any[] => closure8(void 0, void 0));
    const v7: any = Tbody;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v81_1: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], US1_US1_1("$blackAlpha3"), patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v4), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], US1_US1_1("flex"), patternInput[18], patternInput[19], patternInput[20], US1_US1_1("column"), patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], US1_US1_1("-1px"), patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]));
    const v82_1: (arg0: any) => any = v7;
    const v85_1: any = createComponent;
    return [v85_1(v82_1, v81_1)];
}

export function closure6(unitVar: void, v0_1: Mut2): any {
    const v3: any = Table;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v67_1: US1 = v0_1.l43;
    const v71_1: () => any[] = (): any[] => closure7(v0_1, void 0);
    const v83_1: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v71_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], US1_US1_1("flex"), patternInput[18], patternInput[19], US1_US1_1("1"), US1_US1_1("column"), patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], US1_US1_1("hidden"), US1_US1_1((v67_1.tag === US1_Tag.US1_1) ? v67_1.fields[0] : "hidden"), patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]));
    const v84_1: (arg0: any) => any = v3;
    const v87_1: any = createComponent;
    return v87_1(v84_1, v83_1);
}

export function method10(v0_1: string, v1_1: string): string {
    return {
        "@initial": v1_1,
        "@sm": v0_1,
    };
}

export function closure14(v0_1: any, unitVar: void): any[] {
    return [v0_1];
}

export function closure13(v0_1: any, unitVar: void): any[] {
    const v3: any = Box;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v67_1: () => any[] = (): any[] => closure14(v0_1, void 0);
    const v72_1: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v67_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], US1_US1_1("2px"), patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]));
    const v73_1: (arg0: any) => any = v3;
    const v76_1: any = createComponent;
    return [v76_1(v73_1, v72_1)];
}

export function closure15(v0_1: (arg0: boolean) => void, v1_1: any): void {
    v0_1(v1_1.target.checked);
}

export function closure12(v0_1: Mut3, v1_1: (arg0: boolean) => void, v2: () => boolean, v3: any, unitVar: void): any[] {
    let v92_1: any, patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1], v158: () => any[], v164: (arg0: any) => void, v169: any, v170: (arg0: any) => any, v173: any, v7: any, patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1], v73_1: () => any[], v79_1: (arg0: any) => void, v84_1: any, v85_1: (arg0: any) => any, v88_1: any;
    const v4: US12 = v0_1.l2;
    return [(v4.tag === US12_Tag.US12_1) ? ((v92_1 = Checkbox, (patternInput_1 = method4(), (v158 = ((): any[] => closure13(v3, void 0)), (v164 = ((v_1: any): void => {
        closure15(v1_1, v_1);
    }), (v169 = createObj(method5(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], US4_US4_1(v2()), US5_US5_1(v158), patternInput_1[11], US1_US1_1("neutral"), patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], US1_US1_1("2px"), patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], US9_US9_1(v164), patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], US1_US1_1("sm"), patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62])), (v170 = (v92_1), (v173 = createComponent, v173(v170, v169))))))))) : ((v4.tag === US12_Tag.US12_2) ? v3 : ((v7 = Checkbox, (patternInput = method4(), (v73_1 = ((): any[] => closure13(v3, void 0)), (v79_1 = ((v: any): void => {
        closure15(v1_1, v);
    }), (v84_1 = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], US4_US4_1(v2()), US5_US5_1(v73_1), patternInput[11], US1_US1_1("neutral"), patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], US1_US1_1("2px"), patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], US9_US9_1(v79_1), patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], US1_US1_1("sm"), patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62])), (v85_1 = (v7), (v88_1 = createComponent, v88_1(v85_1, v84_1))))))))))];
}

export function closure16(unitVar: void, unitVar_1: void): any[] {
    return [<>
        &nbsp;
    </>];
}

export function closure19(v0_1: () => boolean, unitVar: void): any[] {
    return [v0_1()];
}

export function closure20(v0_1: (arg0: boolean) => void, v1_1: () => boolean, unitVar: void): void {
    if (v1_1()) {
        v0_1(false);
    }
}

export function closure21(v0_1: Mut1, v1_1: any, v2: (arg0: Mut1, arg1: Mut1) => void): void {
    const v5: Mut1 = createObj(fill(new Array(0), 0, 0, null));
    v2(v0_1, v5);
    v1_1("set", v5);
}

export function method12(v0_1: int32, v1_1: Mut5): boolean {
    return v1_1.l0 < v0_1;
}

export function method11(v0_1: Mut2, v1_1: Mut2): void {
    const v2: string[] = Object.keys(v0_1);
    const v3: int32 = v2.length | 0;
    const v4: Mut5 = new Mut5(0);
    while (method12(v3, v4)) {
        const v6: int32 = v4.l0 | 0;
        const v7: string = v2[v6];
        if (!!v1_1[v7].tag) {
            v0_1[v7] = v1_1[v7];
        }
        const v9: int32 = (v6 + 1) | 0;
        v4.l0 = (v9 | 0);
    }
}

export function closure25(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure24(unitVar: void, v0_1: Mut2): any {
    const v3: any = Button;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v0_1.l0, v0_1.l1, v0_1.l2, v0_1.l3, v0_1.l4, v0_1.l5, v0_1.l6, v0_1.l7, v0_1.l8, v0_1.l9, v0_1.l10, v0_1.l11, v0_1.l12, v0_1.l13, v0_1.l14, v0_1.l15, v0_1.l16, v0_1.l17, v0_1.l18, v0_1.l19, v0_1.l20, v0_1.l21, v0_1.l22, v0_1.l23, v0_1.l24, v0_1.l25, v0_1.l26, v0_1.l27, v0_1.l28, v0_1.l29, v0_1.l30, v0_1.l31, v0_1.l32, v0_1.l33, v0_1.l34, v0_1.l35, v0_1.l36, v0_1.l37, v0_1.l38, v0_1.l39, v0_1.l40, v0_1.l41, v0_1.l42, v0_1.l43, v0_1.l44, v0_1.l45, v0_1.l46, v0_1.l47, v0_1.l48, v0_1.l49, v0_1.l50, v0_1.l51, v0_1.l52, v0_1.l53, v0_1.l54, v0_1.l55, v0_1.l56, v0_1.l57, v0_1.l58, v0_1.l59, v0_1.l60, v0_1.l61, v0_1.l62];
    const v138: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], US1_US1_1("neutral"), US4_US4_1(true), patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], US1_US1_1("left"), patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], US1_US1_1("xs"), patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    method11(v138, new Mut2(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62]));
    const patternInput_2: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v138.l0, v138.l1, v138.l2, v138.l3, v138.l4, v138.l5, v138.l6, v138.l7, v138.l8, v138.l9, v138.l10, v138.l11, v138.l12, v138.l13, v138.l14, v138.l15, v138.l16, v138.l17, v138.l18, v138.l19, v138.l20, v138.l21, v138.l22, v138.l23, v138.l24, v138.l25, v138.l26, v138.l27, v138.l28, v138.l29, v138.l30, v138.l31, v138.l32, v138.l33, v138.l34, v138.l35, v138.l36, v138.l37, v138.l38, v138.l39, v138.l40, v138.l41, v138.l42, v138.l43, v138.l44, v138.l45, v138.l46, v138.l47, v138.l48, v138.l49, v138.l50, v138.l51, v138.l52, v138.l53, v138.l54, v138.l55, v138.l56, v138.l57, v138.l58, v138.l59, v138.l60, v138.l61, v138.l62];
    const v202: () => any[] = (): any[] => closure25(void 0, void 0);
    const v205: any = createObj(method5(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], US5_US5_1(v202), patternInput_2[11], patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62]));
    const v206: (arg0: any) => any = v3;
    const v209: any = createComponent;
    return v209(v206, v205);
}

export function closure26(v0_1: (arg0: boolean) => void, v1_1: Mut4, v2: Mut1, v3: any, unitVar: void): void {
    const v4: US11 = v1_1.l2;
    if (v4.tag === US11_Tag.US11_1) {
        const v7: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void = (v: (arg0: Mut1, arg1: Mut1) => void): void => {
            closure21(v2, v3, uncurry(2, v));
        };
        v4.fields[0](v2, v7);
    }
    v0_1(true);
}

export function closure27(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Load
    </>];
}

export function closure23(v0_1: (arg0: boolean) => void, v1_1: Mut4, v2: Mut1, v3: any, unitVar: void): any[] {
    const v4: (arg0: Mut2) => any = (v: Mut2): any => closure24(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v68_1: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const v69_1: () => void = (): void => {
        closure26(v0_1, v1_1, v2, v3, void 0);
    };
    v68_1.l39 = US10_US10_1(v69_1);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v68_1.l0, v68_1.l1, v68_1.l2, v68_1.l3, v68_1.l4, v68_1.l5, v68_1.l6, v68_1.l7, v68_1.l8, v68_1.l9, v68_1.l10, v68_1.l11, v68_1.l12, v68_1.l13, v68_1.l14, v68_1.l15, v68_1.l16, v68_1.l17, v68_1.l18, v68_1.l19, v68_1.l20, v68_1.l21, v68_1.l22, v68_1.l23, v68_1.l24, v68_1.l25, v68_1.l26, v68_1.l27, v68_1.l28, v68_1.l29, v68_1.l30, v68_1.l31, v68_1.l32, v68_1.l33, v68_1.l34, v68_1.l35, v68_1.l36, v68_1.l37, v68_1.l38, v68_1.l39, v68_1.l40, v68_1.l41, v68_1.l42, v68_1.l43, v68_1.l44, v68_1.l45, v68_1.l46, v68_1.l47, v68_1.l48, v68_1.l49, v68_1.l50, v68_1.l51, v68_1.l52, v68_1.l53, v68_1.l54, v68_1.l55, v68_1.l56, v68_1.l57, v68_1.l58, v68_1.l59, v68_1.l60, v68_1.l61, v68_1.l62];
    const v99: US1 = patternInput_1[28];
    const v98: US1 = patternInput_1[27];
    const v97: US1 = patternInput_1[26];
    const v96: US8 = patternInput_1[25];
    const v95: US1 = patternInput_1[24];
    const v94_1: US1 = patternInput_1[23];
    const v93_1: US1 = patternInput_1[22];
    const v92_1: US1 = patternInput_1[21];
    const v91_1: US1 = patternInput_1[20];
    const v90_1: US4 = patternInput_1[19];
    const v89_1: US7 = patternInput_1[18];
    const v88_1: US1 = patternInput_1[17];
    const v87_1: US1 = patternInput_1[16];
    const v86_1: US1 = patternInput_1[15];
    const v85_1: US6 = patternInput_1[14];
    const v84_1: US4 = patternInput_1[13];
    const v83_1: US1 = patternInput_1[12];
    const v82_1: US1 = patternInput_1[11];
    const v80_1: US4 = patternInput_1[9];
    const v79_1: US1 = patternInput_1[8];
    const v78_1: US1 = patternInput_1[7];
    const v77_1: US1 = patternInput_1[6];
    const v76_1: US1 = patternInput_1[5];
    const v75_1: US1 = patternInput_1[4];
    const v74_1: US1 = patternInput_1[3];
    const v73_1: US3 = patternInput_1[2];
    const v72_1: US1 = patternInput_1[1];
    const v71_1: US1 = patternInput_1[0];
    const v133: US1 = patternInput_1[62];
    const v132: US0 = patternInput_1[61];
    const v131: US1 = patternInput_1[60];
    const v130: US6 = patternInput_1[59];
    const v129: US1 = patternInput_1[58];
    const v128: US1 = patternInput_1[57];
    const v127: US8 = patternInput_1[56];
    const v126: US1 = patternInput_1[55];
    const v125: US1 = patternInput_1[54];
    const v124: US1 = patternInput_1[53];
    const v123: US1 = patternInput_1[52];
    const v122: US1 = patternInput_1[51];
    const v121: US1 = patternInput_1[50];
    const v120: US1 = patternInput_1[49];
    const v119: US1 = patternInput_1[48];
    const v118: US1 = patternInput_1[47];
    const v117: US1 = patternInput_1[46];
    const v116: US1 = patternInput_1[45];
    const v115: US1 = patternInput_1[44];
    const v114: US1 = patternInput_1[43];
    const v113: US1 = patternInput_1[42];
    const v112: US1 = patternInput_1[41];
    const v111: US9 = patternInput_1[40];
    const v110: US10 = patternInput_1[39];
    const v109: US9 = patternInput_1[38];
    const v108: US1 = patternInput_1[37];
    const v107: US1 = patternInput_1[36];
    const v106: US1 = patternInput_1[35];
    const v105: US1 = patternInput_1[34];
    const v104: US1 = patternInput_1[33];
    const v103: US1 = patternInput_1[32];
    const v102: US1 = patternInput_1[31];
    const v101: US1 = patternInput_1[30];
    const v100: US8 = patternInput_1[29];
    const v134: () => any[] = (): any[] => closure27(void 0, void 0);
    [v71_1, v72_1, v73_1, v74_1, v75_1, v76_1, v77_1, v78_1, v79_1, v80_1, US5_US5_1(v134), v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129, v130, v131, v132, v133].children = v134;
    const v137: Mut2 = new Mut2(v71_1, v72_1, v73_1, v74_1, v75_1, v76_1, v77_1, v78_1, v79_1, v80_1, US5_US5_1(v134), v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129, v130, v131, v132, v133);
    const v139: (arg0: any) => any = v4;
    const v142: any = createComponent;
    return [v142(v139, v137)];
}

export function closure32(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure31(unitVar: void, v0_1: Mut6): any {
    const v3: any = Icon;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v68_1: any = v0_1.l1();
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v133: string = "-12px";
    const patternInput_2: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = v0_1.l0([patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], US1_US1_1(v133), patternInput_1[34], US1_US1_1(v133), patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], US1_US1_1("0.6")]);
    const v202: any = createObj(method5(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], patternInput_2[10], patternInput_2[11], patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62]));
    const patternInput_3: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = v0_1.l2([patternInput[0], patternInput[1], US3_US3_1(v68_1), patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], US6_US6_1(v202), patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], US1_US1_1("14px"), patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]]);
    const v271: () => any[] = (): any[] => closure32(void 0, void 0);
    const v274: any = createObj(method5(patternInput_3[0], patternInput_3[1], patternInput_3[2], patternInput_3[3], patternInput_3[4], patternInput_3[5], patternInput_3[6], patternInput_3[7], patternInput_3[8], patternInput_3[9], US5_US5_1(v271), patternInput_3[11], patternInput_3[12], patternInput_3[13], patternInput_3[14], patternInput_3[15], patternInput_3[16], patternInput_3[17], patternInput_3[18], patternInput_3[19], patternInput_3[20], patternInput_3[21], patternInput_3[22], patternInput_3[23], patternInput_3[24], patternInput_3[25], patternInput_3[26], patternInput_3[27], patternInput_3[28], patternInput_3[29], patternInput_3[30], patternInput_3[31], patternInput_3[32], patternInput_3[33], patternInput_3[34], patternInput_3[35], patternInput_3[36], patternInput_3[37], patternInput_3[38], patternInput_3[39], patternInput_3[40], patternInput_3[41], patternInput_3[42], patternInput_3[43], patternInput_3[44], patternInput_3[45], patternInput_3[46], patternInput_3[47], patternInput_3[48], patternInput_3[49], patternInput_3[50], patternInput_3[51], patternInput_3[52], patternInput_3[53], patternInput_3[54], patternInput_3[55], patternInput_3[56], patternInput_3[57], patternInput_3[58], patternInput_3[59], patternInput_3[60], patternInput_3[61], patternInput_3[62]));
    const v275: (arg0: any) => any = v3;
    const v278: any = createComponent;
    return v278(v275, v274);
}

export function closure33(unitVar: void, _arg: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1]): [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] {
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], _arg[11], _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], _arg[58], _arg[59], _arg[60], _arg[61], _arg[62]];
}

export function closure34(unitVar: void, unitVar_1: void): any {
    const v2: any = BiRegularRefresh;
    return v2;
}

export function closure35(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure36(v0_1: (arg0: boolean) => void, unitVar: void): void {
    v0_1(true);
}

export function closure37(unitVar: void, unitVar_1: void): any {
    const v2: any = BiRegularDownArrow;
    return v2;
}

export function closure38(unitVar: void, unitVar_1: void): any {
    const v2: any = BiRegularUpArrow;
    return v2;
}

export function closure39(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure40(v0_1: Mut1, v1_1: any, v2: int32, v3: (arg0: boolean) => void, v4: () => boolean, unitVar: void): void {
    const v6: boolean = v4() === false;
    v3(v6);
    const v9: Mut1 = createObj(fill(new Array(0), 0, 0, null));
    const v12: US0 = v6 ? US0_US0_1(v2) : US0_US0_0();
    v9.l9 = v12;
    v1_1("set", v9);
}

export function closure41(unitVar: void, unitVar_1: void): any {
    const v2: any = BiRegularUndo;
    return v2;
}

export function closure42(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure43(v0_1: (arg0: boolean) => void, unitVar: void): void {
    v0_1(false);
}

export function closure30(v0_1: Mut1, v1_1: any, v2: int32, v3: (arg0: boolean) => void, v4: (arg0: boolean) => void, v5: (arg0: boolean) => void, v6: () => boolean, unitVar: void): any[] {
    const v9: any = IconButton;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v73_1: (arg0: Mut6) => any = (v: Mut6): any => closure31(void 0, v);
    const v74_1: (arg0: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1]) => [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = (arg10$0040: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1]): [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] => closure33(void 0, arg10$0040);
    const v75_1: () => any = (): any => closure34(void 0, void 0);
    const v76_1: Mut6 = new Mut6(v74_1, v75_1, v74_1);
    const v78_1: (arg0: any) => any = v73_1;
    const v81_1: any = createComponent;
    const v85_1: () => any[] = (): any[] => closure35(void 0, void 0);
    const v87_1: string = "neutral";
    const v89_1: string = "20px";
    const v92_1: () => void = (): void => {
        closure36(v4, void 0);
    };
    const v94_1: string = "xs";
    const v97: any = createObj(method5(patternInput[0], US1_US1_1("Refresh"), patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v85_1), patternInput[11], US1_US1_1(v87_1), patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], US1_US1_1(v89_1), patternInput[24], US8_US8_1(v81_1(v78_1, v76_1)), patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], US10_US10_1(v92_1), patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], US1_US1_1(v94_1), patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]));
    const v98: (arg0: any) => any = v9;
    const v99: any = createComponent;
    const v100: any = v99(v98, v97);
    const v101: any = IconButton;
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v168: string = v6() ? "Restore" : "Maximize";
    const v173: Mut6 = new Mut6(v74_1, v6() ? ((): any => closure37(void 0, void 0)) : ((): any => closure38(void 0, void 0)), v74_1);
    const v175: (arg0: any) => any = v73_1;
    const v176: any = createComponent;
    const v179: () => any[] = (): any[] => closure39(void 0, void 0);
    const v184: () => void = (): void => {
        closure40(v0_1, v1_1, v2, v5, v6, void 0);
    };
    const v188: any = createObj(method5(patternInput_1[0], US1_US1_1(v168), patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], US5_US5_1(v179), patternInput_1[11], US1_US1_1(v87_1), patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], US1_US1_1(v89_1), patternInput_1[24], US8_US8_1(v176(v175, v173)), patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], US10_US10_1(v184), patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], US1_US1_1(v94_1), patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62]));
    const v189: (arg0: any) => any = v101;
    const v190: any = createComponent;
    const v191: any = v190(v189, v188);
    const v192: any = IconButton;
    const patternInput_2: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v256: () => any = (): any => closure41(void 0, void 0);
    const v257: Mut6 = new Mut6(v74_1, v256, v74_1);
    const v259: (arg0: any) => any = v73_1;
    const v260: any = createComponent;
    const v264: () => any[] = (): any[] => closure42(void 0, void 0);
    const v269: () => void = (): void => {
        closure43(v3, void 0);
    };
    const v273: any = createObj(method5(patternInput_2[0], US1_US1_1("Unload"), patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], US5_US5_1(v264), patternInput_2[11], US1_US1_1(v87_1), patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], US1_US1_1(v89_1), patternInput_2[24], US8_US8_1(v260(v259, v257)), patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], US10_US10_1(v269), patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], US1_US1_1(v94_1), patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62]));
    const v274: (arg0: any) => any = v192;
    const v275: any = createComponent;
    return [v100, v191, v275(v274, v273)];
}

export function closure29(v0_1: Mut1, v1_1: any, v2: int32, v3: (arg0: boolean) => void, v4: (arg0: boolean) => void, v5: () => boolean, v6: (arg0: boolean) => void, v7: () => boolean, v8: () => any[], unitVar: void): any[] {
    const v11: any = Stack;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v75_1: US0 = v0_1.l9;
    const v85_1: () => any[] = (): any[] => closure30(v0_1, v1_1, v2, v3, v4, v6, v7, void 0);
    const v91_1: string = "6px";
    const v99: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v85_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], US1_US1_1("row"), (v75_1.tag === US0_Tag.US0_1) ? (((v75_1.fields[0] === v2) !== true) ? US1_US1_1("none") : US1_US1_0()) : US1_US1_0(), patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], US1_US1_1("absolute"), US1_US1_1(v91_1), patternInput[51], US1_US1_1("3px"), patternInput[53], patternInput[54], patternInput[55], patternInput[56], US1_US1_1(v91_1), patternInput[58], patternInput[59], patternInput[60], US0_US0_1(1), patternInput[62]));
    const v100: (arg0: any) => any = v11;
    const v103: any = createComponent;
    return [v103(v100, v99), v5() ? <></> : v8];
}

export function closure28(v0_1: Mut2, v1_1: Mut1, v2: any, v3: int32, v4: (arg0: boolean) => void, v5: (arg0: boolean) => void, v6: () => boolean, v7: (arg0: boolean) => void, v8: () => boolean, unitVar: void): any[] {
    let v14: any, patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1], v85_1: () => any[], v92_1: any, v93_1: (arg0: any) => any, v96: any;
    const v9: US5 = v0_1.l10;
    return [(v9.tag === US5_Tag.US5_1) ? ((v14 = Box, (patternInput = method4(), (v85_1 = ((): any[] => closure29(v1_1, v2, v3, v4, v5, v6, v7, v8, v9.fields[0], void 0)), (v92_1 = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v85_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], US1_US1_1("flex"), patternInput[18], patternInput[19], US1_US1_1("1"), patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], (v1_1.l9.tag === US0_Tag.US0_0) ? US1_US1_1("relative") : US1_US1_0(), patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62])), (v93_1 = (v14), (v96 = createComponent, v96(v93_1, v92_1)))))))) : <></>];
}

export function closure22(v0_1: Mut2, v1_1: Mut1, v2: any, v3: int32, v4: (arg0: boolean) => void, v5: () => boolean, v6: (arg0: boolean) => void, v7: () => boolean, v8: (arg0: boolean) => void, v9: () => boolean, v10: Mut4, unitVar: void): any[] {
    let v15: any, patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1], v79_1: () => any[], v84_1: any, v85_1: (arg0: any) => any, v88_1: any, v92_1: any, patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1], v159: US0, v164: US1, v169: US1, v174: US1, v179: US1, v184: US1, v190: () => any[], v197: any, v198: (arg0: any) => any, v201: any;
    return [(v5() === false) ? ((v15 = Box, (patternInput = method4(), (v79_1 = ((): any[] => closure23(v4, v10, v1_1, v2, void 0)), (v84_1 = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v79_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], US1_US1_1("3px 0"), patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62])), (v85_1 = (v15), (v88_1 = createComponent, v88_1(v85_1, v84_1)))))))) : ((v92_1 = Box, (patternInput_1 = method4(), (v159 = (v9() ? US0_US0_1(1) : US0_US0_0()), (v164 = (v9() ? US1_US1_1("absolute") : US1_US1_0()), (v169 = (v9() ? US1_US1_1("0") : US1_US1_0()), (v174 = (v9() ? US1_US1_1("0") : US1_US1_0()), (v179 = (v9() ? US1_US1_1("0") : US1_US1_0()), (v184 = (v9() ? US1_US1_1("0") : US1_US1_0()), (v190 = ((): any[] => closure28(v0_1, v1_1, v2, v3, v4, v6, v7, v8, v9, void 0)), (v197 = createObj(method5(patternInput_1[0], patternInput_1[1], patternInput_1[2], v9() ? US1_US1_1("$bg") : US1_US1_0(), patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], v179, patternInput_1[9], US5_US5_1(v190), patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], US1_US1_1("flex"), patternInput_1[18], patternInput_1[19], US1_US1_1("1"), patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], v184, patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], v164, v174, patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], v169, patternInput_1[58], patternInput_1[59], patternInput_1[60], v159, patternInput_1[62])), (v198 = (v92_1), (v201 = createComponent, v201(v198, v197))))))))))))))];
}

export function closure18(unitVar: void, v0_1: Mut4): any {
    const v1_1: Mut2 = v0_1.l3;
    const v4: any = useStoreon;
    const v5: any[] = v4();
    const v6: Mut1 = v5[0];
    const v7: any = v5[1];
    const v8: int32 = nonSeeded().Next0() | 0;
    const v9: boolean = v0_1.l0;
    const v12: any = createSignal;
    const v13: any[] = v12(v9);
    let v14: () => boolean;
    const value_4: any = v13[0];
    v14 = (value_4);
    let v15: (arg0: boolean) => void;
    const value_5: any = v13[1];
    v15 = ((arg_1: boolean): void => {
        value_5(arg_1);
    });
    const v16: any = createSignal;
    const v17: any[] = v16(false);
    let v18: () => boolean;
    const value_7: any = v17[0];
    v18 = (value_7);
    let v19: (arg0: boolean) => void;
    const value_8: any = v17[1];
    v19 = ((arg_3: boolean): void => {
        value_8(arg_3);
    });
    const v20: boolean = v0_1.l1;
    const v21: any = createSignal;
    const v22: any[] = v21(v20);
    let v23: () => boolean;
    const value_10: any = v22[0];
    v23 = (value_10);
    let v24: (arg0: boolean) => void;
    const value_11: any = v22[1];
    v24 = ((arg_5: boolean): void => {
        value_11(arg_5);
    });
    const v26: any = on;
    const v27: () => any[] = (): any[] => closure19(v18, void 0);
    const v28: () => void = (): void => {
        closure20(v19, v18, void 0);
    };
    const v29: any = v26(v27, v28);
    const v31: any = createEffect;
    v31(v29);
    if (v0_1.l0 === true) {
        const v34: US11 = v0_1.l2;
        if (v34.tag === US11_Tag.US11_1) {
            const v37: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void = (v: (arg0: Mut1, arg1: Mut1) => void): void => {
                closure21(v6, v7, uncurry(2, v));
            };
            v34.fields[0](v6, v37);
        }
    }
    const v40: any = Box;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v105: () => any[] = (): any[] => closure22(v1_1, v6, v7, v8, v15, v14, v19, v18, v24, v23, v0_1, void 0);
    const v112: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v105), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], US1_US1_1("flex"), patternInput[18], patternInput[19], US1_US1_1("1"), patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], v1_1.l26, patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]));
    const v113: (arg0: any) => any = v40;
    const v115: any = createComponent;
    return v115(v113, v112);
}

export function closure17(v0_1: Mut3, v1_1: () => boolean, v2: () => any[], unitVar: void): any[] {
    let v82_1: (arg0: Mut4) => any, v83_1: US11, patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1], v149: Mut4, v151: (arg0: any) => any, v154: any, v5: (arg0: Mut4) => any, v6: US11, patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1], v72_1: Mut4, v74_1: (arg0: any) => any, v77_1: any;
    const v3: US12 = v0_1.l2;
    return [(v3.tag === US12_Tag.US12_1) ? (v1_1() ? ((v82_1 = ((v_1: Mut4): any => closure18(void 0, v_1)), (v83_1 = v0_1.l0, (patternInput_1 = method4(), (v149 = (new Mut4(true, false, v83_1, new Mut2(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], US5_US5_1(v2), patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62]))), (v151 = (v82_1), (v154 = createComponent, v154(v151, v149)))))))) : <></>) : ((v3.tag === US12_Tag.US12_2) ? v2 : (v1_1() ? ((v5 = ((v: Mut4): any => closure18(void 0, v)), (v6 = v0_1.l0, (patternInput = method4(), (v72_1 = (new Mut4(true, false, v6, new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v2), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]))), (v74_1 = (v5), (v77_1 = createComponent, v77_1(v74_1, v72_1)))))))) : <></>))];
}

export function closure11(v0_1: Mut3, v1_1: Mut2, v2: (arg0: boolean) => void, v3: () => boolean, unitVar: void): any[] {
    let v190: any, patternInput_2: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1], v254: US1, v258: string, v260: () => any[], v280: any, v281: (arg0: any) => any, v284: any, v109: any, patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1], v173: string, v175: () => any[], v181: any, v182: (arg0: any) => any, v185: any;
    const v4: US8 = v1_1.l56;
    let v105: any;
    if (v4.tag === US8_Tag.US8_1) {
        const v9: any = Td;
        const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
        const v86_1: () => any[] = (): any[] => closure12(v0_1, v2, v3, v4.fields[0], void 0);
        const v99: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], US1_US1_1(((v0_1.l2.tag === US12_Tag.US12_2) ? true : v3()) ? method10("0px !important", "2px !important") : "0px !important"), US1_US1_1("$neutral5"), patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v86_1), US1_US1_1("$neutral9"), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], US1_US1_1("flex"), patternInput[18], patternInput[19], patternInput[20], US1_US1_1("column"), US1_US1_1("$sm"), patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], US1_US1_1("3px 20px 0 8px"), patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]));
        const v100: (arg0: any) => any = v9;
        const v103: any = createComponent;
        v105 = (v103(v100, v99));
    }
    else {
        v105 = <></>;
    }
    const v106: US5 = v1_1.l10;
    return [v105, (v106.tag === US5_Tag.US5_1) ? ((v190 = Td, (patternInput_2 = method4(), (v254 = v1_1.l44, (v258 = "0", (v260 = ((): any[] => closure17(v0_1, v3, v106.fields[0], void 0)), (v280 = createObj(method5(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], US1_US1_1(v258), patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], US5_US5_1(v260), patternInput_2[11], patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], US1_US1_1("flex"), patternInput_2[18], patternInput_2[19], US1_US1_1("6"), US1_US1_1("column"), US1_US1_1("$sm"), patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], US1_US1_1("$base"), US1_US1_1(v258), patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], US1_US1_1("85vh"), patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], US1_US1_1(v258), patternInput_2[42], US1_US1_1("auto"), US1_US1_1((v254.tag === US1_Tag.US1_1) ? v254.fields[0] : "0"), patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62])), (v281 = (v190), (v284 = createComponent, v284(v281, v280)))))))))) : ((v109 = Td, (patternInput_1 = method4(), (v173 = "0", (v175 = ((): any[] => closure16(void 0, void 0)), (v181 = createObj(method5(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], US1_US1_1(v173), patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], US5_US5_1(v175), patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], US1_US1_1("9px"), patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], US1_US1_1(v173), patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62])), (v182 = (v109), (v185 = createComponent, v185(v182, v181)))))))))];
}

export function closure10(unitVar: void, v0_1: Mut3): any {
    const v1_1: Mut2 = v0_1.l1;
    const v5: boolean = (v0_1.l2.tag === US12_Tag.US12_0) !== true;
    const v8: any = createSignal;
    const v9: any[] = v8(v5);
    let v10: () => boolean;
    const value_1: any = v9[0];
    v10 = (value_1);
    let v11: (arg0: boolean) => void;
    const value_2: any = v9[1];
    v11 = ((arg_1: boolean): void => {
        value_2(arg_1);
    });
    const v14: any = Tr;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v78_1: US1 = v1_1.l26;
    const v86_1: () => any[] = (): any[] => closure11(v0_1, v1_1, v11, v10, void 0);
    const v94_1: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], US1_US1_1("$neutral5"), US1_US1_1("1px 2px"), patternInput[8], patternInput[9], US5_US5_1(v86_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], US1_US1_1("flex"), patternInput[18], patternInput[19], US1_US1_1("1"), US1_US1_1(method10("row", "column")), patternInput[22], patternInput[23], patternInput[24], patternInput[25], v78_1, patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]));
    const v95: (arg0: any) => any = v14;
    const v97: any = createComponent;
    return v97(v95, v94_1);
}

export function closure50(v0_1: Mut2, unitVar: void): any[] {
    const v1_1: US1 = v0_1.l24;
    return [<>
        {(v1_1.tag === US1_Tag.US1_1) ? v1_1.fields[0] : ""}
    </>];
}

export function closure51(unitVar: void, _arg: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1]): [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] {
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], _arg[11], _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], US1_US1_0(), _arg[34], US1_US1_1("-13px"), _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], _arg[58], _arg[59], _arg[60], _arg[61], _arg[62]];
}

export function closure52(unitVar: void, unitVar_1: void): any {
    const v2: any = BiRegularLinkExternal;
    return v2;
}

export function closure49(v0_1: Mut2, unitVar: void): any[] {
    const v3: any = Anchor;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v0_1.l0, v0_1.l1, v0_1.l2, v0_1.l3, v0_1.l4, v0_1.l5, v0_1.l6, v0_1.l7, v0_1.l8, v0_1.l9, v0_1.l10, v0_1.l11, v0_1.l12, v0_1.l13, v0_1.l14, v0_1.l15, v0_1.l16, v0_1.l17, v0_1.l18, v0_1.l19, v0_1.l20, v0_1.l21, v0_1.l22, v0_1.l23, v0_1.l24, v0_1.l25, v0_1.l26, v0_1.l27, v0_1.l28, v0_1.l29, v0_1.l30, v0_1.l31, v0_1.l32, v0_1.l33, v0_1.l34, v0_1.l35, v0_1.l36, v0_1.l37, v0_1.l38, v0_1.l39, v0_1.l40, v0_1.l41, v0_1.l42, v0_1.l43, v0_1.l44, v0_1.l45, v0_1.l46, v0_1.l47, v0_1.l48, v0_1.l49, v0_1.l50, v0_1.l51, v0_1.l52, v0_1.l53, v0_1.l54, v0_1.l55, v0_1.l56, v0_1.l57, v0_1.l58, v0_1.l59, v0_1.l60, v0_1.l61, v0_1.l62];
    const v132: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], US4_US4_1(true), patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    method11(v132, new Mut2(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62]));
    const patternInput_2: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v132.l0, v132.l1, v132.l2, v132.l3, v132.l4, v132.l5, v132.l6, v132.l7, v132.l8, v132.l9, v132.l10, v132.l11, v132.l12, v132.l13, v132.l14, v132.l15, v132.l16, v132.l17, v132.l18, v132.l19, v132.l20, v132.l21, v132.l22, v132.l23, v132.l24, v132.l25, v132.l26, v132.l27, v132.l28, v132.l29, v132.l30, v132.l31, v132.l32, v132.l33, v132.l34, v132.l35, v132.l36, v132.l37, v132.l38, v132.l39, v132.l40, v132.l41, v132.l42, v132.l43, v132.l44, v132.l45, v132.l46, v132.l47, v132.l48, v132.l49, v132.l50, v132.l51, v132.l52, v132.l53, v132.l54, v132.l55, v132.l56, v132.l57, v132.l58, v132.l59, v132.l60, v132.l61, v132.l62];
    const v196: () => any[] = (): any[] => closure50(v0_1, void 0);
    const v199: any = createObj(method5(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], US5_US5_1(v196), patternInput_2[11], patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62]));
    const v200: (arg0: any) => any = v3;
    const v203: any = createComponent;
    const v207: (arg0: Mut6) => any = (v: Mut6): any => closure31(void 0, v);
    const v208: (arg0: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1]) => [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = (arg10$0040_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1]): [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] => closure51(void 0, arg10$0040_1);
    const v209: () => any = (): any => closure52(void 0, void 0);
    const v210: (arg0: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1]) => [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = (arg10$0040_3: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1]): [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] => closure33(void 0, arg10$0040_3);
    const v211: Mut6 = new Mut6(v208, v209, v210);
    const v213: (arg0: any) => any = v207;
    const v214: any = createComponent;
    return [v203(v200, v199), <>
        &nbsp;
    </>, v214(v213, v211)];
}

export function closure48(unitVar: void, v0_1: Mut2): any {
    const v3: any = Box;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v67_1: () => any[] = (): any[] => closure49(v0_1, void 0);
    const v70_1: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v67_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]));
    const v71_1: (arg0: any) => any = v3;
    const v74_1: any = createComponent;
    return v74_1(v71_1, v70_1);
}

export function closure53(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure47(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut2) => any = (v: Mut2): any => closure48(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v64: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    v64.l24 = US1_US1_1("https://github.com/fc1943s/tictactoe_spiral");
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v64.l0, v64.l1, v64.l2, v64.l3, v64.l4, v64.l5, v64.l6, v64.l7, v64.l8, v64.l9, v64.l10, v64.l11, v64.l12, v64.l13, v64.l14, v64.l15, v64.l16, v64.l17, v64.l18, v64.l19, v64.l20, v64.l21, v64.l22, v64.l23, v64.l24, v64.l25, v64.l26, v64.l27, v64.l28, v64.l29, v64.l30, v64.l31, v64.l32, v64.l33, v64.l34, v64.l35, v64.l36, v64.l37, v64.l38, v64.l39, v64.l40, v64.l41, v64.l42, v64.l43, v64.l44, v64.l45, v64.l46, v64.l47, v64.l48, v64.l49, v64.l50, v64.l51, v64.l52, v64.l53, v64.l54, v64.l55, v64.l56, v64.l57, v64.l58, v64.l59, v64.l60, v64.l61, v64.l62];
    const v99: US1 = patternInput_1[32];
    const v98: US1 = patternInput_1[31];
    const v97: US1 = patternInput_1[30];
    const v96: US8 = patternInput_1[29];
    const v95: US1 = patternInput_1[28];
    const v94_1: US1 = patternInput_1[27];
    const v93_1: US1 = patternInput_1[26];
    const v92_1: US8 = patternInput_1[25];
    const v91_1: US1 = patternInput_1[24];
    const v90_1: US1 = patternInput_1[23];
    const v89_1: US1 = patternInput_1[22];
    const v88_1: US1 = patternInput_1[21];
    const v87_1: US1 = patternInput_1[20];
    const v86_1: US4 = patternInput_1[19];
    const v85_1: US7 = patternInput_1[18];
    const v84_1: US1 = patternInput_1[17];
    const v83_1: US1 = patternInput_1[16];
    const v82_1: US1 = patternInput_1[15];
    const v81_1: US6 = patternInput_1[14];
    const v80_1: US4 = patternInput_1[13];
    const v79_1: US1 = patternInput_1[12];
    const v78_1: US1 = patternInput_1[11];
    const v76_1: US4 = patternInput_1[9];
    const v75_1: US1 = patternInput_1[8];
    const v74_1: US1 = patternInput_1[7];
    const v73_1: US1 = patternInput_1[6];
    const v72_1: US1 = patternInput_1[5];
    const v71_1: US1 = patternInput_1[4];
    const v70_1: US1 = patternInput_1[3];
    const v69_1: US3 = patternInput_1[2];
    const v68_1: US1 = patternInput_1[1];
    const v67_1: US1 = patternInput_1[0];
    const v129: US1 = patternInput_1[62];
    const v128: US0 = patternInput_1[61];
    const v127: US1 = patternInput_1[60];
    const v126: US6 = patternInput_1[59];
    const v125: US1 = patternInput_1[58];
    const v124: US1 = patternInput_1[57];
    const v123: US8 = patternInput_1[56];
    const v122: US1 = patternInput_1[55];
    const v121: US1 = patternInput_1[54];
    const v120: US1 = patternInput_1[53];
    const v119: US1 = patternInput_1[52];
    const v118: US1 = patternInput_1[51];
    const v117: US1 = patternInput_1[50];
    const v116: US1 = patternInput_1[49];
    const v115: US1 = patternInput_1[48];
    const v114: US1 = patternInput_1[47];
    const v113: US1 = patternInput_1[46];
    const v112: US1 = patternInput_1[45];
    const v111: US1 = patternInput_1[44];
    const v110: US1 = patternInput_1[43];
    const v109: US1 = patternInput_1[42];
    const v108: US1 = patternInput_1[41];
    const v107: US9 = patternInput_1[40];
    const v106: US10 = patternInput_1[39];
    const v105: US9 = patternInput_1[38];
    const v104: US1 = patternInput_1[37];
    const v103: US1 = patternInput_1[36];
    const v102: US1 = patternInput_1[35];
    const v101: US1 = patternInput_1[34];
    const v100: US1 = patternInput_1[33];
    const v130: () => any[] = (): any[] => closure53(void 0, void 0);
    [v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, v76_1, US5_US5_1(v130), v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129].children = v130;
    const v133: Mut2 = new Mut2(v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, v76_1, US5_US5_1(v130), v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129);
    const v135: (arg0: any) => any = v0_1;
    const v138: any = createComponent;
    return [v138(v135, v133)];
}

export function closure54(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut2) => any = (v: Mut2): any => closure48(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v64: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    v64.l24 = US1_US1_1("https://fc1943s.github.io/tictactoe_spiral");
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v64.l0, v64.l1, v64.l2, v64.l3, v64.l4, v64.l5, v64.l6, v64.l7, v64.l8, v64.l9, v64.l10, v64.l11, v64.l12, v64.l13, v64.l14, v64.l15, v64.l16, v64.l17, v64.l18, v64.l19, v64.l20, v64.l21, v64.l22, v64.l23, v64.l24, v64.l25, v64.l26, v64.l27, v64.l28, v64.l29, v64.l30, v64.l31, v64.l32, v64.l33, v64.l34, v64.l35, v64.l36, v64.l37, v64.l38, v64.l39, v64.l40, v64.l41, v64.l42, v64.l43, v64.l44, v64.l45, v64.l46, v64.l47, v64.l48, v64.l49, v64.l50, v64.l51, v64.l52, v64.l53, v64.l54, v64.l55, v64.l56, v64.l57, v64.l58, v64.l59, v64.l60, v64.l61, v64.l62];
    const v99: US1 = patternInput_1[32];
    const v98: US1 = patternInput_1[31];
    const v97: US1 = patternInput_1[30];
    const v96: US8 = patternInput_1[29];
    const v95: US1 = patternInput_1[28];
    const v94_1: US1 = patternInput_1[27];
    const v93_1: US1 = patternInput_1[26];
    const v92_1: US8 = patternInput_1[25];
    const v91_1: US1 = patternInput_1[24];
    const v90_1: US1 = patternInput_1[23];
    const v89_1: US1 = patternInput_1[22];
    const v88_1: US1 = patternInput_1[21];
    const v87_1: US1 = patternInput_1[20];
    const v86_1: US4 = patternInput_1[19];
    const v85_1: US7 = patternInput_1[18];
    const v84_1: US1 = patternInput_1[17];
    const v83_1: US1 = patternInput_1[16];
    const v82_1: US1 = patternInput_1[15];
    const v81_1: US6 = patternInput_1[14];
    const v80_1: US4 = patternInput_1[13];
    const v79_1: US1 = patternInput_1[12];
    const v78_1: US1 = patternInput_1[11];
    const v76_1: US4 = patternInput_1[9];
    const v75_1: US1 = patternInput_1[8];
    const v74_1: US1 = patternInput_1[7];
    const v73_1: US1 = patternInput_1[6];
    const v72_1: US1 = patternInput_1[5];
    const v71_1: US1 = patternInput_1[4];
    const v70_1: US1 = patternInput_1[3];
    const v69_1: US3 = patternInput_1[2];
    const v68_1: US1 = patternInput_1[1];
    const v67_1: US1 = patternInput_1[0];
    const v129: US1 = patternInput_1[62];
    const v128: US0 = patternInput_1[61];
    const v127: US1 = patternInput_1[60];
    const v126: US6 = patternInput_1[59];
    const v125: US1 = patternInput_1[58];
    const v124: US1 = patternInput_1[57];
    const v123: US8 = patternInput_1[56];
    const v122: US1 = patternInput_1[55];
    const v121: US1 = patternInput_1[54];
    const v120: US1 = patternInput_1[53];
    const v119: US1 = patternInput_1[52];
    const v118: US1 = patternInput_1[51];
    const v117: US1 = patternInput_1[50];
    const v116: US1 = patternInput_1[49];
    const v115: US1 = patternInput_1[48];
    const v114: US1 = patternInput_1[47];
    const v113: US1 = patternInput_1[46];
    const v112: US1 = patternInput_1[45];
    const v111: US1 = patternInput_1[44];
    const v110: US1 = patternInput_1[43];
    const v109: US1 = patternInput_1[42];
    const v108: US1 = patternInput_1[41];
    const v107: US9 = patternInput_1[40];
    const v106: US10 = patternInput_1[39];
    const v105: US9 = patternInput_1[38];
    const v104: US1 = patternInput_1[37];
    const v103: US1 = patternInput_1[36];
    const v102: US1 = patternInput_1[35];
    const v101: US1 = patternInput_1[34];
    const v100: US1 = patternInput_1[33];
    const v130: () => any[] = (): any[] => closure53(void 0, void 0);
    [v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, v76_1, US5_US5_1(v130), v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129].children = v130;
    const v133: Mut2 = new Mut2(v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, v76_1, US5_US5_1(v130), v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129);
    const v135: (arg0: any) => any = v0_1;
    const v138: any = createComponent;
    return [v138(v135, v133)];
}

export function closure55(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut2) => any = (v: Mut2): any => closure48(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v64: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    v64.l24 = US1_US1_1("https://fc1943s.github.io/tictactoe_spiral/docs");
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v64.l0, v64.l1, v64.l2, v64.l3, v64.l4, v64.l5, v64.l6, v64.l7, v64.l8, v64.l9, v64.l10, v64.l11, v64.l12, v64.l13, v64.l14, v64.l15, v64.l16, v64.l17, v64.l18, v64.l19, v64.l20, v64.l21, v64.l22, v64.l23, v64.l24, v64.l25, v64.l26, v64.l27, v64.l28, v64.l29, v64.l30, v64.l31, v64.l32, v64.l33, v64.l34, v64.l35, v64.l36, v64.l37, v64.l38, v64.l39, v64.l40, v64.l41, v64.l42, v64.l43, v64.l44, v64.l45, v64.l46, v64.l47, v64.l48, v64.l49, v64.l50, v64.l51, v64.l52, v64.l53, v64.l54, v64.l55, v64.l56, v64.l57, v64.l58, v64.l59, v64.l60, v64.l61, v64.l62];
    const v99: US1 = patternInput_1[32];
    const v98: US1 = patternInput_1[31];
    const v97: US1 = patternInput_1[30];
    const v96: US8 = patternInput_1[29];
    const v95: US1 = patternInput_1[28];
    const v94_1: US1 = patternInput_1[27];
    const v93_1: US1 = patternInput_1[26];
    const v92_1: US8 = patternInput_1[25];
    const v91_1: US1 = patternInput_1[24];
    const v90_1: US1 = patternInput_1[23];
    const v89_1: US1 = patternInput_1[22];
    const v88_1: US1 = patternInput_1[21];
    const v87_1: US1 = patternInput_1[20];
    const v86_1: US4 = patternInput_1[19];
    const v85_1: US7 = patternInput_1[18];
    const v84_1: US1 = patternInput_1[17];
    const v83_1: US1 = patternInput_1[16];
    const v82_1: US1 = patternInput_1[15];
    const v81_1: US6 = patternInput_1[14];
    const v80_1: US4 = patternInput_1[13];
    const v79_1: US1 = patternInput_1[12];
    const v78_1: US1 = patternInput_1[11];
    const v76_1: US4 = patternInput_1[9];
    const v75_1: US1 = patternInput_1[8];
    const v74_1: US1 = patternInput_1[7];
    const v73_1: US1 = patternInput_1[6];
    const v72_1: US1 = patternInput_1[5];
    const v71_1: US1 = patternInput_1[4];
    const v70_1: US1 = patternInput_1[3];
    const v69_1: US3 = patternInput_1[2];
    const v68_1: US1 = patternInput_1[1];
    const v67_1: US1 = patternInput_1[0];
    const v129: US1 = patternInput_1[62];
    const v128: US0 = patternInput_1[61];
    const v127: US1 = patternInput_1[60];
    const v126: US6 = patternInput_1[59];
    const v125: US1 = patternInput_1[58];
    const v124: US1 = patternInput_1[57];
    const v123: US8 = patternInput_1[56];
    const v122: US1 = patternInput_1[55];
    const v121: US1 = patternInput_1[54];
    const v120: US1 = patternInput_1[53];
    const v119: US1 = patternInput_1[52];
    const v118: US1 = patternInput_1[51];
    const v117: US1 = patternInput_1[50];
    const v116: US1 = patternInput_1[49];
    const v115: US1 = patternInput_1[48];
    const v114: US1 = patternInput_1[47];
    const v113: US1 = patternInput_1[46];
    const v112: US1 = patternInput_1[45];
    const v111: US1 = patternInput_1[44];
    const v110: US1 = patternInput_1[43];
    const v109: US1 = patternInput_1[42];
    const v108: US1 = patternInput_1[41];
    const v107: US9 = patternInput_1[40];
    const v106: US10 = patternInput_1[39];
    const v105: US9 = patternInput_1[38];
    const v104: US1 = patternInput_1[37];
    const v103: US1 = patternInput_1[36];
    const v102: US1 = patternInput_1[35];
    const v101: US1 = patternInput_1[34];
    const v100: US1 = patternInput_1[33];
    const v130: () => any[] = (): any[] => closure53(void 0, void 0);
    [v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, v76_1, US5_US5_1(v130), v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129].children = v130;
    const v133: Mut2 = new Mut2(v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, v76_1, US5_US5_1(v130), v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129);
    const v135: (arg0: any) => any = v0_1;
    const v138: any = createComponent;
    return [v138(v135, v133)];
}

export function closure46(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut3) => any = (v: Mut3): any => closure10(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v64: () => any[] = (): any[] => closure47(void 0, void 0);
    const v66_1: string = "1px 6px";
    const v71_1: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v64), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], US1_US1_1(v66_1), patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]), US12_US12_2());
    const v73_1: (arg0: any) => any = v0_1;
    const v76_1: any = createComponent;
    const v77_1: any = v76_1(v73_1, v71_1);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v141: () => any[] = (): any[] => closure54(void 0, void 0);
    const v147: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], US5_US5_1(v141), patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], US1_US1_1(v66_1), patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62]), US12_US12_2());
    const v149: (arg0: any) => any = v0_1;
    const v150: any = createComponent;
    const v151: any = v150(v149, v147);
    const patternInput_2: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v215: () => any[] = (): any[] => closure55(void 0, void 0);
    const v221: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], US5_US5_1(v215), patternInput_2[11], patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], US1_US1_1(v66_1), patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62]), US12_US12_2());
    const v223: (arg0: any) => any = v0_1;
    const v224: any = createComponent;
    return [v77_1, v151, v224(v223, v221)];
}

export function closure45(unitVar: void, v0_1: Mut2): any {
    const v1_1: (arg0: Mut2) => any = (v: Mut2): any => closure6(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v65_1: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v65_1.l0, v65_1.l1, v65_1.l2, v65_1.l3, v65_1.l4, v65_1.l5, v65_1.l6, v65_1.l7, v65_1.l8, v65_1.l9, v65_1.l10, v65_1.l11, v65_1.l12, v65_1.l13, v65_1.l14, v65_1.l15, v65_1.l16, v65_1.l17, v65_1.l18, v65_1.l19, v65_1.l20, v65_1.l21, v65_1.l22, v65_1.l23, v65_1.l24, v65_1.l25, v65_1.l26, v65_1.l27, v65_1.l28, v65_1.l29, v65_1.l30, v65_1.l31, v65_1.l32, v65_1.l33, v65_1.l34, v65_1.l35, v65_1.l36, v65_1.l37, v65_1.l38, v65_1.l39, v65_1.l40, v65_1.l41, v65_1.l42, v65_1.l43, v65_1.l44, v65_1.l45, v65_1.l46, v65_1.l47, v65_1.l48, v65_1.l49, v65_1.l50, v65_1.l51, v65_1.l52, v65_1.l53, v65_1.l54, v65_1.l55, v65_1.l56, v65_1.l57, v65_1.l58, v65_1.l59, v65_1.l60, v65_1.l61, v65_1.l62];
    const v99: US1 = patternInput_1[33];
    const v98: US1 = patternInput_1[32];
    const v97: US1 = patternInput_1[31];
    const v96: US1 = patternInput_1[30];
    const v95: US8 = patternInput_1[29];
    const v94_1: US1 = patternInput_1[28];
    const v93_1: US1 = patternInput_1[27];
    const v92_1: US1 = patternInput_1[26];
    const v91_1: US8 = patternInput_1[25];
    const v90_1: US1 = patternInput_1[24];
    const v89_1: US1 = patternInput_1[23];
    const v88_1: US1 = patternInput_1[22];
    const v87_1: US1 = patternInput_1[21];
    const v86_1: US1 = patternInput_1[20];
    const v85_1: US4 = patternInput_1[19];
    const v84_1: US7 = patternInput_1[18];
    const v83_1: US1 = patternInput_1[17];
    const v82_1: US1 = patternInput_1[16];
    const v81_1: US1 = patternInput_1[15];
    const v80_1: US6 = patternInput_1[14];
    const v79_1: US4 = patternInput_1[13];
    const v78_1: US1 = patternInput_1[12];
    const v77_1: US1 = patternInput_1[11];
    const v75_1: US4 = patternInput_1[9];
    const v74_1: US1 = patternInput_1[8];
    const v73_1: US1 = patternInput_1[7];
    const v72_1: US1 = patternInput_1[6];
    const v71_1: US1 = patternInput_1[5];
    const v70_1: US1 = patternInput_1[4];
    const v69_1: US1 = patternInput_1[3];
    const v68_1: US3 = patternInput_1[2];
    const v67_1: US1 = patternInput_1[1];
    const v66_1: US1 = patternInput_1[0];
    const v128: US1 = patternInput_1[62];
    const v127: US0 = patternInput_1[61];
    const v126: US1 = patternInput_1[60];
    const v125: US6 = patternInput_1[59];
    const v124: US1 = patternInput_1[58];
    const v123: US1 = patternInput_1[57];
    const v122: US8 = patternInput_1[56];
    const v121: US1 = patternInput_1[55];
    const v120: US1 = patternInput_1[54];
    const v119: US1 = patternInput_1[53];
    const v118: US1 = patternInput_1[52];
    const v117: US1 = patternInput_1[51];
    const v116: US1 = patternInput_1[50];
    const v115: US1 = patternInput_1[49];
    const v114: US1 = patternInput_1[48];
    const v113: US1 = patternInput_1[47];
    const v112: US1 = patternInput_1[46];
    const v111: US1 = patternInput_1[45];
    const v110: US1 = patternInput_1[44];
    const v109: US1 = patternInput_1[43];
    const v108: US1 = patternInput_1[42];
    const v107: US1 = patternInput_1[41];
    const v106: US9 = patternInput_1[40];
    const v105: US10 = patternInput_1[39];
    const v104: US9 = patternInput_1[38];
    const v103: US1 = patternInput_1[37];
    const v102: US1 = patternInput_1[36];
    const v101: US1 = patternInput_1[35];
    const v100: US1 = patternInput_1[34];
    const v129: () => any[] = (): any[] => closure46(void 0, void 0);
    [v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, US5_US5_1(v129), v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128].children = v129;
    const v132: Mut2 = new Mut2(v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, US5_US5_1(v129), v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128);
    const v134: (arg0: any) => any = v1_1;
    const v137: any = createComponent;
    return v137(v134, v132);
}

export function closure56(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure44(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut2) => any = (v: Mut2): any => closure45(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v64: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v64.l0, v64.l1, v64.l2, v64.l3, v64.l4, v64.l5, v64.l6, v64.l7, v64.l8, v64.l9, v64.l10, v64.l11, v64.l12, v64.l13, v64.l14, v64.l15, v64.l16, v64.l17, v64.l18, v64.l19, v64.l20, v64.l21, v64.l22, v64.l23, v64.l24, v64.l25, v64.l26, v64.l27, v64.l28, v64.l29, v64.l30, v64.l31, v64.l32, v64.l33, v64.l34, v64.l35, v64.l36, v64.l37, v64.l38, v64.l39, v64.l40, v64.l41, v64.l42, v64.l43, v64.l44, v64.l45, v64.l46, v64.l47, v64.l48, v64.l49, v64.l50, v64.l51, v64.l52, v64.l53, v64.l54, v64.l55, v64.l56, v64.l57, v64.l58, v64.l59, v64.l60, v64.l61, v64.l62];
    const v99: US1 = patternInput_1[34];
    const v98: US1 = patternInput_1[33];
    const v97: US1 = patternInput_1[32];
    const v96: US1 = patternInput_1[31];
    const v95: US1 = patternInput_1[30];
    const v94_1: US8 = patternInput_1[29];
    const v93_1: US1 = patternInput_1[28];
    const v92_1: US1 = patternInput_1[27];
    const v91_1: US1 = patternInput_1[26];
    const v90_1: US8 = patternInput_1[25];
    const v89_1: US1 = patternInput_1[24];
    const v88_1: US1 = patternInput_1[23];
    const v87_1: US1 = patternInput_1[22];
    const v86_1: US1 = patternInput_1[21];
    const v85_1: US1 = patternInput_1[20];
    const v84_1: US4 = patternInput_1[19];
    const v83_1: US7 = patternInput_1[18];
    const v82_1: US1 = patternInput_1[17];
    const v81_1: US1 = patternInput_1[16];
    const v80_1: US1 = patternInput_1[15];
    const v79_1: US6 = patternInput_1[14];
    const v78_1: US4 = patternInput_1[13];
    const v77_1: US1 = patternInput_1[12];
    const v76_1: US1 = patternInput_1[11];
    const v74_1: US4 = patternInput_1[9];
    const v73_1: US1 = patternInput_1[8];
    const v72_1: US1 = patternInput_1[7];
    const v71_1: US1 = patternInput_1[6];
    const v70_1: US1 = patternInput_1[5];
    const v69_1: US1 = patternInput_1[4];
    const v68_1: US1 = patternInput_1[3];
    const v67_1: US3 = patternInput_1[2];
    const v66_1: US1 = patternInput_1[1];
    const v65_1: US1 = patternInput_1[0];
    const v127: US1 = patternInput_1[62];
    const v126: US0 = patternInput_1[61];
    const v125: US1 = patternInput_1[60];
    const v124: US6 = patternInput_1[59];
    const v123: US1 = patternInput_1[58];
    const v122: US1 = patternInput_1[57];
    const v121: US8 = patternInput_1[56];
    const v120: US1 = patternInput_1[55];
    const v119: US1 = patternInput_1[54];
    const v118: US1 = patternInput_1[53];
    const v117: US1 = patternInput_1[52];
    const v116: US1 = patternInput_1[51];
    const v115: US1 = patternInput_1[50];
    const v114: US1 = patternInput_1[49];
    const v113: US1 = patternInput_1[48];
    const v112: US1 = patternInput_1[47];
    const v111: US1 = patternInput_1[46];
    const v110: US1 = patternInput_1[45];
    const v109: US1 = patternInput_1[44];
    const v108: US1 = patternInput_1[43];
    const v107: US1 = patternInput_1[42];
    const v106: US1 = patternInput_1[41];
    const v105: US9 = patternInput_1[40];
    const v104: US10 = patternInput_1[39];
    const v103: US9 = patternInput_1[38];
    const v102: US1 = patternInput_1[37];
    const v101: US1 = patternInput_1[36];
    const v100: US1 = patternInput_1[35];
    const v128: () => any[] = (): any[] => closure56(void 0, void 0);
    [v65_1, v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, US5_US5_1(v128), v76_1, v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127].children = v128;
    const v131: Mut2 = new Mut2(v65_1, v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, US5_US5_1(v128), v76_1, v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127);
    const v133: (arg0: any) => any = v0_1;
    const v136: any = createComponent;
    return [v136(v133, v131)];
}

export function closure63(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Dark
    </>];
}

export function closure64(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Light
    </>];
}

export function closure62(unitVar: void, unitVar_1: void): any[] {
    const v2: any = Radio;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v68_1: () => any[] = (): any[] => closure63(void 0, void 0);
    const v70_1: string = "neutral";
    const v72_1: string = "sm";
    const v76_1: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v68_1), patternInput[11], US1_US1_1(v70_1), patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], US1_US1_1(v72_1), patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], US6_US6_1("dark"), patternInput[60], patternInput[61], patternInput[62]));
    const v77_1: (arg0: any) => any = v2;
    const v80_1: any = createComponent;
    const v81_1: any = v80_1(v77_1, v76_1);
    const v82_1: any = Radio;
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v148: () => any[] = (): any[] => closure64(void 0, void 0);
    const v154: any = createObj(method5(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], US5_US5_1(v148), patternInput_1[11], US1_US1_1(v70_1), patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], US1_US1_1(v72_1), patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], US6_US6_1("light"), patternInput_1[60], patternInput_1[61], patternInput_1[62]));
    const v155: (arg0: any) => any = v82_1;
    const v156: any = createComponent;
    return [v81_1, v156(v155, v154)];
}

export function closure61(unitVar: void, unitVar_1: void): any[] {
    const v2: any = Stack;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v66_1: () => any[] = (): any[] => closure62(void 0, void 0);
    const v73_1: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v66_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], US1_US1_1("row"), patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], US1_US1_1("$4"), patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]));
    const v74_1: (arg0: any) => any = v2;
    const v77_1: any = createComponent;
    return [v77_1(v74_1, v73_1)];
}

export function closure65(v0_1: () => void, v1_1: any): void {
    v0_1();
}

export function closure60(v0_1: () => void, v1_1: () => string, unitVar: void): any[] {
    const v4: any = RadioGroup;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v69_1: () => any[] = (): any[] => closure61(void 0, void 0);
    const v72_1: (arg0: any) => void = (v: any): void => {
        closure65(v0_1, v);
    };
    const v75_1: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v69_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], US1_US1_1(v1_1()), patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], US9_US9_1(v72_1), patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]));
    const v76_1: (arg0: any) => any = v4;
    const v79_1: any = createComponent;
    return [v79_1(v76_1, v75_1)];
}

export function closure59(v0_1: () => void, v1_1: () => string, unitVar: void): any[] {
    const v2: (arg0: Mut3) => any = (v: Mut3): any => closure10(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v68_1: () => any[] = (): any[] => closure60(v0_1, v1_1, void 0);
    const v76_1: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v68_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], US1_US1_1("5px 6px"), patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], US8_US8_1(<>
        Theme
    </>), patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]), US12_US12_2());
    const v78_1: (arg0: any) => any = v2;
    const v81_1: any = createComponent;
    return [v81_1(v78_1, v76_1)];
}

export function closure58(unitVar: void, v0_1: Mut2): any {
    const v3: any = useColorMode;
    const v4: any = v3();
    const v5: () => string = v4.colorMode;
    const v6: () => void = v4.toggleColorMode;
    const v7: (arg0: Mut2) => any = (v: Mut2): any => closure6(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v71_1: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v71_1.l0, v71_1.l1, v71_1.l2, v71_1.l3, v71_1.l4, v71_1.l5, v71_1.l6, v71_1.l7, v71_1.l8, v71_1.l9, v71_1.l10, v71_1.l11, v71_1.l12, v71_1.l13, v71_1.l14, v71_1.l15, v71_1.l16, v71_1.l17, v71_1.l18, v71_1.l19, v71_1.l20, v71_1.l21, v71_1.l22, v71_1.l23, v71_1.l24, v71_1.l25, v71_1.l26, v71_1.l27, v71_1.l28, v71_1.l29, v71_1.l30, v71_1.l31, v71_1.l32, v71_1.l33, v71_1.l34, v71_1.l35, v71_1.l36, v71_1.l37, v71_1.l38, v71_1.l39, v71_1.l40, v71_1.l41, v71_1.l42, v71_1.l43, v71_1.l44, v71_1.l45, v71_1.l46, v71_1.l47, v71_1.l48, v71_1.l49, v71_1.l50, v71_1.l51, v71_1.l52, v71_1.l53, v71_1.l54, v71_1.l55, v71_1.l56, v71_1.l57, v71_1.l58, v71_1.l59, v71_1.l60, v71_1.l61, v71_1.l62];
    const v99: US1 = patternInput_1[27];
    const v98: US1 = patternInput_1[26];
    const v97: US8 = patternInput_1[25];
    const v96: US1 = patternInput_1[24];
    const v95: US1 = patternInput_1[23];
    const v94_1: US1 = patternInput_1[22];
    const v93_1: US1 = patternInput_1[21];
    const v92_1: US1 = patternInput_1[20];
    const v91_1: US4 = patternInput_1[19];
    const v90_1: US7 = patternInput_1[18];
    const v89_1: US1 = patternInput_1[17];
    const v88_1: US1 = patternInput_1[16];
    const v87_1: US1 = patternInput_1[15];
    const v86_1: US6 = patternInput_1[14];
    const v85_1: US4 = patternInput_1[13];
    const v84_1: US1 = patternInput_1[12];
    const v83_1: US1 = patternInput_1[11];
    const v81_1: US4 = patternInput_1[9];
    const v80_1: US1 = patternInput_1[8];
    const v79_1: US1 = patternInput_1[7];
    const v78_1: US1 = patternInput_1[6];
    const v77_1: US1 = patternInput_1[5];
    const v76_1: US1 = patternInput_1[4];
    const v75_1: US1 = patternInput_1[3];
    const v74_1: US3 = patternInput_1[2];
    const v73_1: US1 = patternInput_1[1];
    const v72_1: US1 = patternInput_1[0];
    const v134: US1 = patternInput_1[62];
    const v133: US0 = patternInput_1[61];
    const v132: US1 = patternInput_1[60];
    const v131: US6 = patternInput_1[59];
    const v130: US1 = patternInput_1[58];
    const v129: US1 = patternInput_1[57];
    const v128: US8 = patternInput_1[56];
    const v127: US1 = patternInput_1[55];
    const v126: US1 = patternInput_1[54];
    const v125: US1 = patternInput_1[53];
    const v124: US1 = patternInput_1[52];
    const v123: US1 = patternInput_1[51];
    const v122: US1 = patternInput_1[50];
    const v121: US1 = patternInput_1[49];
    const v120: US1 = patternInput_1[48];
    const v119: US1 = patternInput_1[47];
    const v118: US1 = patternInput_1[46];
    const v117: US1 = patternInput_1[45];
    const v116: US1 = patternInput_1[44];
    const v115: US1 = patternInput_1[43];
    const v114: US1 = patternInput_1[42];
    const v113: US1 = patternInput_1[41];
    const v112: US9 = patternInput_1[40];
    const v111: US10 = patternInput_1[39];
    const v110: US9 = patternInput_1[38];
    const v109: US1 = patternInput_1[37];
    const v108: US1 = patternInput_1[36];
    const v107: US1 = patternInput_1[35];
    const v106: US1 = patternInput_1[34];
    const v105: US1 = patternInput_1[33];
    const v104: US1 = patternInput_1[32];
    const v103: US1 = patternInput_1[31];
    const v102: US1 = patternInput_1[30];
    const v101: US8 = patternInput_1[29];
    const v100: US1 = patternInput_1[28];
    const v135: () => any[] = (): any[] => closure59(v6, v5, void 0);
    [v72_1, v73_1, v74_1, v75_1, v76_1, v77_1, v78_1, v79_1, v80_1, v81_1, US5_US5_1(v135), v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129, v130, v131, v132, v133, v134].children = v135;
    const v138: Mut2 = new Mut2(v72_1, v73_1, v74_1, v75_1, v76_1, v77_1, v78_1, v79_1, v80_1, v81_1, US5_US5_1(v135), v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129, v130, v131, v132, v133, v134);
    const v140: (arg0: any) => any = v7;
    const v143: any = createComponent;
    return v143(v140, v138);
}

export function closure66(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure57(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut2) => any = (v: Mut2): any => closure58(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v64: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v64.l0, v64.l1, v64.l2, v64.l3, v64.l4, v64.l5, v64.l6, v64.l7, v64.l8, v64.l9, v64.l10, v64.l11, v64.l12, v64.l13, v64.l14, v64.l15, v64.l16, v64.l17, v64.l18, v64.l19, v64.l20, v64.l21, v64.l22, v64.l23, v64.l24, v64.l25, v64.l26, v64.l27, v64.l28, v64.l29, v64.l30, v64.l31, v64.l32, v64.l33, v64.l34, v64.l35, v64.l36, v64.l37, v64.l38, v64.l39, v64.l40, v64.l41, v64.l42, v64.l43, v64.l44, v64.l45, v64.l46, v64.l47, v64.l48, v64.l49, v64.l50, v64.l51, v64.l52, v64.l53, v64.l54, v64.l55, v64.l56, v64.l57, v64.l58, v64.l59, v64.l60, v64.l61, v64.l62];
    const v99: US1 = patternInput_1[34];
    const v98: US1 = patternInput_1[33];
    const v97: US1 = patternInput_1[32];
    const v96: US1 = patternInput_1[31];
    const v95: US1 = patternInput_1[30];
    const v94_1: US8 = patternInput_1[29];
    const v93_1: US1 = patternInput_1[28];
    const v92_1: US1 = patternInput_1[27];
    const v91_1: US1 = patternInput_1[26];
    const v90_1: US8 = patternInput_1[25];
    const v89_1: US1 = patternInput_1[24];
    const v88_1: US1 = patternInput_1[23];
    const v87_1: US1 = patternInput_1[22];
    const v86_1: US1 = patternInput_1[21];
    const v85_1: US1 = patternInput_1[20];
    const v84_1: US4 = patternInput_1[19];
    const v83_1: US7 = patternInput_1[18];
    const v82_1: US1 = patternInput_1[17];
    const v81_1: US1 = patternInput_1[16];
    const v80_1: US1 = patternInput_1[15];
    const v79_1: US6 = patternInput_1[14];
    const v78_1: US4 = patternInput_1[13];
    const v77_1: US1 = patternInput_1[12];
    const v76_1: US1 = patternInput_1[11];
    const v74_1: US4 = patternInput_1[9];
    const v73_1: US1 = patternInput_1[8];
    const v72_1: US1 = patternInput_1[7];
    const v71_1: US1 = patternInput_1[6];
    const v70_1: US1 = patternInput_1[5];
    const v69_1: US1 = patternInput_1[4];
    const v68_1: US1 = patternInput_1[3];
    const v67_1: US3 = patternInput_1[2];
    const v66_1: US1 = patternInput_1[1];
    const v65_1: US1 = patternInput_1[0];
    const v127: US1 = patternInput_1[62];
    const v126: US0 = patternInput_1[61];
    const v125: US1 = patternInput_1[60];
    const v124: US6 = patternInput_1[59];
    const v123: US1 = patternInput_1[58];
    const v122: US1 = patternInput_1[57];
    const v121: US8 = patternInput_1[56];
    const v120: US1 = patternInput_1[55];
    const v119: US1 = patternInput_1[54];
    const v118: US1 = patternInput_1[53];
    const v117: US1 = patternInput_1[52];
    const v116: US1 = patternInput_1[51];
    const v115: US1 = patternInput_1[50];
    const v114: US1 = patternInput_1[49];
    const v113: US1 = patternInput_1[48];
    const v112: US1 = patternInput_1[47];
    const v111: US1 = patternInput_1[46];
    const v110: US1 = patternInput_1[45];
    const v109: US1 = patternInput_1[44];
    const v108: US1 = patternInput_1[43];
    const v107: US1 = patternInput_1[42];
    const v106: US1 = patternInput_1[41];
    const v105: US9 = patternInput_1[40];
    const v104: US10 = patternInput_1[39];
    const v103: US9 = patternInput_1[38];
    const v102: US1 = patternInput_1[37];
    const v101: US1 = patternInput_1[36];
    const v100: US1 = patternInput_1[35];
    const v128: () => any[] = (): any[] => closure66(void 0, void 0);
    [v65_1, v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, US5_US5_1(v128), v76_1, v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127].children = v128;
    const v131: Mut2 = new Mut2(v65_1, v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, US5_US5_1(v128), v76_1, v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127);
    const v133: (arg0: any) => any = v0_1;
    const v136: any = createComponent;
    return [v136(v133, v131)];
}

export function closure75(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure76(v0_1: Mut7, v1_1: Mut1, v2: any, v3: any): void {
    const v4: string = v3.currentTarget.value;
    const v7: Mut1 = createObj(fill(new Array(0), 0, 0, null));
    v0_1.l1(v1_1, v7, US1_US1_1(v4));
    v2("set", v7);
}

export function closure74(unitVar: void, v0_1: Mut7): any {
    const v3: any = useStoreon;
    const v4: any[] = v3();
    const v5: Mut1 = v4[0];
    const v6: any = v4[1];
    const v9: any = Input;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v74_1: US1 = v0_1.l0(v5);
    const v75_1: string = void 0;
    const v79_1: () => any[] = (): any[] => closure75(void 0, void 0);
    const v81_1: (arg0: any) => void = (v: any): void => {
        closure76(v0_1, v5, v6, v);
    };
    const v89_1: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v79_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], US9_US9_1(v81_1), patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], US1_US1_1("xs"), patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], US1_US1_1("text"), US6_US6_1((v74_1.tag === US1_Tag.US1_1) ? v74_1.fields[0] : v75_1), patternInput[60], patternInput[61], patternInput[62]));
    const v90_1: (arg0: any) => any = v9;
    const v93_1: any = createComponent;
    return v93_1(v90_1, v89_1);
}

export function closure77(unitVar: void, v0_1: Mut1): US1 {
    return v0_1.l2;
}

export function closure80(v0_1: Mut1, v1_1: US1): void {
    v0_1.l2 = v1_1;
}

export function closure79(unitVar: void, v0_1: Mut1): (arg0: US1) => void {
    return (v: US1): void => {
        closure80(v0_1, v);
    };
}

export function closure78(unitVar: void, v0_1: Mut1): (arg0: Mut1, arg1: US1) => void {
    return (v: Mut1): (arg0: US1) => void => closure79(void 0, v);
}

export function closure73(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut7) => any = (v: Mut7): any => closure74(void 0, v);
    const v1_1: (arg0: Mut1) => US1 = (v_1: Mut1): US1 => closure77(void 0, v_1);
    const v2: (arg0: Mut1, arg1: Mut1, arg2: US1) => void = (v_2: Mut1): (arg0: Mut1, arg1: US1) => void => closure78(void 0, v_2);
    const v3: Mut7 = new Mut7(v1_1, uncurry(3, v2));
    const v5: (arg0: any) => any = v0_1;
    const v8: any = createComponent;
    return [v8(v5, v3)];
}

export function closure82(unitVar: void, v0_1: Mut1): US1 {
    return v0_1.l3;
}

export function closure85(v0_1: Mut1, v1_1: US1): void {
    v0_1.l3 = v1_1;
}

export function closure84(unitVar: void, v0_1: Mut1): (arg0: US1) => void {
    return (v: US1): void => {
        closure85(v0_1, v);
    };
}

export function closure83(unitVar: void, v0_1: Mut1): (arg0: Mut1, arg1: US1) => void {
    return (v: Mut1): (arg0: US1) => void => closure84(void 0, v);
}

export function closure81(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut7) => any = (v: Mut7): any => closure74(void 0, v);
    const v1_1: (arg0: Mut1) => US1 = (v_1: Mut1): US1 => closure82(void 0, v_1);
    const v2: (arg0: Mut1, arg1: Mut1, arg2: US1) => void = (v_2: Mut1): (arg0: Mut1, arg1: US1) => void => closure83(void 0, v_2);
    const v3: Mut7 = new Mut7(v1_1, uncurry(3, v2));
    const v5: (arg0: any) => any = v0_1;
    const v8: any = createComponent;
    return [v8(v5, v3)];
}

export function closure88(v0_1: Mut8, v1_1: Mut1, v2: any, v3: any): void {
    const v4: int32 = v3.currentTarget.value | 0;
    const v7: Mut1 = createObj(fill(new Array(0), 0, 0, null));
    v0_1.l1(v1_1, v7, US0_US0_1(v4));
    v2("set", v7);
}

export function closure87(unitVar: void, v0_1: Mut8): any {
    const v3: any = useStoreon;
    const v4: any[] = v3();
    const v5: Mut1 = v4[0];
    const v6: any = v4[1];
    const v9: any = Input;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v74_1: US0 = v0_1.l0(v5);
    const v75_1: int32 = (void 0) | 0;
    const v79_1: () => any[] = (): any[] => closure75(void 0, void 0);
    const v81_1: (arg0: any) => void = (v: any): void => {
        closure88(v0_1, v5, v6, v);
    };
    const v89_1: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v79_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], US9_US9_1(v81_1), patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], US1_US1_1("xs"), patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], US1_US1_1("text"), US6_US6_1((v74_1.tag === US0_Tag.US0_1) ? v74_1.fields[0] : v75_1), patternInput[60], patternInput[61], patternInput[62]));
    const v90_1: (arg0: any) => any = v9;
    const v93_1: any = createComponent;
    return v93_1(v90_1, v89_1);
}

export function closure89(unitVar: void, v0_1: Mut1): US0 {
    return v0_1.l1;
}

export function closure92(v0_1: Mut1, v1_1: US0): void {
    v0_1.l1 = v1_1;
}

export function closure91(unitVar: void, v0_1: Mut1): (arg0: US0) => void {
    return (v: US0): void => {
        closure92(v0_1, v);
    };
}

export function closure90(unitVar: void, v0_1: Mut1): (arg0: Mut1, arg1: US0) => void {
    return (v: Mut1): (arg0: US0) => void => closure91(void 0, v);
}

export function closure86(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut8) => any = (v: Mut8): any => closure87(void 0, v);
    const v1_1: (arg0: Mut1) => US0 = (v_1: Mut1): US0 => closure89(void 0, v_1);
    const v2: (arg0: Mut1, arg1: Mut1, arg2: US0) => void = (v_2: Mut1): (arg0: Mut1, arg1: US0) => void => closure90(void 0, v_2);
    const v3: Mut8 = new Mut8(v1_1, uncurry(3, v2));
    const v5: (arg0: any) => any = v0_1;
    const v8: any = createComponent;
    return [v8(v5, v3)];
}

export function closure72(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut3) => any = (v: Mut3): any => closure10(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v66_1: () => any[] = (): any[] => closure73(void 0, void 0);
    const v68_1: string = "3px";
    const v74_1: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v66_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], US1_US1_1(v68_1), patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], US8_US8_1(<>
        Token
    </>), patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]), US12_US12_2());
    const v76_1: (arg0: any) => any = v0_1;
    const v79_1: any = createComponent;
    const v80_1: any = v79_1(v76_1, v74_1);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v146: () => any[] = (): any[] => closure81(void 0, void 0);
    const v153: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], US5_US5_1(v146), patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], US1_US1_1(v68_1), patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], US8_US8_1(<>
        URL
    </>), patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62]), US12_US12_2());
    const v155: (arg0: any) => any = v0_1;
    const v156: any = createComponent;
    const v157: any = v156(v155, v153);
    const patternInput_2: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v223: () => any[] = (): any[] => closure86(void 0, void 0);
    const v230: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], US5_US5_1(v223), patternInput_2[11], patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], US1_US1_1(v68_1), patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], US8_US8_1(<>
        Port
    </>), patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62]), US12_US12_2());
    const v232: (arg0: any) => any = v0_1;
    const v233: any = createComponent;
    return [v80_1, v157, v233(v232, v230)];
}

export function closure71(unitVar: void, v0_1: Mut2): any {
    const v1_1: (arg0: Mut2) => any = (v: Mut2): any => closure6(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v65_1: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v65_1.l0, v65_1.l1, v65_1.l2, v65_1.l3, v65_1.l4, v65_1.l5, v65_1.l6, v65_1.l7, v65_1.l8, v65_1.l9, v65_1.l10, v65_1.l11, v65_1.l12, v65_1.l13, v65_1.l14, v65_1.l15, v65_1.l16, v65_1.l17, v65_1.l18, v65_1.l19, v65_1.l20, v65_1.l21, v65_1.l22, v65_1.l23, v65_1.l24, v65_1.l25, v65_1.l26, v65_1.l27, v65_1.l28, v65_1.l29, v65_1.l30, v65_1.l31, v65_1.l32, v65_1.l33, v65_1.l34, v65_1.l35, v65_1.l36, v65_1.l37, v65_1.l38, v65_1.l39, v65_1.l40, v65_1.l41, v65_1.l42, v65_1.l43, v65_1.l44, v65_1.l45, v65_1.l46, v65_1.l47, v65_1.l48, v65_1.l49, v65_1.l50, v65_1.l51, v65_1.l52, v65_1.l53, v65_1.l54, v65_1.l55, v65_1.l56, v65_1.l57, v65_1.l58, v65_1.l59, v65_1.l60, v65_1.l61, v65_1.l62];
    const v99: US1 = patternInput_1[33];
    const v98: US1 = patternInput_1[32];
    const v97: US1 = patternInput_1[31];
    const v96: US1 = patternInput_1[30];
    const v95: US8 = patternInput_1[29];
    const v94_1: US1 = patternInput_1[28];
    const v93_1: US1 = patternInput_1[27];
    const v92_1: US1 = patternInput_1[26];
    const v91_1: US8 = patternInput_1[25];
    const v90_1: US1 = patternInput_1[24];
    const v89_1: US1 = patternInput_1[23];
    const v88_1: US1 = patternInput_1[22];
    const v87_1: US1 = patternInput_1[21];
    const v86_1: US1 = patternInput_1[20];
    const v85_1: US4 = patternInput_1[19];
    const v84_1: US7 = patternInput_1[18];
    const v83_1: US1 = patternInput_1[17];
    const v82_1: US1 = patternInput_1[16];
    const v81_1: US1 = patternInput_1[15];
    const v80_1: US6 = patternInput_1[14];
    const v79_1: US4 = patternInput_1[13];
    const v78_1: US1 = patternInput_1[12];
    const v77_1: US1 = patternInput_1[11];
    const v75_1: US4 = patternInput_1[9];
    const v74_1: US1 = patternInput_1[8];
    const v73_1: US1 = patternInput_1[7];
    const v72_1: US1 = patternInput_1[6];
    const v71_1: US1 = patternInput_1[5];
    const v70_1: US1 = patternInput_1[4];
    const v69_1: US1 = patternInput_1[3];
    const v68_1: US3 = patternInput_1[2];
    const v67_1: US1 = patternInput_1[1];
    const v66_1: US1 = patternInput_1[0];
    const v128: US1 = patternInput_1[62];
    const v127: US0 = patternInput_1[61];
    const v126: US1 = patternInput_1[60];
    const v125: US6 = patternInput_1[59];
    const v124: US1 = patternInput_1[58];
    const v123: US1 = patternInput_1[57];
    const v122: US8 = patternInput_1[56];
    const v121: US1 = patternInput_1[55];
    const v120: US1 = patternInput_1[54];
    const v119: US1 = patternInput_1[53];
    const v118: US1 = patternInput_1[52];
    const v117: US1 = patternInput_1[51];
    const v116: US1 = patternInput_1[50];
    const v115: US1 = patternInput_1[49];
    const v114: US1 = patternInput_1[48];
    const v113: US1 = patternInput_1[47];
    const v112: US1 = patternInput_1[46];
    const v111: US1 = patternInput_1[45];
    const v110: US1 = patternInput_1[44];
    const v109: US1 = patternInput_1[43];
    const v108: US1 = patternInput_1[42];
    const v107: US1 = patternInput_1[41];
    const v106: US9 = patternInput_1[40];
    const v105: US10 = patternInput_1[39];
    const v104: US9 = patternInput_1[38];
    const v103: US1 = patternInput_1[37];
    const v102: US1 = patternInput_1[36];
    const v101: US1 = patternInput_1[35];
    const v100: US1 = patternInput_1[34];
    const v129: () => any[] = (): any[] => closure72(void 0, void 0);
    [v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, US5_US5_1(v129), v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128].children = v129;
    const v132: Mut2 = new Mut2(v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, US5_US5_1(v129), v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128);
    const v134: (arg0: any) => any = v1_1;
    const v137: any = createComponent;
    return v137(v134, v132);
}

export function closure93(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure70(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut2) => any = (v: Mut2): any => closure71(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v64: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v64.l0, v64.l1, v64.l2, v64.l3, v64.l4, v64.l5, v64.l6, v64.l7, v64.l8, v64.l9, v64.l10, v64.l11, v64.l12, v64.l13, v64.l14, v64.l15, v64.l16, v64.l17, v64.l18, v64.l19, v64.l20, v64.l21, v64.l22, v64.l23, v64.l24, v64.l25, v64.l26, v64.l27, v64.l28, v64.l29, v64.l30, v64.l31, v64.l32, v64.l33, v64.l34, v64.l35, v64.l36, v64.l37, v64.l38, v64.l39, v64.l40, v64.l41, v64.l42, v64.l43, v64.l44, v64.l45, v64.l46, v64.l47, v64.l48, v64.l49, v64.l50, v64.l51, v64.l52, v64.l53, v64.l54, v64.l55, v64.l56, v64.l57, v64.l58, v64.l59, v64.l60, v64.l61, v64.l62];
    const v99: US1 = patternInput_1[34];
    const v98: US1 = patternInput_1[33];
    const v97: US1 = patternInput_1[32];
    const v96: US1 = patternInput_1[31];
    const v95: US1 = patternInput_1[30];
    const v94_1: US8 = patternInput_1[29];
    const v93_1: US1 = patternInput_1[28];
    const v92_1: US1 = patternInput_1[27];
    const v91_1: US1 = patternInput_1[26];
    const v90_1: US8 = patternInput_1[25];
    const v89_1: US1 = patternInput_1[24];
    const v88_1: US1 = patternInput_1[23];
    const v87_1: US1 = patternInput_1[22];
    const v86_1: US1 = patternInput_1[21];
    const v85_1: US1 = patternInput_1[20];
    const v84_1: US4 = patternInput_1[19];
    const v83_1: US7 = patternInput_1[18];
    const v82_1: US1 = patternInput_1[17];
    const v81_1: US1 = patternInput_1[16];
    const v80_1: US1 = patternInput_1[15];
    const v79_1: US6 = patternInput_1[14];
    const v78_1: US4 = patternInput_1[13];
    const v77_1: US1 = patternInput_1[12];
    const v76_1: US1 = patternInput_1[11];
    const v74_1: US4 = patternInput_1[9];
    const v73_1: US1 = patternInput_1[8];
    const v72_1: US1 = patternInput_1[7];
    const v71_1: US1 = patternInput_1[6];
    const v70_1: US1 = patternInput_1[5];
    const v69_1: US1 = patternInput_1[4];
    const v68_1: US1 = patternInput_1[3];
    const v67_1: US3 = patternInput_1[2];
    const v66_1: US1 = patternInput_1[1];
    const v65_1: US1 = patternInput_1[0];
    const v127: US1 = patternInput_1[62];
    const v126: US0 = patternInput_1[61];
    const v125: US1 = patternInput_1[60];
    const v124: US6 = patternInput_1[59];
    const v123: US1 = patternInput_1[58];
    const v122: US1 = patternInput_1[57];
    const v121: US8 = patternInput_1[56];
    const v120: US1 = patternInput_1[55];
    const v119: US1 = patternInput_1[54];
    const v118: US1 = patternInput_1[53];
    const v117: US1 = patternInput_1[52];
    const v116: US1 = patternInput_1[51];
    const v115: US1 = patternInput_1[50];
    const v114: US1 = patternInput_1[49];
    const v113: US1 = patternInput_1[48];
    const v112: US1 = patternInput_1[47];
    const v111: US1 = patternInput_1[46];
    const v110: US1 = patternInput_1[45];
    const v109: US1 = patternInput_1[44];
    const v108: US1 = patternInput_1[43];
    const v107: US1 = patternInput_1[42];
    const v106: US1 = patternInput_1[41];
    const v105: US9 = patternInput_1[40];
    const v104: US10 = patternInput_1[39];
    const v103: US9 = patternInput_1[38];
    const v102: US1 = patternInput_1[37];
    const v101: US1 = patternInput_1[36];
    const v100: US1 = patternInput_1[35];
    const v128: () => any[] = (): any[] => closure93(void 0, void 0);
    [v65_1, v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, US5_US5_1(v128), v76_1, v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127].children = v128;
    const v131: Mut2 = new Mut2(v65_1, v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, US5_US5_1(v128), v76_1, v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127);
    const v133: (arg0: any) => any = v0_1;
    const v136: any = createComponent;
    return [v136(v133, v131)];
}

export function closure101(v0_1: string, v1_1: string, v2: string, v3: string, v4: Mut1): US1 {
    return US1_US1_1(v0_1);
}

export function closure104(v0_1: string, v1_1: string, v2: string, v3: string, v4: Mut1, v5: Mut1, v6: US1): void {
    const v7: [string, string, string, string][] = v4.l0;
    const v11: int32 = v7.length | 0;
    const v12: [string, string, string, string][] = fill(new Array(v11), 0, v11, null);
    const v13: Mut5 = new Mut5(0);
    while (method12(v11, v13)) {
        const v15: int32 = v13.l0 | 0;
        const patternInput_1: [string, string, string, string] = v7[v15];
        const v19: string = patternInput_1[3];
        const v18: string = patternInput_1[2];
        const v17: string = patternInput_1[1];
        const patternInput_2: [string, string, string, string] = (v17 === v1_1) ? [(v6.tag === US1_Tag.US1_1) ? v6.fields[0] : "", v17, v18, v19] : [patternInput_1[0], v17, v18, v19];
        v12[v15] = [patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3]];
        const v28: int32 = (v15 + 1) | 0;
        v13.l0 = (v28 | 0);
    }
    v5.l0 = v12;
}

export function closure103(v0_1: string, v1_1: string, v2: string, v3: string, v4: Mut1, v5: Mut1): (arg0: US1) => void {
    return (v: US1): void => {
        closure104(v0_1, v1_1, v2, v3, v4, v5, v);
    };
}

export function closure102(v0_1: string, v1_1: string, v2: string, v3: string, v4: Mut1): (arg0: Mut1, arg1: US1) => void {
    return (v: Mut1): (arg0: US1) => void => closure103(v0_1, v1_1, v2, v3, v4, v);
}

export function closure100(v0_1: string, v1_1: string, v2: string, v3: string, unitVar: void): any[] {
    const v4: (arg0: Mut7) => any = (v: Mut7): any => closure74(void 0, v);
    const v5: (arg0: Mut1) => US1 = (v_1: Mut1): US1 => closure101(v0_1, v1_1, v2, v3, v_1);
    const v6: (arg0: Mut1, arg1: Mut1, arg2: US1) => void = (v_2: Mut1): (arg0: Mut1, arg1: US1) => void => closure102(v0_1, v1_1, v2, v3, v_2);
    const v7: Mut7 = new Mut7(v5, uncurry(3, v6));
    const v9: (arg0: any) => any = v4;
    const v12: any = createComponent;
    return [v12(v9, v7)];
}

export function closure106(v0_1: string, v1_1: string, v2: string, v3: string, v4: Mut1): US1 {
    return US1_US1_1(v3);
}

export function closure109(v0_1: string, v1_1: string, v2: string, v3: string, v4: Mut1, v5: Mut1, v6: US1): void {
    const v7: [string, string, string, string][] = v4.l0;
    const v11: int32 = v7.length | 0;
    const v12: [string, string, string, string][] = fill(new Array(v11), 0, v11, null);
    const v13: Mut5 = new Mut5(0);
    while (method12(v11, v13)) {
        const v15: int32 = v13.l0 | 0;
        const patternInput_1: [string, string, string, string] = v7[v15];
        const v18: string = patternInput_1[2];
        const v17: string = patternInput_1[1];
        const v16: string = patternInput_1[0];
        const patternInput_2: [string, string, string, string] = (v17 === v1_1) ? [v16, v17, v18, (v6.tag === US1_Tag.US1_1) ? v6.fields[0] : ""] : [v16, v17, v18, patternInput_1[3]];
        v12[v15] = [patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3]];
        const v28: int32 = (v15 + 1) | 0;
        v13.l0 = (v28 | 0);
    }
    v5.l0 = v12;
}

export function closure108(v0_1: string, v1_1: string, v2: string, v3: string, v4: Mut1, v5: Mut1): (arg0: US1) => void {
    return (v: US1): void => {
        closure109(v0_1, v1_1, v2, v3, v4, v5, v);
    };
}

export function closure107(v0_1: string, v1_1: string, v2: string, v3: string, v4: Mut1): (arg0: Mut1, arg1: US1) => void {
    return (v: Mut1): (arg0: US1) => void => closure108(v0_1, v1_1, v2, v3, v4, v);
}

export function closure105(v0_1: string, v1_1: string, v2: string, v3: string, unitVar: void): any[] {
    const v4: (arg0: Mut7) => any = (v: Mut7): any => closure74(void 0, v);
    const v5: (arg0: Mut1) => US1 = (v_1: Mut1): US1 => closure106(v0_1, v1_1, v2, v3, v_1);
    const v6: (arg0: Mut1, arg1: Mut1, arg2: US1) => void = (v_2: Mut1): (arg0: Mut1, arg1: US1) => void => closure107(v0_1, v1_1, v2, v3, v_2);
    const v7: Mut7 = new Mut7(v5, uncurry(3, v6));
    const v9: (arg0: any) => any = v4;
    const v12: any = createComponent;
    return [v12(v9, v7)];
}

export function closure99(v0_1: string, v1_1: string, v2: string, v3: string, unitVar: void): any[] {
    const v4: (arg0: Mut3) => any = (v: Mut3): any => closure10(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v70_1: () => any[] = (): any[] => closure100(v0_1, v1_1, v2, v3, void 0);
    const v72_1: string = "3px";
    const v78_1: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v70_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], US1_US1_1(v72_1), patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], US8_US8_1(<>
        Address
    </>), patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]), US12_US12_2());
    const v80_1: (arg0: any) => any = v4;
    const v83_1: any = createComponent;
    const v84_1: any = v83_1(v80_1, v78_1);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v150: () => any[] = (): any[] => closure105(v0_1, v1_1, v2, v3, void 0);
    const v157: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], US5_US5_1(v150), patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], US1_US1_1(v72_1), patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], US8_US8_1(<>
        Private Key
    </>), patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62]), US12_US12_2());
    const v159: (arg0: any) => any = v4;
    const v160: any = createComponent;
    return [v84_1, v160(v159, v157)];
}

export function closure98(v0_1: string, v1_1: string, v2: string, v3: string, unitVar: void): any[] {
    const v4: (arg0: Mut2) => any = (v: Mut2): any => closure6(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v68_1: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v68_1.l0, v68_1.l1, v68_1.l2, v68_1.l3, v68_1.l4, v68_1.l5, v68_1.l6, v68_1.l7, v68_1.l8, v68_1.l9, v68_1.l10, v68_1.l11, v68_1.l12, v68_1.l13, v68_1.l14, v68_1.l15, v68_1.l16, v68_1.l17, v68_1.l18, v68_1.l19, v68_1.l20, v68_1.l21, v68_1.l22, v68_1.l23, v68_1.l24, v68_1.l25, v68_1.l26, v68_1.l27, v68_1.l28, v68_1.l29, v68_1.l30, v68_1.l31, v68_1.l32, v68_1.l33, v68_1.l34, v68_1.l35, v68_1.l36, v68_1.l37, v68_1.l38, v68_1.l39, v68_1.l40, v68_1.l41, v68_1.l42, v68_1.l43, v68_1.l44, v68_1.l45, v68_1.l46, v68_1.l47, v68_1.l48, v68_1.l49, v68_1.l50, v68_1.l51, v68_1.l52, v68_1.l53, v68_1.l54, v68_1.l55, v68_1.l56, v68_1.l57, v68_1.l58, v68_1.l59, v68_1.l60, v68_1.l61, v68_1.l62];
    const v99: US1 = patternInput_1[30];
    const v98: US8 = patternInput_1[29];
    const v97: US1 = patternInput_1[28];
    const v96: US1 = patternInput_1[27];
    const v95: US1 = patternInput_1[26];
    const v94_1: US8 = patternInput_1[25];
    const v93_1: US1 = patternInput_1[24];
    const v92_1: US1 = patternInput_1[23];
    const v91_1: US1 = patternInput_1[22];
    const v90_1: US1 = patternInput_1[21];
    const v89_1: US1 = patternInput_1[20];
    const v88_1: US4 = patternInput_1[19];
    const v87_1: US7 = patternInput_1[18];
    const v86_1: US1 = patternInput_1[17];
    const v85_1: US1 = patternInput_1[16];
    const v84_1: US1 = patternInput_1[15];
    const v83_1: US6 = patternInput_1[14];
    const v82_1: US4 = patternInput_1[13];
    const v81_1: US1 = patternInput_1[12];
    const v80_1: US1 = patternInput_1[11];
    const v78_1: US4 = patternInput_1[9];
    const v77_1: US1 = patternInput_1[8];
    const v76_1: US1 = patternInput_1[7];
    const v75_1: US1 = patternInput_1[6];
    const v74_1: US1 = patternInput_1[5];
    const v73_1: US1 = patternInput_1[4];
    const v72_1: US1 = patternInput_1[3];
    const v71_1: US3 = patternInput_1[2];
    const v70_1: US1 = patternInput_1[1];
    const v69_1: US1 = patternInput_1[0];
    const v131: US1 = patternInput_1[62];
    const v130: US0 = patternInput_1[61];
    const v129: US1 = patternInput_1[60];
    const v128: US6 = patternInput_1[59];
    const v127: US1 = patternInput_1[58];
    const v126: US1 = patternInput_1[57];
    const v125: US8 = patternInput_1[56];
    const v124: US1 = patternInput_1[55];
    const v123: US1 = patternInput_1[54];
    const v122: US1 = patternInput_1[53];
    const v121: US1 = patternInput_1[52];
    const v120: US1 = patternInput_1[51];
    const v119: US1 = patternInput_1[50];
    const v118: US1 = patternInput_1[49];
    const v117: US1 = patternInput_1[48];
    const v116: US1 = patternInput_1[47];
    const v115: US1 = patternInput_1[46];
    const v114: US1 = patternInput_1[45];
    const v113: US1 = patternInput_1[44];
    const v112: US1 = patternInput_1[43];
    const v111: US1 = patternInput_1[42];
    const v110: US1 = patternInput_1[41];
    const v109: US9 = patternInput_1[40];
    const v108: US10 = patternInput_1[39];
    const v107: US9 = patternInput_1[38];
    const v106: US1 = patternInput_1[37];
    const v105: US1 = patternInput_1[36];
    const v104: US1 = patternInput_1[35];
    const v103: US1 = patternInput_1[34];
    const v102: US1 = patternInput_1[33];
    const v101: US1 = patternInput_1[32];
    const v100: US1 = patternInput_1[31];
    const v132: () => any[] = (): any[] => closure99(v0_1, v1_1, v2, v3, void 0);
    [v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, v76_1, v77_1, v78_1, US5_US5_1(v132), v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129, v130, v131].children = v132;
    const v135: Mut2 = new Mut2(v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, v76_1, v77_1, v78_1, US5_US5_1(v132), v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129, v130, v131);
    const v137: (arg0: any) => any = v4;
    const v140: any = createComponent;
    return [v140(v137, v135)];
}

export function closure97(unitVar: void, _arg: [string, string, string, string]): any[] {
    const v1_1: string = _arg[1];
    const v4: (arg0: Mut3) => any = (v: Mut3): any => closure10(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v69_1: () => any[] = (): any[] => closure98(_arg[0], v1_1, _arg[2], _arg[3], void 0);
    const v75_1: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v69_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], US8_US8_1(<>
        {v1_1}
    </>), patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]), US12_US12_2());
    const v77_1: (arg0: any) => any = v4;
    const v80_1: any = createComponent;
    return [v80_1(v77_1, v75_1)];
}

export function closure96(v0_1: Mut1, unitVar: void): any[] {
    const v1_1: [string, string, string, string][] = v0_1.l0;
    const v7: any = For;
    const v8: (arg0: [string, string, string, string]) => any[] = (arg10$0040: [string, string, string, string]): any[] => closure97(void 0, arg10$0040);
    const v9: () => any[] = v8;
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v75_1: int32 = v1_1.length | 0;
    const v76_1: any[] = fill(new Array(v75_1), 0, v75_1, null);
    const v77_1: Mut5 = new Mut5(0);
    while (method12(v75_1, v77_1)) {
        const v79_1: int32 = v77_1.l0 | 0;
        const patternInput_2: [string, string, string, string] = v1_1[v79_1];
        v76_1[v79_1] = [patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3]];
        const v85_1: int32 = (v79_1 + 1) | 0;
        v77_1.l0 = (v85_1 | 0);
    }
    const v89_1: any = createObj(method5(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], US5_US5_1(v9), patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], US7_US7_1(v76_1), patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62]));
    const v90_1: (arg0: any) => any = v7;
    const v92_1: any = createComponent;
    return [v92_1(v90_1, v89_1)];
}

export function closure95(unitVar: void, v0_1: Mut2): any {
    const v3: any = useStoreon;
    const v4: any[] = v3();
    const v5: Mut1 = v4[0];
    const v6: any = v4[1];
    const v7: (arg0: Mut2) => any = (v: Mut2): any => closure6(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v71_1: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v71_1.l0, v71_1.l1, v71_1.l2, v71_1.l3, v71_1.l4, v71_1.l5, v71_1.l6, v71_1.l7, v71_1.l8, v71_1.l9, v71_1.l10, v71_1.l11, v71_1.l12, v71_1.l13, v71_1.l14, v71_1.l15, v71_1.l16, v71_1.l17, v71_1.l18, v71_1.l19, v71_1.l20, v71_1.l21, v71_1.l22, v71_1.l23, v71_1.l24, v71_1.l25, v71_1.l26, v71_1.l27, v71_1.l28, v71_1.l29, v71_1.l30, v71_1.l31, v71_1.l32, v71_1.l33, v71_1.l34, v71_1.l35, v71_1.l36, v71_1.l37, v71_1.l38, v71_1.l39, v71_1.l40, v71_1.l41, v71_1.l42, v71_1.l43, v71_1.l44, v71_1.l45, v71_1.l46, v71_1.l47, v71_1.l48, v71_1.l49, v71_1.l50, v71_1.l51, v71_1.l52, v71_1.l53, v71_1.l54, v71_1.l55, v71_1.l56, v71_1.l57, v71_1.l58, v71_1.l59, v71_1.l60, v71_1.l61, v71_1.l62];
    const v99: US1 = patternInput_1[27];
    const v98: US1 = patternInput_1[26];
    const v97: US8 = patternInput_1[25];
    const v96: US1 = patternInput_1[24];
    const v95: US1 = patternInput_1[23];
    const v94_1: US1 = patternInput_1[22];
    const v93_1: US1 = patternInput_1[21];
    const v92_1: US1 = patternInput_1[20];
    const v91_1: US4 = patternInput_1[19];
    const v90_1: US7 = patternInput_1[18];
    const v89_1: US1 = patternInput_1[17];
    const v88_1: US1 = patternInput_1[16];
    const v87_1: US1 = patternInput_1[15];
    const v86_1: US6 = patternInput_1[14];
    const v85_1: US4 = patternInput_1[13];
    const v84_1: US1 = patternInput_1[12];
    const v83_1: US1 = patternInput_1[11];
    const v81_1: US4 = patternInput_1[9];
    const v80_1: US1 = patternInput_1[8];
    const v79_1: US1 = patternInput_1[7];
    const v78_1: US1 = patternInput_1[6];
    const v77_1: US1 = patternInput_1[5];
    const v76_1: US1 = patternInput_1[4];
    const v75_1: US1 = patternInput_1[3];
    const v74_1: US3 = patternInput_1[2];
    const v73_1: US1 = patternInput_1[1];
    const v72_1: US1 = patternInput_1[0];
    const v134: US1 = patternInput_1[62];
    const v133: US0 = patternInput_1[61];
    const v132: US1 = patternInput_1[60];
    const v131: US6 = patternInput_1[59];
    const v130: US1 = patternInput_1[58];
    const v129: US1 = patternInput_1[57];
    const v128: US8 = patternInput_1[56];
    const v127: US1 = patternInput_1[55];
    const v126: US1 = patternInput_1[54];
    const v125: US1 = patternInput_1[53];
    const v124: US1 = patternInput_1[52];
    const v123: US1 = patternInput_1[51];
    const v122: US1 = patternInput_1[50];
    const v121: US1 = patternInput_1[49];
    const v120: US1 = patternInput_1[48];
    const v119: US1 = patternInput_1[47];
    const v118: US1 = patternInput_1[46];
    const v117: US1 = patternInput_1[45];
    const v116: US1 = patternInput_1[44];
    const v115: US1 = patternInput_1[43];
    const v114: US1 = patternInput_1[42];
    const v113: US1 = patternInput_1[41];
    const v112: US9 = patternInput_1[40];
    const v111: US10 = patternInput_1[39];
    const v110: US9 = patternInput_1[38];
    const v109: US1 = patternInput_1[37];
    const v108: US1 = patternInput_1[36];
    const v107: US1 = patternInput_1[35];
    const v106: US1 = patternInput_1[34];
    const v105: US1 = patternInput_1[33];
    const v104: US1 = patternInput_1[32];
    const v103: US1 = patternInput_1[31];
    const v102: US1 = patternInput_1[30];
    const v101: US8 = patternInput_1[29];
    const v100: US1 = patternInput_1[28];
    const v135: () => any[] = (): any[] => closure96(v5, void 0);
    [v72_1, v73_1, v74_1, v75_1, v76_1, v77_1, v78_1, v79_1, v80_1, v81_1, US5_US5_1(v135), v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129, v130, v131, v132, v133, v134].children = v135;
    const v138: Mut2 = new Mut2(v72_1, v73_1, v74_1, v75_1, v76_1, v77_1, v78_1, v79_1, v80_1, v81_1, US5_US5_1(v135), v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129, v130, v131, v132, v133, v134);
    const v140: (arg0: any) => any = v7;
    const v143: any = createComponent;
    return v143(v140, v138);
}

export function closure110(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure94(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut2) => any = (v: Mut2): any => closure95(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v64: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v64.l0, v64.l1, v64.l2, v64.l3, v64.l4, v64.l5, v64.l6, v64.l7, v64.l8, v64.l9, v64.l10, v64.l11, v64.l12, v64.l13, v64.l14, v64.l15, v64.l16, v64.l17, v64.l18, v64.l19, v64.l20, v64.l21, v64.l22, v64.l23, v64.l24, v64.l25, v64.l26, v64.l27, v64.l28, v64.l29, v64.l30, v64.l31, v64.l32, v64.l33, v64.l34, v64.l35, v64.l36, v64.l37, v64.l38, v64.l39, v64.l40, v64.l41, v64.l42, v64.l43, v64.l44, v64.l45, v64.l46, v64.l47, v64.l48, v64.l49, v64.l50, v64.l51, v64.l52, v64.l53, v64.l54, v64.l55, v64.l56, v64.l57, v64.l58, v64.l59, v64.l60, v64.l61, v64.l62];
    const v99: US1 = patternInput_1[34];
    const v98: US1 = patternInput_1[33];
    const v97: US1 = patternInput_1[32];
    const v96: US1 = patternInput_1[31];
    const v95: US1 = patternInput_1[30];
    const v94_1: US8 = patternInput_1[29];
    const v93_1: US1 = patternInput_1[28];
    const v92_1: US1 = patternInput_1[27];
    const v91_1: US1 = patternInput_1[26];
    const v90_1: US8 = patternInput_1[25];
    const v89_1: US1 = patternInput_1[24];
    const v88_1: US1 = patternInput_1[23];
    const v87_1: US1 = patternInput_1[22];
    const v86_1: US1 = patternInput_1[21];
    const v85_1: US1 = patternInput_1[20];
    const v84_1: US4 = patternInput_1[19];
    const v83_1: US7 = patternInput_1[18];
    const v82_1: US1 = patternInput_1[17];
    const v81_1: US1 = patternInput_1[16];
    const v80_1: US1 = patternInput_1[15];
    const v79_1: US6 = patternInput_1[14];
    const v78_1: US4 = patternInput_1[13];
    const v77_1: US1 = patternInput_1[12];
    const v76_1: US1 = patternInput_1[11];
    const v74_1: US4 = patternInput_1[9];
    const v73_1: US1 = patternInput_1[8];
    const v72_1: US1 = patternInput_1[7];
    const v71_1: US1 = patternInput_1[6];
    const v70_1: US1 = patternInput_1[5];
    const v69_1: US1 = patternInput_1[4];
    const v68_1: US1 = patternInput_1[3];
    const v67_1: US3 = patternInput_1[2];
    const v66_1: US1 = patternInput_1[1];
    const v65_1: US1 = patternInput_1[0];
    const v127: US1 = patternInput_1[62];
    const v126: US0 = patternInput_1[61];
    const v125: US1 = patternInput_1[60];
    const v124: US6 = patternInput_1[59];
    const v123: US1 = patternInput_1[58];
    const v122: US1 = patternInput_1[57];
    const v121: US8 = patternInput_1[56];
    const v120: US1 = patternInput_1[55];
    const v119: US1 = patternInput_1[54];
    const v118: US1 = patternInput_1[53];
    const v117: US1 = patternInput_1[52];
    const v116: US1 = patternInput_1[51];
    const v115: US1 = patternInput_1[50];
    const v114: US1 = patternInput_1[49];
    const v113: US1 = patternInput_1[48];
    const v112: US1 = patternInput_1[47];
    const v111: US1 = patternInput_1[46];
    const v110: US1 = patternInput_1[45];
    const v109: US1 = patternInput_1[44];
    const v108: US1 = patternInput_1[43];
    const v107: US1 = patternInput_1[42];
    const v106: US1 = patternInput_1[41];
    const v105: US9 = patternInput_1[40];
    const v104: US10 = patternInput_1[39];
    const v103: US9 = patternInput_1[38];
    const v102: US1 = patternInput_1[37];
    const v101: US1 = patternInput_1[36];
    const v100: US1 = patternInput_1[35];
    const v128: () => any[] = (): any[] => closure110(void 0, void 0);
    [v65_1, v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, US5_US5_1(v128), v76_1, v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127].children = v128;
    const v131: Mut2 = new Mut2(v65_1, v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, US5_US5_1(v128), v76_1, v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127);
    const v133: (arg0: any) => any = v0_1;
    const v136: any = createComponent;
    return [v136(v133, v131)];
}

export function closure112(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure111(unitVar: void, unitVar_1: void): any[] {
    const v2: any = hope;
    const v3: any = v2.iframe;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v71_1: () => any[] = (): any[] => closure112(void 0, void 0);
    const v81_1: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], US1_US1_1("#aaa"), patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v71_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], US1_US1_1("1"), patternInput[21], patternInput[22], US1_US1_1("350px"), patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], US1_US1_1("https://bank.testnet.algorand.network"), patternInput[54], patternInput[55], US8_US8_1(<>
        algorand testnet bank
    </>), patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]));
    const v82_1: (arg0: any) => any = v3;
    const v85_1: any = createComponent;
    return [v85_1(v82_1, v81_1)];
}

export function closure69(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut3) => any = (v: Mut3): any => closure10(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v66_1: () => any[] = (): any[] => closure70(void 0, void 0);
    const v72_1: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v66_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], US8_US8_1(<>
        Connection
    </>), patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]), US12_US12_2());
    const v74_1: (arg0: any) => any = v0_1;
    const v77_1: any = createComponent;
    const v78_1: any = v77_1(v74_1, v72_1);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v144: () => any[] = (): any[] => closure94(void 0, void 0);
    const v150: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], US5_US5_1(v144), patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], US8_US8_1(<>
        Accounts
    </>), patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62]), US12_US12_2());
    const v152: (arg0: any) => any = v0_1;
    const v153: any = createComponent;
    const v154: any = v153(v152, v150);
    const patternInput_2: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v220: () => any[] = (): any[] => closure111(void 0, void 0);
    const v226: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], US5_US5_1(v220), patternInput_2[11], patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], US8_US8_1(<>
        Testnet Bank Dispenser
    </>), patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62]), US12_US12_0());
    const v228: (arg0: any) => any = v0_1;
    const v229: any = createComponent;
    return [v78_1, v154, v229(v228, v226)];
}

export function closure68(unitVar: void, v0_1: Mut2): any {
    const v1_1: (arg0: Mut2) => any = (v: Mut2): any => closure6(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v65_1: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v65_1.l0, v65_1.l1, v65_1.l2, v65_1.l3, v65_1.l4, v65_1.l5, v65_1.l6, v65_1.l7, v65_1.l8, v65_1.l9, v65_1.l10, v65_1.l11, v65_1.l12, v65_1.l13, v65_1.l14, v65_1.l15, v65_1.l16, v65_1.l17, v65_1.l18, v65_1.l19, v65_1.l20, v65_1.l21, v65_1.l22, v65_1.l23, v65_1.l24, v65_1.l25, v65_1.l26, v65_1.l27, v65_1.l28, v65_1.l29, v65_1.l30, v65_1.l31, v65_1.l32, v65_1.l33, v65_1.l34, v65_1.l35, v65_1.l36, v65_1.l37, v65_1.l38, v65_1.l39, v65_1.l40, v65_1.l41, v65_1.l42, v65_1.l43, v65_1.l44, v65_1.l45, v65_1.l46, v65_1.l47, v65_1.l48, v65_1.l49, v65_1.l50, v65_1.l51, v65_1.l52, v65_1.l53, v65_1.l54, v65_1.l55, v65_1.l56, v65_1.l57, v65_1.l58, v65_1.l59, v65_1.l60, v65_1.l61, v65_1.l62];
    const v99: US1 = patternInput_1[33];
    const v98: US1 = patternInput_1[32];
    const v97: US1 = patternInput_1[31];
    const v96: US1 = patternInput_1[30];
    const v95: US8 = patternInput_1[29];
    const v94_1: US1 = patternInput_1[28];
    const v93_1: US1 = patternInput_1[27];
    const v92_1: US1 = patternInput_1[26];
    const v91_1: US8 = patternInput_1[25];
    const v90_1: US1 = patternInput_1[24];
    const v89_1: US1 = patternInput_1[23];
    const v88_1: US1 = patternInput_1[22];
    const v87_1: US1 = patternInput_1[21];
    const v86_1: US1 = patternInput_1[20];
    const v85_1: US4 = patternInput_1[19];
    const v84_1: US7 = patternInput_1[18];
    const v83_1: US1 = patternInput_1[17];
    const v82_1: US1 = patternInput_1[16];
    const v81_1: US1 = patternInput_1[15];
    const v80_1: US6 = patternInput_1[14];
    const v79_1: US4 = patternInput_1[13];
    const v78_1: US1 = patternInput_1[12];
    const v77_1: US1 = patternInput_1[11];
    const v75_1: US4 = patternInput_1[9];
    const v74_1: US1 = patternInput_1[8];
    const v73_1: US1 = patternInput_1[7];
    const v72_1: US1 = patternInput_1[6];
    const v71_1: US1 = patternInput_1[5];
    const v70_1: US1 = patternInput_1[4];
    const v69_1: US1 = patternInput_1[3];
    const v68_1: US3 = patternInput_1[2];
    const v67_1: US1 = patternInput_1[1];
    const v66_1: US1 = patternInput_1[0];
    const v128: US1 = patternInput_1[62];
    const v127: US0 = patternInput_1[61];
    const v126: US1 = patternInput_1[60];
    const v125: US6 = patternInput_1[59];
    const v124: US1 = patternInput_1[58];
    const v123: US1 = patternInput_1[57];
    const v122: US8 = patternInput_1[56];
    const v121: US1 = patternInput_1[55];
    const v120: US1 = patternInput_1[54];
    const v119: US1 = patternInput_1[53];
    const v118: US1 = patternInput_1[52];
    const v117: US1 = patternInput_1[51];
    const v116: US1 = patternInput_1[50];
    const v115: US1 = patternInput_1[49];
    const v114: US1 = patternInput_1[48];
    const v113: US1 = patternInput_1[47];
    const v112: US1 = patternInput_1[46];
    const v111: US1 = patternInput_1[45];
    const v110: US1 = patternInput_1[44];
    const v109: US1 = patternInput_1[43];
    const v108: US1 = patternInput_1[42];
    const v107: US1 = patternInput_1[41];
    const v106: US9 = patternInput_1[40];
    const v105: US10 = patternInput_1[39];
    const v104: US9 = patternInput_1[38];
    const v103: US1 = patternInput_1[37];
    const v102: US1 = patternInput_1[36];
    const v101: US1 = patternInput_1[35];
    const v100: US1 = patternInput_1[34];
    const v129: () => any[] = (): any[] => closure69(void 0, void 0);
    [v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, US5_US5_1(v129), v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128].children = v129;
    const v132: Mut2 = new Mut2(v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, US5_US5_1(v129), v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128);
    const v134: (arg0: any) => any = v1_1;
    const v137: any = createComponent;
    return v137(v134, v132);
}

export function closure113(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure67(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut2) => any = (v: Mut2): any => closure68(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v64: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v64.l0, v64.l1, v64.l2, v64.l3, v64.l4, v64.l5, v64.l6, v64.l7, v64.l8, v64.l9, v64.l10, v64.l11, v64.l12, v64.l13, v64.l14, v64.l15, v64.l16, v64.l17, v64.l18, v64.l19, v64.l20, v64.l21, v64.l22, v64.l23, v64.l24, v64.l25, v64.l26, v64.l27, v64.l28, v64.l29, v64.l30, v64.l31, v64.l32, v64.l33, v64.l34, v64.l35, v64.l36, v64.l37, v64.l38, v64.l39, v64.l40, v64.l41, v64.l42, v64.l43, v64.l44, v64.l45, v64.l46, v64.l47, v64.l48, v64.l49, v64.l50, v64.l51, v64.l52, v64.l53, v64.l54, v64.l55, v64.l56, v64.l57, v64.l58, v64.l59, v64.l60, v64.l61, v64.l62];
    const v99: US1 = patternInput_1[34];
    const v98: US1 = patternInput_1[33];
    const v97: US1 = patternInput_1[32];
    const v96: US1 = patternInput_1[31];
    const v95: US1 = patternInput_1[30];
    const v94_1: US8 = patternInput_1[29];
    const v93_1: US1 = patternInput_1[28];
    const v92_1: US1 = patternInput_1[27];
    const v91_1: US1 = patternInput_1[26];
    const v90_1: US8 = patternInput_1[25];
    const v89_1: US1 = patternInput_1[24];
    const v88_1: US1 = patternInput_1[23];
    const v87_1: US1 = patternInput_1[22];
    const v86_1: US1 = patternInput_1[21];
    const v85_1: US1 = patternInput_1[20];
    const v84_1: US4 = patternInput_1[19];
    const v83_1: US7 = patternInput_1[18];
    const v82_1: US1 = patternInput_1[17];
    const v81_1: US1 = patternInput_1[16];
    const v80_1: US1 = patternInput_1[15];
    const v79_1: US6 = patternInput_1[14];
    const v78_1: US4 = patternInput_1[13];
    const v77_1: US1 = patternInput_1[12];
    const v76_1: US1 = patternInput_1[11];
    const v74_1: US4 = patternInput_1[9];
    const v73_1: US1 = patternInput_1[8];
    const v72_1: US1 = patternInput_1[7];
    const v71_1: US1 = patternInput_1[6];
    const v70_1: US1 = patternInput_1[5];
    const v69_1: US1 = patternInput_1[4];
    const v68_1: US1 = patternInput_1[3];
    const v67_1: US3 = patternInput_1[2];
    const v66_1: US1 = patternInput_1[1];
    const v65_1: US1 = patternInput_1[0];
    const v127: US1 = patternInput_1[62];
    const v126: US0 = patternInput_1[61];
    const v125: US1 = patternInput_1[60];
    const v124: US6 = patternInput_1[59];
    const v123: US1 = patternInput_1[58];
    const v122: US1 = patternInput_1[57];
    const v121: US8 = patternInput_1[56];
    const v120: US1 = patternInput_1[55];
    const v119: US1 = patternInput_1[54];
    const v118: US1 = patternInput_1[53];
    const v117: US1 = patternInput_1[52];
    const v116: US1 = patternInput_1[51];
    const v115: US1 = patternInput_1[50];
    const v114: US1 = patternInput_1[49];
    const v113: US1 = patternInput_1[48];
    const v112: US1 = patternInput_1[47];
    const v111: US1 = patternInput_1[46];
    const v110: US1 = patternInput_1[45];
    const v109: US1 = patternInput_1[44];
    const v108: US1 = patternInput_1[43];
    const v107: US1 = patternInput_1[42];
    const v106: US1 = patternInput_1[41];
    const v105: US9 = patternInput_1[40];
    const v104: US10 = patternInput_1[39];
    const v103: US9 = patternInput_1[38];
    const v102: US1 = patternInput_1[37];
    const v101: US1 = patternInput_1[36];
    const v100: US1 = patternInput_1[35];
    const v128: () => any[] = (): any[] => closure113(void 0, void 0);
    [v65_1, v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, US5_US5_1(v128), v76_1, v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127].children = v128;
    const v131: Mut2 = new Mut2(v65_1, v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, US5_US5_1(v128), v76_1, v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127);
    const v133: (arg0: any) => any = v0_1;
    const v136: any = createComponent;
    return [v136(v133, v131)];
}

export function method13(v0_1: int32, v1_1: Mut11): boolean {
    return v1_1.l0 < v0_1;
}

export function closure122(v0_1: Mut10, v1_1: Mut1): US1 {
    const v2: [US2, int32, string, string][] = v1_1.l4;
    const v4: (arg0: [US2, int32, string, string]) => US1 = v0_1.l1;
    const v5: int32 = v2.length | 0;
    const v7: Mut11 = new Mut11(0, US1_US1_0());
    while (method13(v5, v7)) {
        const v9: int32 = v7.l0 | 0;
        const v12: int32 = ((op_UnaryNegation_Int32(v9) + v5) - 1) | 0;
        const v13: US1 = v7.l1;
        const patternInput_1: [US2, int32, string, string] = v2[v12];
        const v20: US1 = (v13.tag === US1_Tag.US1_1) ? v13 : v4([patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3]]);
        const v21: int32 = (v9 + 1) | 0;
        v7.l0 = (v21 | 0);
        v7.l1 = v20;
    }
    return v7.l1;
}

export function method14(v0_1: int32, v1_1: Mut12): boolean {
    return v1_1.l0 < v0_1;
}

export function method15(): [US2, int32, string, string] {
    const v1_1: string = "";
    return [US2_US2_1(), 0, v1_1, v1_1];
}

export function closure125(v0_1: Mut10, v1_1: Mut1, v2: US1): void {
    const v3: [US2, int32, string, string][] = v1_1.l4;
    const v5: [US2, int32, string, string][] = v1_1.l4;
    const v7: int32 = v5.length | 0;
    const v9: Mut12 = new Mut12(0, US13_US13_0());
    while (method14(v7, v9)) {
        const v11: int32 = v9.l0 | 0;
        const v14: int32 = ((op_UnaryNegation_Int32(v11) + v7) - 1) | 0;
        const v15: US13 = v9.l1;
        const patternInput_2: [US2, int32, string, string] = v5[v14];
        const v16: US2 = patternInput_2[0];
        let v29: US13;
        if (v15.tag === US13_Tag.US13_1) {
            v29 = v15;
        }
        else {
            const v20: US2 = v0_1.l0;
            v29 = (((v16.tag === US2_Tag.US2_1) ? (v20.tag === US2_Tag.US2_1) : (v20.tag === US2_Tag.US2_0)) ? US13_US13_1(v16, patternInput_2[1], patternInput_2[2], patternInput_2[3]) : US13_US13_0());
        }
        const v30: int32 = (v11 + 1) | 0;
        v9.l0 = (v30 | 0);
        v9.l1 = v29;
    }
    const v31: US13 = v9.l1;
    const patternInput_3: [US2, int32, string, string] = method15();
    const patternInput_4: [US2, int32, string, string] = (v31.tag === US13_Tag.US13_1) ? [v31.fields[0], v31.fields[1], v31.fields[2], v31.fields[3]] : [patternInput_3[0], patternInput_3[1], patternInput_3[2], patternInput_3[3]];
    const patternInput_5: [US2, int32, string, string] = v0_1.l2([patternInput_4[0], patternInput_4[1], patternInput_4[2], patternInput_4[3]], v2);
    const v50: [US2, int32, string, string][] = [[patternInput_5[0], patternInput_5[1], patternInput_5[2], patternInput_5[3]]];
    const v51: int32 = v3.length | 0;
    const v53: int32 = (v51 + v50.length) | 0;
    const v54: [US2, int32, string, string][] = fill(new Array(v53), 0, v53, null);
    const v55: Mut5 = new Mut5(0);
    while (method12(v53, v55)) {
        const v57: int32 = v55.l0 | 0;
        let patternInput_8: [US2, int32, string, string];
        if (v57 < v51) {
            const patternInput_6: [US2, int32, string, string] = v3[v57];
            patternInput_8 = [patternInput_6[0], patternInput_6[1], patternInput_6[2], patternInput_6[3]];
        }
        else {
            const v63: int32 = (v57 - v51) | 0;
            const patternInput_7: [US2, int32, string, string] = v50[v63];
            patternInput_8 = [patternInput_7[0], patternInput_7[1], patternInput_7[2], patternInput_7[3]];
        }
        v54[v57] = [patternInput_8[0], patternInput_8[1], patternInput_8[2], patternInput_8[3]];
        const v72_1: int32 = (v57 + 1) | 0;
        v55.l0 = (v72_1 | 0);
    }
    v1_1.l4 = v54;
}

export function closure124(v0_1: Mut10, v1_1: Mut1): (arg0: US1) => void {
    return (v: US1): void => {
        closure125(v0_1, v1_1, v);
    };
}

export function closure123(v0_1: Mut10, v1_1: Mut1): (arg0: Mut1, arg1: US1) => void {
    return (v: Mut1): (arg0: US1) => void => closure124(v0_1, v);
}

export function closure121(unitVar: void, v0_1: Mut10): any {
    const v1_1: (arg0: Mut7) => any = (v: Mut7): any => closure74(void 0, v);
    const v2: (arg0: Mut1) => US1 = (v_1: Mut1): US1 => closure122(v0_1, v_1);
    const v3: (arg0: Mut1, arg1: Mut1, arg2: US1) => void = (v_2: Mut1): (arg0: Mut1, arg1: US1) => void => closure123(v0_1, v_2);
    const v4: Mut7 = new Mut7(v2, uncurry(3, v3));
    const v6: (arg0: any) => any = v1_1;
    const v9: any = createComponent;
    return v9(v6, v4);
}

export function closure126(unitVar: void, _arg: [US2, int32, string, string]): US1 {
    return US1_US1_1(_arg[2]);
}

export function closure128(v0_1: Mut9, v1_1: US2, v2: int32, v3: string, v4: string, v5: US1): [US2, int32, string, string] {
    return [v0_1.l0, v2, (v5.tag === US1_Tag.US1_1) ? v5.fields[0] : "", v4];
}

export function closure127(v0_1: Mut9, _arg: [US2, int32, string, string]): (arg0: US1) => [US2, int32, string, string] {
    return (v: US1): [US2, int32, string, string] => closure128(v0_1, _arg[0], _arg[1], _arg[2], _arg[3], v);
}

export function closure120(v0_1: Mut9, unitVar: void): any[] {
    const v1_1: (arg0: Mut10) => any = (v: Mut10): any => closure121(void 0, v);
    const v3: (arg0: [US2, int32, string, string]) => US1 = (arg10$0040: [US2, int32, string, string]): US1 => closure126(void 0, arg10$0040);
    const v4: (arg0: [US2, int32, string, string], arg1: US1) => [US2, int32, string, string] = (arg10$0040_1: [US2, int32, string, string]): (arg0: US1) => [US2, int32, string, string] => closure127(v0_1, arg10$0040_1);
    const v5: Mut10 = new Mut10(v0_1.l0, v3, uncurry(2, v4));
    const v7: (arg0: any) => any = v1_1;
    const v10: any = createComponent;
    return [v10(v7, v5)];
}

export function method16(v0_1: int32, v1_1: Mut14): boolean {
    return v1_1.l0 < v0_1;
}

export function closure131(v0_1: Mut13, v1_1: Mut1): US0 {
    const v2: [US2, int32, string, string][] = v1_1.l4;
    const v4: (arg0: [US2, int32, string, string]) => US0 = v0_1.l1;
    const v5: int32 = v2.length | 0;
    const v7: Mut14 = new Mut14(0, US0_US0_0());
    while (method16(v5, v7)) {
        const v9: int32 = v7.l0 | 0;
        const v12: int32 = ((op_UnaryNegation_Int32(v9) + v5) - 1) | 0;
        const v13: US0 = v7.l1;
        const patternInput_1: [US2, int32, string, string] = v2[v12];
        const v20: US0 = (v13.tag === US0_Tag.US0_1) ? v13 : v4([patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3]]);
        const v21: int32 = (v9 + 1) | 0;
        v7.l0 = (v21 | 0);
        v7.l1 = v20;
    }
    return v7.l1;
}

export function closure134(v0_1: Mut13, v1_1: Mut1, v2: US0): void {
    const v3: [US2, int32, string, string][] = v1_1.l4;
    const v5: [US2, int32, string, string][] = v1_1.l4;
    const v7: int32 = v5.length | 0;
    const v9: Mut12 = new Mut12(0, US13_US13_0());
    while (method14(v7, v9)) {
        const v11: int32 = v9.l0 | 0;
        const v14: int32 = ((op_UnaryNegation_Int32(v11) + v7) - 1) | 0;
        const v15: US13 = v9.l1;
        const patternInput_2: [US2, int32, string, string] = v5[v14];
        const v16: US2 = patternInput_2[0];
        let v29: US13;
        if (v15.tag === US13_Tag.US13_1) {
            v29 = v15;
        }
        else {
            const v20: US2 = v0_1.l0;
            v29 = (((v16.tag === US2_Tag.US2_1) ? (v20.tag === US2_Tag.US2_1) : (v20.tag === US2_Tag.US2_0)) ? US13_US13_1(v16, patternInput_2[1], patternInput_2[2], patternInput_2[3]) : US13_US13_0());
        }
        const v30: int32 = (v11 + 1) | 0;
        v9.l0 = (v30 | 0);
        v9.l1 = v29;
    }
    const v31: US13 = v9.l1;
    const patternInput_3: [US2, int32, string, string] = method15();
    const patternInput_4: [US2, int32, string, string] = (v31.tag === US13_Tag.US13_1) ? [v31.fields[0], v31.fields[1], v31.fields[2], v31.fields[3]] : [patternInput_3[0], patternInput_3[1], patternInput_3[2], patternInput_3[3]];
    const patternInput_5: [US2, int32, string, string] = v0_1.l2([patternInput_4[0], patternInput_4[1], patternInput_4[2], patternInput_4[3]], v2);
    const v50: [US2, int32, string, string][] = [[patternInput_5[0], patternInput_5[1], patternInput_5[2], patternInput_5[3]]];
    const v51: int32 = v3.length | 0;
    const v53: int32 = (v51 + v50.length) | 0;
    const v54: [US2, int32, string, string][] = fill(new Array(v53), 0, v53, null);
    const v55: Mut5 = new Mut5(0);
    while (method12(v53, v55)) {
        const v57: int32 = v55.l0 | 0;
        let patternInput_8: [US2, int32, string, string];
        if (v57 < v51) {
            const patternInput_6: [US2, int32, string, string] = v3[v57];
            patternInput_8 = [patternInput_6[0], patternInput_6[1], patternInput_6[2], patternInput_6[3]];
        }
        else {
            const v63: int32 = (v57 - v51) | 0;
            const patternInput_7: [US2, int32, string, string] = v50[v63];
            patternInput_8 = [patternInput_7[0], patternInput_7[1], patternInput_7[2], patternInput_7[3]];
        }
        v54[v57] = [patternInput_8[0], patternInput_8[1], patternInput_8[2], patternInput_8[3]];
        const v72_1: int32 = (v57 + 1) | 0;
        v55.l0 = (v72_1 | 0);
    }
    v1_1.l4 = v54;
}

export function closure133(v0_1: Mut13, v1_1: Mut1): (arg0: US0) => void {
    return (v: US0): void => {
        closure134(v0_1, v1_1, v);
    };
}

export function closure132(v0_1: Mut13, v1_1: Mut1): (arg0: Mut1, arg1: US0) => void {
    return (v: Mut1): (arg0: US0) => void => closure133(v0_1, v);
}

export function closure130(unitVar: void, v0_1: Mut13): any {
    const v1_1: (arg0: Mut8) => any = (v: Mut8): any => closure87(void 0, v);
    const v2: (arg0: Mut1) => US0 = (v_1: Mut1): US0 => closure131(v0_1, v_1);
    const v3: (arg0: Mut1, arg1: Mut1, arg2: US0) => void = (v_2: Mut1): (arg0: Mut1, arg1: US0) => void => closure132(v0_1, v_2);
    const v4: Mut8 = new Mut8(v2, uncurry(3, v3));
    const v6: (arg0: any) => any = v1_1;
    const v9: any = createComponent;
    return v9(v6, v4);
}

export function closure135(unitVar: void, _arg: [US2, int32, string, string]): US0 {
    return US0_US0_1(_arg[1]);
}

export function closure137(v0_1: Mut9, v1_1: US2, v2: int32, v3: string, v4: string, v5: US0): [US2, int32, string, string] {
    return [v0_1.l0, (v5.tag === US0_Tag.US0_1) ? v5.fields[0] : 0, v3, v4];
}

export function closure136(v0_1: Mut9, _arg: [US2, int32, string, string]): (arg0: US0) => [US2, int32, string, string] {
    return (v: US0): [US2, int32, string, string] => closure137(v0_1, _arg[0], _arg[1], _arg[2], _arg[3], v);
}

export function closure129(v0_1: Mut9, unitVar: void): any[] {
    const v1_1: (arg0: Mut13) => any = (v: Mut13): any => closure130(void 0, v);
    const v3: (arg0: [US2, int32, string, string]) => US0 = (arg10$0040: [US2, int32, string, string]): US0 => closure135(void 0, arg10$0040);
    const v4: (arg0: [US2, int32, string, string], arg1: US0) => [US2, int32, string, string] = (arg10$0040_1: [US2, int32, string, string]): (arg0: US0) => [US2, int32, string, string] => closure136(v0_1, arg10$0040_1);
    const v5: Mut13 = new Mut13(v0_1.l0, v3, uncurry(2, v4));
    const v7: (arg0: any) => any = v1_1;
    const v10: any = createComponent;
    return [v10(v7, v5)];
}

export function closure119(v0_1: Mut9, unitVar: void): any[] {
    const v1_1: (arg0: Mut3) => any = (v: Mut3): any => closure10(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v67_1: () => any[] = (): any[] => closure120(v0_1, void 0);
    const v69_1: string = "3px";
    const v75_1: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v67_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], US1_US1_1(v69_1), patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], US8_US8_1(<>
        URL
    </>), patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]), US12_US12_2());
    const v77_1: (arg0: any) => any = v1_1;
    const v80_1: any = createComponent;
    const v81_1: any = v80_1(v77_1, v75_1);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v147: () => any[] = (): any[] => closure129(v0_1, void 0);
    const v154: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], US5_US5_1(v147), patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], US1_US1_1(v69_1), patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], US8_US8_1(<>
        Port
    </>), patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62]), US12_US12_2());
    const v156: (arg0: any) => any = v1_1;
    const v157: any = createComponent;
    return [v81_1, v157(v156, v154)];
}

export function closure118(unitVar: void, v0_1: Mut9): any {
    const v1_1: (arg0: Mut2) => any = (v: Mut2): any => closure6(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v65_1: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v65_1.l0, v65_1.l1, v65_1.l2, v65_1.l3, v65_1.l4, v65_1.l5, v65_1.l6, v65_1.l7, v65_1.l8, v65_1.l9, v65_1.l10, v65_1.l11, v65_1.l12, v65_1.l13, v65_1.l14, v65_1.l15, v65_1.l16, v65_1.l17, v65_1.l18, v65_1.l19, v65_1.l20, v65_1.l21, v65_1.l22, v65_1.l23, v65_1.l24, v65_1.l25, v65_1.l26, v65_1.l27, v65_1.l28, v65_1.l29, v65_1.l30, v65_1.l31, v65_1.l32, v65_1.l33, v65_1.l34, v65_1.l35, v65_1.l36, v65_1.l37, v65_1.l38, v65_1.l39, v65_1.l40, v65_1.l41, v65_1.l42, v65_1.l43, v65_1.l44, v65_1.l45, v65_1.l46, v65_1.l47, v65_1.l48, v65_1.l49, v65_1.l50, v65_1.l51, v65_1.l52, v65_1.l53, v65_1.l54, v65_1.l55, v65_1.l56, v65_1.l57, v65_1.l58, v65_1.l59, v65_1.l60, v65_1.l61, v65_1.l62];
    const v99: US1 = patternInput_1[33];
    const v98: US1 = patternInput_1[32];
    const v97: US1 = patternInput_1[31];
    const v96: US1 = patternInput_1[30];
    const v95: US8 = patternInput_1[29];
    const v94_1: US1 = patternInput_1[28];
    const v93_1: US1 = patternInput_1[27];
    const v92_1: US1 = patternInput_1[26];
    const v91_1: US8 = patternInput_1[25];
    const v90_1: US1 = patternInput_1[24];
    const v89_1: US1 = patternInput_1[23];
    const v88_1: US1 = patternInput_1[22];
    const v87_1: US1 = patternInput_1[21];
    const v86_1: US1 = patternInput_1[20];
    const v85_1: US4 = patternInput_1[19];
    const v84_1: US7 = patternInput_1[18];
    const v83_1: US1 = patternInput_1[17];
    const v82_1: US1 = patternInput_1[16];
    const v81_1: US1 = patternInput_1[15];
    const v80_1: US6 = patternInput_1[14];
    const v79_1: US4 = patternInput_1[13];
    const v78_1: US1 = patternInput_1[12];
    const v77_1: US1 = patternInput_1[11];
    const v75_1: US4 = patternInput_1[9];
    const v74_1: US1 = patternInput_1[8];
    const v73_1: US1 = patternInput_1[7];
    const v72_1: US1 = patternInput_1[6];
    const v71_1: US1 = patternInput_1[5];
    const v70_1: US1 = patternInput_1[4];
    const v69_1: US1 = patternInput_1[3];
    const v68_1: US3 = patternInput_1[2];
    const v67_1: US1 = patternInput_1[1];
    const v66_1: US1 = patternInput_1[0];
    const v128: US1 = patternInput_1[62];
    const v127: US0 = patternInput_1[61];
    const v126: US1 = patternInput_1[60];
    const v125: US6 = patternInput_1[59];
    const v124: US1 = patternInput_1[58];
    const v123: US1 = patternInput_1[57];
    const v122: US8 = patternInput_1[56];
    const v121: US1 = patternInput_1[55];
    const v120: US1 = patternInput_1[54];
    const v119: US1 = patternInput_1[53];
    const v118: US1 = patternInput_1[52];
    const v117: US1 = patternInput_1[51];
    const v116: US1 = patternInput_1[50];
    const v115: US1 = patternInput_1[49];
    const v114: US1 = patternInput_1[48];
    const v113: US1 = patternInput_1[47];
    const v112: US1 = patternInput_1[46];
    const v111: US1 = patternInput_1[45];
    const v110: US1 = patternInput_1[44];
    const v109: US1 = patternInput_1[43];
    const v108: US1 = patternInput_1[42];
    const v107: US1 = patternInput_1[41];
    const v106: US9 = patternInput_1[40];
    const v105: US10 = patternInput_1[39];
    const v104: US9 = patternInput_1[38];
    const v103: US1 = patternInput_1[37];
    const v102: US1 = patternInput_1[36];
    const v101: US1 = patternInput_1[35];
    const v100: US1 = patternInput_1[34];
    const v129: () => any[] = (): any[] => closure119(v0_1, void 0);
    [v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, US5_US5_1(v129), v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128].children = v129;
    const v132: Mut2 = new Mut2(v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, US5_US5_1(v129), v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128);
    const v134: (arg0: any) => any = v1_1;
    const v137: any = createComponent;
    return v137(v134, v132);
}

export function closure117(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut9) => any = (v: Mut9): any => closure118(void 0, v);
    const v2: Mut9 = new Mut9(US2_US2_1());
    const v4: (arg0: any) => any = v0_1;
    const v7: any = createComponent;
    return [v7(v4, v2)];
}

export function closure141(unitVar: void, v0_1: Mut1): void {
    const v2: [US2, US2][] = v0_1.l5;
    const v5: [US2, US2][] = [[US2_US2_1(), US2_US2_1()]];
    const v6: int32 = v2.length | 0;
    const v8: int32 = (v6 + v5.length) | 0;
    const v9: [US2, US2][] = fill(new Array(v8), 0, v8, null);
    const v10: Mut5 = new Mut5(0);
    while (method12(v8, v10)) {
        const v12: int32 = v10.l0 | 0;
        let patternInput_3: [US2, US2];
        if (v12 < v6) {
            const patternInput_1: [US2, US2] = v2[v12];
            patternInput_3 = [patternInput_1[0], patternInput_1[1]];
        }
        else {
            const v16: int32 = (v12 - v6) | 0;
            const patternInput_2: [US2, US2] = v5[v16];
            patternInput_3 = [patternInput_2[0], patternInput_2[1]];
        }
        v9[v12] = [patternInput_3[0], patternInput_3[1]];
        const v21: int32 = (v12 + 1) | 0;
        v10.l0 = (v21 | 0);
    }
    v0_1.l5 = v9;
}

export function closure140(unitVar: void, v0_1: Mut1): (arg0: Mut1) => void {
    return (v: Mut1): void => {
        closure141(void 0, v);
    };
}

export function closure139(unitVar: void, v0_1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void {
    const v1_1: (arg0: Mut1, arg1: Mut1) => void = (v: Mut1): (arg0: Mut1) => void => closure140(void 0, v);
    v0_1(v1_1);
}

export function closure138(unitVar: void, v0_1: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void {
    return (v: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void => {
        closure139(void 0, v);
    };
}

export function closure142(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut9) => any = (v: Mut9): any => closure118(void 0, v);
    const v2: Mut9 = new Mut9(US2_US2_0());
    const v4: (arg0: any) => any = v0_1;
    const v7: any = createComponent;
    return [v7(v4, v2)];
}

export function closure146(unitVar: void, v0_1: Mut1): void {
    const v2: [US2, US2][] = v0_1.l5;
    const v5: [US2, US2][] = [[US2_US2_1(), US2_US2_0()]];
    const v6: int32 = v2.length | 0;
    const v8: int32 = (v6 + v5.length) | 0;
    const v9: [US2, US2][] = fill(new Array(v8), 0, v8, null);
    const v10: Mut5 = new Mut5(0);
    while (method12(v8, v10)) {
        const v12: int32 = v10.l0 | 0;
        let patternInput_3: [US2, US2];
        if (v12 < v6) {
            const patternInput_1: [US2, US2] = v2[v12];
            patternInput_3 = [patternInput_1[0], patternInput_1[1]];
        }
        else {
            const v16: int32 = (v12 - v6) | 0;
            const patternInput_2: [US2, US2] = v5[v16];
            patternInput_3 = [patternInput_2[0], patternInput_2[1]];
        }
        v9[v12] = [patternInput_3[0], patternInput_3[1]];
        const v21: int32 = (v12 + 1) | 0;
        v10.l0 = (v21 | 0);
    }
    v0_1.l5 = v9;
}

export function closure145(unitVar: void, v0_1: Mut1): (arg0: Mut1) => void {
    return (v: Mut1): void => {
        closure146(void 0, v);
    };
}

export function closure144(unitVar: void, v0_1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void {
    const v1_1: (arg0: Mut1, arg1: Mut1) => void = (v: Mut1): (arg0: Mut1) => void => closure145(void 0, v);
    v0_1(v1_1);
}

export function closure143(unitVar: void, v0_1: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void {
    return (v: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void => {
        closure144(void 0, v);
    };
}

export function closure147(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut9) => any = (v: Mut9): any => closure118(void 0, v);
    const v2: Mut9 = new Mut9(US2_US2_0());
    const v4: (arg0: any) => any = v0_1;
    const v7: any = createComponent;
    return [v7(v4, v2)];
}

export function closure151(unitVar: void, v0_1: Mut1): void {
    const v2: [US2, US2][] = v0_1.l5;
    const v5: [US2, US2][] = [[US2_US2_0(), US2_US2_0()]];
    const v6: int32 = v2.length | 0;
    const v8: int32 = (v6 + v5.length) | 0;
    const v9: [US2, US2][] = fill(new Array(v8), 0, v8, null);
    const v10: Mut5 = new Mut5(0);
    while (method12(v8, v10)) {
        const v12: int32 = v10.l0 | 0;
        let patternInput_3: [US2, US2];
        if (v12 < v6) {
            const patternInput_1: [US2, US2] = v2[v12];
            patternInput_3 = [patternInput_1[0], patternInput_1[1]];
        }
        else {
            const v16: int32 = (v12 - v6) | 0;
            const patternInput_2: [US2, US2] = v5[v16];
            patternInput_3 = [patternInput_2[0], patternInput_2[1]];
        }
        v9[v12] = [patternInput_3[0], patternInput_3[1]];
        const v21: int32 = (v12 + 1) | 0;
        v10.l0 = (v21 | 0);
    }
    v0_1.l5 = v9;
}

export function closure150(unitVar: void, v0_1: Mut1): (arg0: Mut1) => void {
    return (v: Mut1): void => {
        closure151(void 0, v);
    };
}

export function closure149(unitVar: void, v0_1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void {
    const v1_1: (arg0: Mut1, arg1: Mut1) => void = (v: Mut1): (arg0: Mut1) => void => closure150(void 0, v);
    v0_1(v1_1);
}

export function closure148(unitVar: void, v0_1: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void {
    return (v: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void => {
        closure149(void 0, v);
    };
}

export function closure152(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut9) => any = (v: Mut9): any => closure118(void 0, v);
    const v2: Mut9 = new Mut9(US2_US2_1());
    const v4: (arg0: any) => any = v0_1;
    const v7: any = createComponent;
    return [v7(v4, v2)];
}

export function closure156(unitVar: void, v0_1: Mut1): void {
    const v2: [US2, US2][] = v0_1.l5;
    const v5: [US2, US2][] = [[US2_US2_0(), US2_US2_1()]];
    const v6: int32 = v2.length | 0;
    const v8: int32 = (v6 + v5.length) | 0;
    const v9: [US2, US2][] = fill(new Array(v8), 0, v8, null);
    const v10: Mut5 = new Mut5(0);
    while (method12(v8, v10)) {
        const v12: int32 = v10.l0 | 0;
        let patternInput_3: [US2, US2];
        if (v12 < v6) {
            const patternInput_1: [US2, US2] = v2[v12];
            patternInput_3 = [patternInput_1[0], patternInput_1[1]];
        }
        else {
            const v16: int32 = (v12 - v6) | 0;
            const patternInput_2: [US2, US2] = v5[v16];
            patternInput_3 = [patternInput_2[0], patternInput_2[1]];
        }
        v9[v12] = [patternInput_3[0], patternInput_3[1]];
        const v21: int32 = (v12 + 1) | 0;
        v10.l0 = (v21 | 0);
    }
    v0_1.l5 = v9;
}

export function closure155(unitVar: void, v0_1: Mut1): (arg0: Mut1) => void {
    return (v: Mut1): void => {
        closure156(void 0, v);
    };
}

export function closure154(unitVar: void, v0_1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void {
    const v1_1: (arg0: Mut1, arg1: Mut1) => void = (v: Mut1): (arg0: Mut1) => void => closure155(void 0, v);
    v0_1(v1_1);
}

export function closure153(unitVar: void, v0_1: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void {
    return (v: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void => {
        closure154(void 0, v);
    };
}

export function closure116(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut3) => any = (v: Mut3): any => closure10(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v66_1: () => any[] = (): any[] => closure117(void 0, void 0);
    const v72_1: (arg0: Mut1, arg1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void = (v_1: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void => closure138(void 0, v_1);
    const v75_1: Mut3 = new Mut3(US11_US11_1(uncurry(2, v72_1)), new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v66_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], US1_US1_1("db-gun-rs-rs"), patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], US8_US8_1(<>
        Rust -> Rust
    </>), patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]), US12_US12_0());
    const v77_1: (arg0: any) => any = v0_1;
    const v80_1: any = createComponent;
    const v81_1: any = v80_1(v77_1, v75_1);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v147: () => any[] = (): any[] => closure142(void 0, void 0);
    const v153: (arg0: Mut1, arg1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void = (v_2: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void => closure143(void 0, v_2);
    const v156: Mut3 = new Mut3(US11_US11_1(uncurry(2, v153)), new Mut2(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], US5_US5_1(v147), patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], US1_US1_1("db-gun-rs-js"), patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], US8_US8_1(<>
        Rust -> JavaScript
    </>), patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62]), US12_US12_0());
    const v158: (arg0: any) => any = v0_1;
    const v159: any = createComponent;
    const v160: any = v159(v158, v156);
    const patternInput_2: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v226: () => any[] = (): any[] => closure147(void 0, void 0);
    const v232: (arg0: Mut1, arg1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void = (v_3: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void => closure148(void 0, v_3);
    const v235: Mut3 = new Mut3(US11_US11_1(uncurry(2, v232)), new Mut2(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], US5_US5_1(v226), patternInput_2[11], patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], US1_US1_1("db-gun-js-js"), patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], US8_US8_1(<>
        JavaScript -> JavaScript
    </>), patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62]), US12_US12_0());
    const v237: (arg0: any) => any = v0_1;
    const v238: any = createComponent;
    const v239: any = v238(v237, v235);
    const patternInput_3: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v305: () => any[] = (): any[] => closure152(void 0, void 0);
    const v311: (arg0: Mut1, arg1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void = (v_4: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void => closure153(void 0, v_4);
    const v314: Mut3 = new Mut3(US11_US11_1(uncurry(2, v311)), new Mut2(patternInput_3[0], patternInput_3[1], patternInput_3[2], patternInput_3[3], patternInput_3[4], patternInput_3[5], patternInput_3[6], patternInput_3[7], patternInput_3[8], patternInput_3[9], US5_US5_1(v305), patternInput_3[11], patternInput_3[12], patternInput_3[13], patternInput_3[14], patternInput_3[15], patternInput_3[16], patternInput_3[17], patternInput_3[18], patternInput_3[19], patternInput_3[20], patternInput_3[21], patternInput_3[22], patternInput_3[23], patternInput_3[24], patternInput_3[25], US1_US1_1("db-gun-js-rs"), patternInput_3[27], patternInput_3[28], patternInput_3[29], patternInput_3[30], patternInput_3[31], patternInput_3[32], patternInput_3[33], patternInput_3[34], patternInput_3[35], patternInput_3[36], patternInput_3[37], patternInput_3[38], patternInput_3[39], patternInput_3[40], patternInput_3[41], patternInput_3[42], patternInput_3[43], patternInput_3[44], patternInput_3[45], patternInput_3[46], patternInput_3[47], patternInput_3[48], patternInput_3[49], patternInput_3[50], patternInput_3[51], patternInput_3[52], patternInput_3[53], patternInput_3[54], patternInput_3[55], US8_US8_1(<>
        JavaScript -> Rust
    </>), patternInput_3[57], patternInput_3[58], patternInput_3[59], patternInput_3[60], patternInput_3[61], patternInput_3[62]), US12_US12_0());
    const v316: (arg0: any) => any = v0_1;
    const v317: any = createComponent;
    return [v81_1, v160, v239, v317(v316, v314)];
}

export function closure115(unitVar: void, v0_1: Mut2): any {
    const v1_1: (arg0: Mut2) => any = (v: Mut2): any => closure6(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v65_1: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v65_1.l0, v65_1.l1, v65_1.l2, v65_1.l3, v65_1.l4, v65_1.l5, v65_1.l6, v65_1.l7, v65_1.l8, v65_1.l9, v65_1.l10, v65_1.l11, v65_1.l12, v65_1.l13, v65_1.l14, v65_1.l15, v65_1.l16, v65_1.l17, v65_1.l18, v65_1.l19, v65_1.l20, v65_1.l21, v65_1.l22, v65_1.l23, v65_1.l24, v65_1.l25, v65_1.l26, v65_1.l27, v65_1.l28, v65_1.l29, v65_1.l30, v65_1.l31, v65_1.l32, v65_1.l33, v65_1.l34, v65_1.l35, v65_1.l36, v65_1.l37, v65_1.l38, v65_1.l39, v65_1.l40, v65_1.l41, v65_1.l42, v65_1.l43, v65_1.l44, v65_1.l45, v65_1.l46, v65_1.l47, v65_1.l48, v65_1.l49, v65_1.l50, v65_1.l51, v65_1.l52, v65_1.l53, v65_1.l54, v65_1.l55, v65_1.l56, v65_1.l57, v65_1.l58, v65_1.l59, v65_1.l60, v65_1.l61, v65_1.l62];
    const v99: US1 = patternInput_1[33];
    const v98: US1 = patternInput_1[32];
    const v97: US1 = patternInput_1[31];
    const v96: US1 = patternInput_1[30];
    const v95: US8 = patternInput_1[29];
    const v94_1: US1 = patternInput_1[28];
    const v93_1: US1 = patternInput_1[27];
    const v92_1: US1 = patternInput_1[26];
    const v91_1: US8 = patternInput_1[25];
    const v90_1: US1 = patternInput_1[24];
    const v89_1: US1 = patternInput_1[23];
    const v88_1: US1 = patternInput_1[22];
    const v87_1: US1 = patternInput_1[21];
    const v86_1: US1 = patternInput_1[20];
    const v85_1: US4 = patternInput_1[19];
    const v84_1: US7 = patternInput_1[18];
    const v83_1: US1 = patternInput_1[17];
    const v82_1: US1 = patternInput_1[16];
    const v81_1: US1 = patternInput_1[15];
    const v80_1: US6 = patternInput_1[14];
    const v79_1: US4 = patternInput_1[13];
    const v78_1: US1 = patternInput_1[12];
    const v77_1: US1 = patternInput_1[11];
    const v75_1: US4 = patternInput_1[9];
    const v74_1: US1 = patternInput_1[8];
    const v73_1: US1 = patternInput_1[7];
    const v72_1: US1 = patternInput_1[6];
    const v71_1: US1 = patternInput_1[5];
    const v70_1: US1 = patternInput_1[4];
    const v69_1: US1 = patternInput_1[3];
    const v68_1: US3 = patternInput_1[2];
    const v67_1: US1 = patternInput_1[1];
    const v66_1: US1 = patternInput_1[0];
    const v128: US1 = patternInput_1[62];
    const v127: US0 = patternInput_1[61];
    const v126: US1 = patternInput_1[60];
    const v125: US6 = patternInput_1[59];
    const v124: US1 = patternInput_1[58];
    const v123: US1 = patternInput_1[57];
    const v122: US8 = patternInput_1[56];
    const v121: US1 = patternInput_1[55];
    const v120: US1 = patternInput_1[54];
    const v119: US1 = patternInput_1[53];
    const v118: US1 = patternInput_1[52];
    const v117: US1 = patternInput_1[51];
    const v116: US1 = patternInput_1[50];
    const v115: US1 = patternInput_1[49];
    const v114: US1 = patternInput_1[48];
    const v113: US1 = patternInput_1[47];
    const v112: US1 = patternInput_1[46];
    const v111: US1 = patternInput_1[45];
    const v110: US1 = patternInput_1[44];
    const v109: US1 = patternInput_1[43];
    const v108: US1 = patternInput_1[42];
    const v107: US1 = patternInput_1[41];
    const v106: US9 = patternInput_1[40];
    const v105: US10 = patternInput_1[39];
    const v104: US9 = patternInput_1[38];
    const v103: US1 = patternInput_1[37];
    const v102: US1 = patternInput_1[36];
    const v101: US1 = patternInput_1[35];
    const v100: US1 = patternInput_1[34];
    const v129: () => any[] = (): any[] => closure116(void 0, void 0);
    [v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, US5_US5_1(v129), v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128].children = v129;
    const v132: Mut2 = new Mut2(v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, US5_US5_1(v129), v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128);
    const v134: (arg0: any) => any = v1_1;
    const v137: any = createComponent;
    return v137(v134, v132);
}

export function closure157(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure114(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut2) => any = (v: Mut2): any => closure115(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v64: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v64.l0, v64.l1, v64.l2, v64.l3, v64.l4, v64.l5, v64.l6, v64.l7, v64.l8, v64.l9, v64.l10, v64.l11, v64.l12, v64.l13, v64.l14, v64.l15, v64.l16, v64.l17, v64.l18, v64.l19, v64.l20, v64.l21, v64.l22, v64.l23, v64.l24, v64.l25, v64.l26, v64.l27, v64.l28, v64.l29, v64.l30, v64.l31, v64.l32, v64.l33, v64.l34, v64.l35, v64.l36, v64.l37, v64.l38, v64.l39, v64.l40, v64.l41, v64.l42, v64.l43, v64.l44, v64.l45, v64.l46, v64.l47, v64.l48, v64.l49, v64.l50, v64.l51, v64.l52, v64.l53, v64.l54, v64.l55, v64.l56, v64.l57, v64.l58, v64.l59, v64.l60, v64.l61, v64.l62];
    const v99: US1 = patternInput_1[34];
    const v98: US1 = patternInput_1[33];
    const v97: US1 = patternInput_1[32];
    const v96: US1 = patternInput_1[31];
    const v95: US1 = patternInput_1[30];
    const v94_1: US8 = patternInput_1[29];
    const v93_1: US1 = patternInput_1[28];
    const v92_1: US1 = patternInput_1[27];
    const v91_1: US1 = patternInput_1[26];
    const v90_1: US8 = patternInput_1[25];
    const v89_1: US1 = patternInput_1[24];
    const v88_1: US1 = patternInput_1[23];
    const v87_1: US1 = patternInput_1[22];
    const v86_1: US1 = patternInput_1[21];
    const v85_1: US1 = patternInput_1[20];
    const v84_1: US4 = patternInput_1[19];
    const v83_1: US7 = patternInput_1[18];
    const v82_1: US1 = patternInput_1[17];
    const v81_1: US1 = patternInput_1[16];
    const v80_1: US1 = patternInput_1[15];
    const v79_1: US6 = patternInput_1[14];
    const v78_1: US4 = patternInput_1[13];
    const v77_1: US1 = patternInput_1[12];
    const v76_1: US1 = patternInput_1[11];
    const v74_1: US4 = patternInput_1[9];
    const v73_1: US1 = patternInput_1[8];
    const v72_1: US1 = patternInput_1[7];
    const v71_1: US1 = patternInput_1[6];
    const v70_1: US1 = patternInput_1[5];
    const v69_1: US1 = patternInput_1[4];
    const v68_1: US1 = patternInput_1[3];
    const v67_1: US3 = patternInput_1[2];
    const v66_1: US1 = patternInput_1[1];
    const v65_1: US1 = patternInput_1[0];
    const v127: US1 = patternInput_1[62];
    const v126: US0 = patternInput_1[61];
    const v125: US1 = patternInput_1[60];
    const v124: US6 = patternInput_1[59];
    const v123: US1 = patternInput_1[58];
    const v122: US1 = patternInput_1[57];
    const v121: US8 = patternInput_1[56];
    const v120: US1 = patternInput_1[55];
    const v119: US1 = patternInput_1[54];
    const v118: US1 = patternInput_1[53];
    const v117: US1 = patternInput_1[52];
    const v116: US1 = patternInput_1[51];
    const v115: US1 = patternInput_1[50];
    const v114: US1 = patternInput_1[49];
    const v113: US1 = patternInput_1[48];
    const v112: US1 = patternInput_1[47];
    const v111: US1 = patternInput_1[46];
    const v110: US1 = patternInput_1[45];
    const v109: US1 = patternInput_1[44];
    const v108: US1 = patternInput_1[43];
    const v107: US1 = patternInput_1[42];
    const v106: US1 = patternInput_1[41];
    const v105: US9 = patternInput_1[40];
    const v104: US10 = patternInput_1[39];
    const v103: US9 = patternInput_1[38];
    const v102: US1 = patternInput_1[37];
    const v101: US1 = patternInput_1[36];
    const v100: US1 = patternInput_1[35];
    const v128: () => any[] = (): any[] => closure157(void 0, void 0);
    [v65_1, v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, US5_US5_1(v128), v76_1, v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127].children = v128;
    const v131: Mut2 = new Mut2(v65_1, v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, US5_US5_1(v128), v76_1, v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127);
    const v133: (arg0: any) => any = v0_1;
    const v136: any = createComponent;
    return [v136(v133, v131)];
}

export function closure162(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Counter
    </>];
}

export function closure163(unitVar: void, unitVar_1: void): any {
    const v2: any = BiRegularPlus;
    return v2;
}

export function closure164(unitVar: void, unitVar_1: void): void {
}

export function closure165(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Request
    </>];
}

export function closure166(unitVar: void, unitVar_1: void): any {
    const v2: any = BiRegularMinus;
    return v2;
}

export function closure167(unitVar: void, unitVar_1: void): void {
}

export function closure168(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Clear
    </>];
}

export function closure161(unitVar: void, unitVar_1: void): any[] {
    const v2: any = Box;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v66_1: () => any[] = (): any[] => closure162(void 0, void 0);
    const v69_1: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v66_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]));
    const v70_1: (arg0: any) => any = v2;
    const v73_1: any = createComponent;
    const v74_1: any = v73_1(v70_1, v69_1);
    const v75_1: (arg0: Mut2) => any = (v: Mut2): any => closure24(void 0, v);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v139: Mut2 = new Mut2(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62]);
    const v140: (arg0: Mut6) => any = (v_1: Mut6): any => closure31(void 0, v_1);
    const v141: (arg0: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1]) => [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = (arg10$0040_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1]): [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] => closure33(void 0, arg10$0040_1);
    const v142: () => any = (): any => closure163(void 0, void 0);
    const v143: Mut6 = new Mut6(v141, v142, v141);
    const v145: (arg0: any) => any = v140;
    const v146: any = createComponent;
    const v147: any = v146(v145, v143);
    v139.l29 = US8_US8_1(v147);
    const v149: string = "10px";
    v139.l47 = US1_US1_1(v149);
    const v151: () => void = (): void => {
        closure164(void 0, void 0);
    };
    v139.l39 = US10_US10_1(v151);
    const patternInput_2: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v139.l0, v139.l1, v139.l2, v139.l3, v139.l4, v139.l5, v139.l6, v139.l7, v139.l8, v139.l9, v139.l10, v139.l11, v139.l12, v139.l13, v139.l14, v139.l15, v139.l16, v139.l17, v139.l18, v139.l19, v139.l20, v139.l21, v139.l22, v139.l23, v139.l24, v139.l25, v139.l26, v139.l27, v139.l28, v139.l29, v139.l30, v139.l31, v139.l32, v139.l33, v139.l34, v139.l35, v139.l36, v139.l37, v139.l38, v139.l39, v139.l40, v139.l41, v139.l42, v139.l43, v139.l44, v139.l45, v139.l46, v139.l47, v139.l48, v139.l49, v139.l50, v139.l51, v139.l52, v139.l53, v139.l54, v139.l55, v139.l56, v139.l57, v139.l58, v139.l59, v139.l60, v139.l61, v139.l62];
    const v215: US1 = patternInput_2[62];
    const v214: US0 = patternInput_2[61];
    const v213: US1 = patternInput_2[60];
    const v212: US6 = patternInput_2[59];
    const v211: US1 = patternInput_2[58];
    const v210: US1 = patternInput_2[57];
    const v209: US8 = patternInput_2[56];
    const v208: US1 = patternInput_2[55];
    const v207: US1 = patternInput_2[54];
    const v206: US1 = patternInput_2[53];
    const v205: US1 = patternInput_2[52];
    const v204: US1 = patternInput_2[51];
    const v203: US1 = patternInput_2[50];
    const v202: US1 = patternInput_2[49];
    const v201: US1 = patternInput_2[48];
    const v200: US1 = patternInput_2[47];
    const v199: US1 = patternInput_2[46];
    const v198: US1 = patternInput_2[45];
    const v197: US1 = patternInput_2[44];
    const v196: US1 = patternInput_2[43];
    const v195: US1 = patternInput_2[42];
    const v194: US1 = patternInput_2[41];
    const v193: US9 = patternInput_2[40];
    const v192: US10 = patternInput_2[39];
    const v191: US9 = patternInput_2[38];
    const v190: US1 = patternInput_2[37];
    const v189: US1 = patternInput_2[36];
    const v188: US1 = patternInput_2[35];
    const v187: US1 = patternInput_2[34];
    const v186: US1 = patternInput_2[33];
    const v185: US1 = patternInput_2[32];
    const v184: US1 = patternInput_2[31];
    const v183: US1 = patternInput_2[30];
    const v182: US8 = patternInput_2[29];
    const v181: US1 = patternInput_2[28];
    const v180: US1 = patternInput_2[27];
    const v179: US1 = patternInput_2[26];
    const v178: US8 = patternInput_2[25];
    const v177: US1 = patternInput_2[24];
    const v176: US1 = patternInput_2[23];
    const v175: US1 = patternInput_2[22];
    const v174: US1 = patternInput_2[21];
    const v173: US1 = patternInput_2[20];
    const v172: US4 = patternInput_2[19];
    const v171: US7 = patternInput_2[18];
    const v170: US1 = patternInput_2[17];
    const v169: US1 = patternInput_2[16];
    const v168: US1 = patternInput_2[15];
    const v167: US6 = patternInput_2[14];
    const v166: US4 = patternInput_2[13];
    const v165: US1 = patternInput_2[12];
    const v164: US1 = patternInput_2[11];
    const v162: US4 = patternInput_2[9];
    const v161: US1 = patternInput_2[8];
    const v160: US1 = patternInput_2[7];
    const v159: US1 = patternInput_2[6];
    const v158: US1 = patternInput_2[5];
    const v157: US1 = patternInput_2[4];
    const v156: US1 = patternInput_2[3];
    const v155: US3 = patternInput_2[2];
    const v154: US1 = patternInput_2[1];
    const v153: US1 = patternInput_2[0];
    const v216: () => any[] = (): any[] => closure165(void 0, void 0);
    [v153, v154, v155, v156, v157, v158, v159, v160, v161, v162, US5_US5_1(v216), v164, v165, v166, v167, v168, v169, v170, v171, v172, v173, v174, v175, v176, v177, v178, v179, v180, v181, v182, v183, v184, v185, v186, v187, v188, v189, v190, v191, v192, v193, v194, v195, v196, v197, v198, v199, v200, v201, v202, v203, v204, v205, v206, v207, v208, v209, v210, v211, v212, v213, v214, v215].children = v216;
    const v219: Mut2 = new Mut2(v153, v154, v155, v156, v157, v158, v159, v160, v161, v162, US5_US5_1(v216), v164, v165, v166, v167, v168, v169, v170, v171, v172, v173, v174, v175, v176, v177, v178, v179, v180, v181, v182, v183, v184, v185, v186, v187, v188, v189, v190, v191, v192, v193, v194, v195, v196, v197, v198, v199, v200, v201, v202, v203, v204, v205, v206, v207, v208, v209, v210, v211, v212, v213, v214, v215);
    const v221: (arg0: any) => any = v75_1;
    const v222: any = createComponent;
    const v223: any = v222(v221, v219);
    const patternInput_3: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v287: Mut2 = new Mut2(patternInput_3[0], patternInput_3[1], patternInput_3[2], patternInput_3[3], patternInput_3[4], patternInput_3[5], patternInput_3[6], patternInput_3[7], patternInput_3[8], patternInput_3[9], patternInput_3[10], patternInput_3[11], patternInput_3[12], patternInput_3[13], patternInput_3[14], patternInput_3[15], patternInput_3[16], patternInput_3[17], patternInput_3[18], patternInput_3[19], patternInput_3[20], patternInput_3[21], patternInput_3[22], patternInput_3[23], patternInput_3[24], patternInput_3[25], patternInput_3[26], patternInput_3[27], patternInput_3[28], patternInput_3[29], patternInput_3[30], patternInput_3[31], patternInput_3[32], patternInput_3[33], patternInput_3[34], patternInput_3[35], patternInput_3[36], patternInput_3[37], patternInput_3[38], patternInput_3[39], patternInput_3[40], patternInput_3[41], patternInput_3[42], patternInput_3[43], patternInput_3[44], patternInput_3[45], patternInput_3[46], patternInput_3[47], patternInput_3[48], patternInput_3[49], patternInput_3[50], patternInput_3[51], patternInput_3[52], patternInput_3[53], patternInput_3[54], patternInput_3[55], patternInput_3[56], patternInput_3[57], patternInput_3[58], patternInput_3[59], patternInput_3[60], patternInput_3[61], patternInput_3[62]);
    const v288: () => any = (): any => closure166(void 0, void 0);
    const v289: Mut6 = new Mut6(v141, v288, v141);
    const v291: (arg0: any) => any = v140;
    const v292: any = createComponent;
    const v293: any = v292(v291, v289);
    v287.l29 = US8_US8_1(v293);
    v287.l47 = US1_US1_1(v149);
    const v296: () => void = (): void => {
        closure167(void 0, void 0);
    };
    v287.l39 = US10_US10_1(v296);
    const patternInput_4: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v287.l0, v287.l1, v287.l2, v287.l3, v287.l4, v287.l5, v287.l6, v287.l7, v287.l8, v287.l9, v287.l10, v287.l11, v287.l12, v287.l13, v287.l14, v287.l15, v287.l16, v287.l17, v287.l18, v287.l19, v287.l20, v287.l21, v287.l22, v287.l23, v287.l24, v287.l25, v287.l26, v287.l27, v287.l28, v287.l29, v287.l30, v287.l31, v287.l32, v287.l33, v287.l34, v287.l35, v287.l36, v287.l37, v287.l38, v287.l39, v287.l40, v287.l41, v287.l42, v287.l43, v287.l44, v287.l45, v287.l46, v287.l47, v287.l48, v287.l49, v287.l50, v287.l51, v287.l52, v287.l53, v287.l54, v287.l55, v287.l56, v287.l57, v287.l58, v287.l59, v287.l60, v287.l61, v287.l62];
    const v360: US1 = patternInput_4[62];
    const v359: US0 = patternInput_4[61];
    const v358: US1 = patternInput_4[60];
    const v357: US6 = patternInput_4[59];
    const v356: US1 = patternInput_4[58];
    const v355: US1 = patternInput_4[57];
    const v354: US8 = patternInput_4[56];
    const v353: US1 = patternInput_4[55];
    const v352: US1 = patternInput_4[54];
    const v351: US1 = patternInput_4[53];
    const v350: US1 = patternInput_4[52];
    const v349: US1 = patternInput_4[51];
    const v348: US1 = patternInput_4[50];
    const v347: US1 = patternInput_4[49];
    const v346: US1 = patternInput_4[48];
    const v345: US1 = patternInput_4[47];
    const v344: US1 = patternInput_4[46];
    const v343: US1 = patternInput_4[45];
    const v342: US1 = patternInput_4[44];
    const v341: US1 = patternInput_4[43];
    const v340: US1 = patternInput_4[42];
    const v339: US1 = patternInput_4[41];
    const v338: US9 = patternInput_4[40];
    const v337: US10 = patternInput_4[39];
    const v336: US9 = patternInput_4[38];
    const v335: US1 = patternInput_4[37];
    const v334: US1 = patternInput_4[36];
    const v333: US1 = patternInput_4[35];
    const v332: US1 = patternInput_4[34];
    const v331: US1 = patternInput_4[33];
    const v330: US1 = patternInput_4[32];
    const v329: US1 = patternInput_4[31];
    const v328: US1 = patternInput_4[30];
    const v327: US8 = patternInput_4[29];
    const v326: US1 = patternInput_4[28];
    const v325: US1 = patternInput_4[27];
    const v324: US1 = patternInput_4[26];
    const v323: US8 = patternInput_4[25];
    const v322: US1 = patternInput_4[24];
    const v321: US1 = patternInput_4[23];
    const v320: US1 = patternInput_4[22];
    const v319: US1 = patternInput_4[21];
    const v318: US1 = patternInput_4[20];
    const v317: US4 = patternInput_4[19];
    const v316: US7 = patternInput_4[18];
    const v315: US1 = patternInput_4[17];
    const v314: US1 = patternInput_4[16];
    const v313: US1 = patternInput_4[15];
    const v312: US6 = patternInput_4[14];
    const v311: US4 = patternInput_4[13];
    const v310: US1 = patternInput_4[12];
    const v309: US1 = patternInput_4[11];
    const v307: US4 = patternInput_4[9];
    const v306: US1 = patternInput_4[8];
    const v305: US1 = patternInput_4[7];
    const v304: US1 = patternInput_4[6];
    const v303: US1 = patternInput_4[5];
    const v302: US1 = patternInput_4[4];
    const v301: US1 = patternInput_4[3];
    const v300: US3 = patternInput_4[2];
    const v299: US1 = patternInput_4[1];
    const v298: US1 = patternInput_4[0];
    const v361: () => any[] = (): any[] => closure168(void 0, void 0);
    [v298, v299, v300, v301, v302, v303, v304, v305, v306, v307, US5_US5_1(v361), v309, v310, v311, v312, v313, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v332, v333, v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v346, v347, v348, v349, v350, v351, v352, v353, v354, v355, v356, v357, v358, v359, v360].children = v361;
    const v364: Mut2 = new Mut2(v298, v299, v300, v301, v302, v303, v304, v305, v306, v307, US5_US5_1(v361), v309, v310, v311, v312, v313, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v332, v333, v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v346, v347, v348, v349, v350, v351, v352, v353, v354, v355, v356, v357, v358, v359, v360);
    const v366: (arg0: any) => any = v75_1;
    const v367: any = createComponent;
    return [v74_1, v223, v367(v366, v364)];
}

export function method17(v0_1: int32, v1_1: Mut15): boolean {
    return v1_1.l0 < v0_1;
}

export function method18(v0_1_mut: UH1, v1_1_mut: UH1): UH1 {
    method18:
    while (true) {
        const v0_1: UH1 = v0_1_mut, v1_1: UH1 = v1_1_mut;
        if (v0_1.tag === UH1_Tag.UH1_1) {
            return v1_1;
        }
        else {
            v0_1_mut = v0_1.fields[2];
            v1_1_mut = UH1_UH1_0(v0_1.fields[0], v0_1.fields[1], v1_1);
            continue method18;
        }
        break;
    }
}

export function method20(v0_1_mut: UH1, v1_1_mut: int32): int32 {
    method20:
    while (true) {
        const v0_1: UH1 = v0_1_mut, v1_1: int32 = v1_1_mut;
        if (v0_1.tag === UH1_Tag.UH1_1) {
            return v1_1 | 0;
        }
        else {
            v0_1_mut = v0_1.fields[2];
            v1_1_mut = (v1_1 + 1);
            continue method20;
        }
        break;
    }
}

export function method21(v0_1_mut: [int32, int32][], v1_1_mut: UH1, v2_mut: int32): int32 {
    method21:
    while (true) {
        const v0_1: [int32, int32][] = v0_1_mut, v1_1: UH1 = v1_1_mut, v2: int32 = v2_mut;
        if (v1_1.tag === UH1_Tag.UH1_1) {
            return v2 | 0;
        }
        else {
            v0_1[v2] = [v1_1.fields[0], v1_1.fields[1]];
            v0_1_mut = v0_1;
            v1_1_mut = v1_1.fields[2];
            v2_mut = (v2 + 1);
            continue method21;
        }
        break;
    }
}

export function method19(v0_1: UH1): [int32, int32][] {
    const v2: int32 = method20(v0_1, 0) | 0;
    const v3: [int32, int32][] = fill(new Array(v2), 0, v2, null);
    const v5: int32 = method21(v3, v0_1, 0) | 0;
    return v3;
}

export function closure173(v0_1: () => [int32, int32], unitVar: void): any[] {
    const patternInput: [int32, int32] = v0_1();
    return [<>
        {JSON.stringify(patternInput[1], null, 2)}
    </>];
}

export function closure172(v0_1: () => [int32, int32], unitVar: void): any[] {
    const v3: any = hope;
    const v4: any = v3.pre;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v68_1: () => any[] = (): any[] => closure173(v0_1, void 0);
    const v71_1: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v68_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]));
    const v72_1: (arg0: any) => any = v4;
    const v75_1: any = createComponent;
    return [v75_1(v72_1, v71_1)];
}

export function closure171(unitVar: void, v0_1: () => [int32, int32]): any[] {
    const v1_1: (arg0: Mut3) => any = (v: Mut3): any => closure10(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v69_1: () => any[] = (): any[] => closure172(v0_1, void 0);
    const v77_1: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v69_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], US1_US1_1("3px"), patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], US8_US8_1(<>
        {int32ToString(v0_1()[0])}
    </>), patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]), US12_US12_2());
    const v79_1: (arg0: any) => any = v1_1;
    const v82_1: any = createComponent;
    return [v82_1(v79_1, v77_1)];
}

export function closure170(v0_1: Mut1, unitVar: void): any[] {
    const v3: [int32, int32][] = v0_1.l8;
    const v4: int32 = v3.length | 0;
    const v6: Mut15 = new Mut15(0, UH1_UH1_1());
    while (method17(v4, v6)) {
        const v8: int32 = v6.l0 | 0;
        const v11: int32 = ((op_UnaryNegation_Int32(v8) + v4) - 1) | 0;
        const v12: UH1 = v6.l1;
        const patternInput_1: [int32, int32] = v3[v11];
        const v15: int32 = (v8 + 1) | 0;
        v6.l0 = (v15 | 0);
        v6.l1 = UH1_UH1_0(patternInput_1[0], patternInput_1[1], v12);
    }
    const v20: [int32, int32][] = method19(method18(v6.l1, UH1_UH1_1()));
    const v23: any = Index;
    const v24: (arg0: () => [int32, int32]) => any[] = (v: () => [int32, int32]): any[] => closure171(void 0, v);
    const v25: () => any[] = v24;
    const patternInput_2: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v91_1: int32 = v20.length | 0;
    const v92_1: any[] = fill(new Array(v91_1), 0, v91_1, null);
    const v93_1: Mut5 = new Mut5(0);
    while (method12(v91_1, v93_1)) {
        const v95: int32 = v93_1.l0 | 0;
        const patternInput_3: [int32, int32] = v20[v95];
        v92_1[v95] = [patternInput_3[0], patternInput_3[1]];
        const v99: int32 = (v95 + 1) | 0;
        v93_1.l0 = (v99 | 0);
    }
    const v103: any = createObj(method5(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], US5_US5_1(v25), patternInput_2[11], patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], US7_US7_1(v92_1), patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62]));
    const v104: (arg0: any) => any = v23;
    const v106: any = createComponent;
    return [v106(v104, v103)];
}

export function closure169(v0_1: Mut1, unitVar: void): any[] {
    const v1_1: (arg0: Mut2) => any = (v: Mut2): any => closure6(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v65_1: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v65_1.l0, v65_1.l1, v65_1.l2, v65_1.l3, v65_1.l4, v65_1.l5, v65_1.l6, v65_1.l7, v65_1.l8, v65_1.l9, v65_1.l10, v65_1.l11, v65_1.l12, v65_1.l13, v65_1.l14, v65_1.l15, v65_1.l16, v65_1.l17, v65_1.l18, v65_1.l19, v65_1.l20, v65_1.l21, v65_1.l22, v65_1.l23, v65_1.l24, v65_1.l25, v65_1.l26, v65_1.l27, v65_1.l28, v65_1.l29, v65_1.l30, v65_1.l31, v65_1.l32, v65_1.l33, v65_1.l34, v65_1.l35, v65_1.l36, v65_1.l37, v65_1.l38, v65_1.l39, v65_1.l40, v65_1.l41, v65_1.l42, v65_1.l43, v65_1.l44, v65_1.l45, v65_1.l46, v65_1.l47, v65_1.l48, v65_1.l49, v65_1.l50, v65_1.l51, v65_1.l52, v65_1.l53, v65_1.l54, v65_1.l55, v65_1.l56, v65_1.l57, v65_1.l58, v65_1.l59, v65_1.l60, v65_1.l61, v65_1.l62];
    const v99: US1 = patternInput_1[33];
    const v98: US1 = patternInput_1[32];
    const v97: US1 = patternInput_1[31];
    const v96: US1 = patternInput_1[30];
    const v95: US8 = patternInput_1[29];
    const v94_1: US1 = patternInput_1[28];
    const v93_1: US1 = patternInput_1[27];
    const v92_1: US1 = patternInput_1[26];
    const v91_1: US8 = patternInput_1[25];
    const v90_1: US1 = patternInput_1[24];
    const v89_1: US1 = patternInput_1[23];
    const v88_1: US1 = patternInput_1[22];
    const v87_1: US1 = patternInput_1[21];
    const v86_1: US1 = patternInput_1[20];
    const v85_1: US4 = patternInput_1[19];
    const v84_1: US7 = patternInput_1[18];
    const v83_1: US1 = patternInput_1[17];
    const v82_1: US1 = patternInput_1[16];
    const v81_1: US1 = patternInput_1[15];
    const v80_1: US6 = patternInput_1[14];
    const v79_1: US4 = patternInput_1[13];
    const v78_1: US1 = patternInput_1[12];
    const v77_1: US1 = patternInput_1[11];
    const v75_1: US4 = patternInput_1[9];
    const v74_1: US1 = patternInput_1[8];
    const v73_1: US1 = patternInput_1[7];
    const v72_1: US1 = patternInput_1[6];
    const v71_1: US1 = patternInput_1[5];
    const v70_1: US1 = patternInput_1[4];
    const v69_1: US1 = patternInput_1[3];
    const v68_1: US3 = patternInput_1[2];
    const v67_1: US1 = patternInput_1[1];
    const v66_1: US1 = patternInput_1[0];
    const v128: US1 = patternInput_1[62];
    const v127: US0 = patternInput_1[61];
    const v126: US1 = patternInput_1[60];
    const v125: US6 = patternInput_1[59];
    const v124: US1 = patternInput_1[58];
    const v123: US1 = patternInput_1[57];
    const v122: US8 = patternInput_1[56];
    const v121: US1 = patternInput_1[55];
    const v120: US1 = patternInput_1[54];
    const v119: US1 = patternInput_1[53];
    const v118: US1 = patternInput_1[52];
    const v117: US1 = patternInput_1[51];
    const v116: US1 = patternInput_1[50];
    const v115: US1 = patternInput_1[49];
    const v114: US1 = patternInput_1[48];
    const v113: US1 = patternInput_1[47];
    const v112: US1 = patternInput_1[46];
    const v111: US1 = patternInput_1[45];
    const v110: US1 = patternInput_1[44];
    const v109: US1 = patternInput_1[43];
    const v108: US1 = patternInput_1[42];
    const v107: US1 = patternInput_1[41];
    const v106: US9 = patternInput_1[40];
    const v105: US10 = patternInput_1[39];
    const v104: US9 = patternInput_1[38];
    const v103: US1 = patternInput_1[37];
    const v102: US1 = patternInput_1[36];
    const v101: US1 = patternInput_1[35];
    const v100: US1 = patternInput_1[34];
    const v129: () => any[] = (): any[] => closure170(v0_1, void 0);
    [v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, US5_US5_1(v129), v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128].children = v129;
    const v132: Mut2 = new Mut2(v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, US5_US5_1(v129), v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128);
    const v134: (arg0: any) => any = v1_1;
    const v137: any = createComponent;
    return [v137(v134, v132)];
}

export function closure160(unitVar: void, v0_1: Mut2): any {
    const v3: any = useStoreon;
    const v4: any[] = v3();
    const v5: Mut1 = v4[0];
    const v6: any = v4[1];
    const v7: (arg0: Mut3) => any = (v: Mut3): any => closure10(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v73_1: any = Stack;
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v145: () => any[] = (): any[] => closure161(void 0, void 0);
    const v154: any = createObj(method5(US1_US1_1("start"), patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], US5_US5_1(v145), patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], US1_US1_1(method10("column", "row")), patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], US1_US1_1(method10("8px", "0")), patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], US1_US1_1("3px"), patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], US1_US1_1("7px"), patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62]));
    const v155: (arg0: any) => any = v73_1;
    const v158: any = createComponent;
    const v160: () => any[] = (): any[] => closure169(v5, void 0);
    const v168: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v160), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], US1_US1_1("counter"), patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], US8_US8_1(v158(v155, v154)), patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]), US12_US12_2());
    const v170: (arg0: any) => any = v7;
    const v171: any = createComponent;
    return v171(v170, v168);
}

export function closure174(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure177(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Chain Status
    </>];
}

export function closure178(unitVar: void, unitVar_1: void): void {
}

export function closure179(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Request
    </>];
}

export function closure180(unitVar: void, unitVar_1: void): void {
}

export function closure181(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Clear
    </>];
}

export function closure176(unitVar: void, unitVar_1: void): any[] {
    const v2: any = Box;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v66_1: () => any[] = (): any[] => closure177(void 0, void 0);
    const v69_1: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v66_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]));
    const v70_1: (arg0: any) => any = v2;
    const v73_1: any = createComponent;
    const v74_1: any = v73_1(v70_1, v69_1);
    const v75_1: (arg0: Mut2) => any = (v: Mut2): any => closure24(void 0, v);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v139: Mut2 = new Mut2(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62]);
    const v140: (arg0: Mut6) => any = (v_1: Mut6): any => closure31(void 0, v_1);
    const v141: (arg0: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1]) => [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = (arg10$0040_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1]): [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] => closure33(void 0, arg10$0040_1);
    const v142: () => any = (): any => closure163(void 0, void 0);
    const v143: Mut6 = new Mut6(v141, v142, v141);
    const v145: (arg0: any) => any = v140;
    const v146: any = createComponent;
    const v147: any = v146(v145, v143);
    v139.l29 = US8_US8_1(v147);
    const v149: string = "10px";
    v139.l47 = US1_US1_1(v149);
    const v151: () => void = (): void => {
        closure178(void 0, void 0);
    };
    v139.l39 = US10_US10_1(v151);
    const patternInput_2: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v139.l0, v139.l1, v139.l2, v139.l3, v139.l4, v139.l5, v139.l6, v139.l7, v139.l8, v139.l9, v139.l10, v139.l11, v139.l12, v139.l13, v139.l14, v139.l15, v139.l16, v139.l17, v139.l18, v139.l19, v139.l20, v139.l21, v139.l22, v139.l23, v139.l24, v139.l25, v139.l26, v139.l27, v139.l28, v139.l29, v139.l30, v139.l31, v139.l32, v139.l33, v139.l34, v139.l35, v139.l36, v139.l37, v139.l38, v139.l39, v139.l40, v139.l41, v139.l42, v139.l43, v139.l44, v139.l45, v139.l46, v139.l47, v139.l48, v139.l49, v139.l50, v139.l51, v139.l52, v139.l53, v139.l54, v139.l55, v139.l56, v139.l57, v139.l58, v139.l59, v139.l60, v139.l61, v139.l62];
    const v215: US1 = patternInput_2[62];
    const v214: US0 = patternInput_2[61];
    const v213: US1 = patternInput_2[60];
    const v212: US6 = patternInput_2[59];
    const v211: US1 = patternInput_2[58];
    const v210: US1 = patternInput_2[57];
    const v209: US8 = patternInput_2[56];
    const v208: US1 = patternInput_2[55];
    const v207: US1 = patternInput_2[54];
    const v206: US1 = patternInput_2[53];
    const v205: US1 = patternInput_2[52];
    const v204: US1 = patternInput_2[51];
    const v203: US1 = patternInput_2[50];
    const v202: US1 = patternInput_2[49];
    const v201: US1 = patternInput_2[48];
    const v200: US1 = patternInput_2[47];
    const v199: US1 = patternInput_2[46];
    const v198: US1 = patternInput_2[45];
    const v197: US1 = patternInput_2[44];
    const v196: US1 = patternInput_2[43];
    const v195: US1 = patternInput_2[42];
    const v194: US1 = patternInput_2[41];
    const v193: US9 = patternInput_2[40];
    const v192: US10 = patternInput_2[39];
    const v191: US9 = patternInput_2[38];
    const v190: US1 = patternInput_2[37];
    const v189: US1 = patternInput_2[36];
    const v188: US1 = patternInput_2[35];
    const v187: US1 = patternInput_2[34];
    const v186: US1 = patternInput_2[33];
    const v185: US1 = patternInput_2[32];
    const v184: US1 = patternInput_2[31];
    const v183: US1 = patternInput_2[30];
    const v182: US8 = patternInput_2[29];
    const v181: US1 = patternInput_2[28];
    const v180: US1 = patternInput_2[27];
    const v179: US1 = patternInput_2[26];
    const v178: US8 = patternInput_2[25];
    const v177: US1 = patternInput_2[24];
    const v176: US1 = patternInput_2[23];
    const v175: US1 = patternInput_2[22];
    const v174: US1 = patternInput_2[21];
    const v173: US1 = patternInput_2[20];
    const v172: US4 = patternInput_2[19];
    const v171: US7 = patternInput_2[18];
    const v170: US1 = patternInput_2[17];
    const v169: US1 = patternInput_2[16];
    const v168: US1 = patternInput_2[15];
    const v167: US6 = patternInput_2[14];
    const v166: US4 = patternInput_2[13];
    const v165: US1 = patternInput_2[12];
    const v164: US1 = patternInput_2[11];
    const v162: US4 = patternInput_2[9];
    const v161: US1 = patternInput_2[8];
    const v160: US1 = patternInput_2[7];
    const v159: US1 = patternInput_2[6];
    const v158: US1 = patternInput_2[5];
    const v157: US1 = patternInput_2[4];
    const v156: US1 = patternInput_2[3];
    const v155: US3 = patternInput_2[2];
    const v154: US1 = patternInput_2[1];
    const v153: US1 = patternInput_2[0];
    const v216: () => any[] = (): any[] => closure179(void 0, void 0);
    [v153, v154, v155, v156, v157, v158, v159, v160, v161, v162, US5_US5_1(v216), v164, v165, v166, v167, v168, v169, v170, v171, v172, v173, v174, v175, v176, v177, v178, v179, v180, v181, v182, v183, v184, v185, v186, v187, v188, v189, v190, v191, v192, v193, v194, v195, v196, v197, v198, v199, v200, v201, v202, v203, v204, v205, v206, v207, v208, v209, v210, v211, v212, v213, v214, v215].children = v216;
    const v219: Mut2 = new Mut2(v153, v154, v155, v156, v157, v158, v159, v160, v161, v162, US5_US5_1(v216), v164, v165, v166, v167, v168, v169, v170, v171, v172, v173, v174, v175, v176, v177, v178, v179, v180, v181, v182, v183, v184, v185, v186, v187, v188, v189, v190, v191, v192, v193, v194, v195, v196, v197, v198, v199, v200, v201, v202, v203, v204, v205, v206, v207, v208, v209, v210, v211, v212, v213, v214, v215);
    const v221: (arg0: any) => any = v75_1;
    const v222: any = createComponent;
    const v223: any = v222(v221, v219);
    const patternInput_3: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v287: Mut2 = new Mut2(patternInput_3[0], patternInput_3[1], patternInput_3[2], patternInput_3[3], patternInput_3[4], patternInput_3[5], patternInput_3[6], patternInput_3[7], patternInput_3[8], patternInput_3[9], patternInput_3[10], patternInput_3[11], patternInput_3[12], patternInput_3[13], patternInput_3[14], patternInput_3[15], patternInput_3[16], patternInput_3[17], patternInput_3[18], patternInput_3[19], patternInput_3[20], patternInput_3[21], patternInput_3[22], patternInput_3[23], patternInput_3[24], patternInput_3[25], patternInput_3[26], patternInput_3[27], patternInput_3[28], patternInput_3[29], patternInput_3[30], patternInput_3[31], patternInput_3[32], patternInput_3[33], patternInput_3[34], patternInput_3[35], patternInput_3[36], patternInput_3[37], patternInput_3[38], patternInput_3[39], patternInput_3[40], patternInput_3[41], patternInput_3[42], patternInput_3[43], patternInput_3[44], patternInput_3[45], patternInput_3[46], patternInput_3[47], patternInput_3[48], patternInput_3[49], patternInput_3[50], patternInput_3[51], patternInput_3[52], patternInput_3[53], patternInput_3[54], patternInput_3[55], patternInput_3[56], patternInput_3[57], patternInput_3[58], patternInput_3[59], patternInput_3[60], patternInput_3[61], patternInput_3[62]);
    const v288: () => any = (): any => closure166(void 0, void 0);
    const v289: Mut6 = new Mut6(v141, v288, v141);
    const v291: (arg0: any) => any = v140;
    const v292: any = createComponent;
    const v293: any = v292(v291, v289);
    v287.l29 = US8_US8_1(v293);
    v287.l47 = US1_US1_1(v149);
    const v296: () => void = (): void => {
        closure180(void 0, void 0);
    };
    v287.l39 = US10_US10_1(v296);
    const patternInput_4: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v287.l0, v287.l1, v287.l2, v287.l3, v287.l4, v287.l5, v287.l6, v287.l7, v287.l8, v287.l9, v287.l10, v287.l11, v287.l12, v287.l13, v287.l14, v287.l15, v287.l16, v287.l17, v287.l18, v287.l19, v287.l20, v287.l21, v287.l22, v287.l23, v287.l24, v287.l25, v287.l26, v287.l27, v287.l28, v287.l29, v287.l30, v287.l31, v287.l32, v287.l33, v287.l34, v287.l35, v287.l36, v287.l37, v287.l38, v287.l39, v287.l40, v287.l41, v287.l42, v287.l43, v287.l44, v287.l45, v287.l46, v287.l47, v287.l48, v287.l49, v287.l50, v287.l51, v287.l52, v287.l53, v287.l54, v287.l55, v287.l56, v287.l57, v287.l58, v287.l59, v287.l60, v287.l61, v287.l62];
    const v360: US1 = patternInput_4[62];
    const v359: US0 = patternInput_4[61];
    const v358: US1 = patternInput_4[60];
    const v357: US6 = patternInput_4[59];
    const v356: US1 = patternInput_4[58];
    const v355: US1 = patternInput_4[57];
    const v354: US8 = patternInput_4[56];
    const v353: US1 = patternInput_4[55];
    const v352: US1 = patternInput_4[54];
    const v351: US1 = patternInput_4[53];
    const v350: US1 = patternInput_4[52];
    const v349: US1 = patternInput_4[51];
    const v348: US1 = patternInput_4[50];
    const v347: US1 = patternInput_4[49];
    const v346: US1 = patternInput_4[48];
    const v345: US1 = patternInput_4[47];
    const v344: US1 = patternInput_4[46];
    const v343: US1 = patternInput_4[45];
    const v342: US1 = patternInput_4[44];
    const v341: US1 = patternInput_4[43];
    const v340: US1 = patternInput_4[42];
    const v339: US1 = patternInput_4[41];
    const v338: US9 = patternInput_4[40];
    const v337: US10 = patternInput_4[39];
    const v336: US9 = patternInput_4[38];
    const v335: US1 = patternInput_4[37];
    const v334: US1 = patternInput_4[36];
    const v333: US1 = patternInput_4[35];
    const v332: US1 = patternInput_4[34];
    const v331: US1 = patternInput_4[33];
    const v330: US1 = patternInput_4[32];
    const v329: US1 = patternInput_4[31];
    const v328: US1 = patternInput_4[30];
    const v327: US8 = patternInput_4[29];
    const v326: US1 = patternInput_4[28];
    const v325: US1 = patternInput_4[27];
    const v324: US1 = patternInput_4[26];
    const v323: US8 = patternInput_4[25];
    const v322: US1 = patternInput_4[24];
    const v321: US1 = patternInput_4[23];
    const v320: US1 = patternInput_4[22];
    const v319: US1 = patternInput_4[21];
    const v318: US1 = patternInput_4[20];
    const v317: US4 = patternInput_4[19];
    const v316: US7 = patternInput_4[18];
    const v315: US1 = patternInput_4[17];
    const v314: US1 = patternInput_4[16];
    const v313: US1 = patternInput_4[15];
    const v312: US6 = patternInput_4[14];
    const v311: US4 = patternInput_4[13];
    const v310: US1 = patternInput_4[12];
    const v309: US1 = patternInput_4[11];
    const v307: US4 = patternInput_4[9];
    const v306: US1 = patternInput_4[8];
    const v305: US1 = patternInput_4[7];
    const v304: US1 = patternInput_4[6];
    const v303: US1 = patternInput_4[5];
    const v302: US1 = patternInput_4[4];
    const v301: US1 = patternInput_4[3];
    const v300: US3 = patternInput_4[2];
    const v299: US1 = patternInput_4[1];
    const v298: US1 = patternInput_4[0];
    const v361: () => any[] = (): any[] => closure181(void 0, void 0);
    [v298, v299, v300, v301, v302, v303, v304, v305, v306, v307, US5_US5_1(v361), v309, v310, v311, v312, v313, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v332, v333, v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v346, v347, v348, v349, v350, v351, v352, v353, v354, v355, v356, v357, v358, v359, v360].children = v361;
    const v364: Mut2 = new Mut2(v298, v299, v300, v301, v302, v303, v304, v305, v306, v307, US5_US5_1(v361), v309, v310, v311, v312, v313, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v332, v333, v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v346, v347, v348, v349, v350, v351, v352, v353, v354, v355, v356, v357, v358, v359, v360);
    const v366: (arg0: any) => any = v75_1;
    const v367: any = createComponent;
    return [v74_1, v223, v367(v366, v364)];
}

export function method22(v0_1: int32, v1_1: Mut16): boolean {
    return v1_1.l0 < v0_1;
}

export function method23(v0_1_mut: UH2, v1_1_mut: UH2): UH2 {
    method23:
    while (true) {
        const v0_1: UH2 = v0_1_mut, v1_1: UH2 = v1_1_mut;
        if (v0_1.tag === UH2_Tag.UH2_1) {
            return v1_1;
        }
        else {
            v0_1_mut = v0_1.fields[2];
            v1_1_mut = UH2_UH2_0(v0_1.fields[0], v0_1.fields[1], v1_1);
            continue method23;
        }
        break;
    }
}

export function method25(v0_1_mut: UH2, v1_1_mut: int32): int32 {
    method25:
    while (true) {
        const v0_1: UH2 = v0_1_mut, v1_1: int32 = v1_1_mut;
        if (v0_1.tag === UH2_Tag.UH2_1) {
            return v1_1 | 0;
        }
        else {
            v0_1_mut = v0_1.fields[2];
            v1_1_mut = (v1_1 + 1);
            continue method25;
        }
        break;
    }
}

export function method26(v0_1_mut: [int32, any][], v1_1_mut: UH2, v2_mut: int32): int32 {
    method26:
    while (true) {
        const v0_1: [int32, any][] = v0_1_mut, v1_1: UH2 = v1_1_mut, v2: int32 = v2_mut;
        if (v1_1.tag === UH2_Tag.UH2_1) {
            return v2 | 0;
        }
        else {
            v0_1[v2] = [v1_1.fields[0], v1_1.fields[1]];
            v0_1_mut = v0_1;
            v1_1_mut = v1_1.fields[2];
            v2_mut = (v2 + 1);
            continue method26;
        }
        break;
    }
}

export function method24(v0_1: UH2): [int32, any][] {
    const v2: int32 = method25(v0_1, 0) | 0;
    const v3: [int32, any][] = fill(new Array(v2), 0, v2, null);
    const v5: int32 = method26(v3, v0_1, 0) | 0;
    return v3;
}

export function closure186(v0_1: () => [int32, any], unitVar: void): any[] {
    const patternInput: [int32, any] = v0_1();
    return [<>
        {JSON.stringify(patternInput[1], null, 2)}
    </>];
}

export function closure185(v0_1: () => [int32, any], unitVar: void): any[] {
    const v3: any = hope;
    const v4: any = v3.pre;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v68_1: () => any[] = (): any[] => closure186(v0_1, void 0);
    const v71_1: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v68_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]));
    const v72_1: (arg0: any) => any = v4;
    const v75_1: any = createComponent;
    return [v75_1(v72_1, v71_1)];
}

export function closure184(unitVar: void, v0_1: () => [int32, any]): any[] {
    const v1_1: (arg0: Mut3) => any = (v: Mut3): any => closure10(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v69_1: () => any[] = (): any[] => closure185(v0_1, void 0);
    const v77_1: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v69_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], US1_US1_1("3px"), patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], US8_US8_1(<>
        {int32ToString(v0_1()[0])}
    </>), patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]), US12_US12_2());
    const v79_1: (arg0: any) => any = v1_1;
    const v82_1: any = createComponent;
    return [v82_1(v79_1, v77_1)];
}

export function closure183(v0_1: Mut1, unitVar: void): any[] {
    const v2: [int32, any][] = v0_1.l7;
    const v4: int32 = v2.length | 0;
    const v6: Mut16 = new Mut16(0, UH2_UH2_1());
    while (method22(v4, v6)) {
        const v8: int32 = v6.l0 | 0;
        const v11: int32 = ((op_UnaryNegation_Int32(v8) + v4) - 1) | 0;
        const v12: UH2 = v6.l1;
        const patternInput_1: [int32, any] = v2[v11];
        const v15: int32 = (v8 + 1) | 0;
        v6.l0 = (v15 | 0);
        v6.l1 = UH2_UH2_0(patternInput_1[0], patternInput_1[1], v12);
    }
    const v20: [int32, any][] = method24(method23(v6.l1, UH2_UH2_1()));
    const v23: any = Index;
    const v24: (arg0: () => [int32, any]) => any[] = (v: () => [int32, any]): any[] => closure184(void 0, v);
    const v25: () => any[] = v24;
    const patternInput_2: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v91_1: int32 = v20.length | 0;
    const v92_1: any[] = fill(new Array(v91_1), 0, v91_1, null);
    const v93_1: Mut5 = new Mut5(0);
    while (method12(v91_1, v93_1)) {
        const v95: int32 = v93_1.l0 | 0;
        const patternInput_3: [int32, any] = v20[v95];
        v92_1[v95] = [patternInput_3[0], patternInput_3[1]];
        const v99: int32 = (v95 + 1) | 0;
        v93_1.l0 = (v99 | 0);
    }
    const v103: any = createObj(method5(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], US5_US5_1(v25), patternInput_2[11], patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], US7_US7_1(v92_1), patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62]));
    const v104: (arg0: any) => any = v23;
    const v106: any = createComponent;
    return [v106(v104, v103)];
}

export function closure182(v0_1: Mut1, unitVar: void): any[] {
    const v1_1: (arg0: Mut2) => any = (v: Mut2): any => closure6(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v65_1: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v65_1.l0, v65_1.l1, v65_1.l2, v65_1.l3, v65_1.l4, v65_1.l5, v65_1.l6, v65_1.l7, v65_1.l8, v65_1.l9, v65_1.l10, v65_1.l11, v65_1.l12, v65_1.l13, v65_1.l14, v65_1.l15, v65_1.l16, v65_1.l17, v65_1.l18, v65_1.l19, v65_1.l20, v65_1.l21, v65_1.l22, v65_1.l23, v65_1.l24, v65_1.l25, v65_1.l26, v65_1.l27, v65_1.l28, v65_1.l29, v65_1.l30, v65_1.l31, v65_1.l32, v65_1.l33, v65_1.l34, v65_1.l35, v65_1.l36, v65_1.l37, v65_1.l38, v65_1.l39, v65_1.l40, v65_1.l41, v65_1.l42, v65_1.l43, v65_1.l44, v65_1.l45, v65_1.l46, v65_1.l47, v65_1.l48, v65_1.l49, v65_1.l50, v65_1.l51, v65_1.l52, v65_1.l53, v65_1.l54, v65_1.l55, v65_1.l56, v65_1.l57, v65_1.l58, v65_1.l59, v65_1.l60, v65_1.l61, v65_1.l62];
    const v99: US1 = patternInput_1[33];
    const v98: US1 = patternInput_1[32];
    const v97: US1 = patternInput_1[31];
    const v96: US1 = patternInput_1[30];
    const v95: US8 = patternInput_1[29];
    const v94_1: US1 = patternInput_1[28];
    const v93_1: US1 = patternInput_1[27];
    const v92_1: US1 = patternInput_1[26];
    const v91_1: US8 = patternInput_1[25];
    const v90_1: US1 = patternInput_1[24];
    const v89_1: US1 = patternInput_1[23];
    const v88_1: US1 = patternInput_1[22];
    const v87_1: US1 = patternInput_1[21];
    const v86_1: US1 = patternInput_1[20];
    const v85_1: US4 = patternInput_1[19];
    const v84_1: US7 = patternInput_1[18];
    const v83_1: US1 = patternInput_1[17];
    const v82_1: US1 = patternInput_1[16];
    const v81_1: US1 = patternInput_1[15];
    const v80_1: US6 = patternInput_1[14];
    const v79_1: US4 = patternInput_1[13];
    const v78_1: US1 = patternInput_1[12];
    const v77_1: US1 = patternInput_1[11];
    const v75_1: US4 = patternInput_1[9];
    const v74_1: US1 = patternInput_1[8];
    const v73_1: US1 = patternInput_1[7];
    const v72_1: US1 = patternInput_1[6];
    const v71_1: US1 = patternInput_1[5];
    const v70_1: US1 = patternInput_1[4];
    const v69_1: US1 = patternInput_1[3];
    const v68_1: US3 = patternInput_1[2];
    const v67_1: US1 = patternInput_1[1];
    const v66_1: US1 = patternInput_1[0];
    const v128: US1 = patternInput_1[62];
    const v127: US0 = patternInput_1[61];
    const v126: US1 = patternInput_1[60];
    const v125: US6 = patternInput_1[59];
    const v124: US1 = patternInput_1[58];
    const v123: US1 = patternInput_1[57];
    const v122: US8 = patternInput_1[56];
    const v121: US1 = patternInput_1[55];
    const v120: US1 = patternInput_1[54];
    const v119: US1 = patternInput_1[53];
    const v118: US1 = patternInput_1[52];
    const v117: US1 = patternInput_1[51];
    const v116: US1 = patternInput_1[50];
    const v115: US1 = patternInput_1[49];
    const v114: US1 = patternInput_1[48];
    const v113: US1 = patternInput_1[47];
    const v112: US1 = patternInput_1[46];
    const v111: US1 = patternInput_1[45];
    const v110: US1 = patternInput_1[44];
    const v109: US1 = patternInput_1[43];
    const v108: US1 = patternInput_1[42];
    const v107: US1 = patternInput_1[41];
    const v106: US9 = patternInput_1[40];
    const v105: US10 = patternInput_1[39];
    const v104: US9 = patternInput_1[38];
    const v103: US1 = patternInput_1[37];
    const v102: US1 = patternInput_1[36];
    const v101: US1 = patternInput_1[35];
    const v100: US1 = patternInput_1[34];
    const v129: () => any[] = (): any[] => closure183(v0_1, void 0);
    [v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, US5_US5_1(v129), v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128].children = v129;
    const v132: Mut2 = new Mut2(v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, US5_US5_1(v129), v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128);
    const v134: (arg0: any) => any = v1_1;
    const v137: any = createComponent;
    return [v137(v134, v132)];
}

export function closure175(unitVar: void, v0_1: Mut2): any {
    const v3: any = useStoreon;
    const v4: any[] = v3();
    const v5: Mut1 = v4[0];
    const v6: any = v4[1];
    const v7: (arg0: Mut3) => any = (v: Mut3): any => closure10(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v73_1: any = Stack;
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v145: () => any[] = (): any[] => closure176(void 0, void 0);
    const v154: any = createObj(method5(US1_US1_1("start"), patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], US5_US5_1(v145), patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], US1_US1_1(method10("column", "row")), patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], US1_US1_1(method10("8px", "0")), patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], US1_US1_1("3px"), patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], US1_US1_1("7px"), patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62]));
    const v155: (arg0: any) => any = v73_1;
    const v158: any = createComponent;
    const v160: () => any[] = (): any[] => closure182(v5, void 0);
    const v168: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v160), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], US1_US1_1("status"), patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], US8_US8_1(v158(v155, v154)), patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]), US12_US12_2());
    const v170: (arg0: any) => any = v7;
    const v171: any = createComponent;
    return v171(v170, v168);
}

export function closure187(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure190(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Chain Deploy
    </>];
}

export function closure191(unitVar: void, unitVar_1: void): void {
}

export function closure192(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Request
    </>];
}

export function closure193(unitVar: void, unitVar_1: void): void {
}

export function closure194(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Clear
    </>];
}

export function closure189(unitVar: void, unitVar_1: void): any[] {
    const v2: any = Box;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v66_1: () => any[] = (): any[] => closure190(void 0, void 0);
    const v69_1: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v66_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]));
    const v70_1: (arg0: any) => any = v2;
    const v73_1: any = createComponent;
    const v74_1: any = v73_1(v70_1, v69_1);
    const v75_1: (arg0: Mut2) => any = (v: Mut2): any => closure24(void 0, v);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v139: Mut2 = new Mut2(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62]);
    const v140: (arg0: Mut6) => any = (v_1: Mut6): any => closure31(void 0, v_1);
    const v141: (arg0: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1]) => [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = (arg10$0040_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1]): [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] => closure33(void 0, arg10$0040_1);
    const v142: () => any = (): any => closure163(void 0, void 0);
    const v143: Mut6 = new Mut6(v141, v142, v141);
    const v145: (arg0: any) => any = v140;
    const v146: any = createComponent;
    const v147: any = v146(v145, v143);
    v139.l29 = US8_US8_1(v147);
    const v149: string = "10px";
    v139.l47 = US1_US1_1(v149);
    const v151: () => void = (): void => {
        closure191(void 0, void 0);
    };
    v139.l39 = US10_US10_1(v151);
    const patternInput_2: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v139.l0, v139.l1, v139.l2, v139.l3, v139.l4, v139.l5, v139.l6, v139.l7, v139.l8, v139.l9, v139.l10, v139.l11, v139.l12, v139.l13, v139.l14, v139.l15, v139.l16, v139.l17, v139.l18, v139.l19, v139.l20, v139.l21, v139.l22, v139.l23, v139.l24, v139.l25, v139.l26, v139.l27, v139.l28, v139.l29, v139.l30, v139.l31, v139.l32, v139.l33, v139.l34, v139.l35, v139.l36, v139.l37, v139.l38, v139.l39, v139.l40, v139.l41, v139.l42, v139.l43, v139.l44, v139.l45, v139.l46, v139.l47, v139.l48, v139.l49, v139.l50, v139.l51, v139.l52, v139.l53, v139.l54, v139.l55, v139.l56, v139.l57, v139.l58, v139.l59, v139.l60, v139.l61, v139.l62];
    const v215: US1 = patternInput_2[62];
    const v214: US0 = patternInput_2[61];
    const v213: US1 = patternInput_2[60];
    const v212: US6 = patternInput_2[59];
    const v211: US1 = patternInput_2[58];
    const v210: US1 = patternInput_2[57];
    const v209: US8 = patternInput_2[56];
    const v208: US1 = patternInput_2[55];
    const v207: US1 = patternInput_2[54];
    const v206: US1 = patternInput_2[53];
    const v205: US1 = patternInput_2[52];
    const v204: US1 = patternInput_2[51];
    const v203: US1 = patternInput_2[50];
    const v202: US1 = patternInput_2[49];
    const v201: US1 = patternInput_2[48];
    const v200: US1 = patternInput_2[47];
    const v199: US1 = patternInput_2[46];
    const v198: US1 = patternInput_2[45];
    const v197: US1 = patternInput_2[44];
    const v196: US1 = patternInput_2[43];
    const v195: US1 = patternInput_2[42];
    const v194: US1 = patternInput_2[41];
    const v193: US9 = patternInput_2[40];
    const v192: US10 = patternInput_2[39];
    const v191: US9 = patternInput_2[38];
    const v190: US1 = patternInput_2[37];
    const v189: US1 = patternInput_2[36];
    const v188: US1 = patternInput_2[35];
    const v187: US1 = patternInput_2[34];
    const v186: US1 = patternInput_2[33];
    const v185: US1 = patternInput_2[32];
    const v184: US1 = patternInput_2[31];
    const v183: US1 = patternInput_2[30];
    const v182: US8 = patternInput_2[29];
    const v181: US1 = patternInput_2[28];
    const v180: US1 = patternInput_2[27];
    const v179: US1 = patternInput_2[26];
    const v178: US8 = patternInput_2[25];
    const v177: US1 = patternInput_2[24];
    const v176: US1 = patternInput_2[23];
    const v175: US1 = patternInput_2[22];
    const v174: US1 = patternInput_2[21];
    const v173: US1 = patternInput_2[20];
    const v172: US4 = patternInput_2[19];
    const v171: US7 = patternInput_2[18];
    const v170: US1 = patternInput_2[17];
    const v169: US1 = patternInput_2[16];
    const v168: US1 = patternInput_2[15];
    const v167: US6 = patternInput_2[14];
    const v166: US4 = patternInput_2[13];
    const v165: US1 = patternInput_2[12];
    const v164: US1 = patternInput_2[11];
    const v162: US4 = patternInput_2[9];
    const v161: US1 = patternInput_2[8];
    const v160: US1 = patternInput_2[7];
    const v159: US1 = patternInput_2[6];
    const v158: US1 = patternInput_2[5];
    const v157: US1 = patternInput_2[4];
    const v156: US1 = patternInput_2[3];
    const v155: US3 = patternInput_2[2];
    const v154: US1 = patternInput_2[1];
    const v153: US1 = patternInput_2[0];
    const v216: () => any[] = (): any[] => closure192(void 0, void 0);
    [v153, v154, v155, v156, v157, v158, v159, v160, v161, v162, US5_US5_1(v216), v164, v165, v166, v167, v168, v169, v170, v171, v172, v173, v174, v175, v176, v177, v178, v179, v180, v181, v182, v183, v184, v185, v186, v187, v188, v189, v190, v191, v192, v193, v194, v195, v196, v197, v198, v199, v200, v201, v202, v203, v204, v205, v206, v207, v208, v209, v210, v211, v212, v213, v214, v215].children = v216;
    const v219: Mut2 = new Mut2(v153, v154, v155, v156, v157, v158, v159, v160, v161, v162, US5_US5_1(v216), v164, v165, v166, v167, v168, v169, v170, v171, v172, v173, v174, v175, v176, v177, v178, v179, v180, v181, v182, v183, v184, v185, v186, v187, v188, v189, v190, v191, v192, v193, v194, v195, v196, v197, v198, v199, v200, v201, v202, v203, v204, v205, v206, v207, v208, v209, v210, v211, v212, v213, v214, v215);
    const v221: (arg0: any) => any = v75_1;
    const v222: any = createComponent;
    const v223: any = v222(v221, v219);
    const patternInput_3: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v287: Mut2 = new Mut2(patternInput_3[0], patternInput_3[1], patternInput_3[2], patternInput_3[3], patternInput_3[4], patternInput_3[5], patternInput_3[6], patternInput_3[7], patternInput_3[8], patternInput_3[9], patternInput_3[10], patternInput_3[11], patternInput_3[12], patternInput_3[13], patternInput_3[14], patternInput_3[15], patternInput_3[16], patternInput_3[17], patternInput_3[18], patternInput_3[19], patternInput_3[20], patternInput_3[21], patternInput_3[22], patternInput_3[23], patternInput_3[24], patternInput_3[25], patternInput_3[26], patternInput_3[27], patternInput_3[28], patternInput_3[29], patternInput_3[30], patternInput_3[31], patternInput_3[32], patternInput_3[33], patternInput_3[34], patternInput_3[35], patternInput_3[36], patternInput_3[37], patternInput_3[38], patternInput_3[39], patternInput_3[40], patternInput_3[41], patternInput_3[42], patternInput_3[43], patternInput_3[44], patternInput_3[45], patternInput_3[46], patternInput_3[47], patternInput_3[48], patternInput_3[49], patternInput_3[50], patternInput_3[51], patternInput_3[52], patternInput_3[53], patternInput_3[54], patternInput_3[55], patternInput_3[56], patternInput_3[57], patternInput_3[58], patternInput_3[59], patternInput_3[60], patternInput_3[61], patternInput_3[62]);
    const v288: () => any = (): any => closure166(void 0, void 0);
    const v289: Mut6 = new Mut6(v141, v288, v141);
    const v291: (arg0: any) => any = v140;
    const v292: any = createComponent;
    const v293: any = v292(v291, v289);
    v287.l29 = US8_US8_1(v293);
    v287.l47 = US1_US1_1(v149);
    const v296: () => void = (): void => {
        closure193(void 0, void 0);
    };
    v287.l39 = US10_US10_1(v296);
    const patternInput_4: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v287.l0, v287.l1, v287.l2, v287.l3, v287.l4, v287.l5, v287.l6, v287.l7, v287.l8, v287.l9, v287.l10, v287.l11, v287.l12, v287.l13, v287.l14, v287.l15, v287.l16, v287.l17, v287.l18, v287.l19, v287.l20, v287.l21, v287.l22, v287.l23, v287.l24, v287.l25, v287.l26, v287.l27, v287.l28, v287.l29, v287.l30, v287.l31, v287.l32, v287.l33, v287.l34, v287.l35, v287.l36, v287.l37, v287.l38, v287.l39, v287.l40, v287.l41, v287.l42, v287.l43, v287.l44, v287.l45, v287.l46, v287.l47, v287.l48, v287.l49, v287.l50, v287.l51, v287.l52, v287.l53, v287.l54, v287.l55, v287.l56, v287.l57, v287.l58, v287.l59, v287.l60, v287.l61, v287.l62];
    const v360: US1 = patternInput_4[62];
    const v359: US0 = patternInput_4[61];
    const v358: US1 = patternInput_4[60];
    const v357: US6 = patternInput_4[59];
    const v356: US1 = patternInput_4[58];
    const v355: US1 = patternInput_4[57];
    const v354: US8 = patternInput_4[56];
    const v353: US1 = patternInput_4[55];
    const v352: US1 = patternInput_4[54];
    const v351: US1 = patternInput_4[53];
    const v350: US1 = patternInput_4[52];
    const v349: US1 = patternInput_4[51];
    const v348: US1 = patternInput_4[50];
    const v347: US1 = patternInput_4[49];
    const v346: US1 = patternInput_4[48];
    const v345: US1 = patternInput_4[47];
    const v344: US1 = patternInput_4[46];
    const v343: US1 = patternInput_4[45];
    const v342: US1 = patternInput_4[44];
    const v341: US1 = patternInput_4[43];
    const v340: US1 = patternInput_4[42];
    const v339: US1 = patternInput_4[41];
    const v338: US9 = patternInput_4[40];
    const v337: US10 = patternInput_4[39];
    const v336: US9 = patternInput_4[38];
    const v335: US1 = patternInput_4[37];
    const v334: US1 = patternInput_4[36];
    const v333: US1 = patternInput_4[35];
    const v332: US1 = patternInput_4[34];
    const v331: US1 = patternInput_4[33];
    const v330: US1 = patternInput_4[32];
    const v329: US1 = patternInput_4[31];
    const v328: US1 = patternInput_4[30];
    const v327: US8 = patternInput_4[29];
    const v326: US1 = patternInput_4[28];
    const v325: US1 = patternInput_4[27];
    const v324: US1 = patternInput_4[26];
    const v323: US8 = patternInput_4[25];
    const v322: US1 = patternInput_4[24];
    const v321: US1 = patternInput_4[23];
    const v320: US1 = patternInput_4[22];
    const v319: US1 = patternInput_4[21];
    const v318: US1 = patternInput_4[20];
    const v317: US4 = patternInput_4[19];
    const v316: US7 = patternInput_4[18];
    const v315: US1 = patternInput_4[17];
    const v314: US1 = patternInput_4[16];
    const v313: US1 = patternInput_4[15];
    const v312: US6 = patternInput_4[14];
    const v311: US4 = patternInput_4[13];
    const v310: US1 = patternInput_4[12];
    const v309: US1 = patternInput_4[11];
    const v307: US4 = patternInput_4[9];
    const v306: US1 = patternInput_4[8];
    const v305: US1 = patternInput_4[7];
    const v304: US1 = patternInput_4[6];
    const v303: US1 = patternInput_4[5];
    const v302: US1 = patternInput_4[4];
    const v301: US1 = patternInput_4[3];
    const v300: US3 = patternInput_4[2];
    const v299: US1 = patternInput_4[1];
    const v298: US1 = patternInput_4[0];
    const v361: () => any[] = (): any[] => closure194(void 0, void 0);
    [v298, v299, v300, v301, v302, v303, v304, v305, v306, v307, US5_US5_1(v361), v309, v310, v311, v312, v313, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v332, v333, v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v346, v347, v348, v349, v350, v351, v352, v353, v354, v355, v356, v357, v358, v359, v360].children = v361;
    const v364: Mut2 = new Mut2(v298, v299, v300, v301, v302, v303, v304, v305, v306, v307, US5_US5_1(v361), v309, v310, v311, v312, v313, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v332, v333, v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v346, v347, v348, v349, v350, v351, v352, v353, v354, v355, v356, v357, v358, v359, v360);
    const v366: (arg0: any) => any = v75_1;
    const v367: any = createComponent;
    return [v74_1, v223, v367(v366, v364)];
}

export function closure199(v0_1: () => [int32, any], unitVar: void): any[] {
    const patternInput: [int32, any] = v0_1();
    return [<>
        {JSON.stringify(patternInput[1], null, 2)}
    </>];
}

export function closure198(v0_1: () => [int32, any], unitVar: void): any[] {
    const v3: any = hope;
    const v4: any = v3.pre;
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v68_1: () => any[] = (): any[] => closure199(v0_1, void 0);
    const v71_1: any = createObj(method5(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v68_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]));
    const v72_1: (arg0: any) => any = v4;
    const v75_1: any = createComponent;
    return [v75_1(v72_1, v71_1)];
}

export function closure197(unitVar: void, v0_1: () => [int32, any]): any[] {
    const v1_1: (arg0: Mut3) => any = (v: Mut3): any => closure10(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v69_1: () => any[] = (): any[] => closure198(v0_1, void 0);
    const v77_1: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v69_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], US1_US1_1("3px"), patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], US8_US8_1(<>
        {int32ToString(v0_1()[0])}
    </>), patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]), US12_US12_2());
    const v79_1: (arg0: any) => any = v1_1;
    const v82_1: any = createComponent;
    return [v82_1(v79_1, v77_1)];
}

export function closure196(v0_1: Mut1, unitVar: void): any[] {
    const v1_1: [int32, any][] = v0_1.l6;
    const v4: int32 = v1_1.length | 0;
    const v6: Mut16 = new Mut16(0, UH2_UH2_1());
    while (method22(v4, v6)) {
        const v8: int32 = v6.l0 | 0;
        const v11: int32 = ((op_UnaryNegation_Int32(v8) + v4) - 1) | 0;
        const v12: UH2 = v6.l1;
        const patternInput_1: [int32, any] = v1_1[v11];
        const v15: int32 = (v8 + 1) | 0;
        v6.l0 = (v15 | 0);
        v6.l1 = UH2_UH2_0(patternInput_1[0], patternInput_1[1], v12);
    }
    const v20: [int32, any][] = method24(method23(v6.l1, UH2_UH2_1()));
    const v23: any = Index;
    const v24: (arg0: () => [int32, any]) => any[] = (v: () => [int32, any]): any[] => closure197(void 0, v);
    const v25: () => any[] = v24;
    const patternInput_2: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v91_1: int32 = v20.length | 0;
    const v92_1: any[] = fill(new Array(v91_1), 0, v91_1, null);
    const v93_1: Mut5 = new Mut5(0);
    while (method12(v91_1, v93_1)) {
        const v95: int32 = v93_1.l0 | 0;
        const patternInput_3: [int32, any] = v20[v95];
        v92_1[v95] = [patternInput_3[0], patternInput_3[1]];
        const v99: int32 = (v95 + 1) | 0;
        v93_1.l0 = (v99 | 0);
    }
    const v103: any = createObj(method5(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], US5_US5_1(v25), patternInput_2[11], patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], US7_US7_1(v92_1), patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62]));
    const v104: (arg0: any) => any = v23;
    const v106: any = createComponent;
    return [v106(v104, v103)];
}

export function closure195(v0_1: Mut1, unitVar: void): any[] {
    const v1_1: (arg0: Mut2) => any = (v: Mut2): any => closure6(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v65_1: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v65_1.l0, v65_1.l1, v65_1.l2, v65_1.l3, v65_1.l4, v65_1.l5, v65_1.l6, v65_1.l7, v65_1.l8, v65_1.l9, v65_1.l10, v65_1.l11, v65_1.l12, v65_1.l13, v65_1.l14, v65_1.l15, v65_1.l16, v65_1.l17, v65_1.l18, v65_1.l19, v65_1.l20, v65_1.l21, v65_1.l22, v65_1.l23, v65_1.l24, v65_1.l25, v65_1.l26, v65_1.l27, v65_1.l28, v65_1.l29, v65_1.l30, v65_1.l31, v65_1.l32, v65_1.l33, v65_1.l34, v65_1.l35, v65_1.l36, v65_1.l37, v65_1.l38, v65_1.l39, v65_1.l40, v65_1.l41, v65_1.l42, v65_1.l43, v65_1.l44, v65_1.l45, v65_1.l46, v65_1.l47, v65_1.l48, v65_1.l49, v65_1.l50, v65_1.l51, v65_1.l52, v65_1.l53, v65_1.l54, v65_1.l55, v65_1.l56, v65_1.l57, v65_1.l58, v65_1.l59, v65_1.l60, v65_1.l61, v65_1.l62];
    const v99: US1 = patternInput_1[33];
    const v98: US1 = patternInput_1[32];
    const v97: US1 = patternInput_1[31];
    const v96: US1 = patternInput_1[30];
    const v95: US8 = patternInput_1[29];
    const v94_1: US1 = patternInput_1[28];
    const v93_1: US1 = patternInput_1[27];
    const v92_1: US1 = patternInput_1[26];
    const v91_1: US8 = patternInput_1[25];
    const v90_1: US1 = patternInput_1[24];
    const v89_1: US1 = patternInput_1[23];
    const v88_1: US1 = patternInput_1[22];
    const v87_1: US1 = patternInput_1[21];
    const v86_1: US1 = patternInput_1[20];
    const v85_1: US4 = patternInput_1[19];
    const v84_1: US7 = patternInput_1[18];
    const v83_1: US1 = patternInput_1[17];
    const v82_1: US1 = patternInput_1[16];
    const v81_1: US1 = patternInput_1[15];
    const v80_1: US6 = patternInput_1[14];
    const v79_1: US4 = patternInput_1[13];
    const v78_1: US1 = patternInput_1[12];
    const v77_1: US1 = patternInput_1[11];
    const v75_1: US4 = patternInput_1[9];
    const v74_1: US1 = patternInput_1[8];
    const v73_1: US1 = patternInput_1[7];
    const v72_1: US1 = patternInput_1[6];
    const v71_1: US1 = patternInput_1[5];
    const v70_1: US1 = patternInput_1[4];
    const v69_1: US1 = patternInput_1[3];
    const v68_1: US3 = patternInput_1[2];
    const v67_1: US1 = patternInput_1[1];
    const v66_1: US1 = patternInput_1[0];
    const v128: US1 = patternInput_1[62];
    const v127: US0 = patternInput_1[61];
    const v126: US1 = patternInput_1[60];
    const v125: US6 = patternInput_1[59];
    const v124: US1 = patternInput_1[58];
    const v123: US1 = patternInput_1[57];
    const v122: US8 = patternInput_1[56];
    const v121: US1 = patternInput_1[55];
    const v120: US1 = patternInput_1[54];
    const v119: US1 = patternInput_1[53];
    const v118: US1 = patternInput_1[52];
    const v117: US1 = patternInput_1[51];
    const v116: US1 = patternInput_1[50];
    const v115: US1 = patternInput_1[49];
    const v114: US1 = patternInput_1[48];
    const v113: US1 = patternInput_1[47];
    const v112: US1 = patternInput_1[46];
    const v111: US1 = patternInput_1[45];
    const v110: US1 = patternInput_1[44];
    const v109: US1 = patternInput_1[43];
    const v108: US1 = patternInput_1[42];
    const v107: US1 = patternInput_1[41];
    const v106: US9 = patternInput_1[40];
    const v105: US10 = patternInput_1[39];
    const v104: US9 = patternInput_1[38];
    const v103: US1 = patternInput_1[37];
    const v102: US1 = patternInput_1[36];
    const v101: US1 = patternInput_1[35];
    const v100: US1 = patternInput_1[34];
    const v129: () => any[] = (): any[] => closure196(v0_1, void 0);
    [v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, US5_US5_1(v129), v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128].children = v129;
    const v132: Mut2 = new Mut2(v66_1, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, US5_US5_1(v129), v77_1, v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128);
    const v134: (arg0: any) => any = v1_1;
    const v137: any = createComponent;
    return [v137(v134, v132)];
}

export function closure188(unitVar: void, v0_1: Mut2): any {
    const v3: any = useStoreon;
    const v4: any[] = v3();
    const v5: Mut1 = v4[0];
    const v6: any = v4[1];
    const v7: (arg0: Mut3) => any = (v: Mut3): any => closure10(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v73_1: any = Stack;
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v145: () => any[] = (): any[] => closure189(void 0, void 0);
    const v154: any = createObj(method5(US1_US1_1("start"), patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], US5_US5_1(v145), patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], US1_US1_1(method10("column", "row")), patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], US1_US1_1(method10("8px", "0")), patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], US1_US1_1("3px"), patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], US1_US1_1("7px"), patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62]));
    const v155: (arg0: any) => any = v73_1;
    const v158: any = createComponent;
    const v160: () => any[] = (): any[] => closure195(v5, void 0);
    const v168: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v160), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], US1_US1_1("deploy"), patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], US8_US8_1(v158(v155, v154)), patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]), US12_US12_2());
    const v170: (arg0: any) => any = v7;
    const v171: any = createComponent;
    return v171(v170, v168);
}

export function closure200(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure159(v0_1: any, v1_1: string, v2: boolean, unitVar: void): any[] {
    const v3: (arg0: Mut2) => any = (v: Mut2): any => closure160(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v67_1: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v67_1.l0, v67_1.l1, v67_1.l2, v67_1.l3, v67_1.l4, v67_1.l5, v67_1.l6, v67_1.l7, v67_1.l8, v67_1.l9, v67_1.l10, v67_1.l11, v67_1.l12, v67_1.l13, v67_1.l14, v67_1.l15, v67_1.l16, v67_1.l17, v67_1.l18, v67_1.l19, v67_1.l20, v67_1.l21, v67_1.l22, v67_1.l23, v67_1.l24, v67_1.l25, v67_1.l26, v67_1.l27, v67_1.l28, v67_1.l29, v67_1.l30, v67_1.l31, v67_1.l32, v67_1.l33, v67_1.l34, v67_1.l35, v67_1.l36, v67_1.l37, v67_1.l38, v67_1.l39, v67_1.l40, v67_1.l41, v67_1.l42, v67_1.l43, v67_1.l44, v67_1.l45, v67_1.l46, v67_1.l47, v67_1.l48, v67_1.l49, v67_1.l50, v67_1.l51, v67_1.l52, v67_1.l53, v67_1.l54, v67_1.l55, v67_1.l56, v67_1.l57, v67_1.l58, v67_1.l59, v67_1.l60, v67_1.l61, v67_1.l62];
    const v99: US1 = patternInput_1[31];
    const v98: US1 = patternInput_1[30];
    const v97: US8 = patternInput_1[29];
    const v96: US1 = patternInput_1[28];
    const v95: US1 = patternInput_1[27];
    const v94_1: US1 = patternInput_1[26];
    const v93_1: US8 = patternInput_1[25];
    const v92_1: US1 = patternInput_1[24];
    const v91_1: US1 = patternInput_1[23];
    const v90_1: US1 = patternInput_1[22];
    const v89_1: US1 = patternInput_1[21];
    const v88_1: US1 = patternInput_1[20];
    const v87_1: US4 = patternInput_1[19];
    const v86_1: US7 = patternInput_1[18];
    const v85_1: US1 = patternInput_1[17];
    const v84_1: US1 = patternInput_1[16];
    const v83_1: US1 = patternInput_1[15];
    const v82_1: US6 = patternInput_1[14];
    const v81_1: US4 = patternInput_1[13];
    const v80_1: US1 = patternInput_1[12];
    const v79_1: US1 = patternInput_1[11];
    const v77_1: US4 = patternInput_1[9];
    const v76_1: US1 = patternInput_1[8];
    const v75_1: US1 = patternInput_1[7];
    const v74_1: US1 = patternInput_1[6];
    const v73_1: US1 = patternInput_1[5];
    const v72_1: US1 = patternInput_1[4];
    const v71_1: US1 = patternInput_1[3];
    const v70_1: US3 = patternInput_1[2];
    const v69_1: US1 = patternInput_1[1];
    const v68_1: US1 = patternInput_1[0];
    const v130: US1 = patternInput_1[62];
    const v129: US0 = patternInput_1[61];
    const v128: US1 = patternInput_1[60];
    const v127: US6 = patternInput_1[59];
    const v126: US1 = patternInput_1[58];
    const v125: US1 = patternInput_1[57];
    const v124: US8 = patternInput_1[56];
    const v123: US1 = patternInput_1[55];
    const v122: US1 = patternInput_1[54];
    const v121: US1 = patternInput_1[53];
    const v120: US1 = patternInput_1[52];
    const v119: US1 = patternInput_1[51];
    const v118: US1 = patternInput_1[50];
    const v117: US1 = patternInput_1[49];
    const v116: US1 = patternInput_1[48];
    const v115: US1 = patternInput_1[47];
    const v114: US1 = patternInput_1[46];
    const v113: US1 = patternInput_1[45];
    const v112: US1 = patternInput_1[44];
    const v111: US1 = patternInput_1[43];
    const v110: US1 = patternInput_1[42];
    const v109: US1 = patternInput_1[41];
    const v108: US9 = patternInput_1[40];
    const v107: US10 = patternInput_1[39];
    const v106: US9 = patternInput_1[38];
    const v105: US1 = patternInput_1[37];
    const v104: US1 = patternInput_1[36];
    const v103: US1 = patternInput_1[35];
    const v102: US1 = patternInput_1[34];
    const v101: US1 = patternInput_1[33];
    const v100: US1 = patternInput_1[32];
    const v131: () => any[] = (): any[] => closure174(void 0, void 0);
    [v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, v76_1, v77_1, US5_US5_1(v131), v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129, v130].children = v131;
    const v134: Mut2 = new Mut2(v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, v76_1, v77_1, US5_US5_1(v131), v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129, v130);
    const v136: (arg0: any) => any = v3;
    const v139: any = createComponent;
    const v140: any = v139(v136, v134);
    const v141: (arg0: Mut2) => any = (v_1: Mut2): any => closure175(void 0, v_1);
    const patternInput_2: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v205: Mut2 = new Mut2(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], patternInput_2[10], patternInput_2[11], patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62]);
    const patternInput_3: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v205.l0, v205.l1, v205.l2, v205.l3, v205.l4, v205.l5, v205.l6, v205.l7, v205.l8, v205.l9, v205.l10, v205.l11, v205.l12, v205.l13, v205.l14, v205.l15, v205.l16, v205.l17, v205.l18, v205.l19, v205.l20, v205.l21, v205.l22, v205.l23, v205.l24, v205.l25, v205.l26, v205.l27, v205.l28, v205.l29, v205.l30, v205.l31, v205.l32, v205.l33, v205.l34, v205.l35, v205.l36, v205.l37, v205.l38, v205.l39, v205.l40, v205.l41, v205.l42, v205.l43, v205.l44, v205.l45, v205.l46, v205.l47, v205.l48, v205.l49, v205.l50, v205.l51, v205.l52, v205.l53, v205.l54, v205.l55, v205.l56, v205.l57, v205.l58, v205.l59, v205.l60, v205.l61, v205.l62];
    const v268: US1 = patternInput_3[62];
    const v267: US0 = patternInput_3[61];
    const v266: US1 = patternInput_3[60];
    const v265: US6 = patternInput_3[59];
    const v264: US1 = patternInput_3[58];
    const v263: US1 = patternInput_3[57];
    const v262: US8 = patternInput_3[56];
    const v261: US1 = patternInput_3[55];
    const v260: US1 = patternInput_3[54];
    const v259: US1 = patternInput_3[53];
    const v258: US1 = patternInput_3[52];
    const v257: US1 = patternInput_3[51];
    const v256: US1 = patternInput_3[50];
    const v255: US1 = patternInput_3[49];
    const v254: US1 = patternInput_3[48];
    const v253: US1 = patternInput_3[47];
    const v252: US1 = patternInput_3[46];
    const v251: US1 = patternInput_3[45];
    const v250: US1 = patternInput_3[44];
    const v249: US1 = patternInput_3[43];
    const v248: US1 = patternInput_3[42];
    const v247: US1 = patternInput_3[41];
    const v246: US9 = patternInput_3[40];
    const v245: US10 = patternInput_3[39];
    const v244: US9 = patternInput_3[38];
    const v243: US1 = patternInput_3[37];
    const v242: US1 = patternInput_3[36];
    const v241: US1 = patternInput_3[35];
    const v240: US1 = patternInput_3[34];
    const v239: US1 = patternInput_3[33];
    const v238: US1 = patternInput_3[32];
    const v237: US1 = patternInput_3[31];
    const v236: US1 = patternInput_3[30];
    const v235: US8 = patternInput_3[29];
    const v234: US1 = patternInput_3[28];
    const v233: US1 = patternInput_3[27];
    const v232: US1 = patternInput_3[26];
    const v231: US8 = patternInput_3[25];
    const v230: US1 = patternInput_3[24];
    const v229: US1 = patternInput_3[23];
    const v228: US1 = patternInput_3[22];
    const v227: US1 = patternInput_3[21];
    const v226: US1 = patternInput_3[20];
    const v225: US4 = patternInput_3[19];
    const v224: US7 = patternInput_3[18];
    const v223: US1 = patternInput_3[17];
    const v222: US1 = patternInput_3[16];
    const v221: US1 = patternInput_3[15];
    const v220: US6 = patternInput_3[14];
    const v219: US4 = patternInput_3[13];
    const v218: US1 = patternInput_3[12];
    const v217: US1 = patternInput_3[11];
    const v215: US4 = patternInput_3[9];
    const v214: US1 = patternInput_3[8];
    const v213: US1 = patternInput_3[7];
    const v212: US1 = patternInput_3[6];
    const v211: US1 = patternInput_3[5];
    const v210: US1 = patternInput_3[4];
    const v209: US1 = patternInput_3[3];
    const v208: US3 = patternInput_3[2];
    const v207: US1 = patternInput_3[1];
    const v206: US1 = patternInput_3[0];
    const v269: () => any[] = (): any[] => closure187(void 0, void 0);
    [v206, v207, v208, v209, v210, v211, v212, v213, v214, v215, US5_US5_1(v269), v217, v218, v219, v220, v221, v222, v223, v224, v225, v226, v227, v228, v229, v230, v231, v232, v233, v234, v235, v236, v237, v238, v239, v240, v241, v242, v243, v244, v245, v246, v247, v248, v249, v250, v251, v252, v253, v254, v255, v256, v257, v258, v259, v260, v261, v262, v263, v264, v265, v266, v267, v268].children = v269;
    const v272: Mut2 = new Mut2(v206, v207, v208, v209, v210, v211, v212, v213, v214, v215, US5_US5_1(v269), v217, v218, v219, v220, v221, v222, v223, v224, v225, v226, v227, v228, v229, v230, v231, v232, v233, v234, v235, v236, v237, v238, v239, v240, v241, v242, v243, v244, v245, v246, v247, v248, v249, v250, v251, v252, v253, v254, v255, v256, v257, v258, v259, v260, v261, v262, v263, v264, v265, v266, v267, v268);
    const v274: (arg0: any) => any = v141;
    const v275: any = createComponent;
    const v279: boolean = (v1_1 === "") !== true;
    const v281: any = v279 ? (v275(v274, v272)) : <></>;
    const v282: (arg0: Mut2) => any = (v_2: Mut2): any => closure188(void 0, v_2);
    const patternInput_4: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v346: Mut2 = new Mut2(patternInput_4[0], patternInput_4[1], patternInput_4[2], patternInput_4[3], patternInput_4[4], patternInput_4[5], patternInput_4[6], patternInput_4[7], patternInput_4[8], patternInput_4[9], patternInput_4[10], patternInput_4[11], patternInput_4[12], patternInput_4[13], patternInput_4[14], patternInput_4[15], patternInput_4[16], patternInput_4[17], patternInput_4[18], patternInput_4[19], patternInput_4[20], patternInput_4[21], patternInput_4[22], patternInput_4[23], patternInput_4[24], patternInput_4[25], patternInput_4[26], patternInput_4[27], patternInput_4[28], patternInput_4[29], patternInput_4[30], patternInput_4[31], patternInput_4[32], patternInput_4[33], patternInput_4[34], patternInput_4[35], patternInput_4[36], patternInput_4[37], patternInput_4[38], patternInput_4[39], patternInput_4[40], patternInput_4[41], patternInput_4[42], patternInput_4[43], patternInput_4[44], patternInput_4[45], patternInput_4[46], patternInput_4[47], patternInput_4[48], patternInput_4[49], patternInput_4[50], patternInput_4[51], patternInput_4[52], patternInput_4[53], patternInput_4[54], patternInput_4[55], patternInput_4[56], patternInput_4[57], patternInput_4[58], patternInput_4[59], patternInput_4[60], patternInput_4[61], patternInput_4[62]);
    const patternInput_5: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v346.l0, v346.l1, v346.l2, v346.l3, v346.l4, v346.l5, v346.l6, v346.l7, v346.l8, v346.l9, v346.l10, v346.l11, v346.l12, v346.l13, v346.l14, v346.l15, v346.l16, v346.l17, v346.l18, v346.l19, v346.l20, v346.l21, v346.l22, v346.l23, v346.l24, v346.l25, v346.l26, v346.l27, v346.l28, v346.l29, v346.l30, v346.l31, v346.l32, v346.l33, v346.l34, v346.l35, v346.l36, v346.l37, v346.l38, v346.l39, v346.l40, v346.l41, v346.l42, v346.l43, v346.l44, v346.l45, v346.l46, v346.l47, v346.l48, v346.l49, v346.l50, v346.l51, v346.l52, v346.l53, v346.l54, v346.l55, v346.l56, v346.l57, v346.l58, v346.l59, v346.l60, v346.l61, v346.l62];
    const v409: US1 = patternInput_5[62];
    const v408: US0 = patternInput_5[61];
    const v407: US1 = patternInput_5[60];
    const v406: US6 = patternInput_5[59];
    const v405: US1 = patternInput_5[58];
    const v404: US1 = patternInput_5[57];
    const v403: US8 = patternInput_5[56];
    const v402: US1 = patternInput_5[55];
    const v401: US1 = patternInput_5[54];
    const v400: US1 = patternInput_5[53];
    const v399: US1 = patternInput_5[52];
    const v398: US1 = patternInput_5[51];
    const v397: US1 = patternInput_5[50];
    const v396: US1 = patternInput_5[49];
    const v395: US1 = patternInput_5[48];
    const v394: US1 = patternInput_5[47];
    const v393: US1 = patternInput_5[46];
    const v392: US1 = patternInput_5[45];
    const v391: US1 = patternInput_5[44];
    const v390: US1 = patternInput_5[43];
    const v389: US1 = patternInput_5[42];
    const v388: US1 = patternInput_5[41];
    const v387: US9 = patternInput_5[40];
    const v386: US10 = patternInput_5[39];
    const v385: US9 = patternInput_5[38];
    const v384: US1 = patternInput_5[37];
    const v383: US1 = patternInput_5[36];
    const v382: US1 = patternInput_5[35];
    const v381: US1 = patternInput_5[34];
    const v380: US1 = patternInput_5[33];
    const v379: US1 = patternInput_5[32];
    const v378: US1 = patternInput_5[31];
    const v377: US1 = patternInput_5[30];
    const v376: US8 = patternInput_5[29];
    const v375: US1 = patternInput_5[28];
    const v374: US1 = patternInput_5[27];
    const v373: US1 = patternInput_5[26];
    const v372: US8 = patternInput_5[25];
    const v371: US1 = patternInput_5[24];
    const v370: US1 = patternInput_5[23];
    const v369: US1 = patternInput_5[22];
    const v368: US1 = patternInput_5[21];
    const v367: US1 = patternInput_5[20];
    const v366: US4 = patternInput_5[19];
    const v365: US7 = patternInput_5[18];
    const v364: US1 = patternInput_5[17];
    const v363: US1 = patternInput_5[16];
    const v362: US1 = patternInput_5[15];
    const v361: US6 = patternInput_5[14];
    const v360: US4 = patternInput_5[13];
    const v359: US1 = patternInput_5[12];
    const v358: US1 = patternInput_5[11];
    const v356: US4 = patternInput_5[9];
    const v355: US1 = patternInput_5[8];
    const v354: US1 = patternInput_5[7];
    const v353: US1 = patternInput_5[6];
    const v352: US1 = patternInput_5[5];
    const v351: US1 = patternInput_5[4];
    const v350: US1 = patternInput_5[3];
    const v349: US3 = patternInput_5[2];
    const v348: US1 = patternInput_5[1];
    const v347: US1 = patternInput_5[0];
    const v410: () => any[] = (): any[] => closure200(void 0, void 0);
    [v347, v348, v349, v350, v351, v352, v353, v354, v355, v356, US5_US5_1(v410), v358, v359, v360, v361, v362, v363, v364, v365, v366, v367, v368, v369, v370, v371, v372, v373, v374, v375, v376, v377, v378, v379, v380, v381, v382, v383, v384, v385, v386, v387, v388, v389, v390, v391, v392, v393, v394, v395, v396, v397, v398, v399, v400, v401, v402, v403, v404, v405, v406, v407, v408, v409].children = v410;
    const v413: Mut2 = new Mut2(v347, v348, v349, v350, v351, v352, v353, v354, v355, v356, US5_US5_1(v410), v358, v359, v360, v361, v362, v363, v364, v365, v366, v367, v368, v369, v370, v371, v372, v373, v374, v375, v376, v377, v378, v379, v380, v381, v382, v383, v384, v385, v386, v387, v388, v389, v390, v391, v392, v393, v394, v395, v396, v397, v398, v399, v400, v401, v402, v403, v404, v405, v406, v407, v408, v409);
    const v415: (arg0: any) => any = v282;
    const v416: any = createComponent;
    return [v140, v281, v279 ? (v416(v415, v413)) : <></>];
}

export function closure158(v0_1: any, v1_1: string, v2: boolean, unitVar: void): any[] {
    const v3: (arg0: Mut2) => any = (v: Mut2): any => closure6(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v67_1: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v67_1.l0, v67_1.l1, v67_1.l2, v67_1.l3, v67_1.l4, v67_1.l5, v67_1.l6, v67_1.l7, v67_1.l8, v67_1.l9, v67_1.l10, v67_1.l11, v67_1.l12, v67_1.l13, v67_1.l14, v67_1.l15, v67_1.l16, v67_1.l17, v67_1.l18, v67_1.l19, v67_1.l20, v67_1.l21, v67_1.l22, v67_1.l23, v67_1.l24, v67_1.l25, v67_1.l26, v67_1.l27, v67_1.l28, v67_1.l29, v67_1.l30, v67_1.l31, v67_1.l32, v67_1.l33, v67_1.l34, v67_1.l35, v67_1.l36, v67_1.l37, v67_1.l38, v67_1.l39, v67_1.l40, v67_1.l41, v67_1.l42, v67_1.l43, v67_1.l44, v67_1.l45, v67_1.l46, v67_1.l47, v67_1.l48, v67_1.l49, v67_1.l50, v67_1.l51, v67_1.l52, v67_1.l53, v67_1.l54, v67_1.l55, v67_1.l56, v67_1.l57, v67_1.l58, v67_1.l59, v67_1.l60, v67_1.l61, v67_1.l62];
    const v99: US1 = patternInput_1[31];
    const v98: US1 = patternInput_1[30];
    const v97: US8 = patternInput_1[29];
    const v96: US1 = patternInput_1[28];
    const v95: US1 = patternInput_1[27];
    const v94_1: US1 = patternInput_1[26];
    const v93_1: US8 = patternInput_1[25];
    const v92_1: US1 = patternInput_1[24];
    const v91_1: US1 = patternInput_1[23];
    const v90_1: US1 = patternInput_1[22];
    const v89_1: US1 = patternInput_1[21];
    const v88_1: US1 = patternInput_1[20];
    const v87_1: US4 = patternInput_1[19];
    const v86_1: US7 = patternInput_1[18];
    const v85_1: US1 = patternInput_1[17];
    const v84_1: US1 = patternInput_1[16];
    const v83_1: US1 = patternInput_1[15];
    const v82_1: US6 = patternInput_1[14];
    const v81_1: US4 = patternInput_1[13];
    const v80_1: US1 = patternInput_1[12];
    const v79_1: US1 = patternInput_1[11];
    const v77_1: US4 = patternInput_1[9];
    const v76_1: US1 = patternInput_1[8];
    const v75_1: US1 = patternInput_1[7];
    const v74_1: US1 = patternInput_1[6];
    const v73_1: US1 = patternInput_1[5];
    const v72_1: US1 = patternInput_1[4];
    const v71_1: US1 = patternInput_1[3];
    const v70_1: US3 = patternInput_1[2];
    const v69_1: US1 = patternInput_1[1];
    const v68_1: US1 = patternInput_1[0];
    const v130: US1 = patternInput_1[62];
    const v129: US0 = patternInput_1[61];
    const v128: US1 = patternInput_1[60];
    const v127: US6 = patternInput_1[59];
    const v126: US1 = patternInput_1[58];
    const v125: US1 = patternInput_1[57];
    const v124: US8 = patternInput_1[56];
    const v123: US1 = patternInput_1[55];
    const v122: US1 = patternInput_1[54];
    const v121: US1 = patternInput_1[53];
    const v120: US1 = patternInput_1[52];
    const v119: US1 = patternInput_1[51];
    const v118: US1 = patternInput_1[50];
    const v117: US1 = patternInput_1[49];
    const v116: US1 = patternInput_1[48];
    const v115: US1 = patternInput_1[47];
    const v114: US1 = patternInput_1[46];
    const v113: US1 = patternInput_1[45];
    const v112: US1 = patternInput_1[44];
    const v111: US1 = patternInput_1[43];
    const v110: US1 = patternInput_1[42];
    const v109: US1 = patternInput_1[41];
    const v108: US9 = patternInput_1[40];
    const v107: US10 = patternInput_1[39];
    const v106: US9 = patternInput_1[38];
    const v105: US1 = patternInput_1[37];
    const v104: US1 = patternInput_1[36];
    const v103: US1 = patternInput_1[35];
    const v102: US1 = patternInput_1[34];
    const v101: US1 = patternInput_1[33];
    const v100: US1 = patternInput_1[32];
    const v131: () => any[] = (): any[] => closure159(v0_1, v1_1, v2, void 0);
    [v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, v76_1, v77_1, US5_US5_1(v131), v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129, v130].children = v131;
    const v134: Mut2 = new Mut2(v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v74_1, v75_1, v76_1, v77_1, US5_US5_1(v131), v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, v88_1, v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129, v130);
    const v136: (arg0: any) => any = v3;
    const v139: any = createComponent;
    return [v139(v136, v134)];
}

export function closure9(v0_1: any, v1_1: string, v2: boolean, unitVar: void): any[] {
    const v3: (arg0: Mut3) => any = (v: Mut3): any => closure10(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v69_1: () => any[] = (): any[] => closure44(void 0, void 0);
    const v75_1: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], US5_US5_1(v69_1), patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], US8_US8_1(<>
        Links
    </>), patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]), US12_US12_2());
    const v77_1: (arg0: any) => any = v3;
    const v80_1: any = createComponent;
    const v81_1: any = v80_1(v77_1, v75_1);
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v148: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62]), US12_US12_2());
    const v150: (arg0: any) => any = v3;
    const v151: any = createComponent;
    const v152: any = v151(v150, v148);
    const patternInput_2: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v218: () => any[] = (): any[] => closure57(void 0, void 0);
    const v224: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], US5_US5_1(v218), patternInput_2[11], patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], US8_US8_1(<>
        Settings
    </>), patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62]), US12_US12_2());
    const v226: (arg0: any) => any = v3;
    const v227: any = createComponent;
    const v228: any = v227(v226, v224);
    const patternInput_3: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v295: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput_3[0], patternInput_3[1], patternInput_3[2], patternInput_3[3], patternInput_3[4], patternInput_3[5], patternInput_3[6], patternInput_3[7], patternInput_3[8], patternInput_3[9], patternInput_3[10], patternInput_3[11], patternInput_3[12], patternInput_3[13], patternInput_3[14], patternInput_3[15], patternInput_3[16], patternInput_3[17], patternInput_3[18], patternInput_3[19], patternInput_3[20], patternInput_3[21], patternInput_3[22], patternInput_3[23], patternInput_3[24], patternInput_3[25], patternInput_3[26], patternInput_3[27], patternInput_3[28], patternInput_3[29], patternInput_3[30], patternInput_3[31], patternInput_3[32], patternInput_3[33], patternInput_3[34], patternInput_3[35], patternInput_3[36], patternInput_3[37], patternInput_3[38], patternInput_3[39], patternInput_3[40], patternInput_3[41], patternInput_3[42], patternInput_3[43], patternInput_3[44], patternInput_3[45], patternInput_3[46], patternInput_3[47], patternInput_3[48], patternInput_3[49], patternInput_3[50], patternInput_3[51], patternInput_3[52], patternInput_3[53], patternInput_3[54], patternInput_3[55], patternInput_3[56], patternInput_3[57], patternInput_3[58], patternInput_3[59], patternInput_3[60], patternInput_3[61], patternInput_3[62]), US12_US12_2());
    const v297: (arg0: any) => any = v3;
    const v298: any = createComponent;
    const v299: any = v298(v297, v295);
    const patternInput_4: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v365: () => any[] = (): any[] => closure67(void 0, void 0);
    const v367: string = "db";
    const v373: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput_4[0], patternInput_4[1], patternInput_4[2], patternInput_4[3], patternInput_4[4], patternInput_4[5], patternInput_4[6], patternInput_4[7], patternInput_4[8], patternInput_4[9], US5_US5_1(v365), patternInput_4[11], patternInput_4[12], patternInput_4[13], patternInput_4[14], patternInput_4[15], patternInput_4[16], patternInput_4[17], patternInput_4[18], patternInput_4[19], patternInput_4[20], patternInput_4[21], patternInput_4[22], patternInput_4[23], patternInput_4[24], patternInput_4[25], US1_US1_1(v367), patternInput_4[27], patternInput_4[28], patternInput_4[29], patternInput_4[30], patternInput_4[31], patternInput_4[32], patternInput_4[33], patternInput_4[34], patternInput_4[35], patternInput_4[36], patternInput_4[37], patternInput_4[38], patternInput_4[39], patternInput_4[40], patternInput_4[41], patternInput_4[42], patternInput_4[43], patternInput_4[44], patternInput_4[45], patternInput_4[46], patternInput_4[47], patternInput_4[48], patternInput_4[49], patternInput_4[50], patternInput_4[51], patternInput_4[52], patternInput_4[53], patternInput_4[54], patternInput_4[55], US8_US8_1(<>
        Chain
    </>), patternInput_4[57], patternInput_4[58], patternInput_4[59], patternInput_4[60], patternInput_4[61], patternInput_4[62]), US12_US12_0());
    const v375: (arg0: any) => any = v3;
    const v376: any = createComponent;
    const v377: any = v376(v375, v373);
    const patternInput_5: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v444: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput_5[0], patternInput_5[1], patternInput_5[2], patternInput_5[3], patternInput_5[4], patternInput_5[5], patternInput_5[6], patternInput_5[7], patternInput_5[8], patternInput_5[9], patternInput_5[10], patternInput_5[11], patternInput_5[12], patternInput_5[13], patternInput_5[14], patternInput_5[15], patternInput_5[16], patternInput_5[17], patternInput_5[18], patternInput_5[19], patternInput_5[20], patternInput_5[21], patternInput_5[22], patternInput_5[23], patternInput_5[24], patternInput_5[25], patternInput_5[26], patternInput_5[27], patternInput_5[28], patternInput_5[29], patternInput_5[30], patternInput_5[31], patternInput_5[32], patternInput_5[33], patternInput_5[34], patternInput_5[35], patternInput_5[36], patternInput_5[37], patternInput_5[38], patternInput_5[39], patternInput_5[40], patternInput_5[41], patternInput_5[42], patternInput_5[43], patternInput_5[44], patternInput_5[45], patternInput_5[46], patternInput_5[47], patternInput_5[48], patternInput_5[49], patternInput_5[50], patternInput_5[51], patternInput_5[52], patternInput_5[53], patternInput_5[54], patternInput_5[55], patternInput_5[56], patternInput_5[57], patternInput_5[58], patternInput_5[59], patternInput_5[60], patternInput_5[61], patternInput_5[62]), US12_US12_2());
    const v446: (arg0: any) => any = v3;
    const v447: any = createComponent;
    const v448: any = v447(v446, v444);
    const patternInput_6: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v514: () => any[] = (): any[] => closure114(void 0, void 0);
    const v521: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput_6[0], patternInput_6[1], patternInput_6[2], patternInput_6[3], patternInput_6[4], patternInput_6[5], patternInput_6[6], patternInput_6[7], patternInput_6[8], patternInput_6[9], US5_US5_1(v514), patternInput_6[11], patternInput_6[12], patternInput_6[13], patternInput_6[14], patternInput_6[15], patternInput_6[16], patternInput_6[17], patternInput_6[18], patternInput_6[19], patternInput_6[20], patternInput_6[21], patternInput_6[22], patternInput_6[23], patternInput_6[24], patternInput_6[25], US1_US1_1(v367), patternInput_6[27], patternInput_6[28], patternInput_6[29], patternInput_6[30], patternInput_6[31], patternInput_6[32], patternInput_6[33], patternInput_6[34], patternInput_6[35], patternInput_6[36], patternInput_6[37], patternInput_6[38], patternInput_6[39], patternInput_6[40], patternInput_6[41], patternInput_6[42], patternInput_6[43], patternInput_6[44], patternInput_6[45], patternInput_6[46], patternInput_6[47], patternInput_6[48], patternInput_6[49], patternInput_6[50], patternInput_6[51], patternInput_6[52], patternInput_6[53], patternInput_6[54], patternInput_6[55], US8_US8_1(<>
        Database
    </>), patternInput_6[57], patternInput_6[58], patternInput_6[59], patternInput_6[60], patternInput_6[61], patternInput_6[62]), US12_US12_0());
    const v523: (arg0: any) => any = v3;
    const v524: any = createComponent;
    const v525: any = v524(v523, v521);
    const patternInput_7: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v592: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput_7[0], patternInput_7[1], patternInput_7[2], patternInput_7[3], patternInput_7[4], patternInput_7[5], patternInput_7[6], patternInput_7[7], patternInput_7[8], patternInput_7[9], patternInput_7[10], patternInput_7[11], patternInput_7[12], patternInput_7[13], patternInput_7[14], patternInput_7[15], patternInput_7[16], patternInput_7[17], patternInput_7[18], patternInput_7[19], patternInput_7[20], patternInput_7[21], patternInput_7[22], patternInput_7[23], patternInput_7[24], patternInput_7[25], patternInput_7[26], patternInput_7[27], patternInput_7[28], patternInput_7[29], patternInput_7[30], patternInput_7[31], patternInput_7[32], patternInput_7[33], patternInput_7[34], patternInput_7[35], patternInput_7[36], patternInput_7[37], patternInput_7[38], patternInput_7[39], patternInput_7[40], patternInput_7[41], patternInput_7[42], patternInput_7[43], patternInput_7[44], patternInput_7[45], patternInput_7[46], patternInput_7[47], patternInput_7[48], patternInput_7[49], patternInput_7[50], patternInput_7[51], patternInput_7[52], patternInput_7[53], patternInput_7[54], patternInput_7[55], patternInput_7[56], patternInput_7[57], patternInput_7[58], patternInput_7[59], patternInput_7[60], patternInput_7[61], patternInput_7[62]), US12_US12_2());
    const v594: (arg0: any) => any = v3;
    const v595: any = createComponent;
    const v596: any = v595(v594, v592);
    const patternInput_8: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v662: () => any[] = (): any[] => closure158(v0_1, v1_1, v2, void 0);
    const v668: Mut3 = new Mut3(US11_US11_0(), new Mut2(patternInput_8[0], patternInput_8[1], patternInput_8[2], patternInput_8[3], patternInput_8[4], patternInput_8[5], patternInput_8[6], patternInput_8[7], patternInput_8[8], patternInput_8[9], US5_US5_1(v662), patternInput_8[11], patternInput_8[12], patternInput_8[13], patternInput_8[14], patternInput_8[15], patternInput_8[16], patternInput_8[17], patternInput_8[18], patternInput_8[19], patternInput_8[20], patternInput_8[21], patternInput_8[22], patternInput_8[23], patternInput_8[24], patternInput_8[25], patternInput_8[26], patternInput_8[27], patternInput_8[28], patternInput_8[29], patternInput_8[30], patternInput_8[31], patternInput_8[32], patternInput_8[33], patternInput_8[34], patternInput_8[35], patternInput_8[36], patternInput_8[37], patternInput_8[38], patternInput_8[39], patternInput_8[40], patternInput_8[41], patternInput_8[42], patternInput_8[43], patternInput_8[44], patternInput_8[45], patternInput_8[46], patternInput_8[47], patternInput_8[48], patternInput_8[49], patternInput_8[50], patternInput_8[51], patternInput_8[52], patternInput_8[53], patternInput_8[54], patternInput_8[55], US8_US8_1(<>
        Profile
    </>), patternInput_8[57], patternInput_8[58], patternInput_8[59], patternInput_8[60], patternInput_8[61], patternInput_8[62]), US12_US12_2());
    const v670: (arg0: any) => any = v3;
    const v671: any = createComponent;
    return [v81_1, v152, v228, v299, v377, v448, v525, v596, v671(v670, v668)];
}

export function closure5(v0_1: any, v1_1: string, v2: boolean, unitVar: void): any[] {
    const v3: (arg0: Mut2) => any = (v: Mut2): any => closure6(void 0, v);
    const patternInput: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v67_1: Mut2 = new Mut2(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62]);
    v67_1.l17 = US1_US1_1("flex");
    v67_1.l20 = US1_US1_1("1");
    v67_1.l21 = US1_US1_1("column");
    v67_1.l43 = US1_US1_1("auto");
    v67_1.l42 = US1_US1_1("hidden");
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = [v67_1.l0, v67_1.l1, v67_1.l2, v67_1.l3, v67_1.l4, v67_1.l5, v67_1.l6, v67_1.l7, v67_1.l8, v67_1.l9, v67_1.l10, v67_1.l11, v67_1.l12, v67_1.l13, v67_1.l14, v67_1.l15, v67_1.l16, v67_1.l17, v67_1.l18, v67_1.l19, v67_1.l20, v67_1.l21, v67_1.l22, v67_1.l23, v67_1.l24, v67_1.l25, v67_1.l26, v67_1.l27, v67_1.l28, v67_1.l29, v67_1.l30, v67_1.l31, v67_1.l32, v67_1.l33, v67_1.l34, v67_1.l35, v67_1.l36, v67_1.l37, v67_1.l38, v67_1.l39, v67_1.l40, v67_1.l41, v67_1.l42, v67_1.l43, v67_1.l44, v67_1.l45, v67_1.l46, v67_1.l47, v67_1.l48, v67_1.l49, v67_1.l50, v67_1.l51, v67_1.l52, v67_1.l53, v67_1.l54, v67_1.l55, v67_1.l56, v67_1.l57, v67_1.l58, v67_1.l59, v67_1.l60, v67_1.l61, v67_1.l62];
    const v99: US1 = patternInput_1[21];
    const v98: US1 = patternInput_1[20];
    const v97: US4 = patternInput_1[19];
    const v96: US7 = patternInput_1[18];
    const v95: US1 = patternInput_1[17];
    const v94_1: US1 = patternInput_1[16];
    const v93_1: US1 = patternInput_1[15];
    const v92_1: US6 = patternInput_1[14];
    const v91_1: US4 = patternInput_1[13];
    const v90_1: US1 = patternInput_1[12];
    const v89_1: US1 = patternInput_1[11];
    const v87_1: US4 = patternInput_1[9];
    const v86_1: US1 = patternInput_1[8];
    const v85_1: US1 = patternInput_1[7];
    const v84_1: US1 = patternInput_1[6];
    const v83_1: US1 = patternInput_1[5];
    const v82_1: US1 = patternInput_1[4];
    const v81_1: US1 = patternInput_1[3];
    const v80_1: US3 = patternInput_1[2];
    const v79_1: US1 = patternInput_1[1];
    const v78_1: US1 = patternInput_1[0];
    const v140: US1 = patternInput_1[62];
    const v139: US0 = patternInput_1[61];
    const v138: US1 = patternInput_1[60];
    const v137: US6 = patternInput_1[59];
    const v136: US1 = patternInput_1[58];
    const v135: US1 = patternInput_1[57];
    const v134: US8 = patternInput_1[56];
    const v133: US1 = patternInput_1[55];
    const v132: US1 = patternInput_1[54];
    const v131: US1 = patternInput_1[53];
    const v130: US1 = patternInput_1[52];
    const v129: US1 = patternInput_1[51];
    const v128: US1 = patternInput_1[50];
    const v127: US1 = patternInput_1[49];
    const v126: US1 = patternInput_1[48];
    const v125: US1 = patternInput_1[47];
    const v124: US1 = patternInput_1[46];
    const v123: US1 = patternInput_1[45];
    const v122: US1 = patternInput_1[44];
    const v121: US1 = patternInput_1[43];
    const v120: US1 = patternInput_1[42];
    const v119: US1 = patternInput_1[41];
    const v118: US9 = patternInput_1[40];
    const v117: US10 = patternInput_1[39];
    const v116: US9 = patternInput_1[38];
    const v115: US1 = patternInput_1[37];
    const v114: US1 = patternInput_1[36];
    const v113: US1 = patternInput_1[35];
    const v112: US1 = patternInput_1[34];
    const v111: US1 = patternInput_1[33];
    const v110: US1 = patternInput_1[32];
    const v109: US1 = patternInput_1[31];
    const v108: US1 = patternInput_1[30];
    const v107: US8 = patternInput_1[29];
    const v106: US1 = patternInput_1[28];
    const v105: US1 = patternInput_1[27];
    const v104: US1 = patternInput_1[26];
    const v103: US8 = patternInput_1[25];
    const v102: US1 = patternInput_1[24];
    const v101: US1 = patternInput_1[23];
    const v100: US1 = patternInput_1[22];
    const v141: () => any[] = (): any[] => closure9(v0_1, v1_1, v2, void 0);
    [v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, US5_US5_1(v141), v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129, v130, v131, v132, v133, v134, v135, v136, v137, v138, v139, v140].children = v141;
    const v144: Mut2 = new Mut2(v78_1, v79_1, v80_1, v81_1, v82_1, v83_1, v84_1, v85_1, v86_1, v87_1, US5_US5_1(v141), v89_1, v90_1, v91_1, v92_1, v93_1, v94_1, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129, v130, v131, v132, v133, v134, v135, v136, v137, v138, v139, v140);
    const v146: (arg0: any) => any = v3;
    const v149: any = createComponent;
    return [v149(v146, v144)];
}

export function closure4(unitVar: void, v0_1: Mut2): any {
    const patternInput: [any, string, boolean] = method2();
    const v6: any = Box;
    const patternInput_1: [US1, US1, US3, US1, US1, US1, US1, US1, US1, US4, US5, US1, US1, US4, US6, US1, US1, US1, US7, US4, US1, US1, US1, US1, US1, US8, US1, US1, US1, US8, US1, US1, US1, US1, US1, US1, US1, US1, US9, US10, US9, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US1, US8, US1, US1, US6, US1, US0, US1] = method4();
    const v72_1: () => any[] = (): any[] => closure5(patternInput[0], patternInput[1], patternInput[2], void 0);
    const v91_1: any = createObj(method5(patternInput_1[0], patternInput_1[1], patternInput_1[2], US1_US1_1("$bg"), patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], US5_US5_1(v72_1), US1_US1_1("$text1"), patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], US1_US1_1("flex"), patternInput_1[18], patternInput_1[19], US1_US1_1("1"), US1_US1_1("column"), US1_US1_1("$sm"), US1_US1_1("100vh"), patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], US1_US1_1("100vw"), patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], US1_US1_1("1px"), patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62]));
    const v92_1: (arg0: any) => any = v6;
    const v95: any = createComponent;
    return v95(v92_1, v91_1);
}

export const v0 = void 0;

export const v1 = new Mut0(v0);

export const patternInput$00405011 = method0();

export const v74 = patternInput$00405011[9];

export const v73 = patternInput$00405011[8];

export const v72 = patternInput$00405011[7];

export const v71 = patternInput$00405011[6];

export const v70 = patternInput$00405011[5];

export const v69 = patternInput$00405011[4];

export const v68 = patternInput$00405011[3];

export const v67 = patternInput$00405011[2];

export const v66 = patternInput$00405011[1];

export const v65 = patternInput$00405011[0];

export const v75 = new Mut1(v65, v66, v67, v68, v69, v70, v71, v72, v73, v74);

export const v76 = v75;

export const v77 = method1();

export const v78 = v77(v76);

export const v79 = nonSeeded().Next0();

export const v80 = "db_listener";

export const v81 = (v: Mut2): any => closure2(v78, v);

export const v82 = [v80, v81];

export const v83 = "content";

export const v84 = (v: Mut2): any => closure4(void 0, v);

export const v85 = [v83, v84];

export const v86 = "store";

export const v87 = [v86, v78];

export const v88 = "run_id";

export const v89 = [v88, v79];

export const v90 = process.env;

export const v91 = "env";

export const v92 = [v91, v90];

export const v93 = [v82, v85, v87, v89, v92];

export const v94 = createObj(v93);

v1.l0 = v94;

window.components_spi = v94;


