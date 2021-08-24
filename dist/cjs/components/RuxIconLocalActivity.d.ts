import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalActivityProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalActivity["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalActivity["size"];
}
interface RuxIconLocalActivityEvents {
}
interface RuxIconLocalActivitySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalActivity extends SvelteComponent {
    $$prop_def: RuxIconLocalActivityProps;
    $$events_def: RuxIconLocalActivityEvents;
    $$slot_def: RuxIconLocalActivitySlots;
    $on<K extends keyof RuxIconLocalActivityEvents>(type: K, callback: (e: RuxIconLocalActivityEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalActivityProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalActivityElement | undefined;
}
export default RuxIconLocalActivity;
