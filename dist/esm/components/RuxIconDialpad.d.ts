import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDialpadProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDialpad["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDialpad["size"];
}
interface RuxIconDialpadEvents {
}
interface RuxIconDialpadSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDialpad extends SvelteComponent {
    $$prop_def: RuxIconDialpadProps;
    $$events_def: RuxIconDialpadEvents;
    $$slot_def: RuxIconDialpadSlots;
    $on<K extends keyof RuxIconDialpadEvents>(type: K, callback: (e: RuxIconDialpadEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDialpadProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDialpadElement | undefined;
}
export default RuxIconDialpad;
