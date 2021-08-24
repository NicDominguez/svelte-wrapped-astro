import { Components } from '@astrouxds/astro-web-components';
interface RuxIconChildCareProps {
    /** The fill color for the icon */
    color?: Components.RuxIconChildCare["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconChildCare["size"];
}
interface RuxIconChildCareEvents {
}
interface RuxIconChildCareSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconChildCare extends SvelteComponent {
    $$prop_def: RuxIconChildCareProps;
    $$events_def: RuxIconChildCareEvents;
    $$slot_def: RuxIconChildCareSlots;
    $on<K extends keyof RuxIconChildCareEvents>(type: K, callback: (e: RuxIconChildCareEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconChildCareProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconChildCareElement | undefined;
}
export default RuxIconChildCare;
