import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTrafficProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTraffic["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTraffic["size"];
}
interface RuxIconTrafficEvents {
}
interface RuxIconTrafficSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTraffic extends SvelteComponent {
    $$prop_def: RuxIconTrafficProps;
    $$events_def: RuxIconTrafficEvents;
    $$slot_def: RuxIconTrafficSlots;
    $on<K extends keyof RuxIconTrafficEvents>(type: K, callback: (e: RuxIconTrafficEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTrafficProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTrafficElement | undefined;
}
export default RuxIconTraffic;
