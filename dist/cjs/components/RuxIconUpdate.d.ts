import { Components } from '@astrouxds/astro-web-components';
interface RuxIconUpdateProps {
    /** The fill color for the icon */
    color?: Components.RuxIconUpdate["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconUpdate["size"];
}
interface RuxIconUpdateEvents {
}
interface RuxIconUpdateSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconUpdate extends SvelteComponent {
    $$prop_def: RuxIconUpdateProps;
    $$events_def: RuxIconUpdateEvents;
    $$slot_def: RuxIconUpdateSlots;
    $on<K extends keyof RuxIconUpdateEvents>(type: K, callback: (e: RuxIconUpdateEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconUpdateProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconUpdateElement | undefined;
}
export default RuxIconUpdate;
