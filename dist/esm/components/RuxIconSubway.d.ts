import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSubwayProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSubway["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSubway["size"];
}
interface RuxIconSubwayEvents {
}
interface RuxIconSubwaySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSubway extends SvelteComponent {
    $$prop_def: RuxIconSubwayProps;
    $$events_def: RuxIconSubwayEvents;
    $$slot_def: RuxIconSubwaySlots;
    $on<K extends keyof RuxIconSubwayEvents>(type: K, callback: (e: RuxIconSubwayEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSubwayProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSubwayElement | undefined;
}
export default RuxIconSubway;
