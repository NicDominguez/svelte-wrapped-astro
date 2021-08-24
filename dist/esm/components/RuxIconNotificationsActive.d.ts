import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNotificationsActiveProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNotificationsActive["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNotificationsActive["size"];
}
interface RuxIconNotificationsActiveEvents {
}
interface RuxIconNotificationsActiveSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNotificationsActive extends SvelteComponent {
    $$prop_def: RuxIconNotificationsActiveProps;
    $$events_def: RuxIconNotificationsActiveEvents;
    $$slot_def: RuxIconNotificationsActiveSlots;
    $on<K extends keyof RuxIconNotificationsActiveEvents>(type: K, callback: (e: RuxIconNotificationsActiveEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNotificationsActiveProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNotificationsActiveElement | undefined;
}
export default RuxIconNotificationsActive;
