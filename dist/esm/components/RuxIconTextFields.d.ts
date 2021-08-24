import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTextFieldsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTextFields["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTextFields["size"];
}
interface RuxIconTextFieldsEvents {
}
interface RuxIconTextFieldsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTextFields extends SvelteComponent {
    $$prop_def: RuxIconTextFieldsProps;
    $$events_def: RuxIconTextFieldsEvents;
    $$slot_def: RuxIconTextFieldsSlots;
    $on<K extends keyof RuxIconTextFieldsEvents>(type: K, callback: (e: RuxIconTextFieldsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTextFieldsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTextFieldsElement | undefined;
}
export default RuxIconTextFields;
