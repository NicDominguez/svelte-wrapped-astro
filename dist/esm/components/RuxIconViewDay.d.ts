import { Components } from '@astrouxds/astro-web-components';
interface RuxIconViewDayProps {
    /** The fill color for the icon */
    color?: Components.RuxIconViewDay["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconViewDay["size"];
}
interface RuxIconViewDayEvents {
}
interface RuxIconViewDaySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconViewDay extends SvelteComponent {
    $$prop_def: RuxIconViewDayProps;
    $$events_def: RuxIconViewDayEvents;
    $$slot_def: RuxIconViewDaySlots;
    $on<K extends keyof RuxIconViewDayEvents>(type: K, callback: (e: RuxIconViewDayEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconViewDayProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconViewDayElement | undefined;
}
export default RuxIconViewDay;
