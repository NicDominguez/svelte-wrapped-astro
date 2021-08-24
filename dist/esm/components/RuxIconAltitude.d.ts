import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAltitudeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAltitude["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAltitude["size"];
}
interface RuxIconAltitudeEvents {
}
interface RuxIconAltitudeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAltitude extends SvelteComponent {
    $$prop_def: RuxIconAltitudeProps;
    $$events_def: RuxIconAltitudeEvents;
    $$slot_def: RuxIconAltitudeSlots;
    $on<K extends keyof RuxIconAltitudeEvents>(type: K, callback: (e: RuxIconAltitudeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAltitudeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAltitudeElement | undefined;
}
export default RuxIconAltitude;
