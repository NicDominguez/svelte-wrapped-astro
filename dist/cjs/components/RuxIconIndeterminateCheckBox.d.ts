import { Components } from '@astrouxds/astro-web-components';
interface RuxIconIndeterminateCheckBoxProps {
    /** The fill color for the icon */
    color?: Components.RuxIconIndeterminateCheckBox["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconIndeterminateCheckBox["size"];
}
interface RuxIconIndeterminateCheckBoxEvents {
}
interface RuxIconIndeterminateCheckBoxSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconIndeterminateCheckBox extends SvelteComponent {
    $$prop_def: RuxIconIndeterminateCheckBoxProps;
    $$events_def: RuxIconIndeterminateCheckBoxEvents;
    $$slot_def: RuxIconIndeterminateCheckBoxSlots;
    $on<K extends keyof RuxIconIndeterminateCheckBoxEvents>(type: K, callback: (e: RuxIconIndeterminateCheckBoxEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconIndeterminateCheckBoxProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconIndeterminateCheckBoxElement | undefined;
}
export default RuxIconIndeterminateCheckBox;
