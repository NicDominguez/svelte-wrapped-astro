import { Components } from '@astrouxds/astro-web-components';
interface RuxIconInputProps {
    /** The fill color for the icon */
    color?: Components.RuxIconInput["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconInput["size"];
}
interface RuxIconInputEvents {
}
interface RuxIconInputSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconInput extends SvelteComponent {
    $$prop_def: RuxIconInputProps;
    $$events_def: RuxIconInputEvents;
    $$slot_def: RuxIconInputSlots;
    $on<K extends keyof RuxIconInputEvents>(type: K, callback: (e: RuxIconInputEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconInputProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconInputElement | undefined;
}
export default RuxIconInput;
