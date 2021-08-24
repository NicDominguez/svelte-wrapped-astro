import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMouseProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMouse["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMouse["size"];
}
interface RuxIconMouseEvents {
}
interface RuxIconMouseSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMouse extends SvelteComponent {
    $$prop_def: RuxIconMouseProps;
    $$events_def: RuxIconMouseEvents;
    $$slot_def: RuxIconMouseSlots;
    $on<K extends keyof RuxIconMouseEvents>(type: K, callback: (e: RuxIconMouseEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMouseProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMouseElement | undefined;
}
export default RuxIconMouse;
