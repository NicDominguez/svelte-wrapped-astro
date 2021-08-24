import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGetAppProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGetApp["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGetApp["size"];
}
interface RuxIconGetAppEvents {
}
interface RuxIconGetAppSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGetApp extends SvelteComponent {
    $$prop_def: RuxIconGetAppProps;
    $$events_def: RuxIconGetAppEvents;
    $$slot_def: RuxIconGetAppSlots;
    $on<K extends keyof RuxIconGetAppEvents>(type: K, callback: (e: RuxIconGetAppEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGetAppProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGetAppElement | undefined;
}
export default RuxIconGetApp;
