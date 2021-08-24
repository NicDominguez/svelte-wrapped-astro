import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGroupWorkProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGroupWork["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGroupWork["size"];
}
interface RuxIconGroupWorkEvents {
}
interface RuxIconGroupWorkSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGroupWork extends SvelteComponent {
    $$prop_def: RuxIconGroupWorkProps;
    $$events_def: RuxIconGroupWorkEvents;
    $$slot_def: RuxIconGroupWorkSlots;
    $on<K extends keyof RuxIconGroupWorkEvents>(type: K, callback: (e: RuxIconGroupWorkEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGroupWorkProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGroupWorkElement | undefined;
}
export default RuxIconGroupWork;
