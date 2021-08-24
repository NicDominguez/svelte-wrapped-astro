import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVolumeUpProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVolumeUp["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVolumeUp["size"];
}
interface RuxIconVolumeUpEvents {
}
interface RuxIconVolumeUpSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVolumeUp extends SvelteComponent {
    $$prop_def: RuxIconVolumeUpProps;
    $$events_def: RuxIconVolumeUpEvents;
    $$slot_def: RuxIconVolumeUpSlots;
    $on<K extends keyof RuxIconVolumeUpEvents>(type: K, callback: (e: RuxIconVolumeUpEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVolumeUpProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVolumeUpElement | undefined;
}
export default RuxIconVolumeUp;
