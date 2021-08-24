import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCloudProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCloud["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCloud["size"];
}
interface RuxIconCloudEvents {
}
interface RuxIconCloudSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCloud extends SvelteComponent {
    $$prop_def: RuxIconCloudProps;
    $$events_def: RuxIconCloudEvents;
    $$slot_def: RuxIconCloudSlots;
    $on<K extends keyof RuxIconCloudEvents>(type: K, callback: (e: RuxIconCloudEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCloudProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCloudElement | undefined;
}
export default RuxIconCloud;
