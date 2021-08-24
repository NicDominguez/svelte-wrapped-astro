import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSyncDisabledProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSyncDisabled["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSyncDisabled["size"];
}
interface RuxIconSyncDisabledEvents {
}
interface RuxIconSyncDisabledSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSyncDisabled extends SvelteComponent {
    $$prop_def: RuxIconSyncDisabledProps;
    $$events_def: RuxIconSyncDisabledEvents;
    $$slot_def: RuxIconSyncDisabledSlots;
    $on<K extends keyof RuxIconSyncDisabledEvents>(type: K, callback: (e: RuxIconSyncDisabledEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSyncDisabledProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSyncDisabledElement | undefined;
}
export default RuxIconSyncDisabled;
