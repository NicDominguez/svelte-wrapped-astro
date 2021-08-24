import { Components, JSX } from '@astrouxds/astro-web-components';
interface RuxSliderProps {
    /** Min value of the slider. */
    min?: Components.RuxSlider["min"];
    /** Max value of slider. */
    max?: Components.RuxSlider["max"];
    /** Step amount of slider value. */
    step?: Components.RuxSlider["step"];
    /** Current value of the slider. The default value is halfway between the specified minimum and maximum. - [HTMLElement/<input type="range">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) */
    value?: Components.RuxSlider["value"];
    /** Determines if the slider is disabled. */
    disabled?: Components.RuxSlider["disabled"];
    /** Name of the Input Field for Form Submission */
    name?: Components.RuxSlider["name"];
}
interface RuxSliderEvents {
    /** Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) */
    "rux-input": Parameters<JSX.RuxSlider["onRux-input"]>[0];
}
interface RuxSliderSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxSlider extends SvelteComponent {
    $$prop_def: RuxSliderProps;
    $$events_def: RuxSliderEvents;
    $$slot_def: RuxSliderSlots;
    $on<K extends keyof RuxSliderEvents>(type: K, callback: (e: RuxSliderEvents[K]) => any): () => void;
    $set($$props: Partial<RuxSliderProps>): void;
    constructor(options: any);
    get min(): any;
    set min(min: any);
    get max(): any;
    set max(max: any);
    get step(): any;
    set step(step: any);
    get value(): any;
    set value(value: any);
    get disabled(): any;
    set disabled(disabled: any);
    get name(): any;
    set name(name: any);
    get getWebComponent(): HTMLRuxSliderElement | undefined;
}
export default RuxSlider;
