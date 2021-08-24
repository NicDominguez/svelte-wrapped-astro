import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCheckCircleOutlineProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCheckCircleOutline["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCheckCircleOutline["size"];
}
interface RuxIconCheckCircleOutlineEvents {
}
interface RuxIconCheckCircleOutlineSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCheckCircleOutline extends SvelteComponent {
    $$prop_def: RuxIconCheckCircleOutlineProps;
    $$events_def: RuxIconCheckCircleOutlineEvents;
    $$slot_def: RuxIconCheckCircleOutlineSlots;
    $on<K extends keyof RuxIconCheckCircleOutlineEvents>(type: K, callback: (e: RuxIconCheckCircleOutlineEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCheckCircleOutlineProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCheckCircleOutlineElement | undefined;
}
export default RuxIconCheckCircleOutline;
