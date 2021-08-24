import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDirectionsRailwayProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDirectionsRailway["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDirectionsRailway["size"];
}
interface RuxIconDirectionsRailwayEvents {
}
interface RuxIconDirectionsRailwaySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDirectionsRailway extends SvelteComponent {
    $$prop_def: RuxIconDirectionsRailwayProps;
    $$events_def: RuxIconDirectionsRailwayEvents;
    $$slot_def: RuxIconDirectionsRailwaySlots;
    $on<K extends keyof RuxIconDirectionsRailwayEvents>(type: K, callback: (e: RuxIconDirectionsRailwayEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDirectionsRailwayProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDirectionsRailwayElement | undefined;
}
export default RuxIconDirectionsRailway;
