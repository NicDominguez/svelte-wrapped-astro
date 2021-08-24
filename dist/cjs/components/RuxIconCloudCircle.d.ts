import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCloudCircleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCloudCircle["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCloudCircle["size"];
}
interface RuxIconCloudCircleEvents {
}
interface RuxIconCloudCircleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCloudCircle extends SvelteComponent {
    $$prop_def: RuxIconCloudCircleProps;
    $$events_def: RuxIconCloudCircleEvents;
    $$slot_def: RuxIconCloudCircleSlots;
    $on<K extends keyof RuxIconCloudCircleEvents>(type: K, callback: (e: RuxIconCloudCircleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCloudCircleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCloudCircleElement | undefined;
}
export default RuxIconCloudCircle;
