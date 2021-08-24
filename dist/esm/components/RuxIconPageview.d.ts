import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPageviewProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPageview["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPageview["size"];
}
interface RuxIconPageviewEvents {
}
interface RuxIconPageviewSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPageview extends SvelteComponent {
    $$prop_def: RuxIconPageviewProps;
    $$events_def: RuxIconPageviewEvents;
    $$slot_def: RuxIconPageviewSlots;
    $on<K extends keyof RuxIconPageviewEvents>(type: K, callback: (e: RuxIconPageviewEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPageviewProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPageviewElement | undefined;
}
export default RuxIconPageview;
