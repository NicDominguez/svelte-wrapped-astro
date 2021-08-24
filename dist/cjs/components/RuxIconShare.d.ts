import { Components } from '@astrouxds/astro-web-components';
interface RuxIconShareProps {
    /** The fill color for the icon */
    color?: Components.RuxIconShare["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconShare["size"];
}
interface RuxIconShareEvents {
}
interface RuxIconShareSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconShare extends SvelteComponent {
    $$prop_def: RuxIconShareProps;
    $$events_def: RuxIconShareEvents;
    $$slot_def: RuxIconShareSlots;
    $on<K extends keyof RuxIconShareEvents>(type: K, callback: (e: RuxIconShareEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconShareProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconShareElement | undefined;
}
export default RuxIconShare;
