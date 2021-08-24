import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocationOnProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocationOn["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocationOn["size"];
}
interface RuxIconLocationOnEvents {
}
interface RuxIconLocationOnSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocationOn extends SvelteComponent {
    $$prop_def: RuxIconLocationOnProps;
    $$events_def: RuxIconLocationOnEvents;
    $$slot_def: RuxIconLocationOnSlots;
    $on<K extends keyof RuxIconLocationOnEvents>(type: K, callback: (e: RuxIconLocationOnEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocationOnProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocationOnElement | undefined;
}
export default RuxIconLocationOn;
