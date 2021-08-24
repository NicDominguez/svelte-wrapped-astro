import { Components } from '@astrouxds/astro-web-components';
interface RuxIconThumbUpProps {
    /** The fill color for the icon */
    color?: Components.RuxIconThumbUp["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconThumbUp["size"];
}
interface RuxIconThumbUpEvents {
}
interface RuxIconThumbUpSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconThumbUp extends SvelteComponent {
    $$prop_def: RuxIconThumbUpProps;
    $$events_def: RuxIconThumbUpEvents;
    $$slot_def: RuxIconThumbUpSlots;
    $on<K extends keyof RuxIconThumbUpEvents>(type: K, callback: (e: RuxIconThumbUpEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconThumbUpProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconThumbUpElement | undefined;
}
export default RuxIconThumbUp;
