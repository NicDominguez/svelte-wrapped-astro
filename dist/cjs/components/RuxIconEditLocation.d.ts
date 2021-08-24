import { Components } from '@astrouxds/astro-web-components';
interface RuxIconEditLocationProps {
    /** The fill color for the icon */
    color?: Components.RuxIconEditLocation["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconEditLocation["size"];
}
interface RuxIconEditLocationEvents {
}
interface RuxIconEditLocationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconEditLocation extends SvelteComponent {
    $$prop_def: RuxIconEditLocationProps;
    $$events_def: RuxIconEditLocationEvents;
    $$slot_def: RuxIconEditLocationSlots;
    $on<K extends keyof RuxIconEditLocationEvents>(type: K, callback: (e: RuxIconEditLocationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconEditLocationProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconEditLocationElement | undefined;
}
export default RuxIconEditLocation;
