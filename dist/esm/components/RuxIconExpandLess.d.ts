import { Components } from '@astrouxds/astro-web-components';
interface RuxIconExpandLessProps {
    /** The fill color for the icon */
    color?: Components.RuxIconExpandLess["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconExpandLess["size"];
}
interface RuxIconExpandLessEvents {
}
interface RuxIconExpandLessSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconExpandLess extends SvelteComponent {
    $$prop_def: RuxIconExpandLessProps;
    $$events_def: RuxIconExpandLessEvents;
    $$slot_def: RuxIconExpandLessSlots;
    $on<K extends keyof RuxIconExpandLessEvents>(type: K, callback: (e: RuxIconExpandLessEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconExpandLessProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconExpandLessElement | undefined;
}
export default RuxIconExpandLess;
