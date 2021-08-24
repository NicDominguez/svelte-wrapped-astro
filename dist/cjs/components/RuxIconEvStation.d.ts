import { Components } from '@astrouxds/astro-web-components';
interface RuxIconEvStationProps {
    /** The fill color for the icon */
    color?: Components.RuxIconEvStation["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconEvStation["size"];
}
interface RuxIconEvStationEvents {
}
interface RuxIconEvStationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconEvStation extends SvelteComponent {
    $$prop_def: RuxIconEvStationProps;
    $$events_def: RuxIconEvStationEvents;
    $$slot_def: RuxIconEvStationSlots;
    $on<K extends keyof RuxIconEvStationEvents>(type: K, callback: (e: RuxIconEvStationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconEvStationProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconEvStationElement | undefined;
}
export default RuxIconEvStation;
