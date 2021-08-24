import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCloudDoneProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCloudDone["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCloudDone["size"];
}
interface RuxIconCloudDoneEvents {
}
interface RuxIconCloudDoneSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCloudDone extends SvelteComponent {
    $$prop_def: RuxIconCloudDoneProps;
    $$events_def: RuxIconCloudDoneEvents;
    $$slot_def: RuxIconCloudDoneSlots;
    $on<K extends keyof RuxIconCloudDoneEvents>(type: K, callback: (e: RuxIconCloudDoneEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCloudDoneProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCloudDoneElement | undefined;
}
export default RuxIconCloudDone;
