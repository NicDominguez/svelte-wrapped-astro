import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWorkProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWork["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWork["size"];
}
interface RuxIconWorkEvents {
}
interface RuxIconWorkSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWork extends SvelteComponent {
    $$prop_def: RuxIconWorkProps;
    $$events_def: RuxIconWorkEvents;
    $$slot_def: RuxIconWorkSlots;
    $on<K extends keyof RuxIconWorkEvents>(type: K, callback: (e: RuxIconWorkEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWorkProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWorkElement | undefined;
}
export default RuxIconWork;
