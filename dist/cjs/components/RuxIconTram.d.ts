import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTramProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTram["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTram["size"];
}
interface RuxIconTramEvents {
}
interface RuxIconTramSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTram extends SvelteComponent {
    $$prop_def: RuxIconTramProps;
    $$events_def: RuxIconTramEvents;
    $$slot_def: RuxIconTramSlots;
    $on<K extends keyof RuxIconTramEvents>(type: K, callback: (e: RuxIconTramEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTramProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTramElement | undefined;
}
export default RuxIconTram;
