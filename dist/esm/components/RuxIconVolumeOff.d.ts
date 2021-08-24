import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVolumeOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVolumeOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVolumeOff["size"];
}
interface RuxIconVolumeOffEvents {
}
interface RuxIconVolumeOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVolumeOff extends SvelteComponent {
    $$prop_def: RuxIconVolumeOffProps;
    $$events_def: RuxIconVolumeOffEvents;
    $$slot_def: RuxIconVolumeOffSlots;
    $on<K extends keyof RuxIconVolumeOffEvents>(type: K, callback: (e: RuxIconVolumeOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVolumeOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVolumeOffElement | undefined;
}
export default RuxIconVolumeOff;
