import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRingVolumeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRingVolume["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRingVolume["size"];
}
interface RuxIconRingVolumeEvents {
}
interface RuxIconRingVolumeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRingVolume extends SvelteComponent {
    $$prop_def: RuxIconRingVolumeProps;
    $$events_def: RuxIconRingVolumeEvents;
    $$slot_def: RuxIconRingVolumeSlots;
    $on<K extends keyof RuxIconRingVolumeEvents>(type: K, callback: (e: RuxIconRingVolumeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRingVolumeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRingVolumeElement | undefined;
}
export default RuxIconRingVolume;
