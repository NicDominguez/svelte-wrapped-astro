import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSatelliteProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSatellite["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSatellite["size"];
}
interface RuxIconSatelliteEvents {
}
interface RuxIconSatelliteSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSatellite extends SvelteComponent {
    $$prop_def: RuxIconSatelliteProps;
    $$events_def: RuxIconSatelliteEvents;
    $$slot_def: RuxIconSatelliteSlots;
    $on<K extends keyof RuxIconSatelliteEvents>(type: K, callback: (e: RuxIconSatelliteEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSatelliteProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSatelliteElement | undefined;
}
export default RuxIconSatellite;
