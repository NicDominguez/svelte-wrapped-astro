import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNotificationsNoneProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNotificationsNone["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNotificationsNone["size"];
}
interface RuxIconNotificationsNoneEvents {
}
interface RuxIconNotificationsNoneSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNotificationsNone extends SvelteComponent {
    $$prop_def: RuxIconNotificationsNoneProps;
    $$events_def: RuxIconNotificationsNoneEvents;
    $$slot_def: RuxIconNotificationsNoneSlots;
    $on<K extends keyof RuxIconNotificationsNoneEvents>(type: K, callback: (e: RuxIconNotificationsNoneEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNotificationsNoneProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNotificationsNoneElement | undefined;
}
export default RuxIconNotificationsNone;
