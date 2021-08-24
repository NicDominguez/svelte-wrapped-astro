import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRefreshProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRefresh["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRefresh["size"];
}
interface RuxIconRefreshEvents {
}
interface RuxIconRefreshSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRefresh extends SvelteComponent {
    $$prop_def: RuxIconRefreshProps;
    $$events_def: RuxIconRefreshEvents;
    $$slot_def: RuxIconRefreshSlots;
    $on<K extends keyof RuxIconRefreshEvents>(type: K, callback: (e: RuxIconRefreshEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRefreshProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRefreshElement | undefined;
}
export default RuxIconRefresh;
