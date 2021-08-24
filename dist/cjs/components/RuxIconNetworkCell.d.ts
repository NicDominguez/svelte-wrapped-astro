import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNetworkCellProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNetworkCell["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNetworkCell["size"];
}
interface RuxIconNetworkCellEvents {
}
interface RuxIconNetworkCellSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNetworkCell extends SvelteComponent {
    $$prop_def: RuxIconNetworkCellProps;
    $$events_def: RuxIconNetworkCellEvents;
    $$slot_def: RuxIconNetworkCellSlots;
    $on<K extends keyof RuxIconNetworkCellEvents>(type: K, callback: (e: RuxIconNetworkCellEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNetworkCellProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNetworkCellElement | undefined;
}
export default RuxIconNetworkCell;
