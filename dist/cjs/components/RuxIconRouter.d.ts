import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRouterProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRouter["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRouter["size"];
}
interface RuxIconRouterEvents {
}
interface RuxIconRouterSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRouter extends SvelteComponent {
    $$prop_def: RuxIconRouterProps;
    $$events_def: RuxIconRouterEvents;
    $$slot_def: RuxIconRouterSlots;
    $on<K extends keyof RuxIconRouterEvents>(type: K, callback: (e: RuxIconRouterEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRouterProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRouterElement | undefined;
}
export default RuxIconRouter;
