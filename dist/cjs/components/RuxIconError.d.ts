import { Components } from '@astrouxds/astro-web-components';
interface RuxIconErrorProps {
    /** The fill color for the icon */
    color?: Components.RuxIconError["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconError["size"];
}
interface RuxIconErrorEvents {
}
interface RuxIconErrorSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconError extends SvelteComponent {
    $$prop_def: RuxIconErrorProps;
    $$events_def: RuxIconErrorEvents;
    $$slot_def: RuxIconErrorSlots;
    $on<K extends keyof RuxIconErrorEvents>(type: K, callback: (e: RuxIconErrorEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconErrorProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconErrorElement | undefined;
}
export default RuxIconError;
