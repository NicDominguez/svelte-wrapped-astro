import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTodayProps {
    /** The fill color for the icon */
    color?: Components.RuxIconToday["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconToday["size"];
}
interface RuxIconTodayEvents {
}
interface RuxIconTodaySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconToday extends SvelteComponent {
    $$prop_def: RuxIconTodayProps;
    $$events_def: RuxIconTodayEvents;
    $$slot_def: RuxIconTodaySlots;
    $on<K extends keyof RuxIconTodayEvents>(type: K, callback: (e: RuxIconTodayEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTodayProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTodayElement | undefined;
}
export default RuxIconToday;
