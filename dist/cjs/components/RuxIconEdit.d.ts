import { Components } from '@astrouxds/astro-web-components';
interface RuxIconEditProps {
    /** The fill color for the icon */
    color?: Components.RuxIconEdit["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconEdit["size"];
}
interface RuxIconEditEvents {
}
interface RuxIconEditSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconEdit extends SvelteComponent {
    $$prop_def: RuxIconEditProps;
    $$events_def: RuxIconEditEvents;
    $$slot_def: RuxIconEditSlots;
    $on<K extends keyof RuxIconEditEvents>(type: K, callback: (e: RuxIconEditEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconEditProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconEditElement | undefined;
}
export default RuxIconEdit;
