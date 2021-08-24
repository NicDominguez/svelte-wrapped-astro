import { Components } from '@astrouxds/astro-web-components';
interface RuxIconKeyboardProps {
    /** The fill color for the icon */
    color?: Components.RuxIconKeyboard["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconKeyboard["size"];
}
interface RuxIconKeyboardEvents {
}
interface RuxIconKeyboardSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconKeyboard extends SvelteComponent {
    $$prop_def: RuxIconKeyboardProps;
    $$events_def: RuxIconKeyboardEvents;
    $$slot_def: RuxIconKeyboardSlots;
    $on<K extends keyof RuxIconKeyboardEvents>(type: K, callback: (e: RuxIconKeyboardEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconKeyboardProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconKeyboardElement | undefined;
}
export default RuxIconKeyboard;
