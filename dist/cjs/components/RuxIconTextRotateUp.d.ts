import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTextRotateUpProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTextRotateUp["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTextRotateUp["size"];
}
interface RuxIconTextRotateUpEvents {
}
interface RuxIconTextRotateUpSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTextRotateUp extends SvelteComponent {
    $$prop_def: RuxIconTextRotateUpProps;
    $$events_def: RuxIconTextRotateUpEvents;
    $$slot_def: RuxIconTextRotateUpSlots;
    $on<K extends keyof RuxIconTextRotateUpEvents>(type: K, callback: (e: RuxIconTextRotateUpEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTextRotateUpProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTextRotateUpElement | undefined;
}
export default RuxIconTextRotateUp;
