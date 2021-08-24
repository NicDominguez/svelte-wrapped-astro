import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHomeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHome["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHome["size"];
}
interface RuxIconHomeEvents {
}
interface RuxIconHomeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHome extends SvelteComponent {
    $$prop_def: RuxIconHomeProps;
    $$events_def: RuxIconHomeEvents;
    $$slot_def: RuxIconHomeSlots;
    $on<K extends keyof RuxIconHomeEvents>(type: K, callback: (e: RuxIconHomeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHomeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHomeElement | undefined;
}
export default RuxIconHome;
