import { Components } from '@astrouxds/astro-web-components';
interface RuxIconKeyboardCapslockProps {
    /** The fill color for the icon */
    color?: Components.RuxIconKeyboardCapslock["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconKeyboardCapslock["size"];
}
interface RuxIconKeyboardCapslockEvents {
}
interface RuxIconKeyboardCapslockSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconKeyboardCapslock extends SvelteComponent {
    $$prop_def: RuxIconKeyboardCapslockProps;
    $$events_def: RuxIconKeyboardCapslockEvents;
    $$slot_def: RuxIconKeyboardCapslockSlots;
    $on<K extends keyof RuxIconKeyboardCapslockEvents>(type: K, callback: (e: RuxIconKeyboardCapslockEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconKeyboardCapslockProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconKeyboardCapslockElement | undefined;
}
export default RuxIconKeyboardCapslock;
