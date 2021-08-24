import { Components } from '@astrouxds/astro-web-components';
interface RuxIconKeyboardBackspaceProps {
    /** The fill color for the icon */
    color?: Components.RuxIconKeyboardBackspace["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconKeyboardBackspace["size"];
}
interface RuxIconKeyboardBackspaceEvents {
}
interface RuxIconKeyboardBackspaceSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconKeyboardBackspace extends SvelteComponent {
    $$prop_def: RuxIconKeyboardBackspaceProps;
    $$events_def: RuxIconKeyboardBackspaceEvents;
    $$slot_def: RuxIconKeyboardBackspaceSlots;
    $on<K extends keyof RuxIconKeyboardBackspaceEvents>(type: K, callback: (e: RuxIconKeyboardBackspaceEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconKeyboardBackspaceProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconKeyboardBackspaceElement | undefined;
}
export default RuxIconKeyboardBackspace;
