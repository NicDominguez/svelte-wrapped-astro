import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSubscriptionsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSubscriptions["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSubscriptions["size"];
}
interface RuxIconSubscriptionsEvents {
}
interface RuxIconSubscriptionsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSubscriptions extends SvelteComponent {
    $$prop_def: RuxIconSubscriptionsProps;
    $$events_def: RuxIconSubscriptionsEvents;
    $$slot_def: RuxIconSubscriptionsSlots;
    $on<K extends keyof RuxIconSubscriptionsEvents>(type: K, callback: (e: RuxIconSubscriptionsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSubscriptionsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSubscriptionsElement | undefined;
}
export default RuxIconSubscriptions;
