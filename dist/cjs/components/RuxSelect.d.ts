import { Components, JSX } from '@astrouxds/astro-web-components';
interface RuxSelectProps {
    /** Disables the item */
    disabled?: Components.RuxSelect["disabled"];
    /** Sets the field as required */
    required?: Components.RuxSelect["required"];
    /** Sets the Label for the Select */
    label?: Components.RuxSelect["label"];
    /** Id for the Select Input */
    inputId?: Components.RuxSelect["inputId"];
    /** Id for the Label */
    labelId?: Components.RuxSelect["labelId"];
    /** Sets the Select as Invalid for Custom Validation Usage */
    invalid?: Components.RuxSelect["invalid"];
    /** Sets the Name of the Input Element */
    name?: Components.RuxSelect["name"];
}
interface RuxSelectEvents {
    /** Event Emitted when the Value of the Select is Changed */
    "rux-change": Parameters<JSX.RuxSelect["onRux-change"]>[0];
}
interface RuxSelectSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxSelect extends SvelteComponent {
    $$prop_def: RuxSelectProps;
    $$events_def: RuxSelectEvents;
    $$slot_def: RuxSelectSlots;
    $on<K extends keyof RuxSelectEvents>(type: K, callback: (e: RuxSelectEvents[K]) => any): () => void;
    $set($$props: Partial<RuxSelectProps>): void;
    constructor(options: any);
    get disabled(): any;
    set disabled(disabled: any);
    get required(): any;
    set required(required: any);
    get label(): any;
    set label(label: any);
    get inputId(): any;
    set inputId(inputId: any);
    get labelId(): any;
    set labelId(labelId: any);
    get invalid(): any;
    set invalid(invalid: any);
    get name(): any;
    set name(name: any);
    get getWebComponent(): HTMLRuxSelectElement | undefined;
}
export default RuxSelect;
