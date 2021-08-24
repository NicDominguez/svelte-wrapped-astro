import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilterTiltShiftProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFilterTiltShift["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilterTiltShift["size"];
}
interface RuxIconFilterTiltShiftEvents {
}
interface RuxIconFilterTiltShiftSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilterTiltShift extends SvelteComponent {
    $$prop_def: RuxIconFilterTiltShiftProps;
    $$events_def: RuxIconFilterTiltShiftEvents;
    $$slot_def: RuxIconFilterTiltShiftSlots;
    $on<K extends keyof RuxIconFilterTiltShiftEvents>(type: K, callback: (e: RuxIconFilterTiltShiftEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilterTiltShiftProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilterTiltShiftElement | undefined;
}
export default RuxIconFilterTiltShift;
