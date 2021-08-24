import { Components } from '@astrouxds/astro-web-components';
interface RuxIconUnsubscribeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconUnsubscribe["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconUnsubscribe["size"];
}
interface RuxIconUnsubscribeEvents {
}
interface RuxIconUnsubscribeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconUnsubscribe extends SvelteComponent {
    $$prop_def: RuxIconUnsubscribeProps;
    $$events_def: RuxIconUnsubscribeEvents;
    $$slot_def: RuxIconUnsubscribeSlots;
    $on<K extends keyof RuxIconUnsubscribeEvents>(type: K, callback: (e: RuxIconUnsubscribeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconUnsubscribeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconUnsubscribeElement | undefined;
}
export default RuxIconUnsubscribe;
