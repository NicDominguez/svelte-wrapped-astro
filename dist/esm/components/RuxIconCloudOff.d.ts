import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCloudOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCloudOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCloudOff["size"];
}
interface RuxIconCloudOffEvents {
}
interface RuxIconCloudOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCloudOff extends SvelteComponent {
    $$prop_def: RuxIconCloudOffProps;
    $$events_def: RuxIconCloudOffEvents;
    $$slot_def: RuxIconCloudOffSlots;
    $on<K extends keyof RuxIconCloudOffEvents>(type: K, callback: (e: RuxIconCloudOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCloudOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCloudOffElement | undefined;
}
export default RuxIconCloudOff;
