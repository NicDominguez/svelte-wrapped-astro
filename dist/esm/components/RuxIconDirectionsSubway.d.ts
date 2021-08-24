import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDirectionsSubwayProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDirectionsSubway["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDirectionsSubway["size"];
}
interface RuxIconDirectionsSubwayEvents {
}
interface RuxIconDirectionsSubwaySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDirectionsSubway extends SvelteComponent {
    $$prop_def: RuxIconDirectionsSubwayProps;
    $$events_def: RuxIconDirectionsSubwayEvents;
    $$slot_def: RuxIconDirectionsSubwaySlots;
    $on<K extends keyof RuxIconDirectionsSubwayEvents>(type: K, callback: (e: RuxIconDirectionsSubwayEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDirectionsSubwayProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDirectionsSubwayElement | undefined;
}
export default RuxIconDirectionsSubway;
